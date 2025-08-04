import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import MainPopover from "../ui/MainPopover";
import UniqTagBox from "./UniqTagBox";
import { axiosInstance } from "../../config/axios";
import { MainSnackBar } from "../ui/MainSnackBar";

function UniqTagInfo({ data_type = "civil" }) {
  const [data, setData] = useState([]);
  const getUniqueTag = () => {
    axiosInstance
      .get("unique_tag/getUniqueTags/" + data_type)
      .then((r) => {
        setData(r?.data);
      })
      .catch((e) =>
        MainSnackBar.error("Что-то пошло не так, попробуйте чтуь позже!")
      );
  };
  useEffect(() => {
    getUniqueTag();
  }, []);
  return (
    <WrapperAll>
      <MainPopover
        componentOpen={<UniqTagBox data={data} data_type={data_type} />}
        componentTitle={
          <Button variant="contained" sx={{ textTransform: "none" }}>
            Unique Tag Info
          </Button>
        }
      />
    </WrapperAll>
  );
}
export default UniqTagInfo;
const WrapperAll = styled("div")`
  position: absolute;
  top: 7px;
  right: 16%;
`;
