import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import useAlertStore from "../store/alertStore";
import AlertSlide from "../components/AlertSlide";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  const alertIsOpen = useAlertStore((s) => s.isOpen);

  return (
    <>
      <Box position="fixed" zIndex="2">
        {alertIsOpen && <AlertSlide />}
      </Box>
      <Box position="fixed" top={0} left={0} width="100%" zIndex="1">
        <NavBar />
      </Box>
      <Box pt="60px" zIndex="0">
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
