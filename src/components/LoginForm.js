"use client"
import { useState } from 'react';
import Form from '@/components/Form';

function SignInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      // Your login logic here
      console.log({ email, password })
    } catch (error) {
      setErrors({ general: error.message })
    } finally {
      setIsLoading(false)
    }
  }

  const fields = [
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      value: email,
      onChange: (e) => setEmail(e.target.value),
      placeholder: 'Enter your email',
      error: errors.email,
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      value: password,
      onChange: (e) => setPassword(e.target.value),
      placeholder: 'Enter your password',
      error: errors.password,
      props: { // Additional validation props
        minLength: 8,
        required: true
      }
    }
  ]

  return (
    <Form
      fields={fields}
      onSubmit={handleSubmit}
      submitText="Continue"
      isLoading={isLoading}
    />
  )
}

export default SignInForm;