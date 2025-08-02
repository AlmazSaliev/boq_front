import React from "react";
import Button from "@mui/material/Button";
import PageLayoutComponent from "../layouts/PageLayoutComponent";
import { Civil_Works_Table_Title } from "../helper/constant/Constant";
import InfoBox from "../components/right_info/InfoBox";

// const data = {
//   total_size: 100,
//   total_data: {
//     uniq_tag_boq_code: 100,
//     titul_no: 100,
//     subtitle_no: 100,
//     scope: 100,
//     "DRAWING NUMBER\nНОМЕР ЧЕРТЕЖА": 100,
//     "REV.NO\n№ РЕВ.": 100,
//     "CHANGE NUMBER /\nИЗМЕНИТЬ НОМЕР": 100,
//     "DWG STATUS /\nСТАТУС DWG": 100,
//     "COMPONENT TYPE /\nТИП КОМПОНЕНТА": 100,
//     "UNIQUE TAG /\nУНИКАЛЬНЫЙ ТЕГ": 100,
//     "COMPONENT TAG /\nТЭГ КОМПОНЕНТА": 100,
//     "TAG NO /\n№ ТЕГА": 100,
//     "BOQCODE/\nBOQКОД": 100,
//     "DESCRIPTION EN/RU / \nОПИСАНИЕ": 100,
//     "QTY /\nКОЛ-ВО": 112.5,
//     "UNIT /\nЕДИНИЦА": 100,
//     "ACCESS\nID": 100,
//     "R-AWP\nID": 100,
//     "RECORD DATE": 100,
//     RESPONSIBLE: 100,
//   },
//   data: [],
// };
const data = [
  {
    uniq_tag_boq_code: "test",
    titul_no: "titul_no",
    subtitle_no: "subtitle_no",
    scope: "scope",
    drawing_number: "drawing_number",
    rev_no: "rev_no",
    change_number: "change_number",
    dwg_status: "dwg_status",
    component_type: "component_type",
    unique_tag: "unique_tag",
    component_tag: "component_tag",
    tag_no: "tag_no",
    boq_code: "boq_code",
    description_en_ru: "description_en_ru",
    qty: "qty",
    unit: "unit",
    weight: "weight",
    formul: "formul",
    tq_number: "tq_number",
    notes: "notes",
    access_id: 200,
    r_awp: 201,
    record_date: "15-02-2025",
    responsible: "responsible",
    iwp_type: "test",
    iwp_adi: "test",
    construction_start: "10-02-2025",
    construction_finish: "20-02-2025",
    contract: "2022",
  },
];
function ArPage() {
  return (
    <PageLayoutComponent
      column={Civil_Works_Table_Title}
      row={data}
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
}
export default ArPage;
