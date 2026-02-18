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
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-lli-orange to-lli-teal">LLI Consulting Group LLC™</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              LLI Consulting Group LLC™ is a principal-led advisory practice supporting foundations, public agencies, and mission-driven organizations navigating complex leadership and organizational work.
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
                  Founded by Chiara Smith, MHR, LLI Consulting Group LLC™ was built on a simple premise: responsible leadership requires disciplined listening, careful learning, and intentional implementation.
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
                  alt="LLI Consulting Group LLC Team Collaboration" 
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
              <p className="text-xl text-lli-teal font-semibold mb-6">Founder and Principal of LLI Consulting Group LLC™</p>
              
              <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
                <p>
                  Chiara Smith, MHR is the Founder and Principal of LLI Consulting Group LLC™.
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

              {/* Education & Credentials */}
              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Education & Credentials</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-lli-teal/10 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-base text-gray-700">Master of Human Relations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-lli-orange/10 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-base text-gray-700">Certificate in Diversity and Inclusion, Cornell University</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-lli-teal/10 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-base text-gray-700">Professional Coaching Certification</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="relative">
                <img 
                  src={chiaraFounderImg} 
                  alt="Chiara Smith - Founder of LLI Consulting Group LLC" 
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
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 - Clarity Before Action */}
            <div className="bg-gradient-to-br from-lli-teal/5 to-white border-2 border-lli-teal/20 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/static/strategy-presentation.jpg" 
                  alt="Clarity Before Action" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lli-teal/80 to-transparent"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white text-lli-teal w-16 h-16 rounded-full flex items-center justify-center shadow-xl">
                    <i className="fas fa-lightbulb text-3xl"></i>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Clarity Before Action</h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  Structured thinking reduces avoidable misalignment.
                </p>
              </div>
            </div>

            {/* Value 2 - Courage in Conversation */}
            <div className="bg-gradient-to-br from-lli-orange/5 to-white border-2 border-lli-orange/20 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/static/implementation-meeting.jpg" 
                  alt="Courage in Conversation" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lli-orange/80 to-transparent"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white text-lli-orange w-16 h-16 rounded-full flex items-center justify-center shadow-xl">
                    <i className="fas fa-comments text-3xl"></i>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Courage in Conversation</h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  Difficult discussions require facilitation, not avoidance.
                </p>
              </div>
            </div>

            {/* Value 3 - Responsible Scope */}
            <div className="bg-gradient-to-br from-lli-teal/5 to-white border-2 border-lli-teal/20 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/static/workshop-session.jpg" 
                  alt="Responsible Scope" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lli-teal/80 to-transparent"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white text-lli-teal w-16 h-16 rounded-full flex items-center justify-center shadow-xl">
                    <i className="fas fa-balance-scale text-3xl"></i>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Responsible Scope</h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  Engagements are intentionally designed to match capacity and context.
                </p>
              </div>
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

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            If your organization requires structured support rather than surface solutions, begin with a discovery conversation.
          </p>
          
          <div className="flex justify-center">
            <a 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white px-10 py-5 rounded-xl font-bold text-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <i className="fas fa-phone mr-3"></i>
              Schedule a Discovery Call
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
