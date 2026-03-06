import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { ResourceCard } from '../components/ResourceCard'
import { leadershipResources, deiResources, changeResources, strategicResources } from '../data/resource-library'

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

      {/* Featured Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Resource <span className="text-lli-teal">Blocks</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Resource 1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48">
                <img 
                  src={downloadableGuideImg} 
                  alt="Leadership Self-Reflection Guide" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Leadership Self-Reflection Guide</h3>
                <p className="text-gray-600 mb-4">
                  20 structured prompts to support clarity and planning.
                </p>
                <a 
                  href="/static/resources/leadership-self-assessment-guide.html" 
                  target="_blank"
                  className="w-full bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105 inline-block text-center"
                >
                  <i className="fas fa-file-pdf mr-2"></i>
                  View & Download PDF
                </a>
              </div>
            </div>

            {/* Resource 2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48">
                <img 
                  src={toolkitImg} 
                  alt="DEI Culture Toolkit" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-lli-orange text-white px-3 py-1 rounded-lg text-sm font-semibold">
                  Free Download
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Culture & Leadership Conversation Toolkit</h3>
                <p className="text-gray-600 mb-4">
                  Facilitation prompts and discussion guides.
                </p>
                <a 
                  href="/static/resources/dei-culture-toolkit.html" 
                  target="_blank"
                  className="w-full bg-gradient-to-r from-lli-orange to-lli-orange-dark text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105 inline-block text-center"
                >
                  <i className="fas fa-file-pdf mr-2"></i>
                  View & Download PDF
                </a>
              </div>
            </div>

            {/* Resource 3 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48">
                <img 
                  src={webinarImg} 
                  alt="Culture Change Playbook" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-lli-teal text-white px-3 py-1 rounded-lg text-sm font-semibold">
                  Free Download
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Implementation Planning Playbook</h3>
                <p className="text-gray-600 mb-4">
                  Sequencing, ownership, and next-step planning framework.
                </p>
                <a 
                  href="/static/resources/culture-change-playbook.html" 
                  target="_blank"
                  className="w-full bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105 inline-block text-center"
                >
                  <i className="fas fa-file-pdf mr-2"></i>
                  View & Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Library */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Resource <span className="text-lli-teal">Library</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse by topic to find the resources you need
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {/* Category 1 */}
            <button onclick="toggleCategory('leadership')" className="group bg-gradient-to-br from-lli-teal/10 to-white border-2 border-lli-teal hover:border-lli-teal-dark rounded-xl p-6 text-left transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <div className="bg-lli-teal text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-user-tie text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Leadership Development</h3>
              <p className="text-sm text-gray-600 mb-3">12 resources</p>
              <span className="text-lli-teal font-semibold text-sm flex items-center">
                Browse <i id="leadership-icon" className="fas fa-chevron-down ml-2 group-hover:translate-x-1 transition-transform"></i>
              </span>
            </button>

            {/* Category 2 */}
            <button onclick="toggleCategory('dei')" className="group bg-gradient-to-br from-lli-orange/10 to-white border-2 border-lli-orange hover:border-lli-orange-dark rounded-xl p-6 text-left transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <div className="bg-lli-orange text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-users text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">DEI & Culture</h3>
              <p className="text-sm text-gray-600 mb-3">18 resources</p>
              <span className="text-lli-orange font-semibold text-sm flex items-center">
                Browse <i id="dei-icon" className="fas fa-chevron-down ml-2 group-hover:translate-x-1 transition-transform"></i>
              </span>
            </button>

            {/* Category 3 */}
            <button onclick="toggleCategory('change')" className="group bg-gradient-to-br from-lli-teal/10 to-white border-2 border-lli-teal hover:border-lli-teal-dark rounded-xl p-6 text-left transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <div className="bg-lli-teal text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-chart-line text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Change Management</h3>
              <p className="text-sm text-gray-600 mb-3">9 resources</p>
              <span className="text-lli-teal font-semibold text-sm flex items-center">
                Browse <i id="change-icon" className="fas fa-chevron-down ml-2 group-hover:translate-x-1 transition-transform"></i>
              </span>
            </button>

            {/* Category 4 */}
            <button onclick="toggleCategory('strategic')" className="group bg-gradient-to-br from-lli-orange/10 to-white border-2 border-lli-orange hover:border-lli-orange-dark rounded-xl p-6 text-left transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <div className="bg-lli-orange text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-bullseye text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Strategic Planning</h3>
              <p className="text-sm text-gray-600 mb-3">7 resources</p>
              <span className="text-lli-orange font-semibold text-sm flex items-center">
                Browse <i id="strategic-icon" className="fas fa-chevron-down ml-2 group-hover:translate-x-1 transition-transform"></i>
              </span>
            </button>
          </div>

          {/* Leadership Development Resources */}
          <div id="leadership-resources" className="hidden mb-12">
            <div className="bg-gradient-to-br from-lli-teal/5 to-white border-2 border-lli-teal rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <i className="fas fa-user-tie text-lli-teal mr-3"></i>
                Leadership Development Resources
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {leadershipResources.map((resource, index) => (
                  <ResourceCard
                    key={index}
                    title={resource.title}
                    description={resource.description}
                    type={resource.type}
                    duration={resource.duration}
                    image={resource.image}
                    color="teal"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* DEI & Culture Resources */}
          <div id="dei-resources" className="hidden mb-12">
            <div className="bg-gradient-to-br from-lli-orange/5 to-white border-2 border-lli-orange rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <i className="fas fa-users text-lli-orange mr-3"></i>
                DEI & Culture Resources
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {deiResources.map((resource, index) => (
                  <ResourceCard
                    key={index}
                    title={resource.title}
                    description={resource.description}
                    type={resource.type}
                    duration={resource.duration}
                    image={resource.image}
                    color="orange"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Change Management Resources */}
          <div id="change-resources" className="hidden mb-12">
            <div className="bg-gradient-to-br from-lli-teal/5 to-white border-2 border-lli-teal rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <i className="fas fa-chart-line text-lli-teal mr-3"></i>
                Change Management Resources
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {changeResources.map((resource, index) => (
                  <ResourceCard
                    key={index}
                    title={resource.title}
                    description={resource.description}
                    type={resource.type}
                    duration={resource.duration}
                    image={resource.image}
                    color="teal"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Strategic Planning Resources */}
          <div id="strategic-resources" className="hidden mb-12">
            <div className="bg-gradient-to-br from-lli-orange/5 to-white border-2 border-lli-orange rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <i className="fas fa-bullseye text-lli-orange mr-3"></i>
                Strategic Planning Resources
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {strategicResources.map((resource, index) => (
                  <ResourceCard
                    key={index}
                    title={resource.title}
                    description={resource.description}
                    type={resource.type}
                    duration={resource.duration}
                    image={resource.image}
                    color="orange"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
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

      <Footer />
    </div>
  )
}
