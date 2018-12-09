import React from "react";
import Menu from "react-burger-menu/lib/menus/slide";
import { Link } from 'react-router-dom';


const HeaderMenuMobile = ({color}) => (
  <div className="nav-mob" style={{background: color}}>
    <a href="/"><div className="logo" /></a>
    <Menu right width="100%" isOpen={false} className="bm-menu">
      <Link className="bm-item-list" to="/">Home</Link>
      <Link className="bm-item-list" to="/news">News</Link>
      <Link className="bm-item-list" to="/features">Features</Link>
      <Link className="bm-item-list" to="/events">Events</Link>
      <Link className="bm-item-list" to="/contacts">Contacts</Link>
      <Link className="bm-item-list" to="/profile">Profile</Link>
      <a  className="bm-item-list menu-item--small" href="">Settings</a>
    </Menu>
  </div>
);

export default HeaderMenuMobile;