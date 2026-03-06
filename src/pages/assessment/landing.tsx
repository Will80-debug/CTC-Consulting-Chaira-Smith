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
              alt="LLI Consulting Group LLC professional consultation and data analysis" 
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
              alt="LLI Consulting Group LLC leadership presentation and strategic planning" 
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
              alt="LLI Consulting Group LLC team consultation and facilitation" 
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
              alt="LLI Consulting Group LLC strategic meeting and collaboration" 
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

      {/* Organizational Culture Assessments Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Organizational Culture Assessments
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Understanding workplace culture requires structured analysis. LLI Consulting Group™ offers assessment tools designed to help organizations diagnose culture challenges, identify leadership blind spots, and prioritize implementation strategies.
            </p>
          </div>

          {/* Four-Tier Assessment Structure */}
          <div className="space-y-8">
            
            {/* Tier 1 - Free Snapshot */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border-l-8 border-lli-teal hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <span className="bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wider mr-4">
                      Tier 1
                    </span>
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wider">
                      Free
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    Organizational Culture Snapshot
                  </h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    A short introductory assessment designed to help organizations reflect on key culture and leadership indicators.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-lli-teal/5 to-white rounded-xl p-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">
                  <i className="fas fa-check-circle text-lli-teal mr-2"></i>
                  Includes:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-circle text-lli-teal text-xs mt-2 mr-3"></i>
                    <span className="text-gray-700">5–7 diagnostic questions</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-lli-teal text-xs mt-2 mr-3"></i>
                    <span className="text-gray-700">Immediate reflection insights</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-lli-teal text-xs mt-2 mr-3"></i>
                    <span className="text-gray-700">Identification of potential organizational culture gaps</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-gray-600 italic mb-6">
                This tool provides an entry point for organizations exploring culture and leadership strategy.
              </p>
              
              <a 
                href="/assessment/start" 
                className="inline-block bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Start Free Snapshot <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            {/* Tier 2 - Diagnostic (Paid) */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border-l-8 border-lli-orange hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <span className="bg-gradient-to-r from-lli-orange to-lli-orange-dark text-white px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wider mr-4">
                      Tier 2
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wider">
                      <i className="fas fa-lock mr-1"></i> Paid
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    Organizational Culture Diagnostic
                  </h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    A structured internal assessment designed to identify patterns affecting workplace culture, communication, and leadership dynamics.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-lli-orange/5 to-white rounded-xl p-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">
                  <i className="fas fa-check-circle text-lli-orange mr-2"></i>
                  Includes:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-circle text-lli-orange text-xs mt-2 mr-3"></i>
                    <span className="text-gray-700">Expanded leadership and staff survey questions</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-lli-orange text-xs mt-2 mr-3"></i>
                    <span className="text-gray-700">Analysis of organizational culture indicators</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-lli-orange text-xs mt-2 mr-3"></i>
                    <span className="text-gray-700">Written summary of key insights and strategic considerations</span>
                  </li>
                </ul>
              </div>
              
              <button 
                onclick="openPaymentModal('tier2')" 
                className="inline-block bg-gradient-to-r from-lli-orange to-lli-orange-dark text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                Request Diagnostic Access <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>

            {/* Tier 3 - Comprehensive (Consulting) */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border-l-8 border-lli-teal hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <span className="bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wider mr-4">
                      Tier 3
                    </span>
                    <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wider">
                      <i className="fas fa-briefcase mr-1"></i> Consulting
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    Comprehensive Organizational Culture Assessment
                  </h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    A full organizational analysis designed to support long-term culture and leadership transformation.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-lli-teal/5 to-white rounded-xl p-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">
                  <i className="fas fa-check-circle text-lli-teal mr-2"></i>
                  May Include:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-circle text-lli-teal text-xs mt-2 mr-3"></i>
                    <span className="text-gray-700">Staff listening sessions</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-lli-teal text-xs mt-2 mr-3"></i>
                    <span className="text-gray-700">Organizational climate surveys</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-lli-teal text-xs mt-2 mr-3"></i>
                    <span className="text-gray-700">Communication pattern analysis</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-lli-teal text-xs mt-2 mr-3"></i>
                    <span className="text-gray-700">Organizational policy review</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-lli-teal text-xs mt-2 mr-3"></i>
                    <span className="text-gray-700">Leadership structure evaluation</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-gray-600 italic mb-6">
                Deliverables include a written report outlining findings and recommended strategic priorities.
              </p>
              
              <button 
                onclick="openPaymentModal('tier3')" 
                className="inline-block bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                Schedule Consultation <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>

            {/* Tier 4 - Anonymous Staff Assessment (Paid) */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border-l-8 border-lli-orange hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <span className="bg-gradient-to-r from-lli-orange to-lli-orange-dark text-white px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wider mr-4">
                      Tier 4
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wider">
                      <i className="fas fa-lock mr-1"></i> Paid
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    Anonymous Staff Culture Assessment
                  </h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    This assessment allows staff members to participate independently and anonymously without leadership oversight. This model helps organizations understand workplace experiences that may not surface in traditional leadership assessments.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-lli-orange/5 to-white rounded-xl p-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">
                  <i className="fas fa-check-circle text-lli-orange mr-2"></i>
                  Includes:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-circle text-lli-orange text-xs mt-2 mr-3"></i>
                    <span className="text-gray-700">Confidential staff survey</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-lli-orange text-xs mt-2 mr-3"></i>
                    <span className="text-gray-700">Optional anonymous written responses</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-lli-orange text-xs mt-2 mr-3"></i>
                    <span className="text-gray-700">Analysis of communication patterns and staff experience</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-lli-orange text-xs mt-2 mr-3"></i>
                    <span className="text-gray-700">Summary insights identifying culture dynamics and implementation considerations</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p className="text-gray-700">
                  <i className="fas fa-shield-alt text-yellow-600 mr-2"></i>
                  <strong>Confidentiality Protected:</strong> Results are shared in aggregated form to protect confidentiality while helping leadership better understand staff experience.
                </p>
              </div>
              
              <button 
                onclick="openPaymentModal('tier4')" 
                className="inline-block bg-gradient-to-r from-lli-orange to-lli-orange-dark text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                Request Anonymous Assessment <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>

          </div>

          {/* Note about Paid Access */}
          <div className="mt-12 bg-gradient-to-r from-lli-black to-gray-800 rounded-2xl p-8 text-white text-center">
            <i className="fas fa-info-circle text-3xl text-lli-teal mb-4"></i>
            <h3 className="text-2xl font-bold mb-3">Access & Fees</h3>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              All paid assessment tiers (Tier 2, Tier 3, and Tier 4) require fee payment before access is granted. Once payment is processed, you will receive secure access credentials to your selected assessment tier.
            </p>
            <div className="mt-6">
              <a 
                href="/contact" 
                className="inline-block bg-lli-teal text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-lli-teal-dark transition-all duration-300"
              >
                Contact Us for Pricing <i className="fas fa-envelope ml-2"></i>
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />

      {/* Payment Modal */}
      <div id="paymentModal" className="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-8 md:p-12">
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button 
                onclick="closePaymentModal()" 
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <i className="fas fa-times text-2xl"></i>
              </button>
            </div>

            {/* Modal Content */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-lli-orange to-lli-orange-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-credit-card text-white text-3xl"></i>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Secure Your Assessment
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-xl mx-auto mb-2">
                Complete payment to access your selected assessment tier.
              </p>
              <p className="text-sm text-gray-600">
                <i className="fas fa-lock mr-1"></i> Secure payment processing · Instant access upon confirmation
              </p>
            </div>

            {/* Selected Tier Display */}
            <div id="selectedTierInfo" className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 mb-6 border-2 border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Selected Assessment</p>
                  <h3 id="tierName" className="text-2xl font-bold text-gray-900"></h3>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 mb-1">Investment</p>
                  <p id="tierPrice" className="text-3xl font-bold text-lli-teal"></p>
                </div>
              </div>
              <p id="tierDescription" className="text-gray-700 leading-relaxed"></p>
            </div>

            {/* Payment Form */}
            <div className="bg-white rounded-xl border-2 border-gray-200 p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                <i className="fas fa-lock text-lli-teal mr-2"></i>
                Payment Information
              </h3>
              
              <form id="paymentForm" className="space-y-4">
                {/* Organization Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Organization Name *
                  </label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lli-teal focus:outline-none transition-colors"
                    placeholder="Your Organization"
                  />
                </div>

                {/* Contact Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Contact Name *
                  </label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lli-teal focus:outline-none transition-colors"
                    placeholder="Full Name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lli-teal focus:outline-none transition-colors"
                    placeholder="email@organization.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lli-teal focus:outline-none transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                {/* Card Number */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Card Number *
                  </label>
                  <input 
                    type="text" 
                    required
                    maxLength="19"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lli-teal focus:outline-none transition-colors"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>

                {/* Card Details Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Expiry Date *
                    </label>
                    <input 
                      type="text" 
                      required
                      maxLength="5"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lli-teal focus:outline-none transition-colors"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      CVV *
                    </label>
                    <input 
                      type="text" 
                      required
                      maxLength="4"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lli-teal focus:outline-none transition-colors"
                      placeholder="123"
                    />
                  </div>
                </div>

                {/* Billing Address */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Billing Address *
                  </label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lli-teal focus:outline-none transition-colors mb-3"
                    placeholder="Street Address"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lli-teal focus:outline-none transition-colors"
                      placeholder="City"
                    />
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lli-teal focus:outline-none transition-colors"
                      placeholder="State"
                    />
                  </div>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lli-teal focus:outline-none transition-colors mt-3"
                    placeholder="ZIP Code"
                  />
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <input 
                    type="checkbox" 
                    required
                    className="mt-1 w-5 h-5 text-lli-teal border-2 border-gray-300 rounded focus:ring-lli-teal"
                  />
                  <label className="text-sm text-gray-700">
                    I agree to the terms and conditions and authorize LLI Consulting Group LLC to charge my payment method for the amount shown above. I understand that payment is required before assessment access is granted.
                  </label>
                </div>
              </form>
            </div>

            {/* Security Notice */}
            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
              <div className="flex items-center">
                <i className="fas fa-shield-alt text-green-600 text-xl mr-3"></i>
                <div>
                  <p className="text-sm font-semibold text-green-900">Secure Payment Processing</p>
                  <p className="text-xs text-green-700">Your payment information is encrypted and securely processed.</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onclick="closePaymentModal()" 
                className="flex-1 bg-gray-200 text-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-300 transition-all duration-300"
              >
                Cancel
              </button>
              <button 
                onclick="processPayment()" 
                className="flex-1 bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <i className="fas fa-lock mr-2"></i>
                Complete Payment
              </button>
            </div>

            <p className="text-center text-sm text-gray-500 mt-4">
              After payment, you'll receive access credentials and can schedule your discovery call.
            </p>
          </div>
        </div>
      </div>

      {/* Discovery Call Modal */}
      <div id="discoveryModal" className="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-8 md:p-12">
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button 
                onclick="closeDiscoveryModal()" 
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <i className="fas fa-times text-2xl"></i>
              </button>
            </div>

            {/* Modal Content */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-lli-teal to-lli-teal-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-calendar-alt text-white text-3xl"></i>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Start With a Discovery Conversation
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-xl mx-auto">
                Organizations interested in the <strong>Organizational Culture Diagnostic</strong>, <strong>Comprehensive Culture Assessment</strong>, or <strong>Anonymous Staff Culture Assessment</strong> are invited to schedule a discovery conversation to discuss goals, organizational context, and the most appropriate level of engagement.
              </p>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-lli-teal/5 to-white rounded-xl p-6 mb-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">
                <i className="fas fa-check-circle text-lli-teal mr-2"></i>
                What We'll Discuss:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-circle text-lli-teal text-xs mt-2 mr-3"></i>
                  <span className="text-gray-700">Your organizational goals and culture challenges</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-circle text-lli-teal text-xs mt-2 mr-3"></i>
                  <span className="text-gray-700">Current organizational context and readiness</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-circle text-lli-teal text-xs mt-2 mr-3"></i>
                  <span className="text-gray-700">Which assessment tier best fits your needs</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-circle text-lli-teal text-xs mt-2 mr-3"></i>
                  <span className="text-gray-700">Timeline, pricing, and next steps</span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <a 
                href="https://www.LLIConsulting.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white px-10 py-5 rounded-xl font-bold text-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <i className="fas fa-calendar-check mr-3"></i>
                Schedule a Discovery Call
              </a>
              <p className="mt-4 text-gray-600 text-sm">
                No obligation · 30-minute conversation · Complimentary
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal JavaScript */}
      <script dangerouslySetInnerHTML={{__html: `
        // Tier data
        const tierData = {
          tier2: {
            name: 'Organizational Culture Diagnostic',
            price: '$2,500',
            priceValue: 2500,
            description: 'A structured internal assessment designed to identify patterns affecting workplace culture, communication, and leadership dynamics.'
          },
          tier3: {
            name: 'Comprehensive Organizational Culture Assessment',
            price: '$12,500',
            priceValue: 12500,
            description: 'A full organizational analysis designed to support long-term culture and leadership transformation.'
          },
          tier4: {
            name: 'Anonymous Staff Culture Assessment',
            price: '$22,500',
            priceValue: 22500,
            description: 'This assessment allows staff members to participate independently and anonymously without leadership oversight.'
          }
        };

        let currentTier = null;

        // Payment Modal Functions
        function openPaymentModal(tier) {
          currentTier = tier;
          const data = tierData[tier];
          
          document.getElementById('tierName').textContent = data.name;
          document.getElementById('tierPrice').textContent = data.price;
          document.getElementById('tierDescription').textContent = data.description;
          
          document.getElementById('paymentModal').classList.remove('hidden');
          document.body.style.overflow = 'hidden';
        }

        function closePaymentModal() {
          document.getElementById('paymentModal').classList.add('hidden');
          document.body.style.overflow = 'auto';
        }

        function processPayment() {
          const form = document.getElementById('paymentForm');
          if (!form.checkValidity()) {
            form.reportValidity();
            return;
          }

          // Simulate payment processing
          const button = event.target;
          const originalText = button.innerHTML;
          button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Processing...';
          button.disabled = true;

          setTimeout(() => {
            closePaymentModal();
            
            // Show success message
            alert('Payment successful! You now have access to ' + tierData[currentTier].name + '. You can now schedule your discovery call.');
            
            // Open discovery modal
            openDiscoveryModal();
            
            button.innerHTML = originalText;
            button.disabled = false;
          }, 2000);
        }

        // Discovery Modal Functions
        function openDiscoveryModal() {
          document.getElementById('discoveryModal').classList.remove('hidden');
          document.body.style.overflow = 'hidden';
        }

        function closeDiscoveryModal() {
          document.getElementById('discoveryModal').classList.add('hidden');
          document.body.style.overflow = 'auto';
        }

        // Close modals when clicking outside
        document.getElementById('paymentModal')?.addEventListener('click', function(e) {
          if (e.target === this) {
            closePaymentModal();
          }
        });

        document.getElementById('discoveryModal')?.addEventListener('click', function(e) {
          if (e.target === this) {
            closeDiscoveryModal();
          }
        });

        // Close modals on Escape key
        document.addEventListener('keydown', function(e) {
          if (e.key === 'Escape') {
            closePaymentModal();
            closeDiscoveryModal();
          }
        });
      `}} />
    </div>
  )
}
