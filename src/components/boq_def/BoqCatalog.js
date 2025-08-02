import React from "react";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import { axiosInstance } from "../../config/axios";
import UploadFileBtn from "./UploadFileBtn";
import { MainSnackBar } from "../ui/MainSnackBar";

function BoqCatalog({ date = "25.07.2025" }) {
  const onclick = async () => {
    axiosInstance
      .get("download/catalog/download_xlsx", {
        responseType: "blob",
      })
      .then((res) => {
        const url = window.URL.createObjectURL(
          new Blob([res.data], {
            type: "application/vnd.ms-excel.sheet.binary.macroEnabled.12",
          })
        );
        const link = document.createElement("a");
        let date = new Date();
        let fileName = "BOQ_Catalog_" + date.toLocaleDateString() + ".xlsx";
        link.href = url;
        link.setAttribute("download", fileName); // Указываем имя файла
        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((e) => {
        MainSnackBar.error("Что-то пошло не так, попробуйте позже!");
      });
  };

  return (
    <WrapperAll>
      <h4>BOQ Catalog</h4>
      <div className="refresh_date_box">
        <p>Refresh date</p>
        <p>{date}</p>
      </div>
      <div className="btn_excel_file_pr">
          <UploadFileBtn title="Refresh file" url="catalog/upload" />
        <Button
          sx={{ textTransform: "none" }}
          onClick={onclick}
          variant="contained"
        >
          Download file
        </Button>
      </div>
    </WrapperAll>
  );
}
export default BoqCatalog;
const WrapperAll = styled("div")`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 15px;
  border: 1px solid grey;
  border-radius: 5px;
  h4 {
    width: 120px;
  }
  .btn_excel_file_pr {
    display: flex;
    gap: 20px;
  }
  .refresh_date_box {
    width: 100px;
  }
`;
