import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { axiosInstance } from "../../config/axios";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import styled from "@emotion/styled";
import { Civil_Works_Key } from "../../helper/constant/Constant";
import { MainSnackBar } from "../ui/MainSnackBar";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { Button } from "@mui/material";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import customLoadingCellRenderer from "./customLoadingCellRenderer";

ModuleRegistry.registerModules([AllCommunityModule]);

export const MainGridTable = ({
  column = [],
  // row = [],
  index,
  getDataUrl = "",
}) => {
  const [loading, setLoading] = useState(false);
  const [rowData, setRowData] = useState([]);
  const gridRef = useRef();

  const [columnDefs, setColumnDefs] = useState(column);

  const [pagination, setPagination] = useState({
    currentPage: 1,
    pageSize: 40,
    totalItems: 0,
  });
  // Состояние фильтров и сортировки
  const [gridState, setGridState] = useState({
    filterModel: {},
    sortModel: [],
  });

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const params = {
        page: pagination.currentPage - 1,
        pageSize: pagination.pageSize,
        filter: [],
        sort: {
          key: "",
          value: "",
        },
        dataName: index,
      };
      let data = [];

      let sortData = {
        key: "",
        value: "",
      };

      if (gridState?.sortModel?.length > 0) {
        let indexKey = +gridState?.sortModel[0]?.colId;
        let key = Civil_Works_Key[indexKey];
        sortData.key = key;
        sortData.value = gridState?.sortModel[0].sort;
      }
      let sizeFilter = Object.keys(gridState?.filterModel)?.length;
      let keyObj = Object.keys(gridState?.filterModel);

      for (let i = 0; i < sizeFilter; i++) {
        let obj = {
          listColumn: [],
          operator: "",
        };
        let key = Civil_Works_Key[+keyObj[i]];
        if (gridState?.filterModel[keyObj[i]]?.filterType != null) {
          if (gridState?.filterModel[keyObj[i]]?.operator === "AND") {
            for (
              let k = 0;
              k < gridState.filterModel[keyObj[i]]?.conditions?.length;
              k++
            ) {
              const element = gridState.filterModel[keyObj[i]]?.conditions[k];
              let listObj = {
                type: "",
                value: "",
                to: "",
                key: "",
                filterType: "",
              };
              listObj.filterType = element.filterType;
              if (element.filterType === "date") {
                listObj.value = element?.dateFrom?.split("T")[0] || "";
                listObj.to = element?.dateTo?.split("T")[0] || "";
              } else {
                listObj.value = element.filter || "";
                listObj.to = element?.filterTo || "";
              }
              listObj.type = element.type;
              listObj.key = key;
              obj.operator = "AND";
              obj.listColumn.push(listObj);
            }
            data.push(obj);
          } else if (gridState.filterModel[keyObj[i]]?.operator === "OR") {
            for (
              let k = 0;
              k < gridState.filterModel[keyObj[i]]?.conditions.length;
              k++
            ) {
              const element = gridState.filterModel[keyObj[i]]?.conditions[k];
              let listObj = {
                type: "",
                value: "",
                to: "",
                key: "",
                filterType: "",
              };
              listObj.type = element.type;
              listObj.filterType = element.filterType;
              if (element.filterType === "date") {
                listObj.value = element.dateFrom?.split("T")[0] || "";
                listObj.to = element?.dateTo?.split("T")[0] || "";
              } else {
                listObj.value = element.filter || "";
                listObj.to = element?.filterTo || "";
              }
              listObj.key = key;
              obj.listColumn.push(listObj);
              obj.operator = "OR";
            }
            data.push(obj);
          } else {
            let listObj = {
              type: "",
              value: "",
              to: "",
              key: "",
              filterType: "",
            };
            listObj.key = key;
            listObj.type = gridState.filterModel[keyObj[i]]?.type;
            listObj.filterType = gridState.filterModel[keyObj[i]]?.filterType;
            if (gridState.filterModel[keyObj[i]]?.filterType === "date") {
              listObj.value =
                gridState.filterModel[keyObj[i]]?.dateFrom?.split("T")[0] || "";
              listObj.to =
                gridState.filterModel[keyObj[i]]?.dateTo?.split("T")[0] || "";
            } else {
              listObj.value = gridState.filterModel[keyObj[i]]?.filter || "";
              listObj.to = gridState.filterModel[keyObj[i]]?.filterTo || "";
            }
            obj.listColumn.push(listObj);
            obj.operator = "NONE";
            data.push(obj);
          }
        }
      }
      params.filter = data;
      params.sort = sortData;
      console.log(params);
      localStorage.setItem(
        "params_for_filter_" + index,
        JSON.stringify(params)
      );
      axiosInstance
        .post(getDataUrl, params)
        .then((response) => {
          setRowData(response.data?.data || []);
          setPagination((prev) => ({
            ...prev,
            totalItems: response.data.totalElements,
          }));
        })
        .catch((error) => {
          // MainSnackBar.error(
          //   "При получении данных что-то пошло не так!" + error
          // );
        });
    } catch (error) {
      // MainSnackBar.error("При получении данных что-то пошло не так!" + error);
    } finally {
      setLoading(false);
    }
  }, [pagination.currentPage, pagination.pageSize, gridState]);

  const [gridApi, setGridApi] = useState(null);
  const isFirstLoad = useRef(true);

  const saveFilters = useCallback(() => {
    if (gridApi) {
      let savedFilters =
        JSON.parse(localStorage.getItem("agGridFilterModel" + index)) || {};
      savedFilters[index] = {
        filterModel: gridApi?.getFilterModel(),
      };
      localStorage.setItem(
        "agGridFilterModel" + index,
        JSON.stringify(savedFilters)
      );
    }
  }, [gridApi]);

  const restoreFilters = useCallback(() => {
    if (!gridApi || !isFirstLoad.current) return;

    try {
      const savedFilters = localStorage.getItem("agGridFilterModel" + index);
      if (savedFilters) {
        const filterModel = JSON.parse(savedFilters);

        // Важно: восстановление только после готовности колонок
        const interval = setInterval(() => {
          if (gridApi.getColumnDefs().length > 0) {
            clearInterval(interval);
            gridApi.setFilterModel(filterModel[index]?.filterModel);
            isFirstLoad.current = false;
          }
        }, 10);
      }
    } catch (e) {
      console.error("Failed to restore filters:", e);
    }
  }, [gridApi]);

  const handleClearFilters = () => {
    gridApi.setFilterModel(null);
    localStorage.removeItem("agGridFilterModel" + index);
  };

  const onGridReady = (params) => {
    setGridApi(params.api);
    restoreFilters();
  };

  const handleCellClicked = (params) => {
    const cellValue = params.value;
    if (cellValue != null) {
      navigator.clipboard.writeText(String(cellValue));
      MainSnackBar.info("Значение скопировано!");
    }
  };
  // Обработчик изменения фильтров
  const onFilterChanged = useCallback(() => {
    const filterModel = gridRef.current.api.getFilterModel();
    setGridState((prev) => ({ ...prev, filterModel }));
    setPagination((prev) => ({ ...prev, currentPage: 1 })); // Сброс на первую страницу
    saveFilters();
    // fetchData();
  }, [saveFilters]);

  const onSortChanged = useCallback(() => {
    // Проверяем, что gridRef и API существуют
    if (!gridRef.current || !gridRef.current.api) {
      console.error("AG Grid API не готов!");
      return;
    }
    setGridState((p) => ({
      ...p,
      sortModel: gridRef.current.api.getState()?.sort?.sortModel,
    }));
    setPagination((prev) => ({ ...prev, currentPage: 1 }));
    // fetchData();
  }, []);
  // }, [fetchData]);

  const defaultColDef = useMemo(() => {
    return {
      filter: "agTextColumnFilter",
      floatingFilter: true,
    };
  }, []);

  const handlePageChange = (newPage) => {
    setPagination((prev) => ({ ...prev, currentPage: newPage }));
  };

  // Загружаем данные при монтировании
  useEffect(() => {
    if (gridApi) {
      restoreFilters();
    }
  }, [gridApi, restoreFilters]);

  useEffect(() => {
    fetchData();
  }, [fetchData, localStorage.getItem("params_for_filter_" + index)]);

  const loadingCellRenderer = useCallback(customLoadingCellRenderer, []);
  const loadingCellRendererParams = useMemo(() => {
    return {
      loadingMessage: "One moment please...",
    };
  }, []);

  return (
    <WrapperAll>
      <span className="ag_grid_box_wrapper">
        <Button onClick={handleClearFilters} className="clear_all_filter_btn">
          <FilterAltOffIcon />
        </Button>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          loadingCellRenderer={loadingCellRenderer}
          loadingCellRendererParams={loadingCellRendererParams}
          onGridReady={onGridReady}
          onFilterChanged={onFilterChanged}
          onSortChanged={onSortChanged}
          suppressPaginationPanel={true}
          onCellClicked={handleCellClicked}
          suppressColumnVirtualisation={true}
          pagination={true}
          paginationPageSize={pagination.pageSize}
        />
      </span>
      <div className="pagination_controls_wrapper">
        <button
          onClick={() => handlePageChange(pagination.currentPage - 1)}
          disabled={pagination.currentPage === 1 || loading}
        >
          <KeyboardDoubleArrowLeftIcon />
        </button>

        <span>
          Page {pagination.currentPage} from{" "}
          {Math.ceil(pagination.totalItems / pagination.pageSize)}
        </span>

        <button
          onClick={() => handlePageChange(pagination.currentPage + 1)}
          disabled={
            pagination.currentPage * pagination.pageSize >=
              pagination.totalItems || loading
          }
        >
          <KeyboardDoubleArrowLeftIcon className="turn_icon" />
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
          {[40, 60, 80, 100].map((size) => (
            <option key={size} value={size}>
              {size} on page
            </option>
          ))}
        </select>
      </div>
    </WrapperAll>
  );
};
const WrapperAll = styled("span")`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
  .clear_all_filter_btn {
    position: absolute;
    top: 8px;
    right: 15px;
    z-index: 99;
    min-width: 20px;
    background: #e3eefbc9;
  }
  .ag_grid_box_wrapper {
    height: 100%;
    width: 100%;
  }
  .pagination_controls_wrapper {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-right: 20px;
    button {
      padding: 1px 3px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    select {
      font-size: 16px;
      outline: none;
      border: none;
      cursor: pointer;
    }
    span {
      font-size: 16px;
    }
  }
  .turn_icon {
    transform: rotate(180deg);
  }
`;
