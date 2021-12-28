import Image from "../components/Image";
import Intro from "../components/Intro";
import Box from "@mui/material/Box";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        margin: "10px 10px",
      }}
    >
      {<Image />}
      {<Intro />}
    </Box>
  );
};

export default Header;
