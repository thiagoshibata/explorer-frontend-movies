/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from "react"

import { api } from "../services/api"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data

      localStorage.setItem("@movienotes:user", JSON.stringify(user))
      localStorage.setItem("@movienotes:token", token)

      api.defaults.headers.authorization = `Bearer ${token}`

      setData({ user, token })
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível autenticar")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@movienotes:user")
    localStorage.removeItem("@movienotes:token")
    setData({})
  }

  useEffect(() => {
    const user = localStorage.getItem("@movienotes:user")
    const token = localStorage.getItem("@movienotes:token")

    setData({ token, user: JSON.parse(user) })
  }, [])
  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
