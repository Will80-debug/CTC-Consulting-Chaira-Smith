import { BRAND } from '../lib/brand'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export const AboutPage = () => {
  // Image URLs - Professional headshots
  const chiaraFounderImg = "https://www.genspark.ai/api/files/s/rk2cUuvU"  // White blazer with orange top

  return (
    <>
      <title>About | {BRAND.names.company}</title>
      
      <div className="min-h-screen bg-white">
        <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lli-teal to-lli-teal-dark text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About {BRAND.names.company}
          </h1>
          <p className="text-xl text-teal-50 leading-relaxed">
            A principal-led advisory practice supporting organizations navigating workplace trust, 
            organizational culture, and implementation challenges.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={chiaraFounderImg} 
                alt="Chiara Smith, MHR - Founder of LLI Consulting Group" 
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Chiara Smith, MHR</h2>
              <p className="text-lg text-lli-teal font-semibold mb-6">
                Founder & Principal, {BRAND.names.company}<br />
                Creator, {BRAND.names.framework}
              </p>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Chiara Smith founded {BRAND.names.company} to support leaders working through strategic 
                  inflection points, alignment challenges, and implementation uncertainty.
                </p>
                <p>
                  Her work is informed by professional experience across organizational strategy, 
                  philanthropy, leadership, community engagement, government and public systems, 
                  organizational culture, equity, and implementation.
                </p>
                <p>
                  This experience across institutions and communities informed the development of the 
                  {BRAND.names.framework}—a structured methodology for moving organizations from 
                  conversation to understanding and from understanding to accountable action.
                </p>
                <p>
                  She supports foundations, public agencies, and mission-driven organizations navigating 
                  complex organizational work where clarity, capacity, and public trust matter.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Education</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-lli-teal mr-2">•</span>
                    Master of Human Relations (MHR)
                  </li>
                  <li className="flex items-start">
                    <span className="text-lli-orange mr-2">•</span>
                    Certificate in Diversity and Inclusion, Cornell University
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How LLI Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How {BRAND.names.company} Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-lli-teal">
              <div className="w-16 h-16 bg-lli-teal rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Principal-Led</h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Direct access to experienced leadership, not a team of junior consultants.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-lli-orange">
              <div className="w-16 h-16 bg-lli-orange rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Structured Methodology</h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Rigorous {BRAND.names.framework} process designed for high-accountability environments.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-lli-teal-dark">
              <div className="w-16 h-16 bg-lli-teal-dark rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Practical Implementation</h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Actionable plans aligned with organizational capacity and context, not idealized blueprints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Approach</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            {BRAND.names.company} was built on a premise: responsible leadership requires disciplined 
            listening, careful learning, and intentional implementation.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            In high-accountability environments, decisions must balance urgency, capacity, and public trust. 
            This practice exists to support that balance.
          </p>
          <p className="text-lg text-gray-600 italic">
            No inflated metrics. No guarantees. Just disciplined advisory work.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-lli-teal to-lli-teal-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Begin with a Discovery Conversation
          </h2>
          <p className="text-xl text-teal-50 mb-10 leading-relaxed">
            If your organization requires structured support rather than surface solutions, 
            let's discuss whether {BRAND.names.company} is the right fit.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-lli-orange hover:bg-orange-700 text-white font-semibold px-10 py-5 rounded-lg transition-all text-lg"
          >
            Book a Discovery Conversation
          </a>
        </div>
      </section>

        <Footer />
      </div>
    </>
  )
}
