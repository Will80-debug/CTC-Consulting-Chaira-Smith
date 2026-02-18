export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-lli-black to-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-lli-teal mb-4">LLI Consulting Group</h3>
            <p className="text-gray-300 mb-4">
              Transforming leadership and culture through equity-centered coaching and strategic consulting.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-lli-teal transition-colors">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-lli-teal transition-colors">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-lli-teal transition-colors">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-lli-teal transition-colors">Home</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-lli-teal transition-colors">Services</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-lli-teal transition-colors">About</a></li>
              <li><a href="/resources" className="text-gray-300 hover:text-lli-teal transition-colors">Resources</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="/services#leadership-coaching" className="text-gray-300 hover:text-lli-orange transition-colors">Leadership Coaching</a></li>
              <li><a href="/services#team-development" className="text-gray-300 hover:text-lli-orange transition-colors">Team Development</a></li>
              <li><a href="/services#workshops" className="text-gray-300 hover:text-lli-orange transition-colors">Workshops</a></li>
              <li><a href="/services#strategy" className="text-gray-300 hover:text-lli-orange transition-colors">Strategic Consulting</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Get Started</h4>
            <p className="text-gray-300 mb-4">
              Ready to transform your organization?
            </p>
            <a 
              href="https://www.LLIConsulting.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-lli-teal to-lli-teal-dark hover:from-lli-teal-dark hover:to-lli-teal text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105"
            >
              <i className="fas fa-calendar-check mr-2"></i>
              Schedule a Call
            </a>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LLI Consulting Group. All rights reserved.</p>
          <p className="mt-2 text-sm">
            <a href="#" className="hover:text-lli-teal transition-colors">Privacy Policy</a>
            {' • '}
            <a href="#" className="hover:text-lli-teal transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
