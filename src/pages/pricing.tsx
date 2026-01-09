import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export const PricingPage = () => {
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lli-orange to-lli-teal">Simple, Transparent Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Choose the perfect plan for your leadership development journey
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 3-Tier Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            
            {/* FREE TIER */}
            <div className="bg-white border-2 border-gray-300 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Explorer</h3>
                <div className="text-5xl font-bold text-gray-900 mb-4">
                  FREE
                </div>
                <p className="text-gray-600">Perfect for exploring DEI & Leadership concepts</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">2 resources per category (8 total)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">Browse all resource titles</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">Access to blog posts</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">Register for webinars</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">Basic email support</span>
                </li>
                <li className="flex items-start text-gray-400">
                  <i className="fas fa-times-circle text-gray-300 text-xl mr-3 mt-1"></i>
                  <span>No case studies access</span>
                </li>
                <li className="flex items-start text-gray-400">
                  <i className="fas fa-times-circle text-gray-300 text-xl mr-3 mt-1"></i>
                  <span>No assessment tools</span>
                </li>
              </ul>

              <a 
                href="/resources"
                className="block w-full bg-gray-200 text-gray-700 font-bold py-4 px-6 rounded-lg text-center hover:bg-gray-300 transition-colors"
              >
                Get Started Free
              </a>
            </div>

            {/* PROFESSIONAL TIER - HIGHLIGHTED */}
            <div className="bg-gradient-to-br from-lli-teal/10 to-white border-4 border-lli-teal rounded-2xl p-8 relative transform scale-105 hover:shadow-2xl transition-all duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-lli-orange to-lli-orange-dark text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                  ⭐ MOST POPULAR
                </span>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
                <div className="text-5xl font-bold text-lli-teal mb-2">
                  $79<span className="text-2xl text-gray-600">/month</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">or $758/year (save $190)</p>
                <p className="text-gray-600">For individual leaders & managers</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-lli-teal text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700 font-semibold">Everything in Free, plus:</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-lli-teal text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">Unlimited access to all 46 resources</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-lli-teal text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">Full access to case studies</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-lli-teal text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">Downloadable templates & toolkits</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-lli-teal text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">Webinar recordings library</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-lli-teal text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">Self-assessment tools</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-lli-teal text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">Email support (48-hour response)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-lli-teal text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">Quarterly virtual office hours</span>
                </li>
              </ul>

              <button 
                onclick="window.location.href='/checkout?plan=professional'"
                className="block w-full bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white font-bold py-4 px-6 rounded-lg text-center hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Start 7-Day Free Trial
              </button>
              <p className="text-center text-xs text-gray-500 mt-3">No credit card required</p>
            </div>

            {/* ENTERPRISE TIER */}
            <div className="bg-white border-2 border-lli-orange rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-5xl font-bold text-lli-orange mb-2">
                  $179<span className="text-2xl text-gray-600">/month</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">or $1,708/year (save $440)</p>
                <p className="text-gray-600">For teams & departments</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-lli-orange text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700 font-semibold">Everything in Professional, plus:</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-lli-orange text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">Up to 5 team member accounts</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-lli-orange text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">1 monthly group coaching session (60 min)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-lli-orange text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">Custom team assessments</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-lli-orange text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">Implementation guides for teams</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-lli-orange text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">Priority support (24-hour response)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-lli-orange text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">Private community access</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-lli-orange text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">Annual strategy consultation</span>
                </li>
              </ul>

              <button 
                onclick="window.location.href='/contact?plan=enterprise'"
                className="block w-full bg-gradient-to-r from-lli-orange to-lli-orange-dark text-white font-bold py-4 px-6 rounded-lg text-center hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Contact Sales
              </button>
              <p className="text-center text-xs text-gray-500 mt-3">14-day trial with demo call</p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white p-6">
              <h2 className="text-3xl font-bold text-center">Detailed Feature Comparison</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Explorer<br/><span className="font-normal text-gray-600">Free</span></th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-lli-teal">Professional<br/><span className="font-normal text-gray-600">$79/mo</span></th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-lli-orange">Enterprise<br/><span className="font-normal text-gray-600">$179/mo</span></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Resources Access</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">2 per category (8 total)</td>
                    <td className="px-6 py-4 text-center text-sm font-semibold text-lli-teal">All 46 resources</td>
                    <td className="px-6 py-4 text-center text-sm font-semibold text-lli-orange">All 46 resources</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Case Studies</td>
                    <td className="px-6 py-4 text-center"><i className="fas fa-times text-gray-300 text-xl"></i></td>
                    <td className="px-6 py-4 text-center"><i className="fas fa-check text-lli-teal text-xl"></i></td>
                    <td className="px-6 py-4 text-center"><i className="fas fa-check text-lli-orange text-xl"></i></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Webinars</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Register only</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Recorded library</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Live + Recorded</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Assessment Tools</td>
                    <td className="px-6 py-4 text-center"><i className="fas fa-times text-gray-300 text-xl"></i></td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Self-assessments</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Custom team assessments</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Support</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Basic email</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">48-hour email</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">24-hour priority</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Coaching</td>
                    <td className="px-6 py-4 text-center"><i className="fas fa-times text-gray-300 text-xl"></i></td>
                    <td className="px-6 py-4 text-center"><i className="fas fa-times text-gray-300 text-xl"></i></td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">1 monthly session</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Team Members</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">1</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">1</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Up to 5</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Community Access</td>
                    <td className="px-6 py-4 text-center"><i className="fas fa-times text-gray-300 text-xl"></i></td>
                    <td className="px-6 py-4 text-center"><i className="fas fa-times text-gray-300 text-xl"></i></td>
                    <td className="px-6 py-4 text-center"><i className="fas fa-check text-lli-orange text-xl"></i></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Downloadables</td>
                    <td className="px-6 py-4 text-center"><i className="fas fa-times text-gray-300 text-xl"></i></td>
                    <td className="px-6 py-4 text-center"><i className="fas fa-check text-lli-teal text-xl"></i></td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Yes + Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                  <i className="fas fa-question-circle text-lli-teal mr-2"></i>
                  Can I switch plans later?
                </h3>
                <p className="text-gray-600 text-sm">Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.</p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                  <i className="fas fa-question-circle text-lli-teal mr-2"></i>
                  Is there a free trial?
                </h3>
                <p className="text-gray-600 text-sm">Professional plans include a 7-day free trial. Enterprise plans include a 14-day trial with a personalized demo call.</p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                  <i className="fas fa-question-circle text-lli-teal mr-2"></i>
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-600 text-sm">We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and Apple Pay through our secure Stripe integration.</p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                  <i className="fas fa-question-circle text-lli-teal mr-2"></i>
                  Can I cancel anytime?
                </h3>
                <p className="text-gray-600 text-sm">Absolutely. You can cancel your subscription at any time. You'll continue to have access until the end of your current billing period.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};
