import { useNavigate } from "react-router-dom";
import {AlignJustify, Calendar, Home, Search} from "lucide-react";


export const Navbar = () => {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate("/menu");
  };

  const handleSearchClick = () => {
    navigate("/search")
  };

  const handleCalendarClick = () => {
    navigate("/reserve")
  };

  const handleHomeClick = () => {
    navigate("/home")
  };

  return (
    <div className="btm-nav">
      <button onClick={handleHomeClick}>
        <Home className="h-5 w-5"/>
        <span className="btm-nav-label">Home</span>
      </button>
      <button className="active" onClick={handleCalendarClick}>
        <Calendar className="h-5 w-5"/>
        <span className="btm-nav-label">Reserve</span>
      </button>
      <button onClick={handleSearchClick}>
        <Search className="h-5 w-5"/>
        <span className="btm-nav-label">Search</span>
      </button>
      <button onClick={handleMenuClick}>
        <AlignJustify className="h-5 w-5"/>
        <span className="btm-nav-label">Menu</span>
      </button>
    </div>
  );
};