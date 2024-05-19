import { Link, NavLink } from "react-router-dom";
import Home from "../Pages/Home";
import image1 from "../assets/Hackit__1_-removebg-preview.png";
// import { CgProfile } from "react-icons/cg";
import './Navbar.css'


const Navbar = () => {
  return (
    <nav className="h-20 w-full flex justify-between items-center  px-8 py-4 border-b-2 bg-gray-100 sticky top-0">
      <div className="h-20 w-44  flex justify-center items-center">
        <img src={image1} alt="Hackit Logo" className="w-full" />
      </div>

      <div className="links bg-purple-200 rounded-md px-4 py-2 flex gap-8">
        <NavLink
          className={(e) => {
            
            const activeStyles = e.isActive ? "bg-purple-400 text-white" : "hover:bg-purple-300";
            
            const defaultStyles = "p-2 rounded-md transition ease-in";
            
            return `${activeStyles} ${defaultStyles}`;
          }}
          to="/"
        >
          <span className="text-md">HOME</span>
        </NavLink>
        <NavLink
          className={(e) => {
            
            const activeStyles = e.isActive ? "bg-purple-400 text-white" : "hover:bg-purple-300";
            
            const defaultStyles = "p-2 rounded-md transition ease-in";
            
            return `${activeStyles} ${defaultStyles}`;
          }}
          to="/hackathons"
        >
          <span className="text-md">HACKATHONS</span>
        </NavLink>
        <NavLink
          className={(e) => {
            
            const activeStyles = e.isActive ? "bg-purple-400 text-white" : "hover:bg-purple-300";
            
            const defaultStyles = "p-2 rounded-md transition ease-in";
            
            return `${activeStyles} ${defaultStyles}`;
          }}
          to="/blog"
        >
          <span className="text-md">BLOG</span>
        </NavLink>
      </div>
      {/* <div className="h-16 w-16 flex justify-center items-center"> */}
        {/* <CgProfile className="text-3xl text-gray-600"></CgProfile> */}
      {/* </div> */}
      <div className="nav-login">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
        :<Link to='/login'><button>Login</button></Link>}
      </div>
    </nav>
  );
};

export default Navbar;