import { Box, styled } from "@mui/material";
import BasicModal from "@mui/material/Modal";

function Modal({ open, onClose, children }) {
  return (
    <BasicModal open={open} onClose={onClose}>
      <StyleBox>
        <div>{children}</div>
      </StyleBox>
    </BasicModal>
  );
}

export default Modal;

const StyleBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 800px) {
    overflow-y: scroll;
    height: 100%;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
