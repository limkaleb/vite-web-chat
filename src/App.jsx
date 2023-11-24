import { useState } from 'react'

import { UserLogin } from './components/UserLogin'
import { Navbar } from './components/Navbar'
import { Chat } from './components/Chat'
import { v4 as uid } from 'uuid'
import { addUser } from './stores/userSlice'
import { useAppDispatch, useAppSelector } from './stores/hooks'

function App() {
  const dispatch = useAppDispatch()
  const { users } = useAppSelector((state) => state)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const handleLogin = (name) => {
    if (name.trim()) {
      const user = users.find((user) => user.name === name)
      let reqUser = { name }

      if (user) {
        reqUser.id = user.id
      } else {
        reqUser.id = uid()
        dispatch(addUser(reqUser))
      }
      setUser(reqUser)
      setIsLoggedIn(true)
    }
  }

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex justify-center p-8">
        {isLoggedIn ? (
          <Chat user={user} />
        ) : (
          <UserLogin handleLogin={handleLogin} />
        )}
      </div>
    </div>
  )
}

export default App
