import {
  Slide,
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

const ErrorAlert = ({ isOpen, message, onClose }: Props) => {
  return (
    <Slide direction="top" in={isOpen}>
      <Box p={4} position="fixed" top={0} width="100%" zIndex="banner">
        <Alert status="error" variant="solid">
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription display="block">{message}</AlertDescription>
          </Box>
        </Alert>
      </Box>
    </Slide>
  );
};

export default ErrorAlert;
