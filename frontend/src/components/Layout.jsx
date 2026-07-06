import Navbar from './Navbar.jsx'

function Layout({ children }) {
  return (
    <div className="relative flex min-h-screen flex-col bg-[radial-gradient(1200px_circle_at_15%_0%,rgba(59,130,246,0.10),transparent_40%),radial-gradient(1200px_circle_at_80%_20%,rgba(99,102,241,0.08),transparent_40%),linear-gradient(180deg,#f8fafc_0%,#f8fafc_40%,#f1f5f9_100%)]">
      <Navbar />
      <main className="mx-auto flex w-full max-w-7xl flex-1 px-4 pb-12 pt-8 md:px-6">
        {children}
      </main>
      <footer className="border-t bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 text-xs text-slate-500 md:px-6">
          <span>© {new Date().getFullYear()} RealEstate Pro</span>
          <span>Built with React & Tailwind</span>
        </div>
      </footer>
    </div>
  )
}

export default Layout

