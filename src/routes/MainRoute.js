import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthPage from "../pages/AuthPage";
import TableLayout from "../layouts/TableLayout";
import {
  Nav_Ar,
  Nav_Building,
  Nav_Civil,
  Nav_Electric,
  Nav_Eqp,
  Nav_Hvac,
  Nav_Landscaping,
  Nav_Steel,
  Nav_UG_Pipe,
} from "../helper/constant/Constant";
import CivilPage from "../pages/CivilPage";
import MaterialCivilPage from "../pages/MaterialCivilPage";
import BoqDefPage from "../pages/BoqDefPage";
import OnProcess from "../components/onprocess/OnProcess";

function MainRoute() {
  return (
    <Routes>
      <Route element={<Navigate to={"/auth"} />} path="/" />
      <Route element={<AuthPage />} path="/auth" />
      <Route element={<MainLayout />} path="/">
        <Route path="/ar" element={<TableLayout nav={Nav_Ar} />}>
          <Route path="" element={<OnProcess />} />
          <Route path="material" element={<OnProcess />} />
        </Route>
        <Route path="/building" element={<TableLayout nav={Nav_Building} />}>
          <Route path="" element={<OnProcess />} />
          <Route path="material" element={<OnProcess />} />
        </Route>
        <Route path="/civil" element={<TableLayout nav={Nav_Civil} />}>
          <Route path="" element={<CivilPage />} />
          <Route path="material" element={<MaterialCivilPage />} />
        </Route>
        <Route path="/electric" element={<TableLayout nav={Nav_Electric} />}>
          <Route path="" element={<OnProcess />} />
          <Route path="material" element={<OnProcess />} />
          <Route path="cable" element={<OnProcess />} />
        </Route>
        <Route path="/eqp" element={<TableLayout nav={Nav_Eqp} />}>
          <Route path="" element={<OnProcess />} />
          <Route path="material" element={<OnProcess />} />
        </Route>
        <Route path="/hvac" element={<TableLayout nav={Nav_Hvac} />}>
          <Route path="" element={<OnProcess />} />
          <Route path="material" element={<OnProcess />} />
        </Route>
        <Route
          path="/landscaping"
          element={<TableLayout nav={Nav_Landscaping} />}
        >
          <Route path="" element={<OnProcess />} />
          <Route path="material" element={<OnProcess />} />
        </Route>
        <Route path="/steel" element={<TableLayout nav={Nav_Steel} />}>
          <Route path="" element={<OnProcess />} />
          <Route path="material" element={<OnProcess />} />
        </Route>
        <Route path="/ug_pipe" element={<TableLayout nav={Nav_UG_Pipe} />}>
          <Route path="" element={<OnProcess />} />
          <Route path="material" element={<OnProcess />} />
        </Route>
        <Route path="/boq" element={<BoqDefPage />} />
      </Route>
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}
export default MainRoute;
