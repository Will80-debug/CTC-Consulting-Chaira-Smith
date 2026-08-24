import { BRAND } from '../lib/brand'

export function Navigation() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center group">
              <img 
                src="/static/lli-logo-new.png" 
                alt={BRAND.names.company} 
                className="h-12 transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = document.createElement('span');
                  fallback.className = 'text-2xl font-bold text-teal-700';
                  fallback.textContent = 'LLI';
                  target.parentElement?.appendChild(fallback);
                }}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-teal-700 font-medium transition-colors">
              Home
            </a>
            <a href="/trust-audit" className="text-gray-700 hover:text-teal-700 font-medium transition-colors">
              Trust Audit™️
            </a>
            <a href="/framework" className="text-gray-700 hover:text-teal-700 font-medium transition-colors">
              LLI Framework™️
            </a>
            <a href="/services" className="text-gray-700 hover:text-teal-700 font-medium transition-colors">
              Services
            </a>
            <a href="/resources" className="text-gray-700 hover:text-teal-700 font-medium transition-colors">
              Resources
            </a>
            <a href="/about" className="text-gray-700 hover:text-teal-700 font-medium transition-colors">
              About
            </a>
            <a href="/contact" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-all">
              Book a Conversation
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onclick="document.getElementById('mobile-menu').classList.toggle('active')"
              className="text-gray-700 hover:text-teal-700 focus:outline-none transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded="false"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div id="mobile-menu" className="hidden md:hidden pb-4">
          <div className="flex flex-col space-y-3">
            <a href="/" className="text-gray-700 hover:text-teal-700 font-medium py-2">
              Home
            </a>
            <a href="/trust-audit" className="text-gray-700 hover:text-teal-700 font-medium py-2">
              Trust Audit™️
            </a>
            <a href="/framework" className="text-gray-700 hover:text-teal-700 font-medium py-2">
              LLI Framework™️
            </a>
            <a href="/services" className="text-gray-700 hover:text-teal-700 font-medium py-2">
              Services
            </a>
            <a href="/resources" className="text-gray-700 hover:text-teal-700 font-medium py-2">
              Resources
            </a>
            <a href="/about" className="text-gray-700 hover:text-teal-700 font-medium py-2">
              About
            </a>
            <a href="/contact" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition-all text-center mt-2">
              Book a Conversation
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
