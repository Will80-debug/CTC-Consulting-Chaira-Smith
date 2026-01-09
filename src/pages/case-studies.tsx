import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export const CaseStudiesPage = () => {
  // Image URLs for case studies - Using Unsplash for high-quality, watermark-free images
  const hospitalSystemImg = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop"
  const schoolDistrictImg = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop"
  const techCompanyImg = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
  const nonprofitImg = "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop"
  const financialServicesImg = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"

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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lli-orange to-lli-teal">Real Results.</span> Real Impact.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              See how organizations across industries have transformed their cultures and strengthened their leadership using the LLI Framework™.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-lli-teal mb-2">500+</div>
              <div className="text-gray-600">Leaders Coached</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-lli-orange mb-2">85%</div>
              <div className="text-gray-600">Avg. Improvement</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-lli-teal mb-2">98%</div>
              <div className="text-gray-600">Client Renewal</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-lli-orange mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="text-lli-teal">Transformation Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From intent to impact: How organizations used the LLI Framework™ to achieve measurable culture change
            </p>
          </div>

          {/* Case Study 1 - Regional Hospital System */}
          <div className="mb-20">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img 
                    src={hospitalSystemImg} 
                    alt="Regional Hospital System Leadership Team" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-lli-teal text-white px-4 py-2 rounded-lg font-semibold">
                    Healthcare
                  </div>
                </div>
                
                <div className="p-8 md:p-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Regional Hospital System</h3>
                  <p className="text-lg text-gray-600 mb-6">3,500 employees · 6-month engagement</p>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-lli-orange mb-3">The Challenge</h4>
                    <p className="text-gray-700 leading-relaxed">
                      High turnover in nursing staff (32% annually), toxic culture in several departments, and declining patient satisfaction scores. Leadership lacked the tools to address systemic equity issues.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-lli-teal mb-3">LLI Intervention</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-lli-teal mr-2 mt-1"></i>
                        <span>Conducted comprehensive culture assessment across all departments</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-lli-teal mr-2 mt-1"></i>
                        <span>Executive coaching for C-suite and department heads (12 leaders)</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-lli-teal mr-2 mt-1"></i>
                        <span>2-day leadership retreat focused on equity-centered management</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-lli-teal mr-2 mt-1"></i>
                        <span>Implementation of accountability systems and quarterly check-ins</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-lli-orange/10 to-lli-teal/10 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Results</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-3xl font-bold text-lli-orange mb-1">18%</div>
                        <div className="text-sm text-gray-700">Turnover reduction in 12 months</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-lli-teal mb-1">92%</div>
                        <div className="text-sm text-gray-700">Leadership confidence increase</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-lli-orange mb-1">23%</div>
                        <div className="text-sm text-gray-700">Patient satisfaction improvement</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-lli-teal mb-1">100%</div>
                        <div className="text-sm text-gray-700">Leaders renewed engagement</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 2 - Urban School District */}
          <div className="mb-20">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="order-2 md:order-1 p-8 md:p-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Urban School District</h3>
                  <p className="text-lg text-gray-600 mb-6">45 schools · 12-month engagement</p>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-lli-orange mb-3">The Challenge</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Significant achievement gaps among student populations, low teacher morale, and district leadership struggling to implement equity initiatives beyond surface-level policies.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-lli-teal mb-3">LLI Intervention</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-lli-teal mr-2 mt-1"></i>
                        <span>District-wide listening sessions with teachers, students, and families</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-lli-teal mr-2 mt-1"></i>
                        <span>Leadership coaching for superintendent and 45 principals</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-lli-teal mr-2 mt-1"></i>
                        <span>Quarterly workshops on equity-centered instruction and policy</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-lli-teal mr-2 mt-1"></i>
                        <span>Custom framework for measuring and tracking equity outcomes</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-lli-teal/10 to-lli-orange/10 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Results</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-3xl font-bold text-lli-teal mb-1">34%</div>
                        <div className="text-sm text-gray-700">Achievement gap reduction</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-lli-orange mb-1">89%</div>
                        <div className="text-sm text-gray-700">Teacher satisfaction increase</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-lli-teal mb-1">67%</div>
                        <div className="text-sm text-gray-700">More family engagement events</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-lli-orange mb-1">100%</div>
                        <div className="text-sm text-gray-700">Principals requested continued coaching</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 md:order-2 relative h-64 md:h-auto">
                  <img 
                    src={schoolDistrictImg} 
                    alt="Urban School District Diverse Team" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-lli-orange text-white px-4 py-2 rounded-lg font-semibold">
                    Education
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 3 - Mid-Size Tech Company */}
          <div className="mb-20">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img 
                    src={techCompanyImg} 
                    alt="Tech Company Team Collaboration" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-lli-teal text-white px-4 py-2 rounded-lg font-semibold">
                    Technology
                  </div>
                </div>
                
                <div className="p-8 md:p-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Mid-Size Tech Company</h3>
                  <p className="text-lg text-gray-600 mb-6">250 employees · 9-month engagement</p>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-lli-orange mb-3">The Challenge</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Rapid growth led to fragmented culture, siloed teams, and lack of inclusive hiring/promotion practices. Leadership team lacked alignment on DEI strategy.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-lli-teal mb-3">LLI Intervention</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-lli-teal mr-2 mt-1"></i>
                        <span>Executive team coaching and DEI strategy workshop</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-lli-teal mr-2 mt-1"></i>
                        <span>Manager training on inclusive team leadership (20 managers)</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-lli-teal mr-2 mt-1"></i>
                        <span>Redesign of hiring and promotion processes with equity lens</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-lli-teal mr-2 mt-1"></i>
                        <span>Monthly accountability check-ins and culture pulse surveys</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-lli-orange/10 to-lli-teal/10 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Results</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-3xl font-bold text-lli-orange mb-1">45%</div>
                        <div className="text-sm text-gray-700">Increase in diverse hires</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-lli-teal mb-1">91%</div>
                        <div className="text-sm text-gray-700">Employee engagement score</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-lli-orange mb-1">62%</div>
                        <div className="text-sm text-gray-700">More cross-team collaboration</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-lli-teal mb-1">3x</div>
                        <div className="text-sm text-gray-700">Leadership diversity increase</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Nonprofit Case Study */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48">
                <img 
                  src={nonprofitImg} 
                  alt="National Nonprofit Team" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-lli-orange text-white px-3 py-1 rounded-lg text-sm font-semibold">
                  Nonprofit
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">National Nonprofit</h3>
                <p className="text-gray-600 mb-4">150 staff · 6-month engagement</p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Struggling with board-staff tensions and unclear mission alignment. LLI facilitated strategic planning and governance coaching.
                </p>
                <div className="flex gap-4 mb-4">
                  <div>
                    <div className="text-2xl font-bold text-lli-teal">94%</div>
                    <div className="text-xs text-gray-600">Staff satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-lli-orange">100%</div>
                    <div className="text-xs text-gray-600">Board alignment</div>
                  </div>
                </div>
                <a href="#" className="text-lli-teal hover:text-lli-teal-dark font-semibold flex items-center">
                  Read full case study <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            {/* Financial Services Case Study */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48">
                <img 
                  src={financialServicesImg} 
                  alt="Financial Services Executive Coaching" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-lli-teal text-white px-3 py-1 rounded-lg text-sm font-semibold">
                  Financial Services
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Financial Services Firm</h3>
                <p className="text-gray-600 mb-4">800 employees · 8-month engagement</p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Male-dominated culture creating barriers for women leaders. LLI implemented mentorship program and leadership development for women.
                </p>
                <div className="flex gap-4 mb-4">
                  <div>
                    <div className="text-2xl font-bold text-lli-orange">2x</div>
                    <div className="text-xs text-gray-600">Women in leadership</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-lli-teal">88%</div>
                    <div className="text-xs text-gray-600">Retention increase</div>
                  </div>
                </div>
                <a href="#" className="text-lli-teal hover:text-lli-teal-dark font-semibold flex items-center">
                  Read full case study <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-lli-black via-gray-800 to-lli-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our <span className="text-lli-orange">Clients Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-lli-orange mb-4">
                <i className="fas fa-quote-left text-3xl"></i>
              </div>
              <p className="text-white text-lg mb-6 leading-relaxed">
                "LLI didn't just help us write a diversity statement—they helped us transform how we lead. The results speak for themselves."
              </p>
              <div className="flex items-center">
                <div>
                  <div className="font-bold text-white">Dr. Maria Rodriguez</div>
                  <div className="text-gray-300 text-sm">Superintendent, Urban School District</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-lli-teal mb-4">
                <i className="fas fa-quote-left text-3xl"></i>
              </div>
              <p className="text-white text-lg mb-6 leading-relaxed">
                "Chiara's coaching was the catalyst our leadership team needed. She pushed us beyond our comfort zone in the best way possible."
              </p>
              <div className="flex items-center">
                <div>
                  <div className="font-bold text-white">James Thompson</div>
                  <div className="text-gray-300 text-sm">CEO, Regional Hospital System</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-lli-orange mb-4">
                <i className="fas fa-quote-left text-3xl"></i>
              </div>
              <p className="text-white text-lg mb-6 leading-relaxed">
                "The LLI Framework gave us a clear path from assessment to action. We finally have the tools to create lasting change."
              </p>
              <div className="flex items-center">
                <div>
                  <div className="font-bold text-white">Sarah Chen</div>
                  <div className="text-gray-300 text-sm">CTO, Tech Company</div>
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
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Every transformation starts with a conversation. Let's talk about where you are and where you want to go.
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
