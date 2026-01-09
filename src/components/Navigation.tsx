export const Navigation = () => {
  const logoUrl = "https://page.gensparksite.com/v1/base64_upload/76289e59443ab0b47d1ab4851999fbe6"
  
  return (
    <header className="bg-gradient-to-r from-lli-black to-gray-800 shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <a href="/" className="flex items-center space-x-4 hover:opacity-90 transition-opacity">
            <img 
              src={logoUrl} 
              alt="LLI Consulting Group Logo" 
              className="h-16 w-16 object-contain"
            />
            <div className="text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-white">LLI Consulting Group</h1>
              <p className="text-sm text-gray-300">Leadership & Culture Transformation</p>
            </div>
          </a>
          
          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href="/" 
              className="text-white hover:text-lli-teal font-semibold transition-colors duration-200 border-b-2 border-transparent hover:border-lli-teal pb-1"
            >
              Home
            </a>
            <a 
              href="/services" 
              className="text-white hover:text-lli-teal font-semibold transition-colors duration-200 border-b-2 border-transparent hover:border-lli-teal pb-1"
            >
              Services
            </a>
            <a 
              href="/about" 
              className="text-white hover:text-lli-teal font-semibold transition-colors duration-200 border-b-2 border-transparent hover:border-lli-teal pb-1"
            >
              About
            </a>
            <a 
              href="/resources" 
              className="text-white hover:text-lli-orange font-semibold transition-colors duration-200 border-b-2 border-transparent hover:border-lli-orange pb-1"
            >
              Resources
            </a>
            <a 
              href="/pricing" 
              className="text-white hover:text-lli-teal font-semibold transition-colors duration-200 border-b-2 border-transparent hover:border-lli-teal pb-1"
            >
              Pricing
            </a>
            <a 
              href="/blog" 
              className="text-white hover:text-lli-teal font-semibold transition-colors duration-200 border-b-2 border-transparent hover:border-lli-teal pb-1"
            >
              Blog
            </a>
            <a 
              href="/case-studies" 
              className="text-white hover:text-lli-orange font-semibold transition-colors duration-200 border-b-2 border-transparent hover:border-lli-orange pb-1"
            >
              Case Studies
            </a>
            <a 
              href="/contact" 
              className="text-white hover:text-lli-teal font-semibold transition-colors duration-200 border-b-2 border-transparent hover:border-lli-teal pb-1"
            >
              Contact
            </a>
            <a 
              href="https://www.LLIConsulting.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-lli-teal to-lli-teal-dark hover:from-lli-teal-dark hover:to-lli-teal text-white font-bold py-2 px-6 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105"
            >
              <i className="fas fa-calendar-check mr-2"></i>
              Book a Call
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onclick="toggleMobileMenu()"
            className="md:hidden text-white hover:text-lli-teal transition-colors"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden mt-6 pb-4 border-t border-gray-700 pt-4">
          <nav className="flex flex-col space-y-4">
            <a 
              href="/" 
              className="text-white hover:text-lli-teal font-semibold transition-colors duration-200 py-2"
            >
              <i className="fas fa-home mr-3"></i>
              Home
            </a>
            <a 
              href="/services" 
              className="text-white hover:text-lli-teal font-semibold transition-colors duration-200 py-2"
            >
              <i className="fas fa-briefcase mr-3"></i>
              Services
            </a>
            <a 
              href="/about" 
              className="text-white hover:text-lli-teal font-semibold transition-colors duration-200 py-2"
            >
              <i className="fas fa-info-circle mr-3"></i>
              About
            </a>
            <a 
              href="/resources" 
              className="text-white hover:text-lli-orange font-semibold transition-colors duration-200 py-2"
            >
              <i className="fas fa-book mr-3"></i>
              Resources
            </a>
            <a 
              href="/pricing" 
              className="text-white hover:text-lli-teal font-semibold transition-colors duration-200 py-2"
            >
              <i className="fas fa-tag mr-3"></i>
              Pricing
            </a>
            <a 
              href="/blog" 
              className="text-white hover:text-lli-teal font-semibold transition-colors duration-200 py-2"
            >
              <i className="fas fa-newspaper mr-3"></i>
              Blog
            </a>
            <a 
              href="/case-studies" 
              className="text-white hover:text-lli-orange font-semibold transition-colors duration-200 py-2"
            >
              <i className="fas fa-chart-line mr-3"></i>
              Case Studies
            </a>
            <a 
              href="/contact" 
              className="text-white hover:text-lli-teal font-semibold transition-colors duration-200 py-2"
            >
              <i className="fas fa-envelope mr-3"></i>
              Contact
            </a>
            <a 
              href="https://www.LLIConsulting.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white font-bold py-3 px-6 rounded-lg shadow-lg text-center"
            >
              <i className="fas fa-calendar-check mr-2"></i>
              Book a Call
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
