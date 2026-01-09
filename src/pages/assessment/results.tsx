import { Navigation } from '../../components/Navigation'
import { Footer } from '../../components/Footer'

export const AssessmentResultsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Email Capture Modal */}
        <div id="email-modal" className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-lli-teal to-lli-orange rounded-full mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-file-pdf text-3xl text-white"></i>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Get Your Full Report</h2>
              <p className="text-lg text-gray-600">
                Enter your email to receive your comprehensive 15-page Leadership Readiness Report
              </p>
            </div>
            
            <form id="email-form" className="space-y-4">
              <div>
                <label htmlFor="user-name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="user-name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lli-teal focus:outline-none"
                  placeholder="Chiara Smith"
                />
              </div>
              
              <div>
                <label htmlFor="user-email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="user-email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lli-teal focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="user-organization" className="block text-sm font-semibold text-gray-700 mb-2">
                  Organization (Optional)
                </label>
                <input
                  type="text"
                  id="user-organization"
                  name="organization"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lli-teal focus:outline-none"
                  placeholder="Your Company Name"
                />
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <div className="flex items-start">
                  <i className="fas fa-gift text-blue-500 text-xl mr-3 mt-1"></i>
                  <div className="text-sm text-gray-700">
                    <p className="font-semibold mb-1">What You'll Get:</p>
                    <ul className="space-y-1 text-xs">
                      <li>✓ 15-page comprehensive report with detailed analysis</li>
                      <li>✓ Personalized action plan for each dimension</li>
                      <li>✓ Benchmarking against industry standards</li>
                      <li>✓ Recommended resources and next steps</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => (window as any).skipEmail()}
                  className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-all"
                >
                  Skip for Now
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white rounded-lg font-bold hover:shadow-lg transition-all"
                >
                  <i className="fas fa-envelope mr-2"></i>
                  Send Report
                </button>
              </div>
              
              <p className="text-xs text-gray-500 text-center">
                We respect your privacy. Your email will only be used to send your report and occasional leadership insights.
              </p>
            </form>
            
            <div id="email-success" className="hidden text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-check text-3xl text-green-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Report Sent!</h3>
              <p className="text-gray-600 mb-6">
                Check your inbox for your comprehensive Leadership Readiness Report.
              </p>
              <button
                onClick={() => (window as any).closeEmailModal()}
                className="px-8 py-3 bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white rounded-lg font-bold hover:shadow-lg transition-all"
              >
                View Your Results
              </button>
            </div>
          </div>
        </div>

        {/* Loading State */}
        <div id="loading" className="hidden text-center py-20">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-lli-teal mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Calculating your Leadership Readiness Score...</p>
        </div>

        {/* Results Container */}
        <div id="results-container" className="hidden">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Leadership Readiness Results
            </h1>
            <p id="completion-date" className="text-lg text-gray-600"></p>
          </div>

          {/* Overall Score Card */}
          <div id="overall-score-card" className="bg-gradient-to-br from-lli-teal to-lli-teal-dark rounded-2xl shadow-2xl p-12 text-white mb-12">
            <div className="text-center">
              <p className="text-xl mb-4 opacity-90">Your Overall Leadership Readiness Score</p>
              <div className="relative inline-block">
                <svg className="transform -rotate-90" width="200" height="200">
                  <circle cx="100" cy="100" r="90" stroke="rgba(255,255,255,0.2)" stroke-width="12" fill="none"/>
                  <circle id="score-circle" cx="100" cy="100" r="90" stroke="white" stroke-width="12" fill="none" 
                    stroke-dasharray="565" stroke-dashoffset="565" class="transition-all duration-2000"/>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p id="overall-score" className="text-6xl font-bold">0</p>
                    <p className="text-sm opacity-75">out of 100</p>
                  </div>
                </div>
              </div>
              <div id="level-badge" className="mt-6 inline-block px-8 py-3 bg-white/20 backdrop-blur rounded-full">
                <p id="level-text" className="text-2xl font-bold"></p>
              </div>
              <p id="level-description" className="mt-4 text-lg max-w-3xl mx-auto leading-relaxed"></p>
            </div>
          </div>

          {/* Dimension Scores */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Your Dimension Breakdown</h2>
            
            <div className="space-y-6">
              {/* Leadership */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <i className="fas fa-user-tie text-2xl text-lli-orange mr-3"></i>
                    <span className="font-bold text-lg text-gray-900">Leadership Effectiveness</span>
                  </div>
                  <span id="leadership-score" className="text-2xl font-bold text-lli-orange">0</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div id="leadership-bar" className="bg-gradient-to-r from-lli-orange to-lli-orange-dark h-4 rounded-full transition-all duration-1000" style={{ width: '0%' }}></div>
                </div>
              </div>

              {/* Culture */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <i className="fas fa-heart-pulse text-2xl text-lli-teal mr-3"></i>
                    <span className="font-bold text-lg text-gray-900">Culture Health</span>
                  </div>
                  <span id="culture-score" className="text-2xl font-bold text-lli-teal">0</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div id="culture-bar" className="bg-gradient-to-r from-lli-teal to-lli-teal-dark h-4 rounded-full transition-all duration-1000" style={{ width: '0%' }}></div>
                </div>
              </div>

              {/* DEI */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <i className="fas fa-users text-2xl text-lli-orange mr-3"></i>
                    <span className="font-bold text-lg text-gray-900">DEI Readiness</span>
                  </div>
                  <span id="dei-score" className="text-2xl font-bold text-lli-orange">0</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div id="dei-bar" className="bg-gradient-to-r from-lli-orange to-lli-orange-dark h-4 rounded-full transition-all duration-1000" style={{ width: '0%' }}></div>
                </div>
              </div>

              {/* Change */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <i className="fas fa-arrows-rotate text-2xl text-lli-teal mr-3"></i>
                    <span className="font-bold text-lg text-gray-900">Change Capability</span>
                  </div>
                  <span id="change-score" className="text-2xl font-bold text-lli-teal">0</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div id="change-bar" className="bg-gradient-to-r from-lli-teal to-lli-teal-dark h-4 rounded-full transition-all duration-1000" style={{ width: '0%' }}></div>
                </div>
              </div>

              {/* Team */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <i className="fas fa-people-group text-2xl text-lli-orange mr-3"></i>
                    <span className="font-bold text-lg text-gray-900">Team Performance</span>
                  </div>
                  <span id="team-score" className="text-2xl font-bold text-lli-orange">0</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div id="team-bar" className="bg-gradient-to-r from-lli-orange to-lli-orange-dark h-4 rounded-full transition-all duration-1000" style={{ width: '0%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Strengths and Gaps */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Top Strengths */}
            <div className="bg-green-50 rounded-2xl p-8 border-l-4 border-green-500">
              <div className="flex items-center mb-6">
                <i className="fas fa-arrow-up text-3xl text-green-600 mr-4"></i>
                <h3 className="text-2xl font-bold text-gray-900">Your Top Strengths</h3>
              </div>
              <div id="strengths-list" className="space-y-3">
                {/* Populated by JavaScript */}
              </div>
            </div>

            {/* Top Gaps */}
            <div className="bg-orange-50 rounded-2xl p-8 border-l-4 border-lli-orange">
              <div className="flex items-center mb-6">
                <i className="fas fa-exclamation-triangle text-3xl text-lli-orange mr-4"></i>
                <h3 className="text-2xl font-bold text-gray-900">Priority Focus Areas</h3>
              </div>
              <div id="gaps-list" className="space-y-3">
                {/* Populated by JavaScript */}
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              <i className="fas fa-lightbulb text-lli-orange mr-3"></i>
              Recommended Next Steps
            </h2>
            <div id="recommendations-list" className="space-y-4">
              {/* Populated by JavaScript */}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-lli-orange to-lli-orange-dark rounded-2xl p-12 text-white shadow-2xl text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Ready to Take Action?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Your results reveal specific opportunities for growth. Let's discuss how to turn these insights into measurable improvement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/contact" 
                className="inline-block bg-white text-lli-orange px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl"
              >
                <i className="fas fa-calendar-check mr-2"></i>
                Schedule Free Consultation
              </a>
              <a 
                href="/pricing" 
                className="inline-block bg-white/20 backdrop-blur text-white border-2 border-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-all duration-300"
              >
                <i className="fas fa-crown mr-2"></i>
                Explore Membership Options
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-lg font-semibold mb-2">
                <i className="fas fa-gift mr-2"></i>
                Professional Members Get:
              </p>
              <ul className="text-left text-base space-y-2 opacity-90">
                <li>• Unlimited assessments with trend tracking</li>
                <li>• Downloadable 15-page comprehensive reports</li>
                <li>• Access to all 46 leadership resources</li>
                <li>• Monthly group coaching calls</li>
              </ul>
            </div>
          </div>

          {/* Share Results */}
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 mb-4">Found this assessment helpful?</p>
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => (window as any).shareOnLinkedIn()} 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
              >
                <i className="fab fa-linkedin mr-2"></i>
                Share on LinkedIn
              </button>
              <button 
                onClick={() => (window as any).shareOnTwitter()} 
                className="px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900 transition-all"
              >
                <i className="fab fa-twitter mr-2"></i>
                Share on Twitter
              </button>
            </div>
          </div>

          {/* Retake Assessment */}
          <div className="text-center">
            <a 
              href="/assessment/start" 
              onClick={() => localStorage.clear()} 
              className="text-lli-teal hover:text-lli-teal-dark font-semibold text-lg"
            >
              <i className="fas fa-redo mr-2"></i>
              Retake Assessment
            </a>
          </div>

        </div>

      </main>

      <Footer />
      
      <script src="/static/assessment-results.js"></script>
    </div>
  )
}
