import React, { useEffect, useRef, useState } from "react";
import * as XLSX from "xlsx";
import { useSnackbar } from "notistack";
import { useQtyValidation, useUniqueCheck } from "../../helper/CheckHook";
import { SnackbarVariant } from "../../helper/constant/Constant";
import { Button } from "@mui/material";

const work_title = [
  "uniq_tag_boq_code",
  "titul_no",
  "subtitle_no",
  "scope",
  "drawing_number",
  "rev_no",
  "change_number",
  "dwg_status",
  "component_type",
  "unique_tag",
  "component_tag",
  "tag_no",
  "boq_code",
  "description_en_ru",
  "qty",
  "unit",
  "weight",
  "formul",
  "tq_number",
  "notes",
  "access_id",
  "r_awp",
  "record_date",
  "responsible",
  "iwp_type",
  "iwp_adi",
  "construction_start",
  "construction_finish",
  "contract",
];
const material_title = [
  "titul_no",
  "titul_subtitule_no",
  "drawing_number",
  "scope",
  "component_type",
  "unique_tag",
  "material_description_example",
  "ident_no",
  "ident_kod",
  "length_mm",
  "size1_mm",
  "class1",
  "rebar_bend_profile_number",
  "item_quantity_1_from_item_in_column_g",
  "item_quantity_1_unit_from_item_in_column_g",
  "item_quantity_2_secondary_qty",
  "item_quantity_2_unit_secondary_qty",
  "total_length_meter",
  "total_item_quantity",
  "total_item_quantity_unit",
  "typical_name",
  "typical_name_qty",
  "access_id",
  "ediType",
];

