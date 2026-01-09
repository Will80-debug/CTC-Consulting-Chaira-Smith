import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export const CheckoutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-lli-black via-gray-800 to-lli-black py-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-lli-orange to-lli-teal animate-pulse"></div>
        </div>
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lli-orange to-lli-teal">Secure Checkout</span>
            </h1>
            <p className="text-lg text-gray-300">Complete your subscription to unlock full access</p>
          </div>
        </div>
      </section>

      {/* Checkout Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Order Summary */}
            <div className="bg-gradient-to-br from-lli-teal/10 to-white border-2 border-lli-teal rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-gray-900">Professional Plan</h3>
                    <p className="text-sm text-gray-600">Monthly subscription</p>
                  </div>
                  <div className="text-2xl font-bold text-lli-teal">$79.00</div>
                </div>
                
                <div className="bg-white rounded-lg p-4 space-y-3">
                  <div className="flex items-center text-sm">
                    <i className="fas fa-check text-lli-teal mr-2"></i>
                    <span>Unlimited access to all 46 resources</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <i className="fas fa-check text-lli-teal mr-2"></i>
                    <span>Full case studies library</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <i className="fas fa-check text-lli-teal mr-2"></i>
                    <span>Webinar recordings</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <i className="fas fa-check text-lli-teal mr-2"></i>
                    <span>Self-assessment tools</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <i className="fas fa-check text-lli-teal mr-2"></i>
                    <span>Priority email support</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">$79.00</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">7-day free trial</span>
                  <span className="font-semibold text-green-600">-$79.00</span>
                </div>
                <div className="flex justify-between text-lg font-bold mt-4 pt-4 border-t border-gray-200">
                  <span>Due Today</span>
                  <span className="text-lli-teal">$0.00</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">You'll be charged $79.00 on {new Date(Date.now() + 7*24*60*60*1000).toLocaleDateString()}</p>
              </div>

              <div className="bg-orange-50 border-l-4 border-lli-orange p-4 rounded-r-lg">
                <div className="flex items-start">
                  <i className="fas fa-info-circle text-lli-orange mr-3 mt-1"></i>
                  <div className="text-sm">
                    <p className="font-semibold text-gray-900 mb-1">7-Day Free Trial</p>
                    <p className="text-gray-700">Try risk-free! Cancel anytime during your trial and you won't be charged.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Form */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Information</h2>
              
              <div id="stripe-checkout-container" className="mb-6">
                {/* Stripe Elements will be mounted here */}
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <i className="fas fa-credit-card text-4xl text-gray-400 mb-4"></i>
                  <p className="text-gray-600 mb-4">Stripe Payment Form</p>
                  <p className="text-sm text-gray-500 mb-6">In production, this will be replaced with a secure Stripe Elements payment form</p>
                  
                  {/* Demo Button */}
                  <button 
                    onclick="demoCheckout()"
                    className="bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white font-bold py-3 px-8 rounded-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                  >
                    <i className="fas fa-lock mr-2"></i>
                    Complete Demo Checkout
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-sm text-gray-600">
                  <i className="fas fa-shield-alt text-lli-teal mr-2"></i>
                  <span>Your payment information is secure and encrypted</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <i className="fas fa-redo text-lli-teal mr-2"></i>
                  <span>Cancel anytime, no questions asked</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <i className="fas fa-headset text-lli-teal mr-2"></i>
                  <span>24/7 customer support available</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  By completing this purchase, you agree to our 
                  <a href="/terms" className="text-lli-teal hover:underline ml-1">Terms of Service</a> and 
                  <a href="/privacy" className="text-lli-teal hover:underline ml-1">Privacy Policy</a>
                </p>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-600 mb-4">Trusted by 500+ leaders worldwide</p>
            <div className="flex items-center justify-center space-x-8 text-gray-400">
              <i className="fab fa-stripe text-4xl"></i>
              <i className="fas fa-lock text-3xl"></i>
              <i className="fab fa-cc-visa text-4xl"></i>
              <i className="fab fa-cc-mastercard text-4xl"></i>
              <i className="fab fa-cc-amex text-4xl"></i>
              <i className="fab fa-paypal text-4xl"></i>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Demo Checkout Script */}
      <script dangerouslySetInnerHTML={{__html: `
        function demoCheckout() {
          // Show loading state
          const button = event.target;
          const originalText = button.innerHTML;
          button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Processing...';
          button.disabled = true;
          
          // Simulate payment processing
          setTimeout(() => {
            // Activate Professional subscription
            localStorage.setItem('lli_subscription_tier', 'professional');
            
            // Show success and redirect
            alert('✅ Payment successful!\\n\\nYour Professional subscription is now active.\\n\\nRedirecting to resources...');
            window.location.href = '/resources';
          }, 2000);
        }
      `}} />
    </div>
  );
};
