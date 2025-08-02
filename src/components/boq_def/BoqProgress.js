import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { axiosInstance } from "../../config/axios";
import { MainSnackBar } from "../ui/MainSnackBar";

function BoqProgress() {
  const onClickInlineProgress = async () => {
    MainSnackBar.info("Начато действие для скачивание!");
    axiosInstance
      .get("download/boq_code_progress_inline/download_xlsx", {
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
        let fileName = "BOQ_Progress_" + date.toLocaleDateString() + ".xlsx";
        link.href = url;
        link.setAttribute("download", fileName); // Указываем имя файла
        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        MainSnackBar.success("Данные успешно скачены!");
      })
      .catch((e) => {
        console.log(e);
        MainSnackBar.error("Что-то пошло не так, попробуйте позже!");
      });
  };
  return (
    <WrapperAll>
      <h4>BOQ Progress</h4>
      <div className="refresh_date_box" />
      <div className="btn_excel_file_pr">
        <Button
          sx={{ textTransform: "none" }}
          onClick={onClickInlineProgress}
          variant="contained"
        >
          Download file
        </Button>
      </div>
    </WrapperAll>
  );
}
export default BoqProgress;
const WrapperAll = styled("div")`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 15px;
  border: 1px solid grey;
  border-radius: 5px;
  .btn_excel_file_pr {
    display: flex;
    gap: 20px;
  }
  .refresh_date_box {
    width: 100px;
  }
  h4 {
    width: 120px;
  }
`;
