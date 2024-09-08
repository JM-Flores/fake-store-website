import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ProductsPage from "./pages/ProductsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <ProductsPage /> }],
  },
]);

export default router;
