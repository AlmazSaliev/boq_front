import InfoBox from "../components/right_info/InfoBox";
import { Civil_Material_Table_Title } from "../helper/constant/Constant";
import PageLayoutComponent from "../layouts/PageLayoutComponent";
import ExcelUpload from "../components/excel_read/ExcelUpload";
import ExcelDownload from "../components/excel_read/ExcelDownload";

const MaterialCivilPage = () => {
  const url_material = "civil/material_data_by_filter";
  const url_message = "civil/material_message";
  return (
    <PageLayoutComponent
      column={Civil_Material_Table_Title}
      getDataUrl={url_material}
      index="civil_material"
      infoMessageComponent={<InfoBox url={url_message} />}
      btnComponent={
        <div className="box_btn">
          <ExcelDownload titlBtn="Excel download" pageTitle="civil" />
          <ExcelUpload titlBtn="Insert excel file" />
        </div>
      }
    />
  );
};
export default MaterialCivilPage;
