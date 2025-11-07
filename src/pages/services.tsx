export const ServicesPage = () => {
  const videoUrl = "https://page.gensparksite.com/get_upload_url/f3ade8ec614b90cdfd115b763d7da8b6d74c6e28f60223e4eca0ae0ca5e13349/default/65faa4a0-caea-452d-a9fc-f8af558c38fd"
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-lli-dark mb-2">LLI Consulting Group</h1>
            <p className="text-lg text-gray-600">Professional Coaching & Leadership Development</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold text-lli-dark mb-6">
            Lead with Confidence, Clarity, and Purpose
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Unlock your authentic leadership potential through personalized 1:1 coaching designed for emerging leaders and seasoned professionals.
          </p>
        </section>

        {/* Individual Coaching Section */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-lli-red to-lli-teal text-white p-8">
              <h3 className="text-3xl font-bold mb-4 flex items-center">
                <i className="fas fa-user-tie mr-3"></i>
                Individual Coaching
              </h3>
              <p className="text-lg opacity-90">
                Leadership starts from within. Transform your internal confidence, clarity, and purpose into authentic leadership impact.
              </p>
            </div>
            
            <div className="p-8">
              {/* Video Section */}
              <div className="mb-8">
                <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-inner mb-6">
                  <video 
                    id="coaching-video" 
                    className="w-full h-auto max-h-96 hidden"
                    controls
                    preload="metadata"
                  >
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Video Placeholder/Thumbnail */}
                  <div id="video-placeholder" className="aspect-video bg-gradient-to-br from-lli-red to-lli-teal flex items-center justify-center">
                    <div className="text-center text-white">
                      <i className="fas fa-play-circle text-6xl mb-4 opacity-80"></i>
                      <h4 className="text-2xl font-semibold mb-2">Discover Our 1:1 Coaching Approach</h4>
                      <p className="text-lg opacity-90">See how we help leaders unlock their authentic potential</p>
                    </div>
                  </div>
                </div>
                
                {/* Watch Video Button */}
                <div className="text-center">
                  <button 
                    id="watch-video-btn"
                    className="bg-lli-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl flex items-center mx-auto space-x-3"
                  >
                    <i className="fas fa-play text-lg"></i>
                    <span className="text-lg ml-2">Watch Video</span>
                  </button>
                </div>
              </div>

              {/* Coaching Pillars */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="text-lli-red mb-3">
                    <i className="fas fa-lightbulb text-3xl"></i>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Leadership Development</h4>
                  <p className="text-sm text-gray-600">Build confidence and find your authentic leadership voice</p>
                </div>
                
                <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="text-lli-teal mb-3">
                    <i className="fas fa-balance-scale text-3xl"></i>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Workplace Equity</h4>
                  <p className="text-sm text-gray-600">Navigate equity challenges with strategy, empathy, and resilience</p>
                </div>
                
                <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="text-lli-red mb-3">
                    <i className="fas fa-shield-heart text-3xl"></i>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Stress Management</h4>
                  <p className="text-sm text-gray-600">Foster psychological safety and leader wellbeing</p>
                </div>
                
                <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="text-lli-teal mb-3">
                    <i className="fas fa-target text-3xl"></i>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Goal Setting</h4>
                  <p className="text-sm text-gray-600">Turn vision into measurable, accountable action steps</p>
                </div>
              </div>

              {/* LLI Approach */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-8 mb-8">
                <h4 className="text-2xl font-bold text-lli-dark mb-4 text-center">The LLI Approach</h4>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-lli-red mb-3">
                      <i className="fas fa-ear-listen text-3xl"></i>
                    </div>
                    <h5 className="font-semibold text-lg mb-2">Listen</h5>
                    <p className="text-gray-600">We deeply understand your unique leadership challenges and aspirations</p>
                  </div>
                  <div>
                    <div className="text-lli-teal mb-3">
                      <i className="fas fa-graduation-cap text-3xl"></i>
                    </div>
                    <h5 className="font-semibold text-lg mb-2">Learn</h5>
                    <p className="text-gray-600">Develop personalized strategies and tools for your growth</p>
                  </div>
                  <div>
                    <div className="text-lli-red mb-3">
                      <i className="fas fa-rocket text-3xl"></i>
                    </div>
                    <h5 className="font-semibold text-lg mb-2">Implement</h5>
                    <p className="text-gray-600">Transform personal growth into measurable organizational impact</p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <h4 className="text-2xl font-semibold text-lli-dark mb-4">
                  Ready to Transform Your Leadership?
                </h4>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Schedule your personalized coaching consultation today and discover how our proven approach can help you lead with confidence, clarity, and purpose.
                </p>
                <a 
                  href="https://www.LLIConsulting.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-lli-teal hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl inline-flex items-center space-x-3"
                >
                  <i className="fas fa-calendar-check"></i>
                  <span>Schedule Your Consultation</span>
                  <i className="fas fa-external-link-alt text-sm"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services Teaser */}
        <section className="text-center bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-3xl font-bold text-lli-dark mb-4">More Services Available</h3>
          <p className="text-gray-600 mb-6">
            Explore our comprehensive range of leadership development and organizational consulting services.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <i className="fas fa-users text-lli-red text-2xl mb-3"></i>
              <h4 className="font-semibold mb-2">Team Coaching</h4>
              <p className="text-sm text-gray-600">Develop high-performing teams with collaborative leadership skills</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <i className="fas fa-building text-lli-teal text-2xl mb-3"></i>
              <h4 className="font-semibold mb-2">Organizational Development</h4>
              <p className="text-sm text-gray-600">Transform company culture and operational effectiveness</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <i className="fas fa-chalkboard-teacher text-lli-red text-2xl mb-3"></i>
              <h4 className="font-semibold mb-2">Leadership Workshops</h4>
              <p className="text-sm text-gray-600">Intensive group training sessions for leadership excellence</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-lli-dark text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-2">&copy; 2024 LLI Consulting Group. All rights reserved.</p>
          <p className="text-gray-400">
            Visit us at <a href="https://www.LLIConsulting.com" className="text-lli-teal hover:text-teal-300 transition-colors" target="_blank" rel="noopener noreferrer">www.LLIConsulting.com</a>
          </p>
        </div>
      </footer>

      {/* JavaScript for Video Toggle */}
      <script src="/static/video-player.js"></script>
    </div>
  )
}