// needKey
// editValue
const ExcelReaderCivil = ({ getJson = () => {}, titlBtn }) => {
  const [jsonData, setJsonData] = useState({
    works: [],
    material: [],
    info: [],
  });
  console.log(jsonData, "jsonData");

  const fileInputRef = useRef(null);
  const { enqueueSnackbar } = useSnackbar();

  const handleButtonClick = () => fileInputRef.current.click();

  // parse Excel file to json
  const getData = (
    workbook,
    type,
    result,
    title,
    index,
    minus,
    info,
    tableName
  ) => {
    const worksheet = workbook.Sheets[workbook.SheetNames[type]];
    const range = XLSX.utils.decode_range(worksheet["!ref"]);
    for (let row = range.s.r + index; row <= range.e.r; row++) {
      const rowData = {
        id: 0,
        editItemLists: [],
      };

      for (let col = range.s.c; col <= range.e.c; col++) {
        const cellAddress = XLSX.utils.encode_cell({ r: row, c: col });
        const cell = worksheet[cellAddress];
        if (col > 22 && minus) {
          if (cell?.z === "m/d/yy") {
            rowData[title[col - 1]] = cell.w ?? null;
          } else {
            rowData[title[col - 1]] = cell?.v ?? null;
          }
        } else {
          if (cell?.z === "m/d/yy") {
            rowData[title[col]] = cell.w ?? null;
          } else {
            rowData[title[col]] = cell?.v ?? null;
          }
        }
        if (cell && cell?.s) {
          switch (cell?.s?.fgColor?.rgb) {
            case "92D050":
              rowData.editType = "ADD";
              break;
            case "70AD47":
              rowData.editType = "ADD";
              break;
            case "E2EFDA":
              rowData.editType = "ADD";
              break;
            case "E2F0D9":
              rowData.editType = "ADD";
              break;
            case "C6E0B4":
              rowData.editType = "ADD";
              break;
            case "C5E0B4":
              rowData.editType = "ADD";
              break;
            case "A9D08E":
              rowData.editType = "ADD";
              break;
            case "548235":
              rowData.editType = "ADD";
              break;
            case "00B050":
              rowData.editType = "ADD";
              break;
            case "EE0000":
              rowData.editType = "DELETE";
              break;
            case "C00000":
              rowData.editType = "DELETE";
              break;
            case "FFFF00":
              rowData.editType = "EDIT";
              let obj = {
                editValue: null,
                needKey: null,
              };
              if (col > 22 && minus) {
                if (cell?.z === "m/d/yy") {
                  obj.editValue = cell.w ?? null;
                } else {
                  obj.editValue = cell?.v ?? null;
                }
                obj.needKey = title[col - 1];
              } else {
                if (cell?.z === "m/d/yy") {
                  obj.editValue = cell.w ?? null;
                } else {
                  obj.editValue = cell?.v ?? null;
                }
                obj.needKey = title[col];
              }
              rowData.editItemLists.push(obj);
              break;
            default:
          }
        }
      }
      if (rowData?.editType === "ADD") {
        info.add += 1;
      } else if (rowData?.editType === "EDIT") {
        info.edit += 1;
      } else if (rowData?.editType === "DELETE") {
        info.delete += 1;
      }
      if (tableName === "works") {
        rowData.responsible = info?.responsible;
        rowData.record_date = info?.date;
      }
      rowData.editItemLists = rowData.editItemLists.filter(
        (i) => i?.editValue != null
      );
      result[tableName].push(rowData);
    }
  };
  const getDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Месяцы 0-11
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  // parse Excel file to json
  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, {
        type: "binary",
        cellStyles: true,
        cellHTML: true,
        dateNF: "yyyy-mm-dd",
      });
      let works = workbook?.SheetNames.indexOf("WORKS");
      let material = workbook?.SheetNames.indexOf("MATERIAL");
      const result = {
        works: [],
        material: [],
        info: [],
      };
      const civil_info_works = {
        id: 0,
        responsible: "", //props
        link: "",
        change_info: "", // file name
        add: 0, // num
        edit: 0, // num
        delete: 0, // num
        date: "", //props
        status: "", // OK / ERROR / PENDING
        type: "", // WORKS / MATERIAL / CABLE
      };
      civil_info_works.change_info = file?.name;
      civil_info_works.date = getDate(new Date(workbook.Props.ModifiedDate));
      civil_info_works.responsible = workbook.Props.LastAuthor;
      civil_info_works.status = "PENDING";

      const civil_info_material = {
        id: 0,
        responsible: "", //props
        link: "",
        change_info: "", // file name
        add: 0, // num
        edit: 0, // num
        delete: 0, // num
        date: "", //props
        status: "", // OK / ERROR / PENDING
        type: "", // WORKS / MATERIAL / CABLE
      };
      civil_info_material.change_info = file?.name;
      civil_info_material.date = getDate(new Date(workbook.Props.ModifiedDate));
      civil_info_material.responsible = workbook.Props.LastAuthor;
      civil_info_material.status = "PENDING";
      if (works >= 0) {
        civil_info_works.type = "WORKS";
        getData(
          workbook,
          works,
          result,
          work_title,
          4,
          true,
          civil_info_works,
          "works"
        );
        result.info.push(civil_info_works);
      }
      if (material >= 0) {
        civil_info_material.type = "MATERIAL";
        getData(
          workbook,
          material,
          result,
          material_title,
          2,
          false,
          civil_info_material,
          "material"
        );
        result.info.push(civil_info_material);
      }
      setJsonData(result);
    };
    reader.readAsBinaryString(file);
  };

  //CIVIL WORKS TABLE FUNC
  // check UNIQUE TAG BOQ CODE
  let uniqTagBoqCode = useUniqueCheck(jsonData?.works, "uniq_tag_boq_code");
  if (!uniqTagBoqCode) {
    enqueueSnackbar(
      "There are duplicates in the table WORKS(col. first column), please check and send again!",
      {
        variant: SnackbarVariant.error,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
        autoHideDuration: 3000,
      }
    );
  }

  // check ACCESS_ID
  let uniqWorkAccessId = useUniqueCheck(jsonData?.works, "access_id");
  if (!uniqWorkAccessId) {
    enqueueSnackbar(
      "There are duplicates in the table WORKS(col. ACCESS ID), please check and send again!",
      {
        variant: SnackbarVariant.error,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
        autoHideDuration: 3000,
      }
    );
  }

  // control UNIQUE TAG to correct ??

  // control QTY to correct
  let isValid = useQtyValidation(jsonData.works, "qty");
  if (!isValid) {
    enqueueSnackbar(
      "Incorrect data in the quantity column on table WORKS, please check and send again!",
      {
        variant: SnackbarVariant.error,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
        autoHideDuration: 3000,
      }
    );
  }

  //CIVIL MATERIAL TABLE FUNC
  //check ACCESS_ID
  let uniqAccessId = useUniqueCheck(jsonData?.material, "access_id");
  if (!uniqAccessId) {
    enqueueSnackbar(
      "There are duplicates in the table MATERIAL(col. ACCESS ID), please check and send again!",
      {
        variant: SnackbarVariant.error,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
        autoHideDuration: 3000,
      }
    );
  }
  useEffect(() => {
    if (uniqTagBoqCode && uniqAccessId && isValid && uniqWorkAccessId) {
      getJson(jsonData);
    }
  }, [uniqTagBoqCode, uniqWorkAccessId, isValid, uniqAccessId]);
  return (
    <>
      <input
        ref={fileInputRef}
        style={{ display: "none" }}
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
      />
      <Button
        variant="contained"
        sx={{ textTransform: "none" }}
        onClick={handleButtonClick}
      >
        {titlBtn}
      </Button>
    </>
  );
};
export default ExcelReaderCivil;
