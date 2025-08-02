import * as React from "react";
import Popover from "@mui/material/Popover";

export default function MainPopover({ componentTitle, componentOpen, close }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    e?.stopPropagation();
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  React.useEffect(() => {
    handleClose();
  }, [close]);
  return (
    <div>
      <span aria-describedby={id} onClick={handleClick}>
        {componentTitle}
      </span>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {componentOpen}
      </Popover>
    </div>
  );
}
