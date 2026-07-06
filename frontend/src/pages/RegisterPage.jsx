import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import Alert from '../components/Alert.jsx'
import Input from '../components/Input.jsx'
import Button from '../components/Button.jsx'

function RegisterPage() {
  const { register, loading, error, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [localError, setLocalError] = useState(null)

  useEffect(() => {
    if (isAuthenticated) navigate('/dashboard')
  }, [isAuthenticated, navigate])

  const submit = async (e) => {
    e.preventDefault()
    setLocalError(null)
    if (form.password !== form.confirmPassword) {
      setLocalError('Passwords do not match.')
      return
    }
    await register({ name: form.name, email: form.email, password: form.password })
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
        <h1 className="text-2xl font-bold text-slate-900">Create account</h1>
        <p className="mt-1 text-sm text-slate-600">
          Register to access the agent dashboard.
        </p>

        <form className="mt-6 space-y-4" onSubmit={submit}>
          {localError ? <Alert type="error">{localError}</Alert> : null}
          {error ? <Alert type="error">{error}</Alert> : null}

          <Input
            label="Name"
            value={form.name}
            onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
            required
          />
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
          <Input
            label="Confirm password"
            type="password"
            value={form.confirmPassword}
            onChange={(e) =>
              setForm((s) => ({ ...s, confirmPassword: e.target.value }))
            }
            required
          />

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Submitting…' : 'Submit Registration'}
          </Button>
        </form>

        <div className="mt-4 text-sm text-slate-600">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-primary-700">
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage

