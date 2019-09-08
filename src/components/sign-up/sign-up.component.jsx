import React, { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, createUserProfileDocument } from '../../db/firebase'
import './sign-up.styles.scss' 

const Signup = () => {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    if (password !== confirmPassword) return alert(`passwords don't match`)

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password)

      await createUserProfileDocument(user, {displayName})

      setDisplayName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')

    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={e => setDisplayName(e.target.value)}
          autoComplete='username'
          label='Display Name'
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoComplete='email'
          label='Email'
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete='new-password'
          label='Password'
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          autoComplete='new-password'
          label='Confirm Password'
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  )
}
export default Signup
