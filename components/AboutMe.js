import Box from "@mui/material/Box";
import Skills from "../components/Skills";
import Summary from "../components/Summary";

const AboutMe = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        margin: "40px 10px",
      }}
    >
      <Summary />
      <Skills />
    </Box>
  );
};

export default AboutMe;
