import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import NotFound from "./Components/NotFound";
import App from "./Components/App";
import CheckOut from "./Components/CheckOut";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//lazy loading (import component using lazy and provide suspense) for some components for optimization
const ProductDetail = lazy(() => import("./Components/ProductDetail"));
const Cart = lazy(() => import("./Components/Cart"));
const ProductList = lazy(() => import("./Components/ProductList"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <ProductList />
          </Suspense>
        ),
      },
      {
        path: "/CheckOut",
        element: <CheckOut />,
      },
      {
        path: "/ProductDetail/:id",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <ProductDetail />
          </Suspense>
        ),
      },
      {
        path: "/Cart",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter}></RouterProvider>
  </StrictMode>
);
