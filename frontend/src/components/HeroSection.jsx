import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar.jsx'

const chips = ['Rent', 'Sale', 'Apartment', 'Villa', 'Commercial']

function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 text-white shadow-2xl shadow-slate-900/15 md:p-10">
      <div className="absolute -left-20 top-0 h-56 w-56 rounded-full bg-primary-500/35 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-indigo-500/30 blur-3xl" />

      <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100 backdrop-blur"
          >
            Trusted by 12,000+ home seekers
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="max-w-2xl text-3xl font-extrabold tracking-tight md:text-5xl"
          >
            Discover premium spaces crafted for modern living.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="max-w-xl text-sm leading-relaxed text-slate-200 md:text-base"
          >
            Browse top properties for rent and sale with immersive details,
            transparent pricing, and direct access to verified agents.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
          >
            <SearchBar />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {chips.map((chip) => (
              <button
                key={chip}
                className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-medium text-slate-100 backdrop-blur transition hover:bg-white/20"
              >
                {chip}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="grid gap-3 sm:grid-cols-2"
        >
          <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
            <div className="text-xs text-slate-300">Median listing price</div>
            <div className="mt-1 text-2xl font-bold">$640K</div>
            <div className="mt-1 text-xs text-emerald-300">+4.8% this quarter</div>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
            <div className="text-xs text-slate-300">Average closing time</div>
            <div className="mt-1 text-2xl font-bold">19 days</div>
            <div className="mt-1 text-xs text-slate-200">Faster than city average</div>
          </div>
          <div className="sm:col-span-2">
            <Link
              to="/properties"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Explore all properties
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection

