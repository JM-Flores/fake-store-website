import { Alert, AlertIcon, AlertTitle, Box, Slide } from "@chakra-ui/react";

interface Props {
  status: "success" | "error";
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

const AlertSlide = ({ status, isOpen, message, onClose }: Props) => {
  return (
    <Slide direction="top" in={isOpen}>
      <Box p={4} position="fixed" top={0} width="100%" zIndex="banner">
        <Alert status={status} variant="solid">
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>{message}</AlertTitle>
          </Box>
        </Alert>
      </Box>
    </Slide>
  );
};

export default AlertSlide;
