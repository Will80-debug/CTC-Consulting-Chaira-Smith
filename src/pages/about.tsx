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
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-lli-orange to-lli-teal">LLI Consulting Group</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transforming organizations through equity-centered leadership coaching and culture change that moves beyond performative statements to create lasting impact.
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
                  LLI Consulting Group was founded on a simple but powerful belief: <strong>real change happens when leaders move from intent to impact.</strong>
                </p>
                <p>
                  For over 15 years, we've partnered with organizations ready to do the real work—moving beyond diversity statements and quick fixes to create sustainable, equity-centered cultures where everyone can thrive.
                </p>
                <p>
                  Our proven <strong>LLI Framework™</strong> (Listen → Learn → Implement) has transformed hundreds of organizations, coaching over 500+ leaders to create measurable culture shifts with an 85% average improvement in leadership effectiveness.
                </p>
                <p className="text-lli-orange font-semibold">
                  We believe in courage, clarity, and commitment—and we bring that to every engagement.
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
              <div className="absolute -bottom-6 -right-6 bg-lli-teal text-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm">Years of Impact</div>
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
              Meet Our <span className="text-lli-orange">Founder</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Led by vision, powered by expertise, driven by impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Chiara Smith</h3>
              <p className="text-xl text-lli-teal font-semibold mb-6">Founder & Principal Consultant</p>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Chiara Smith is a recognized expert in equity-centered leadership development and organizational culture transformation. With over 15 years of experience, she has coached hundreds of leaders across healthcare, education, technology, and nonprofit sectors.
                </p>
                <p>
                  Her approach combines deep listening, courageous learning, and bold implementation—the foundation of the <strong>LLI Framework™</strong> that has become the gold standard for sustainable culture change.
                </p>
                <p>
                  Chiara holds certifications in executive coaching, diversity & inclusion strategy, and organizational development. She's known for her direct, compassionate approach that challenges leaders to move beyond performative actions to create real, measurable impact.
                </p>
                
                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="px-4 py-2 bg-lli-teal/10 text-lli-teal rounded-full text-sm font-semibold">
                    Executive Coach
                  </span>
                  <span className="px-4 py-2 bg-lli-orange/10 text-lli-orange rounded-full text-sm font-semibold">
                    DEI Strategist
                  </span>
                  <span className="px-4 py-2 bg-lli-teal/10 text-lli-teal rounded-full text-sm font-semibold">
                    Culture Architect
                  </span>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="relative">
                <img 
                  src={chiaraFounderImg} 
                  alt="Chiara Smith - Founder of LLI Consulting Group" 
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-lli-orange to-lli-teal text-white p-4 rounded-xl shadow-xl">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm">Leaders Coached</div>
                </div>
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

      {/* Our Approach Visual */}
      <section className="py-20 bg-gradient-to-br from-lli-black via-gray-800 to-lli-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={diversityTeamImg} 
                alt="Diversity and Inclusion in Action" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">
                Why Organizations <span className="text-lli-orange">Choose LLI</span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-lli-teal w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="fas fa-check text-white text-sm"></i>
                  </div>
                  <p className="text-lg leading-relaxed">
                    <strong>Proven Results:</strong> 85% average improvement in leadership effectiveness, 98% client renewal rate
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-lli-orange w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="fas fa-check text-white text-sm"></i>
                  </div>
                  <p className="text-lg leading-relaxed">
                    <strong>Real Expertise:</strong> 15+ years of experience, 500+ leaders coached across industries
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-lli-teal w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="fas fa-check text-white text-sm"></i>
                  </div>
                  <p className="text-lg leading-relaxed">
                    <strong>Practical Framework:</strong> The LLI Framework™ provides clear, actionable steps from assessment to implementation
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-lli-orange w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="fas fa-check text-white text-sm"></i>
                  </div>
                  <p className="text-lg leading-relaxed">
                    <strong>Beyond Performative:</strong> We move past statements and training to create sustainable culture change
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
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
