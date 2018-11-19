import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import TextInput from '../Auth/Forms/components/textInput';
import Checkbox from '../../components/uielements/checkbox';
import Button from '../../components/uielements/button';
import { login, socialLogin, signOutUser } from '../../redux/auth/actions';
import IntlMessages from '../../components/utility/intlMessages';
import SignInStyleWrapper from './signin.style';
import { Field, reduxForm } from 'redux-form';
import { Form } from 'antd';
import LoginForm from '../Auth/Forms/LoginForm';

const actions = {
  login,
  socialLogin,
  signOutUser
}

class SignIn extends Component {
  
  state = {
    redirectToReferrer: false
  };
  
  componentDidMount() {
    if(this.props.isLoggedIn) {
      this.setState({ redirectToReferrer: true });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (
      this.props.isLoggedIn !== nextProps.isLoggedIn &&
      nextProps.isLoggedIn === true
    ) {
      this.setState({ redirectToReferrer: true });
    }
  }

  handleLogin = () => {
    const { login } = this.props;
    login();
    this.props.history.push('/dashboard');
  };
  
  render() {
    const from = { pathname: '/dashboard' };
    const { redirectToReferrer } = this.state;
    const { login } = this.props
    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }
    return (
      <SignInStyleWrapper className="isoSignInPage">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <div className="isoLogoWrapper">
              <Link to="/dashboard">
                <IntlMessages id="page.signInTitle" />
              </Link>
            </div>
            <div className="isoSignInForm">
            <LoginForm />
            <Button type="warning" onClick={signOutUser}>
                  <IntlMessages id="page.signInButton" />
                </Button>
            <Form>
            <div className="isoInputWrapper">
                <Field
                  name="email"
                  component={TextInput}
                  type="text"
                  placeholder="Email Address"
                />
                </div>
            <div className="isoInputWrapper">

                <Field
                  name="password"
                  component={TextInput}
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="isoInputWrapper isoLeftRightComponent">
                <Checkbox>
                  <IntlMessages id="page.signInRememberMe" />
                </Checkbox>
                <Button type="primary" onClick={login}>
                  <IntlMessages id="page.signInButton" />
                </Button>
              </div>
              <p className="isoHelperText">
                <IntlMessages id="page.signInPreview" />
              </p>
              <div className="isoInputWrapper isoOtherLogin">
                <Button onClick={socialLogin} type="primary btnGooglePlus">
                  <IntlMessages id="page.signInGooglePlus" />
                </Button>
              </div>
              <div className="isoCenterComponent isoHelperWrapper">
                <Link to="" className="isoForgotPass">
                  <IntlMessages id="page.signInForgotPass" />
                </Link>
                <Link to="">
                  <IntlMessages id="page.signInCreateAccount" />
                </Link>
              </div>
            </Form>

            </div>
          </div>
        </div>
      </SignInStyleWrapper>
    );
  }
}

export default connect(
  state => ({
    isLoggedIn: state.auth.authenticated === true
  }),
  actions
)(reduxForm({form: 'loginForm'})(SignIn));
