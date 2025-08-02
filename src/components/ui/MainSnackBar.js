import { enqueueSnackbar } from "notistack";

const showSnackbar = (message = "", variant = "default") => {
  const defaultOptions = {
    variant,
    anchorOrigin: {
      vertical: "top",
      horizontal: "right",
    },
    autoHideDuration: 5000,
  };
  enqueueSnackbar(message, defaultOptions);
};
export const MainSnackBar = {
  success: (message = "") => showSnackbar(message, "success"),
  error: (message = "") => showSnackbar(message, "error"),
  warning: (message = "") => showSnackbar(message, "warning"),
  info: (message = "") => showSnackbar(message, "info"),
};
