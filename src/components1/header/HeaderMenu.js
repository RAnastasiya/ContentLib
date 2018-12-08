import React from "react";
import { Link } from 'react-router-dom';


const HeaderMenu = ({color}) => (
  <nav style={{background: color}}>
    <a href="/"><div className="logo" /></a>
    <div className="header-nav">
      <Link to="/">Home</Link>
      <Link to="/news">News</Link>
      <Link to="/features">Features</Link>
      <Link to="/events">Events</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/profile">Profile</Link>
      <div className="login">
        <Link to="/login">Log In</Link>
      </div>
    </div>
  </nav>
);

export default HeaderMenu;