import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import useAlertStore from "../store/alertStore";
import AlertSlide from "../components/AlertSlide";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  const alertIsOpen = useAlertStore((s) => s.isOpen);

  return (
    <>
      {alertIsOpen && <AlertSlide />}
      <Box position="fixed" top={0} left={0} width="100%" zIndex="sticky">
        <NavBar />
      </Box>
      <Box pt="60px">
        {" "}
        {/* Adjust padding-top to match the height of your navbar */}
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
