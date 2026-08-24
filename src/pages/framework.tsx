import { BRAND } from '../lib/brand'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export function FrameworkPage() {
  return (
    <>
      <title>{BRAND.names.framework} | {BRAND.names.company}</title>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-700 to-teal-900 text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-8 leading-tight">
            Listen. Learn. Implement.
          </h1>
          <p className="text-2xl text-teal-50 mb-4 leading-relaxed">
            {BRAND.names.framework} is a structured methodology for moving organizations from conversation 
            to understanding and from understanding to accountable action.
          </p>
          <div className="mt-12">
            <div className="inline-flex items-center bg-white bg-opacity-10 backdrop-blur rounded-2xl px-8 py-6">
              <span className="text-2xl font-bold text-orange-400">{BRAND.names.listen}</span>
              <svg className="w-8 h-8 mx-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span className="text-2xl font-bold text-teal-200">{BRAND.names.learn}</span>
              <svg className="w-8 h-8 mx-6 text-teal-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span className="text-2xl font-bold">{BRAND.names.implement}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Video */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              See the {BRAND.names.framework} in Action
            </h2>
            <p className="text-xl text-gray-600">
              Real people. Honest conversations. Lasting change.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
            <video controls className="w-full" poster="/static/workshop-session.jpg">
              <source src="/static/videos/listen-learn-implement-updated.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Core Brand Statement */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-3xl font-semibold italic">
            {BRAND.tagline}
          </p>
        </div>
      </section>

      {/* LISTEN */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-teal-600 text-white text-sm font-bold px-6 py-2 rounded-full mb-6">
                PHASE 01
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{BRAND.names.listen}</h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Create the conditions for people to speak openly, honestly, and meaningfully.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Listening should be intentional, structured, and connected to a defined purpose. 
                It is not passive collection. It is active engagement designed to understand what 
                people are actually experiencing and what the organization needs to know.
              </p>
            </div>
            <div className="bg-teal-50 rounded-2xl p-10 border-l-8 border-teal-600">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Listening With Intention™️</h3>
              <ul className="space-y-4">
                {[
                  'Define the purpose of listening',
                  'Create structured access points',
                  'Protect confidentiality and psychological safety',
                  'Capture what is said accurately',
                  'Preserve direct language and context',
                  'Separate listening from interpretation',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LEARN */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 bg-orange-50 rounded-2xl p-10 border-l-8 border-orange-600">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Learning Authentically™️</h3>
              <ul className="space-y-4">
                {[
                  'Identify patterns across responses',
                  'Distinguish evidence from assumption',
                  'Understand context and barriers',
                  'Recognize strengths and opportunities',
                  'Determine what the information is telling the organization',
                  'Connect findings to organizational decisions',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block bg-orange-600 text-white text-sm font-bold px-6 py-2 rounded-full mb-6">
                PHASE 02
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{BRAND.names.learn}</h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Move beyond collecting feedback to identifying patterns, context, barriers, opportunities, 
                evidence, and what the information is actually telling the organization.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Learning requires analytical rigor. It means distinguishing signal from noise, evidence from 
                interpretation, and organizational patterns from individual experience. It is where insight emerges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPLEMENT */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-teal-700 text-white text-sm font-bold px-6 py-2 rounded-full mb-6">
                PHASE 03
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{BRAND.names.implement}</h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Translate learning into decisions, actions, ownership, timelines, communication, and accountability.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Implementation is not a task list. It is a structured process that moves priorities into 
                decisions, decisions into ownership, and ownership into follow-through. Without accountability, 
                insight becomes another document that does not change the organization.
              </p>
            </div>
            <div className="bg-teal-50 rounded-2xl p-10 border-l-8 border-teal-700">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Implementing With Accountability™️</h3>
              <ul className="space-y-4">
                {[
                  'Translate findings into organizational priorities',
                  'Define decisions and actions clearly',
                  'Assign ownership and timelines',
                  'Establish accountability structures',
                  'Communicate progress and changes',
                  'Track follow-through and impact',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-teal-700 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Pathway */}
      <section className="py-24 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">The Complete Organizational Pathway</h2>
          
          <div className="space-y-6">
            {[
              { title: BRAND.names.trustAudit, subtitle: 'Understand how trust is experienced' },
              { title: BRAND.names.listen, subtitle: 'Create conditions for open, honest input' },
              { title: BRAND.names.learn, subtitle: 'Identify patterns, barriers, and priorities' },
              { title: BRAND.names.implement, subtitle: 'Translate into decisions, actions, and ownership' },
              { title: 'Organizational Culture Strategy', subtitle: 'Connect priorities to strategic direction' },
              { title: 'Accountability + Follow-Through', subtitle: 'Track, communicate, and demonstrate progress' },
            ].map((step, index) => (
              <div key={index}>
                <div className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                  <p className="text-teal-100">{step.subtitle}</p>
                </div>
                {index < 5 && (
                  <div className="flex justify-center py-3">
                    <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why the {BRAND.names.framework} Works
          </h2>
          
          <div className="space-y-8">
            {[
              {
                title: 'It Connects Insight to Action',
                description: 'The framework ensures that what organizations hear leads to what they learn, and what they learn leads to what they do.',
              },
              {
                title: 'It Builds Accountability',
                description: 'By making ownership, timelines, and follow-through explicit, the methodology prevents good intentions from becoming unfulfilled promises.',
              },
              {
                title: 'It Protects Trust',
                description: 'Employees see that their input matters when they observe decisions, actions, and progress stemming from what was shared.',
              },
              {
                title: 'It Is Structured and Repeatable',
                description: 'Organizations can apply the framework consistently across different challenges, teams, and contexts.',
              },
            ].map((item, index) => (
              <div key={index} className="border-l-4 border-teal-600 pl-8 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Move From Listening to Accountable Action?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Explore how {BRAND.names.company} can help your organization apply the {BRAND.names.framework}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/trust-audit" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-10 py-4 rounded-lg transition-all text-lg">
              Explore the Trust Audit™️
            </a>
            <a href="/contact" className="border-2 border-teal-600 text-teal-700 hover:bg-teal-50 font-semibold px-10 py-4 rounded-lg transition-all text-lg">
              Book a Conversation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
