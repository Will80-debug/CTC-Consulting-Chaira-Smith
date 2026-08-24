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

          {/* Framework Infographic from Template */}
          <div className="max-w-4xl mx-auto">
            <img 
              src="/static/template-images/framework-infographic.jpg" 
              alt="The LLI Framework: Listen with Intention, Learn Authentically, Implement with Accountability"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {/* LISTEN */}
            <div className="text-center">
              <div className="w-20 h-20 bg-teal-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                LISTEN<TM />
              </h3>
              <p className="text-lg text-orange-600 font-semibold mb-3">WITH INTENTION</p>
              <p className="text-gray-700 leading-relaxed">
                We listen with intention to uncover what matters most to your people and your mission.
              </p>
            </div>

            {/* LEARN */}
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                LEARN<TM />
              </h3>
              <p className="text-lg text-orange-600 font-semibold mb-3">AUTHENTICALLY</p>
              <p className="text-gray-700 leading-relaxed">
                We learn authentically to identify insights, patterns, barriers, and what the information is really telling you.
              </p>
            </div>

            {/* IMPLEMENT */}
            <div className="text-center">
              <div className="w-20 h-20 bg-teal-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                IMPLEMENT<TM />
              </h3>
              <p className="text-lg text-orange-600 font-semibold mb-3">WITH ACCOUNTABILITY</p>
              <p className="text-gray-700 leading-relaxed">
                We implement with accountability to drive measurable progress and sustainable impact.
              </p>
            </div>
          </div>

          {/* Implementation Quote */}
          <div className="mt-16 bg-neutral-50 rounded-2xl p-10 border-l-4 border-orange-600">
            <p className="text-xl text-gray-800 mb-4 leading-relaxed italic">
              "Implementation doesn't always mean yes. Sometimes the answer is no. Sometimes it's not yet. 
              Sometimes it's outside our authority. What matters is that people are told the truth and that we close the loop."
            </p>
            <p className="text-lg text-gray-600">
              People shouldn't have to wonder what happened after they spoke up.
            </p>
            <p className="text-2xl text-orange-600 font-bold mt-4">
              That's where trust lives.
            </p>
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
