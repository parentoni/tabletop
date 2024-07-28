import { createBrowserRouter } from "react-router-dom";
import { RegisterPage } from "./pages/auth/Register";
import { Home } from "./pages/home/Home";
import { Menu } from "./pages/menu/Menu";
import { Search } from "./pages/search/Search";
import { Calendar } from "./pages/calendar/Calendar";
import { Login } from "./pages/auth/Login";
import { Reserve } from "./pages/reserve/Reserve";
import { Statistics } from "./pages/menu/statistics/Statistics";
import { AccountInformation } from "./pages/menu/accountinformation/AccountInformation";
import { Settings } from "./pages/menu/settings/Settings";
import { Logout } from "./pages/menu/logout/Logout";

export const router = createBrowserRouter([
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <Login />
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
    path: "/calendar",
    element: <Calendar />,
  },
  {
    path: "/reserve",
    element: <Reserve />,
  },
  {
    path: "/statistics",
    element: <Statistics />,
  },
  {
    path: "/accountinformation",
    element: <AccountInformation />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
]);