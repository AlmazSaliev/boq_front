import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainInput from "../ui/MainInput";
import PasswordInput from "../ui/PasswordInput";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import { axiosInstance } from "../../config/axios";
import { MainSnackBar } from "../ui/MainSnackBar";

const Login = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const getEmailValue = (e) =>
    setValue((p) => ({ ...p, email: e.target.value }));
  const getPassword = (e) =>
    setValue((p) => ({ ...p, password: e.target.value }));

  const clickLog = () => {
    if (value.email && value.password && value.email.endsWith("@rencons.com")) {
      axiosInstance
        .post("auth/login", value)
        .then((response) => {
          MainSnackBar.success("Добро пожаловать!");
          // Обработка успешного ответа
          localStorage.setItem("accessToken", response.data.token);
          localStorage.setItem("email", response.data.email);
          navigate("/civil");
        })
        .catch((error) => {
          console.error("Upload error:", error);
          MainSnackBar.error(
            "При отправке данных что-то пошло не так! " + error
          );
        });
    } else if (!value.email) {
      MainSnackBar.info("Заполните поле Email!");
    } else if (!value.password) {
      MainSnackBar.info("Заполните поле Password!");
    } else if (!value.email.endsWith("@rencons.com")) {
      MainSnackBar.info("Email должен заканчиваться на @rencons.com !");
    }
  };

  return (
    <WrapperAll>
      <h2>Login</h2>
      <div className="login_input_box">
        <MainInput
          label="Email"
          variant="outlined"
          onChange={getEmailValue}
          value={value.email}
          required={true}
        />
        <PasswordInput
          required={true}
          onChange={getPassword}
          value={value.password}
        />
      </div>
      <Button className="enter_btn" variant="contained" onClick={clickLog}>
        Enter
      </Button>
    </WrapperAll>
  );
};
export default Login;
const WrapperAll = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 100%;
  .login_input_box {
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 100%;
  }
  .enter_btn {
    width: 100%;
  }
`;
