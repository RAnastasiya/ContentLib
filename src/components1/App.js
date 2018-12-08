import React, {Component} from 'react';
import {Route, Router} from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory'
import Login from "./login/Login";
import Home from "../components/Home";
import News from "../components/News";


const newHistory = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <Router history={newHistory}>
               <div>
                   <Route exact path="/login" component={Login}/>
                   <Route path="/" exact component={Home}/>
                   <Route path="/news" component={News}/>
                   {/*<Route path="/features" component={Features}/>*/}
                   {/*<Route path="/events" component={Events}/>*/}
                   {/*<Route path="/contacts" component={Contacts}/>*/}
                   {/*<PrivateRoute path="/" component={ProtectedRoutes}/>*/}
               </div>
            </Router>
        )
    }
}

export default App;
