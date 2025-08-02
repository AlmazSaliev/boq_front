import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MainPopover from "./ui/MainPopover";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import ImgLogo from "../assets/images/logo.png";
import SearchInput from "./ui/SearchInput";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NavBar from "./left_nav/NavBar";
import { Nav_Path } from "../helper/constant/Constant";
import ChangePassword from "./Auth/ChangePassword";
import { MainSnackBar } from "./ui/MainSnackBar";

const get_path_title = (pathname, arr) => {
  return arr?.find((i) => pathname.includes(i?.value))?.label;
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("email");
    navigate("/");
  };
  let token = localStorage.getItem("accessToken");
  useEffect(() => {
    if (!token) {
      MainSnackBar.warning("У вас нет доступа!, пожайлуста перезайдите снова!");
    }
  }, [token]);
  const clickOpenClose = () => setOpen((p) => !p);
  const clickOpenModal = () => setChangePassword((p) => !p);
  const changePasswordFunc = () => {
    clickOpenModal();
  };
  return (
    <>
      <WrapperAllHeader>
        <WrapperAll className={open ? "open" : "close"}>
          <div className="header_box_item">
            <div className="block_one">
              <img className="img_logo" src={ImgLogo} alt="logo_rencons" />
            </div>
            <div className="block_two">
              <SearchInput />
            </div>
            <div className="block_three">
              <MainPopover
                close={changePassword}
                componentTitle={
                  <WrapperProfile>
                    <AccountCircleIcon />
                    <p>{localStorage.getItem("email")}</p>
                  </WrapperProfile>
                }
                componentOpen={
                  <WrapperBoxPopap>
                    <Button onClick={changePasswordFunc} variant="contained">
                      Change password
                    </Button>
                    <Button onClick={logout} variant="contained">
                      Log out
                    </Button>
                  </WrapperBoxPopap>
                }
              />
            </div>
          </div>
          <NavBar />
        </WrapperAll>
        <div className={open ? "open_back" : "close_back"} />
        <div className="click_svg_open" onClick={clickOpenClose}>
          <KeyboardArrowDownIcon className={open && "svg_open"} />
        </div>
        <div className="label_nav_path" onClick={clickOpenClose}>
          {get_path_title(pathname, Nav_Path)}
        </div>
      </WrapperAllHeader>
      <ChangePassword
        open={changePassword}
        handleButtonClick={clickOpenModal}
      />
    </>
  );
};
export default Header;
const WrapperBoxPopap = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  button {
    text-transform: none;
  }
`;
const WrapperAllHeader = styled("div")`
  width: 100%;
  height: 100%;
  .click_svg_open {
    position: absolute;
    top: -15px;
    right: 3%;
    z-index: 99;
    svg {
      width: 50px;
      height: 50px;
      padding: 0px;
      cursor: pointer;
    }
  }
  .label_nav_path {
    position: absolute;
    top: 0px;
    right: 7%;
    cursor: pointer;
    z-index: 1;
  }
  .svg_open {
    transform: rotate(180deg);
  }
  .open {
    position: absolute;
    height: 0px;
    top: -120px;
    padding-bottom: 0px;
    transition-duration: 1s;
    height: 120px;
    top: 0px;
    padding-bottom: 7px;
    box-shadow: -1px 0px 8px 0px #c2c2c2;
    background: white;
    z-index: 5;
  }
  .open_back {
    height: 0px;
    transition-duration: 1s;
    height: 120px;
  }
  .close {
    position: absolute;
    height: 120px;
    top: 0px;
    padding-bottom: 7px;
    transition-duration: 1s;
    height: 0px;
    top: -120px;
    padding-bottom: 0px;
    box-shadow: -1px 0px 8px 0px #c2c2c2;
    background: white;
    z-index: 5;
  }
  .close_back {
    height: 120px;
    transition-duration: 1s;
    height: 0px;
  }
`;
const WrapperProfile = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  svg {
    width: 30px;
    height: 30px;
  }
`;
const WrapperAll = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .header_box_item {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    padding: 1px 20px;
    justify-content: space-between;
    .img_logo {
      width: 90px;
      object-fit: cover;
      cursor: pointer;
    }
    /* .block_one {
      width: 10%;
    } */
    .block_two {
      width: 60%;
    }
    /* .block_three {
      width: 25%;
    } */
  }
`;
