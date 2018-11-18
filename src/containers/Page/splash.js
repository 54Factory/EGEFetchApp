import React, { Component } from 'react';
// import Input from '../../components/uielements/input';
// import Button from '../../components/uielements/button';
import LoginForm from '../Auth/Forms/LoginForm'
//import IntlMessages from '../../components/utility/intlMessages';
import SignInStyleWrapper from './signin.style';


class Splash extends Component {
  
  render() {
    console.log(this.props);
    
    return (
      <SignInStyleWrapper className="isoSignInPage">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <div className="isoSignInForm">
              <div className="isoInputWrapper">
                <LoginForm className="isoInputWrapper" />
              </div>
            </div>
          </div>
        </div>
      </SignInStyleWrapper>
    );
  }
}

export default (Splash);
