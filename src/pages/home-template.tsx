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

      {/* Hero Section - Matching Design Image */}
      <section className="relative bg-lli-teal-dark text-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="z-10">
              <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
                FROM LISTENING<br />
                TO ACCOUNTABLE<br />
                <span className="text-lli-orange">ACTION.</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 leading-relaxed">
                {tm(BRAND.names.company)} helps organizations<br />
                strengthen trust, psychological safety,<br />
                and implementation.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-lli-orange hover:bg-lli-orange-dark text-white font-semibold px-8 py-3 rounded transition-all"
              >
                Book a Conversation
              </a>
            </div>

            {/* Right Column - Professional Photo with Orange Curve */}
            <div className="relative z-10">
              <div className="relative">
                <img 
                  src="/static/template-images/chiara-white-blazer.jpg" 
                  alt="Chiara Smith, MHR - Founder of LLI Consulting Group"
                  className="w-full h-auto relative z-10 rounded-lg"
                />
                {/* Orange Curved Decorative Element */}
                <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-lli-orange rounded-full" style={{clipPath: "ellipse(70% 50% at 30% 30%)"}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LLI Consulting Introduction Video */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Welcome to {BRAND.names.company}
            </h2>
            <p className="text-xl text-gray-600">
              Learn how we help organizations build trust and drive accountable action.
            </p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 max-w-4xl mx-auto">
            <video 
              controls 
              preload="metadata"
              className="w-full" 
              poster="/static/template-images/chiara-teal-blazer.jpg"
            >
              <source src="/static/videos/lli-intro-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Clarity Before Action Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Clarity Before Action
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            We partner with foundations, public agencies, and mission-driven organizations<br className="hidden md:block" />
            to build cultures of trust, strengthen teams, and turn strategy into lasting results.
          </p>
        </div>
      </section>

      {/* The LLI Framework */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* LISTEN */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-20 h-20 mx-auto mb-4 bg-lli-teal-dark rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">LISTEN™</h3>
              <p className="text-sm text-gray-600 mb-4">We listen with intention to uncover<br />what matters most to your people<br />and your mission.</p>
            </div>

            {/* LEARN */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-20 h-20 mx-auto mb-4 bg-lli-teal-dark rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">LEARN™</h3>
              <p className="text-sm text-gray-600 mb-4">We learn systematically to identify<br />insights that inform strategy<br />and workforce performance.</p>
            </div>

            {/* IMPLEMENT */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-20 h-20 mx-auto mb-4 bg-lli-teal-dark rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">IMPLEMENT™</h3>
              <p className="text-sm text-gray-600 mb-4">We implement with accountability<br />to drive measurable progress<br />and sustainable impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              Our Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1: Workplace Trust Audit */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/static/assessment-consultation.jpg" 
                  alt="Workplace Trust Audit"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                  Workplace Trust Audit<TM />
                </h3>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  A structured organizational diagnostic examining workplace trust, psychological safety, and organizational culture.
                </p>
                <a href="/trust-audit" className="text-lli-orange font-semibold hover:text-lli-orange-dark inline-flex items-center text-sm">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Service 2: Leadership and Team Development */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/static/executive-leadership-training.jpg" 
                  alt="Leadership and Team Development"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                  Leadership and<br />Team Development
                </h3>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  Programs and facilitation that build trusting relationships, strengthen teams, and turn strategy into performance.
                </p>
                <a href="/services" className="text-lli-orange font-semibold hover:text-lli-orange-dark inline-flex items-center text-sm">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Service 3: Implementation Strategy */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/static/implementation-meeting.jpg" 
                  alt="Implementation Strategy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                  Implementation Strategy
                </h3>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  Practical strategies and implementation roadmaps that turn plans into progress and sustainable impact.
                </p>
                <a href="/services" className="text-lli-orange font-semibold hover:text-lli-orange-dark inline-flex items-center text-sm">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Led by Chiara Smith Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="order-2 md:order-1">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/static/template-images/chiara-teal-blazer.jpg" 
                  alt="Chiara Smith, MHR"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Bio Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                Led by Chiara Smith, MHR
              </h2>
              
              <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
                <p>
                  Chiara Smith brings more than two decades of experience in organizational 
                  development, human relations, and strategic policy. She founded {tm(BRAND.names.company)} 
                  as the organization's bellwether to see people, and help make more 
                  mission-aligned impact.
                </p>
              </div>

              <a 
                href="/about" 
                className="inline-block mt-6 text-lli-orange font-semibold hover:text-lli-orange-dark"
              >
                Learn More About Chiara →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Move From Insight to Accountable Action - CTA */}
      <section className="py-16 bg-lli-orange text-white relative overflow-hidden">
        {/* White Curved Decorative Element */}
        <div className="absolute top-0 right-0 w-96 h-full">
          <div className="absolute top-0 right-0 w-full h-full bg-white" style={{clipPath: "ellipse(50% 70% at 100% 50%)"}}></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
              Move From Insight to<br />
              Accountable Action.
            </h2>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Let's clarify the issue, diagnose, and walk you into measurable progress.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-lli-teal-dark hover:bg-lli-teal text-white font-semibold px-8 py-3 rounded transition-all"
            >
              Book a Conversation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
