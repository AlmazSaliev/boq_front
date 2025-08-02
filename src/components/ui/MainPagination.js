import * as React from "react";
import Pagination from "@mui/material/Pagination";
import { styled } from "@mui/material";

export default function MainPagination({ count }) {
  return (
    <Wrapper>
      <Pagination count={count} variant="outlined" shape="rounded" />
    </Wrapper>
  );
}
const Wrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
