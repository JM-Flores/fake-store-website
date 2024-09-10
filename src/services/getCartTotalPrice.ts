import CartDetails from "../entities/CartDetails";
import calculateDiscountPrice from "./calculateDiscountedPrice";

const getCartTotalPrice = (cart: CartDetails) => {
    return cart.reduce((acc,curr) => (
        curr.selected ?
        acc +  calculateDiscountPrice(curr.product.price, curr.product.discountPercentage)* curr.quantity :
        acc
    ), 0);
}

export default getCartTotalPrice;