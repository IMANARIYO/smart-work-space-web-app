import { useState } from 'react'
import { LoginUserContext } from './LoginUserContext'

export const LoginUserProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState({
    username: 'Admin',
    email: 'admin@ihuza.com'
  })

  const updateUsername = newUsername => {
    setLoginUser({
      ...loginUser,
      username: newUsername
    })
  }

  return (
    <LoginUserContext.Provider
      value={{ loginUser, setLoginUser, updateUsername }}
    >

      {children}
    </LoginUserContext.Provider>
  )
}
