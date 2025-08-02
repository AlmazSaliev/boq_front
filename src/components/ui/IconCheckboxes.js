import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import { FormControlLabel } from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function IconCheckboxes({
  title,
  name,
  onChange = () => {},
  checked = false,
}) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          onChange={onChange}
          checked={checked}
          {...label}
          name={name}
          icon={<BookmarkRemoveIcon />}
          checkedIcon={<BookmarkAddIcon />}
        />
      }
      label={title}
    />
  );
}
