import React, { Component } from 'react'
import Menu from '../Menu'
import Slider from '../Slider'
import './style.css'


class Header extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Slider />
            </div>
        );
    }
}

export default Header
