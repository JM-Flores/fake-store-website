import { Box, Button, HStack, Image, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import shopLogo from "../assets/shop-logo.svg";
import useProductQueryStore from "../store/productQueryStore";
import SearchInput from "./SearchInput";
import CartDrawer from "./CartDrawer";
import { useState } from "react";
import ErrorAlert from "./ErrorAlert";

const NavBar = () => {
  const navigate = useNavigate();
  const resetQuery = useProductQueryStore((s) => s.resetQuery);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const showError = (message: string) => {
    setErrorMessage(message);
    onOpen();
    setTimeout(() => {
      onClose();
      setErrorMessage(null);
    }, 3000); // Adjust the timeout duration as needed
  };

  return (
    <>
      <Button onClick={() => showError("This is an error message!")}>
        Trigger Error
      </Button>
      {errorMessage && (
        <ErrorAlert isOpen={isOpen} message={errorMessage} onClose={onClose} />
      )}

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
        <CartDrawer />
      </HStack>
    </>
  );
};

export default NavBar;
