import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button, Form } from 'semantic-ui-react';
import TextInput from './components/textInput'

const LoginForm = ({ pristine, submitting, handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
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
    <div>
      <Button style={{width: "100%"}} primary color="blue">
        Log In
      </Button>
    </div>
  </Form>
)


export default reduxForm({
  form: 'LoginForm' 
})(LoginForm)