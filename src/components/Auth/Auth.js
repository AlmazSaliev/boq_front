import { useState } from "react";
import ImgLogo from "../../assets/images/logo.png";
import Login from "./Login";
import Register from "./Register";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

function Auth() {
  const [register, setRegister] = useState(false);
  const clickReg = () => setRegister((p) => !p);
  return (
    <WrapperAll>
      <div className="img_box">
        <img src={ImgLogo} alt="logo_rencons" />
      </div>
      <div className="box_login_reg">
        <div className="box_login_reg_box">
          {register ? <Register clickReg={clickReg} /> : <Login />}
        </div>
        <div>
          <WrapperBtn onClick={clickReg} variant="outlined">
            {register ? "Login" : "Do you have account? > Registration"}
          </WrapperBtn>
        </div>
      </div>
    </WrapperAll>
  );
}
export default Auth;
const WrapperAll = styled("div")`
  .img_box {
    position: absolute;
    top: 20px;
    left: 40px;
    width: 120px;
    height: 80px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .box_login_reg {
    width: 300px;
    margin: 0 auto;
    margin-top: 20vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
  .box_login_reg_box {
    width: 100%;
  }
`;
const WrapperBtn = styled(Button)`
  text-transform: none;
  color: grey;
  width: 300px;
`;
