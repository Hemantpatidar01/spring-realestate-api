import { useEffect, useMemo, useState } from 'react'
import PropertyCard from '../components/PropertyCard.jsx'
import Spinner from '../components/Spinner.jsx'
import Alert from '../components/Alert.jsx'
import Input from '../components/Input.jsx'
import { fetchProperties } from '../services/properties.js'

const TYPES = [
  { label: 'All', value: '' },
  { label: 'Rent', value: 'rent' },
  { label: 'Sale', value: 'sale' },
]

const CATEGORIES = [
  { label: 'All', value: '' },
  { label: 'Residential', value: 'residential' },
  { label: 'Commercial', value: 'commercial' },
  { label: 'Land', value: 'land' },
]

function normalize(str) {
  return (str || '').toString().trim().toLowerCase()
}

function PropertiesPage() {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [q, setQ] = useState('')
  const [type, setType] = useState('')
  const [category, setCategory] = useState('')

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      setLoading(true)
      setError(null)
      try {
        const data = await fetchProperties()
        const list = Array.isArray(data) ? data : data?.content || []
        if (!cancelled) setProperties(list)
      } catch (err) {
        if (!cancelled)
          setError(err.response?.data?.message || 'Failed to load properties.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  const filtered = useMemo(() => {
    const nq = normalize(q)
    const nt = normalize(type)
    const nc = normalize(category)

    return properties.filter((p) => {
      const haystack = normalize(
        [p.title, p.name, p.location, p.city, p.state, p.description].join(' '),
      )

      const matchesQ = !nq || haystack.includes(nq)
      const matchesType = !nt || normalize(p.type) === nt
      const matchesCategory = !nc || normalize(p.category) === nc
      return matchesQ && matchesType && matchesCategory
    })
  }, [properties, q, type, category])

  return (
    <div className="w-full space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Properties
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Search, filter, and explore listings.
          </p>
        </div>
        <div className="text-sm text-slate-600">
          Showing <span className="font-semibold">{filtered.length}</span> of{' '}
          <span className="font-semibold">{properties.length}</span>
        </div>
      </div>

      <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-card md:grid-cols-4">
        <div className="md:col-span-2">
          <Input
            label="Search"
            value={q}
            placeholder="Location, title, city..."
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
        <label className="block">
          <div className="mb-1 text-sm font-medium text-slate-700">Type</div>
          <select
            className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            {TYPES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <div className="mb-1 text-sm font-medium text-slate-700">
            Category
          </div>
          <select
            className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORIES.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {error ? <Alert type="error">{error}</Alert> : null}

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Spinner className="h-6 w-6" />
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
          {!filtered.length ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-sm text-slate-600 sm:col-span-2 lg:col-span-3">
              No matches. Try adjusting your filters.
            </div>
          ) : null}
        </div>
      )}
    </div>
  )
}

export default PropertiesPage

