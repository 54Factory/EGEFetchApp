import React from 'react'
import { Input } from 'antd'

const TextInput = ({input, width, type, placeholder, meta: {touched, error}}) => {
  return (

      <Input {...input} placeholder={placeholder} type={type} />
      //{touched && error && <Alert message={error} type="error"/>}

  )
}

export default TextInput
