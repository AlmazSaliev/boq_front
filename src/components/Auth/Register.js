import { useState } from "react";
import MainInput from "../ui/MainInput";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import { axiosInstance } from "../../config/axios";
import { MainSnackBar } from "../ui/MainSnackBar";

const Register = ({ clickReg }) => {
  const [email, setEmail] = useState("");
  const getEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const clickRegister = (e) => {
    e.preventDefault();
    localStorage.removeItem("accessToken");
    if (email && email.endsWith("@rencons.com")) {
      axiosInstance
        .post("auth/register", { email })
        .then((res) => {
          MainSnackBar.info(
            "Пароль отправлен на почту!, зайдите с помощью пароля!"
          );
          clickReg();
        })
        .catch((e) => {
          console.log(e, "error");
          MainSnackBar.error("Что-то пошло не так!");
        });
    } else if (!email.endsWith("@rencons.com")) {
      MainSnackBar.info("Email должен заканчиваться на @rencons.com !");
    } else {
      MainSnackBar.info("Заполните поле Email!");
    }
  };
  return (
    <WrapperAll>
      <h2>Registration</h2>
      <div className="reg_input_box">
        <MainInput
          label="Email ...@rencons.com"
          variant="outlined"
          required={true}
          onChange={getEmail}
          onSubmit={clickRegister}
          value={email}
        />
      </div>
      <Button className="enter_btn" variant="contained" onClick={clickRegister}>
        Registration
      </Button>
    </WrapperAll>
  );
};
export default Register;
const WrapperAll = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 100%;
  .reg_input_box {
    display: flex;
    width: 100%;
  }
  .enter_btn {
    width: 100%;
  }
`;
