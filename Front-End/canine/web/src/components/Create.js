import React from "react";
// import logo from "../logo.svg";
import { NavLink } from "react-router-dom";
import axios from "axios";


import "./Create.css"

const Create = ({ user, setUser }) => {
  const logout = async () => {
    try {
      const config = {
        headers: {
          Authorization: user.token,
        },
      };
      const res = await axios.get("/auth/logout", config);
      if (!res.data.success) {
        return;
      }
      setUser({});
      localStorage.removeItem("servicesAppointmentUser");
    } catch (error) {}
  };
  const guestLinks = (
    <nav className='topnavbar'>
      <div className='bar-container'>
      <ul className="navbar-nav">
        
        <li className="nav-item-navPadding">
          <NavLink className="nav-link" to="/signup">
            SignUp
          </NavLink>
        </li>
        <li className="nav-item-navPadding">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
      </ul>
      </div>
      </nav>
  );

  const userLinks = (
    <nav className='topnavbar'>
      <div className='bar-container'>
    
      <ul className="navbar-nav">
        <li className="nav-item-navPadding">
          <NavLink className="nav-link" to="/services">
          Dog Details
          </NavLink>
        </li>
          <li className="nav-item-navPadding">
            <a
              className="nav-link"             
            >
              {user.name}
            </a>
            </li>
            <li className="nav-item-navPadding">
            {/* <div className="nav-item-navPadding"> */}
              <NavLink className="nav-link" to="/admin/addservice">
                Add Your Pet Details
              </NavLink>
            {/* </div> */}
          </li>
        
      </ul>
      <ul className="ml-auto navbar-nav">
        <li className="nav-item-mr-2">
          <NavLink className="nav-link"  to="/admin/addservice">
            Welcome {user.name}<i class="far fa-user-circle fa-2x"/>
          </NavLink>
        </li>

        <li className="nav-item">

          {/* <button className="log-btn"> */}
          <NavLink
            color="black"
            className="nav-link"
            type="button"
            onClick={logout}
            to="/main"
          >
            LOGOUT
            
          </NavLink>
          {/* </button> */}
        </li>
      </ul>
      </div>
      </nav>
    
  );
  return (
    <nav className="navbar navbar-expand-lg nav-cont">
      <NavLink className="navbar-brand" to="/">
        <img
          // src="https://gist.githubusercontent.com/prashankhan/5fed43125e54483377b5ee62fce5080e/raw/209c1e2d629196d5bb934be0ed4267bbdae1b24c/kishobigan.svg"
          style={{width: "200px"}}
          className="d-inline-block mr-2"
          alt=""
        />
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        {user.email ? userLinks : guestLinks}
      </div>
    </nav>
  );
};

export default Create;
