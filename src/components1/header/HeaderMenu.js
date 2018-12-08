import React from "react";
import { Link } from 'react-router-dom';


const HeaderMenu = ({color}) => (
  <nav style={{background: color}}>
    <a href="/"><div className="logo" /></a>
    <div className="header-nav">
      <Link to="/company">Company</Link>
      <div className="our-solution">
        <Link to="/our-solution">Our Solutions</Link><div className="arrow"> > </div>
        <div className="our-solution-block">
          <div>
            <div className="for-driver">
                <h1>For driver</h1>
                <div className="icon for-driver"><Link to="/driver">For driver ></Link></div>
                <p>Rent, manage, get money, communicate and get request</p>
            </div>
            <div className="for-fleet">
                <h1>For fleet</h1>
                <div>
                    <div className="icon enterprise"><Link to="/enterprise">Lacus Enterprise ></Link></div>
                    <p>Manage, dispatch, maintain</p>
                </div>
                <div>
                    <div className="icon maintenance"><Link to="/maintenance">Lacus Maintenance ></Link></div>
                    <p>Eco-System for Inventory and Repair Management</p>
                </div>
            </div>
          </div>
          <div className="lacus-ai">
            <div>
                <Link to="/lacus-ai">Lacus Ai ></Link>
                <p>Tailored Artifical Intelligence for Taxi Industry</p>
            </div>
            <div className="icon"/>
          </div>
        </div>
      </div>
      <Link to="/contact">Contact</Link>
      <Link to="/help">Help</Link>
      <div className="login">
        <Link to="/login">Log In</Link>
      </div>
    </div>
  </nav>
);

export default HeaderMenu;