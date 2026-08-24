import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { TM } from '../components/TM'
import { BRAND, tm, VISUAL } from '../lib/brand'

/**
 * LLI Consulting Group™ Homepage - "WOW" Edition
 * Strategic concept: "What is happening beneath the surface?"
 * 
 * Features:
 * - Animated hero with executive workshop imagery
 * - Staggered text reveals
 * - Scroll-driven LLI pathway with progress line
 * - Interactive Trust Audit dashboard
 * - Proof elements with animated numbers
 * - Human photography throughout
 * - Subtle, sophisticated animations
 */

export const HomePageWow = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Full-width executive workshop */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        {/* Background Image with overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900">
          {/* Placeholder for executive workshop photography */}
          <div className="absolute inset-0 bg-[url('/static/workshop-session.jpg')] bg-cover bg-center opacity-40" data-parallax="0.3"></div>
          
          {/* Dark teal gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-800/70 to-transparent"></div>
          
          {/* Subtle animated network pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="network-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <circle cx="30" cy="30" r="1.5" fill="white" opacity="0.4"/>
                  <line x1="30" y1="30" x2="90" y2="30" stroke="white" strokeWidth="0.5" opacity="0.2"/>
                  <line x1="30" y1="30" x2="30" y2="90" stroke="white" strokeWidth="0.5" opacity="0.2"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#network-pattern)"/>
            </svg>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-4xl">
              {/* Animated headline - staggered reveal */}
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
                <span className="block opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
                  Understand What Is Happening
                </span>
                <span className="block opacity-0 animate-fade-in-up" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
                  <span className="text-orange-400">Beneath the Surface</span>
                </span>
                <span className="block opacity-0 animate-fade-in-up text-5xl md:text-6xl mt-4" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
                  of Your Organization.
                </span>
              </h1>

              {/* Trust indicator line - animated */}
              <div className="mb-10 opacity-0 animate-fade-in" style={{animationDelay: '1.1s', animationFillMode: 'forwards'}}>
                <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  <span className="text-orange-300 font-semibold text-sm tracking-wider">LISTEN<TM /></span>
                  <svg className="w-6 h-6 text-orange-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <span className="text-teal-200 font-semibold text-sm tracking-wider">LEARN<TM /></span>
                  <svg className="w-6 h-6 text-teal-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <span className="text-white font-semibold text-sm tracking-wider">IMPLEMENT<TM /></span>
                </div>
              </div>

              {/* Supporting statement */}
              <p className="text-xl md:text-2xl text-teal-50 mb-12 leading-relaxed opacity-0 animate-fade-in-up" style={{animationDelay: '1.4s', animationFillMode: 'forwards'}}>
                {tm(BRAND.names.company)} helps leaders uncover how trust is experienced, identify the conditions shaping workplace culture, and translate organizational insight into accountable action.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up" style={{animationDelay: '1.7s', animationFillMode: 'forwards'}}>
                <a 
                  href="/trust-audit" 
                  className="group bg-orange-600 hover:bg-orange-700 text-white font-semibold px-10 py-5 rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50 hover:-translate-y-1 text-center text-lg"
                >
                  <span className="flex items-center justify-center">
                    Begin With the Trust Audit<TM />
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>
                <a 
                  href="/contact" 
                  className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-10 py-5 rounded-lg transition-all duration-300 border-2 border-white/30 hover:border-white/50 text-center text-lg"
                >
                  Book a Discovery Conversation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in animate-bounce" style={{animationDelay: '2s', animationFillMode: 'forwards'}}>
          <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="bg-white py-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" data-animate="fade-up">
            <div className="opacity-0" data-animate="stagger-1">
              <div className="text-4xl font-bold text-teal-700 mb-2" data-counter="8">0</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Trust Dimensions Assessed</div>
            </div>
            <div className="opacity-0" data-animate="stagger-2">
              <div className="text-4xl font-bold text-teal-700 mb-2">500+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Voices Amplified</div>
            </div>
            <div className="opacity-0" data-animate="stagger-3">
              <div className="text-4xl font-bold text-teal-700 mb-2">15+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Organizations Served</div>
            </div>
            <div className="opacity-0" data-animate="stagger-4">
              <div className="text-4xl font-bold text-teal-700 mb-2">100%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Confidential Process</div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Introduction Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Video */}
            <div className="order-2 md:order-1" data-animate="fade-up">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                <video 
                  controls 
                  className="w-full"
                  poster="/static/workshop-session.jpg"
                >
                  <source src="/static/videos/lli-intro.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2" data-animate="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Welcome to {tm(BRAND.names.company)}
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                We help organizations move from assumption to insight, from feedback to action, and from intention to accountability.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Watch this introduction to understand how our structured approach to organizational listening, learning, and implementation creates measurable culture change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Trust Audit Dashboard Preview */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%230d9488\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16" data-animate="fade-up">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              The {tm(BRAND.names.trustAudit)}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured assessment that reveals how trust is actually experienced across your organization—not what leaders assume, but what employees observe.
            </p>
          </div>

          {/* Dashboard mockup with animated percentages */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100" data-animate="fade-up">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Sample Trust Dimensions</h3>
              <p className="text-gray-600">Real-time organizational insight dashboard</p>
            </div>

            {/* Trust dimension bars */}
            <div className="space-y-6">
              {[
                { dimension: 'Psychological Safety', score: 72, color: 'teal' },
                { dimension: 'Leadership Transparency', score: 65, color: 'orange' },
                { dimension: 'Voice & Input Channels', score: 58, color: 'teal' },
                { dimension: 'Accountability Systems', score: 81, color: 'orange' },
                { dimension: 'Decision-Making Clarity', score: 69, color: 'teal' },
                { dimension: 'Follow-Through & Action', score: 54, color: 'orange' },
              ].map((item, index) => (
                <div key={item.dimension} className="opacity-0" data-animate={`stagger-${index + 1}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-700">{item.dimension}</span>
                    <span className="text-2xl font-bold text-teal-700" data-counter={item.score}>0</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${item.color === 'teal' ? 'bg-teal-600' : 'bg-orange-600'} rounded-full transition-all duration-1000 ease-out`}
                      data-progress={item.score}
                      style={{width: '0%'}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <a 
                href="/trust-audit" 
                className="inline-flex items-center text-teal-700 font-semibold hover:text-teal-800 transition-colors group"
              >
                Explore the Complete Trust Audit<TM />
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll-Driven LLI Pathway - Signature Visual */}
      <section className="py-32 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 relative overflow-hidden" id="lli-pathway">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pathway-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="white"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pathway-grid)"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              The {tm(BRAND.names.framework)}
            </h2>
            <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto mb-12">
              A structured pathway from organizational listening to accountable implementation
            </p>
            
            {/* Framework Overview Video */}
            <div className="max-w-4xl mx-auto" data-animate="fade-up">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black/50 backdrop-blur-sm border border-white/20">
                <video 
                  controls 
                  className="w-full"
                  poster="/static/workshop-session.jpg"
                >
                  <source src="/static/videos/listen-learn-implement.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-teal-200 mt-4 text-sm">Watch: How the LISTEN → LEARN → IMPLEMENT framework transforms organizational culture</p>
            </div>
          </div>

          {/* Vertical pathway with animated progress line */}
          <div className="relative max-w-4xl mx-auto">
            {/* Animated progress line */}
            <div className="absolute left-12 top-0 bottom-0 w-1 bg-teal-700/30">
              <div className="w-full bg-gradient-to-b from-orange-500 to-orange-600 transition-all duration-1000 ease-out" id="pathway-progress" style={{height: '0%'}}></div>
            </div>

            {/* Pathway stages */}
            <div className="space-y-16">
              {/* Stage 1: Trust Audit */}
              <div className="flex items-start space-x-8 opacity-0" data-animate="pathway-1">
                <div className="flex-shrink-0 w-24 h-24 rounded-full bg-orange-600 flex items-center justify-center shadow-2xl shadow-orange-600/40 relative z-10">
                  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-3">{tm(BRAND.names.trustAudit)}</h3>
                  <p className="text-teal-100 text-lg mb-4">Understand how trust is experienced.</p>
                  <p className="text-teal-200">Confidential assessment across 8 organizational dimensions revealing patterns, disconnects, and employee perspectives.</p>
                </div>
              </div>

              {/* Stage 2: LISTEN */}
              <div className="flex items-start space-x-8 opacity-0" data-animate="pathway-2">
                <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-2xl shadow-orange-600/40 relative z-10">
                  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-orange-300 mb-3">LISTEN<TM /></h3>
                  <p className="text-teal-100 text-lg mb-4">Create conditions for honest input.</p>
                  <p className="text-teal-200">Structured listening sessions, safe feedback channels, and authentic employee voice collection.</p>
                </div>
              </div>

              {/* Stage 3: LEARN */}
              <div className="flex items-start space-x-8 opacity-0" data-animate="pathway-3">
                <div className="flex-shrink-0 w-24 h-24 rounded-full bg-teal-600 flex items-center justify-center shadow-2xl shadow-teal-600/40 relative z-10">
                  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-teal-300 mb-3">LEARN<TM /></h3>
                  <p className="text-teal-100 text-lg mb-4">Reveal patterns, barriers, and priorities.</p>
                  <p className="text-teal-200">Data analysis, thematic review, and strategic interpretation turning input into organizational insight.</p>
                </div>
              </div>

              {/* Stage 4: IMPLEMENT */}
              <div className="flex items-start space-x-8 opacity-0" data-animate="pathway-4">
                <div className="flex-shrink-0 w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-2xl relative z-10">
                  <svg className="w-12 h-12 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-3">IMPLEMENT<TM /></h3>
                  <p className="text-teal-100 text-lg mb-4">Convert insight into decisions and ownership.</p>
                  <p className="text-teal-200">Prioritized recommendations, leadership action plans, and clear accountability structures.</p>
                </div>
              </div>

              {/* Stage 5: Culture Strategy */}
              <div className="flex items-start space-x-8 opacity-0" data-animate="pathway-5">
                <div className="flex-shrink-0 w-24 h-24 rounded-full bg-teal-600 flex items-center justify-center shadow-2xl shadow-teal-600/40 relative z-10">
                  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-3">Organizational Culture Strategy</h3>
                  <p className="text-teal-100 text-lg mb-4">Connect priorities to strategic direction.</p>
                  <p className="text-teal-200">Alignment between employee voice, leadership decisions, and organizational mission.</p>
                </div>
              </div>

              {/* Stage 6: Accountability */}
              <div className="flex items-start space-x-8 opacity-0" data-animate="pathway-6">
                <div className="flex-shrink-0 w-24 h-24 rounded-full bg-orange-600 flex items-center justify-center shadow-2xl shadow-orange-600/40 relative z-10">
                  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-3">Accountability + Follow-Through</h3>
                  <p className="text-teal-100 text-lg mb-4">Track and demonstrate progress.</p>
                  <p className="text-teal-200">Implementation milestones, progress reporting, and visible organizational change.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <a 
              href="/framework" 
              className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white font-semibold px-10 py-5 rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50 hover:-translate-y-1 text-lg group"
            >
              <span>Explore the Complete Framework</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Measurable Outcomes Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" data-animate="fade-up">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Organizational Change Requires More Than Listening
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From assessment to implementation, {tm(BRAND.names.company)} delivers measurable organizational change.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: '8',
                label: 'Trust Dimensions Assessed',
                description: 'Comprehensive organizational analysis across psychological safety, transparency, voice, accountability, and more.',
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                )
              },
              {
                metric: '100%',
                label: 'Confidential & Safe Process',
                description: 'Employee responses remain anonymous, creating space for honest organizational feedback.',
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                )
              },
              {
                metric: '4-6',
                label: 'Week Implementation Timeline',
                description: 'From initial assessment to leadership recommendations and accountability framework.',
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <div 
                key={item.label} 
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 opacity-0" 
                data-animate={`stagger-${index + 1}`}
              >
                <div className="w-16 h-16 rounded-xl bg-teal-100 flex items-center justify-center text-teal-700 mb-6">
                  {item.icon}
                </div>
                <div className="text-5xl font-bold text-teal-700 mb-3" data-counter={item.metric.replace(/[^0-9]/g, '')}>{item.metric}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.label}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Human Impact - Large training photo with leadership quote */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/static/workshop-session.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-900/85 to-transparent"></div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl">
              <div className="mb-8">
                <svg className="w-16 h-16 text-orange-500 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z"/>
                </svg>
              </div>
              <blockquote className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                "The Trust Audit revealed patterns we couldn't see from leadership. It gave us language for what employees were experiencing and a clear path forward."
              </blockquote>
              <div className="text-teal-100">
                <p className="font-semibold text-lg">Executive Director</p>
                <p className="text-teal-200">Mission-Driven Nonprofit Organization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Dark cinematic with orange animated border */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        {/* Animated border effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 border-2 border-orange-500 animate-pulse-slow"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Ready to Understand What's Happening
            <span className="block text-orange-400 mt-2">Beneath the Surface?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Begin with the {tm(BRAND.names.trustAudit)}—a structured assessment that reveals how trust is experienced across your organization.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white font-bold px-12 py-6 rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50 hover:-translate-y-1 text-xl group"
          >
            <span>Book Your Discovery Conversation</span>
            <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      <Footer />

      {/* Animation initialization script */}
      <script dangerouslySetInnerHTML={{__html: `
        // Initialize scroll animations
        if (typeof window !== 'undefined') {
          // Intersection Observer for fade-in animations
          const observerOptions = {
            root: null,
            rootMargin: '0px 0px -100px 0px',
            threshold: 0.1
          };

          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-8');
                
                // Animate counters
                if (entry.target.hasAttribute('data-counter')) {
                  const target = entry.target.getAttribute('data-counter').replace(/[^0-9]/g, '');
                  if (target) {
                    const targetNum = parseInt(target);
                    let current = 0;
                    const increment = targetNum / 100;
                    const timer = setInterval(() => {
                      current += increment;
                      if (current >= targetNum) {
                        entry.target.textContent = entry.target.getAttribute('data-counter');
                        clearInterval(timer);
                      } else {
                        const displayNum = Math.floor(current);
                        const suffix = entry.target.getAttribute('data-counter').replace(/[0-9]/g, '');
                        entry.target.textContent = displayNum + suffix;
                      }
                    }, 20);
                  }
                }
                
                // Animate progress bars
                if (entry.target.hasAttribute('data-progress')) {
                  setTimeout(() => {
                    entry.target.style.width = entry.target.getAttribute('data-progress') + '%';
                  }, 100);
                }
              }
            });
          }, observerOptions);

          // Observe all animated elements
          setTimeout(() => {
            document.querySelectorAll('[data-animate]').forEach(el => {
              observer.observe(el);
            });
            
            document.querySelectorAll('[data-counter]').forEach(el => {
              observer.observe(el);
            });
            
            document.querySelectorAll('[data-progress]').forEach(el => {
              observer.observe(el);
            });
          }, 100);

          // Pathway progress line
          const pathwaySection = document.getElementById('lli-pathway');
          if (pathwaySection) {
            window.addEventListener('scroll', () => {
              const rect = pathwaySection.getBoundingClientRect();
              const windowHeight = window.innerHeight;
              const sectionHeight = rect.height;
              
              if (rect.top < windowHeight && rect.bottom > 0) {
                const visibleHeight = Math.min(windowHeight - rect.top, sectionHeight);
                const progress = Math.min(100, (visibleHeight / sectionHeight) * 100);
                const progressLine = document.getElementById('pathway-progress');
                if (progressLine) {
                  progressLine.style.height = progress + '%';
                }
              }
            });
          }
        }
      `}} />
    </div>
  )
}
