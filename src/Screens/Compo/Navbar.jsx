import React, { useState } from "react";
import "./Navbar.css";
import { IoIosMenu } from "react-icons/io";
import logo from "../../assets/1logo.png"
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navigate  = useNavigate();
  const clear = ()=>{
    localStorage.clear();
    navigate('/')
  } 
  return (
    <nav className="navbar" >
      <div  className="navbar-logo ">
        
        <h1 className="d-inline-block"><img src={logo} alt="TJHMS"  style={{height:"150px",width:"300px"}} he srcset="" /> Jetal 
HOTEL-MANAGEMENT-SYSTEM
</h1>
        <span onClick={clear} className="btn btn-primay " style={{marginTop:"px"}}>Logout
          
        </span>

        
      </div>
      
      <div className="menu-toggle" >
      
      <button className="toggle-btn" onClick={props.functoggleSidebar}>
      <IoIosMenu className="fs-1 " />

      </button>
      </div>
    </nav>
  );
};

export default Navbar;
