import { Navigation } from '../../components/Navigation'
import { Footer } from '../../components/Footer'

export const OrganizationalDevelopmentPage = () => {
  const heroImg = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=2000&h=1200&fit=crop";
  const transformationImg = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop";
  const chiaraPhotoUrl = "https://page.gensparksite.com/v1/base64_upload/e6822a23cff671668f780475724b62e7";

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <img 
          src={heroImg} 
          alt="Organizational Transformation" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-lli-black via-lli-black/90 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <div className="inline-block bg-lli-teal text-white px-4 py-2 rounded-lg font-semibold mb-6">
                <i className="fas fa-building mr-2"></i>
                Organizational Development
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Your Culture Is Broken.<br/>
                <span className="text-lli-teal">Let's Rebuild It.</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Band-aids don't fix systemic dysfunction. We redesign the organizational systems, structures, and culture that drive lasting performance.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-lli-teal text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-lli-teal-dark transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Get Your Culture Diagnosis
                <i className="fas fa-arrow-right ml-3"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* The Problem - Agitate */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-12 border-l-8 border-lli-teal">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Recognize Your Organization?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="fas fa-exclamation-triangle text-red-500 text-2xl mt-1 mr-4"></i>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Strategy-Execution Gap</h3>
                    <p className="text-gray-700">Beautiful strategy decks. Zero implementation. Plans die in PowerPoint.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="fas fa-exclamation-triangle text-red-500 text-2xl mt-1 mr-4"></i>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Toxic Culture</h3>
                    <p className="text-gray-700">People are burned out, disengaged, or actively job hunting. Exit interviews reveal nothing you don't already know.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="fas fa-exclamation-triangle text-red-500 text-2xl mt-1 mr-4"></i>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Inefficient Systems</h3>
                    <p className="text-gray-700">Processes designed 10 years ago still run today. Work is hard not because it's complex, but because systems are broken.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="fas fa-exclamation-triangle text-red-500 text-2xl mt-1 mr-4"></i>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Change Fatigue</h3>
                    <p className="text-gray-700">Every initiative is the "new priority." Nothing sticks. People roll their eyes at "transformation."</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="fas fa-exclamation-triangle text-red-500 text-2xl mt-1 mr-4"></i>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Leadership Misalignment</h3>
                    <p className="text-gray-700">Executives say one thing, middle managers do another. Employees see the contradiction and lose trust.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="fas fa-exclamation-triangle text-red-500 text-2xl mt-1 mr-4"></i>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">DEI Theater</h3>
                    <p className="text-gray-700">Diversity statements on the website. Homogeneous leadership team. Equity initiatives that change nothing.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8 border-l-4 border-red-500">
              <p className="text-xl font-bold text-gray-900 mb-3">
                The uncomfortable truth:
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                <strong>Your organization's problems are predictable, systemic, and fixable.</strong> But not with more surveys. Not with another consultant who recommends what you already know. You need someone who will redesign the systems that create dysfunction—and then help you implement the change.
              </p>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Organizational Transformation Actually Looks Like
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't do surface-level fixes. We redesign the DNA of your organization—systems, structures, and culture.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-lli-teal to-lli-teal-dark text-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">
                <i className="fas fa-microscope"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Deep Diagnosis</h3>
              <p className="text-lg leading-relaxed">
                We uncover the invisible patterns, unspoken norms, and systemic barriers that keep your organization stuck. Data + observation + listening = truth.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-lli-orange to-lli-orange-dark text-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">
                <i className="fas fa-cogs"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Systems Redesign</h3>
              <p className="text-lg leading-relaxed">
                We don't just change minds—we change systems. Processes, structures, policies, and practices that embed new behaviors into daily operations.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-lli-teal to-lli-teal-dark text-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">
                <i className="fas fa-rocket"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Sustainable Implementation</h3>
              <p className="text-lg leading-relaxed">
                Change management isn't a phase—it's the whole game. We build capacity, coalitions, and accountability that outlast our engagement.
              </p>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-20 bg-white rounded-2xl shadow-xl p-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            The LLI Organizational Development Framework
          </h2>
          
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-lli-orange text-white px-6 py-3 rounded-lg font-bold text-xl mb-4">
                  Phase 1: Listen Deeply
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Organizational Assessment</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  We conduct comprehensive organizational diagnosis: culture surveys, focus groups, process mapping, leadership interviews, and data analysis.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check text-lli-teal mt-1 mr-3"></i>
                    <span>Employee engagement & culture assessment (quantitative + qualitative)</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-lli-teal mt-1 mr-3"></i>
                    <span>Leadership alignment audit</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-lli-teal mt-1 mr-3"></i>
                    <span>Process efficiency analysis</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-lli-teal mt-1 mr-3"></i>
                    <span>DEI landscape review</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-teal-50 rounded-xl p-8 border-l-4 border-lli-orange">
                <p className="text-xl font-bold text-gray-900 mb-3">Deliverable:</p>
                <p className="text-gray-800">Comprehensive diagnostic report with prioritized recommendations, root cause analysis, and 12-month transformation roadmap.</p>
              </div>
            </div>
            
            <div className="border-t-2 border-gray-200 pt-12"></div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-8 border-l-4 border-lli-teal">
                <p className="text-xl font-bold text-gray-900 mb-3">Deliverable:</p>
                <p className="text-gray-800">Redesigned systems, updated policies, new processes, equity-centered practices, and leadership capability-building plan.</p>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block bg-lli-teal text-white px-6 py-3 rounded-lg font-bold text-xl mb-4">
                  Phase 2: Learn Courageously
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Strategic Design & Co-Creation</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  We don't hand you a plan and walk away. We co-create solutions with your team—building ownership and capability in the process.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check text-lli-orange mt-1 mr-3"></i>
                    <span>Leadership workshops to build shared vision</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-lli-orange mt-1 mr-3"></i>
                    <span>Process redesign sessions with cross-functional teams</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-lli-orange mt-1 mr-3"></i>
                    <span>DEI strategy development with employee input</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-lli-orange mt-1 mr-3"></i>
                    <span>Change coalition formation</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t-2 border-gray-200 pt-12"></div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-lli-orange text-white px-6 py-3 rounded-lg font-bold text-xl mb-4">
                  Phase 3: Implement Systemically
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Guided Implementation & Sustainability</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  This is where most consultants disappear. We stay. We guide the rollout, troubleshoot resistance, and build the capability for sustained change.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check text-lli-teal mt-1 mr-3"></i>
                    <span>Phased rollout support (pilots → full deployment)</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-lli-teal mt-1 mr-3"></i>
                    <span>Change management consulting & communication support</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-lli-teal mt-1 mr-3"></i>
                    <span>Leadership coaching for executives driving change</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-lli-teal mt-1 mr-3"></i>
                    <span>Measurement & accountability dashboards</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-teal-50 rounded-xl p-8 border-l-4 border-lli-orange">
                <p className="text-xl font-bold text-gray-900 mb-3">Deliverable:</p>
                <p className="text-gray-800">Fully implemented transformation with internal capacity to sustain momentum, quarterly progress reports, and 24-month sustainability plan.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transformation Isn't Theoretical. It's Measurable.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 border-l-8 border-green-500 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-5xl font-bold text-green-600 mr-4">54%</div>
                <div>
                  <p className="text-xl font-bold text-gray-900">Engagement Increase</p>
                  <p className="text-gray-700">Healthcare system (2,500 employees)</p>
                </div>
              </div>
              <p className="text-gray-800 leading-relaxed">
                Transformed toxic culture through leadership realignment, process redesign, and equity-centered policies. Turnover dropped 42%.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 border-l-8 border-blue-500 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-5xl font-bold text-blue-600 mr-4">$2.8M</div>
                <div>
                  <p className="text-xl font-bold text-gray-900">Cost Savings Year 1</p>
                  <p className="text-gray-700">Technology company (800 employees)</p>
                </div>
              </div>
              <p className="text-gray-800 leading-relaxed">
                Eliminated redundant processes, restructured teams for efficiency, and reduced contractor spend through better internal capability.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-orange-50 rounded-2xl p-8 border-l-8 border-purple-500 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-5xl font-bold text-purple-600 mr-4">89%</div>
                <div>
                  <p className="text-xl font-bold text-gray-900">Leadership Alignment</p>
                  <p className="text-gray-700">Education nonprofit (150 employees)</p>
                </div>
              </div>
              <p className="text-gray-800 leading-relaxed">
                Executive team went from siloed and dysfunctional to aligned and collaborative. Strategy execution velocity tripled.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border-l-8 border-lli-orange shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-5xl font-bold text-lli-orange mr-4">3x</div>
                <div>
                  <p className="text-xl font-bold text-gray-900">DEI Representation</p>
                  <p className="text-gray-700">Financial services firm (1,200 employees)</p>
                </div>
              </div>
              <p className="text-gray-800 leading-relaxed">
                Tripled BIPOC representation in leadership through systems redesign: hiring, promotion, sponsorship, and retention practices.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <img 
              src={transformationImg} 
              alt="Organizational Success" 
              className="rounded-2xl shadow-2xl mx-auto max-w-4xl"
            />
          </div>
        </section>

        {/* Social Proof */}
        <section className="mb-20 bg-gradient-to-r from-lli-black to-gray-800 rounded-2xl p-12 text-white">
          <div className="mb-12">
            <div className="flex items-start space-x-6">
              <img 
                src={chiaraPhotoUrl} 
                alt="Client Testimonial" 
                className="w-24 h-24 rounded-full border-4 border-lli-teal flex-shrink-0"
              />
              <div>
                <p className="text-lg leading-relaxed mb-4 italic">
                  "We'd hired consultants before. They gave us a 200-page report and left. Chiara stayed. She helped us implement every recommendation—and when things got hard, she didn't run. Two years later, we're a completely different organization. Our board said it's the best investment we've ever made."
                </p>
                <p className="font-bold text-lg">— CEO, Mid-Size Healthcare Organization</p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex items-start space-x-6">
              <img 
                src={chiaraPhotoUrl} 
                alt="Client Testimonial" 
                className="w-24 h-24 rounded-full border-4 border-lli-orange flex-shrink-0"
              />
              <div>
                <p className="text-lg leading-relaxed mb-4 italic">
                  "What I appreciated most was the honesty. Chiara told us what we needed to hear, not what we wanted to hear. She challenged our executives, redesigned broken systems, and didn't sugarcoat the work required. It was uncomfortable—and transformational."
                </p>
                <p className="font-bold text-lg">— CHRO, National Nonprofit</p>
              </div>
            </div>
          </div>
        </section>

        {/* Investment */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-lli-teal to-lli-teal-dark text-white rounded-2xl p-12 shadow-2xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                The Investment
              </h2>
              <p className="text-2xl mb-8 leading-relaxed">
                Organizational Development engagements start at <strong>$50,000</strong> for a 12-month partnership.
              </p>
              <p className="text-lg mb-8 leading-relaxed opacity-90">
                Includes: Comprehensive assessment, strategic design, implementation support, leadership coaching, change management consulting, and progress measurement.
              </p>
              
              <div className="bg-white/10 backdrop-blur rounded-xl p-8 mb-8">
                <p className="text-xl font-bold mb-4">This isn't an expense. It's leverage.</p>
                <p className="text-lg leading-relaxed">
                  Organizations that invest in systemic transformation see 3-5x ROI within 24 months through productivity gains, turnover reduction, and strategic execution improvement.
                </p>
              </div>
              
              <a 
                href="/contact" 
                className="inline-block bg-white text-lli-teal px-12 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Get Your Culture Diagnosis
                <i className="fas fa-arrow-right ml-3"></i>
              </a>
              
              <p className="mt-6 text-sm opacity-80">
                Custom pricing for organizations 500+ employees. Accepting 3 new engagements per quarter.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20 bg-white rounded-2xl shadow-xl p-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            What Leaders Ask Us
          </h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <i className="fas fa-question-circle text-lli-teal mr-3"></i>
                How long does organizational transformation take?
              </h3>
              <p className="text-gray-700 ml-10 leading-relaxed">
                Real transformation takes 12-24 months. Quick fixes don't work. We diagnose in months 1-2, design in months 3-6, and implement over months 7-24. Early wins emerge within 6 months.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <i className="fas fa-question-circle text-lli-orange mr-3"></i>
                What size organizations do you work with?
              </h3>
              <p className="text-gray-700 ml-10 leading-relaxed">
                50-2,500 employees is our sweet spot. Smaller organizations get intensive, hands-on support. Larger organizations require more complex change architecture. We scale our approach to fit.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <i className="fas fa-question-circle text-lli-teal mr-3"></i>
                What if our leadership team isn't aligned?
              </h3>
              <p className="text-gray-700 ml-10 leading-relaxed">
                That's exactly why you need us. Misaligned leadership is the #1 barrier to organizational change. We start by building executive alignment before cascading transformation.
              </p>
            </div>
            
            <div className="pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <i className="fas fa-question-circle text-lli-orange mr-3"></i>
                Do you work with remote or hybrid organizations?
              </h3>
              <p className="text-gray-700 ml-10 leading-relaxed">
                Yes. Organizational culture transcends physical space. We've successfully transformed fully remote, hybrid, and traditional in-office organizations.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-lli-orange to-lli-orange-dark text-white rounded-2xl p-16 shadow-2xl">
            <h2 className="text-5xl font-bold mb-6">
              Your Organization Deserves Better
            </h2>
            <p className="text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Stop managing symptoms. Fix the system.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-lli-orange px-12 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Start Your Transformation
              <i className="fas fa-arrow-right ml-3"></i>
            </a>
            <p className="mt-6 text-lg">
              Free 45-minute consultation. No sales pitch. Just clarity.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
