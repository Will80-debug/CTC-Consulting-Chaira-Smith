import { BRAND } from '../lib/brand'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export function HomePageNew() {
  return (
    <>
      <title>{BRAND.names.company} | Workplace Trust & Organizational Culture</title>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 text-white py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold mb-8 leading-tight">
              Workplace Trust Is the Foundation of Organizational Change.
            </h1>
            <p className="text-2xl text-teal-50 mb-12 leading-relaxed">
              {BRAND.positioning}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/trust-audit" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-10 py-5 rounded-lg transition-all text-lg text-center">
                Explore the {BRAND.names.trustAudit}
              </a>
              <a href="/contact" className="inline-block border-2 border-white text-white hover:bg-white hover:text-teal-800 font-semibold px-10 py-5 rounded-lg transition-all text-lg text-center">
                Book a Discovery Conversation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Listen. Learn. Implement.</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {BRAND.names.framework} provides a structured pathway from organizational insight to accountable action.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* LISTEN */}
            <div className="bg-teal-50 rounded-2xl p-8 border-t-4 border-teal-600">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                L
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{BRAND.names.listen}</h3>
              <p className="text-gray-700 leading-relaxed">
                Create the conditions for people to speak openly, honestly, and meaningfully.
              </p>
            </div>

            {/* LEARN */}
            <div className="bg-orange-50 rounded-2xl p-8 border-t-4 border-orange-600">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                L
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{BRAND.names.learn}</h3>
              <p className="text-gray-700 leading-relaxed">
                Identify patterns, barriers, strengths, context, and what the information is actually telling the organization.
              </p>
            </div>

            {/* IMPLEMENT */}
            <div className="bg-teal-50 rounded-2xl p-8 border-t-4 border-teal-700">
              <div className="w-16 h-16 bg-teal-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                I
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{BRAND.names.implement}</h3>
              <p className="text-gray-700 leading-relaxed">
                Translate what was learned into decisions, actions, ownership, timelines, communication, and accountability.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-600 italic mb-8">
              {BRAND.tagline}
            </p>
            <a href="/framework" className="inline-block border-2 border-teal-600 text-teal-700 hover:bg-teal-50 font-semibold px-8 py-3 rounded-lg transition-all">
              Explore the {BRAND.names.framework}
            </a>
          </div>
        </div>
      </section>

      {/* Flagship Offer - Trust Audit */}
      <section className="py-24 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-orange-600 text-white text-sm font-bold px-6 py-2 rounded-full mb-6">
              START WITH TRUST
            </div>
            <h2 className="text-4xl font-bold mb-6">{BRAND.names.trustAudit}</h2>
            <p className="text-xl text-teal-50 leading-relaxed max-w-3xl mx-auto">
              A structured organizational diagnostic designed to understand how employees experience trust across the workplace.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur rounded-2xl p-10 mb-10">
            <p className="text-lg text-teal-50 leading-relaxed mb-6">
              {BRAND.names.trustAudit} combines confidential employee input, structured analysis, and organizational 
              context to identify patterns affecting trust, psychological safety, leadership credibility, communication, 
              employee voice, accountability, and organizational culture.
            </p>
            <p className="text-lg text-teal-50 leading-relaxed">
              <span className="font-bold">The purpose is not simply to produce a score.</span> The purpose is to 
              understand what is happening beneath the surface and determine what requires attention.
            </p>
          </div>

          <div className="text-center">
            <a href="/trust-audit" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-10 py-4 rounded-lg transition-all text-lg">
              Explore the Trust Audit™️
            </a>
          </div>
        </div>
      </section>

      {/* From Insight to Action */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              From Insight to Organizational Change
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Assessment alone does not change culture.
            </p>
          </div>

          <div className="bg-teal-50 rounded-2xl p-10 mb-10">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {BRAND.names.company} helps organizations move findings through the complete {BRAND.names.framework}:
            </p>
            <div className="flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-teal-700">{BRAND.names.listen}</span>
              <svg className="w-8 h-8 mx-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span className="text-2xl font-bold text-orange-600">{BRAND.names.learn}</span>
              <svg className="w-8 h-8 mx-4 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span className="text-2xl font-bold text-teal-800">{BRAND.names.implement}</span>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              The process connects employee experience and organizational evidence to priorities, decisions, 
              ownership, implementation, and accountability.
            </p>
          </div>

          <div className="text-center">
            <a href="/services" className="inline-block border-2 border-teal-600 text-teal-700 hover:bg-teal-50 font-semibold px-8 py-3 rounded-lg transition-all">
              Explore Our Approach
            </a>
          </div>
        </div>
      </section>

      {/* Resource Collection */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {BRAND.names.resourceCollection}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical tools designed to move leaders and organizations from listening to understanding 
              and from understanding to accountable action.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Workbook */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{BRAND.names.workbook}</h3>
              <p className="text-gray-600 mb-4">The working system.</p>
            </div>

            {/* Companion Guide */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{BRAND.names.companionGuide}</h3>
              <p className="text-gray-600 mb-4">The guidance behind the work.</p>
            </div>

            {/* Planner */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-teal-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{BRAND.names.planner}</h3>
              <p className="text-gray-600 mb-4">The accountability system.</p>
            </div>
          </div>

          <div className="text-center">
            <a href="/resources" className="inline-block border-2 border-teal-600 text-teal-700 hover:bg-teal-50 font-semibold px-8 py-3 rounded-lg transition-all">
              Explore {BRAND.names.framework} Resources
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Understand What Is Happening Beneath the Surface?
          </h2>
          <p className="text-xl text-teal-50 mb-10 leading-relaxed">
            Every organizational engagement begins with a conversation about the organization's needs, 
            current challenges, and whether {BRAND.names.company} is the appropriate partner.
          </p>
          <a href="/contact" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-10 py-5 rounded-lg transition-all text-lg">
            Book a Discovery Conversation
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
