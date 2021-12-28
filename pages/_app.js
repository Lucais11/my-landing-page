import Layout from "../components/Header";
import AboutMe from "../components/AboutMe";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const App = () => {
  return (
    <Container
      sx={{
        height: "100vh",
      }}
    >
      <Layout />
      <AboutMe />
    </Container>
  );
};

export default App;
