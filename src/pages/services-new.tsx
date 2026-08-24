import { BRAND } from '../lib/brand'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export function ServicesPageNew() {
  return (
    <>
      <title>Services | {BRAND.names.company}</title>
      
      <Navigation />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-700 to-teal-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Organizational Advisory Services
          </h1>
          <p className="text-xl text-teal-50 max-w-3xl mx-auto leading-relaxed">
            {BRAND.names.company} partners with organizations to understand workplace trust, 
            develop culture strategies, and implement accountable change.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Service 01: Trust Audit */}
          <div className="mb-24">
            <div className="flex items-start mb-6">
              <span className="text-6xl font-bold text-teal-600 mr-6">01</span>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {BRAND.names.trustAudit}
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Understand how employees experience trust and organizational culture.
                </p>
              </div>
            </div>
            <div className="bg-teal-50 rounded-2xl p-10 ml-20">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A structured organizational diagnostic that examines workplace trust, psychological safety, 
                leadership credibility, employee voice, communication, consistency, accountability, and 
                confidence in organizational follow-through.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                The Trust Audit™️ combines confidential employee input with organizational context to identify 
                patterns affecting culture and provide leadership with actionable insight.
              </p>
              <a href="/trust-audit" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-all">
                Explore the Trust Audit™️
              </a>
            </div>
          </div>

          {/* Service 02: Organizational Culture Strategy */}
          <div className="mb-24">
            <div className="flex items-start mb-6">
              <span className="text-6xl font-bold text-orange-600 mr-6">02</span>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Organizational Culture Strategy
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Translate organizational findings into priorities, decisions, and a structured strategy 
                  for organizational culture change.
                </p>
              </div>
            </div>
            <div className="bg-orange-50 rounded-2xl p-10 ml-20">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Culture change requires more than awareness. It requires intentional strategy that connects 
                what the organization learned to decisions, resource allocation, policy, leadership behavior, 
                and accountability structures.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {BRAND.names.company} works with leadership to develop culture strategies grounded in 
                organizational evidence, realistic about implementation capacity, and designed for measurable progress.
              </p>
            </div>
          </div>

          {/* Service 03: Leadership & Implementation Advisory */}
          <div className="mb-24">
            <div className="flex items-start mb-6">
              <span className="text-6xl font-bold text-teal-700 mr-6">03</span>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Leadership & Implementation Advisory
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Support leaders responsible for moving priorities into decisions, ownership, timelines, 
                  communication, implementation, and accountability.
                </p>
              </div>
            </div>
            <div className="bg-teal-50 rounded-2xl p-10 ml-20">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Implementation is where most organizational initiatives stall. Not from lack of intent, 
                but from unclear ownership, competing priorities, insufficient structure, or inadequate follow-through.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This advisory service provides leaders with structured guidance, accountability frameworks, 
                and ongoing support throughout the implementation process.
              </p>
            </div>
          </div>

          {/* Service 04: LLI Framework Facilitation */}
          <div>
            <div className="flex items-start mb-6">
              <span className="text-6xl font-bold text-teal-600 mr-6">04</span>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {BRAND.names.framework} Facilitation & Workshops
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Facilitated organizational sessions using {BRAND.names.listen}, {BRAND.names.learn}, 
                  and {BRAND.names.implement} to address defined organizational challenges.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-10 ml-20">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                When organizations face specific challenges—navigating change, addressing trust gaps, 
                improving decision-making, strengthening accountability—facilitated sessions can provide 
                structured space to work through issues using the {BRAND.names.framework}.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                These engagements are customized to organizational context and designed to produce 
                actionable outcomes, not generic workshops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-teal-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How {BRAND.names.company} Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8">
              <div className="text-4xl font-bold text-teal-600 mb-4">01</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery</h3>
              <p className="text-gray-700">
                We begin by understanding your organization's needs, challenges, and whether our approach is the right fit.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8">
              <div className="text-4xl font-bold text-orange-600 mb-4">02</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Engagement</h3>
              <p className="text-gray-700">
                We structure engagements around organizational priorities, capacity, and desired outcomes—not generic programs.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8">
              <div className="text-4xl font-bold text-teal-700 mb-4">03</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-700">
                We support organizations through the complete {BRAND.names.framework}, from listening to accountable action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let's Discuss Your Organizational Needs
          </h2>
          <p className="text-xl text-teal-50 mb-10 leading-relaxed">
            Every engagement begins with a conversation about your challenges, priorities, and 
            whether {BRAND.names.company} is the right partner.
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
