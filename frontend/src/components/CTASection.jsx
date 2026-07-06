import { Link } from 'react-router-dom'

function CTASection() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-r from-primary-700 via-primary-600 to-indigo-700 p-8 text-white shadow-xl shadow-primary-700/20 md:p-10">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
      <div className="relative flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Ready to list your property with confidence?
          </h2>
          <p className="mt-2 text-sm text-white/90">
            Join verified agents using RealEstate Pro to showcase listings and
            close deals faster.
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            to="/register"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Become an agent
          </Link>
          <Link
            to="/properties"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-white/40 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Browse homes
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTASection

