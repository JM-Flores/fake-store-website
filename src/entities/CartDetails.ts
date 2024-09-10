import Product from "./Product";

interface CartDetail {
    product: Product;
    quantity: number;
    selected: boolean;
  }

interface CartDetails extends Array<CartDetail> {}

export default CartDetails;