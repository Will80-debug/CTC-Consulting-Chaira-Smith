import { BRAND } from '../lib/brand'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export function TrustAuditPage() {
  return (
    <>
      <title>{BRAND.names.trustAudit} | {BRAND.names.company}</title>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-700 to-teal-900 text-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-6">
            <span className="inline-block bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
              Flagship Organizational Diagnostic
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Understand How Trust Is Actually Experienced Across Your Organization.
          </h1>
          <p className="text-xl text-teal-50 mb-8 leading-relaxed max-w-3xl">
            Trust influences whether employees speak openly, raise concerns, share ideas, challenge decisions, 
            collaborate across differences, and believe leadership will follow through.
          </p>
          <p className="text-xl text-teal-50 leading-relaxed max-w-3xl">
            {BRAND.names.trustAudit} provides organizations with a structured process for understanding those 
            experiences before determining what needs to change.
          </p>
        </div>
      </section>

      {/* What It Examines */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            What the Trust Audit™️ Examines
          </h2>
          <p className="text-lg text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            Understanding the organizational conditions that shape workplace trust.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Workplace Trust', description: 'How employees experience trust in day-to-day interactions and organizational relationships.' },
              { title: 'Psychological Safety', description: 'The degree to which people feel safe to speak up, take risks, and be authentic at work.' },
              { title: 'Leadership Credibility', description: 'Whether leadership\'s words align with actions and decisions over time.' },
              { title: 'Employee Voice', description: 'The extent to which employees believe their perspectives matter and are heard.' },
              { title: 'Communication', description: 'Clarity, consistency, and transparency in organizational communication.' },
              { title: 'Consistency', description: 'Whether policies, standards, and consequences are applied fairly and predictably.' },
              { title: 'Accountability', description: 'How accountability is demonstrated across all levels of the organization.' },
              { title: 'Organizational Follow-Through', description: 'Confidence that the organization will act on what employees share and what leaders commit to.' },
            ].map((item, index) => (
              <div key={index} className="border-l-4 border-teal-600 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LLI Process */}
      <section className="py-20 bg-teal-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">
            The {BRAND.names.framework} Process
          </h2>
          
          <div className="space-y-12">
            {/* LISTEN */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-8 border-teal-600">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-6">
                  L
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{BRAND.names.listen}</h3>
                  <p className="text-lg text-gray-700">
                    Gather confidential employee perspectives and relevant organizational context.
                  </p>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="w-1 h-12 bg-teal-300"></div>
            </div>

            {/* LEARN */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-8 border-orange-600">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-6">
                  L
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{BRAND.names.learn}</h3>
                  <p className="text-lg text-gray-700">
                    Analyze patterns, strengths, gaps, context, and areas requiring organizational attention.
                  </p>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="w-1 h-12 bg-teal-300"></div>
            </div>

            {/* IMPLEMENT */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-8 border-teal-700">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-teal-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-6">
                  I
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{BRAND.names.implement}</h3>
                  <p className="text-lg text-gray-700">
                    Translate findings into priorities, ownership, and an accountable organizational culture strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Organizations May Receive */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            What Organizations May Receive
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Depending on engagement scope, organizations may receive:
          </p>
          
          <div className="bg-teal-50 rounded-2xl p-10">
            <ul className="space-y-4">
              {[
                'LLI Workplace Trust Audit™️ administration',
                'Confidential employee data collection',
                'Analysis and interpretation',
                'Organizational Trust Findings Report',
                'Leadership findings briefing',
                'Priority identification',
                'Implementation recommendations',
                'Organizational culture strategy development',
                'Implementation planning and advisory support',
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-teal-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-600 mt-8 italic">
              Note: Deliverables vary by engagement scope and are defined contractually.
            </p>
          </div>
        </div>
      </section>

      {/* Confidentiality */}
      <section className="py-20 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <svg className="w-16 h-16 mx-auto mb-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <h2 className="text-3xl font-bold mb-4">Confidentiality Matters.</h2>
          </div>
          <p className="text-xl text-teal-50 mb-6 leading-relaxed">
            Trust cannot be meaningfully assessed without protecting the integrity of employee participation.
          </p>
          <p className="text-lg text-teal-100 leading-relaxed">
            {BRAND.names.company} uses defined confidentiality, reporting, and interpretation protocols designed 
            to protect individual responses while providing organizations with useful organizational insight.
          </p>
        </div>
      </section>

      {/* Sample Report Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Organizational Trust Findings Report
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            Sample visualization of findings organizations may receive.
          </p>
          
          <div className="bg-white rounded-2xl shadow-2xl p-12 border-t-8 border-teal-600">
            <div className="text-center mb-8">
              <div className="inline-block bg-orange-100 border-2 border-orange-600 text-orange-800 font-bold px-6 py-3 rounded-lg mb-6">
                ILLUSTRATIVE SAMPLE DATA
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Organizational Trust Profile</h3>
              <p className="text-gray-600">Sample Organization | Q4 2025</p>
            </div>
            
            <div className="space-y-6">
              {[
                { domain: 'Workplace Trust', score: 72, color: 'teal' },
                { domain: 'Psychological Safety', score: 65, color: 'teal' },
                { domain: 'Leadership Credibility', score: 58, color: 'orange' },
                { domain: 'Employee Voice', score: 61, color: 'orange' },
                { domain: 'Communication', score: 69, color: 'teal' },
                { domain: 'Accountability', score: 54, color: 'orange' },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">{item.domain}</span>
                    <span className={`font-bold ${item.color === 'teal' ? 'text-teal-700' : 'text-orange-600'}`}>
                      {item.score}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full ${item.color === 'teal' ? 'bg-teal-600' : 'bg-orange-600'}`}
                      style={{ width: `${item.score}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 italic text-center">
                Sample visualization only. Actual reports include detailed analysis, context, patterns, 
                priority findings, and {BRAND.names.listen} → {BRAND.names.learn} → {BRAND.names.implement} recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Understand What's Happening Beneath the Surface?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Every organizational engagement begins with a conversation about your needs, 
            current challenges, and whether {BRAND.names.company} is the appropriate partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-10 py-4 rounded-lg transition-all text-lg">
              Discuss a Workplace Trust Audit™️
            </a>
            <a href="/framework" className="border-2 border-teal-600 text-teal-700 hover:bg-teal-50 font-semibold px-10 py-4 rounded-lg transition-all text-lg">
              Explore the {BRAND.names.framework}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
