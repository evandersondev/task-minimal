import React, { useState, useEffect } from 'react'
import { db } from '../../firebase'

import { Container, BoardContent } from './styles'
import { MdAdd, MdMoreVert, MdWatchLater } from 'react-icons/md'
import Header from '../../components/Header'

export default () => {
  const [imageProfile, setImageProfile] = useState('')
  const [name, setName] = useState('')
  const [tasks, setTasks] = useState(true)

  const week = [
    '',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]
  const date = new Date()
  const WeekDay = week[date.getDay()]
  const day = date
    .toLocaleString('pt-BR', {
      dateStyle: 'short',
    })
    .replace(/\//g, '.')

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

      <BoardContent>
        {tasks ? (
          <div className="content">
            <div className="data">
              <h2>{WeekDay}</h2>
              <h3>{day}</h3>
            </div>
            <div className="bodyContent">
              <ul className="process">
                <li>
                  <span id="pedding">25</span>pedding
                </li>
                <li>
                  <span id="progress">15</span>in progress
                </li>
                <li>
                  <span id="review">2</span>review
                </li>
                <li id="done">
                  <span id="done">8</span>done
                </li>
              </ul>

              <div className="task-box">
                <div className="task-title">
                  <strong>create a task minimal app</strong>

                  <button addButton type="button">
                    <MdAdd size={22} color="#c3c7d1" />
                  </button>
                </div>

                <div className="task-list">
                  <ul>
                    <li>
                      <button addButton type="button">
                        <MdMoreVert color="#c3c7d1" size={22} />
                      </button>

                      <MdWatchLater color="#3742fa" size={18} />
                      <input
                        type="text"
                        unselectable
                        // autoFocus
                        defaultValue="Create a function of task list"
                      />
                    </li>

                    <li>
                      <button addButton type="button">
                        <MdMoreVert color="#c3c7d1" size={22} />
                      </button>

                      <MdWatchLater color="#3742fa" size={18} />
                      <input
                        type="text"
                        unselectable
                        // autoFocus
                        defaultValue="Create a function of task list"
                      />
                    </li>

                    <li>
                      <button addButton type="button">
                        <MdMoreVert color="#c3c7d1" size={22} />
                      </button>

                      <MdWatchLater color="#3742fa" size={18} />
                      <input
                        type="text"
                        unselectable
                        // autoFocus
                        defaultValue="Create a function of task list"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h1>Not have task on board</h1>
        )}
      </BoardContent>
    </Container>
  )
}
