import Product from "./Product";

export interface CartDetail {
    product: Product;
    quantity: number;
    selected: boolean;
  }

interface CartDetails extends Array<CartDetail> {}

export default CartDetails;