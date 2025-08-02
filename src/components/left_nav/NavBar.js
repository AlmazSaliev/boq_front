import MainTabs from "../ui/MainTabs";
import { Nav_Path } from "../../helper/constant/Constant";

const NavBar = () => {
  return (
    <div>
      <MainTabs componentTitle={Nav_Path} />
    </div>
  );
};
export default NavBar;
