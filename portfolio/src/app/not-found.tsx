import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#050816] px-4 text-center">
      <div className="glass-strong max-w-md p-12">
        <h1 className="heading-font text-8xl font-bold gradient-text">404</h1>
        <h2 className="heading-font mt-4 text-2xl font-semibold text-white">
          Page Not Found
        </h2>
        <p className="mt-4 text-slate-400">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-xl bg-gradient-to-r from-[#4F8CFF] to-[#8B5CF6] px-6 py-3 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-[#4F8CFF]/25"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
