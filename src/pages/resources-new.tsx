import { BRAND } from '../lib/brand'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export function ResourcesPageNew() {
  return (
    <>
      <title>Resources | {BRAND.names.company}</title>
      
      <Navigation />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-700 to-teal-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            {BRAND.names.resourceCollection}
          </h1>
          <p className="text-xl text-teal-50 max-w-3xl mx-auto leading-relaxed">
            Tools designed to help leaders move from listening to understanding and from understanding to accountable action.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Product 1: Workbook */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-teal-50 rounded-2xl p-12 shadow-xl border-l-8 border-teal-600">
                  <div className="text-center">
                    <div className="w-32 h-40 bg-teal-600 rounded-lg mx-auto mb-6 flex items-center justify-center shadow-2xl">
                      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <p className="text-sm font-bold text-teal-600 mb-2">PROFESSIONAL MOCKUP</p>
                    <p className="text-xs text-gray-500">Product preview coming soon</p>
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="inline-block bg-teal-600 text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
                  THE WORKING SYSTEM
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {BRAND.names.workbook}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A comprehensive collection of structured exercises, worksheets, and planning tools for 
                  applying {BRAND.names.listen}, {BRAND.names.learn}, and {BRAND.names.implement} across organizational work.
                </p>
                <p className="text-gray-600 mb-8">
                  <span className="font-semibold">Best for:</span> Leaders, facilitators, and teams actively 
                  working through an organizational challenge.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Comprehensive working system
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Digital format (PDF)
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Structured worksheets & tools
                  </div>
                </div>
                <div className="flex gap-4">
                  <a href="#preview-workbook" className="inline-block border-2 border-teal-600 text-teal-700 hover:bg-teal-50 font-semibold px-6 py-3 rounded-lg transition-all">
                    Preview Inside
                  </a>
                  <a href="/contact" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition-all">
                    Purchase
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Product 2: Companion Guide */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-orange-600 text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
                  THE GUIDANCE BEHIND THE WORK
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {BRAND.names.companionGuide}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The Companion Guide explains how to apply {BRAND.names.framework} with intention, 
                  consistency, and accountability.
                </p>
                <p className="text-gray-600 mb-8">
                  <span className="font-semibold">Best for:</span> Leaders and facilitators seeking context 
                  and guidance while applying the framework.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-orange-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Framework guidance & context
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-orange-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Digital format (PDF)
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-orange-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Application instructions
                  </div>
                </div>
                <div className="flex gap-4">
                  <a href="#preview-guide" className="inline-block border-2 border-orange-600 text-orange-700 hover:bg-orange-50 font-semibold px-6 py-3 rounded-lg transition-all">
                    Preview Inside
                  </a>
                  <a href="/contact" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition-all">
                    Purchase
                  </a>
                </div>
              </div>
              
              <div>
                <div className="bg-orange-50 rounded-2xl p-12 shadow-xl border-l-8 border-orange-600">
                  <div className="text-center">
                    <div className="w-32 h-40 bg-orange-600 rounded-lg mx-auto mb-6 flex items-center justify-center shadow-2xl">
                      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <p className="text-sm font-bold text-orange-600 mb-2">PROFESSIONAL MOCKUP</p>
                    <p className="text-xs text-gray-500">Product preview coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product 3: Planner */}
          <div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-teal-50 rounded-2xl p-12 shadow-xl border-l-8 border-teal-700">
                  <div className="text-center">
                    <div className="w-32 h-40 bg-teal-700 rounded-lg mx-auto mb-6 flex items-center justify-center shadow-2xl">
                      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <p className="text-sm font-bold text-teal-700 mb-2">PROFESSIONAL MOCKUP</p>
                    <p className="text-xs text-gray-500">Product preview coming soon</p>
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="inline-block bg-teal-700 text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
                  THE ACCOUNTABILITY SYSTEM
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {BRAND.names.planner}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The Planner provides structured accountability tools for tracking decisions, actions, 
                  ownership, timelines, and progress.
                </p>
                <p className="text-gray-600 mb-8">
                  <span className="font-semibold">Best for:</span> Leaders and teams responsible for 
                  implementation and follow-through.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-teal-700 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Accountability tracking system
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-teal-700 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Digital format (PDF)
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-teal-700 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Implementation planning tools
                  </div>
                </div>
                <div className="flex gap-4">
                  <a href="#preview-planner" className="inline-block border-2 border-teal-700 text-teal-800 hover:bg-teal-50 font-semibold px-6 py-3 rounded-lg transition-all">
                    Preview Inside
                  </a>
                  <a href="/contact" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition-all">
                    Purchase
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Why These Resources */}
      <section className="py-20 bg-teal-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why {BRAND.names.resourceCollection}?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border-l-4 border-teal-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Structured Methodology</h3>
              <p className="text-gray-700">
                These tools operationalize {BRAND.names.framework}, providing clear structure for moving 
                from listening to accountable action.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border-l-4 border-orange-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Practical Application</h3>
              <p className="text-gray-700">
                Designed for real organizational work, not theoretical exercises. These resources support 
                leaders working through actual challenges.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border-l-4 border-teal-700">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Built on Experience</h3>
              <p className="text-gray-700">
                Developed from organizational advisory practice, these tools reflect what works in 
                real implementation contexts.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border-l-4 border-teal-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Accountability Focus</h3>
              <p className="text-gray-700">
                Each resource emphasizes ownership, timelines, and follow-through—the elements that 
                separate intention from organizational change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Questions About {BRAND.names.resourceCollection}?
          </h2>
          <p className="text-xl text-teal-50 mb-10">
            Contact {BRAND.names.company} to learn more about these resources and how they support 
            organizational work.
          </p>
          <a href="/contact" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-10 py-4 rounded-lg transition-all text-lg">
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
