import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export const ContactPage = () => {
  const chiaraPhotoUrl = "https://page.gensparksite.com/v1/base64_upload/e6822a23cff671668f780475724b62e7"
  const officeImg = "https://sspark.genspark.ai/cfimages?u1=p3451G3ZEplqSVU1hpWslMBIRhknlX84CsLjYH3SkznuTIrlkxpyLAuCwkmtMFXbwhpEvre9YJ3e99PmcLuDRrpBMd2vgWUNT%2BvkZwb2HqDUbZe%2FfwNbySP593IfQLzHOX%2FP1WA3WLrjXpp%2FnLigzhI%2B5CHarzSTteaGCdJuAw7caVHr%2FR8IrzhY3HPD5eqAoLqHXC9oAtaaRBQ4DxSo3yzd1vrQGBSFuJKrYw%3D%3D&u2=r5lJXZBmG11V2fj%2B&width=2560"

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
              Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-lli-orange to-lli-teal">Conversation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your leadership and culture? Schedule a call or send us a message
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Option 1 - Schedule Call */}
            <div className="bg-gradient-to-br from-lli-teal/10 to-white border-2 border-lli-teal rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-lli-teal text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-calendar-check text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Schedule a Call</h3>
              <p className="text-gray-600 mb-6">
                Book a 30-minute discovery call directly on our calendar
              </p>
              <button 
                onclick="openCalendly()"
                className="bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105 w-full"
              >
                Book Now
              </button>
            </div>

            {/* Option 2 - Send Message */}
            <div className="bg-gradient-to-br from-lli-orange/10 to-white border-2 border-lli-orange rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-lli-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-envelope text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Send a Message</h3>
              <p className="text-gray-600 mb-6">
                Fill out our consultation request form and we'll respond within 24 hours
              </p>
              <button 
                onclick="scrollToForm()"
                className="bg-gradient-to-r from-lli-orange to-lli-orange-dark text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105 w-full"
              >
                Get Started
              </button>
            </div>

            {/* Option 3 - Email Direct */}
            <div className="bg-gradient-to-br from-lli-teal/10 to-white border-2 border-lli-teal rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-lli-teal text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-paper-plane text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Email Us</h3>
              <p className="text-gray-600 mb-6">
                Prefer email? Reach out directly to our team
              </p>
              <a 
                href="mailto:info@lliconsultinggroup.com"
                className="bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105 w-full inline-block"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Integration Section */}
      <section id="calendly-section" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Schedule Your <span className="text-lli-teal">Discovery Call</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose a time that works for you. We'll discuss your challenges and explore how we can help.
            </p>
          </div>

          {/* Calendly Embed */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/lliconsulting/discovery-call?hide_landing_page_details=1&hide_gdpr_banner=1"
              style="min-width:320px;height:700px;"
            ></div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              <i className="fas fa-info-circle text-lli-teal mr-2"></i>
              Can't find a time that works? <a href="#consultation-form" className="text-lli-teal hover:text-lli-teal-dark font-semibold">Fill out our consultation form</a> below.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Request Form */}
      <section id="consultation-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Request a <span className="text-lli-orange">Consultation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tell us about your organization and what you're looking to achieve. We'll get back to you within 24 hours.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 md:p-12">
            <form id="consultation-request-form" onsubmit="handleConsultationSubmit(event)">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lli-teal focus:outline-none transition-colors"
                    placeholder="John"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lli-teal focus:outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lli-teal focus:outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lli-teal focus:outline-none transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Organization */}
                <div>
                  <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 mb-2">
                    Organization <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="organization" 
                    name="organization" 
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lli-teal focus:outline-none transition-colors"
                    placeholder="Your Company Name"
                  />
                </div>

                {/* Role */}
                <div>
                  <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Role <span className="text-red-500">*</span>
                  </label>
                  <select 
                    id="role" 
                    name="role" 
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lli-teal focus:outline-none transition-colors"
                  >
                    <option value="">Select your role</option>
                    <option value="ceo">CEO/Executive Director</option>
                    <option value="hr">HR/People Leader</option>
                    <option value="dei">DEI Leader</option>
                    <option value="director">Department Director</option>
                    <option value="manager">Manager</option>
                    <option value="consultant">Consultant</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Organization Size */}
                <div>
                  <label htmlFor="orgSize" className="block text-sm font-semibold text-gray-700 mb-2">
                    Organization Size <span className="text-red-500">*</span>
                  </label>
                  <select 
                    id="orgSize" 
                    name="orgSize" 
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lli-teal focus:outline-none transition-colors"
                  >
                    <option value="">Select size</option>
                    <option value="1-50">1-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501-1000">501-1,000 employees</option>
                    <option value="1000+">1,000+ employees</option>
                  </select>
                </div>

                {/* Industry */}
                <div>
                  <label htmlFor="industry" className="block text-sm font-semibold text-gray-700 mb-2">
                    Industry <span className="text-red-500">*</span>
                  </label>
                  <select 
                    id="industry" 
                    name="industry" 
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lli-teal focus:outline-none transition-colors"
                  >
                    <option value="">Select industry</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="technology">Technology</option>
                    <option value="nonprofit">Nonprofit</option>
                    <option value="financial">Financial Services</option>
                    <option value="government">Government</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="retail">Retail</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Service Interest */}
              <div className="mb-6">
                <label htmlFor="serviceInterest" className="block text-sm font-semibold text-gray-700 mb-2">
                  What services are you interested in? <span className="text-red-500">*</span>
                </label>
                <select 
                  id="serviceInterest" 
                  name="serviceInterest" 
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lli-teal focus:outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="executive-coaching">Executive Coaching</option>
                  <option value="team-development">Team Development</option>
                  <option value="culture-assessment">Culture Assessment</option>
                  <option value="workshops">Workshops & Training</option>
                  <option value="strategic-consulting">Strategic Consulting</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Tell us about your challenges and goals <span className="text-red-500">*</span>
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={6}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lli-teal focus:outline-none transition-colors resize-none"
                  placeholder="What are the biggest challenges you're facing? What do you hope to achieve through coaching or consulting?"
                ></textarea>
                <p className="text-sm text-gray-500 mt-2">
                  <i className="fas fa-info-circle mr-1"></i>
                  The more detail you provide, the better we can prepare for our conversation.
                </p>
              </div>

              {/* Timeline */}
              <div className="mb-8">
                <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
                  When would you like to start? <span className="text-red-500">*</span>
                </label>
                <select 
                  id="timeline" 
                  name="timeline" 
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lli-teal focus:outline-none transition-colors"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">As soon as possible</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="1-3-months">1-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="exploring">Just exploring</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-lli-orange to-lli-orange-dark text-white font-bold py-4 px-12 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105 text-lg"
                >
                  <i className="fas fa-paper-plane mr-2"></i>
                  Submit Request
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  <i className="fas fa-lock mr-1"></i>
                  Your information is secure. We'll respond within 24 hours.
                </p>
              </div>
            </form>

            {/* Success Message (hidden by default) */}
            <div id="form-success" className="hidden mt-8 bg-green-50 border-2 border-green-500 rounded-lg p-6 text-center">
              <i className="fas fa-check-circle text-green-500 text-4xl mb-4"></i>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-700">
                We've received your consultation request and will get back to you within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="text-lli-teal">Other Ways</span> to Connect
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-lli-teal text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:contact@lliconsulting.com" className="text-lli-teal hover:text-lli-teal-dark">
                      contact@lliconsulting.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-lli-orange text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-phone text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+1234567890" className="text-lli-orange hover:text-lli-orange-dark">
                      (123) 456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-lli-teal text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fab fa-linkedin text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">LinkedIn</h3>
                    <a href="https://www.linkedin.com/company/lli-consulting-group" target="_blank" rel="noopener noreferrer" className="text-lli-teal hover:text-lli-teal-dark">
                      Connect with us on LinkedIn
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-lli-orange text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-globe text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Website</h3>
                    <a href="https://www.LLIConsulting.com" target="_blank" rel="noopener noreferrer" className="text-lli-orange hover:text-lli-orange-dark">
                      www.LLIConsulting.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={officeImg} 
                alt="LLI Consulting Group LLC Team" 
                className="w-full rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-lli-teal to-lli-orange text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">24h</div>
                <div className="text-sm">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JavaScript for form handling and Calendly */}
      <script dangerouslySetInnerHTML={{__html: `
        // Open Calendly popup
        function openCalendly() {
          if (typeof Calendly !== 'undefined') {
            Calendly.initPopupWidget({url: 'https://calendly.com/lliconsulting/discovery-call'});
          } else {
            // Fallback to inline widget
            document.getElementById('calendly-section').scrollIntoView({ behavior: 'smooth' });
          }
          return false;
        }

        // Scroll to form
        function scrollToForm() {
          document.getElementById('consultation-form').scrollIntoView({ behavior: 'smooth' });
        }

        // Handle consultation form submission
        function handleConsultationSubmit(event) {
          event.preventDefault();
          
          const form = event.target;
          const formData = new FormData(form);
          const data = Object.fromEntries(formData.entries());
          
          // Show loading state
          const submitButton = form.querySelector('button[type="submit"]');
          const originalText = submitButton.innerHTML;
          submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
          submitButton.disabled = true;
          
          // Simulate API call (replace with actual endpoint)
          setTimeout(() => {
            // Hide form
            form.style.display = 'none';
            
            // Show success message
            document.getElementById('form-success').classList.remove('hidden');
            
            // Log form data (in production, send to your backend)
            console.log('Consultation request:', data);
            
            // Optionally send to backend API
            // fetch('/api/consultation', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify(data)
            // });
            
          }, 1500);
        }
      `}}>
      </script>

      <Footer />
    </div>
  )
}
