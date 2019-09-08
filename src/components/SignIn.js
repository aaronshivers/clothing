import React, { useState } from 'react'
import FormInput from './FormInput'
import CustomButton from './CustomButton'
import { signInWithGoogle } from '../db/firebase'

const SignInPage = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleSignIn = event => {
    event.preventDefault()
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={ handleSignIn }>
        <FormInput
          name="email"
          type="email"
          label="email"
          autoComplete="email"
          value={ email }
          required
          handleChange={ e => setEmail(e.target.value) }
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          autoComplete="password"
          value={ password }
          required
          handleChange={ e => setPassword(e.target.value) }
        />
        <div className='buttons'>
          <CustomButton>sign in</CustomButton>
          <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>
            sign in with google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignInPage
