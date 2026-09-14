import { BRAND } from '../lib/brand'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { TM } from '../components/TM'

export function TrustAuditPage() {
  return (
    <>
      <title>{BRAND.names.trustAudit} | {BRAND.names.company}</title>
      
      <Navigation />
      
      {/* HERO - Section #14 */}
      <section className="bg-gradient-to-br from-lli-teal to-lli-teal-dark text-white py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Understand How Trust Is Actually<br />
            Experienced Across Your Organization.
          </h1>
          <p className="text-xl text-teal-50 mb-6 leading-relaxed">
            Trust influences whether employees speak openly, raise concerns, share ideas, 
            challenge decisions, collaborate across differences, and believe leadership will 
            follow through.
          </p>
          <p className="text-xl text-teal-50 leading-relaxed">
            The {BRAND.names.trustAudit} provides organizations with a structured process for 
            understanding those experiences before determining what needs to change.
          </p>
        </div>
      </section>

      {/* WHAT IT EXAMINES - Section #15 */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            What the Trust Audit<TM /> Examines
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Workplace trust',
              'Psychological safety',
              'Leadership credibility',
              'Employee voice',
              'Communication',
              'Consistency',
              'Accountability',
              'Confidence in organizational follow-through'
            ].map((area, index) => (
              <div key={index} className="bg-neutral-50 rounded-lg p-6">
                <div className="w-12 h-12 bg-lli-teal rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">{area}</h3>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-12 italic">
            Proprietary scoring and methodology details are not publicly disclosed.
          </p>
        </div>
      </section>

      {/* LLI PROCESS - Section #16 */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            The {BRAND.names.framework} Process
          </h2>
          <p className="text-lg text-gray-600 mb-16 text-center">
            How the Trust Audit<TM /> moves from assessment to organizational action.
          </p>

          <div className="space-y-12">
            {/* LISTEN */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-20 h-20 bg-lli-teal rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">LISTEN<TM /></h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Gather confidential employee perspectives and relevant organizational context.
                </p>
              </div>
            </div>

            <div className="text-center">
              <svg className="w-8 h-8 mx-auto text-lli-orange" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
              </svg>
            </div>

            {/* LEARN */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-20 h-20 bg-lli-orange rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">LEARN<TM /></h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Analyze patterns, strengths, gaps, context, and areas requiring organizational attention.
                </p>
              </div>
            </div>

            <div className="text-center">
              <svg className="w-8 h-8 mx-auto text-lli-orange" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
              </svg>
            </div>

            {/* IMPLEMENT */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-20 h-20 bg-lli-teal rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">IMPLEMENT<TM /></h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Translate findings into priorities, ownership, and an accountable organizational 
                  culture strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT ORGANIZATIONS MAY RECEIVE - Section #17 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            What Organizations May Receive
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            Depending on engagement scope, organizations may receive:
          </p>

          <div className="bg-neutral-50 rounded-2xl p-8 md:p-10">
            <ul className="space-y-4">
              {[
                'LLI Workplace Trust Audit™ administration',
                'Confidential employee data collection',
                'Analysis and interpretation',
                'Organizational Trust Findings Report',
                'Leadership findings briefing',
                'Priority identification',
                'Implementation recommendations',
                'Organizational culture strategy development',
                'Implementation planning and advisory support'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-lli-orange flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                  </svg>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-center text-gray-600 mt-8 italic">
            Specific deliverables are determined by engagement scope and organizational needs.
          </p>
        </div>
      </section>

      {/* CONFIDENTIALITY - Section #18 */}
      <section className="py-20 bg-lli-teal-dark text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <svg className="w-16 h-16 mx-auto mb-6 text-lli-orange" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
            </svg>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Confidentiality Matters.
            </h2>
          </div>

          <p className="text-xl text-teal-50 mb-6 leading-relaxed text-center max-w-3xl mx-auto">
            Trust cannot be meaningfully assessed without protecting the integrity of employee participation.
          </p>
          <p className="text-lg text-teal-50 leading-relaxed text-center max-w-3xl mx-auto">
            {BRAND.names.company} uses defined confidentiality, reporting, and interpretation protocols 
            designed to protect individual responses while providing organizations with useful organizational insight.
          </p>
        </div>
      </section>

      {/* FINAL CTA - Section #20 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Understand What's<br />
            Happening Beneath the Surface?
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto">
            Every Trust Audit<TM /> engagement begins with a conversation about your organization's 
            needs, current challenges, and whether the assessment is the right approach.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-lli-orange hover:bg-lli-orange-dark text-white font-bold px-10 py-5 rounded-lg transition-all text-lg shadow-lg"
          >
            Discuss a Workplace Trust Audit<TM />
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
