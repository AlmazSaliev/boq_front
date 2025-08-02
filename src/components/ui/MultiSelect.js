import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function MultiSelect({
  options = [],
  size,
  label,
  value = "",
  setValue = () => {},
  getInputValue = () => {},
  required,
}) {
  return (
    <Autocomplete
      id="free-solo-demo"
      freeSolo
      size={size}
      options={options}
      sx={{ width: "100%" }}
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      renderInput={(params) => (
        <TextField
          {...params}
          required={required}
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              getInputValue(e.target.value);
            }
          }}
          onBlur={(e) => getInputValue(e.target.value)}
          label={label}
        />
      )}
    />
  );
}
