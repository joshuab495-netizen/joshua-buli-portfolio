export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-navy">
      <div className="max-w-container mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <p className="text-sm text-slate-300">© {year} Joshua C. Buli. All rights reserved.</p>
        <p className="text-xs text-slate-500">Built with React, Tailwind CSS &amp; Framer Motion.</p>
      </div>
    </footer>
  )
}
