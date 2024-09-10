import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import useAlertStore from "../store/alertStore";
import AlertSlide from "../components/AlertSlide";

const Layout = () => {
  const alertIsOpen = useAlertStore((s) => s.isOpen);

  return (
    <>
      {alertIsOpen && <AlertSlide />}
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
