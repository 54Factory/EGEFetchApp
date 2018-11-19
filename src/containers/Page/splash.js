import React, { Component } from 'react';
import LoginForm from '../Auth/Forms/LoginForm'
import SignInStyleWrapper from './signin.style';


class Splash extends Component {
  
  render() {
    console.log(this.props);
    
    return (
      <SignInStyleWrapper className="isoSignInPage">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <div className="isoSignInForm">
              <div>
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </SignInStyleWrapper>
    );
  }
}

export default (Splash);
