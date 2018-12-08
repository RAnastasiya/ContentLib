import React, { Component } from 'react'
import { Route, Redirect, withRouter  } from 'react-router-dom'
import Breadcrumbs from '../Breadcrumbs'
import Categories from '../Categories'
import Home from '../Home'
import News from '../News'
import Features from '../Features'
import Events from '../Events'
import Contacts from '../Contacts'
// import Login from '../../components/Login'
import Signup from '../../components/Signup'
import Profile from '../Profile'
import './style.css'

const AuthStatus = withRouter(({ history }) => (
    AuthService.isAuthenticated ? (
      <p>
        Welcome! <button onClick={() => {
          AuthService.logout(() => history.push('/'))
        }}>Sign out</button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
  ));

const AuthService = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 100)
    },
    logout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100)
    }
};

const SecretRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        AuthService.isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
);

class Login extends React.Component {
    state = {
      redirectToPreviousRoute: false
    };
  
    login = () => {
      AuthService.authenticate(() => {
        this.setState({ redirectToPreviousRoute: true });
      });
    };
  
    render() {
      const { from } = this.props.location.state || { from: { pathname: "/" } };
      const { redirectToPreviousRoute } = this.state;
  
      if (redirectToPreviousRoute) {
        return <Redirect to={from} />;
      }
  
      return (
        <div>
          <p>You must log in to view the page at {from.pathname}</p>
          <button onClick={this.login}>Log in</button>
        </div>
      );
    }
  }

class Main extends Component {
    render() {
        return (
            <div>
                <AuthStatus />
                <Breadcrumbs />
                <Categories />
                <Route path="/" exact component={Home}/>
                <Route path="/news" component={News}/>
                <Route path="/features" component={Features}/>
                <Route path="/events" component={Events}/>
                <Route path="/contacts" component={Contacts}/>
                <Route path='/login' component={Login} />
                <Route path="/signup" component={Signup}/>
                <SecretRoute path="/profile" component={Profile}/>
            </div>
        );
    }
}

export default Main;
