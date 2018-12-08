import React, {Component} from 'react';
import { connect } from 'react-redux';
import { actions } from '../../services';
import { Redirect } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);

        // reset login status
        // this.props.dispatch(userActions.logout());

        this.state = {
            email: '',
            password: '',
            verification_code: '',
            redirectToReferrer: localStorage.getItem('token') ? localStorage.getItem('isLoading')===localStorage.getItem('token') : false,
            submitted: false
        };

        this.handleChange = this._handleChange.bind(this);
        this.requestCode  = this._requestCode.bind(this);
        this.resendCode   = this._resendCode.bind(this);
        this.verifyCode   = this._verifyCode.bind(this);
        this.goBack = this._goBack.bind(this);
    }

    _handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    _requestCode(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { email, password } = this.state;
        this.props.requestCode(email, password);
    }

    _resendCode(e) {
        e.preventDefault();
        const { email, password } = this.state;
        this.props.requestCode(email, password);
    }

    _verifyCode(e) {
        e.preventDefault();
        this.setState({ submitted: false });
        const { email, password, verification_code } = this.state;
        let res = this.props.verifyCode(email, password, verification_code);
        console.log("res - ", res);
        this.setState({ redirectToReferrer:  localStorage.getItem('token')});
    }

    _goBack(){
        window.location.reload();
    }

    render() {
        if (this.state.redirectToReferrer) {
            return <Redirect to="/" />;
        }

        let credentials = () => {
            if(this.props.phone_number != null){
                return null;
            }
            return (
                <form className="request-code" name="form" onSubmit={this.requestCode}>
                    <div className="error-block">{ this.props.errorMsg }</div>
                    <div className={'form-group' + (this.state.submitted && !this.state.email ? ' has-error' : '')}>
                        <input type="text"
                               className="form-control"
                               autoComplete="off"
                               placeholder="Email"
                               name="email"
                               value={this.state.email}
                               onChange={this.handleChange} />
                        {this.state.submitted && !this.state.email &&
                        <div className="error-block">is required</div>
                        }
                    </div>
                    <div className={'form-group' + (this.state.submitted && !this.state.password ? ' has-error' : '')}>
                        <input type="password"
                               className="form-control"
                               placeholder="Password"
                               name="password"
                               value={this.state.password}
                               onChange={this.handleChange} />
                        {this.state.submitted && !this.state.password &&
                        <div className="error-block">is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" onClick={this.requestCode}>Log in</button>
                    </div>
                </form>
            )
        };

        let code = () => {
            if(this.props.phone_number == null){
                return null;
            }
            return (
                <form name="form" onSubmit={this.verifyCode}>
                    <div className="back" onClick={this.goBack}>&larr;</div>
                    <p>We send you a verification code to your phone number ({this.props.phone_number})</p>
                    <div className="error-block verify">{ this.props.errorMsg }</div>
                    <div className={'form-group' + (!this.state.submitted && !this.state.verification_code ? ' has-error' : '')}>
                        <input type="text"
                               className="form-control"
                               placeholder='Verification Code'
                               name='verification_code'
                               value={this.state.verification_code}
                               onChange={this.handleChange} />
                        {!this.state.submitted && !this.state.verification_code &&
                        <div className="error-block">is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <div className="help-block" onClick={this.resendCode}>Resend code</div>
                        <button className="btn btn-primary" onClick={this.verifyCode}>Verify</button>
                    </div>
                </form>
            )
        };

        return (
            <div className="login-page">
                <div className="login-form">
                    <h2>Welcome to </h2>
                    <h1>Lacus Call center</h1>
                    {credentials()}
                    {code()}
                </div>
                <div className="img-with-logo"/>
            </div>
        )
    }
}



function mapStateToProps(state) {
    return {
        phone_number : state.login.phone_number,
        errorMsg : state.login.errorMsg
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        requestCode : (email, password) => dispatch(actions.LoginActions.requestCode(email, password)),
        verifyCode  : (email, password, verification_code) => dispatch(actions.LoginActions.verifyCode(email, password, verification_code)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);