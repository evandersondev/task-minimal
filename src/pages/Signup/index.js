import React, { useState } from 'react'
import api from '../../services/api'
import { auth, db } from '../../firebase'
import { Link } from 'react-router-dom'

import { Container } from './styles'
import Alert from '../../components/Alert'

export default () => {
  const [username, setUserName] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState({
    ischange: false,
    password: '',
  })

  const [imageProfile, setImageProfile] = useState('')
  const [messageError, setMessageError] = useState('')
  const [alert, setAlert] = useState(false)

  const showImageProfile = async () => {
    try {
      const {
        data: { avatar_url, name },
      } = await api.get(username)

      setImageProfile(avatar_url)
      setName(name)
      setMessageError('')
    } catch (err) {
      setMessageError('Github not found! Try again.')
    }
  }

  const isPasswordCorrect = value => {
    if (confirmPassword.password === value) {
      confirmPassword.password.length < 6
        ? setMessageError('Password should be at least 6 character')
        : setMessageError('')

      setPassword(value)
    } else {
      setMessageError('Password not is correct! Try again.')
    }
  }

  const formSubmit = async event => {
    event.preventDefault()

    try {
      const {
        user: { uid },
      } = await auth.createUserWithEmailAndPassword(email, password)

      db.collection('user').add({
        username,
        email,
        name,
        imageProfile,
        uid,
        tasks: [],
      })

      setMessageError('')
      setAlert(true)
    } catch {
      setMessageError('Some information not correct! Try again.')
    }
  }

  const closeModal = () => {
    setAlert(false)
  }

  return (
    <Container>
      {alert && (
        <Alert message="User created with success!" close={closeModal} />
      )}

      <h1>Sign up!</h1>

      {imageProfile === '' ? (
        ''
      ) : (
        <div className="image-profile">
          <img src={imageProfile} alt="Profile" />
        </div>
      )}

      <strong>{messageError}</strong>

      <form onSubmit={formSubmit}>
        <div className="input-box">
          <input
            onChange={e => setUserName(e.target.value)}
            value={username}
            onBlur={showImageProfile}
            placeholder="Github username"
            type="text"
          />
        </div>

        <div className="input-box">
          <input
            placeholder="E-mail"
            onChange={e => setEmail(e.target.value)}
            value={email}
            type="email"
          />
        </div>

        <div className="input-box">
          <input
            placeholder="Password"
            value={confirmPassword.password}
            onChange={e =>
              setConfirmPassword({
                ischange: true,
                password: e.target.value,
              })
            }
            type="password"
          />
        </div>

        {confirmPassword.ischange && (
          <div className="input-box">
            <input
              placeholder="Confirm password"
              type="password"
              onBlur={e => isPasswordCorrect(e.target.value)}
            />
          </div>
        )}
        <button>Create</button>
      </form>
      <p>
        Already have account? <Link to="/">back login</Link>
      </p>
    </Container>
  )
}
