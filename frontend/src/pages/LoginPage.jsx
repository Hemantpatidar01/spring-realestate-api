import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import Alert from '../components/Alert.jsx'
import Input from '../components/Input.jsx'
import Button from '../components/Button.jsx'

function LoginPage() {
  const { login, loading, error, isAuthenticated } = useAuth()
  const [form, setForm] = useState({ email: '', password: '' })
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) navigate('/dashboard')
  }, [isAuthenticated, navigate])

  const submit = async (e) => {
    e.preventDefault()
    await login(form)
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
        <h1 className="text-2xl font-bold text-slate-900">Welcome back</h1>
        <p className="mt-1 text-sm text-slate-600">
          Sign in to manage your listings.
        </p>

        <form className="mt-6 space-y-4" onSubmit={submit}>
          {error ? <Alert type="error">{error}</Alert> : null}

          <Input
            label="Email"
            type="email"
            value={form.email}
            onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
            required
          />
          <Input
            label="Password"
            type="password"
            value={form.password}
            onChange={(e) =>
              setForm((s) => ({ ...s, password: e.target.value }))
            }
            required
          />

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Submitting…' : 'Submit Login'}
          </Button>
        </form>

        <div className="mt-4 text-sm text-slate-600">
          Don’t have an account?{' '}
          <Link to="/register" className="font-semibold text-primary-700">
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

