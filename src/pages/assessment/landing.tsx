import { Navigation } from '../../components/Navigation'
import { Footer } from '../../components/Footer'
import { dimensions } from '../../data/assessment-questions'

export const AssessmentLandingPage = () => {
  const heroImg = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=2000&h=1200&fit=crop";

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <img 
          src={heroImg} 
          alt="Leadership Assessment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-lli-black via-lli-black/95 to-lli-black/70"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <div className="inline-block bg-lli-orange text-white px-4 py-2 rounded-lg font-semibold mb-6">
                <i className="fas fa-clipboard-check mr-2"></i>
                Free Leadership Assessment
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                How Ready Is Your<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lli-orange to-lli-teal">Leadership & Culture?</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Take our research-backed 5-minute assessment and get your personalized Leadership Readiness Score across 5 critical dimensions. Discover your strengths, identify gaps, and get actionable recommendations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="/assessment/start" 
                  className="inline-block bg-lli-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-lli-orange-dark transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 text-center"
                >
                  Start Your Free Assessment
                  <i className="fas fa-arrow-right ml-3"></i>
                </a>
                <a 
                  href="#how-it-works" 
                  className="inline-block bg-white/10 backdrop-blur text-white border-2 border-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 text-center"
                >
                  How It Works
                </a>
              </div>
              
              <div className="flex items-center space-x-6 text-white">
                <div className="flex items-center">
                  <i className="fas fa-clock text-lli-orange mr-2"></i>
                  <span>5 minutes</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-chart-line text-lli-teal mr-2"></i>
                  <span>Instant results</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-lock text-lli-orange mr-2"></i>
                  <span>100% confidential</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* 5 Dimensions */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We <span className="text-lli-teal">Measure</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get your score across 5 critical dimensions of organizational effectiveness
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dimensions.map((dimension, index) => (
              <div 
                key={dimension.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-lli-teal"
                style={{ borderTopColor: dimension.color === 'lli-orange' ? '#E86D3A' : '#2D9FA5' }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br from-${dimension.color} to-${dimension.color}-dark text-white rounded-full flex items-center justify-center text-2xl mb-4`}>
                  <i className={`fas ${dimension.icon}`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{dimension.name}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {dimension.description}
                </p>
              </div>
            ))}
            
            {/* Overall Score Card */}
            <div className="bg-gradient-to-br from-lli-black to-gray-800 rounded-2xl p-8 shadow-xl border-t-4 border-lli-orange text-white">
              <div className="w-16 h-16 bg-lli-orange text-white rounded-full flex items-center justify-center text-2xl mb-4">
                <i className="fas fa-trophy"></i>
              </div>
              <h3 className="text-2xl font-bold mb-3">Overall Readiness</h3>
              <p className="text-gray-200 leading-relaxed">
                Your comprehensive Leadership Readiness Score from 0-100, showing where you stand and what to focus on next.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="mb-20 bg-white rounded-2xl shadow-xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It <span className="text-lli-orange">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three simple steps to understand your leadership readiness
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-lli-teal to-lli-teal-dark text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Answer 25 Questions</h3>
              <p className="text-gray-700 leading-relaxed">
                Thoughtfully answer questions about your leadership, culture, DEI, change capability, and team performance. Takes just 5 minutes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-lli-orange to-lli-orange-dark text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Your Score</h3>
              <p className="text-gray-700 leading-relaxed">
                Receive your instant Leadership Readiness Score (0-100) plus individual scores for each of the 5 dimensions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-lli-teal to-lli-teal-dark text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Take Action</h3>
              <p className="text-gray-700 leading-relaxed">
                Get personalized recommendations based on your results. Schedule a consultation to discuss how to improve your scores.
              </p>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-lli-teal to-lli-teal-dark rounded-2xl p-12 text-white shadow-2xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">What You'll Discover</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <i className="fas fa-chart-bar text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Your Overall Score</h3>
                    <p className="text-gray-100">See where you rank from 0-100 and what level you're operating at</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <i className="fas fa-bullseye text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Dimension Breakdown</h3>
                    <p className="text-gray-100">Individual scores for leadership, culture, DEI, change, and team performance</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <i className="fas fa-arrow-up text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Your Top Strengths</h3>
                    <p className="text-gray-100">What you're doing well and should continue building on</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <i className="fas fa-exclamation-triangle text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Your Biggest Gaps</h3>
                    <p className="text-gray-100">Critical areas that need attention and improvement</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <i className="fas fa-tasks text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Action Recommendations</h3>
                    <p className="text-gray-100">Specific, prioritized next steps to improve your results</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <i className="fas fa-download text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Downloadable Report</h3>
                    <p className="text-gray-100">Share your results or save for future reference (Professional members)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by <span className="text-lli-orange">Leaders</span> Like You
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-lli-teal rounded-full flex items-center justify-center text-white font-bold mr-4">
                  JM
                </div>
                <div>
                  <p className="font-bold text-gray-900">Jennifer Martinez</p>
                  <p className="text-sm text-gray-600">VP of HR, Tech Company</p>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                "This assessment revealed blind spots we didn't know existed. The results gave us a clear roadmap for improving our culture."
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-lli-orange rounded-full flex items-center justify-center text-white font-bold mr-4">
                  DW
                </div>
                <div>
                  <p className="font-bold text-gray-900">David Williams</p>
                  <p className="text-sm text-gray-600">CEO, Healthcare System</p>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                "Accurate, actionable, and eye-opening. We used the results to prioritize our leadership development investments."
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-lli-teal rounded-full flex items-center justify-center text-white font-bold mr-4">
                  SP
                </div>
                <div>
                  <p className="font-bold text-gray-900">Sarah Patel</p>
                  <p className="text-sm text-gray-600">Director, Nonprofit</p>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                "The assessment helped us see patterns we'd been missing. Best decision we made was following up with a consultation."
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-lli-orange to-lli-orange-dark rounded-2xl p-16 shadow-2xl text-white">
            <h2 className="text-5xl font-bold mb-6">
              Ready to Discover Your Leadership Readiness?
            </h2>
            <p className="text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of leaders who've gained clarity on their strengths and opportunities.
            </p>
            <a 
              href="/assessment/start" 
              className="inline-block bg-white text-lli-orange px-12 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Start Your Free Assessment Now
              <i className="fas fa-arrow-right ml-3"></i>
            </a>
            <p className="mt-6 text-lg opacity-90">
              No credit card required · Takes 5 minutes · Instant results
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
