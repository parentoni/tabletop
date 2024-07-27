import { useNavigate, useLocation } from "react-router-dom";
import { AlignJustify, Calendar, Home, Search } from "lucide-react";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = () => {
    navigate("/menu");
  };

  const handleSearchClick = () => {
    navigate("/search");
  };

  const handleCalendarClick = () => {
    navigate("/calendar");
  };

  const handleHomeClick = () => {
    navigate("/home");
  };

  return (
    <div className="btm-nav">
      <button
        className={location.pathname === "/home" ? "active" : ""}
        onClick={handleHomeClick}
      >
        <Home className="h-5 w-5" />
        <span className="btm-nav-label">Home</span>
      </button>
      <button
        className={location.pathname === "/calendar" ? "active" : ""}
        onClick={handleCalendarClick}
      >
        <Calendar className="h-5 w-5" />
        <span className="btm-nav-label">Reserve</span>
      </button>
      <button
        className={location.pathname === "/search" ? "active" : ""}
        onClick={handleSearchClick}
      >
        <Search className="h-5 w-5" />
        <span className="btm-nav-label">Search</span>
      </button>
      <button
        className={location.pathname === "/menu" ? "active" : ""}
        onClick={handleMenuClick}
      >
        <AlignJustify className="h-5 w-5" />
        <span className="btm-nav-label">Menu</span>
      </button>
    </div>
  );
};