import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isLoggedIn,setIsLoggedIn] = useState("Login");
  useEffect(() =>{
    console.log("useEffect called")
  },[])

  console.log("Header Rendered")
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Food App Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
         <button className="login" onClick={()=>{
          isLoggedIn === "Login"? setIsLoggedIn("Logout"):setIsLoggedIn("Login")}}>{isLoggedIn}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
