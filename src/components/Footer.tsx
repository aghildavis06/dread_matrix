const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-loom-black pt-32 pb-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-24 flex flex-col items-start justify-between gap-12 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="font-display text-5xl font-bold text-white md:text-7xl">
              Build Digital Systems That Perform.
            </h2>
          </div>
          <a
            href="mailto:hello@digitalloom.io"
            className="group relative overflow-hidden bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wider text-loom-black transition-all hover:bg-gray-200"
          >
            <span className="relative z-10">Request a Strategy Call</span>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-12 border-t border-white/10 pt-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6 font-display text-2xl font-bold text-white">Digital Loom</div>
            <p className="max-w-xs text-sm text-gray-500">
              Precision engineered web systems for enterprise clients.
              San Francisco • New York • London
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs font-bold uppercase text-white">Sitemap</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><button onClick={() => scrollTo('services')} className="hover:text-white transition-colors">Services</button></li>
              <li><button onClick={() => scrollTo('work')} className="hover:text-white transition-colors">Case Studies</button></li>
              <li><button onClick={() => scrollTo('process')} className="hover:text-white transition-colors">Process</button></li>
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors">About</button></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs font-bold uppercase text-white">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="mailto:hello@digitalloom.io" className="hover:text-white transition-colors">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-gray-600 md:flex-row">
          <div>© 2026 Digital Loom Inc. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
