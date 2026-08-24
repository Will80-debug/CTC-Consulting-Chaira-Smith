import { BRAND } from '../lib/brand'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { TM } from '../components/TM'

// Helper function to strip trademark symbols for attributes
const tm = (text: string): string => text.replace(/™️?/g, '')

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
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                This advisory service provides leaders with structured guidance, accountability frameworks, 
                and ongoing support throughout the implementation process.
              </p>

              {/* One-on-One Coaching Video */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Individual Leadership Advisory
                </h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative rounded-xl overflow-hidden shadow-xl bg-gray-900">
                    <video controls className="w-full" poster="/static/workshop-session.jpg">
                      <source src="/static/videos/1-1-coaching-new.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      One-on-one advisory sessions provide personalized support for leaders navigating 
                      organizational change, implementation challenges, and strategic decision-making.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      These sessions focus on translating organizational priorities into actionable 
                      steps, building accountability systems, and developing leadership capacity to 
                      drive meaningful change.
                    </p>
                  </div>
                </div>
              </div>

              {/* Executive Coaching Video */}
              <div className="pt-8 border-t border-teal-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Executive Leadership Development
                </h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Executive advisory engagements address the unique challenges senior leaders face 
                      in driving culture change, building organizational trust, and maintaining 
                      accountability at scale.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      We work with executives to align leadership behavior with organizational values, 
                      strengthen decision-making frameworks, and create sustainable implementation strategies.
                    </p>
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-xl bg-gray-900 order-1 md:order-2">
                    <video controls className="w-full" poster="/static/workshop-session.jpg">
                      <source src="/static/videos/executive-coaching-updated.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
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
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                These engagements are customized to organizational context and designed to produce 
                actionable outcomes, not generic workshops.
              </p>

              {/* Team Development Video */}
              <div className="bg-white rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Team Development & Facilitation
                </h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative rounded-xl overflow-hidden shadow-xl bg-gray-900">
                    <video controls className="w-full" poster="/static/workshop-session.jpg">
                      <source src="/static/videos/team-development-updated.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Team development sessions bring the LISTEN<TM /> → LEARN<TM /> → IMPLEMENT<TM /> 
                      framework directly to teams facing specific challenges or navigating organizational change.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      These facilitated sessions create structured space for teams to surface concerns, 
                      build shared understanding, develop actionable strategies, and establish accountability systems.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      We work with teams at all levels—leadership teams, cross-functional groups, 
                      department teams—to strengthen trust, improve communication, and build capacity 
                      for sustainable change.
                    </p>
                  </div>
                </div>
              </div>
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
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-teal-600">01</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery</h3>
              <p className="text-gray-700">
                We begin by understanding your organization's needs, challenges, and whether our approach is the right fit.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-orange-600">02</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Engagement</h3>
              <p className="text-gray-700">
                We structure engagements around organizational priorities, capacity, and desired outcomes—not generic programs.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-teal-700">03</div>
              </div>
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
