import React, { useEffect, useState } from "react";
import BoqCatalog from "../components/boq_def/BoqCatalog";
import BoqUnitPrice from "../components/boq_def/BoqUnitPrice";
import BoqProgress from "../components/boq_def/BoqProgress";
import styled from "@emotion/styled";
import { axiosInstance } from "../config/axios";
import { MainSnackBar } from "../components/ui/MainSnackBar";
import UniqTagExample from "../components/boq_def/UniqTagExample";
// import RawpBox from "../components/boq_def/RawpBox";

function BoqDefPage() {
  const [date, setDate] = useState([]);
  const onclick = async () => {
    axiosInstance
      .get("unit_price/refresh_date")
      .then((res) => {
        setDate(res.data);
      })
      .catch((e) => {
        // MainSnackBar.error("Что-то пошло не так, при получении дат изменений!");
      });
  };
  let catalog_date = "";
  let unit_date = "";
  if (date.length > 0) {
    for (let i = 0; i < date.length; i++) {
      const el = date[i];
      if (el?.type === "unit_price") {
        unit_date = el?.dateRefresh;
      } else if (el?.type === "catalog") {
        catalog_date = el?.dateRefresh;
      }
    }
  }
  useEffect(() => {
    onclick();
  }, []);
  return (
    <WrapperAll>
      <h3>BOQ Catalog / BOQ Unit Price / BOQ Progress</h3>
      <div className="all_components_boq_box">
        <div className="components_boq_box">
          <BoqCatalog date={catalog_date} />
          <BoqUnitPrice date={unit_date} />
          <BoqProgress />
          {/* <RawpBox /> */}
        </div>
      </div>
    </WrapperAll>
  );
}
export default BoqDefPage;
const WrapperAll = styled("div")`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 70px;
  gap: 40px;
  .all_components_boq_box {
    width: 100%;
    display: flex;
    gap: 50px;
  }
  .components_boq_box {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
  }
`;
