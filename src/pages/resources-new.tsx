import { BRAND } from '../lib/brand'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export function ResourcesPageNew() {
  return (
    <>
      <title>Resources | {BRAND.names.company}</title>
      
      <Navigation />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-lli-teal to-lli-teal-dark text-white py-20">
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
                <div className="bg-teal-50 rounded-2xl p-12 shadow-xl border-l-8 border-lli-teal">
                  <div className="text-center">
                    <div className="w-32 h-40 bg-lli-teal rounded-lg mx-auto mb-6 flex items-center justify-center shadow-2xl">
                      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <p className="text-sm font-bold text-lli-teal mb-2">PROFESSIONAL MOCKUP</p>
                    <p className="text-xs text-gray-500">Product preview coming soon</p>
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="inline-block bg-lli-teal text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
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
                    <svg className="w-5 h-5 text-lli-teal mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Comprehensive working system
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-lli-teal mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Digital format (PDF)
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-lli-teal mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Structured worksheets & tools
                  </div>
                </div>
                <div className="flex gap-4">
                  <a href="#preview-workbook" className="inline-block border-2 border-lli-teal text-lli-teal-dark hover:bg-teal-50 font-semibold px-6 py-3 rounded-lg transition-all">
                    Preview Inside
                  </a>
                  <a href="/contact" className="inline-block bg-lli-orange hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition-all">
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
                <div className="inline-block bg-lli-orange text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
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
                    <svg className="w-5 h-5 text-lli-orange mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Framework guidance & context
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-lli-orange mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Digital format (PDF)
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-lli-orange mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Application instructions
                  </div>
                </div>
                <div className="flex gap-4">
                  <a href="#preview-guide" className="inline-block border-2 border-lli-orange text-orange-700 hover:bg-orange-50 font-semibold px-6 py-3 rounded-lg transition-all">
                    Preview Inside
                  </a>
                  <a href="/contact" className="inline-block bg-lli-orange hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition-all">
                    Purchase
                  </a>
                </div>
              </div>
              
              <div>
                <div className="bg-orange-50 rounded-2xl p-12 shadow-xl border-l-8 border-lli-orange">
                  <div className="text-center">
                    <div className="w-32 h-40 bg-lli-orange rounded-lg mx-auto mb-6 flex items-center justify-center shadow-2xl">
                      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <p className="text-sm font-bold text-lli-orange mb-2">PROFESSIONAL MOCKUP</p>
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
                <div className="bg-teal-50 rounded-2xl p-12 shadow-xl border-l-8 border-lli-teal-dark">
                  <div className="text-center">
                    <div className="w-32 h-40 bg-lli-teal-dark rounded-lg mx-auto mb-6 flex items-center justify-center shadow-2xl">
                      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <p className="text-sm font-bold text-lli-teal-dark mb-2">PROFESSIONAL MOCKUP</p>
                    <p className="text-xs text-gray-500">Product preview coming soon</p>
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="inline-block bg-lli-teal-dark text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
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
                    <svg className="w-5 h-5 text-lli-teal-dark mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Accountability tracking system
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-lli-teal-dark mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Digital format (PDF)
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-lli-teal-dark mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Implementation planning tools
                  </div>
                </div>
                <div className="flex gap-4">
                  <a href="#preview-planner" className="inline-block border-2 border-lli-teal-dark text-lli-teal-dark hover:bg-teal-50 font-semibold px-6 py-3 rounded-lg transition-all">
                    Preview Inside
                  </a>
                  <a href="/contact" className="inline-block bg-lli-orange hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition-all">
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
            <div className="bg-white rounded-xl p-8 border-l-4 border-lli-teal">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Structured Methodology</h3>
              <p className="text-gray-700">
                These tools operationalize {BRAND.names.framework}, providing clear structure for moving 
                from listening to accountable action.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border-l-4 border-lli-orange">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Practical Application</h3>
              <p className="text-gray-700">
                Designed for real organizational work, not theoretical exercises. These resources support 
                leaders working through actual challenges.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border-l-4 border-lli-teal-dark">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Built on Experience</h3>
              <p className="text-gray-700">
                Developed from organizational advisory practice, these tools reflect what works in 
                real implementation contexts.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border-l-4 border-lli-teal">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Accountability Focus</h3>
              <p className="text-gray-700">
                Each resource emphasizes ownership, timelines, and follow-through—the elements that 
                separate intention from organizational change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Previews */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Workbook Preview */}
          <div id="preview-workbook" className="mb-32">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              A Look Inside the {BRAND.names.workbook}
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Preview selected pages showing the structured methodology, worksheets, and planning tools.
            </p>
            
            {/* Carousel placeholder */}
            <div className="bg-gray-50 rounded-2xl p-12 border-2 border-dashed border-gray-300">
              <div className="space-y-6">
                {/* Cover */}
                <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-lli-teal">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-lli-teal uppercase">Cover</span>
                    <span className="text-xs text-gray-500">Not counted in interior samples</span>
                  </div>
                  <div className="aspect-[8.5/11] bg-gradient-to-br from-lli-teal to-lli-teal-dark rounded-lg flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <div className="text-6xl mb-4">📚</div>
                      <p className="text-xl font-bold mb-2">{BRAND.names.workbook}</p>
                      <p className="text-sm opacity-80">Professional cover image placeholder</p>
                    </div>
                  </div>
                </div>
                
                {/* Sample 01: Framework Overview */}
                <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-lli-teal">
                  <div className="mb-4">
                    <span className="text-sm font-bold text-lli-teal uppercase">Sample 01 of 5</span>
                    <h3 className="text-lg font-bold text-gray-900 mt-2">{BRAND.names.framework} Overview</h3>
                    <p className="text-sm text-gray-600 mt-1">Introduces the LISTEN™ → LEARN™ → IMPLEMENT™ methodology</p>
                  </div>
                  <div className="aspect-[8.5/11] bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500 p-8">
                      <div className="text-5xl mb-4">📋</div>
                      <p className="font-semibold mb-2">Framework Overview Page</p>
                      <p className="text-sm">Actual product page image will be inserted here</p>
                    </div>
                  </div>
                </div>
                
                {/* Sample 02: What We Heard Capture Sheet */}
                <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-lli-teal">
                  <div className="mb-4">
                    <span className="text-sm font-bold text-lli-teal uppercase">Sample 02 of 5</span>
                    <h3 className="text-lg font-bold text-gray-900 mt-2">What We Heard Capture Sheet</h3>
                    <p className="text-sm text-gray-600 mt-1">{BRAND.names.listen} worksheet: captures what was said, who raised it, frequency, impact, themes</p>
                  </div>
                  <div className="aspect-[8.5/11] bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500 p-8">
                      <div className="text-5xl mb-4">👂</div>
                      <p className="font-semibold mb-2">LISTEN™ Worksheet</p>
                      <p className="text-sm">Actual product page image will be inserted here</p>
                    </div>
                  </div>
                </div>
                
                {/* Sample 03: Evidence vs. Assumption Grid */}
                <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-lli-orange">
                  <div className="mb-4">
                    <span className="text-sm font-bold text-lli-orange uppercase">Sample 03 of 5</span>
                    <h3 className="text-lg font-bold text-gray-900 mt-2">Evidence vs. Assumption Grid</h3>
                    <p className="text-sm text-gray-600 mt-1">{BRAND.names.learn} worksheet: distinguishes claims, evidence, sources, confidence levels</p>
                  </div>
                  <div className="aspect-[8.5/11] bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500 p-8">
                      <div className="text-5xl mb-4">🔍</div>
                      <p className="font-semibold mb-2">LEARN™ Worksheet</p>
                      <p className="text-sm">Actual product page image will be inserted here</p>
                    </div>
                  </div>
                </div>
                
                {/* Sample 04: Insight-to-Action Matrix (PRIORITY SAMPLE) */}
                <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-lli-orange">
                  <div className="mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-lli-orange uppercase">Sample 04 of 5</span>
                      <span className="text-xs bg-lli-orange text-white px-2 py-1 rounded-full font-bold">PRIORITY SAMPLE</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mt-2">Insight-to-Action Matrix</h3>
                    <p className="text-sm text-gray-600 mt-1">{BRAND.names.implement} worksheet: What We Heard | What We Learned | Decision | Action | Owner | Due</p>
                  </div>
                  <div className="aspect-[8.5/11] bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500 p-8">
                      <div className="text-5xl mb-4">⚡</div>
                      <p className="font-semibold mb-2">IMPLEMENT™ Worksheet</p>
                      <p className="text-sm">Actual product page image will be inserted here</p>
                    </div>
                  </div>
                </div>
                
                {/* Sample 05: Action & Accountability Tracker */}
                <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-lli-teal-dark">
                  <div className="mb-4">
                    <span className="text-sm font-bold text-lli-teal-dark uppercase">Sample 05 of 5</span>
                    <h3 className="text-lg font-bold text-gray-900 mt-2">Action & Accountability Tracker</h3>
                    <p className="text-sm text-gray-600 mt-1">Tracks commitments, owners, timelines, status, barriers, evidence of completion</p>
                  </div>
                  <div className="aspect-[8.5/11] bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500 p-8">
                      <div className="text-5xl mb-4">✓</div>
                      <p className="font-semibold mb-2">Accountability Tool</p>
                      <p className="text-sm">Actual product page image will be inserted here</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600 mb-4">
                  <span className="font-semibold">Note:</span> These previews establish value without substituting for the complete product.
                </p>
                <a href="/contact" className="inline-block bg-lli-orange hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-all">
                  Purchase {BRAND.names.workbook}
                </a>
              </div>
            </div>
          </div>
          
          {/* Companion Guide Preview */}
          <div id="preview-guide" className="mb-32">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              A Look Inside the {BRAND.names.companionGuide}
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Preview selected pages showing instructional guidance and methodology behind the framework.
            </p>
            
            {/* Carousel placeholder */}
            <div className="bg-gray-50 rounded-2xl p-12 border-2 border-dashed border-gray-300">
              <div className="space-y-6">
                {/* Cover */}
                <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-lli-orange">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-lli-orange uppercase">Cover</span>
                    <span className="text-xs text-gray-500">Not counted in interior samples</span>
                  </div>
                  <div className="aspect-[8.5/11] bg-gradient-to-br from-lli-orange to-orange-700 rounded-lg flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <div className="text-6xl mb-4">📖</div>
                      <p className="text-xl font-bold mb-2">{BRAND.names.companionGuide}</p>
                      <p className="text-sm opacity-80">Professional cover image placeholder</p>
                    </div>
                  </div>
                </div>
                
                {/* Sample 01: About the LLI Process */}
                <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-lli-orange">
                  <div className="mb-4">
                    <span className="text-sm font-bold text-lli-orange uppercase">Sample 01 of 4</span>
                    <h3 className="text-lg font-bold text-gray-900 mt-2">About the {BRAND.names.lli} Process</h3>
                    <p className="text-sm text-gray-600 mt-1">Explains the complete relationship among LISTEN™, LEARN™, IMPLEMENT™, and accountability</p>
                  </div>
                  <div className="aspect-[8.5/11] bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500 p-8">
                      <div className="text-5xl mb-4">💡</div>
                      <p className="font-semibold mb-2">Philosophy & Process</p>
                      <p className="text-sm">Actual product page image will be inserted here</p>
                    </div>
                  </div>
                </div>
                
                {/* Sample 02: LISTEN Instructional Page */}
                <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-lli-orange">
                  <div className="mb-4">
                    <span className="text-sm font-bold text-lli-orange uppercase">Sample 02 of 4</span>
                    <h3 className="text-lg font-bold text-gray-900 mt-2">{BRAND.names.listen} Instructional Page</h3>
                    <p className="text-sm text-gray-600 mt-1">Explains intentional listening, purpose, access, structure, accurate capture, separation from interpretation</p>
                  </div>
                  <div className="aspect-[8.5/11] bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500 p-8">
                      <div className="text-5xl mb-4">👂</div>
                      <p className="font-semibold mb-2">LISTEN™ Instruction</p>
                      <p className="text-sm">Actual product page image will be inserted here</p>
                    </div>
                  </div>
                </div>
                
                {/* Sample 03: LEARN Instructional Page */}
                <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-lli-orange">
                  <div className="mb-4">
                    <span className="text-sm font-bold text-lli-orange uppercase">Sample 03 of 4</span>
                    <h3 className="text-lg font-bold text-gray-900 mt-2">{BRAND.names.learn} Instructional Page</h3>
                    <p className="text-sm text-gray-600 mt-1">Addresses patterns, evidence, root causes, barriers, assumptions, and uncertainty</p>
                    <p className="text-sm italic text-gray-700 mt-2 font-medium">"Frequency is a signal, not a verdict."</p>
                  </div>
                  <div className="aspect-[8.5/11] bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500 p-8">
                      <div className="text-5xl mb-4">🔍</div>
                      <p className="font-semibold mb-2">LEARN™ Instruction</p>
                      <p className="text-sm">Actual product page image will be inserted here</p>
                    </div>
                  </div>
                </div>
                
                {/* Sample 04: LLI Quality Check + Standard */}
                <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-lli-teal">
                  <div className="mb-4">
                    <span className="text-sm font-bold text-lli-teal uppercase">Sample 04 of 4</span>
                    <h3 className="text-lg font-bold text-gray-900 mt-2">{BRAND.names.lli} Quality Check + Standard</h3>
                    <p className="text-sm text-gray-600 mt-1">Defines the LLI™ process standard</p>
                    <p className="text-sm font-semibold text-gray-800 mt-2">
                      Intentional | Authentic | Transparent | Actionable | Accountable
                    </p>
                  </div>
                  <div className="aspect-[8.5/11] bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500 p-8">
                      <div className="text-5xl mb-4">⭐</div>
                      <p className="font-semibold mb-2">Quality Standard</p>
                      <p className="text-sm">Actual product page image will be inserted here</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600 mb-4">
                  <span className="font-semibold">Note:</span> Guide preview emphasizes instruction and methodology, while Workbook emphasizes tools and application.
                </p>
                <a href="/contact" className="inline-block bg-lli-orange hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-all">
                  Purchase {BRAND.names.companionGuide}
                </a>
              </div>
            </div>
          </div>
          
          {/* Planner Preview */}
          <div id="preview-planner" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              A Look Inside the {BRAND.names.planner}
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Preview selected pages showing accountability and implementation tracking tools.
            </p>
            
            {/* Carousel placeholder */}
            <div className="bg-gray-50 rounded-2xl p-12 border-2 border-dashed border-gray-300">
              <div className="space-y-6">
                {/* Cover */}
                <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-lli-teal-dark">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-lli-teal-dark uppercase">Cover</span>
                    <span className="text-xs text-gray-500">Not counted in interior samples</span>
                  </div>
                  <div className="aspect-[8.5/11] bg-gradient-to-br from-lli-teal-dark to-lli-teal rounded-lg flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <div className="text-6xl mb-4">📅</div>
                      <p className="text-xl font-bold mb-2">{BRAND.names.planner}</p>
                      <p className="text-sm opacity-80">Professional cover image placeholder</p>
                    </div>
                  </div>
                </div>
                
                {/* Sample 01: Priority Planning */}
                <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-lli-teal-dark">
                  <div className="mb-4">
                    <span className="text-sm font-bold text-lli-teal-dark uppercase">Sample 01 of 3</span>
                    <h3 className="text-lg font-bold text-gray-900 mt-2">Priority Planning</h3>
                    <p className="text-sm text-gray-600 mt-1">Structured planning for organizational priorities and decision-making</p>
                  </div>
                  <div className="aspect-[8.5/11] bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500 p-8">
                      <div className="text-5xl mb-4">🎯</div>
                      <p className="font-semibold mb-2">Priority Planning Tool</p>
                      <p className="text-sm">Actual product page image will be inserted here</p>
                    </div>
                  </div>
                </div>
                
                {/* Sample 02: Ownership + Timeline */}
                <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-lli-teal-dark">
                  <div className="mb-4">
                    <span className="text-sm font-bold text-lli-teal-dark uppercase">Sample 02 of 3</span>
                    <h3 className="text-lg font-bold text-gray-900 mt-2">Ownership + Timeline</h3>
                    <p className="text-sm text-gray-600 mt-1">Assigns clear ownership and realistic timelines for implementation</p>
                  </div>
                  <div className="aspect-[8.5/11] bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500 p-8">
                      <div className="text-5xl mb-4">📋</div>
                      <p className="font-semibold mb-2">Ownership Tool</p>
                      <p className="text-sm">Actual product page image will be inserted here</p>
                    </div>
                  </div>
                </div>
                
                {/* Sample 03: Accountability / Progress Check-In */}
                <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-lli-teal-dark">
                  <div className="mb-4">
                    <span className="text-sm font-bold text-lli-teal-dark uppercase">Sample 03 of 3</span>
                    <h3 className="text-lg font-bold text-gray-900 mt-2">Accountability / Progress Check-In</h3>
                    <p className="text-sm text-gray-600 mt-1">Tracks progress, identifies barriers, maintains momentum through follow-through</p>
                  </div>
                  <div className="aspect-[8.5/11] bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500 p-8">
                      <div className="text-5xl mb-4">✓</div>
                      <p className="font-semibold mb-2">Progress Check-In Tool</p>
                      <p className="text-sm">Actual product page image will be inserted here</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600 mb-4">
                  <span className="font-semibold">Note:</span> Do not over-preview the Planner. These samples establish the accountability focus.
                </p>
                <a href="/contact" className="inline-block bg-lli-orange hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-all">
                  Purchase {BRAND.names.planner}
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-lli-teal to-lli-teal-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Questions About {BRAND.names.resourceCollection}?
          </h2>
          <p className="text-xl text-teal-50 mb-10">
            Contact {BRAND.names.company} to learn more about these resources and how they support 
            organizational work.
          </p>
          <a href="/contact" className="inline-block bg-lli-orange hover:bg-orange-700 text-white font-semibold px-10 py-4 rounded-lg transition-all text-lg">
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
