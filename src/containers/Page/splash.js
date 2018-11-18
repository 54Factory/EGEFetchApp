import React, { Component } from 'react';
import Input from '../../components/uielements/input';
import Button from '../../components/uielements/button';
import IntlMessages from '../../components/utility/intlMessages';
import SignInStyleWrapper from './signin.style';


class Splash extends Component {
  
  render() {

    return (
      <SignInStyleWrapper className="isoSignInPage">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <div className="isoSignInForm">
              <div className="isoInputWrapper">
                <Input size="large" placeholder="Username" />
              </div>
              <div className="isoInputWrapper">
                <Input size="large" type="password" placeholder="Password" />
              </div>
              <div className="isoInputWrapper isoLeftRightComponent">
                <Button type="primary" onClick={this.handleLogin}>
                  <IntlMessages id="page.signInButton" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SignInStyleWrapper>
    );
  }
}

export default (Splash);
