import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export const ResourcesPage = () => {
  // Resource images - using Unsplash (no CORS issues)
  const downloadableGuideImg = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
  const webinarImg = "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop"
  const toolkitImg = "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop"

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-lli-black via-gray-800 to-lli-black py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-lli-orange to-lli-teal animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lli-orange to-lli-teal">Resources for Reflection and Planning</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              These tools are designed to support internal reflection and structured leadership conversations. They are not formal evaluations.
            </p>
          </div>
        </div>
      </section>



      {/* Case Studies Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Selected Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world examples of LLI Consulting Group's strategic advisory work with foundations, community organizations, and mission-driven institutions.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="space-y-12">
            
            {/* Case Study 1 - Racial Health Equity */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 md:h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop" 
                    alt="Health equity strategy development with community partners" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-lli-teal/20 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="inline-block bg-lli-teal text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4 self-start">
                    Case Study 1
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Racial Health Equity Strategy Development
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Co-designed a multi-year racial health equity strategy within a regional health foundation, guiding the development of an approximately <strong>$8 million investment strategy</strong> supporting community-based organizations addressing structural drivers of health disparities.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-lli-teal/10 text-lli-teal px-4 py-2 rounded-lg text-sm font-semibold">
                      <i className="fas fa-heart-pulse mr-2"></i>Health Equity
                    </span>
                    <span className="bg-lli-teal/10 text-lli-teal px-4 py-2 rounded-lg text-sm font-semibold">
                      <i className="fas fa-hand-holding-usd mr-2"></i>$8M Strategy
                    </span>
                    <span className="bg-lli-teal/10 text-lli-teal px-4 py-2 rounded-lg text-sm font-semibold">
                      <i className="fas fa-users mr-2"></i>Community-Based
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 2 - Violence Prevention */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Content (Left on desktop) */}
                <div className="p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
                  <div className="inline-block bg-lli-orange text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4 self-start">
                    Case Study 2
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Community Engagement and Violence Prevention
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Led community engagement strategies within a historically high-violence neighborhood, strengthening trust between community leaders, residents, and service providers. The engagement contributed to a year in which the neighborhood experienced <strong>zero homicides</strong>.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-lli-orange/10 text-lli-orange px-4 py-2 rounded-lg text-sm font-semibold">
                      <i className="fas fa-handshake mr-2"></i>Community Trust
                    </span>
                    <span className="bg-lli-orange/10 text-lli-orange px-4 py-2 rounded-lg text-sm font-semibold">
                      <i className="fas fa-shield-alt mr-2"></i>Violence Prevention
                    </span>
                    <span className="bg-lli-orange/10 text-lli-orange px-4 py-2 rounded-lg text-sm font-semibold">
                      <i className="fas fa-chart-line mr-2"></i>Zero Homicides
                    </span>
                  </div>
                </div>
                
                {/* Image (Right on desktop) */}
                <div className="relative h-64 md:h-auto order-1 md:order-2">
                  <img 
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop" 
                    alt="Community engagement and violence prevention collaboration" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-lli-orange/20 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Case Study 3 - Organizational Culture */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 md:h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" 
                    alt="Organizational culture and leadership advisory services" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-lli-teal/20 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="inline-block bg-lli-teal text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4 self-start">
                    Case Study 3
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Organizational Culture and Leadership Advisory
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Provided advisory support to organizations navigating workplace culture challenges, helping leadership teams examine <strong>communication dynamics</strong>, <strong>psychological safety</strong>, and structural barriers affecting staff experience.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-lli-teal/10 text-lli-teal px-4 py-2 rounded-lg text-sm font-semibold">
                      <i className="fas fa-building mr-2"></i>Culture Change
                    </span>
                    <span className="bg-lli-teal/10 text-lli-teal px-4 py-2 rounded-lg text-sm font-semibold">
                      <i className="fas fa-comments mr-2"></i>Communication
                    </span>
                    <span className="bg-lli-teal/10 text-lli-teal px-4 py-2 rounded-lg text-sm font-semibold">
                      <i className="fas fa-shield-heart mr-2"></i>Psychological Safety
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Featured Resources - Moved Here */}
          <div className="mt-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Premium Resource <span className="text-lli-teal">Blocks</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your leadership practice with our comprehensive, battle-tested workbooks
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Resource 1 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer" onClick={() => (window as any).openResourceModal('leadership')}>
                <div className="relative h-48">
                  <img 
                    src={downloadableGuideImg} 
                    alt="Leadership Self-Reflection Guide" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-lli-orange to-lli-orange-dark text-white px-4 py-2 rounded-lg text-lg font-bold shadow-lg">
                    $39
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Leadership Self-Reflection Guide</h3>
                  <p className="text-gray-600 mb-4">
                    20 structured prompts to support clarity and planning.
                  </p>
                  <button className="w-full bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105">
                    <i className="fas fa-shopping-cart mr-2"></i>
                    Purchase & Download
                  </button>
                </div>
              </div>

              {/* Resource 2 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer" onClick={() => (window as any).openResourceModal('culture')}>
                <div className="relative h-48">
                  <img 
                    src={toolkitImg} 
                    alt="DEI Culture Toolkit" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-lli-orange to-lli-orange-dark text-white px-4 py-2 rounded-lg text-lg font-bold shadow-lg">
                    $39
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Culture & Leadership Conversation Toolkit</h3>
                  <p className="text-gray-600 mb-4">
                    Facilitation prompts and discussion guides.
                  </p>
                  <button className="w-full bg-gradient-to-r from-lli-orange to-lli-orange-dark text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105">
                    <i className="fas fa-shopping-cart mr-2"></i>
                    Purchase & Download
                  </button>
                </div>
              </div>

              {/* Resource 3 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer" onClick={() => (window as any).openResourceModal('implementation')}>
                <div className="relative h-48">
                  <img 
                    src={webinarImg} 
                    alt="Culture Change Playbook" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-lli-orange to-lli-orange-dark text-white px-4 py-2 rounded-lg text-lg font-bold shadow-lg">
                    $39
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Implementation Planning Playbook</h3>
                  <p className="text-gray-600 mb-4">
                    Sequencing, ownership, and next-step planning framework.
                  </p>
                  <button className="w-full bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105">
                    <i className="fas fa-shopping-cart mr-2"></i>
                    Purchase & Download
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-lli-black to-gray-800 rounded-2xl p-12 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-4">
                Interested in Similar Support?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                LLI Consulting Group works with foundations, government agencies, and mission-driven organizations on strategic culture and leadership challenges.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white px-10 py-5 rounded-xl font-bold text-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <i className="fas fa-calendar-check mr-3"></i>
                Schedule a Discovery Call
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Newsletter Section - Moved to Bottom */}
      <section className="py-20 bg-gradient-to-br from-lli-black via-gray-800 to-lli-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Get New Resources Delivered to Your Inbox
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 2,000+ leaders receiving monthly insights, tools, and exclusive content
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-lg focus:border-lli-teal focus:outline-none text-lg"
              />
              <button className="bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105 whitespace-nowrap">
                Subscribe Free
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Payment Form Modal */}
      <div id="payment-modal" className="hidden fixed inset-0 bg-black bg-opacity-60 z-[60] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-8">
            {/* Close Button */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Complete Your Purchase</h2>
              <button onclick="closePaymentModal()" className="text-gray-400 hover:text-gray-600 transition-colors">
                <i className="fas fa-times text-2xl"></i>
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Order Summary */}
              <div className="bg-gradient-to-br from-lli-teal/5 to-white rounded-xl p-6 border-2 border-lli-teal/20">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="fas fa-shopping-bag text-lli-orange mr-3"></i>
                  Order Summary
                </h3>
                
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <p id="payment-resource-name" className="font-bold text-lg text-gray-900 mb-2">Resource Name</p>
                  <ul id="order-summary-list" className="space-y-2">
                    {/* Populated by JavaScript */}
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal:</span>
                    <span className="font-semibold">$39.00</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Tax:</span>
                    <span className="font-semibold">$0.00</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-gray-900 pt-3 border-t-2 border-gray-300">
                    <span>Total:</span>
                    <span className="text-lli-orange">$39.00</span>
                  </div>
                </div>

                <div className="mt-6 bg-green-50 border-l-4 border-green-500 rounded p-3">
                  <p className="text-sm text-green-800 flex items-start">
                    <i className="fas fa-download text-green-600 mr-2 mt-1"></i>
                    <span><strong>Instant Access:</strong> Download link sent to your email immediately after payment.</span>
                  </p>
                </div>
              </div>

              {/* Right Column - Payment Form */}
              <div>
                <form id="payment-form" onsubmit="submitPayment(event); return false;">
                  <div className="space-y-4">
                    {/* Email */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        <i className="fas fa-envelope text-lli-teal mr-2"></i>
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        id="payment-email"
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lli-teal focus:outline-none"
                      />
                      <p className="text-xs text-gray-500 mt-1">Download link will be sent here</p>
                    </div>

                    {/* Card Name */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        <i className="fas fa-user text-lli-teal mr-2"></i>
                        Cardholder Name
                      </label>
                      <input 
                        type="text" 
                        id="card-name"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lli-teal focus:outline-none"
                      />
                    </div>

                    {/* Card Number */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        <i className="fas fa-credit-card text-lli-teal mr-2"></i>
                        Card Number
                      </label>
                      <input 
                        type="text" 
                        id="card-number"
                        required
                        placeholder="1234 5678 9012 3456"
                        maxlength="19"
                        pattern="[0-9\s]+"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lli-teal focus:outline-none"
                      />
                    </div>

                    {/* Expiry and CVV */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          <i className="fas fa-calendar text-lli-teal mr-2"></i>
                          Expiry Date
                        </label>
                        <input 
                          type="text" 
                          id="expiry"
                          required
                          placeholder="MM/YY"
                          maxlength="5"
                          pattern="[0-9\/]+"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lli-teal focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          <i className="fas fa-lock text-lli-teal mr-2"></i>
                          CVV
                        </label>
                        <input 
                          type="text" 
                          id="cvv"
                          required
                          placeholder="123"
                          maxlength="4"
                          pattern="[0-9]+"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lli-teal focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Security Badge */}
                    <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-3 mt-4">
                      <div className="flex items-center text-sm text-blue-800">
                        <i className="fas fa-shield-alt text-blue-600 text-lg mr-2"></i>
                        <span><strong>256-bit SSL Encryption</strong> - Your payment is secure</span>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button 
                      type="submit"
                      id="submit-payment-btn"
                      className="w-full bg-gradient-to-r from-lli-orange to-lli-orange-dark text-white font-bold py-4 px-8 rounded-xl text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 mt-6"
                    >
                      <i className="fas fa-lock mr-2"></i>
                      Pay $39.00 Now
                    </button>

                    <p className="text-center text-xs text-gray-500 mt-3">
                      <i className="fas fa-check-circle text-green-500 mr-1"></i>
                      100% Money-Back Guarantee • Secure Payment • Instant Access
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resource Payment Modal */}
      <div id="resource-modal" className="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-8">
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button onclick="closeResourceModal()" className="text-gray-400 hover:text-gray-600 transition-colors">
                <i className="fas fa-times text-2xl"></i>
              </button>
            </div>

            {/* Modal Content */}
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-lli-orange to-lli-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-star text-3xl text-white"></i>
              </div>
              <h2 id="modal-title" className="text-4xl font-bold text-gray-900 mb-4">Premium Leadership Resource</h2>
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-5xl font-bold text-lli-orange">$39</span>
                <div className="text-left">
                  <p className="text-sm text-gray-500 line-through">Was $99</p>
                  <p className="text-sm font-semibold text-green-600">Save 61%!</p>
                </div>
              </div>
            </div>

            {/* Resource Description */}
            <div id="modal-description" className="bg-gradient-to-br from-lli-teal/5 to-white rounded-xl p-6 mb-6 border-2 border-lli-teal/20">
              {/* Content populated by JavaScript */}
            </div>

            {/* What's Included */}
            <div className="bg-white rounded-xl border-2 border-gray-200 p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-gift text-lli-orange text-2xl mr-3"></i>
                What You'll Get
              </h3>
              <ul id="modal-features" className="space-y-3">
                {/* Content populated by JavaScript */}
              </ul>
            </div>

            {/* Guarantee Badge */}
            <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <i className="fas fa-shield-alt text-green-600 text-2xl mr-3 mt-1"></i>
                <div>
                  <p className="font-bold text-green-900 mb-1">100% Satisfaction Guarantee</p>
                  <p className="text-sm text-green-700">If you don't find this resource valuable, contact us within 30 days for a full refund.</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <button onclick="processPurchase()" className="w-full bg-gradient-to-r from-lli-orange to-lli-orange-dark text-white font-bold py-4 px-8 rounded-xl text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <i className="fas fa-lock mr-2"></i>
                Secure Checkout - $39
              </button>
              <button onclick="closeResourceModal()" className="w-full bg-gray-200 text-gray-700 font-bold py-3 px-8 rounded-xl hover:bg-gray-300 transition-all">
                Maybe Later
              </button>
            </div>

            <p className="text-center text-xs text-gray-500 mt-4">
              <i className="fas fa-lock mr-1"></i>
              Secure payment processing • Instant download access
            </p>
          </div>
        </div>
      </div>

      {/* Modal JavaScript */}
      <script dangerouslySetInnerHTML={{__html: `
        const resourceData = {
          leadership: {
            title: 'Leadership Self-Reflection Guide',
            description: \`
              <p class="text-lg text-gray-800 mb-4 leading-relaxed">
                <strong class="text-lli-orange">Transform your leadership in just 20 powerful questions!</strong> This isn't another generic leadership book—it's a <em>battle-tested framework</em> used by executives at Fortune 500 companies and mission-driven nonprofits alike.
              </p>
              <p class="text-gray-700 leading-relaxed">
                Uncover blind spots, clarify your vision, and develop actionable strategies that <strong>actually work</strong>. Leaders who've used this guide report breakthrough moments within the first 30 minutes. This is the reflection tool you wish you had years ago.
              </p>
            \`,
            features: [
              '20 Deep-Dive Reflection Questions that reveal leadership blind spots',
              'Proven Framework trusted by 500+ executives and team leaders',
              'Structured Clarity Process to transform insights into action',
              'PDF Format - Print, annotate, and revisit as you grow',
              'Bonus: Personal Action Planning Template (Value: $29)',
              'Lifetime Access - Use it repeatedly throughout your career',
              'Private Leadership Journal Prompts for ongoing growth'
            ]
          },
          culture: {
            title: 'Culture & Leadership Conversation Toolkit',
            description: \`
              <p class="text-lg text-gray-800 mb-4 leading-relaxed">
                <strong class="text-lli-orange">Facilitate breakthrough conversations that actually change culture!</strong> Stop wasting time on surface-level discussions. This toolkit gives you the <em>exact questions and frameworks</em> used by top consultants charging $10,000+ per session.
              </p>
              <p class="text-gray-700 leading-relaxed">
                Whether you're leading a team of 5 or 500, these conversation guides help you navigate difficult topics, build psychological safety, and drive <strong>measurable culture change</strong>. Your team will thank you.
              </p>
            \`,
            features: [
              'Professional Facilitation Guides used by executive coaches',
              '15+ Conversation Frameworks for difficult topics',
              'Psychological Safety Builder prompts and exercises',
              'DEI Conversation Starters that move beyond performative actions',
              'Team Debrief Templates for post-initiative reflection',
              'Bonus: Conflict Resolution Scripts (Value: $29)',
              'Ready-to-Use Discussion Guides - No prep required'
            ]
          },
          implementation: {
            title: 'Implementation Planning Playbook',
            description: \`
              <p class="text-lg text-gray-800 mb-4 leading-relaxed">
                <strong class="text-lli-orange">Turn strategy into reality with the playbook used by top-tier consultants!</strong> Most culture initiatives fail because of poor implementation—not bad ideas. This playbook gives you the <em>step-by-step roadmap</em> to execute change that sticks.
              </p>
              <p class="text-gray-700 leading-relaxed">
                Built from 15+ years of organizational change experience, this isn't theory—it's <strong>proven methodology</strong>. Get the exact sequencing, accountability systems, and ownership frameworks that separate successful transformations from failed attempts.
              </p>
            \`,
            features: [
              'Complete Implementation Framework from strategy to execution',
              'Accountability System Templates that actually work',
              'Change Management Sequencing Guide for phased rollouts',
              'Stakeholder Mapping Tools to identify champions and blockers',
              'Progress Tracking Dashboards (Excel + PDF formats)',
              'Bonus: 90-Day Quick Win Plan Template (Value: $29)',
              'Real-World Case Studies with lessons learned'
            ]
          }
        };

        let currentResource = null;

        function openResourceModal(resourceType) {
          currentResource = resourceType;
          const data = resourceData[resourceType];
          
          // Update modal content
          document.getElementById('modal-title').textContent = data.title;
          document.getElementById('modal-description').innerHTML = data.description;
          
          // Populate features list
          const featuresList = document.getElementById('modal-features');
          featuresList.innerHTML = '';
          data.features.forEach(feature => {
            const li = document.createElement('li');
            li.className = 'flex items-start';
            li.innerHTML = '<i class="fas fa-check-circle text-lli-teal text-xl mt-1 mr-3 flex-shrink-0"></i><span class="text-gray-700">' + feature + '</span>';
            featuresList.appendChild(li);
          });
          
          // Show modal
          document.getElementById('resource-modal').classList.remove('hidden');
          document.body.style.overflow = 'hidden';
        }

        function closeResourceModal() {
          document.getElementById('resource-modal').classList.add('hidden');
          document.body.style.overflow = 'auto';
        }

        function processPurchase() {
          // Show payment form modal
          document.getElementById('payment-modal').classList.remove('hidden');
          document.getElementById('payment-resource-name').textContent = resourceData[currentResource].title;
          
          // Populate order summary
          const summaryList = document.getElementById('order-summary-list');
          summaryList.innerHTML = '';
          resourceData[currentResource].features.forEach((feature, index) => {
            if (index < 5) { // Show first 5 features in summary
              const li = document.createElement('li');
              li.className = 'flex items-start text-sm';
              li.innerHTML = '<i class="fas fa-check text-lli-teal mr-2 mt-1"></i><span class="text-gray-700">' + feature + '</span>';
              summaryList.appendChild(li);
            }
          });
        }

        function closePaymentModal() {
          document.getElementById('payment-modal').classList.add('hidden');
        }

        function submitPayment(event) {
          event.preventDefault();
          
          // Get form values
          const cardNumber = document.getElementById('card-number').value;
          const cardName = document.getElementById('card-name').value;
          const expiry = document.getElementById('expiry').value;
          const cvv = document.getElementById('cvv').value;
          const email = document.getElementById('payment-email').value;
          
          // Validate
          if (!cardNumber || !cardName || !expiry || !cvv || !email) {
            alert('Please fill in all payment fields');
            return;
          }
          
          // Show processing
          const button = document.getElementById('submit-payment-btn');
          const originalText = button.innerHTML;
          button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Processing Payment...';
          button.disabled = true;
          
          // Simulate payment processing
          setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
            closePaymentModal();
            closeResourceModal();
            
            // Show success message
            alert('Payment processing feature coming soon! For now, please contact us at info@lliconsultinggroup.com to purchase this resource. We will send the download link to: ' + email);
            
            // Reset form
            document.getElementById('payment-form').reset();
          }, 2000);
        }

        // Close modal when clicking outside
        document.getElementById('resource-modal')?.addEventListener('click', function(e) {
          if (e.target === this) {
            closeResourceModal();
          }
        });

        // Close modal on Escape key
        document.addEventListener('keydown', function(e) {
          if (e.key === 'Escape') {
            closeResourceModal();
          }
        });
      `}}>
      </script>

      <Footer />
    </div>
  )
}
