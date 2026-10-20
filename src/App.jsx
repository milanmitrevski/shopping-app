import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home, { loader as itemsLoader } from "./pages/Home";
import Cart from "./pages/Cart";
import Root from "./pages/Root";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home />, loader: itemsLoader },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
