import { useEffect, useState } from "react";
import Product from "../entities/Product";
import APIClient from "../services/apiClient";
import useCartStore from "../store/cartStore";
import CartDetails from "../entities/CartDetails";

const apiClient = new APIClient<Product>('');

const useCartDetails = () => {
  const cartItems = useCartStore((s) => s.cartItems);

  const [cartDetails, setCartDetails] = useState<CartDetails>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const productPromises = await Promise.all(
          cartItems.map(async (item) => {
            const product = await apiClient.get(item.productId);
            return { product, quantity: item.quantity, selected: item.selected || false };
          })
        );
        setCartDetails(productPromises);
        setError(null); // Clear any previous errors if successful
      } catch (err) {
        setError(new Error("Failed to fetch cart details"));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [cartItems]);

  return { cartDetails, isLoading, error };
}

export default useCartDetails;