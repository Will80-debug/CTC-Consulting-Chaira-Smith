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

      {/* Our Expertise in Action - Interactive Tabbed Layout */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Expertise in Action
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real solutions, measurable results. See what we do and the transformations we create.
            </p>
          </div>

          {/* Interactive Tabs */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button 
                onclick="showExpertiseTab('coaching')"
                className="expertise-tab px-6 py-3 rounded-lg font-bold transition-all duration-200 bg-lli-teal text-white"
                data-tab="coaching"
              >
                <i className="fas fa-user-tie mr-2"></i>
                Executive Coaching
              </button>
              <button 
                onclick="showExpertiseTab('team')"
                className="expertise-tab px-6 py-3 rounded-lg font-bold transition-all duration-200 bg-gray-200 text-gray-700 hover:bg-gray-300"
                data-tab="team"
              >
                <i className="fas fa-users mr-2"></i>
                Team Development
              </button>
              <button 
                onclick="showExpertiseTab('workshops')"
                className="expertise-tab px-6 py-3 rounded-lg font-bold transition-all duration-200 bg-gray-200 text-gray-700 hover:bg-gray-300"
                data-tab="workshops"
              >
                <i className="fas fa-chalkboard-teacher mr-2"></i>
                Workshops
              </button>
              <button 
                onclick="showExpertiseTab('strategy')"
                className="expertise-tab px-6 py-3 rounded-lg font-bold transition-all duration-200 bg-gray-200 text-gray-700 hover:bg-gray-300"
                data-tab="strategy"
              >
                <i className="fas fa-chess mr-2"></i>
                Strategy
              </button>
              <button 
                onclick="showExpertiseTab('culture')"
                className="expertise-tab px-6 py-3 rounded-lg font-bold transition-all duration-200 bg-gray-200 text-gray-700 hover:bg-gray-300"
                data-tab="culture"
              >
                <i className="fas fa-building mr-2"></i>
                Culture
              </button>
            </div>

            {/* Tab Content Panels */}
            {/* Executive Coaching Panel */}
            <div id="tab-coaching" className="expertise-content bg-white rounded-2xl shadow-xl p-8 md:p-12">
              {/* Executive Coaching Video */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white px-6 py-3 rounded-t-xl">
                  <p className="text-lg font-semibold">
                    <i className="fas fa-video mr-2"></i>
                    Executive Coaching in Action - See How We Transform Leaders
                  </p>
                </div>
                <div className="bg-black rounded-b-xl overflow-hidden shadow-xl">
                  <div className="relative" style={{paddingBottom: '56.25%'}}>
                    <iframe 
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/qtcbMBQxT2s?enablejsapi=1"
                      title="Executive Coaching Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-lli-teal mb-6">
                    <i className="fas fa-user-tie mr-3"></i>
                    Executive Coaching
                  </h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Best For:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-lli-teal mt-1 mr-3"></i>
                        <span>C-suite and senior executives leading culture change</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-lli-teal mt-1 mr-3"></i>
                        <span>Leaders navigating organizational complexity and equity challenges</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-lli-teal mt-1 mr-3"></i>
                        <span>High-potential leaders preparing for next-level roles</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Outcomes:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-arrow-right text-lli-orange mt-1 mr-3"></i>
                        <span><strong>85% average improvement</strong> in leadership effectiveness scores</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-arrow-right text-lli-orange mt-1 mr-3"></i>
                        <span><strong>Increased confidence</strong> in difficult conversations about equity and inclusion</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-arrow-right text-lli-orange mt-1 mr-3"></i>
                        <span><strong>Measurable culture shifts</strong> reflected in engagement survey data</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-arrow-right text-lli-orange mt-1 mr-3"></i>
                        <span><strong>Stronger executive presence</strong> and strategic decision-making</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-teal-50 to-white rounded-xl p-6 border-l-4 border-lli-teal">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    <i className="fas fa-lightbulb text-lli-teal mr-2"></i>
                    Mini Case Study
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A Fortune 500 VP inherited a team with low morale and high turnover. Through 6 months of 1:1 coaching using the LLI Framework™, they learned to <strong>listen deeply</strong> to employee concerns, <strong>learn courageously</strong> by confronting their own biases, and <strong>implement boldly</strong> by redesigning team workflows.
                  </p>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-600 mb-2">Results after 6 months:</p>
                    <ul className="space-y-1 text-sm">
                      <li className="text-lli-teal font-semibold">✓ 40% reduction in turnover</li>
                      <li className="text-lli-teal font-semibold">✓ 92% team engagement score (up from 61%)</li>
                      <li className="text-lli-teal font-semibold">✓ Promoted to SVP within 12 months</li>
                    </ul>
                  </div>
                  <a href="/case-studies" className="text-lli-teal font-semibold hover:text-lli-teal-dark transition-colors">
                    View full case study <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Development Panel */}
            <div id="tab-team" className="expertise-content hidden bg-white rounded-2xl shadow-xl p-8 md:p-12">
              {/* Team Development Video */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-lli-orange to-lli-orange-dark text-white px-6 py-3 rounded-t-xl">
                  <p className="text-lg font-semibold">
                    <i className="fas fa-video mr-2"></i>
                    Team Development Training Overview - Building High-Performance Teams
                  </p>
                </div>
                <div className="bg-black rounded-b-xl overflow-hidden shadow-xl">
                  <div className="relative" style={{paddingBottom: '56.25%'}}>
                    <iframe 
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/w6z2Iv5B18E?enablejsapi=1"
                      title="Team Development Training Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-lli-orange mb-6">
                    <i className="fas fa-users mr-3"></i>
                    Team Development
                  </h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Best For:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-lli-orange mt-1 mr-3"></i>
                        <span>Teams experiencing conflict or lack of trust</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-lli-orange mt-1 mr-3"></i>
                        <span>Cross-functional groups needing alignment</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-lli-orange mt-1 mr-3"></i>
                        <span>Newly formed teams building foundations</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Outcomes:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-arrow-right text-lli-teal mt-1 mr-3"></i>
                        <span><strong>68% improvement</strong> in psychological safety metrics</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-arrow-right text-lli-teal mt-1 mr-3"></i>
                        <span><strong>Enhanced collaboration</strong> across departments and functions</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-arrow-right text-lli-teal mt-1 mr-3"></i>
                        <span><strong>Reduced conflict</strong> and improved decision-making speed</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-arrow-right text-lli-teal mt-1 mr-3"></i>
                        <span><strong>Clear team norms</strong> around equity and inclusion</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 border-l-4 border-lli-orange">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    <i className="fas fa-lightbulb text-lli-orange mr-2"></i>
                    Mini Case Study
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A regional hospital's leadership team was siloed and defensive after a failed merger attempt. LLI facilitated 8 group coaching sessions focused on rebuilding trust through the Listen → Learn → Implement process. Team members shared vulnerabilities, learned about implicit bias, and co-created new communication protocols.
                  </p>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-600 mb-2">Results after 4 months:</p>
                    <ul className="space-y-1 text-sm">
                      <li className="text-lli-orange font-semibold">✓ 78% "high trust" score (up from 32%)</li>
                      <li className="text-lli-orange font-semibold">✓ 3x faster decision-making on critical initiatives</li>
                      <li className="text-lli-orange font-semibold">✓ Zero leadership turnover in following year</li>
                    </ul>
                  </div>
                  <a href="/case-studies" className="text-lli-orange font-semibold hover:text-lli-orange-dark transition-colors">
                    View full case study <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Workshops Panel */}
            <div id="tab-workshops" className="expertise-content hidden bg-white rounded-2xl shadow-xl p-8 md:p-12">
              {/* Workshops Video */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white px-6 py-3 rounded-t-xl">
                  <p className="text-lg font-semibold">
                    <i className="fas fa-video mr-2"></i>
                    Workshops & Training in Action - Building Inclusive Teams
                  </p>
                </div>
                <div className="bg-black rounded-b-xl overflow-hidden shadow-xl">
                  <div className="relative" style={{paddingBottom: '56.25%'}}>
                    <iframe 
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/eirnJ03wwrk?enablejsapi=1"
                      title="Workshops and Training Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-lli-teal mb-6">
                    <i className="fas fa-chalkboard-teacher mr-3"></i>
                    Workshops & Training
                  </h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Best For:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-lli-teal mt-1 mr-3"></i>
                        <span>Organizations launching DEI initiatives</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-lli-teal mt-1 mr-3"></i>
                        <span>Teams needing skill-building in inclusive leadership</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-lli-teal mt-1 mr-3"></i>
                        <span>Leadership cohorts developing shared language</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Outcomes:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-arrow-right text-lli-orange mt-1 mr-3"></i>
                        <span><strong>91% participants</strong> apply new skills within 30 days</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-arrow-right text-lli-orange mt-1 mr-3"></i>
                        <span><strong>Shared vocabulary</strong> around equity, belonging, and allyship</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-arrow-right text-lli-orange mt-1 mr-3"></i>
                        <span><strong>Actionable toolkits</strong> participants use immediately</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-arrow-right text-lli-orange mt-1 mr-3"></i>
                        <span><strong>Cultural momentum</strong> that extends beyond the session</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-teal-50 to-white rounded-xl p-6 border-l-4 border-lli-teal">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    <i className="fas fa-lightbulb text-lli-teal mr-2"></i>
                    Mini Case Study
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A mid-size tech company needed to upskill 120 managers on inclusive hiring and leading diverse teams. LLI designed a 3-workshop series combining interactive exercises, real scenarios, and peer learning. Each session built on the LLI Framework™ to move from awareness to implementation.
                  </p>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-600 mb-2">Results after workshop series:</p>
                    <ul className="space-y-1 text-sm">
                      <li className="text-lli-teal font-semibold">✓ 34% increase in diverse candidate hires</li>
                      <li className="text-lli-teal font-semibold">✓ 89% manager confidence in handling bias</li>
                      <li className="text-lli-teal font-semibold">✓ 96% would recommend to peers</li>
                    </ul>
                  </div>
                  <a href="/case-studies" className="text-lli-teal font-semibold hover:text-lli-teal-dark transition-colors">
                    View full case study <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Strategy Panel */}
            <div id="tab-strategy" className="expertise-content hidden bg-white rounded-2xl shadow-xl p-8 md:p-12">
              {/* Strategy Video */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-lli-orange to-lli-orange-dark text-white px-6 py-3 rounded-t-xl">
                  <p className="text-lg font-semibold">
                    <i className="fas fa-video mr-2"></i>
                    Strategic Consulting - Creating Transformational Change
                  </p>
                </div>
                <div className="bg-black rounded-b-xl overflow-hidden shadow-xl">
                  <div className="relative" style={{paddingBottom: '56.25%'}}>
                    <iframe 
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/YSgPO_eoVyQ?enablejsapi=1"
                      title="Strategic Consulting Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-lli-orange mb-6">
                    <i className="fas fa-chess mr-3"></i>
                    Strategic Consulting
                  </h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Best For:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-lli-orange mt-1 mr-3"></i>
                        <span>Organizations designing multi-year DEI strategies</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-lli-orange mt-1 mr-3"></i>
                        <span>Leaders needing board-level recommendations</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-lli-orange mt-1 mr-3"></i>
                        <span>Companies integrating equity into business operations</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Outcomes:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-arrow-right text-lli-teal mt-1 mr-3"></i>
                        <span><strong>Clear roadmaps</strong> with phased milestones and KPIs</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-arrow-right text-lli-teal mt-1 mr-3"></i>
                        <span><strong>Executive buy-in</strong> through data-driven business case</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-arrow-right text-lli-teal mt-1 mr-3"></i>
                        <span><strong>Customized frameworks</strong> aligned to organizational context</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-arrow-right text-lli-teal mt-1 mr-3"></i>
                        <span><strong>Sustainable change</strong> beyond performative statements</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 border-l-4 border-lli-orange">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    <i className="fas fa-lightbulb text-lli-orange mr-2"></i>
                    Mini Case Study
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A urban school district with 15,000 students needed a 5-year equity transformation plan to address achievement gaps and teacher retention. LLI conducted stakeholder interviews, analyzed existing data, and co-created a phased strategy with the superintendent's cabinet using the Listen → Learn → Implement approach.
                  </p>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-600 mb-2">Results in Year 1:</p>
                    <ul className="space-y-1 text-sm">
                      <li className="text-lli-orange font-semibold">✓ Board-approved 5-year plan with $2M budget</li>
                      <li className="text-lli-orange font-semibold">✓ 12-point increase in teacher satisfaction</li>
                      <li className="text-lli-orange font-semibold">✓ 3 pilot schools showing early wins</li>
                    </ul>
                  </div>
                  <a href="/case-studies" className="text-lli-orange font-semibold hover:text-lli-orange-dark transition-colors">
                    View full case study <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Culture Panel */}
            <div id="tab-culture" className="expertise-content hidden bg-white rounded-2xl shadow-xl p-8 md:p-12">
              {/* Culture Transformation Video */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white px-6 py-3 rounded-t-xl">
                  <p className="text-lg font-semibold">
                    <i className="fas fa-video mr-2"></i>
                    Culture Transformation in Action - Building Inclusive Workplaces
                  </p>
                </div>
                <div className="bg-black rounded-b-xl overflow-hidden shadow-xl">
                  <div className="relative" style={{paddingBottom: '56.25%'}}>
                    <iframe 
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/d5ESOlafejA?enablejsapi=1"
                      title="Culture Transformation Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-lli-teal mb-6">
                    <i className="fas fa-building mr-3"></i>
                    Culture Transformation
                  </h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Best For:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-lli-teal mt-1 mr-3"></i>
                        <span>Organizations with toxic or misaligned culture</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-lli-teal mt-1 mr-3"></i>
                        <span>Companies post-merger needing cultural integration</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-lli-teal mt-1 mr-3"></i>
                        <span>Leaders wanting to embed equity into organizational DNA</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Outcomes:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-arrow-right text-lli-orange mt-1 mr-3"></i>
                        <span><strong>Authentic values</strong> reflected in daily behaviors, not just posters</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-arrow-right text-lli-orange mt-1 mr-3"></i>
                        <span><strong>72% average improvement</strong> in culture health scores</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-arrow-right text-lli-orange mt-1 mr-3"></i>
                        <span><strong>Reduced turnover</strong> and improved talent attraction</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-arrow-right text-lli-orange mt-1 mr-3"></i>
                        <span><strong>Measurable equity gains</strong> in promotions and compensation</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-teal-50 to-white rounded-xl p-6 border-l-4 border-lli-teal">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    <i className="fas fa-lightbulb text-lli-teal mr-2"></i>
                    Mini Case Study
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A financial services firm struggled with low employee engagement and a reputation for being "old boys' club." Over 18 months, LLI partnered with leadership to redesign hiring, promotion, and performance systems through an equity lens. Culture change required listening sessions, leadership training, and new accountability structures.
                  </p>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-600 mb-2">Results after 18 months:</p>
                    <ul className="space-y-1 text-sm">
                      <li className="text-lli-teal font-semibold">✓ Engagement jumped from 54% to 81%</li>
                      <li className="text-lli-teal font-semibold">✓ 45% women in senior leadership (from 18%)</li>
                      <li className="text-lli-teal font-semibold">✓ Named "Best Place to Work" by local biz journal</li>
                    </ul>
                  </div>
                  <a href="/case-studies" className="text-lli-teal font-semibold hover:text-lli-teal-dark transition-colors">
                    View full case study <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
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

      <Modals />
      
      <Footer />
      
      <script src="/static/interactive-hero.js"></script>
    </div>
  )
}
