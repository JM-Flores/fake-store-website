import { Box, HStack, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import shopLogo from "../assets/shop-logo.svg";
import useProductQueryStore from "../store/productQueryStore";
import CartDrawer from "./CartDrawer";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const navigate = useNavigate();
  const resetQuery = useProductQueryStore((s) => s.resetQuery);

  return (
    <>
      <HStack background={"gray.900"} paddingX={4} height={"60px"}>
        <Box
          overflow="hidden"
          width="100px"
          height="60px"
          display="flex"
          onClick={() => {
            navigate("/");
            resetQuery();
          }}
        >
          <Image src={shopLogo} _hover={{ cursor: "pointer" }} />
        </Box>
        <SearchInput />
        <CartDrawer />
      </HStack>
    </>
  );
};

export default NavBar;
