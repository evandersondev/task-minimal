import React, { useState } from 'react'
import { auth } from '../../firebase'

import { Container } from './styles'
import { MdExitToApp } from 'react-icons/md'

export default ({ imageProfile, name }) => {
  const [menu, setMenu] = useState(false)

  const showMenu = () => {
    menu ? setMenu(false) : setMenu(true)
  }

  const closeSession = async event => {
    event.preventDefault()
    try {
      await auth.signOut()
      await localStorage.clear()
      window.location.reload()
    } catch {
      return ''
    }
  }

  return (
    <Container>
      {name && <h4>Welcome {name}</h4>}
      <div className="menu-container">
        <button onClick={showMenu} type="button" className="image-box">
          {imageProfile ? (
            <img src={imageProfile} alt="Image Profile" />
          ) : (
            <div className="loading"></div>
          )}
        </button>
        {menu && (
          <div className="menu">
            <ul>
              <li>
                <MdExitToApp size={22} color="#f5f5f5" />
                <button type="button" onClick={closeSession}>
                  Log out
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </Container>
  )
}
