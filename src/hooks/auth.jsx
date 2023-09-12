import { createContext, useContext, useState, useEffect } from "react";

import { api } from '../services/api'

export const AuthContent = createContext({})

function AuthProvider({ children }){
  const [data, setData] = useState({})

  async function signIn({ email, password}){

    try{
      const response = await api.post('/sessions', {email, password})
      const { user, token } = response.data

      localStorage.setItem('@fidalguia:user', JSON.stringify(user))
      localStorage.setItem('@fidalguia:token', token)

      api.defaults.headers.common['Authorization'] =`Bearer ${token}`

      setData({ user, token })
    } catch(error){
      if(error.response){
        alert(error.response.data.message)
      } else{
        alert('não foi possível entrar')
      }
    }

  }

  function signOut(){
    localStorage.removeItem('@fidalguia:token')
    localStorage.removeItem('@fidalguia:user')

    setData({})
  }

  useEffect(() => {
    const token = localStorage.getItem('@fidalguia:token')
    const user = localStorage.getItem('@fidalguia:user')

    if(token && user){
      api.defaults.headers.common['Authorization'] =`Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])

  return(
    <AuthContent.Provider value={{
        signIn,
        user: data.user,
        signOut
      }}>
      {children }
    </AuthContent.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContent)

  return context
}

export { AuthProvider, useAuth }