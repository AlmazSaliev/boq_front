import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import ItemInfoBox from "./ItemInfoBox";
import { axiosInstance } from "../../config/axios";
import { MainSnackBar } from "../ui/MainSnackBar";

const InfoBox = ({ url }) => {
  const [messageData, setMessageData] = useState([]);
  console.log(messageData, "messageData");

  useEffect(() => {
    axiosInstance
      .get(url)
      .then((response) => {
        setMessageData(response.data);
        // MainSnackBar.success("Файл был успешно отправлен на проверку!");
        // Обработка успешного ответа
      })
      .catch((error) => {
        console.error("Upload error:", error);
        // MainSnackBar.error("При получении данных что-то пошло не так!" + error);
      });
  }, [url]);
  return (
    <WrapperAll>
      {messageData?.length > 0 ? (
        messageData.map((i, k) => <ItemInfoBox i={i} key={k} />)
      ) : (
        <p className="text_not_message">Сообщений нет</p>
      )}
    </WrapperAll>
  );
};
export default InfoBox;
const WrapperAll = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 2px;
  height: 100%;
  .text_not_message {
    text-align: center;
  }
`;
