import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  CloseButton,
  Slide,
} from "@chakra-ui/react";
import useAlertStore from "../store/alertStore";
import { useEffect } from "react";

const AlertSlide = () => {
  const { isOpen, status, message, hideAlert } = useAlertStore((state) => ({
    isOpen: state.isOpen,
    status: state.status,
    message: state.message,
    hideAlert: state.hideAlert,
  }));

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        hideAlert();
      }, 3000); // Automatically hide alert after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [isOpen, hideAlert]);

  return (
    <Slide
      direction="top"
      in={isOpen}
      onClick={(event) => event.stopPropagation()}
    >
      <Box
        p={4}
        position="fixed"
        bottom={0}
        width="50%"
        mx="auto"
        zIndex="banner"
        left={0}
        right={0}
      >
        <Alert status={status} variant="solid">
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>{message}</AlertTitle>
          </Box>
          <CloseButton
            position="absolute"
            right="8px"
            top="8px"
            onClick={hideAlert}
          />
        </Alert>
      </Box>
    </Slide>
  );
};

export default AlertSlide;
