import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../../firebase'

import { Container } from './styles'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'

export default () => {
  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [visible, setVisible] = useState(false)
  const [messageError, setMessageError] = useState('')

  const showPassword = event => {
    event.preventDefault()
    visible ? setVisible(false) : setVisible(true)
  }

  const formSubmit = async event => {
    event.preventDefault()

    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password)
      setMessageError('')
      localStorage.setItem('userId', user.uid)
      history.push('/dashboard')
    } catch (e) {
      setMessageError('Some information not correct! Try again.')
    }
  }

  useEffect(() => {
    const sessionVerify = () => {
      const userId = localStorage.getItem('userId')

      userId && history.push('/dashboard')
    }
    sessionVerify()
  })

  return (
    <Container>
      <h1>Welcome back!</h1>

      <strong>{messageError}</strong>

      <form onSubmit={formSubmit}>
        <div className="input-box">
          <input
            placeholder="E-mail"
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            placeholder="Password"
            type={visible ? 'text' : 'password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button type="submit" onClick={showPassword}>
            {visible ? (
              <MdVisibility size={20} color="#f5f5f5" />
            ) : (
              <MdVisibilityOff size={20} color="#f5f5f5" />
            )}
          </button>
        </div>
        <button>Login</button>
      </form>
      <p>
        Don't have account? <Link to="/signup">click here</Link>
      </p>
    </Container>
  )
}
