import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

function OnProcess() {
  const navigate = useNavigate();
  const nav_to_civil = () => navigate("/civil");
  const nav_to_boq = () => navigate("/boq");
  return (
    <WrapperAll>
      <div>
        <img src="https://png.pngtree.com/png-clipart/20211116/original/pngtree-yellow-coming-soon-png-image_6939698.png" alt="coming_soon" />
        <div className="box_finish">
          <p>Now, you can work with </p>
          <p className="p_civil" onClick={nav_to_civil}>
            Civil
          </p>
          <p>or</p>
          <p className="p_civil" onClick={nav_to_boq}>
            BOQ Data
          </p>
          <p>pages!</p>
        </div>
      </div>
    </WrapperAll>
  );
}
export default OnProcess;
const WrapperAll = styled("div")`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 500px;
    height: 400px;
    object-fit: cover;
  }
  .p_civil {
    cursor: pointer;
    color: blue;
    text-decoration: underline;
  }
  .box_finish {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
`;
