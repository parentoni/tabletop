import {
  createBrowserRouter,
} from "react-router-dom";
import { Register } from "./pages/auth/Register";
import {Landing} from "./pages/home/Landing";

export const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,

  },
  {
    path: "/",
    element: <Landing />
  }
]);


