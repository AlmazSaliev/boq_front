import { useState } from "react";
import { Snackbar } from "@mui/material";

const CopyText = ({ text }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <span onClick={handleClick} color="primary">
        {text}
      </span>
      <Snackbar
        sx={{ zIndex: 1000, position: "fixed", top: "90px" }}
        message="Текст скопирован"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={1000}
        onClose={() => setOpen(false)}
        open={open}
      />
    </>
  );
};

export default CopyText;
