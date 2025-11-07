export const ServicesPage = () => {
  const logoUrl = "https://page.gensparksite.com/v1/base64_upload/76289e59443ab0b47d1ab4851999fbe6"
  const chiaraPhotoUrl = "https://page.gensparksite.com/v1/base64_upload/e6822a23cff671668f780475724b62e7"
  const introVideoUrl = "https://page.gensparksite.com/get_upload_url/f3ade8ec614b90cdfd115b763d7da8b6d74c6e28f60223e4eca0ae0ca5e13349/default/65faa4a0-caea-452d-a9fc-f8af558c38fd"
  
  // Additional professional images for visual appeal
  const teamMeetingImg = "https://sspark.genspark.ai/cfimages?u1=p3451G3ZEplqSVU1hpWslMBIRhknlX84CsLjYH3SkznuTIrlkxpyLAuCwkmtMFXbwhpEvre9YJ3e99PmcLuDRrpBMd2vgWUNT%2BvkZwb2HqDUbZe%2FfwNbySP593IfQLzHOX%2FP1WA3WLrjXpp%2FnLigzhI%2B5CHarzSTteaGCdJuAw7caVHr%2FR8IrzhY3HPD5eqAoLqHXC9oAtaaRBQ4DxSo3yzd1vrQGBSFuJKrYw%3D%3D&u2=r5lJXZBmG11V2fj%2B&width=2560"
  const diversityImg = "https://sspark.genspark.ai/cfimages?u1=mBzrm%2FITxbifSCnl6VSi0VBL8jW7BYLARSnPGIKDFLwD%2FztAX0QY59OB%2BpFGhr3%2BB1QFUtKFUdxUJ2YiK3N1k8HIw6w9q6rfDEPoTVb9HCSRcZUqllhE5XVLSQUkJnzqsl%2BDhdoCuljW&u2=AJs5ASJIXhyWd%2FHw&width=2560"
  const leadershipImg = "https://sspark.genspark.ai/cfimages?u1=ghImmXMbKrGBMxYuscEj017YLMrF0DuubmxINuyW3IRDyr7yWiBRs7RVJ1n4aDLhNcPJo7gV7gzv8zDCMDIWIhu%2BIXi%2FBTIEIfDfaGUQ5kPejVntVrPMHks0xMBbNPeZRMX41IgOaDi2QFodGwkIOOAsYXw2vpMdhbYvKMsTc8bXCmCVH%2BW2dVHsh0601%2BVtEvftdaQ7ixSB3FDhc9NXrZUy3MBL&u2=DRJBwiDrnjEHDgQ%2B&width=2560"
  const confidentLeaderImg = "https://sspark.genspark.ai/cfimages?u1=libfD%2BLiDFBvnWLRicgCLgdV4Xf5%2B8x7ENBS1SbKL4u3KHw4O25%2Fc%2By695hEukTSkJVOPhIBtsm5x0PYfdOBGYc%2BY8RK40ErfWDTwDrddbgFznxJjD%2BUxM%2Bf%2Bft2nQMtOCKUM2V%2F%2F9%2BIMXLPAttKVX2dQhwBm5FHBtlUIuC8qudpi8BMId3mwyR3Y%2FWxhkXkC443R4fS3FdZ1L3zGTuvpKHEFG0xChuzpwB7jWbMxF9eXX%2FG1iexpa6xMTbk%2FsTcRJrwcNBTOgoqJLmjQPbBsZlfe1pyFA4V001LZyj2REGI8HQnnvupsAJfVZk%2BXZCiInzQV65mW5ziXLHY7yQocdLmhaFv4idK7IsqtoPgitvJoxT%2BvOLBFjDT%2FUNC&u2=XxZr0F61XXEU8HKB&width=2560"
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Header with Logo */}
      <header className="bg-gradient-to-r from-lli-black to-gray-800 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img 
                src={logoUrl} 
                alt="LLI Consulting Group Logo" 
                className="h-20 w-20 object-contain"
              />
              <div className="text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">LLI Consulting Group</h1>
                <p className="text-lg text-gray-300">Professional Coaching & Leadership Development</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Introduction Video Section */}
      <section className="bg-gradient-to-br from-lli-black via-gray-800 to-lli-black py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Welcome to LLI Consulting Group
            </h2>
            <p className="text-xl text-gray-300">
              Transforming Leadership, Building Culture, Creating Impact
            </p>
          </div>
          
          {/* Video Player */}
          <div className="bg-black rounded-2xl overflow-hidden shadow-2xl mb-8">
            <video 
              className="w-full"
              controls
              preload="metadata"
              poster=""
            >
              <source src={introVideoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* LLI Framework Overview */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The LLI Framework
              </h3>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Our proven methodology transforms organizations through three powerful stages, moving beyond performative actions to create measurable, lasting change.
              </p>
            </div>

            {/* Framework Steps */}
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              {/* Listen */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-lli-orange to-lli-orange-dark text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-ear-listen text-4xl"></i>
                </div>
                <h4 className="text-2xl font-bold text-lli-orange mb-3">Listen Deeply</h4>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We engage with your organization to understand its unique challenges, culture, and aspirations. Through careful listening, we identify the real issues beneath surface-level symptoms.
                </p>
              </div>

              {/* Learn */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-lli-teal to-lli-teal-dark text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-graduation-cap text-4xl"></i>
                </div>
                <h4 className="text-2xl font-bold text-lli-teal mb-3">Learn Courageously</h4>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We develop customized strategies and solutions rooted in equity-centered principles. Together, we explore new approaches that challenge the status quo and drive authentic transformation.
                </p>
              </div>

              {/* Implement */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-lli-orange to-lli-orange-dark text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-rocket text-4xl"></i>
                </div>
                <h4 className="text-2xl font-bold text-lli-orange mb-3">Implement Boldly</h4>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We translate insights into action through coaching, strategy, and equity-centered culture design. This is where transformation becomes tangible and sustainable.
                </p>
              </div>
            </div>

            {/* Framework Impact */}
            <div className="bg-gradient-to-br from-orange-50 via-teal-50 to-orange-50 rounded-xl p-8 border-2 border-lli-orange">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Creating Lasting Impact</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <i className="fas fa-check-circle text-lli-teal text-2xl mt-1"></i>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-gray-900 mb-2">Build Trust & Psychological Safety</h5>
                    <p className="text-gray-700">Create environments where innovation thrives and every voice matters</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <i className="fas fa-check-circle text-lli-orange text-2xl mt-1"></i>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-gray-900 mb-2">Make Equity Actionable</h5>
                    <p className="text-gray-700">Move beyond statements to measurable actions that transform culture daily</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <i className="fas fa-check-circle text-lli-teal text-2xl mt-1"></i>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-gray-900 mb-2">Shape Tomorrow's Leadership</h5>
                    <p className="text-gray-700">Develop leaders who drive authentic change from executive to organization-wide levels</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <i className="fas fa-check-circle text-lli-orange text-2xl mt-1"></i>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-gray-900 mb-2">Drive Measurable Results</h5>
                    <p className="text-gray-700">Create tangible outcomes that demonstrate real organizational transformation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section with Background Image */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={teamMeetingImg} 
            alt="Professional Team Meeting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-lli-black via-lli-black/90 to-lli-black/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Lead with <span className="text-transparent bg-clip-text bg-gradient-to-r from-lli-orange to-lli-teal">Confidence</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-lli-teal to-lli-orange">Clarity</span>, and <span className="text-transparent bg-clip-text bg-gradient-to-r from-lli-orange to-lli-teal">Purpose</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Unlock your authentic leadership potential through personalized 1:1 coaching designed for emerging leaders and seasoned professionals.
            </p>
          </div>
        </div>
      </section>

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
              href="https://www.LLIConsulting.com" 
              target="_blank" 
              rel="noopener noreferrer"
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
              href="https://www.LLIConsulting.com" 
              target="_blank" 
              rel="noopener noreferrer"
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
              href="https://www.LLIConsulting.com" 
              target="_blank" 
              rel="noopener noreferrer"
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

      {/* Footer */}
      <footer className="bg-gradient-to-r from-lli-black to-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img 
                src={logoUrl} 
                alt="LLI Consulting Group Logo" 
                className="h-16 w-16 mb-4"
              />
              <h5 className="font-bold text-xl mb-2">LLI Consulting Group</h5>
              <p className="text-gray-400">Empowering leaders to drive meaningful change</p>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-lli-orange transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-lli-orange transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-lli-orange transition-colors">Resources</a></li>
                <li><a href="#" className="hover:text-lli-orange transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-4">Connect With Us</h5>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-2xl hover:text-lli-orange transition-colors"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="text-2xl hover:text-lli-orange transition-colors"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-2xl hover:text-lli-orange transition-colors"><i className="fab fa-facebook"></i></a>
              </div>
              <p className="text-gray-400">
                Visit: <a href="https://www.LLIConsulting.com" className="text-lli-teal hover:text-lli-orange transition-colors font-semibold" target="_blank" rel="noopener noreferrer">www.LLIConsulting.com</a>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 LLI Consulting Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}