// Subscription Modal Component - 3 Tier System
export const SubscriptionModal = () => {
  return (
    <div id="subscription-modal" className="hidden fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-3xl font-bold">Choose Your Plan</h3>
            <button onclick="closeSubscriptionModal()" className="text-white hover:text-gray-200 transition-colors">
              <i className="fas fa-times text-2xl"></i>
            </button>
          </div>
          <p className="text-teal-100">Select the perfect plan for your professional development journey</p>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Limit Message */}
          <div className="bg-orange-50 border-l-4 border-lli-orange p-4 mb-8 rounded-r-lg">
            <div className="flex items-start">
              <i className="fas fa-lock text-lli-orange text-2xl mr-3 mt-1"></i>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">You've reached your free resource limit</h4>
                <p className="text-gray-700">Guest users can view 2 resources per category (8 total). Upgrade to access our complete library.</p>
              </div>
            </div>
          </div>

          {/* 3-Tier Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            
            {/* FREE TIER */}
            <div className="bg-white border-2 border-gray-300 rounded-xl p-6 hover:shadow-lg transition-all duration-200">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Explorer</h4>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  FREE
                </div>
                <p className="text-sm text-gray-600">Perfect for exploring</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-sm">
                  <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>2 resources per category (8 total)</span>
                </li>
                <li className="flex items-start text-sm">
                  <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>Browse all resource titles</span>
                </li>
                <li className="flex items-start text-sm">
                  <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>Access to blog posts</span>
                </li>
                <li className="flex items-start text-sm">
                  <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>Register for webinars</span>
                </li>
                <li className="flex items-start text-sm text-gray-400">
                  <i className="fas fa-times text-gray-300 mr-2 mt-1"></i>
                  <span>No case studies</span>
                </li>
                <li className="flex items-start text-sm text-gray-400">
                  <i className="fas fa-times text-gray-300 mr-2 mt-1"></i>
                  <span>No assessment tools</span>
                </li>
              </ul>

              <button 
                onclick="closeSubscriptionModal()"
                className="w-full bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Current Plan
              </button>
            </div>

            {/* PROFESSIONAL TIER - HIGHLIGHTED */}
            <div className="bg-gradient-to-br from-lli-teal/10 to-white border-2 border-lli-teal rounded-xl p-6 relative hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-lli-orange text-white text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </span>
              </div>
              
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Professional</h4>
                <div className="text-4xl font-bold text-lli-teal mb-2">
                  $79<span className="text-lg text-gray-600">/mo</span>
                </div>
                <p className="text-sm text-gray-600">Individual professionals</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-sm">
                  <i className="fas fa-check text-lli-teal mr-2 mt-1"></i>
                  <span className="font-semibold">Unlimited access to all 46 resources</span>
                </li>
                <li className="flex items-start text-sm">
                  <i className="fas fa-check text-lli-teal mr-2 mt-1"></i>
                  <span>Full access to case studies</span>
                </li>
                <li className="flex items-start text-sm">
                  <i className="fas fa-check text-lli-teal mr-2 mt-1"></i>
                  <span>Downloadable templates & toolkits</span>
                </li>
                <li className="flex items-start text-sm">
                  <i className="fas fa-check text-lli-teal mr-2 mt-1"></i>
                  <span>Webinar recordings library</span>
                </li>
                <li className="flex items-start text-sm">
                  <i className="fas fa-check text-lli-teal mr-2 mt-1"></i>
                  <span>Self-assessment tools</span>
                </li>
                <li className="flex items-start text-sm">
                  <i className="fas fa-check text-lli-teal mr-2 mt-1"></i>
                  <span>Email support (48-hour response)</span>
                </li>
              </ul>

              <button 
                onclick="selectSubscriptionTier('professional')"
                className="w-full bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white font-bold py-3 px-6 rounded-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Get Started
              </button>
            </div>

            {/* ENTERPRISE TIER */}
            <div className="bg-white border-2 border-lli-orange rounded-xl p-6 hover:shadow-lg transition-all duration-200">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h4>
                <div className="text-4xl font-bold text-lli-orange mb-2">
                  $179<span className="text-lg text-gray-600">/mo</span>
                </div>
                <p className="text-sm text-gray-600">Teams & departments</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-sm">
                  <i className="fas fa-check text-lli-orange mr-2 mt-1"></i>
                  <span className="font-semibold">Everything in Professional, plus:</span>
                </li>
                <li className="flex items-start text-sm">
                  <i className="fas fa-check text-lli-orange mr-2 mt-1"></i>
                  <span>Up to 5 team member accounts</span>
                </li>
                <li className="flex items-start text-sm">
                  <i className="fas fa-check text-lli-orange mr-2 mt-1"></i>
                  <span>1 monthly group coaching session</span>
                </li>
                <li className="flex items-start text-sm">
                  <i className="fas fa-check text-lli-orange mr-2 mt-1"></i>
                  <span>Custom team assessments</span>
                </li>
                <li className="flex items-start text-sm">
                  <i className="fas fa-check text-lli-orange mr-2 mt-1"></i>
                  <span>Priority support (24-hour)</span>
                </li>
                <li className="flex items-start text-sm">
                  <i className="fas fa-check text-lli-orange mr-2 mt-1"></i>
                  <span>Private community access</span>
                </li>
              </ul>

              <button 
                onclick="selectSubscriptionTier('enterprise')"
                className="w-full bg-gradient-to-r from-lli-orange to-lli-orange-dark text-white font-bold py-3 px-6 rounded-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Contact Sales
              </button>
            </div>
          </div>

          {/* Security Badge */}
          <div className="text-center">
            <div className="flex items-center justify-center text-sm text-gray-600 mb-2">
              <i className="fas fa-lock mr-2"></i>
              Secure payment powered by Stripe
            </div>
            <p className="text-xs text-gray-500">Cancel anytime • 7-day money-back guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
};
