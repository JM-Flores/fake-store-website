import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  CloseButton,
  Slide,
} from "@chakra-ui/react";

interface Props {
  status: "success" | "error";
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

const AlertSlide = ({ status, isOpen, message, onClose }: Props) => {
  return (
    <Slide
      direction="top"
      in={isOpen}
      onClick={(event) => event.stopPropagation()}
    >
      <Box p={4} position="fixed" bottom={0} width="100%" zIndex="banner">
        <Alert status={status} variant="solid">
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>{message}</AlertTitle>
          </Box>
          <CloseButton
            position="absolute"
            right="8px"
            top="8px"
            onClick={onClose}
          />
        </Alert>
      </Box>
    </Slide>
  );
};

export default AlertSlide;
