import React, { Component } from 'react'
import Header from "../../components1/Header";
import Footer from "../../components1/Footer";

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Header />
                Home
                <Footer />
            </div>
        );
    }
}

export default Home;
