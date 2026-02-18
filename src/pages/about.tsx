import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export const AboutPage = () => {
  // Image URLs
  const chiaraFounderImg = "https://page.gensparksite.com/v1/base64_upload/e6822a23cff671668f780475724b62e7"
  const teamCollaborationImg = "https://sspark.genspark.ai/cfimages?u1=LRbsh8vZi8%2FZUWGtNTYI038CGh3kjBZkpg%2FVIaBmhyH4SGd97OSgl48FLUmOYqrWUpLHCGqKj1mmDfKPsAI8vCh893Wturp2Qgi%2BFmjInL3yAw%3D%3D&u2=8bVaSjrlGjJy%2BEN8&width=2560"
  const diversityTeamImg = "https://sspark.genspark.ai/cfimages?u1=mBzrm%2FITxbifSCnl6VSi0VBL8jW7BYLARSnPGIKDFLwD%2FztAX0QY59OB%2BpFGhr3%2BB1QFUtKFUdxUJ2YiK3N1k8HIw6w9q6rfDEPoTVb9HCSRcZUqllhE5XVLSQUkJnzqsl%2BDhdoCuljW&u2=AJs5ASJIXhyWd%2FHw&width=2560"
  const workshopActionImg = "https://sspark.genspark.ai/cfimages?u1=6eR48FOnWy%2FbYJjtnEJVBOpcv11YMrnxH7d4zW99a6gLlLEf2Ah2uKJO%2FSXoOcR9aaTOVuvWP9khJsGH8TUnz8%2F7KEw6qQXhGqGEXs%2FsCqj%2F%2FqkRJpZPq4DCDa3c%2FmRgPm3hUfv%2BLGMGyPJTYdxuYkroGpm58g%3D%3D&u2=mH9PYfmWbET2TG9z&width=2560"

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
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-lli-orange to-lli-teal">LLI Consulting Group™</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              LLI Consulting Group™ is a principal-led advisory practice supporting foundations, public agencies, and mission-driven organizations navigating complex leadership and organizational work.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-lli-teal">Story</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded by Chiara Smith, MHR, LLI Consulting Group™ was built on a simple premise: responsible leadership requires disciplined listening, careful learning, and intentional implementation.
                </p>
                <p>
                  In high-accountability environments, decisions must balance urgency, capacity, and public trust. This practice exists to support that balance.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
                <img 
                  src={teamCollaborationImg} 
                  alt="LLI Consulting Group Team Collaboration" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lli-black/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Founder Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About <span className="text-lli-orange">Chiara Smith, MHR</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Chiara Smith, MHR</h3>
              <p className="text-xl text-lli-teal font-semibold mb-6">Founder and Principal of LLI Consulting Group™</p>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Chiara Smith, MHR is the Founder and Principal of LLI Consulting Group™.
                </p>
                <p>
                  Her work is informed by professional experience across philanthropy, government, and nonprofit sectors, along with lived experience in community-centered leadership environments.
                </p>
                <p>
                  She supports leaders navigating strategic inflection points, alignment challenges, and implementation uncertainty.
                </p>
                <p>
                  Chiara is known for structured facilitation, direct inquiry, and practical planning that translates complexity into clear next steps.
                </p>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="relative">
                <img 
                  src={chiaraFounderImg} 
                  alt="Chiara Smith - Founder of LLI Consulting Group" 
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-lli-teal">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every engagement and shape our impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-gradient-to-br from-lli-orange/5 to-white border-2 border-lli-orange/20 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-lli-orange text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-heart text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Courage</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                We believe in having difficult conversations and challenging the status quo. Real change requires bravery—from both leaders and consultants.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-gradient-to-br from-lli-teal/5 to-white border-2 border-lli-teal/20 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-lli-teal text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-lightbulb text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Clarity</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                We cut through buzzwords and jargon to provide direct, actionable guidance. You'll always know exactly what we mean and what to do next.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-gradient-to-br from-lli-orange/5 to-white border-2 border-lli-orange/20 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-lli-orange text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-handshake text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Commitment</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                We're in it for the long haul. Sustainable change takes time, and we partner with you through every phase of your transformation journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Expect - Trust/Credibility Strip */}
      <section className="py-20 bg-gradient-to-br from-lli-black via-gray-800 to-lli-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              What You Can <span className="text-lli-orange">Expect</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="bg-lli-teal w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-user-tie text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Principal-led, boutique engagement</h3>
              <p className="text-gray-300 text-center leading-relaxed">
                Direct access to experienced leadership, not a team of junior consultants
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="bg-lli-orange w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-users text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Structured facilitation designed for high-accountability environments</h3>
              <p className="text-gray-300 text-center leading-relaxed">
                Rigorous process that respects the complexity of your work
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="bg-lli-teal w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-tasks text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Practical next steps aligned with capacity and context</h3>
              <p className="text-gray-300 text-center leading-relaxed">
                Actionable plans that work within your constraints, not idealized blueprints
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-300 italic">
              No inflated metrics. No guarantees. Just disciplined advisory work.
            </p>
          </div>
        </div>
      </section>

      {/* Education & Credentials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Education & <span className="text-lli-orange">Credentials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Backed by advanced education and professional certifications in leadership development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-lli-teal w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-graduation-cap text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Master of Human Relations</h3>
                    <p className="text-gray-600">Advanced graduate degree in organizational behavior and human resources</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-lli-orange w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-certificate text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Certificate in Diversity and Inclusion</h3>
                    <p className="text-gray-600">Cornell University - specialized training in DEI strategy</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-lli-teal w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-user-tie text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Coaching Certification</h3>
                    <p className="text-gray-600">Executive coaching credentials for leadership development</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://sspark.genspark.ai/cfimages?u1=1rCfzaoAPmlC0sPFWcGPOIHKNkEpjeBERnuSQiiheILt%2FOgnuHbq5yLwJ3eDMecLLRnwGFDTdrd%2BftslU7XvzA0HEftOWrEwEsHbENpPJmkoKkoJuqXGMWad%2FRbXiiSqVZWFP0nx1kGasQ%3D%3D&u2=i3fc6naoI6WxvS7o&width=2560" 
                  alt="Professional office training session - leadership development" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's have a conversation about where you are and where you want to go. No pressure, just real talk about real change.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/services#assessment-modal" 
              className="inline-block bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Take the 3-Minute Culture Check
            </a>
            <a 
              href="/services#fit-check-modal" 
              className="inline-block bg-gradient-to-r from-lli-orange to-lli-orange-dark text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Book a Strategy Call
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
