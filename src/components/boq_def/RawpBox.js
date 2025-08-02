import React from "react";
import styled from "@emotion/styled";
import { Button, Tooltip } from "@mui/material";

function RawpBox() {
  return (
    <WrapperAll>
      <h4>R-AWP file</h4>
      <div className="refresh_date_box" />
      <div className="btn_excel_file_pr">
        <Tooltip title="File exctension .xlsx">
          <Button sx={{ textTransform: "none" }} variant="contained">
            Download file
          </Button>
        </Tooltip>
      </div>
    </WrapperAll>
  );
}
export default RawpBox;
const WrapperAll = styled("div")`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 15px;
  border: 1px solid grey;
  border-radius: 5px;
  .btn_excel_file_pr {
    display: flex;
    gap: 20px;
  }
  .refresh_date_box {
    width: 100px;
  }
  h4 {
    width: 120px;
  }
`;
