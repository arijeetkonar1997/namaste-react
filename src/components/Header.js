import { LOGO_URL } from "../utils/constants";
import { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [isLoggedIn,setIsLoggedIn] = useState("Login");
  const onlineStatus = useOnlineStatus()
  useEffect(() =>{
  },[])

  const {LoggedInUser} = useContext(UserContext)

  return (
    <div className="header flex justify-between bg-purple-200 shadow-lg m-2">
      <div className="logo-container">
        <img className="logo w-40" src={LOGO_URL} alt="Food App Logo" />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4">Cart</li>
         <button className="login" onClick={()=>{
          isLoggedIn === "Login"? setIsLoggedIn("Logout"):setIsLoggedIn("Login")}}>{isLoggedIn}</button>
          <li className="px-4 font-bold">{LoggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
