import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function MainInput(
  { label, required = false, variant = "standard", onSubmit=()=>{}, onChange = () => {}, value },
  props
) {
  return (
    <Box component="form" sx={{ width: "100%" }} onSubmit={onSubmit} noValidate autoComplete="off">
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
