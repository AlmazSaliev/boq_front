import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useLocation, useNavigate } from "react-router-dom";

export default function MainTabs({ componentTitle }) {
  const [value, setValue] = React.useState("");
  const loc = useLocation();
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };
  React.useEffect(() => {
    setValue(loc.pathname);
  }, [loc.pathname]);

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        {componentTitle?.map((i, k) => (
          <Tab key={i?.value + k} value={i?.value} sx={{textDecoration: "none", textTransform: "none"}} label={i?.label} />
        ))}
      </Tabs>
    </Box>
  );
}