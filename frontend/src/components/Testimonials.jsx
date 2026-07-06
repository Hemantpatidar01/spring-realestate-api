import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Ananya Sharma',
    role: 'First-time Buyer',
    quote:
      'The experience felt premium end-to-end. Filters are fast and the agent response was immediate.',
  },
  {
    name: 'Daniel Park',
    role: 'Rental Seeker',
    quote:
      'Finally a real estate platform that is beautiful and practical. I found a place in three days.',
  },
  {
    name: 'Sofia Khan',
    role: 'Property Investor',
    quote:
      'Clean UI, trustworthy listings, and transparent details. This saves me hours every week.',
  },
]

function Testimonials() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Loved by home seekers and investors
        </h2>
        <p className="text-sm text-slate-600">
          Real stories from users finding their perfect space.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.article
            key={item.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-sm leading-relaxed text-slate-700">“{item.quote}”</p>
            <div className="mt-4">
              <div className="font-semibold text-slate-900">{item.name}</div>
              <div className="text-xs text-slate-500">{item.role}</div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Testimonials

