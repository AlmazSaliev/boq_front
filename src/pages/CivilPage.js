import React from "react";
import PageLayoutComponent from "../layouts/PageLayoutComponent";
import InfoBox from "../components/right_info/InfoBox";
import { Civil_Works_Table_Title } from "../helper/constant/Constant";
import ExcelUpload from "../components/excel_read/ExcelUpload";
import ExcelDownload from "../components/excel_read/ExcelDownload";

function CivilPage() {
  const url_work = "civil/work_data_by_filter";
  const url_message = "civil/work_message";
  return (
    <PageLayoutComponent
      column={Civil_Works_Table_Title}
      getDataUrl={url_work}
      index="civil"
      infoMessageComponent={<InfoBox url={url_message} />}
      btnComponent={
        <div className="box_btn">
          <ExcelDownload titlBtn="Excel download" pageTitle="civil" />
          <ExcelUpload titlBtn="Insert excel file" />
        </div>
      }
    />
  );
}
export default CivilPage;
