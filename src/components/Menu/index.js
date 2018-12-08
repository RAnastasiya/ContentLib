import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

class Menu extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/features">Features</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/login">Log In</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            </div>
        );
    }
}

export default Menu;
