import React from "react"

const AuthContext = React.createContext({
  //   login: false
  //keep this empty
})

export const AuthProvider = AuthContext.Provider
export const AuthConsumer = AuthContext.Provider

export default AuthContext
