import { useNavigate } from "react-router-dom";
import {AlignJustify, Calendar, Home, Search} from "lucide-react";


export const Navbar = () => {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate("/menu");
  };

  return (
    <div className="btm-nav">
      <button>
        <Home className="h-5 w-5"/>
        <span className="btm-nav-label">Home</span>
      </button>
      <button className="active">
        <Calendar className="h-5 w-5"/>
        <span className="btm-nav-label">Reserve</span>
      </button>
      <button>
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