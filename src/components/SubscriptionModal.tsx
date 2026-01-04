// Subscription Modal Component
export const SubscriptionModal = () => {
  return (
    <div id="subscription-modal" className="hidden fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-3xl font-bold">Unlock Full Access</h3>
            <button onclick="closeSubscriptionModal()" className="text-white hover:text-gray-200 transition-colors">
              <i className="fas fa-times text-2xl"></i>
            </button>
          </div>
          <p className="text-teal-100">Get unlimited access to all premium resources</p>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Limit Message */}
          <div className="bg-orange-50 border-l-4 border-lli-orange p-4 mb-6 rounded-r-lg">
            <div className="flex items-start">
              <i className="fas fa-lock text-lli-orange text-2xl mr-3 mt-1"></i>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">You've reached your free resource limit</h4>
                <p className="text-gray-700">Guest users can view 2 resources per category. Subscribe now to access our complete library of leadership resources.</p>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-gradient-to-br from-lli-teal/10 to-white border-2 border-lli-teal rounded-xl p-6 mb-6">
            <div className="text-center mb-4">
              <div className="text-5xl font-bold text-lli-teal mb-2">
                $79.00<span className="text-xl text-gray-600">/month</span>
              </div>
              <p className="text-gray-600">Cancel anytime • No commitment</p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-700">
                <i className="fas fa-check-circle text-lli-teal text-xl mr-3"></i>
                <span>Unlimited access to all resources</span>
              </div>
              <div className="flex items-center text-gray-700">
                <i className="fas fa-check-circle text-lli-teal text-xl mr-3"></i>
                <span>46+ Leadership & DEI resources</span>
              </div>
              <div className="flex items-center text-gray-700">
                <i className="fas fa-check-circle text-lli-teal text-xl mr-3"></i>
                <span>New resources added monthly</span>
              </div>
              <div className="flex items-center text-gray-700">
                <i className="fas fa-check-circle text-lli-teal text-xl mr-3"></i>
                <span>Downloadable PDFs & videos</span>
              </div>
              <div className="flex items-center text-gray-700">
                <i className="fas fa-check-circle text-lli-teal text-xl mr-3"></i>
                <span>Exclusive webinar recordings</span>
              </div>
            </div>
          </div>

          {/* Payment Options */}
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900 text-lg mb-4">Choose Payment Method</h4>

            {/* Credit Card */}
            <button 
              onclick="selectPaymentMethod('card')"
              className="w-full bg-white border-2 border-gray-300 hover:border-lli-teal rounded-lg p-4 text-left transition-all duration-200 hover:shadow-lg group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <i className="fas fa-credit-card text-2xl text-lli-teal mr-4"></i>
                  <div>
                    <div className="font-bold text-gray-900">Credit or Debit Card</div>
                    <div className="text-sm text-gray-600">Visa, Mastercard, Amex</div>
                  </div>
                </div>
                <i className="fas fa-chevron-right text-gray-400 group-hover:text-lli-teal transition-colors"></i>
              </div>
            </button>

            {/* PayPal */}
            <button 
              onclick="selectPaymentMethod('paypal')"
              className="w-full bg-white border-2 border-gray-300 hover:border-lli-teal rounded-lg p-4 text-left transition-all duration-200 hover:shadow-lg group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <i className="fab fa-paypal text-2xl text-blue-600 mr-4"></i>
                  <div>
                    <div className="font-bold text-gray-900">PayPal</div>
                    <div className="text-sm text-gray-600">Fast & secure checkout</div>
                  </div>
                </div>
                <i className="fas fa-chevron-right text-gray-400 group-hover:text-lli-teal transition-colors"></i>
              </div>
            </button>

            {/* Apple Pay */}
            <button 
              onclick="selectPaymentMethod('apple')"
              className="w-full bg-black hover:bg-gray-800 rounded-lg p-4 text-left transition-all duration-200 hover:shadow-lg group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <i className="fab fa-apple text-2xl text-white mr-4"></i>
                  <div>
                    <div className="font-bold text-white">Apple Pay</div>
                    <div className="text-sm text-gray-300">One-tap payment</div>
                  </div>
                </div>
                <i className="fas fa-chevron-right text-gray-400 group-hover:text-white transition-colors"></i>
              </div>
            </button>
          </div>

          {/* Security Badge */}
          <div className="mt-6 text-center">
            <div className="flex items-center justify-center text-sm text-gray-600">
              <i className="fas fa-lock mr-2"></i>
              Secure payment powered by Stripe
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
