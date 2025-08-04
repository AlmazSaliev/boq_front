import styled from "@emotion/styled";
import MainTabs from "../components/ui/MainTabs";
import { Outlet } from "react-router-dom";
import UniqTagInfo from "../components/excel_read/UniqTagInfo";

const TableLayout = ({ nav }) => {
  return (
    <WrapperAll>
      <div className="box_nav_with_uniqtag">
        <MainTabs componentTitle={nav} />
        <UniqTagInfo />
      </div>
      <Outlet />
    </WrapperAll>
  );
};
export default TableLayout;
const WrapperAll = styled("div")`
  .box {
    width: 99%;
    height: 92vh;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin: 0 auto;
  }
  .box_table {
    width: 85%;
    height: 100%;
    overflow: auto;
    border-top: 1px solid grey;
    border-left: 1px solid grey;
    border-right: 1px solid grey;
  }
  .box_info_download {
    width: 15%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: auto;
  }
  .box_info_message {
    max-height: 90%;
    height: 90%;
    overflow: auto;
  }
  .box_btn {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
  }
  .box_nav_with_uniqtag {
    position: relative;
  }
`;
