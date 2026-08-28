import { BRAND } from '../lib/brand'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { TM } from '../components/TM'

// Helper function to strip trademark symbols for attributes
const tm = (text: string): string => text.replace(/™️?/g, '')

export function HomePageTemplate() {
  return (
    <>
      <title>{tm(BRAND.names.company)} | From Listening to Accountable Action</title>
      
      <Navigation />

      {/* Hero Section - Matching Template Design */}
      <section className="relative bg-gradient-to-br from-teal-800 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                FROM LISTENING<br />
                TO ACCOUNTABLE<br />
                <span className="text-orange-400">ACTION.</span>
              </h1>
              <p className="text-xl text-teal-50 mb-8 leading-relaxed">
                {tm(BRAND.names.company)} helps organizations strengthen trust, psychological safety, 
                and implementation.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-10 py-4 rounded-lg transition-all text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Book a Conversation
              </a>
            </div>

            {/* Right Column - Professional Photo */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-transparent opacity-20"></div>
                <img 
                  src="/static/template-images/chiara-white-blazer.jpg" 
                  alt="Chiara Smith, MHR - Founder of LLI Consulting Group"
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative Orange Arc */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full opacity-80 -z-10"></div>
            </div>
          </div>
        </div>

        {/* Decorative Wave at Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto fill-current text-neutral-50">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Clarity Before Action Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Clarity Before Action
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            We partner with foundations, public agencies, and mission-driven organizations 
            to build cultures of trust, strengthen teams, and turn strategy into lasting results.
          </p>
        </div>
      </section>

      {/* The LLI Framework - Using Template Infographic */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The {BRAND.names.framework}
            </h2>
            <p className="text-xl text-gray-600">
              Real people. Honest conversations. Lasting change.
            </p>
          </div>

          {/* Framework Visual - Recreated as HTML/CSS */}
          <div className="max-w-6xl mx-auto">
            {/* Three Pillars */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* LISTEN */}
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-teal-800 rounded-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-teal-800 mb-2">LISTEN™</h3>
                <p className="text-orange-600 font-semibold text-lg mb-4">WITH INTENTION</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Create the conditions for people to speak openly, honestly and without fear.
                </p>
              </div>

              {/* LEARN */}
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-orange-600 rounded-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-teal-800 mb-2">LEARN™</h3>
                <p className="text-orange-600 font-semibold text-lg mb-4">AUTHENTICALLY</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Look beyond individual comments to understand patterns, barriers, experiences and what the information is really telling you.
                </p>
              </div>

              {/* IMPLEMENT */}
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-teal-800 rounded-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-teal-800 mb-2">IMPLEMENT™</h3>
                <p className="text-orange-600 font-semibold text-lg mb-4">WITH ACCOUNTABILITY</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Turn what you've learned into decisions, action, communication and ownership. Because trust grows when people see what happens next.
                </p>
              </div>
            </div>

            {/* Implementation Message */}
            <div className="bg-neutral-50 rounded-2xl p-8 mb-16">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <svg className="w-16 h-16 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Implementation doesn't always mean yes.
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Sometimes the answer is no. Sometimes it's not yet. Sometimes it's outside our authority. 
                    What matters is that people are told the truth and that we close the loop.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    People shouldn't have to wonder what happened after they spoke up.
                  </p>
                  <p className="text-orange-600 font-bold text-xl">
                    That's where trust lives.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Tagline */}
            <div className="bg-teal-800 rounded-2xl px-8 py-6">
              <div className="flex flex-wrap justify-center items-center gap-4 text-white text-center">
                <span className="text-lg font-semibold">LISTEN <span className="text-orange-500">WITH INTENTION.</span></span>
                <span className="text-2xl text-orange-500">|</span>
                <span className="text-lg font-semibold">LEARN <span className="text-orange-500">AUTHENTICALLY.</span></span>
                <span className="text-2xl text-orange-500">|</span>
                <span className="text-lg font-semibold">IMPLEMENT <span className="text-orange-500">WITH ACCOUNTABILITY.</span></span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Our Services Preview */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1: Workplace Trust Audit */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-teal-700 to-teal-900 flex items-center justify-center">
                <svg className="w-24 h-24 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Workplace Trust Audit<TM />
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  A structured organizational diagnostic examining workplace trust, psychological safety, 
                  leadership credibility, and organizational culture.
                </p>
                <a href="/trust-audit" className="text-orange-600 font-semibold hover:text-orange-700 inline-flex items-center">
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Service 2: Leadership and Team Development */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-orange-600 to-orange-700 flex items-center justify-center">
                <svg className="w-24 h-24 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Leadership and Team Development
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Programs and facilitation that build trusting relationships, strengthen teams, 
                  and turn strategic priorities into accountable performance.
                </p>
                <a href="/services" className="text-orange-600 font-semibold hover:text-orange-700 inline-flex items-center">
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Service 3: Implementation Strategy */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-teal-700 to-teal-900 flex items-center justify-center">
                <svg className="w-24 h-24 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Implementation Strategy
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Practical strategies and implementation roadmaps that turn plans into progress 
                  and sustainable impact.
                </p>
                <a href="/services" className="text-orange-600 font-semibold hover:text-orange-700 inline-flex items-center">
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Led by Chiara Smith Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/static/template-images/chiara-teal-blazer.jpg" 
                  alt="Chiara Smith, MHR"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Bio Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Led by Chiara Smith, <span className="text-teal-700">MHR</span>
              </h2>
              
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong>Chiara Smith, MHR,</strong> is the Founder and Principal Consultant of {tm(BRAND.names.company)}, 
                  where she advises leaders and organizations on workplace trust, psychological safety, 
                  organizational culture, and implementation.
                </p>
                
                <p>
                  She developed the {BRAND.names.framework}: {BRAND.names.listen}. {BRAND.names.learn}. {BRAND.names.implement}., 
                  a structured method that enables organizations to assess employee experiences, identify factors 
                  influencing trust and performance, and translate insights into actionable, accountable, and measurable outcomes.
                </p>
                
                <p>
                  Chiara has experience in philanthropy, organizational leadership, racial and health equity, 
                  community engagement, and public service. She believes organizations build trust when leaders 
                  listen intentionally, learn from feedback, and act on their commitments.
                </p>
                
                <p>
                  She holds a Master of Human Relations and serves as an At-Large member of Rochester City Council.
                </p>
              </div>

              <a 
                href="/about" 
                className="inline-block mt-8 text-orange-600 font-semibold hover:text-orange-700 text-lg"
              >
                Learn More About Chiara →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Move From Insight to Accountable Action - CTA */}
      <section className="py-24 bg-gradient-to-br from-orange-600 to-orange-700 text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -ml-32 -mb-32"></div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Move From Insight to<br />
            <span className="text-neutral-50">Accountable Action.</span>
          </h2>
          <p className="text-2xl text-orange-50 mb-10 leading-relaxed">
            Let's build the trust, alignment, and results your mission deserves.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-orange-600 hover:bg-neutral-100 font-bold px-12 py-5 rounded-lg transition-all text-lg shadow-2xl transform hover:scale-105"
          >
            Book a Conversation
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
