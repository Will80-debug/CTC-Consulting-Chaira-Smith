import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export const ServicesPage = () => {
  const logoUrl = "https://page.gensparksite.com/v1/base64_upload/76289e59443ab0b47d1ab4851999fbe6"
  const chiaraPhotoUrl = "https://page.gensparksite.com/v1/base64_upload/e6822a23cff671668f780475724b62e7"
  // Strategic planning consultation image - unique to services page
  const strategicPlanningImg = "https://www.genspark.ai/api/files/s/MtukJf3v?cache_control=3600"
  
  // Additional professional images for visual appeal
  const teamMeetingImg = "https://sspark.genspark.ai/cfimages?u1=p3451G3ZEplqSVU1hpWslMBIRhknlX84CsLjYH3SkznuTIrlkxpyLAuCwkmtMFXbwhpEvre9YJ3e99PmcLuDRrpBMd2vgWUNT%2BvkZwb2HqDUbZe%2FfwNbySP593IfQLzHOX%2FP1WA3WLrjXpp%2FnLigzhI%2B5CHarzSTteaGCdJuAw7caVHr%2FR8IrzhY3HPD5eqAoLqHXC9oAtaaRBQ4DxSo3yzd1vrQGBSFuJKrYw%3D%3D&u2=r5lJXZBmG11V2fj%2B&width=2560"
  const diversityImg = "https://sspark.genspark.ai/cfimages?u1=mBzrm%2FITxbifSCnl6VSi0VBL8jW7BYLARSnPGIKDFLwD%2FztAX0QY59OB%2BpFGhr3%2BB1QFUtKFUdxUJ2YiK3N1k8HIw6w9q6rfDEPoTVb9HCSRcZUqllhE5XVLSQUkJnzqsl%2BDhdoCuljW&u2=AJs5ASJIXhyWd%2FHw&width=2560"
  const leadershipImg = "https://sspark.genspark.ai/cfimages?u1=ghImmXMbKrGBMxYuscEj017YLMrF0DuubmxINuyW3IRDyr7yWiBRs7RVJ1n4aDLhNcPJo7gV7gzv8zDCMDIWIhu%2BIXi%2FBTIEIfDfaGUQ5kPejVntVrPMHks0xMBbNPeZRMX41IgOaDi2QFodGwkIOOAsYXw2vpMdhbYvKMsTc8bXCmCVH%2BW2dVHsh0601%2BVtEvftdaQ7ixSB3FDhc9NXrZUy3MBL&u2=DRJBwiDrnjEHDgQ%2B&width=2560"
  const confidentLeaderImg = "https://sspark.genspark.ai/cfimages?u1=libfD%2BLiDFBvnWLRicgCLgdV4Xf5%2B8x7ENBS1SbKL4u3KHw4O25%2Fc%2By695hEukTSkJVOPhIBtsm5x0PYfdOBGYc%2BY8RK40ErfWDTwDrddbgFznxJjD%2BUxM%2Bf%2Bft2nQMtOCKUM2V%2F%2F9%2BIMXLPAttKVX2dQhwBm5FHBtlUIuC8qudpi8BMId3mwyR3Y%2FWxhkXkC443R4fS3FdZ1L3zGTuvpKHEFG0xChuzpwB7jWbMxF9eXX%2FG1iexpa6xMTbk%2FsTcRJrwcNBTOgoqJLmjQPbBsZlfe1pyFA4V001LZyj2REGI8HQnnvupsAJfVZk%2BXZCiInzQV65mW5ziXLHY7yQocdLmhaFv4idK7IsqtoPgitvJoxT%2BvOLBFjDT%2FUNC&u2=XxZr0F61XXEU8HKB&width=2560"
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navigation />

      {/* Hero Header Section with Professional Image */}
      <section className="relative bg-gradient-to-br from-lli-black via-gray-800 to-lli-black py-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={confidentLeaderImg} 
            alt="Professional Leadership Team" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-lli-black/80 via-gray-900/70 to-lli-black/80"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Structured Support for Complex Leadership Work
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Boutique facilitation and advisory engagements designed to support clarity, alignment, and responsible planning.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive LLI Framework Journey */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The Listen™ Learn™ Implement™ Framework
              </h3>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                The framework guides process. Outcomes depend on engagement and follow-through.
              </p>
            </div>

            {/* Three Framework Phases */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Listen Card */}
              <div className="bg-gradient-to-br from-lli-orange/5 to-white border-2 border-lli-orange/20 rounded-2xl p-8">
                <div className="bg-gradient-to-br from-lli-orange to-lli-orange-dark text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <i className="fas fa-ear-listen text-3xl"></i>
                </div>
                <h4 className="text-2xl font-bold text-lli-orange mb-4 text-center">Listen™</h4>
                <p className="text-gray-700 text-center leading-relaxed">
                  Create space for meaningful stakeholder and leadership input.
                </p>
              </div>

              {/* Learn Card */}
              <div className="bg-gradient-to-br from-lli-teal/5 to-white border-2 border-lli-teal/20 rounded-2xl p-8">
                <div className="bg-gradient-to-br from-lli-teal to-lli-teal-dark text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <i className="fas fa-lightbulb text-3xl"></i>
                </div>
                <h4 className="text-2xl font-bold text-lli-teal mb-4 text-center">Learn™</h4>
                <p className="text-gray-700 text-center leading-relaxed">
                  Identify themes, constraints, and readiness factors before committing resources.
                </p>
              </div>

              {/* Implement Card */}
              <div className="bg-gradient-to-br from-lli-orange/5 to-white border-2 border-lli-orange/20 rounded-2xl p-8">
                <div className="bg-gradient-to-br from-lli-orange to-lli-orange-dark text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <i className="fas fa-tasks text-3xl"></i>
                </div>
                <h4 className="text-2xl font-bold text-lli-orange mb-4 text-center">Implement™</h4>
                <p className="text-gray-700 text-center leading-relaxed">
                  Support clear next steps aligned with leadership capacity and timelines.
                </p>
              </div>
            </div>

            {/* Removed Expandable Content - keeping structure minimal */}
            <div style={{ display: 'none' }}>
              {/* Expandable Content Areas */}
              {/* Listen Details */}
              <div id="framework-listen" className="hidden mt-8 bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border-2 border-lli-orange shadow-xl">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-xl font-bold text-lli-orange mb-4 flex items-center">
                      <i className="fas fa-exclamation-triangle mr-3"></i>
                      Pain Points We Address
                    </h5>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <i className="fas fa-circle text-lli-orange text-xs mt-2 mr-3"></i>
                        <span className="text-gray-700">Leaders feel disconnected from their teams' real experiences</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-circle text-lli-orange text-xs mt-2 mr-3"></i>
                        <span className="text-gray-700">Culture issues hidden beneath surface-level surveys</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-circle text-lli-orange text-xs mt-2 mr-3"></i>
                        <span className="text-gray-700">DEI efforts lack authentic employee input</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-xl font-bold text-lli-orange mb-4 flex items-center">
                      <i className="fas fa-tools mr-3"></i>
                      What We Do in This Phase
                    </h5>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <i className="fas fa-check text-lli-teal text-lg mt-1 mr-3"></i>
                        <span className="text-gray-700">Conduct deep listening sessions with diverse voices</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-lli-teal text-lg mt-1 mr-3"></i>
                        <span className="text-gray-700">Map organizational culture patterns and blind spots</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-lli-teal text-lg mt-1 mr-3"></i>
                        <span className="text-gray-700">Identify root causes, not just symptoms</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 bg-white rounded-xl p-6 border-l-4 border-lli-orange">
                  <p className="text-gray-700 italic text-lg">
                    <i className="fas fa-quote-left text-lli-orange mr-2"></i>
                    "For the first time, our leadership team heard what employees were really experiencing. That honesty changed everything."
                    <i className="fas fa-quote-right text-lli-orange ml-2"></i>
                  </p>
                  <p className="text-sm text-gray-500 mt-2">— VP of People, Tech Company (500+ employees)</p>
                </div>
              </div>

              {/* Learn Details */}
              <div id="framework-learn" className="hidden mt-8 bg-gradient-to-br from-teal-50 to-white rounded-2xl p-8 border-2 border-lli-teal shadow-xl">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-xl font-bold text-lli-teal mb-4 flex items-center">
                      <i className="fas fa-exclamation-triangle mr-3"></i>
                      Pain Points We Address
                    </h5>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <i className="fas fa-circle text-lli-teal text-xs mt-2 mr-3"></i>
                        <span className="text-gray-700">Leadership unsure how to move from data to action</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-circle text-lli-teal text-xs mt-2 mr-3"></i>
                        <span className="text-gray-700">Fear of saying or doing the "wrong thing" creates paralysis</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-circle text-lli-teal text-xs mt-2 mr-3"></i>
                        <span className="text-gray-700">Equity strategies feel generic, not customized</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-xl font-bold text-lli-teal mb-4 flex items-center">
                      <i className="fas fa-tools mr-3"></i>
                      What We Do in This Phase
                    </h5>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <i className="fas fa-check text-lli-orange text-lg mt-1 mr-3"></i>
                        <span className="text-gray-700">Design equity-centered strategies for your context</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-lli-orange text-lg mt-1 mr-3"></i>
                        <span className="text-gray-700">Build leadership courage to tackle difficult conversations</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-lli-orange text-lg mt-1 mr-3"></i>
                        <span className="text-gray-700">Create actionable roadmaps with clear milestones</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 bg-white rounded-xl p-6 border-l-4 border-lli-teal">
                  <p className="text-gray-700 italic text-lg">
                    <i className="fas fa-quote-left text-lli-teal mr-2"></i>
                    "LLI gave us a framework that felt doable, not overwhelming. We finally had clarity on where to start."
                    <i className="fas fa-quote-right text-lli-teal ml-2"></i>
                  </p>
                  <p className="text-sm text-gray-500 mt-2">— CEO, Healthcare Organization</p>
                </div>
              </div>

              {/* Implement Details */}
              <div id="framework-implement" className="hidden mt-8 bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border-2 border-lli-orange shadow-xl">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-xl font-bold text-lli-orange mb-4 flex items-center">
                      <i className="fas fa-exclamation-triangle mr-3"></i>
                      Pain Points We Address
                    </h5>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <i className="fas fa-circle text-lli-orange text-xs mt-2 mr-3"></i>
                        <span className="text-gray-700">Great plans that never get executed</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-circle text-lli-orange text-xs mt-2 mr-3"></i>
                        <span className="text-gray-700">Resistance to change from middle management</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-circle text-lli-orange text-xs mt-2 mr-3"></i>
                        <span className="text-gray-700">No accountability or measurement of progress</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-xl font-bold text-lli-orange mb-4 flex items-center">
                      <i className="fas fa-tools mr-3"></i>
                      What We Do in This Phase
                    </h5>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <i className="fas fa-check text-lli-teal text-lg mt-1 mr-3"></i>
                        <span className="text-gray-700">Execute coaching and workshops that drive behavior change</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-lli-teal text-lg mt-1 mr-3"></i>
                        <span className="text-gray-700">Build accountability structures and success metrics</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-lli-teal text-lg mt-1 mr-3"></i>
                        <span className="text-gray-700">Sustain transformation with ongoing support</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 bg-white rounded-xl p-6 border-l-4 border-lli-orange">
                  <p className="text-gray-700 italic text-lg">
                    <i className="fas fa-quote-left text-lli-orange mr-2"></i>
                    "Within 6 months, engagement scores jumped 23%. Our culture went from talk to action."
                    <i className="fas fa-quote-right text-lli-orange ml-2"></i>
                  </p>
                  <p className="text-sm text-gray-500 mt-2">— Chief Diversity Officer, Financial Services Firm</p>
                </div>
              </div>
            </div>

            {/* Mini "Choose Your Entry Point" Widget */}
            <div className="bg-gradient-to-br from-gray-50 to-teal-50 rounded-2xl p-8 border-2 border-lli-teal">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Where Should We Start With You?
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <button 
                  onclick="scrollToService('leadership-coaching')"
                  className="group bg-white hover:bg-lli-teal hover:text-white border-2 border-lli-teal text-lli-teal font-bold py-4 px-6 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl"
                >
                  <i className="fas fa-user-tie text-2xl mb-2 block"></i>
                  <span className="text-lg block">Leadership Coaching</span>
                  <span className="text-xs opacity-75 block mt-1">1:1 & Group Sessions</span>
                </button>
                
                <button 
                  onclick="scrollToService('culture-assessment')"
                  className="group bg-white hover:bg-lli-orange hover:text-white border-2 border-lli-orange text-lli-orange font-bold py-4 px-6 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl"
                >
                  <i className="fas fa-clipboard-check text-2xl mb-2 block"></i>
                  <span className="text-lg block">Culture Assessment</span>
                  <span className="text-xs opacity-75 block mt-1">Diagnostic & Strategy</span>
                </button>
                
                <button 
                  onclick="scrollToService('retreat-workshop')"
                  className="group bg-white hover:bg-lli-teal hover:text-white border-2 border-lli-teal text-lli-teal font-bold py-4 px-6 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl"
                >
                  <i className="fas fa-users text-2xl mb-2 block"></i>
                  <span className="text-lg block">Retreat / Workshop</span>
                  <span className="text-xs opacity-75 block mt-1">Team Experiences</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offerings */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Service 1 */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Facilitated Strategy Sessions
            </h3>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Designed for executive teams, boards, and cross-functional groups seeking alignment and direction.
            </p>
            
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Focus areas may include:</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <div className="bg-lli-teal/10 w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">Priority clarification</span>
              </li>
              <li className="flex items-start">
                <div className="bg-lli-teal/10 w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">Risk identification</span>
              </li>
              <li className="flex items-start">
                <div className="bg-lli-teal/10 w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">Stakeholder mapping</span>
              </li>
              <li className="flex items-start">
                <div className="bg-lli-teal/10 w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">Immediate next-step definition</span>
              </li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Workshops & Learning Sessions
            </h3>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Interactive sessions that create structure around complex leadership conversations.
            </p>
            
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Topics may include:</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <div className="bg-lli-orange/10 w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">Leadership alignment</span>
              </li>
              <li className="flex items-start">
                <div className="bg-lli-orange/10 w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">Organizational trust</span>
              </li>
              <li className="flex items-start">
                <div className="bg-lli-orange/10 w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">Psychological safety</span>
              </li>
              <li className="flex items-start">
                <div className="bg-lli-orange/10 w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">Change navigation</span>
              </li>
            </ul>
            <p className="text-gray-600 italic">Workshops are facilitative and educational in nature.</p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Advisory & Implementation Planning Support
            </h3>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Short-term advisory support focused on:
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <div className="bg-lli-teal/10 w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">Reviewing strategies in development</span>
              </li>
              <li className="flex items-start">
                <div className="bg-lli-teal/10 w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">Strengthening sequencing and ownership</span>
              </li>
              <li className="flex items-start">
                <div className="bg-lli-teal/10 w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">Preparing for implementation</span>
              </li>
            </ul>
            <p className="text-gray-600 italic">Advisory support does not include operational execution.</p>
          </div>

          {/* Engagement Structure */}
          <div className="bg-gradient-to-br from-lli-teal/10 to-white border-2 border-lli-teal/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Engagement Structure
            </h3>
            <p className="text-xl text-gray-700 mb-6 text-center leading-relaxed">
              Every engagement begins with a discovery call to determine:
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-lli-teal text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-list-check text-2xl"></i>
                </div>
                <p className="font-semibold text-gray-900">Scope</p>
              </div>
              <div className="text-center">
                <div className="bg-lli-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-clock text-2xl"></i>
                </div>
                <p className="font-semibold text-gray-900">Timing</p>
              </div>
              <div className="text-center">
                <div className="bg-lli-teal text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-handshake text-2xl"></i>
                </div>
                <p className="font-semibold text-gray-900">Alignment</p>
              </div>
              <div className="text-center">
                <div className="bg-lli-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-gauge-high text-2xl"></i>
                </div>
                <p className="font-semibold text-gray-900">Capacity</p>
              </div>
            </div>

            <p className="text-center text-gray-600 mb-8 italic">
              Long-term engagements are considered selectively.
            </p>

            <div className="flex justify-center">
              <a 
                href="/contact" 
                className="inline-block bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white px-10 py-5 rounded-xl font-bold text-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <i className="fas fa-phone mr-3"></i>
                Schedule a Discovery Call
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Old content hidden */}
      <div style={{ display: 'none' }}>
      {/* Interactive Hero Section - Above the Fold */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Headline + Copy + Interactive CTAs */}
            <div>
              {/* Overline */}
              <div className="mb-4">
                <p className="text-sm font-semibold text-lli-teal uppercase tracking-wide">
                  LLI Consulting Group
                </p>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your Leadership.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lli-orange to-lli-teal">
                  Transform Your Culture.
                </span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
                Equity-centered coaching and culture change for leaders who are ready to move beyond performative statements and do the real work.
              </p>
              
              {/* Support Line */}
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Our <span className="font-bold text-lli-teal">LLI Framework™</span> helps you Listen, Learn, and Implement with courage, clarity, and measurable results.
              </p>
              
              {/* Interactive CTA Buttons */}
              <div className="flex flex-col gap-6 mb-12">
                {/* Primary CTA */}
                <div>
                  <button 
                    onclick="openAssessmentModal()"
                    className="group bg-gradient-to-r from-lli-teal to-lli-teal-dark hover:from-lli-teal-dark hover:to-lli-teal text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3 w-full sm:w-auto"
                  >
                    <i className="fas fa-clipboard-check text-xl"></i>
                    <span className="text-lg">Take the 3-Minute Culture Check</span>
                    <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                  </button>
                  <p className="text-sm text-gray-500 mt-2 ml-1">
                    No obligation. Instant snapshot of your culture's readiness.
                  </p>
                </div>
                
                {/* Secondary CTA */}
                <div>
                  <button 
                    onclick="openFitCheckModal()"
                    className="group bg-gradient-to-r from-lli-orange to-lli-orange-dark hover:from-lli-orange-dark hover:to-lli-orange text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3 w-full sm:w-auto"
                  >
                    <i className="fas fa-calendar-check text-xl"></i>
                    <span className="text-lg">Book a Strategy Call</span>
                    <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                  </button>
                  <p className="text-sm text-gray-500 mt-2 ml-1">
                    Talk directly with an LLI coach about your top challenge.
                  </p>
                </div>
              </div>
              
              {/* Real, Believable Stats with Count-up Animation */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-lli-teal mb-2">
                    <span className="stat-number" data-target="85">0</span>
                  </div>
                  <p className="text-sm text-gray-600">Avg. engagement improvement</p>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-lli-orange mb-2">
                    <span className="stat-number" data-target="500">0</span>
                  </div>
                  <p className="text-sm text-gray-600">Leaders coached</p>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-lli-teal mb-2">
                    <span className="stat-number" data-target="98">0</span>
                  </div>
                  <p className="text-sm text-gray-600">Client renewal rate</p>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-lli-orange mb-2">
                    <span className="stat-number" data-target="15">0</span>
                  </div>
                  <p className="text-sm text-gray-600">Years of expertise</p>
                </div>
              </div>
            </div>
            
            {/* Right: Strategic Planning Image */}
            <div className="relative">
              {/* Image Text Overlay Above */}
              <div className="mb-4">
                <p className="text-gray-700 font-medium text-center">
                  <i className="fas fa-handshake text-lli-teal mr-2"></i>
                  How the LLI Framework™ Transforms Organizations
                </p>
              </div>
              
              {/* Professional Consultation Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={strategicPlanningImg} 
                  alt="Strategic planning consultation - diverse team collaborating" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Image Caption Below */}
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600 leading-relaxed">
                  LLI Consulting Group helps leaders move from intent to impact through collaborative strategic planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Modal */}
      <div id="assessment-modal" className="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
          {/* Modal Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-900">Leadership Assessment</h3>
              <button onclick="closeAssessmentModal()" className="text-gray-400 hover:text-gray-600">
                <i className="fas fa-times text-2xl"></i>
              </button>
            </div>
            
            {/* Progress Bar */}
            <div className="flex items-center space-x-4">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div id="assessment-progress-bar" className="bg-gradient-to-r from-lli-teal to-lli-teal-dark h-2 rounded-full transition-all duration-500" style="width: 16.67%"></div>
              </div>
              <span id="assessment-progress-text" className="text-sm font-semibold text-gray-600 whitespace-nowrap">Step 1 of 6</span>
            </div>
          </div>
          
          {/* Modal Content */}
          <div className="p-8">
            {/* Step 1 */}
            <div id="assessment-step-1">
              <h4 className="text-xl font-bold text-gray-900 mb-6">What's your biggest pain point right now?</h4>
              <div className="grid gap-4">
                <div className="assessment-card p-6 border-2 border-gray-200 rounded-xl hover:border-lli-teal hover:bg-teal-50 cursor-pointer transition-all" onclick="selectAssessmentAnswer(1, 'engagement')">
                  <div className="flex items-start space-x-4">
                    <i className="fas fa-users text-3xl text-lli-teal"></i>
                    <div>
                      <h5 className="font-bold text-lg mb-2">Low Employee Engagement</h5>
                      <p className="text-gray-600">Teams feel disconnected, unmotivated, or burnt out</p>
                    </div>
                  </div>
                </div>
                
                <div className="assessment-card p-6 border-2 border-gray-200 rounded-xl hover:border-lli-teal hover:bg-teal-50 cursor-pointer transition-all" onclick="selectAssessmentAnswer(1, 'leadership')">
                  <div className="flex items-start space-x-4">
                    <i className="fas fa-chart-line text-3xl text-lli-orange"></i>
                    <div>
                      <h5 className="font-bold text-lg mb-2">Leadership Pipeline Gaps</h5>
                      <p className="text-gray-600">Struggling to develop next-generation leaders</p>
                    </div>
                  </div>
                </div>
                
                <div className="assessment-card p-6 border-2 border-gray-200 rounded-xl hover:border-lli-teal hover:bg-teal-50 cursor-pointer transition-all" onclick="selectAssessmentAnswer(1, 'dei')">
                  <div className="flex items-start space-x-4">
                    <i className="fas fa-balance-scale text-3xl text-lli-teal"></i>
                    <div>
                      <h5 className="font-bold text-lg mb-2">DEI Initiatives Stalling</h5>
                      <p className="text-gray-600">Equity efforts feel performative, not transformative</p>
                    </div>
                  </div>
                </div>
                
                <div className="assessment-card p-6 border-2 border-gray-200 rounded-xl hover:border-lli-teal hover:bg-teal-50 cursor-pointer transition-all" onclick="selectAssessmentAnswer(1, 'culture')">
                  <div className="flex items-start space-x-4">
                    <i className="fas fa-building text-3xl text-lli-orange"></i>
                    <div>
                      <h5 className="font-bold text-lg mb-2">Toxic/Unclear Culture</h5>
                      <p className="text-gray-600">Values don't match day-to-day behaviors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional steps would go here - simplified for space */}
            <div id="assessment-step-2" className="hidden">
              <h4 className="text-xl font-bold text-gray-900 mb-6">How urgent is this challenge?</h4>
              <div className="grid gap-4">
                <div className="assessment-card p-6 border-2 border-gray-200 rounded-xl hover:border-lli-teal hover:bg-teal-50 cursor-pointer transition-all" onclick="selectAssessmentAnswer(2, 'critical')">
                  <h5 className="font-bold text-lg mb-2">🚨 Critical - Need help now</h5>
                  <p className="text-gray-600">Impacting business results or retention immediately</p>
                </div>
                <div className="assessment-card p-6 border-2 border-gray-200 rounded-xl hover:border-lli-teal hover:bg-teal-50 cursor-pointer transition-all" onclick="selectAssessmentAnswer(2, 'soon')">
                  <h5 className="font-bold text-lg mb-2">⚡ Important - Within 3 months</h5>
                  <p className="text-gray-600">Need to address before it worsens</p>
                </div>
                <div className="assessment-card p-6 border-2 border-gray-200 rounded-xl hover:border-lli-teal hover:bg-teal-50 cursor-pointer transition-all" onclick="selectAssessmentAnswer(2, 'planning')">
                  <h5 className="font-bold text-lg mb-2">📅 Planning - Next 6-12 months</h5>
                  <p className="text-gray-600">Building strategy for future transformation</p>
                </div>
              </div>
            </div>
            
            {/* Steps 3-6 would continue similarly */}
            <div id="assessment-step-3" className="hidden">
              <h4 className="text-xl font-bold text-gray-900 mb-6">What's your organization size?</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="assessment-card p-6 border-2 border-gray-200 rounded-xl hover:border-lli-teal hover:bg-teal-50 cursor-pointer transition-all" onclick="selectAssessmentAnswer(3, 'small')">
                  <h5 className="font-bold text-lg mb-2">1-50 employees</h5>
                </div>
                <div className="assessment-card p-6 border-2 border-gray-200 rounded-xl hover:border-lli-teal hover:bg-teal-50 cursor-pointer transition-all" onclick="selectAssessmentAnswer(3, 'medium')">
                  <h5 className="font-bold text-lg mb-2">51-500 employees</h5>
                </div>
                <div className="assessment-card p-6 border-2 border-gray-200 rounded-xl hover:border-lli-teal hover:bg-teal-50 cursor-pointer transition-all" onclick="selectAssessmentAnswer(3, 'large')">
                  <h5 className="font-bold text-lg mb-2">501-5,000 employees</h5>
                </div>
                <div className="assessment-card p-6 border-2 border-gray-200 rounded-xl hover:border-lli-teal hover:bg-teal-50 cursor-pointer transition-all" onclick="selectAssessmentAnswer(3, 'enterprise')">
                  <h5 className="font-bold text-lg mb-2">5,000+ employees</h5>
                </div>
              </div>
            </div>
            
            <div id="assessment-step-4" className="hidden">
              <h4 className="text-xl font-bold text-gray-900 mb-6">What's your current DEI maturity?</h4>
              <div className="grid gap-4">
                <div className="assessment-card p-6 border-2 border-gray-200 rounded-xl hover:border-lli-teal hover:bg-teal-50 cursor-pointer transition-all" onclick="selectAssessmentAnswer(4, 'beginning')">
                  <h5 className="font-bold text-lg mb-2">Just Beginning</h5>
                  <p className="text-gray-600">Starting our DEI journey</p>
                </div>
                <div className="assessment-card p-6 border-2 border-gray-200 rounded-xl hover:border-lli-teal hover:bg-teal-50 cursor-pointer transition-all" onclick="selectAssessmentAnswer(4, 'developing')">
                  <h5 className="font-bold text-lg mb-2">Developing</h5>
                  <p className="text-gray-600">Have some initiatives, need deeper work</p>
                </div>
                <div className="assessment-card p-6 border-2 border-gray-200 rounded-xl hover:border-lli-teal hover:bg-teal-50 cursor-pointer transition-all" onclick="selectAssessmentAnswer(4, 'advanced')">
                  <h5 className="font-bold text-lg mb-2">Advanced</h5>
                  <p className="text-gray-600">Looking to take it to the next level</p>
                </div>
              </div>
            </div>
            
            <div id="assessment-step-5" className="hidden">
              <h4 className="text-xl font-bold text-gray-900 mb-6">What type of support interests you most?</h4>
              <div className="grid gap-4">
                <div className="assessment-card p-6 border-2 border-gray-200 rounded-xl hover:border-lli-teal hover:bg-teal-50 cursor-pointer transition-all" onclick="selectAssessmentAnswer(5, 'coaching')">
                  <h5 className="font-bold text-lg mb-2">1:1 Executive Coaching</h5>
                </div>
                <div className="assessment-card p-6 border-2 border-gray-200 rounded-xl hover:border-lli-teal hover:bg-teal-50 cursor-pointer transition-all" onclick="selectAssessmentAnswer(5, 'team')">
                  <h5 className="font-bold text-lg mb-2">Team/Group Coaching</h5>
                </div>
                <div className="assessment-card p-6 border-2 border-gray-200 rounded-xl hover:border-lli-teal hover:bg-teal-50 cursor-pointer transition-all" onclick="selectAssessmentAnswer(5, 'workshop')">
                  <h5 className="font-bold text-lg mb-2">Workshops & Training</h5>
                </div>
                <div className="assessment-card p-6 border-2 border-gray-200 rounded-xl hover:border-lli-teal hover:bg-teal-50 cursor-pointer transition-all" onclick="selectAssessmentAnswer(5, 'consulting')">
                  <h5 className="font-bold text-lg mb-2">Strategic Consulting</h5>
                </div>
              </div>
            </div>
            
            <div id="assessment-step-6" className="hidden">
              <h4 className="text-xl font-bold text-gray-900 mb-6">What's your budget range?</h4>
              <div className="grid gap-4">
                <div className="assessment-card p-6 border-2 border-gray-200 rounded-xl hover:border-lli-teal hover:bg-teal-50 cursor-pointer transition-all" onclick="selectAssessmentAnswer(6, 'starter')">
                  <h5 className="font-bold text-lg mb-2">Under $10K</h5>
                  <p className="text-gray-600">Individual coaching or small workshops</p>
                </div>
                <div className="assessment-card p-6 border-2 border-gray-200 rounded-xl hover:border-lli-teal hover:bg-teal-50 cursor-pointer transition-all" onclick="selectAssessmentAnswer(6, 'growth')">
                  <h5 className="font-bold text-lg mb-2">$10K - $50K</h5>
                  <p className="text-gray-600">Team programs or multi-session engagements</p>
                </div>
                <div className="assessment-card p-6 border-2 border-gray-200 rounded-xl hover:border-lli-teal hover:bg-teal-50 cursor-pointer transition-all" onclick="selectAssessmentAnswer(6, 'scale')">
                  <h5 className="font-bold text-lg mb-2">$50K - $100K</h5>
                  <p className="text-gray-600">Organization-wide initiatives</p>
                </div>
                <div className="assessment-card p-6 border-2 border-gray-200 rounded-xl hover:border-lli-teal hover:bg-teal-50 cursor-pointer transition-all" onclick="selectAssessmentAnswer(6, 'enterprise')">
                  <h5 className="font-bold text-lg mb-2">$100K+</h5>
                  <p className="text-gray-600">Comprehensive transformation programs</p>
                </div>
              </div>
            </div>
            
            {/* Results */}
            <div id="assessment-results" className="hidden text-center">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-lli-teal to-lli-teal-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-check text-3xl text-white"></i>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Assessment Complete!</h4>
                <p className="text-lg text-gray-600 mb-8">Based on your responses, we recommend starting with our <strong className="text-lli-teal">Executive Leadership Coaching</strong> program.</p>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-orange-50 rounded-xl p-8 mb-8">
                <h5 className="text-xl font-bold text-gray-900 mb-4">Recommended Next Steps:</h5>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-lli-teal text-xl mt-1"></i>
                    <span className="text-gray-700">30-minute discovery call to discuss your specific needs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-lli-orange text-xl mt-1"></i>
                    <span className="text-gray-700">Customized coaching plan aligned with your goals</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-lli-teal text-xl mt-1"></i>
                    <span className="text-gray-700">Access to our LLI framework resources</span>
                  </li>
                </ul>
                
                <a 
                  href="https://www.LLIConsulting.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-lli-teal to-lli-teal-dark hover:from-lli-teal-dark hover:to-lli-teal text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105"
                >
                  <i className="fas fa-calendar-check text-xl"></i>
                  <span className="text-lg">Schedule Your Discovery Call</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fit Check Modal - Similar structure but 3 steps */}
      <div id="fitcheck-modal" className="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
          {/* Modal Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-900">Transformation Fit Check</h3>
              <button onclick="closeFitCheckModal()" className="text-gray-400 hover:text-gray-600">
                <i className="fas fa-times text-2xl"></i>
              </button>
            </div>
            
            {/* Progress Bar */}
            <div className="flex items-center space-x-4">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div id="fitcheck-progress-bar" className="bg-gradient-to-r from-lli-orange to-lli-orange-dark h-2 rounded-full transition-all duration-500" style="width: 33.33%"></div>
              </div>
              <span id="fitcheck-progress-text" className="text-sm font-semibold text-gray-600 whitespace-nowrap">Step 1 of 3</span>
            </div>
          </div>
          
          {/* Modal Content */}
          <div className="p-8">
            {/* Step 1: Role */}
            <div id="fitcheck-step-1">
              <h4 className="text-xl font-bold text-gray-900 mb-6">What's your role?</h4>
              <div className="grid gap-4">
                <div className="fitcheck-card p-6 border-2 border-gray-200 rounded-xl hover:border-lli-orange hover:bg-orange-50 cursor-pointer transition-all" onclick="selectFitCheckAnswer(1, 'ceo')">
                  <div className="flex items-start space-x-4">
                    <i className="fas fa-crown text-3xl text-lli-orange"></i>
                    <div>
                      <h5 className="font-bold text-lg mb-2">CEO / Executive Leader</h5>
                      <p className="text-gray-600">Setting organizational strategy and culture</p>
                    </div>
                  </div>
                </div>
                
                <div className="fitcheck-card p-6 border-2 border-gray-200 rounded-xl hover:border-lli-orange hover:bg-orange-50 cursor-pointer transition-all" onclick="selectFitCheckAnswer(1, 'hr')">
                  <div className="flex items-start space-x-4">
                    <i className="fas fa-users-cog text-3xl text-lli-teal"></i>
                    <div>
                      <h5 className="font-bold text-lg mb-2">HR / DEI Leader</h5>
                      <p className="text-gray-600">Driving people strategy and inclusion initiatives</p>
                    </div>
                  </div>
                </div>
                
                <div className="fitcheck-card p-6 border-2 border-gray-200 rounded-xl hover:border-lli-orange hover:bg-orange-50 cursor-pointer transition-all" onclick="selectFitCheckAnswer(1, 'manager')">
                  <div className="flex items-start space-x-4">
                    <i className="fas fa-user-tie text-3xl text-lli-orange"></i>
                    <div>
                      <h5 className="font-bold text-lg mb-2">Department Leader / Manager</h5>
                      <p className="text-gray-600">Leading teams and driving results</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 2: Timeline */}
            <div id="fitcheck-step-2" className="hidden">
              <h4 className="text-xl font-bold text-gray-900 mb-6">What's your timeline?</h4>
              <div className="grid gap-4">
                <div className="fitcheck-card p-6 border-2 border-gray-200 rounded-xl hover:border-lli-orange hover:bg-orange-50 cursor-pointer transition-all" onclick="selectFitCheckAnswer(2, 'immediate')">
                  <h5 className="font-bold text-lg mb-2">🚀 Start Immediately</h5>
                  <p className="text-gray-600">Ready to begin within 2 weeks</p>
                </div>
                <div className="fitcheck-card p-6 border-2 border-gray-200 rounded-xl hover:border-lli-orange hover:bg-orange-50 cursor-pointer transition-all" onclick="selectFitCheckAnswer(2, 'month')">
                  <h5 className="font-bold text-lg mb-2">📅 Within 1 Month</h5>
                  <p className="text-gray-600">Need time to secure budget/alignment</p>
                </div>
                <div className="fitcheck-card p-6 border-2 border-gray-200 rounded-xl hover:border-lli-orange hover:bg-orange-50 cursor-pointer transition-all" onclick="selectFitCheckAnswer(2, 'quarter')">
                  <h5 className="font-bold text-lg mb-2">📊 This Quarter</h5>
                  <p className="text-gray-600">Planning for Q1/Q2 launch</p>
                </div>
                <div className="fitcheck-card p-6 border-2 border-gray-200 rounded-xl hover:border-lli-orange hover:bg-orange-50 cursor-pointer transition-all" onclick="selectFitCheckAnswer(2, 'exploring')">
                  <h5 className="font-bold text-lg mb-2">🔍 Exploring Options</h5>
                  <p className="text-gray-600">Gathering information for now</p>
                </div>
              </div>
            </div>
            
            {/* Step 3: Preferred Next Step */}
            <div id="fitcheck-step-3" className="hidden">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Preferred next step?</h4>
              <div className="grid gap-4">
                <div className="fitcheck-card p-6 border-2 border-gray-200 rounded-xl hover:border-lli-orange hover:bg-orange-50 cursor-pointer transition-all" onclick="selectFitCheckAnswer(3, 'call')">
                  <div className="flex items-start space-x-4">
                    <i className="fas fa-phone text-3xl text-lli-teal"></i>
                    <div>
                      <h5 className="font-bold text-lg mb-2">Strategy Call</h5>
                      <p className="text-gray-600">30-min discovery call to discuss your needs</p>
                    </div>
                  </div>
                </div>
                
                <div className="fitcheck-card p-6 border-2 border-gray-200 rounded-xl hover:border-lli-orange hover:bg-orange-50 cursor-pointer transition-all" onclick="selectFitCheckAnswer(3, 'workshop')">
                  <div className="flex items-start space-x-4">
                    <i className="fas fa-chalkboard-teacher text-3xl text-lli-orange"></i>
                    <div>
                      <h5 className="font-bold text-lg mb-2">Workshop Info</h5>
                      <p className="text-gray-600">Learn about our team workshops and training</p>
                    </div>
                  </div>
                </div>
                
                <div className="fitcheck-card p-6 border-2 border-gray-200 rounded-xl hover:border-lli-orange hover:bg-orange-50 cursor-pointer transition-all" onclick="selectFitCheckAnswer(3, 'coaching')">
                  <div className="flex items-start space-x-4">
                    <i className="fas fa-user-check text-3xl text-lli-teal"></i>
                    <div>
                      <h5 className="font-bold text-lg mb-2">Executive Coaching</h5>
                      <p className="text-gray-600">1:1 coaching program details and pricing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Results with Scheduler */}
            <div id="fitcheck-results" className="hidden">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-lli-orange to-lli-orange-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-check text-3xl text-white"></i>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Perfect Fit!</h4>
                <p className="text-lg text-gray-600 mb-8">Based on your responses, let's schedule your <strong className="text-lli-orange">Strategy Call</strong> to discuss your transformation journey.</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left: Recommended Path */}
                <div className="bg-gradient-to-br from-orange-50 to-teal-50 rounded-xl p-6">
                  <h5 className="text-xl font-bold text-gray-900 mb-4">Your Recommended Path:</h5>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-lli-orange text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                      <div>
                        <h6 className="font-bold text-gray-900 mb-1">Discovery Call (30 min)</h6>
                        <p className="text-sm text-gray-600">Understand your challenges and goals</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="bg-lli-teal text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                      <div>
                        <h6 className="font-bold text-gray-900 mb-1">Custom Proposal</h6>
                        <p className="text-sm text-gray-600">Tailored coaching plan and timeline</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="bg-lli-orange text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                      <div>
                        <h6 className="font-bold text-gray-900 mb-1">Begin Transformation</h6>
                        <p className="text-sm text-gray-600">Listen → Learn → Implement</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right: Scheduler Placeholder */}
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 flex items-center justify-center">
                  <div className="text-center">
                    <i className="fas fa-calendar-alt text-5xl text-lli-teal mb-4"></i>
                    <p className="text-gray-600 mb-4">Schedule your discovery call</p>
                    <a 
                      href="https://www.LLIConsulting.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-lli-orange to-lli-orange-dark hover:from-lli-orange-dark hover:to-lli-orange text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105"
                    >
                      <i className="fas fa-calendar-check"></i>
                      <span>Book Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Load Interactive JavaScript */}
      <script src="/static/interactive-hero.js"></script>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Meet Your Coach Section with Chiara's Photo */}
        <section className="mb-20">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Photo Side */}
              <div className="relative h-96 md:h-auto">
                <img 
                  src={chiaraPhotoUrl} 
                  alt="Chiara - Leadership Coach" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-40"></div>
              </div>
              
              {/* Content Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-teal-100 rounded-full mb-4 self-start">
                  <span className="text-sm font-semibold text-gray-800">Meet Your Coach</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Expert Leadership Coaching
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our experienced coaches bring years of expertise in leadership development, workplace equity, and organizational transformation. We partner with you to unlock your authentic leadership potential and drive meaningful impact.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-lli-teal text-xl mt-1"></i>
                    <p className="text-gray-700">Personalized coaching tailored to your unique journey</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-lli-orange text-xl mt-1"></i>
                    <p className="text-gray-700">Evidence-based strategies for sustainable growth</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-lli-teal text-xl mt-1"></i>
                    <p className="text-gray-700">Proven track record of transforming leaders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Divider - Leadership Excellence */}
        <section className="mb-20 relative h-96 overflow-hidden rounded-3xl">
          <img 
            src={confidentLeaderImg} 
            alt="Confident Leader" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-lli-orange/80 to-lli-teal/80 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h3 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                Transform Your Leadership Journey
              </h3>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md">
                From self-awareness to organizational impact
              </p>
            </div>
          </div>
        </section>

        {/* Individual Coaching Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-lli-orange to-lli-teal text-white p-8 md:p-10">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-white bg-opacity-20 rounded-full p-4">
                  <i className="fas fa-user-tie text-3xl"></i>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold">Individual Coaching</h3>
              </div>
              <p className="text-xl opacity-95 leading-relaxed">
                Leadership starts from within. Transform your internal confidence, clarity, and purpose into authentic leadership impact that resonates throughout your organization.
              </p>
            </div>
            
            <div className="p-8 md:p-12">
              {/* Coaching Pillars with Visual Icons */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="group text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-orange-200">
                  <div className="text-lli-orange mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-lightbulb text-5xl"></i>
                  </div>
                  <h4 className="font-bold text-xl mb-3 text-gray-900">Leadership Development</h4>
                  <p className="text-gray-700 leading-relaxed">Build confidence and discover your authentic leadership voice through personalized guidance</p>
                </div>
                
                <div className="group text-center p-8 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-lli-teal">
                  <div className="text-lli-teal mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-balance-scale text-5xl"></i>
                  </div>
                  <h4 className="font-bold text-xl mb-3 text-gray-900">Workplace Equity</h4>
                  <p className="text-gray-700 leading-relaxed">Navigate equity challenges with strategic insight, empathy, and resilience</p>
                </div>
                
                <div className="group text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-orange-200">
                  <div className="text-lli-orange mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-shield-heart text-5xl"></i>
                  </div>
                  <h4 className="font-bold text-xl mb-3 text-gray-900">Stress Management</h4>
                  <p className="text-gray-700 leading-relaxed">Foster psychological safety, balance, and sustainable leader wellbeing</p>
                </div>
                
                <div className="group text-center p-8 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-lli-teal">
                  <div className="text-lli-teal mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-target text-5xl"></i>
                  </div>
                  <h4 className="font-bold text-xl mb-3 text-gray-900">Goal Setting</h4>
                  <p className="text-gray-700 leading-relaxed">Transform vision into measurable, accountable action steps with clarity</p>
                </div>
              </div>

              {/* The LLI Approach */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-10 mb-12 border-2 border-gray-200">
                <h4 className="text-3xl font-bold text-gray-900 mb-8 text-center">The LLI Approach</h4>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-lli-orange to-lli-orange-dark text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <i className="fas fa-ear-listen text-3xl"></i>
                    </div>
                    <h5 className="font-bold text-xl mb-3 text-gray-900">Listen</h5>
                    <p className="text-gray-700 leading-relaxed">We deeply understand your unique leadership challenges, aspirations, and organizational context</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-lli-teal to-lli-teal-dark text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <i className="fas fa-graduation-cap text-3xl"></i>
                    </div>
                    <h5 className="font-bold text-xl mb-3 text-gray-900">Learn</h5>
                    <p className="text-gray-700 leading-relaxed">Develop personalized strategies, tools, and insights designed for your specific growth path</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-lli-orange to-lli-orange-dark text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <i className="fas fa-rocket text-3xl"></i>
                    </div>
                    <h5 className="font-bold text-xl mb-3 text-gray-900">Implement</h5>
                    <p className="text-gray-700 leading-relaxed">Transform personal growth into tangible, measurable organizational impact and results</p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-10 text-white">
                <h4 className="text-3xl font-bold mb-4">
                  Ready to Transform Your Leadership?
                </h4>
                <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
                  Schedule your personalized coaching consultation today and discover how our proven approach can help you lead with confidence, clarity, and purpose.
                </p>
                <a 
                  href="https://www.LLIConsulting.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-lli-orange to-lli-teal hover:from-lli-orange-dark hover:to-lli-teal-dark text-white font-bold py-4 px-10 rounded-full shadow-2xl transform transition-all duration-200 hover:scale-105"
                >
                  <i className="fas fa-calendar-check text-xl"></i>
                  <span className="text-lg">Schedule Your Consultation</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Divider - Diversity & Inclusion */}
        <section className="mb-20 relative h-96 overflow-hidden rounded-3xl">
          <img 
            src={diversityImg} 
            alt="Diverse Team Collaboration" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-lli-teal/85 to-lli-orange/85 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h3 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                Building Inclusive, Equitable Cultures
              </h3>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md">
                Where every voice is heard and valued
              </p>
            </div>
          </div>
        </section>

        {/* Additional Services with Visual Cards */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Leadership Solutions</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our full range of leadership development and organizational consulting services designed to drive transformation at every level.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a 
              href="/services/team-coaching" 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-lli-orange to-lli-orange-dark flex items-center justify-center">
                <i className="fas fa-users text-white text-6xl opacity-90"></i>
              </div>
              <div className="p-8">
                <h4 className="font-bold text-2xl mb-3 text-gray-900">Team Coaching</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Develop high-performing teams with collaborative leadership skills, enhanced communication, and shared accountability for results.
                </p>
                <div className="flex items-center text-lli-orange font-semibold group-hover:translate-x-2 transition-transform">
                  <span>Learn More</span>
                  <i className="fas fa-arrow-right ml-2"></i>
                </div>
              </div>
            </a>
            
            <a 
              href="/services/organizational-development" 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-lli-teal to-lli-teal-dark flex items-center justify-center">
                <i className="fas fa-building text-white text-6xl opacity-90"></i>
              </div>
              <div className="p-8">
                <h4 className="font-bold text-2xl mb-3 text-gray-900">Organizational Development</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Transform company culture, operational effectiveness, and strategic alignment to drive sustainable organizational success.
                </p>
                <div className="flex items-center text-lli-teal font-semibold group-hover:translate-x-2 transition-transform">
                  <span>Learn More</span>
                  <i className="fas fa-arrow-right ml-2"></i>
                </div>
              </div>
            </a>
            
            <a 
              href="/services/leadership-workshops" 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-lli-orange to-lli-orange-dark flex items-center justify-center">
                <i className="fas fa-chalkboard-teacher text-white text-6xl opacity-90"></i>
              </div>
              <div className="p-8">
                <h4 className="font-bold text-2xl mb-3 text-gray-900">Leadership Workshops</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Intensive group training sessions focused on building leadership excellence, strategic thinking, and executive presence.
                </p>
                <div className="flex items-center text-lli-orange font-semibold group-hover:translate-x-2 transition-transform">
                  <span>Learn More</span>
                  <i className="fas fa-arrow-right ml-2"></i>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* Visual Divider - Empowerment */}
        <section className="mb-0 relative h-80 overflow-hidden">
          <img 
            src={leadershipImg} 
            alt="Leadership Development" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-lli-black via-lli-black/70 to-transparent flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h3 className="text-3xl md:text-4xl font-bold mb-3 drop-shadow-lg">
                Your Leadership Journey Starts Here
              </h3>
              <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
                Partner with LLI Consulting Group to unlock your full potential
              </p>
            </div>
          </div>
        </section>
      </main>

      </div>
      {/* End hidden old content */}

      <Footer />
      
      <script src="/static/interactive-hero.js"></script>
    </div>
  )
}