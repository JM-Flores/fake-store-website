import { useEffect, useState } from "react";
import Product from "../entities/Product";
import APIClient from "../services/apiClient";
import useCartStore from "../store/cartStore";
import CartDetails from "../entities/CartDetails";

const apiClient = new APIClient<Product>('');

const useCartDetails = () => {
  const cartItems = useCartStore((s) => s.cartItems);

  const [cartDetails, setCartDetails] = useState<CartDetails>([]);

  useEffect(() => {
      const fetchData = async () => {
        const productPromises = await Promise.all(cartItems.map(async (item) => {
          const product = await apiClient.get(item.productId);
          return { product, quantity: item.quantity, selected: item.selected || false };
        }));
        setCartDetails(productPromises);
      };
  
      fetchData();
    }, [cartItems]);

  return cartDetails;
}

export default useCartDetails;