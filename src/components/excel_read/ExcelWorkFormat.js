import React from 'react';
import { utils, writeFile } from 'xlsx';
import { style } from 'xlsx-style';

const ComplexExcelExport = () => {
  const exportToExcel = () => {
    // Создаем новую книгу
    const wb = utils.book_new();
    
    // Создаем данные для листа
    const ws_data = [
      // Первая строка с объединенными ячейками
      ["COMPONE", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "2022"],
      // Вторая строка с заголовками
      ["muro", "wermeno", "score", "Maer", "wano", "seats", "lowe anual", "mrTRE/", "NTRS!", "rag nor", "gry,", "unity", "weiourxa", "rorMuL/", "ators!"],
      // Третья строка
      ["TS soar", "\"sows", "Neto", "sure", "Crane", "ome", "come ye", "ER", "CR人", "xoneo", "eqmmua", "\" Bec", "Kr", "corm", "contract"],
      // Пустая строка
      [""],
      // Строка с объединенными ячейками
      ["(一日  1 |二  2 1-  二  4 一  5 \\-f6  二  7 |二  8-8  = 10 一 人一    全 二 4 -fis  = 16 二 全 - fis  = 19 二 20 | -f2t  = 22 -                   29 二"]
    ];
    
    // Создаем рабочий лист
    const ws = utils.aoa_to_sheet(ws_data);
    
    // Добавляем объединение ячеек
    ws["!merges"] = [
      // Объединяем ячейки для первой строки
      { s: { r: 0, c: 0 }, e: { r: 0, c: 14 } }, // COMPONE
      { s: { r: 0, c: 15 }, e: { r: 0, c: 15 } }, // 2022
      
      // Объединяем ячейки для последней строки
      { s: { r: 4, c: 0 }, e: { r: 4, c: 15 } }
    ];
    
    // Применяем стили
    const wsStyles = {
      // Стиль для первой строки
      "A1": { 
        font: { bold: true, sz: 14 },
        alignment: { horizontal: "center" },
        fill: { fgColor: { rgb: "D3D3D3" } }
      },
      "P1": {
        font: { bold: true, sz: 14 },
        alignment: { horizontal: "center" }
      },
      
      // Стиль для заголовков
      "A2:P2": {
        font: { bold: true },
        alignment: { horizontal: "center" },
        border: {
          bottom: { style: "medium", color: { rgb: "000000" } }
        }
      },
      
      // Стиль для данных
      "A3:P3": {
        alignment: { horizontal: "center" }
      },
      
      // Стиль для последней строки
      "A5": {
        font: { bold: true },
        alignment: { horizontal: "center" },
        fill: { fgColor: { rgb: "F0F0F0" } }
      }
    };
    
    // Применяем стили к ячейкам
    Object.keys(wsStyles).forEach(cell => {
      if (!ws[cell]) ws[cell] = {};
      ws[cell].s = wsStyles[cell];
    });
    
    // Добавляем рабочий лист в книгу
    utils.book_append_sheet(wb, ws, "ComplexSheet");
    
    // Записываем файл
    writeFile(wb, "complex_format.xlsx");
  };

  return (
    <div>
      <button 
        onClick={exportToExcel}
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Скачать Excel с сложным форматированием
      </button>
    </div>
  );
};

export default ComplexExcelExport;