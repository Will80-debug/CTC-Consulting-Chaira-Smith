import { BRAND } from '../lib/brand'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { TM } from '../components/TM'

export function FrameworkPage() {
  return (
    <>
      <title>{BRAND.names.framework} | {BRAND.names.company}</title>
      
      <Navigation />
      
      {/* HERO - Section #23 */}
      <section className="bg-gradient-to-br from-lli-teal to-lli-teal-dark text-white py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Listen. Learn. Implement.
          </h1>
          <p className="text-xl md:text-2xl text-teal-50 leading-relaxed">
            The {BRAND.names.framework} is a structured methodology for moving organizations 
            from conversation to understanding and from understanding to accountable action.
          </p>
        </div>
      </section>

      {/* SIMPLE VISUAL - Section #24 */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-6 mb-20 flex-wrap">
            <div className="text-center">
              <div className="w-24 h-24 bg-lli-teal rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-lli-teal">LISTEN<TM /></h3>
            </div>

            <svg className="w-12 h-12 text-lli-orange flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </svg>

            <div className="text-center">
              <div className="w-24 h-24 bg-lli-orange rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-lli-teal">LEARN<TM /></h3>
            </div>

            <svg className="w-12 h-12 text-lli-orange flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </svg>

            <div className="text-center">
              <div className="w-24 h-24 bg-lli-teal rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-lli-teal">IMPLEMENT<TM /></h3>
            </div>
          </div>

          {/* THREE FRAMEWORK SECTIONS - Section #23 */}
          <div className="space-y-16">
            {/* LISTEN */}
            <div className="bg-neutral-50 rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-lli-teal rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/>
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">LISTEN<TM /></h2>
              </div>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Create the conditions for people to speak openly, honestly, and meaningfully.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Listening should be intentional, structured, and connected to a defined purpose.
              </p>
            </div>

            {/* LEARN */}
            <div className="bg-neutral-50 rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-lli-orange rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">LEARN<TM /></h2>
              </div>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Move beyond collecting feedback to identifying patterns, context, barriers, opportunities, 
                evidence, and what the information is actually telling the organization.
              </p>
            </div>

            {/* IMPLEMENT */}
            <div className="bg-neutral-50 rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-lli-teal rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">IMPLEMENT<TM /></h2>
              </div>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Translate learning into decisions, actions, ownership, timelines, communication, 
                and accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ORGANIZATIONAL PATHWAY - Section #24 */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            The Complete Organizational Pathway
          </h2>

          <div className="space-y-6">
            {/* Step 1: Trust Audit */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-lli-teal mb-2">
                Workplace Trust Audit<TM />
              </h3>
              <p className="text-gray-700">
                Understand how employees experience trust across the organization
              </p>
            </div>

            <div className="text-center">
              <svg className="w-8 h-8 mx-auto text-lli-orange" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
              </svg>
            </div>

            {/* Step 2: LISTEN */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-lli-teal mb-2">LISTEN<TM /></h3>
              <p className="text-gray-700">
                Gather employee perspectives, experiences, and organizational context
              </p>
            </div>

            <div className="text-center">
              <svg className="w-8 h-8 mx-auto text-lli-orange" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
              </svg>
            </div>

            {/* Step 3: LEARN */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-lli-teal mb-2">LEARN<TM /></h3>
              <p className="text-gray-700">
                Analyze patterns, identify priorities, understand what requires attention
              </p>
            </div>

            <div className="text-center">
              <svg className="w-8 h-8 mx-auto text-lli-orange" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
              </svg>
            </div>

            {/* Step 4: IMPLEMENT */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-lli-teal mb-2">IMPLEMENT<TM /></h3>
              <p className="text-gray-700">
                Translate findings into decisions, priorities, and ownership
              </p>
            </div>

            <div className="text-center">
              <svg className="w-8 h-8 mx-auto text-lli-orange" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
              </svg>
            </div>

            {/* Step 5: Culture Strategy */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-lli-teal mb-2">
                Organizational Culture Strategy
              </h3>
              <p className="text-gray-700">
                Develop structured strategy for organizational culture change
              </p>
            </div>

            <div className="text-center">
              <svg className="w-8 h-8 mx-auto text-lli-orange" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
              </svg>
            </div>

            {/* Step 6: Accountability & Follow-Through */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-lli-teal mb-2">
                Accountability + Follow-Through
              </h3>
              <p className="text-gray-700">
                Move strategy into action, ownership, timelines, and measurable progress
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            From Conversation to<br />Accountable Action
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto">
            The {BRAND.names.framework} provides the structure to move organizations from 
            listening to understanding and from understanding to lasting change.
          </p>
          <a 
            href="/services" 
            className="inline-block bg-lli-orange hover:bg-lli-orange-dark text-white font-bold px-10 py-5 rounded-lg transition-all text-lg shadow-lg"
          >
            Explore How We Work
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
