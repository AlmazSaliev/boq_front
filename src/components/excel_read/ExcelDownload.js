import { useState } from "react";
import { Button } from "@mui/material";
import Modal from "../ui/Modal";
import DownloadExcelData from "./DownloadExcelData";

const ExcelDownload = ({ titlBtn = "", pageTitle }) => {
  const [open, setOpen] = useState(false);
  // agGridFilterModel

  const handleButtonClick = () => {
    setOpen((p) => !p);
  };
  return (
    <>
      <Button
        variant="outlined"
        sx={{ textTransform: "none" }}
        onClick={handleButtonClick}
      >
        {titlBtn}
      </Button>
      <Modal onClose={handleButtonClick} open={open}>
        <DownloadExcelData onClose={handleButtonClick} pageTitle={pageTitle} />
      </Modal>
    </>
  );
};
export default ExcelDownload;
