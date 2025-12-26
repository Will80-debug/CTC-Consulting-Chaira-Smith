import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { ResourceCard } from '../components/ResourceCard'
import { SubscriptionModal } from '../components/SubscriptionModal'
import { leadershipResources, deiResources, changeResources, strategicResources } from '../data/resource-library'

export const ResourcesPage = () => {
  // Resource images
  const downloadableGuideImg = "https://sspark.genspark.ai/cfimages?u1=ghImmXMbKrGBMxYuscEj017YLMrF0DuubmxINuyW3IRDyr7yWiBRs7RVJ1n4aDLhNcPJo7gV7gzv8zDCMDIWIhu%2BIXi%2FBTIEIfDfaGUQ5kPejVntVrPMHks0xMBbNPeZRMX41IgOaDi2QFodGwkIOOAsYXw2vpMdhbYvKMsTc8bXCmCVH%2BW2dVHsh0601%2BVtEvftdaQ7ixSB3FDhc9NXrZUy3MBL&u2=DRJBwiDrnjEHDgQ%2B&width=2560"
  const webinarImg = "https://sspark.genspark.ai/cfimages?u1=p3451G3ZEplqSVU1hpWslMBIRhknlX84CsLjYH3SkznuTIrlkxpyLAuCwkmtMFXbwhpEvre9YJ3e99PmcLuDRrpBMd2vgWUNT%2BvkZwb2HqDUbZe%2FfwNbySP593IfQLzHOX%2FP1WA3WLrjXpp%2FnLigzhI%2B5CHarzSTteaGCdJuAw7caVHr%2FR8IrzhY3HPD5eqAoLqHXC9oAtaaRBQ4DxSo3yzd1vrQGBSFuJKrYw%3D%3D&u2=r5lJXZBmG11V2fj%2B&width=2560"
  const toolkitImg = "https://sspark.genspark.ai/cfimages?u1=mBzrm%2FITxbifSCnl6VSi0VBL8jW7BYLARSnPGIKDFLwD%2FztAX0QY59OB%2BpFGhr3%2BB1QFUtKFUdxUJ2YiK3N1k8HIw6w9q6rfDEPoTVb9HCSRcZUqllhE5XVLSQUkJnzqsl%2BDhdoCuljW&u2=AJs5ASJIXhyWd%2FHw&width=2560"

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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lli-orange to-lli-teal">Leadership Resources</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Free tools, guides, and insights to support your leadership and culture transformation journey
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="text-lli-teal">Resources</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download our most popular guides and toolkits for immediate impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Resource 1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48">
                <img 
                  src={downloadableGuideImg} 
                  alt="Leadership Assessment Guide" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-lli-teal text-white px-3 py-1 rounded-lg text-sm font-semibold">
                  Free Download
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">The Leadership Self-Assessment Guide</h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive 20-question tool to evaluate your leadership effectiveness and identify areas for growth.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-gray-700">
                    <i className="fas fa-check-circle text-lli-teal mr-2 mt-1"></i>
                    <span>Self-scoring framework</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="fas fa-check-circle text-lli-teal mr-2 mt-1"></i>
                    <span>Action planning template</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="fas fa-check-circle text-lli-teal mr-2 mt-1"></i>
                    <span>Development resources</span>
                  </li>
                </ul>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-3">DEI Culture Toolkit</h3>
                <p className="text-gray-600 mb-4">
                  Practical tools and conversation guides for building more inclusive workplace cultures.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-gray-700">
                    <i className="fas fa-check-circle text-lli-orange mr-2 mt-1"></i>
                    <span>Conversation starters</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="fas fa-check-circle text-lli-orange mr-2 mt-1"></i>
                    <span>Team assessment tools</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="fas fa-check-circle text-lli-orange mr-2 mt-1"></i>
                    <span>Implementation checklist</span>
                  </li>
                </ul>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-3">The Culture Change Playbook</h3>
                <p className="text-gray-600 mb-4">
                  Step-by-step guide to planning and executing sustainable culture transformation initiatives.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-gray-700">
                    <i className="fas fa-check-circle text-lli-teal mr-2 mt-1"></i>
                    <span>90-day action plan</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="fas fa-check-circle text-lli-teal mr-2 mt-1"></i>
                    <span>Stakeholder mapping</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="fas fa-check-circle text-lli-teal mr-2 mt-1"></i>
                    <span>Success metrics framework</span>
                  </li>
                </ul>
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

      {/* Webinars & Workshops */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-lli-orange">Webinars</span> & Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our live learning sessions and recorded webinars
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Upcoming Webinar */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-lli-teal">
              <div className="flex items-start mb-4">
                <div className="bg-lli-teal text-white rounded-lg p-3 mr-4">
                  <i className="fas fa-calendar text-2xl"></i>
                </div>
                <div>
                  <p className="text-sm text-lli-teal font-semibold mb-1">UPCOMING WEBINAR</p>
                  <h3 className="text-2xl font-bold text-gray-900">Leading with Equity: A Practical Framework</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Learn practical strategies for embedding equity into your daily leadership practice. No theory—just actionable tools you can use immediately.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-gray-700">
                  <i className="fas fa-clock text-lli-teal mr-3"></i>
                  <span>Thursday, January 23, 2025 • 2:00 PM ET</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="fas fa-user text-lli-teal mr-3"></i>
                  <span>Led by Chiara Smith, Founder</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="fas fa-video text-lli-teal mr-3"></i>
                  <span>60 minutes + Q&A</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105">
                Register Free
              </button>
            </div>

            {/* On-Demand Webinar */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-lli-orange">
              <div className="flex items-start mb-4">
                <div className="bg-lli-orange text-white rounded-lg p-3 mr-4">
                  <i className="fas fa-play-circle text-2xl"></i>
                </div>
                <div>
                  <p className="text-sm text-lli-orange font-semibold mb-1">ON-DEMAND RECORDING</p>
                  <h3 className="text-2xl font-bold text-gray-900">The LLI Framework™ in Action</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Watch our most popular webinar showing how the Listen → Learn → Implement framework drives real culture change.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-gray-700">
                  <i className="fas fa-clock text-lli-orange mr-3"></i>
                  <span>45 minutes</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="fas fa-download text-lli-orange mr-3"></i>
                  <span>Includes worksheet & resources</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="fas fa-chart-line text-lli-orange mr-3"></i>
                  <span>Real case study examples</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-lli-orange to-lli-orange-dark text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105">
                Watch Now
              </button>
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

      {/* Subscription Modal */}
      <SubscriptionModal />

      {/* Subscription Manager Script */}
      <script src="/static/subscription-manager.js"></script>

      <Footer />
    </div>
  )
}
