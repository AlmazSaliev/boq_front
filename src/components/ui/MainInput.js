import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function MainInput(
  { label, required = false, variant = "standard", onChange = () => {}, value },
  props
) {
  return (
    <Box component="form" sx={{ width: "100%" }} noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        sx={{ width: "100%" }}
        label={label}
        variant={variant}
        required={required}
        onChange={onChange}
        value={value}
        {...props}
      />
    </Box>
  );
}
