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
                <i className="fas fa-pen mr-2"></i>
                Leadership & Culture Reflection Intake
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Leadership & Culture<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lli-orange to-lli-teal">Reflection Intake</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                A short reflection tool to help clarify what you are navigating before our discovery conversation. No scoring. No ranking. Just structured questions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="/assessment/start" 
                  className="inline-block bg-lli-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-lli-orange-dark transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 text-center"
                >
                  Begin Intake
                  <i className="fas fa-arrow-right ml-3"></i>
                </a>
              </div>
              
              <div className="flex items-center space-x-6 text-white">
                <div className="flex items-center">
                  <i className="fas fa-clock text-lli-orange mr-2"></i>
                  <span>5-minute completion</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-users text-lli-teal mr-2"></i>
                  <span>For leaders & teams</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-comments text-lli-orange mr-2"></i>
                  <span>Informs discovery call</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Professional Image 1 - Data Analysis */}
        <section className="mb-20">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/static/assessment-data-analysis.jpg" 
              alt="LLI Consulting Group professional consultation and data analysis" 
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* 5 Dimensions */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We <span className="text-lli-teal">Explore</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reflection areas to help clarify your leadership context
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dimensions.map((dimension, index) => (
              <a
                href="/assessment/start"
                key={dimension.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-lli-teal cursor-pointer"
                style={{ borderTopColor: dimension.color === 'lli-orange' ? '#E86D3A' : '#2D9FA5' }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br from-${dimension.color} to-${dimension.color}-dark text-white rounded-full flex items-center justify-center text-2xl mb-4`}>
                  <i className={`fas ${dimension.icon}`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{dimension.name}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {dimension.description}
                </p>
              </a>
            ))}
            
            {/* Overall Score Card */}
            <a
              href="/assessment/start"
              className="bg-gradient-to-br from-lli-black to-gray-800 rounded-2xl p-8 shadow-xl border-t-4 border-lli-orange text-white cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-lli-orange text-white rounded-full flex items-center justify-center text-2xl mb-4">
                <i className="fas fa-trophy"></i>
              </div>
              <h3 className="text-2xl font-bold mb-3">Overall Readiness</h3>
              <p className="text-gray-200 leading-relaxed">
                Your comprehensive Leadership Readiness Score from 0-100, showing where you stand and what to focus on next.
              </p>
            </a>
          </div>
        </section>

        {/* Professional Image 2 - Presentation */}
        <section className="mb-20">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/static/assessment-presentation.jpg" 
              alt="LLI Consulting Group leadership presentation and strategic planning" 
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="mb-20 bg-white rounded-2xl shadow-xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It <span className="text-lli-orange">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple reflection process to prepare for our conversation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-lli-teal to-lli-teal-dark text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Reflection</h3>
              <p className="text-gray-700 leading-relaxed">
                Thoughtfully respond to structured questions about your leadership context and challenges. Takes just 5 minutes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-lli-orange to-lli-orange-dark text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Review Summary Themes</h3>
              <p className="text-gray-700 leading-relaxed">
                Receive a summary of key themes identified from your responses. No scoring or ranking.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-lli-teal to-lli-teal-dark text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Use for Discovery Call</h3>
              <p className="text-gray-700 leading-relaxed">
                Your summary themes become discussion prompts for our discovery conversation about next steps.
              </p>
            </div>
          </div>
        </section>

        {/* Professional Image 3 - Consultation */}
        <section className="mb-20">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/static/assessment-consultation.jpg" 
              alt="LLI Consulting Group team consultation and facilitation" 
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* What You Get */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-lli-teal to-lli-teal-dark rounded-2xl p-12 text-white shadow-2xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">What You'll Receive</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <i className="fas fa-list text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Summary Themes</h3>
                    <p className="text-gray-100">Key themes identified from your reflection responses</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <i className="fas fa-comments text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Discussion Prompts</h3>
                    <p className="text-gray-100">Structured prompts to inform your discovery call conversation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <i className="fas fa-lightbulb text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Clarity on Context</h3>
                    <p className="text-gray-100">Better understanding of your current leadership situation and challenges</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <i className="fas fa-map text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Foundation for Next Steps</h3>
                    <p className="text-gray-100">A clear starting point for exploring potential engagement and support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Image 4 - Meeting */}
        <section className="mb-20">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/static/assessment-meeting.jpg" 
              alt="LLI Consulting Group strategic meeting and collaboration" 
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-lli-orange to-lli-orange-dark rounded-2xl p-16 shadow-2xl text-white">
            <h2 className="text-5xl font-bold mb-6">
              Ready to Begin Your Reflection Intake?
            </h2>
            <p className="text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Take a structured approach to clarifying your leadership context and challenges.
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
