import React, { useState, useCallback, useRef } from "react";
import { AgGridReact } from "ag-grid-react";


const ServerSideGrid = () => {
  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(false);
  const gridRef = useRef();

  // Состояние пагинации
  const [pagination, setPagination] = useState({
    currentPage: 1,
    pageSize: 100,
    totalItems: 0,
  });

  // Состояние фильтров и сортировки
  const [gridState, setGridState] = useState({
    filterModel: {},
    sortModel: [],
  });

  // Функция для загрузки данных с сервера
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const params = {
        page: pagination.currentPage,
        pageSize: pagination.pageSize,
        filters: JSON.stringify(gridState.filterModel),
        sort: JSON.stringify(gridState.sortModel),
      };

      const response = await fetch(`/api/data?${new URLSearchParams(params)}`);
      const { data, total } = await response.json();

      setRowData(data);
      setPagination((prev) => ({ ...prev, totalItems: total }));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, [pagination.currentPage, pagination.pageSize, gridState]);

  // Обработчик изменения фильтров
  const onFilterChanged = useCallback(() => {
    const filterModel = gridRef.current.api.getFilterModel();
    setGridState((prev) => ({ ...prev, filterModel }));
    setPagination((prev) => ({ ...prev, currentPage: 1 })); // Сброс на первую страницу
    fetchData();
  }, [fetchData]);

  // Обработчик изменения сортировки
  const onSortChanged = useCallback(() => {
    const sortModel = gridRef.current.api.getSortModel();
    setGridState((prev) => ({ ...prev, sortModel }));
    fetchData();
  }, [fetchData]);

  // Обработчик изменения страницы
  const handlePageChange = (newPage) => {
    setPagination((prev) => ({ ...prev, currentPage: newPage }));
    fetchData();
  };
  const CustomHeaderWithInput = (props) => {
    const onInputChange = (e) => {
      const filterInstance = props.api.getFilterInstance(props.column.getColId());
      filterInstance.setModel({
        type: 'contains',
        filter: e.target.value,
      });
      props.api.onFilterChanged();
    };
  
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span>{props.displayName}</span>
        <input
          type="text"
          placeholder="Search..."
          onChange={onInputChange}
          style={{ marginTop: '4px', padding: '4px' }}
        />
      </div>
    );
  };

  // Колонки grid
  const [columnDefs] = useState([
    {
      field: "id",
      headerComponent: CustomHeaderWithInput, // Заменяем стандартный header
      filter: 'agTextColumnFilter',
    },
    {
      field: "name",
      headerComponent: CustomHeaderWithInput, // Заменяем стандартный header
      filter: 'agTextColumnFilter',
    },
    { field: "price", filter: "agNumberColumnFilter" },
    { field: "status", filter: "agSetColumnFilter" },
  ]);

  // Загружаем данные при монтировании
  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="ag-theme-alpine" style={{ height: 600, width: "100%" }}>
      <AgGridReact
        ref={gridRef}
        columnDefs={columnDefs}
        rowData={rowData}
        onFilterChanged={onFilterChanged}
        onSortChanged={onSortChanged}
        suppressPaginationPanel={true} // Отключаем встроенную пагинацию
        pagination={true}
        paginationPageSize={pagination.pageSize}
      />

      {/* Кастомная пагинация */}
      <div className="pagination-controls">
        <button
          onClick={() => handlePageChange(pagination.currentPage - 1)}
          disabled={pagination.currentPage === 1 || loading}
        >
          Назад
        </button>

        <span>
          Страница {pagination.currentPage} из{" "}
          {Math.ceil(pagination.totalItems / pagination.pageSize)}
        </span>

        <button
          onClick={() => handlePageChange(pagination.currentPage + 1)}
          disabled={
            pagination.currentPage * pagination.pageSize >=
              pagination.totalItems || loading
          }
        >
          Вперед
        </button>

        <select
          value={pagination.pageSize}
          onChange={(e) => {
            setPagination((prev) => ({
              ...prev,
              pageSize: Number(e.target.value),
              currentPage: 1,
            }));
            fetchData();
          }}
          disabled={loading}
        >
          {[10, 20, 50, 100].map((size) => (
            <option key={size} value={size}>
              {size} на странице
            </option>
          ))}
        </select>
      </div>

      {loading && <div className="loading-indicator">Загрузка...</div>}
    </div>
  );
};

export default ServerSideGrid;
