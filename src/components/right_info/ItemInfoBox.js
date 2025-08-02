import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddchartIcon from "@mui/icons-material/Addchart";
import styled from "@emotion/styled";
import { Tooltip } from "@mui/material";

const ItemInfoBox = ({ i }) => {
  return (
    <WrapperAll status={i?.status}>
      <div className="item_info_1">
        <p>{i?.date}</p>
        <p>{i?.status}</p>
      </div>
      <div>
        <h4 className="email_add">{i?.responsible?.split("@")[0]}</h4>
      </div>
      <div className="item_info_2">
        <Tooltip title="Add">
          <AddchartIcon sx={{ color: "green" }} />
          <p>{i?.add}</p>
        </Tooltip>
        <Tooltip title="Edit">
          <EditIcon sx={{ color: "orange" }} />
          <p>{i?.edit}</p>
        </Tooltip>
        <Tooltip title="Delete">
          <DeleteForeverIcon sx={{ color: "red" }} />
          <p>{i?.delete}</p>
        </Tooltip>
      </div>
    </WrapperAll>
  );
};
export default ItemInfoBox;
const WrapperAll = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 100%;
  padding: 3px;
  border: 1px solid grey;
  border-radius: 5px;
  background: ${(p) => (p?.status === "ERROR" ? "#ffdcdc" : "none")};
  .item_info_1 {
    display: flex;
    justify-content: space-between;
  }
  .item_info_2 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    span {
      display: flex;
      align-items: center;
      gap: 3px;
    }
  }
  .email_add {
    padding-left: 5px;
  }
`;
