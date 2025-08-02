import { Button } from "@mui/material";
import InfoBox from "../components/right_info/InfoBox";
import { Civil_Material_Table_Title } from "../helper/constant/Constant";
import PageLayoutComponent from "../layouts/PageLayoutComponent";


const ArMaterialPage = () => {
  return (
    <PageLayoutComponent
      column={Civil_Material_Table_Title}
      infoMessageComponent={<InfoBox />}
      btnComponent={
        <div className="box_btn">
          <Button sx={{ textTransform: "none" }} variant="outlined">
            Excel download
          </Button>
          <Button sx={{ textTransform: "none" }} variant="contained">
            Insert excel
          </Button>
        </div>
      }
    />
  );
};
export default ArMaterialPage;
