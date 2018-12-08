import React, {Component} from 'react';
import Sidebar from "../components/Sidebar";
import {withRouter, Switch, Route } from "react-router-dom";
import Calls from "../screens/calls/Calls";
import Contacts from "../screens/contacts/Contacts";
import Conversations from "../components/Conversations";
import ActivityFeed from "../components/ActivityFeed";
import Analytics from "../components/Analytics";
import Team from "../components/Team";
import Settings from "../components/Settings";
import Home from "../components/Home";
import News from "../components/News";
import Features from "../components/Features";
import Events from "../components/Events";
import Profile from "../components/Profile";

class ProtectedRoutes extends Component {
    render() {
        return (
            <div className="app">
                <Sidebar active={this.props.location.pathname}/>
                <Switch>
                    <Route path="/profile" component={Profile}/>
                </Switch>
            </div>
        )
    }
}

export default withRouter(ProtectedRoutes);
