import React, { Component } from 'react';
import HeaderMenu from "../header/HeaderMenu";
import HeaderMenuMobile from "../header/HeaderMenuMobile";

class Home extends Component {
    render() {
        return (
          <div className="home">
            {window.innerWidth > 760 ? <HeaderMenu color="#FFFFFF" /> : <HeaderMenuMobile color="#FFFFFF" />}

            Home
          </div>
        );
    }
}

export default Home;