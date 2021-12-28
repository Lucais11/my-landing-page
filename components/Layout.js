import Header from "../components/Header";
import Box from "@mui/material/Box";
import AboutMe from "./AboutMe";

const Layout = () => {
  return (
    <Box sx={{ backgroundColor: "red", alignContent: "center" }}>
      <h1>Layout</h1>
      <Header />
      <AboutMe />
    </Box>
  );
};

export default Layout;
