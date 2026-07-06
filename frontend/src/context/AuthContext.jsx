import { createContext, useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import api from '../services/api.js'

const AuthContext = createContext(null)

const TOKEN_KEY = 'realestate_token'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY))
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (token) {
      setUser({ role: 'AGENT' })
    }
  }, [token])

  const navigate = useNavigate()
  const location = useLocation()

  const login = async (credentials) => {
    setLoading(true)
    setError(null)
    try {
      const res = await api.post('/auth/authenticate', credentials)
      const jwt = res.data?.accessToken
      if (jwt) {
        localStorage.setItem(TOKEN_KEY, jwt)
        setToken(jwt)
        setUser({ role: 'AGENT' })
        const from = location.state?.from?.pathname
        navigate(from || '/dashboard', { replace: true })
      } else {
        throw new Error('Invalid auth response')
      }
    } catch (err) {
      setError(
        err.response?.data?.message || 'Unable to login. Please try again.',
      )
    } finally {
      setLoading(false)
    }
  }

  const register = async (payload) => {
    setLoading(true)
    setError(null)
    try {
      const trimmedName = (payload.name || '').trim()
      const [firstName, ...rest] = trimmedName.split(/\s+/)
      const lastName = rest.join(' ') || 'User'

      await api.post('/auth/register', {
        firstName: firstName || 'User',
        lastName,
        email: payload.email,
        password: payload.password,
        mobileNumber: payload.mobileNumber || '+10000000000',
        role: 'DEALER',
      })
      await login({ email: payload.email, password: payload.password })
    } catch (err) {
      setError(
        err.response?.data?.message ||
          'Unable to register. Please check your details.',
      )
      setLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY)
    setUser(null)
    setToken(null)
    navigate('/login')
  }

  const value = {
    user,
    token,
    loading,
    error,
    login,
    register,
    logout,
    isAuthenticated: !!token,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

