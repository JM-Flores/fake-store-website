import { Grid } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import ProductGrid from "./components/ProductGrid";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <NavBar />
      <Grid templateColumns={"200px 1fr"}>
        <SideBar />
        <ProductGrid />
      </Grid>
    </>
  );
}

export default App;
