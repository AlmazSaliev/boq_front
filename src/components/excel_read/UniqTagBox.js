import React, { useState } from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Modal from "../ui/Modal";
import { Civil_Works_Unique_Tag } from "../../helper/constant/Constant";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { axiosInstance } from "../../config/axios";
import { MainSnackBar } from "../ui/MainSnackBar";

function UniqTagBox({ data, data_type = "civil" }) {
  const [open, setopen] = useState(false);
  const openCLose = () => setopen((e) => !e);
  const [create, setCreate] = useState([]);
  const [all, setAll] = useState(Civil_Works_Unique_Tag);
  const addToCreate = (e) => {
    let d = all?.filter((i) => i?.title === e?.title);
    setCreate((p) => [...p, ...d]);
    let b = all?.filter((i) => i.title !== e.title);
    setAll(b);
  };
  const deleteFromCreate = (e) => {
    let d = create?.filter((i) => i?.title !== e?.title);
    setCreate(d);
    let b = create?.filter((i) => i.title === e.title);
    setAll((p) => [...p, ...b]);
  };

  const createNewUniqTagVariant = () => {
    let keys = create.map((i) => i.value);
    axiosInstance
      .post("unique_tag/create", { data_type, title_key: keys })
      .then((p) => {
        openCLose();
      })
      .catch((e) => {
        MainSnackBar.error("Что-то пошло не так, попробуйте чтуь позже!");
      });
  };

  return (
    <WrapperAll>
      <h4>Варианты составления Unique Tag</h4>
      <div className="box_items_var_temp">
        {data?.map((i, idx) => (
          <div key={idx + "_var_"} className="box_items_var_temp_inner">
            <p>Вариант № {idx + 1}</p>
            <div className="box_items_var_temp_inner_item">
              {i?.title_value?.map((k, idk) => (
                <div key={k?.value} className="box_items_var_temp_inner_item_2">
                  <h5>{k?.title}</h5>
                  {i?.title_value?.length === idk + 1 ? null : (
                    <div className="box_items_var_temp_inner_item_3">
                      <p>_</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Button
        variant="contained"
        onClick={openCLose}
        sx={{ textTransform: "none" }}
      >
        Add variant
      </Button>
      <Modal onClose={openCLose} open={open}>
        <WrapperModal>
          <div className="create_modal_title_btn">
            <h4>Create Unique Tag variant</h4>
            <Button
              variant="contained"
              sx={{ textTransform: "none" }}
              onClick={createNewUniqTagVariant}
            >
              Create
            </Button>
          </div>
          <div className="modal_create_tag">
            <h4>Create by:</h4>
            {create?.map((i, idx) => (
              <div
                key={i?.value}
                onClick={() => deleteFromCreate(i)}
                className="modal_create_tag_item"
              >
                <div>
                  <p>{i?.title}</p>
                  <HighlightOffIcon sx={{ color: "red" }} />
                </div>
                {create.length === idx + 1 ? null : <span>_</span>}
              </div>
            ))}
          </div>
          <div className="modal_create_tag">
            <h4>Collumn:</h4>
            {all?.map((i) => (
              <div
                key={i?.value}
                onClick={() => addToCreate(i)}
                className="modal_create_tag_item_1"
              >
                {i?.title}
              </div>
            ))}
          </div>
        </WrapperModal>
      </Modal>
    </WrapperAll>
  );
}
export default UniqTagBox;
const WrapperModal = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 25px;
  background: white;
  border-radius: 10px;
  padding: 15px;
  .create_modal_title_btn {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .modal_create_tag {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    max-width: 800px;
    flex-wrap: wrap;
  }
  .modal_create_tag_item {
    display: flex;
    align-items: center;
    gap: 5px;
    div {
      padding: 10px 15px;
      cursor: pointer;
      position: relative;
      svg {
        position: absolute;
        top: -9px;
        right: -9px;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .modal_create_tag_item_1 {
    display: flex;
    gap: 10px;
    padding: 5px 10px;
    border: 1px solid grey;
    border-radius: 5px;
    cursor: pointer;
  }
`;
const WrapperAll = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  .box_items_var_temp {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .box_items_var_temp_inner {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .box_items_var_temp_inner_item {
    display: flex;
    gap: 10px;
    div {
      white-space: nowrap;
    }
  }
  .box_items_var_temp_inner_item_2 {
    display: flex;
    gap: 10px;
    h5 {
      padding: 5px 10px;
      border: 1px solid grey;
      border-radius: 5px;
    }
  }
  .box_items_var_temp_inner_item_3 {
  }
`;
