import {
  createBrowserRouter,
} from "react-router-dom";
import { Register } from "./pages/auth/Register";
import {Home} from "./pages/home/Home";
import {Menu} from "./pages/menu/Menu";

export const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,

  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);


