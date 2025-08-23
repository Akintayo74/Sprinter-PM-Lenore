"use client"
import React from 'react';
import Form from '@/components/Form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthProvider';

function LoginForm() {
  const { login } = useAuth()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [errors, setErrors] = React.useState({})
  const [isLoading, setIsLoading] = React.useState(false)
  const [showPassword, setShowPassword] = React.useState(false)
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      await login(email, password)
      router.push('/dashboard')
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
      showPasswordToggle: true,
      showPassword: showPassword,
      onTogglePassword: () => setShowPassword(!showPassword),
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
      renderAfterFields={
        <div className='text-right text-sm'>
          <Link href='' className='text-primary-500 underline'>
            Forgot Password?
          </Link>
        </div>
      }
    />
  )
}

export default LoginForm;