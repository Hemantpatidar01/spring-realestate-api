import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Spinner from '../components/Spinner.jsx'
import Alert from '../components/Alert.jsx'
import Button from '../components/Button.jsx'
import Input from '../components/Input.jsx'
import { fetchPropertyById } from '../services/properties.js'
import { contactAgent } from '../services/contact.js'

function formatPrice(value) {
  if (value == null) return 'Price on request'
  try {
    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(Number(value))
  } catch {
    return String(value)
  }
}

function PropertyDetailsPage() {
  const { id } = useParams()
  const [property, setProperty] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [contactState, setContactState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [contactLoading, setContactLoading] = useState(false)
  const [contactMsg, setContactMsg] = useState(null)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      setLoading(true)
      setError(null)
      try {
        const data = await fetchPropertyById(id)
        if (!cancelled) setProperty(data)
      } catch (err) {
        if (!cancelled)
          setError(err.response?.data?.message || 'Failed to load property.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [id])

  const imageUrl = useMemo(() => {
    return (
      property?.imageUrl ||
      property?.image ||
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=70'
    )
  }, [property])

  const submitContact = async (e) => {
    e.preventDefault()
    setContactLoading(true)
    setContactMsg(null)
    try {
      await contactAgent({
        propertyId: id,
        ...contactState,
      })
      setContactMsg({ type: 'success', text: 'Message sent to agent.' })
      setContactState({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      setContactMsg({
        type: 'error',
        text:
          err.response?.data?.message ||
          'Failed to send message. Please try again.',
      })
    } finally {
      setContactLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex w-full items-center justify-center py-14">
        <Spinner className="h-7 w-7" />
      </div>
    )
  }

  if (error) return <Alert type="error">{error}</Alert>

  if (!property) return <Alert type="error">Property not found.</Alert>

  return (
    <div className="w-full space-y-6">
      <div className="text-sm text-slate-600">
        <Link to="/properties" className="font-semibold text-primary-700">
          ← Back to properties
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card">
            <div className="aspect-[16/9] bg-slate-100">
              <img
                src={imageUrl}
                alt={property.title || property.name || 'Property'}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-4 p-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
                    {property.title || property.name || 'Property'}
                  </h1>
                  <div className="mt-1 text-sm text-slate-600">
                    {property.location ||
                      [property.city, property.state].filter(Boolean).join(', ')}
                  </div>
                </div>
                <div className="rounded-2xl bg-primary-50 px-4 py-3">
                  <div className="text-xs font-semibold text-primary-700">
                    Price
                  </div>
                  <div className="text-xl font-extrabold text-primary-800">
                    {formatPrice(property.price)}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-700">
                  {(property.type || 'sale').toString().toUpperCase()}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-700">
                  {property.category || 'Residential'}
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-xs font-semibold text-slate-500">
                    Bedrooms
                  </div>
                  <div className="mt-1 text-lg font-bold text-slate-900">
                    {property.beds ?? property.bedrooms ?? '—'}
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-xs font-semibold text-slate-500">
                    Bathrooms
                  </div>
                  <div className="mt-1 text-lg font-bold text-slate-900">
                    {property.baths ?? property.bathrooms ?? '—'}
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-xs font-semibold text-slate-500">
                    Area
                  </div>
                  <div className="mt-1 text-lg font-bold text-slate-900">
                    {property.area ?? property.sqft ?? '—'}
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-base font-bold text-slate-900">
                  About this property
                </h2>
                <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-slate-600">
                  {property.description ||
                    'No description provided for this listing.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
            <div className="text-base font-bold text-slate-900">
              Contact agent
            </div>
            <p className="mt-1 text-sm text-slate-600">
              Ask for availability, viewing, or more details.
            </p>
            <form className="mt-4 space-y-3" onSubmit={submitContact}>
              <Input
                label="Your name"
                value={contactState.name}
                onChange={(e) =>
                  setContactState((s) => ({ ...s, name: e.target.value }))
                }
                required
              />
              <Input
                label="Email"
                type="email"
                value={contactState.email}
                onChange={(e) =>
                  setContactState((s) => ({ ...s, email: e.target.value }))
                }
                required
              />
              <Input
                label="Phone (optional)"
                value={contactState.phone}
                onChange={(e) =>
                  setContactState((s) => ({ ...s, phone: e.target.value }))
                }
              />
              <label className="block">
                <div className="mb-1 text-sm font-medium text-slate-700">
                  Message
                </div>
                <textarea
                  className="min-h-28 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                  value={contactState.message}
                  onChange={(e) =>
                    setContactState((s) => ({ ...s, message: e.target.value }))
                  }
                  placeholder="Hi, I’m interested in this property. Is it still available?"
                  required
                />
              </label>

              {contactMsg ? (
                <Alert type={contactMsg.type}>{contactMsg.text}</Alert>
              ) : null}

              <Button type="submit" disabled={contactLoading} className="w-full">
                {contactLoading ? 'Submitting…' : 'Submit Inquiry'}
              </Button>
            </form>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default PropertyDetailsPage

