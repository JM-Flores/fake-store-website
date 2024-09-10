import {
  Button,
  ButtonProps,
  forwardRef,
  useDisclosure,
} from "@chakra-ui/react";
import useCartStore, { CartItem } from "../store/cartStore";
import { ForwardedRef, useState } from "react";
import AlertSlide from "./AlertSlide";

interface Props extends ButtonProps {
  item: CartItem;
}

const AddToCartButton = forwardRef(
  ({ item, ...props }: Props, ref: ForwardedRef<HTMLButtonElement>) => {
    const addToCart = useCartStore((s) => s.addItem);

    const [alertMessage, setAlertMessage] = useState<string | null>(null);
    const [alertStatus, setAlertStatus] = useState<"success" | "error">(
      "success"
    );
    const { isOpen, onOpen, onClose } = useDisclosure();

    const showAlert = (message: string, status: "success" | "error") => {
      setAlertMessage(message);
      setAlertStatus(status);
      onOpen();
      setTimeout(() => {
        onClose();
        setAlertMessage(null);
      }, 3000);
    };

    const handleAddToCart = (event: React.MouseEvent) => {
      event.stopPropagation();
      const isAdded = addToCart(item);
      if (isAdded) showAlert("Added to cart", "success");
      else showAlert("Exceeded max quantity", "error");
    };

    return (
      <>
        {alertMessage && (
          <AlertSlide
            status={alertStatus}
            isOpen={isOpen}
            message={alertMessage}
            onClose={onClose}
          />
        )}

        <Button ref={ref} onClick={handleAddToCart} {...props}>
          Add to Cart
        </Button>
      </>
    );
  }
);

export default AddToCartButton;
