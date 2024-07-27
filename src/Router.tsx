import {
  createBrowserRouter,
} from "react-router-dom";
import { RegisterPage } from "./pages/auth/Register";
import {Home} from "./pages/home/Home";
import {Menu} from "./pages/menu/Menu";
import {Search} from "./pages/search/Search";
import {Reserve} from "./pages/reserve/Reserve"

export const router = createBrowserRouter([
  {
    path: "/register",
    element: <RegisterPage />,

  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/reserve",
    element: <Reserve />,
  },
]);


