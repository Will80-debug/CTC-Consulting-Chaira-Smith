import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

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
                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-teal text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Emotional Intelligence for Leaders</h4>
                      <p className="text-sm text-gray-600">Guide to developing EQ competencies</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 8 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-teal text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Feedback Framework</h4>
                      <p className="text-sm text-gray-600">Master the art of giving and receiving feedback</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 6 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-teal text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Decision-Making Under Pressure</h4>
                      <p className="text-sm text-gray-600">Strategic frameworks for critical decisions</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 10 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-video text-lli-teal text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Authentic Leadership Series</h4>
                      <p className="text-sm text-gray-600">4-part video training on leading with authenticity</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">Video • 45 min</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-teal text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Delegation Mastery Workbook</h4>
                      <p className="text-sm text-gray-600">Learn to delegate effectively and empower teams</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 12 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-teal text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Coaching Conversation Guide</h4>
                      <p className="text-sm text-gray-600">Templates for powerful coaching conversations</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 7 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-teal text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Executive Presence Blueprint</h4>
                      <p className="text-sm text-gray-600">Build commanding presence and influence</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 9 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-teal text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Resilient Leadership Toolkit</h4>
                      <p className="text-sm text-gray-600">Build capacity to lead through adversity</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 11 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-teal text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Time Management for Leaders</h4>
                      <p className="text-sm text-gray-600">Prioritization strategies for busy executives</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 8 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-teal text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Conflict Resolution Framework</h4>
                      <p className="text-sm text-gray-600">Navigate difficult conversations with confidence</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 10 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-teal text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Leadership Communication Playbook</h4>
                      <p className="text-sm text-gray-600">Master stakeholder and team communication</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 14 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-teal text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Building High-Trust Teams</h4>
                      <p className="text-sm text-gray-600">Strategies for creating psychological safety</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 9 pages</span>
                </div>
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
                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-orange text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Unconscious Bias Workshop Guide</h4>
                      <p className="text-sm text-gray-600">Facilitator guide for bias awareness training</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 15 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-orange text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Inclusive Hiring Practices</h4>
                      <p className="text-sm text-gray-600">Remove bias from your recruitment process</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 12 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-orange text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Microaggressions Response Guide</h4>
                      <p className="text-sm text-gray-600">How to address subtle workplace exclusion</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 8 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-orange text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Employee Resource Group Handbook</h4>
                      <p className="text-sm text-gray-600">Launch and sustain effective ERGs</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 18 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-orange text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Psychological Safety Assessment</h4>
                      <p className="text-sm text-gray-600">Measure and improve team psychological safety</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 10 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-orange text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Allyship Action Framework</h4>
                      <p className="text-sm text-gray-600">Move from awareness to active allyship</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 11 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-video text-lli-orange text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Difficult Conversations on Race</h4>
                      <p className="text-sm text-gray-600">Video training for facilitating dialogue</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">Video • 60 min</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-orange text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Generational Diversity Guide</h4>
                      <p className="text-sm text-gray-600">Bridge gaps across 5 generations at work</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 13 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-orange text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Neurodiversity in the Workplace</h4>
                      <p className="text-sm text-gray-600">Create inclusive environments for all minds</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 14 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-orange text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Gender Equity Playbook</h4>
                      <p className="text-sm text-gray-600">Close gender gaps in leadership and pay</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 16 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-orange text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Religious Accommodation Guide</h4>
                      <p className="text-sm text-gray-600">Support diverse faith practices at work</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 9 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-orange text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Pronoun Usage Best Practices</h4>
                      <p className="text-sm text-gray-600">Create respectful, inclusive communication</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 6 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-orange text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Cultural Competency Framework</h4>
                      <p className="text-sm text-gray-600">Develop cross-cultural leadership skills</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 12 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-orange text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Accessibility Audit Checklist</h4>
                      <p className="text-sm text-gray-600">Ensure physical and digital accessibility</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 10 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-orange text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Inclusive Language Style Guide</h4>
                      <p className="text-sm text-gray-600">Write and speak with inclusion in mind</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 7 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-orange text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">DEI Metrics Dashboard</h4>
                      <p className="text-sm text-gray-600">Track progress and measure DEI impact</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 11 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-orange text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Belonging Survey Template</h4>
                      <p className="text-sm text-gray-600">Assess sense of belonging in your organization</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 8 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-orange text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Inclusive Event Planning Guide</h4>
                      <p className="text-sm text-gray-600">Host events that welcome everyone</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 9 pages</span>
                </div>
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
                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-teal text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Change Readiness Assessment</h4>
                      <p className="text-sm text-gray-600">Evaluate organizational readiness for change</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 12 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-teal text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Resistance Management Toolkit</h4>
                      <p className="text-sm text-gray-600">Address and overcome change resistance</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 14 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-teal text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Change Communication Plan Template</h4>
                      <p className="text-sm text-gray-600">Craft effective change communication strategy</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 10 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-teal text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Transition Management Workbook</h4>
                      <p className="text-sm text-gray-600">Guide individuals through organizational change</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 16 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-video text-lli-teal text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Leading Through Change Masterclass</h4>
                      <p className="text-sm text-gray-600">Video series on change leadership</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">Video • 55 min</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-teal text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Change Champion Network Guide</h4>
                      <p className="text-sm text-gray-600">Build and activate change champion networks</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 11 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-teal text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Kotter's 8-Step Process Workbook</h4>
                      <p className="text-sm text-gray-600">Apply proven change framework to your initiative</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 18 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-teal text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Merger & Acquisition Integration</h4>
                      <p className="text-sm text-gray-600">Navigate cultural integration during M&A</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 20 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-teal text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Sustaining Change Momentum</h4>
                      <p className="text-sm text-gray-600">Keep change initiatives on track long-term</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 9 pages</span>
                </div>
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
                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-orange text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Vision & Mission Workshop Facilitation</h4>
                      <p className="text-sm text-gray-600">Create compelling organizational vision</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 13 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-orange text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">SWOT Analysis Deep Dive</h4>
                      <p className="text-sm text-gray-600">Comprehensive strategic analysis framework</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 11 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-orange text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">OKR Implementation Guide</h4>
                      <p className="text-sm text-gray-600">Set and track objectives and key results</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 15 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-orange text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Balanced Scorecard Template</h4>
                      <p className="text-sm text-gray-600">Align strategy with execution and metrics</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 10 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-video text-lli-orange text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Strategic Planning Retreat Guide</h4>
                      <p className="text-sm text-gray-600">Video + workbook for effective planning sessions</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">Video • 40 min + PDF</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-orange text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Competitive Analysis Framework</h4>
                      <p className="text-sm text-gray-600">Assess market position and opportunities</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 12 pages</span>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start mb-3">
                    <i className="fas fa-file-pdf text-lli-orange text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Scenario Planning Workbook</h4>
                      <p className="text-sm text-gray-600">Prepare for multiple future scenarios</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">PDF • 14 pages</span>
                </div>
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

      <Footer />
    </div>
  )
}
