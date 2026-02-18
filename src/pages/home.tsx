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

      {/* Case Study Slider */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Transformation Stories
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real challenges, real interventions, real results. See how organizations partnered with LLI to create lasting change.
            </p>
          </div>

          {/* Slider Container */}
          <div className="relative">
            {/* Slider Track */}
            <div id="case-study-slider" className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
              {/* Case Study 1 - Regional Hospital */}
              <div className="case-study-card min-w-[350px] md:min-w-[450px] snap-center bg-white rounded-2xl shadow-xl p-8 border-t-4 border-lli-teal">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-lli-teal uppercase tracking-wide">Healthcare</span>
                  <i className="fas fa-hospital text-3xl text-lli-teal"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Regional Hospital System</h3>
                
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Challenge:</h4>
                  <p className="text-gray-700">Siloed leadership team, failed merger, defensive culture, low trust scores (32%), slow decision-making.</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">LLI Intervention:</h4>
                  <p className="text-gray-700">8 group coaching sessions using Listen → Learn → Implement. Rebuilt trust through vulnerability, bias training, co-created communication protocols.</p>
                </div>
                
                <div className="bg-gradient-to-br from-teal-50 to-white rounded-lg p-4 mb-4">
                  <h4 className="text-sm font-bold text-gray-900 mb-2">Outcomes (4 months):</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="text-lli-teal font-semibold">✓ Trust score: 32% → 78%</li>
                    <li className="text-lli-teal font-semibold">✓ 3x faster critical decisions</li>
                    <li className="text-lli-teal font-semibold">✓ Zero leadership turnover (1 year)</li>
                  </ul>
                </div>
                
                <a href="/case-studies" className="inline-flex items-center text-lli-teal font-semibold hover:text-lli-teal-dark transition-colors">
                  View full case study <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>

              {/* Case Study 2 - Urban School District */}
              <div className="case-study-card min-w-[350px] md:min-w-[450px] snap-center bg-white rounded-2xl shadow-xl p-8 border-t-4 border-lli-orange">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-lli-orange uppercase tracking-wide">Education</span>
                  <i className="fas fa-school text-3xl text-lli-orange"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Urban School District</h3>
                
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Challenge:</h4>
                  <p className="text-gray-700">15,000 students, persistent achievement gaps, low teacher retention, no cohesive equity strategy.</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">LLI Intervention:</h4>
                  <p className="text-gray-700">Stakeholder interviews, data analysis, co-created 5-year phased equity transformation plan with superintendent's cabinet.</p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-4 mb-4">
                  <h4 className="text-sm font-bold text-gray-900 mb-2">Outcomes (Year 1):</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="text-lli-orange font-semibold">✓ Board-approved $2M plan</li>
                    <li className="text-lli-orange font-semibold">✓ +12 points teacher satisfaction</li>
                    <li className="text-lli-orange font-semibold">✓ 3 pilot schools with early wins</li>
                  </ul>
                </div>
                
                <a href="/case-studies" className="inline-flex items-center text-lli-orange font-semibold hover:text-lli-orange-dark transition-colors">
                  View full case study <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>

              {/* Case Study 3 - Mid-Size Tech Company */}
              <div className="case-study-card min-w-[350px] md:min-w-[450px] snap-center bg-white rounded-2xl shadow-xl p-8 border-t-4 border-lli-teal">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-lli-teal uppercase tracking-wide">Technology</span>
                  <i className="fas fa-laptop-code text-3xl text-lli-teal"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mid-Size Tech Company</h3>
                
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Challenge:</h4>
                  <p className="text-gray-700">120 managers lacked skills in inclusive hiring and leading diverse teams. Homogeneous workforce, low diversity metrics.</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">LLI Intervention:</h4>
                  <p className="text-gray-700">3-workshop series: interactive exercises, real scenarios, peer learning. Each session built on LLI Framework™.</p>
                </div>
                
                <div className="bg-gradient-to-br from-teal-50 to-white rounded-lg p-4 mb-4">
                  <h4 className="text-sm font-bold text-gray-900 mb-2">Outcomes (Post-series):</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="text-lli-teal font-semibold">✓ +34% diverse candidate hires</li>
                    <li className="text-lli-teal font-semibold">✓ 89% manager bias confidence</li>
                    <li className="text-lli-teal font-semibold">✓ 96% would recommend</li>
                  </ul>
                </div>
                
                <a href="/case-studies" className="inline-flex items-center text-lli-teal font-semibold hover:text-lli-teal-dark transition-colors">
                  View full case study <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>

              {/* Case Study 4 - Fortune 500 VP */}
              <div className="case-study-card min-w-[350px] md:min-w-[450px] snap-center bg-white rounded-2xl shadow-xl p-8 border-t-4 border-lli-orange">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-lli-orange uppercase tracking-wide">Corporate</span>
                  <i className="fas fa-briefcase text-3xl text-lli-orange"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Fortune 500 Executive</h3>
                
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Challenge:</h4>
                  <p className="text-gray-700">VP inherited team with low morale, high turnover, disconnection. Needed leadership transformation.</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">LLI Intervention:</h4>
                  <p className="text-gray-700">6 months 1:1 executive coaching. Listen deeply to employees, learn courageously about biases, implement boldly by redesigning workflows.</p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-4 mb-4">
                  <h4 className="text-sm font-bold text-gray-900 mb-2">Outcomes (6 months):</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="text-lli-orange font-semibold">✓ 40% reduction in turnover</li>
                    <li className="text-lli-orange font-semibold">✓ Engagement: 61% → 92%</li>
                    <li className="text-lli-orange font-semibold">✓ Promoted to SVP in 12 months</li>
                  </ul>
                </div>
                
                <a href="/case-studies" className="inline-flex items-center text-lli-orange font-semibold hover:text-lli-orange-dark transition-colors">
                  View full case study <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>

              {/* Case Study 5 - Financial Services Firm */}
              <div className="case-study-card min-w-[350px] md:min-w-[450px] snap-center bg-white rounded-2xl shadow-xl p-8 border-t-4 border-lli-teal">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-lli-teal uppercase tracking-wide">Financial Services</span>
                  <i className="fas fa-chart-line text-3xl text-lli-teal"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Services Firm</h3>
                
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Challenge:</h4>
                  <p className="text-gray-700">Low engagement (54%), "old boys' club" reputation, only 18% women in senior leadership.</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">LLI Intervention:</h4>
                  <p className="text-gray-700">18-month culture transformation: redesigned hiring, promotion, performance systems. Listening sessions, leadership training, accountability structures.</p>
                </div>
                
                <div className="bg-gradient-to-br from-teal-50 to-white rounded-lg p-4 mb-4">
                  <h4 className="text-sm font-bold text-gray-900 mb-2">Outcomes (18 months):</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="text-lli-teal font-semibold">✓ Engagement: 54% → 81%</li>
                    <li className="text-lli-teal font-semibold">✓ Women leadership: 18% → 45%</li>
                    <li className="text-lli-teal font-semibold">✓ Named "Best Place to Work"</li>
                  </ul>
                </div>
                
                <a href="/case-studies" className="inline-flex items-center text-lli-teal font-semibold hover:text-lli-teal-dark transition-colors">
                  View full case study <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            {/* Scroll Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              <button onclick="scrollCaseStudy('left')" className="bg-gray-200 hover:bg-lli-teal hover:text-white text-gray-700 font-bold py-2 px-4 rounded-lg transition-all">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button onclick="scrollCaseStudy('right')" className="bg-gray-200 hover:bg-lli-teal hover:text-white text-gray-700 font-bold py-2 px-4 rounded-lg transition-all">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>

          {/* View All CTA */}
          <div className="text-center mt-12">
            <a 
              href="/case-studies"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-lli-orange to-lli-orange-dark hover:from-lli-orange-dark hover:to-lli-orange text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105"
            >
              <i className="fas fa-book-open text-xl"></i>
              <span className="text-lg">View All Case Studies</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Assessment CTA Section */}
      <section className="bg-gradient-to-r from-lli-teal via-lli-teal-dark to-lli-teal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <i className="fas fa-chart-line text-6xl text-white/80"></i>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Want to Know Where You Stand?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Take our free Leadership Readiness Assessment and get your personalized score across 5 critical dimensions. Discover your strengths, identify gaps, and get actionable recommendations in just 5 minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/assessment" 
                className="inline-block bg-white text-lli-teal px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <i className="fas fa-clipboard-check mr-2"></i>
                Take Free Assessment
              </a>
              <a 
                href="/assessment#how-it-works" 
                className="inline-block bg-white/10 backdrop-blur text-white border-2 border-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
              >
                <i className="fas fa-info-circle mr-2"></i>
                How It Works
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle"></i>
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-clock"></i>
                <span>5 Minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-shield-alt"></i>
                <span>No Email Required</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modals />
      
      <Footer />
      
      <script src="/static/interactive-hero.js"></script>
    </div>
  )
}
