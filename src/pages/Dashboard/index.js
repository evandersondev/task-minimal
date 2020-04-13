import React, { useState, useEffect } from 'react'
import { db } from '../../firebase'

import { Container } from './styles'
import Header from '../../components/Header'

export default () => {
  const [imageProfile, setImageProfile] = useState('')
  const [name, setName] = useState('')

  const getUserInfos = async () => {
    const userId = localStorage.getItem('userId')

    const response = db.collection('user')
    const data = await response.where('uid', '==', userId).get()

    setImageProfile(data.docs[0].data().imageProfile)
    setName(data.docs[0].data().name)
  }

  useEffect(() => {
    getUserInfos()
  }, [])

  return (
    <Container>
      <Header imageProfile={imageProfile} name={name} />

      <div className="board-container">
        <h1>Dashboard</h1>
      </div>
    </Container>
  )
}
