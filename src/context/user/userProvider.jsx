// HOC
/* eslint-disable react/prop-types */
import {useReducer} from 'react'
import {UserContext} from "./userContext"
import userReducer from './userReducer'

export const UserProvider = ({children}) => {
  const [user,dispatchUser]=useReducer(userReducer,null)
  return (
    <UserContext.Provider value={[user,dispatchUser]}>
        {children}
    </UserContext.Provider>
  )
}

