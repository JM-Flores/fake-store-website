import { Box, HStack, Image } from "@chakra-ui/react";
import shopLogo from "../assets/shop-logo.svg";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack background={"gray.900"} paddingX={4}>
      <Link to={"/"}>
        <Box overflow="hidden" width="100px" height="60px" display="flex">
          <Image src={shopLogo} />
        </Box>
      </Link>
      <SearchInput />
    </HStack>
  );
};

export default NavBar;
