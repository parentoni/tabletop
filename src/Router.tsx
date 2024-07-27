import {
  createBrowserRouter,
} from "react-router-dom";
import { Register } from "./pages/auth/Register";
import {Home} from "./pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,

  },
  {
    path: "/",
    element: <Home />
  }
]);


