import { Button, ButtonProps, forwardRef } from "@chakra-ui/react";
import { ForwardedRef } from "react";
import useAlertStore from "../store/alertStore";
import useCartStore, { CartItem } from "../store/cartStore";

interface Props extends ButtonProps {
  item: CartItem;
}

const AddToCartButton = forwardRef(
  ({ item, ...props }: Props, ref: ForwardedRef<HTMLButtonElement>) => {
    const addToCart = useCartStore((s) => s.addItem);

    const showAlert = useAlertStore((s) => s.showAlert);

    const handleAddToCart = (event: React.MouseEvent) => {
      event.stopPropagation();
      const isAdded = addToCart(item);
      if (isAdded) showAlert("success", "Added to cart");
      else showAlert("error", "Exceeded max quantity");
    };

    return (
      <>
        <Button ref={ref} onClick={handleAddToCart} {...props}>
          Add to Cart
        </Button>
      </>
    );
  }
);

export default AddToCartButton;
