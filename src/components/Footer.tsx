import { BRAND } from '../lib/brand'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <img 
              src="/static/lli-logo-new.png" 
              alt={BRAND.names.company} 
              className="h-12 mb-6 brightness-0 invert"
            />
            <p className="text-gray-400 leading-relaxed mb-4">
              {BRAND.positioning}
            </p>
            <p className="text-sm text-teal-400 italic">
              {BRAND.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/trust-audit" className="hover:text-teal-400 transition-colors">Trust Audit™️</a></li>
              <li><a href="/framework" className="hover:text-teal-400 transition-colors">LLI Framework™️</a></li>
              <li><a href="/services" className="hover:text-teal-400 transition-colors">Services</a></li>
              <li><a href="/resources" className="hover:text-teal-400 transition-colors">Resources</a></li>
              <li><a href="/about" className="hover:text-teal-400 transition-colors">About</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Get Started</h3>
            <ul className="space-y-3">
              <li><a href="/contact" className="hover:text-teal-400 transition-colors">Book a Conversation</a></li>
              <li><a href="mailto:info@lliconsultinggroup.com" className="hover:text-teal-400 transition-colors">info@lliconsultinggroup.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} {BRAND.names.company}. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-4 md:mt-0">
            Chiara Smith, MHR | Founder & Principal
          </p>
        </div>
      </div>
    </footer>
  )
}
