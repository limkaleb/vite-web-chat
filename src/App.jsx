import { useState } from 'react'

import { UserLogin } from './components/UserLogin'
import { Navbar } from './components/Navbar'
import { Chat } from './components/Chat'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const handleLogin = (name) => {
    console.log('name: ', name)
    setIsLoggedIn(true)
  }

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex justify-center p-8">
        {isLoggedIn ? <Chat /> : <UserLogin handleLogin={handleLogin} />}
      </div>
    </div>
  )
}

export default App
