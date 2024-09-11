import CartDetails from "../entities/CartDetails";
import Invoice, { ProductInvoice } from "../entities/Invoice";
import calculateDiscountPrice from "./calculateDiscountedPrice";
import getCartTotalPrice from "./getCartTotalPrice";

const createInvoice = (cart: CartDetails)=> {
    let products: ProductInvoice[] = [];
    cart.forEach(item => {
        if (item.selected) products.push({
            id: item.product.id,
            name: item.product.title,
            price: calculateDiscountPrice(item.product.price, item.product.discountPercentage),
            quantity: item.quantity,
        })
    })
    const totalPrice = getCartTotalPrice(cart);
    return products.length > 0 ? {products, totalPrice} as Invoice : null;
}

export default createInvoice;