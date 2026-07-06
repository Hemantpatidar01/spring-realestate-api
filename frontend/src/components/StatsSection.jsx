import { motion } from 'framer-motion'

const stats = [
  { label: 'Active listings', value: '10k+' },
  { label: 'Verified agents', value: '500+' },
  { label: 'Cities covered', value: '75+' },
  { label: 'Happy families', value: '22k+' },
]

function StatsSection() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.article
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: index * 0.06 }}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <div className="text-3xl font-extrabold tracking-tight text-slate-900">
            {stat.value}
          </div>
          <div className="mt-1 text-sm text-slate-600">{stat.label}</div>
        </motion.article>
      ))}
    </section>
  )
}

export default StatsSection

