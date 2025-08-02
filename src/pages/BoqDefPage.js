import React from "react";
import BoqCatalog from "../components/boq_def/BoqCatalog";
import BoqUnitPrice from "../components/boq_def/BoqUnitPrice";
import BoqProgress from "../components/boq_def/BoqProgress";
import styled from "@emotion/styled";
// import RawpBox from "../components/boq_def/RawpBox";

function BoqDefPage() {
  return (
    <WrapperAll>
      <h3>BOQ Catalog / BOQ Unit Price / BOQ Progress</h3>
      <div className="components_boq_box">
        <BoqCatalog />
        <BoqUnitPrice />
        <BoqProgress />
        {/* <RawpBox /> */}
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
  .components_boq_box {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
  }
`;
