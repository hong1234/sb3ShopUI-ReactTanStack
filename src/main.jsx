import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ContextProvider } from "./AppContext";

// import './index.css'
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.jsx";
import { ErrorPage } from "./pages/ErrorPage";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import NewProductForm from "./pages/NewProductForm";
import Detail from "./pages/Detail";
import Order from "./pages/Order";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/admin/new",
        element: <NewProductForm />,
      },
      {
        path: "/shop/products",
        element: <Shop />,
        children: [
          {
            path: "/shop/products/:productId",
            element: <Detail />,
          },
          {
            path: "/shop/products/cart",
            element: <Cart />,
          },
        ],
      },
      {
        path: "/shop/orders/:orderId",
        element: <Order />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <ContextProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </ContextProvider>,
  // </StrictMode>,
);
