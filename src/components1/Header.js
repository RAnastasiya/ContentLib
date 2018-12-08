import React from 'react';
import {connect} from "react-redux";

const Header = ({name, user, agentActivityChanged}) => (
    <header>
        <div className="logo"></div>

    </header>
);

function mapStateToProps(state) {
    return {
        user : state.app.user
    }
}

export default connect(mapStateToProps, null)(Header);