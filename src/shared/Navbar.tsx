import {AlignJustify, Calendar, Home, Search} from "lucide-react";

export const Navbar = () => {
  return (
    <div className="btm-nav">
      <button>
        <Home className="h-5 w-5"/>
        <span className="btm-nav-label">Home</span>
      </button>
      <button className="active">
        <Calendar className="h-5 w-5"/>
        <span className="btm-nav-label">Warnings</span>
      </button>
      <button>
        <Search className="h-5 w-5"/>
        <span className="btm-nav-label">Statics</span>
      </button>
      <button>
        <AlignJustify className="h-5 w-5"/>
        <span className="btm-nav-label">Statics</span>
      </button>
    </div>
  )
}