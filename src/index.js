import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import { closeSnackbar, SnackbarProvider } from "notistack";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SnackbarProvider
    maxSnack={3}
    hideIconVariant
    autoHideDuration={5000}
    action={(snackbarId) => (
      <IconButton
        size="small"
        color="inherit"
        onClick={() => closeSnackbar(snackbarId)}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    )}
  >
    <HashRouter>
      <App />
    </HashRouter>
  </SnackbarProvider>
);
reportWebVitals();
