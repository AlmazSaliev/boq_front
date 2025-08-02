import { useCallback, useEffect, useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import IconCheckboxes from "../ui/IconCheckboxes";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { axiosInstance } from "../../config/axios";
import { MainSnackBar } from "../ui/MainSnackBar";

const DownloadExcelData = ({ onClose, pageTitle }) => {
  const [workMaterial, setWorkMaterial] = useState({
    work: false,
    material: false,
  });
  const checkedWork = useCallback(() => {
    setWorkMaterial((p) => ({ ...p, work: !p.work }));
  }, []);
  const checkedMaterial = useCallback(() => {
    setWorkMaterial((p) => ({ ...p, material: !p.material }));
  }, []);
  // agGridFilterModel
  let filterCivil =
    JSON.parse(localStorage.getItem("params_for_filter_civil")) || {};
  let filterMaterial =
    JSON.parse(localStorage.getItem("params_for_filter_civil_material")) || {};

  const downloadCivil = (array) => {
    axiosInstance
      .post("download/civil/download_xlsx", array, {
        responseType: "blob",
      })
      .then((res) => {
        const url = window.URL.createObjectURL(
          new Blob([res.data], {
            type: "application/vnd.ms-excel.sheet.binary.macroEnabled.12",
          })
        );
        let date = new Date();
        let fileName =
          "Civil_IWP_Status_" + date.toLocaleDateString() + ".xlsx";
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fileName);
        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((e) => {
        console.log(e);
        MainSnackBar.error("Что-то пошло не так, попробуйте позже!");
      });
  };
  const onclick = async () => {
    if (pageTitle === "civil") {
      if (workMaterial.work) {
        downloadCivil([filterCivil]);
      } else if (workMaterial.material) {
        downloadCivil([filterMaterial]);
      } else if (workMaterial.material && workMaterial.work) {
        downloadCivil([filterCivil, filterMaterial]);
      } else {
        MainSnackBar.info("Choise one or two sheets!");
      }
    }
    onClose();
  };
  let arrfilterCivil = [];
  for (let i = 0; i < filterCivil?.filter.length; i++) {
    const element = filterCivil?.filter[i];
    for (let k = 0; k < element?.list?.length; k++) {
      const item = element?.list[k];
      arrfilterCivil.push(item);
    }
  }
  let arrfilterMaterial = [];
  for (let i = 0; i < filterMaterial?.filter.length; i++) {
    const element = filterMaterial?.filter[i];
    for (let k = 0; k < element?.list?.length; k++) {
      const item = element?.list[k];
      arrfilterMaterial.push(item);
    }
  }
  useEffect(() => {
    if (filterCivil?.filter.length > 0) {
      checkedWork();
    }
    if (filterMaterial?.filter.length > 0) {
      checkedMaterial();
    }
  }, []);
  if (pageTitle === "civil") {
    return (
      <WrapperFilterBox>
        <div className="filter_box_items">
          <div className="filter_box">
            <IconCheckboxes
              title={"WORKS sheet"}
              name={"works"}
              onChange={checkedWork}
              checked={workMaterial.work}
            />
            {arrfilterCivil.length > 0 ? (
              <div className="inner_filter_box">
                <FilterAltIcon sx={{ color: "orange" }} />
                <div className="inner_filter_box_2">
                  <p>Фильтры:</p>
                  {arrfilterCivil.map((i) => (
                    <p key={i?.value}>{i?.key?.replace("_", " ")}</p>
                  ))}
                </div>
              </div>
            ) : (
              <div className="inner_filter_box">
                <FilterAltOffIcon sx={{ color: "gray" }} />
                <div className="inner_filter_box_2">
                  <span>Фильтр не установлен</span>
                </div>
              </div>
            )}
          </div>
          <div className="filter_box">
            <IconCheckboxes
              title={"MATERIAL sheet"}
              name={"material"}
              onChange={checkedMaterial}
              checked={workMaterial.material}
            />
            {arrfilterMaterial.length > 0 ? (
              <div className="inner_filter_box">
                <FilterAltIcon sx={{ color: "orange" }} />
                <div className="inner_filter_box_2">
                  <p>Фильтры:</p>
                  {arrfilterMaterial.map((i) => (
                    <p key={i?.value}>{i?.key?.replace("_", " ")}</p>
                  ))}
                </div>
              </div>
            ) : (
              <div className="inner_filter_box">
                <FilterAltOffIcon sx={{ color: "gray" }} />
                <div className="inner_filter_box_2">
                  <span>Фильтр не установлен</span>
                </div>
              </div>
            )}
          </div>
        </div>
        <Button onClick={onclick} variant="outlined">
          Download
        </Button>
      </WrapperFilterBox>
    );
  }
  return (
    <div>
      <div>
        <h4>WORKS sheet</h4>
      </div>
      <div>
        <h4>STEELSTRUCTUREDATA sheet</h4>
      </div>
      <div>
        <h4>MATERIAL sheet</h4>
      </div>
      <div>
        <h4>MATERIALCALBE sheet</h4>
      </div>
    </div>
  );
};
export default DownloadExcelData;
const WrapperFilterBox = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: aliceblue;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  .filter_box_items {
    display: flex;
    gap: 20px;
  }
  .filter_box {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    padding: 10px;
  }
  .inner_filter_box {
    display: flex;
    gap: 5px;
    align-items: flex-start;
  }
  .inner_filter_box_2 {
    display: flex;
    flex-direction: column;
    gap: 5px;
    p {
      text-transform: capitalize;
    }
  }
`;
