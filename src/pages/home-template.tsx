import { BRAND } from '../lib/brand'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { TM } from '../components/TM'

// Helper function to strip trademark symbols for attributes
const tm = (text: string): string => text.replace(/™️?/g, '')

export function HomePageTemplate() {
  return (
    <>
      <title>{tm(BRAND.names.company)} | Workplace Trust, Psychological Safety, Organizational Culture</title>
      
      <Navigation />

      {/* SECTION 1: HERO */}
      <section className="relative bg-gradient-to-br from-lli-teal to-lli-teal-dark text-white py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Workplace Trust Is the Foundation<br />
            of Organizational Change.
          </h1>
          <p className="text-xl md:text-2xl text-teal-50 mb-10 leading-relaxed max-w-4xl mx-auto">
            {BRAND.names.company} helps organizations understand how trust is experienced across 
            the workplace, identify the conditions shaping organizational culture, and develop 
            accountable strategies for change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/trust-audit" 
              className="inline-block bg-lli-orange hover:bg-lli-orange-dark text-white font-semibold px-8 py-4 rounded-lg transition-all text-lg"
            >
              Explore the LLI Workplace Trust Audit<TM />
            </a>
            <a 
              href="/contact" 
              className="inline-block bg-white text-lli-teal hover:bg-teal-50 font-semibold px-8 py-4 rounded-lg transition-all text-lg"
            >
              Book a Discovery Conversation
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: FRAMEWORK */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Listen. Learn. Implement.
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              The {BRAND.names.framework} provides a structured pathway from organizational 
              insight to accountable action.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* LISTEN */}
            <div className="bg-neutral-50 rounded-lg p-8">
              <div className="w-16 h-16 bg-lli-teal rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">LISTEN<TM /></h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Create the conditions for people to speak openly, honestly, and meaningfully.
              </p>
            </div>

            {/* LEARN */}
            <div className="bg-neutral-50 rounded-lg p-8">
              <div className="w-16 h-16 bg-lli-orange rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">LEARN<TM /></h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Identify patterns, barriers, strengths, context, and what the information is 
                actually telling the organization.
              </p>
            </div>

            {/* IMPLEMENT */}
            <div className="bg-neutral-50 rounded-lg p-8">
              <div className="w-16 h-16 bg-lli-teal rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">IMPLEMENT<TM /></h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Translate what was learned into decisions, actions, ownership, timelines, 
                communication, and accountability.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6 italic">
              Listening with intention. Learning authentically. Implementing with accountability.
            </p>
            <a 
              href="/framework" 
              className="inline-block text-lli-orange hover:text-lli-orange-dark font-semibold text-lg"
            >
              Explore the {BRAND.names.framework} →
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 3: FLAGSHIP OFFER - TRUST AUDIT */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Start With Trust.
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-lli-teal mb-6">
              LLI Workplace Trust Audit<TM />
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              A structured organizational diagnostic designed to understand how employees 
              experience trust across the workplace.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The {BRAND.names.trustAudit} combines confidential employee input, structured 
              analysis, and organizational context to identify patterns affecting trust, 
              psychological safety, leadership credibility, communication, employee voice, 
              accountability, and organizational culture.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The purpose is not simply to produce a score.
            </p>
            <p className="text-lg text-gray-900 font-semibold mb-8">
              The purpose is to understand what is happening beneath the surface and determine 
              what requires attention.
            </p>
            <div className="text-center">
              <a 
                href="/trust-audit" 
                className="inline-block bg-lli-orange hover:bg-lli-orange-dark text-white font-semibold px-8 py-4 rounded-lg transition-all text-lg"
              >
                Explore the Trust Audit<TM />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FROM INSIGHT TO ACTION */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            From Insight to Organizational Change
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Assessment alone does not change culture.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            {BRAND.names.company} helps organizations move findings through the complete {BRAND.names.framework}:
          </p>
          
          <div className="inline-flex items-center gap-4 mb-8 flex-wrap justify-center">
            <span className="text-2xl font-bold text-lli-teal">LISTEN<TM /></span>
            <span className="text-2xl text-lli-orange">→</span>
            <span className="text-2xl font-bold text-lli-teal">LEARN<TM /></span>
            <span className="text-2xl text-lli-orange">→</span>
            <span className="text-2xl font-bold text-lli-teal">IMPLEMENT<TM /></span>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            The process connects employee experience and organizational evidence to priorities, 
            decisions, ownership, implementation, and accountability.
          </p>

          <a 
            href="/services" 
            className="inline-block text-lli-orange hover:text-lli-orange-dark font-semibold text-lg"
          >
            Explore Our Approach →
          </a>
        </div>
      </section>

      {/* SECTION 5: RESOURCE COLLECTION */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The {BRAND.names.framework} Resource Collection
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Practical tools designed to move leaders and organizations from listening to 
              understanding and from understanding to accountable action.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Workbook */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {BRAND.names.framework} Workbook
              </h3>
              <p className="text-lli-orange font-semibold mb-4">The working system.</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                A comprehensive collection of structured exercises, worksheets, and planning 
                tools for applying LISTEN<TM />, LEARN<TM />, and IMPLEMENT<TM />.
              </p>
            </div>

            {/* Companion Guide */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {BRAND.names.framework} Companion Guide
              </h3>
              <p className="text-lli-orange font-semibold mb-4">The guidance behind the work.</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Explains how to apply the {BRAND.names.framework} with intention, consistency, 
                and accountability.
              </p>
            </div>

            {/* Planner */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {BRAND.names.framework} Planner
              </h3>
              <p className="text-lli-orange font-semibold mb-4">The accountability system.</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                A structured planning tool to keep priorities, decisions, ownership, timelines, 
                and follow-through visible.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <a 
              href="/resources" 
              className="inline-block text-lli-orange hover:text-lli-orange-dark font-semibold text-lg"
            >
              Explore {BRAND.names.framework} Resources →
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 6: FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-lli-orange to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Understand What Is<br />
            Happening Beneath the Surface?
          </h2>
          <p className="text-xl text-orange-50 mb-10 leading-relaxed max-w-3xl mx-auto">
            Every organizational engagement begins with a conversation about the organization's needs, 
            current challenges, and whether {BRAND.names.company} is the appropriate partner.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-lli-orange hover:bg-neutral-100 font-bold px-10 py-5 rounded-lg transition-all text-lg shadow-xl"
          >
            Book a Discovery Conversation
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
