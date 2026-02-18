import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { Modals } from '../components/Modals'

export const HomePage = () => {
  const introVideoUrl = "https://page.gensparksite.com/get_upload_url/f3ade8ec614b90cdfd115b763d7da8b6d74c6e28f60223e4eca0ae0ca5e13349/default/c3bdcd60-64b6-44dc-854d-ab1b78c33435"
  
  // Professional images for visual appeal
  const chiaraPhotoUrl = "https://page.gensparksite.com/v1/base64_upload/e6822a23cff671668f780475724b62e7"
  const teamMeetingImg = "https://sspark.genspark.ai/cfimages?u1=p3451G3ZEplqSVU1hpWslMBIRhknlX84CsLjYH3SkznuTIrlkxpyLAuCwkmtMFXbwhpEvre9YJ3e99PmcLuDRrpBMd2vgWUNT%2BvkZwb2HqDUbZe%2FfwNbySP593IfQLzHOX%2FP1WA3WLrjXpp%2FnLigzhI%2B5CHarzSTteaGCdJuAw7caVHr%2FR8IrzhY3HPD5eqAoLqHXC9oAtaaRBQ4DxSo3yzd1vrQGBSFuJKrYw%3D%3D&u2=r5lJXZBmG11V2fj%2B&width=2560"
  const diversityImg = "https://sspark.genspark.ai/cfimages?u1=mBzrm%2FITxbifSCnl6VSi0VBL8jW7BYLARSnPGIKDFLwD%2FztAX0QY59OB%2BpFGhr3%2BB1QFUtKFUdxUJ2YiK3N1k8HIw6w9q6rfDEPoTVb9HCSRcZUqllhE5XVLSQUkJnzqsl%2BDhdoCuljW&u2=AJs5ASJIXhyWd%2FHw&width=2560"
  const leadershipImg = "https://sspark.genspark.ai/cfimages?u1=ghImmXMbKrGBMxYuscEj017YLMrF0DuubmxINuyW3IRDyr7yWiBRs7RVJ1n4aDLhNcPJo7gV7gzv8zDCMDIWIhu%2BIXi%2FBTIEIfDfaGUQ5kPejVntVrPMHks0xMBbNPeZRMX41IgOaDi2QFodGwkIOOAsYXw2vpMdhbYvKMsTc8bXCmCVH%2BW2dVHsh0601%2BVtEvftdaQ7ixSB3FDhc9NXrZUy3MBL&u2=DRJBwiDrnjEHDgQ%2B&width=2560"
  const confidentLeaderImg = "https://sspark.genspark.ai/cfimages?u1=libfD%2BLiDFBvnWLRicgCLgdV4Xf5%2B8x7ENBS1SbKL4u3KHw4O25%2Fc%2By695hEukTSkJVOPhIBtsm5x0PYfdOBGYc%2BY8RK40ErfWDTwDrddbgFznxJjD%2BUxM%2Bf%2Bft2nQMtOCKUM2V%2F%2F9%2BIMXLPAttKVX2dQhwBm5FHBtlUIuC8qudpi8BMId3mwyR3Y%2FWxhkXkC443R4fS3FdZ1L3zGTuvpKHEFG0xChuzpwB7jWbMxF9eXX%2FG1iexpa6xMTbk%2FsTcRJrwcNBTOgoqJLmjQPbBsZlfe1pyFA4V001LZyj2REGI8HQnnvupsAJfVZk%2BXZCiInzQV65mW5ziXLHY7yQocdLmhaFv4idK7IsqtoPgitvJoxT%2BvOLBFjDT%2FUNC&u2=XxZr0F61XXEU8HKB&width=2560"
  const coachingSessionImg = "https://sspark.genspark.ai/cfimages?u1=kl8PzsxZyCGgKkLv85O%2FuF%2F5Hgj%2FXXJGsGYv2JVCvyEhGPBGOxmyNlxgBp0%2FRGekZdGZJ5OEhQx9VB%2BPLiJGPQ%3D%3D&u2=RQPXYdBbHghGxL7h&width=2560"
  const workshopImg = "https://sspark.genspark.ai/cfimages?u1=8Yz7K5BfKMmsj9MYV%2FHkiBH49T0R4yNOqSxCVx3lBN7J7vU3lU35Ew9gFBVPcM3SowRzqhG8kp%2F7P0%2FsNP9xUg%3D%3D&u2=8dQ4ySE1xRh2BQN8&width=2560"
  
  // New professional images
  const strategyPresentationImg = "https://www.genspark.ai/api/files/s/awc6Ldqd"
  const implementationMeetingImg = "https://www.genspark.ai/api/files/s/19Z0iBmj"
  const workshopSessionImg = "https://www.genspark.ai/api/files/s/fRKMu4EB"
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navigation />
      
      {/* Interactive Hero Section - Above the Fold */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Headline + Copy + Interactive CTAs */}
            <div>
              {/* Overline */}
              <div className="mb-4">
                <p className="text-sm font-semibold text-lli-teal uppercase tracking-wide">
                  LLI Consulting Group™
                </p>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Clarity Before Action.
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
                LLI Consulting Group™ provides structured advisory support for foundations, government agencies, and mission-driven organizations navigating complex leadership and organizational decisions.
              </p>
              
              {/* Support Line */}
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                When alignment matters and accountability is real, clarity is not optional.
              </p>
              
              {/* Interactive CTA Buttons */}
              <div className="flex flex-col gap-6 mb-12">
                {/* Primary CTA */}
                <div>
                  <a
                    href="/contact"
                    className="group bg-gradient-to-r from-lli-teal to-lli-teal-dark hover:from-lli-teal-dark hover:to-lli-teal text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3 w-full sm:w-auto"
                  >
                    <i className="fas fa-calendar-check text-xl"></i>
                    <span className="text-lg">Book a Discovery Call</span>
                    <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                  </a>
                  <p className="text-sm text-gray-500 mt-2 ml-1">
                    Schedule a consultation to discuss your leadership challenges.
                  </p>
                </div>
                
                {/* Secondary CTA */}
                <div>
                  <a
                    href="/about"
                    className="group bg-gradient-to-r from-lli-orange to-lli-orange-dark hover:from-lli-orange-dark hover:to-lli-orange text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3 w-full sm:w-auto"
                  >
                    <i className="fas fa-book-open text-xl"></i>
                    <span className="text-lg">Learn About the Framework</span>
                    <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                  </a>
                  <p className="text-sm text-gray-500 mt-2 ml-1">
                    Discover how the LLI Framework™ creates lasting change.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right: Intro Video */}
            <div className="relative">
              {/* Video Text Overlay Above */}
              <div className="mb-4">
                <p className="text-gray-700 font-medium text-center">
                  <i className="fas fa-play-circle text-lli-teal mr-2"></i>
                  Watch: How the LLI Framework™ Transforms Organizations (90 seconds)
                </p>
              </div>
              
              {/* Video Player */}
              <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
                <video 
                  className="w-full"
                  controls
                  autoplay
                  muted
                  playsinline
                  loop
                  preload="auto"
                >
                  <source src={introVideoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              {/* Video Caption Below */}
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600 leading-relaxed">
                  LLI Consulting Group breaks down how Listen → Learn → Implement helps leaders move from intent to impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work - Services Preview Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              LLI Consulting Group™ offers focused engagements designed to support clarity and responsible implementation.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-lli-teal hover:shadow-xl transition-all duration-300">
              <div className="bg-lli-teal/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-comments text-lli-teal text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Facilitated Strategy Sessions
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Structured conversations to align leadership and define next steps.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-lli-orange hover:shadow-xl transition-all duration-300">
              <div className="bg-lli-orange/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-chalkboard-teacher text-lli-orange text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Workshops & Learning Sessions
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Interactive sessions to strengthen shared understanding and planning.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-lli-teal hover:shadow-xl transition-all duration-300">
              <div className="bg-lli-teal/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-clipboard-check text-lli-teal text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Advisory & Implementation Planning Support
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Short-term advisory support to review strategies and prepare for execution.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a 
              href="/services" 
              className="inline-block bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Explore Services <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>

          {/* Removed Tab Content - keeping section structure */}
          <div style={{ display: 'none' }}>
            {/* Tab Content Panels */}
            {/* Executive Coaching Panel */}
            <div id="tab-coaching" className="expertise-content bg-white rounded-2xl shadow-xl p-8 md:p-12">
              {/* Content removed for simplified services view */}
            </div>

            {/* Team Development Panel */}
            <div id="tab-team" className="expertise-content hidden bg-white rounded-2xl shadow-xl p-8 md:p-12">
              {/* Content removed for simplified services view */}
            </div>

            {/* Workshops Panel */}
            <div id="tab-workshops" className="expertise-content hidden bg-white rounded-2xl shadow-xl p-8 md:p-12">
              {/* Content removed for simplified services view */}
            </div>

            {/* Strategy Panel */}
            <div id="tab-strategy" className="expertise-content hidden bg-white rounded-2xl shadow-xl p-8 md:p-12">
              {/* Content removed for simplified services view */}
            </div>

            {/* Culture Panel */}
            <div id="tab-culture" className="expertise-content hidden bg-white rounded-2xl shadow-xl p-8 md:p-12">
              {/* Content removed for simplified services view */}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Image Section 1 - Strategy Presentation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={strategyPresentationImg} 
              alt="LLI Consulting Group strategy session" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Where This Work Is Most Useful */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Where This Work Is Most Useful
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              LLI Consulting Group™ frequently supports organizations navigating:
            </p>
          </div>

          {/* Context List */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-lli-teal/10 w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-lg text-gray-800">Strategic transitions</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-lli-orange/10 w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-lg text-gray-800">Leadership alignment challenges</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-lli-teal/10 w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-lg text-gray-800">Cross-department collaboration</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-lli-orange/10 w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-lg text-gray-800">Community accountability dynamics</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-lli-teal/10 w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-lg text-gray-800">Implementation sequencing decisions</span>
                </li>
              </ul>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-center text-lg text-gray-700 italic">
                  This work focuses on structure, clarity, and disciplined planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Image Section 2 - Implementation Meeting */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={implementationMeetingImg} 
              alt="LLI Consulting Group implementation planning session" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Leadership & Culture Reflection Intake Section */}
      <section className="bg-gradient-to-r from-lli-teal via-lli-teal-dark to-lli-teal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <i className="fas fa-pen-to-square text-6xl text-white/80"></i>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Leadership & Culture Reflection Intake
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              A short reflection tool designed to help you clarify what you are navigating before our discovery call.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mb-8 text-white">
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">5-minute</div>
                <div className="text-sm text-white/80">intake</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">No scoring</div>
                <div className="text-sm text-white/80">just reflection</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">Designed</div>
                <div className="text-sm text-white/80">for reflection</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">Generates</div>
                <div className="text-sm text-white/80">discussion prompts</div>
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <a 
                href="/assessment" 
                className="inline-block bg-white text-lli-teal px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <i className="fas fa-arrow-right mr-3"></i>
                Begin Reflection Intake
              </a>
            </div>
            
            <p className="text-white/70 text-sm italic">
              Not a test. Not a score. Just structured space to think through what matters.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Image Section 3 - Workshop Session */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={workshopSessionImg} 
              alt="LLI Consulting Group workshop and learning session" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Final CTA - Start With a Conversation */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Start With a Conversation
          </h2>
          <p className="text-xl text-gray-700 mb-4 leading-relaxed">
            Every engagement begins with a discovery call to confirm fit, scope, and alignment.
          </p>
          <p className="text-2xl text-gray-900 font-semibold mb-8">
            No pressure. Just clarity.
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
      </section>

      <Modals />
      
      <Footer />
      
      <script src="/static/interactive-hero.js"></script>
    </div>
  )
}
