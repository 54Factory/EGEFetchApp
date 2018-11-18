import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Button, Form, Label } from 'semantic-ui-react';
import TextInput from './components/textInput'
import SocialLogin from '../SocialLogin'
import { login, socialLogin } from '../../../redux/auth/actions'


const actions = {
  login,
  socialLogin
}

const LoginForm = ({ login, error, handleSubmit, socialLogin }) => (
  <Form size="large" onSubmit={handleSubmit(login)} >
    <Field
      name="email"
      component={TextInput}
      label="Email"    
    />
    <Field
      name="password"
      component={TextInput}
      label="Password"
      type="password"
    />
    { error && <Label basic color='red'>{error}</Label>}
    <div>
      <Button style={{width: "100%"}} primary color="blue">
        Log In
      </Button>
    </div>
    <div>
    <SocialLogin socialLogin={socialLogin}/>
    </div>
  </Form>
)


export default connect(null, actions)(reduxForm({form: 'LogIn Form'})(LoginForm));