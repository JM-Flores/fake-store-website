import CartDetails from "../entities/CartDetails";
import calculateDiscountPrice from "./calculateDiscountedPrice";

const getCartTotalPrice = (cart: CartDetails) => {
    return cart.reduce((acc,curr) => (
        acc +  calculateDiscountPrice(curr.product.price, curr.product.discountPercentage)* curr.quantity
    ), 0);
}

export default getCartTotalPrice;