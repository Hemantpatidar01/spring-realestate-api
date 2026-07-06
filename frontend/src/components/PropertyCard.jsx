import { Link } from 'react-router-dom'

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

function PropertyCard({ property }) {
  const img =
    property?.imageUrl ||
    property?.image ||
    'https://images.unsplash.com/photo-1560185008-5bf9cdb0c41a?auto=format&fit=crop&w=1200&q=70'

  return (
    <Link
      to={`/properties/${property.id}`}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={img}
          alt={property.title || property.name || 'Property'}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900">
          {(property.type || 'Sale').toString().toUpperCase()}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="truncate text-base font-semibold text-slate-900">
              {property.title || property.name || 'Beautiful home'}
            </div>
            <div className="mt-1 truncate text-sm text-slate-600">
              {property.location ||
                [property.city, property.state].filter(Boolean).join(', ') ||
                'Prime location'}
            </div>
          </div>
          <div className="shrink-0 text-right">
            <div className="text-base font-bold text-primary-700">
              {formatPrice(property.price)}
            </div>
            <div className="mt-1 text-xs text-slate-500">
              {property.category || 'Residential'}
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-slate-600">
          <div className="rounded-lg bg-slate-50 px-2 py-2 text-center">
            <div className="font-semibold text-slate-900">
              {property.beds ?? property.bedrooms ?? '—'}
            </div>
            <div>Beds</div>
          </div>
          <div className="rounded-lg bg-slate-50 px-2 py-2 text-center">
            <div className="font-semibold text-slate-900">
              {property.baths ?? property.bathrooms ?? '—'}
            </div>
            <div>Baths</div>
          </div>
          <div className="rounded-lg bg-slate-50 px-2 py-2 text-center">
            <div className="font-semibold text-slate-900">
              {property.area ?? property.sqft ?? '—'}
            </div>
            <div>Sqft</div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PropertyCard

