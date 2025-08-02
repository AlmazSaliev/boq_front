import React, { useRef } from "react";
import { Button, Tooltip } from "@mui/material";
import { FileUploadingFetch } from "../../config/axios";
import { MainSnackBar } from "../ui/MainSnackBar";

function UploadFileBtn({ title, url }) {
  const fileInputRef = useRef();
  const handleButtonClick = () => fileInputRef.current.click();
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file != null) {
      try {
        const fileData = new FormData();
        fileData.append("file", file);
        FileUploadingFetch.post(url, fileData)
          .then((response) => {
            MainSnackBar.success("Файл был успешно отправлен на проверку!");
            // Обработка успешного ответа
          })
          .catch((error) => {
            console.error("Upload error:", error);
            MainSnackBar.error(
              "При отправке файла что-то пошло не так!. " + error
            );
          });
      } catch (error) {
        MainSnackBar.error("При отправке файла что-то пошло не так!. " + error);
      }
    } else {
      MainSnackBar.error("Файл не выбран!");
    }
  };
  return (
    <>
      <input
        ref={fileInputRef}
        style={{ display: "none" }}
        type="file"
        accept=".xlsx"
        onChange={handleFileUpload}
      />
      <Tooltip title="File extension .xlsx">
        <Button
          onClick={handleButtonClick}
          sx={{ textTransform: "none" }}
          variant="outlined"
        >
          {title}
        </Button>
      </Tooltip>
    </>
  );
}

export default UploadFileBtn;
