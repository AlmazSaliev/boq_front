import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
  return (
    <WrapperAll>
      <SearchIcon />
      <input />
    </WrapperAll>
  );
};
export default SearchInput;
const WrapperAll = styled("form")`
  position: relative;
  width: 100%;
  height: 35px;
  input {
    width: 100%;
    height: 35px;
    padding-left: 40px;
    border: 1px solid blue;
    border-radius: 10px;
    outline-color: orange;
    font-size: 18px;
  }
  svg {
    position: absolute;
    top: 5px;
    left: 10px;
    color: blue;
  }
`;
