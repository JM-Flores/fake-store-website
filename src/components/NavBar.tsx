import { Box, HStack, Image } from "@chakra-ui/react";
import shopLogo from "../assets/shop-logo.svg";
import SearchInput from "./SearchInput";
import { Link, useNavigate } from "react-router-dom";
import useProductQueryStore from "../store/productQueryStore";

const NavBar = () => {
  const navigate = useNavigate();
  const resetQuery = useProductQueryStore((s) => s.resetQuery);

  return (
    <HStack background={"gray.900"} paddingX={4}>
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
        <Image src={shopLogo} />
      </Box>
      <SearchInput />
    </HStack>
  );
};

export default NavBar;
