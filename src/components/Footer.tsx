const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-loom-black pt-4 pb-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
      
        <div className="grid grid-cols-1 gap-12 border-white/10 pt-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6 font-display text-2xl font-bold text-white">Dread Matrix</div>
            <p className="max-w-xs text-sm text-gray-500">
              Precision engineered web systems for enterprise clients.
              India • Kerala • Kochi
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
              <li><a href="mailto:hello@dreadmatrix.io" className="hover:text-white transition-colors">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-gray-600 md:flex-row">
          <div>© 2026 Dread Matrix Inc. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
