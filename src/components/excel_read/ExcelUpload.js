import { useRef } from "react";
import { Button } from "@mui/material";
import { FileUploadingFetch } from "../../config/axios";
import { MainSnackBar } from "../ui/MainSnackBar";

const ExcelUpload = ({ titlBtn = "" }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => fileInputRef.current.click();
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file != null) {
      try {
        const fileData = new FormData();
        fileData.append("file", file);
        FileUploadingFetch.post("file/upload", fileData)
          .then((response) => {
            MainSnackBar.success("Файл был успешно отправлен на проверку!");
            // Обработка успешного ответа
          })
          .catch((error) => {
            console.error("Upload error:", error);
            MainSnackBar.error(
              "При отправке файла что-то пошло не так!" + error
            );
          });
      } catch (error) {
        MainSnackBar.error("При отправке файла что-то пошло не так!" + error);
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
        accept=".xlsx, .xlsb"
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
export default ExcelUpload;
