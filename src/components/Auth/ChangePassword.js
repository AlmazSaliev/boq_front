import React, { useState } from "react";
import Modal from "../ui/Modal";
import MainInput from "../ui/MainInput";
import PasswordInput from "../ui/PasswordInput";
import { Button } from "@mui/material";
import { MainSnackBar } from "../ui/MainSnackBar";
import { axiosInstance } from "../../config/axios";
import styled from "@emotion/styled";

function ChangePassword({ handleButtonClick, open }) {
  const [value, setValue] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
  });
  const getEmailValue = (e) => {
    e?.preventDefault();
    setValue((p) => ({ ...p, email: e.target.value }));
  };
  const getOldPassword = (e) => {
    e?.preventDefault();
    setValue((p) => ({ ...p, oldPassword: e.target.value }));
  };
  const getNewPassword = (e) => {
    e?.preventDefault();
    setValue((p) => ({ ...p, newPassword: e.target.value }));
  };

  const sendChangePassword = async () => {
    if (!value.email) {
      MainSnackBar.info("Заполните поле Email!");
    } else if (!value.oldPassword) {
      MainSnackBar.info("Заполните поле Old password!");
    } else if (!value.email.endsWith("@rencons.com")) {
      MainSnackBar.info("Email должен заканчиваться на @rencons.com !");
    } else if (!value.newPassword) {
      MainSnackBar.info("Заполните поле New password!");
    } else if (value.newPassword.length < 7) {
      MainSnackBar.info("В пароле должно быть более 7 символов!");
    } else if (value.email && value.newPassword && value.oldPassword) {
      axiosInstance
        .post("auth/change_password", value)
        .then((p) => {
          MainSnackBar.success("Пароль успешно изменен!");
          handleButtonClick();
        })
        .catch((e) => {
          MainSnackBar.success("Что-то пошло не так!");
        });
    }
  };
  return (
    <Modal onClose={handleButtonClick} open={open}>
      <WrapperAll>
        <div className="inputs_box_change">
          <MainInput
            label="Email"
            variant="outlined"
            onChange={getEmailValue}
            value={value.email}
            required={true}
          />
          <PasswordInput
            label="Old password"
            required={true}
            onChange={getOldPassword}
            value={value.oldPassword}
          />
          <PasswordInput
            label="New password"
            required={true}
            onChange={getNewPassword}
            value={value.newPassword}
          />
        </div>
        <Button
          onClick={sendChangePassword}
          variant="contained"
          sx={{ textTransform: "none" }}
        >
          Change password
        </Button>
      </WrapperAll>
    </Modal>
  );
}
export default ChangePassword;
const WrapperAll = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 40px;
  background: gainsboro;
  padding: 35px;
  border-radius: 10px;
  .inputs_box_change {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;
