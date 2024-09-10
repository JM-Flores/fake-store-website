import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ProductsListingPage from "./pages/ProductsListingPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products/", element: <ProductsListingPage /> },
      { path: "products/:id", element: <ProductDetailPage /> },
      { path: "checkout/", element: <CheckoutPage /> },
    ],
  },
]);

export default router;
