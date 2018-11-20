import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

function SocialLogin({socialLogin}) {
  return (
    <div>
      <Button style={{width: "100%"}} onClick={() => socialLogin('google')} type="button" fluid color="google plus">
        <Icon name="google plus" />
        Login with Google
      </Button>
    </div>
  )
}

export default SocialLogin
