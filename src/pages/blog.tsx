import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export const BlogPage = () => {
  // Blog post images
  const blogPost1Img = "https://sspark.genspark.ai/cfimages?u1=ghImmXMbKrGBMxYuscEj017YLMrF0DuubmxINuyW3IRDyr7yWiBRs7RVJ1n4aDLhNcPJo7gV7gzv8zDCMDIWIhu%2BIXi%2FBTIEIfDfaGUQ5kPejVntVrPMHks0xMBbNPeZRMX41IgOaDi2QFodGwkIOOAsYXw2vpMdhbYvKMsTc8bXCmCVH%2BW2dVHsh0601%2BVtEvftdaQ7ixSB3FDhc9NXrZUy3MBL&u2=DRJBwiDrnjEHDgQ%2B&width=2560"
  const blogPost2Img = "https://sspark.genspark.ai/cfimages?u1=mBzrm%2FITxbifSCnl6VSi0VBL8jW7BYLARSnPGIKDFLwD%2FztAX0QY59OB%2BpFGhr3%2BB1QFUtKFUdxUJ2YiK3N1k8HIw6w9q6rfDEPoTVb9HCSRcZUqllhE5XVLSQUkJnzqsl%2BDhdoCuljW&u2=AJs5ASJIXhyWd%2FHw&width=2560"
  const blogPost3Img = "https://sspark.genspark.ai/cfimages?u1=p3451G3ZEplqSVU1hpWslMBIRhknlX84CsLjYH3SkznuTIrlkxpyLAuCwkmtMFXbwhpEvre9YJ3e99PmcLuDRrpBMd2vgWUNT%2BvkZwb2HqDUbZe%2FfwNbySP593IfQLzHOX%2FP1WA3WLrjXpp%2FnLigzhI%2B5CHarzSTteaGCdJuAw7caVHr%2FR8IrzhY3HPD5eqAoLqHXC9oAtaaRBQ4DxSo3yzd1vrQGBSFuJKrYw%3D%3D&u2=r5lJXZBmG11V2fj%2B&width=2560"
  const chiaraPhotoUrl = "https://page.gensparksite.com/v1/base64_upload/e6822a23cff671668f780475724b62e7"

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-lli-black via-gray-800 to-lli-black py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-lli-orange to-lli-teal animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lli-orange to-lli-teal">Leadership Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Practical wisdom, real stories, and actionable strategies for equity-centered leadership
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-lli-teal/10 to-white rounded-2xl shadow-xl overflow-hidden border-2 border-lli-teal">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <img 
                  src={blogPost1Img} 
                  alt="Featured Blog Post" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-lli-orange text-white px-4 py-2 rounded-lg font-bold text-sm">
                  FEATURED POST
                </div>
              </div>
              
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-lli-teal/20 text-lli-teal px-3 py-1 rounded-full text-sm font-semibold">
                    Leadership
                  </span>
                  <span className="text-gray-500 text-sm">5 min read</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Beyond Performative Actions: What Real DEI Work Looks Like
                </h2>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Too many organizations stop at statements and training. Here's how to move from intent to measurable impact using the LLI Framework™.
                </p>
                
                <div className="flex items-center mb-6">
                  <img 
                    src={chiaraPhotoUrl} 
                    alt="Chiara Smith" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold text-gray-900">Chiara Smith</p>
                    <p className="text-sm text-gray-600">December 15, 2024</p>
                  </div>
                </div>
                
                <button className="bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105 inline-flex items-center">
                  Read Full Article
                  <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Recent <span className="text-lli-orange">Articles</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fresh perspectives on leadership, culture, and organizational transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Blog Post 1 */}
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48">
                <img 
                  src={blogPost2Img} 
                  alt="The Listening Gap" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-lli-teal text-white px-3 py-1 rounded-lg text-sm font-semibold">
                  Culture Change
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-gray-500 text-sm">December 10, 2024</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500 text-sm">4 min read</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-lli-teal transition-colors cursor-pointer">
                  The Listening Gap: Why Your Culture Initiatives Keep Failing
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Most leaders think they're listening. But are they really hearing what's being said? Discover the #1 mistake that derails culture work.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img 
                      src={chiaraPhotoUrl} 
                      alt="Chiara Smith" 
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="text-sm font-semibold text-gray-700">Chiara Smith</span>
                  </div>
                  <button className="text-lli-teal hover:text-lli-teal-dark font-semibold text-sm flex items-center">
                    Read More <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>
            </article>

            {/* Blog Post 2 */}
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48">
                <img 
                  src={blogPost3Img} 
                  alt="Courageous Conversations" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-lli-orange text-white px-3 py-1 rounded-lg text-sm font-semibold">
                  Leadership
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-gray-500 text-sm">December 5, 2024</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500 text-sm">6 min read</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-lli-orange transition-colors cursor-pointer">
                  How to Have Courageous Conversations Without Burning Bridges
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Equity work requires difficult dialogue. Here's a 5-step framework for navigating tough conversations that build trust, not tension.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img 
                      src={chiaraPhotoUrl} 
                      alt="Chiara Smith" 
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="text-sm font-semibold text-gray-700">Chiara Smith</span>
                  </div>
                  <button className="text-lli-orange hover:text-lli-orange-dark font-semibold text-sm flex items-center">
                    Read More <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>
            </article>

            {/* Blog Post 3 */}
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48">
                <img 
                  src={blogPost1Img} 
                  alt="Implementing Change" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-lli-teal text-white px-3 py-1 rounded-lg text-sm font-semibold">
                  Implementation
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-gray-500 text-sm">November 28, 2024</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500 text-sm">5 min read</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-lli-teal transition-colors cursor-pointer">
                  From Strategy to Action: Making Culture Change Stick
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Great plans don't guarantee great results. Learn the accountability systems that turn culture strategies into lasting transformation.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img 
                      src={chiaraPhotoUrl} 
                      alt="Chiara Smith" 
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="text-sm font-semibold text-gray-700">Chiara Smith</span>
                  </div>
                  <button className="text-lli-teal hover:text-lli-teal-dark font-semibold text-sm flex items-center">
                    Read More <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Browse by <span className="text-lli-teal">Topic</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find articles that matter most to your leadership journey
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-gradient-to-br from-lli-teal/10 to-white border-2 border-lli-teal hover:border-lli-teal-dark rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              <i className="fas fa-user-tie text-3xl text-lli-teal mb-3"></i>
              <h3 className="font-bold text-gray-900 mb-1">Leadership</h3>
              <p className="text-sm text-gray-600">24 articles</p>
            </button>

            <button className="bg-gradient-to-br from-lli-orange/10 to-white border-2 border-lli-orange hover:border-lli-orange-dark rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              <i className="fas fa-users text-3xl text-lli-orange mb-3"></i>
              <h3 className="font-bold text-gray-900 mb-1">DEI & Equity</h3>
              <p className="text-sm text-gray-600">18 articles</p>
            </button>

            <button className="bg-gradient-to-br from-lli-teal/10 to-white border-2 border-lli-teal hover:border-lli-teal-dark rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              <i className="fas fa-chart-line text-3xl text-lli-teal mb-3"></i>
              <h3 className="font-bold text-gray-900 mb-1">Culture Change</h3>
              <p className="text-sm text-gray-600">15 articles</p>
            </button>

            <button className="bg-gradient-to-br from-lli-orange/10 to-white border-2 border-lli-orange hover:border-lli-orange-dark rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              <i className="fas fa-rocket text-3xl text-lli-orange mb-3"></i>
              <h3 className="font-bold text-gray-900 mb-1">Implementation</h3>
              <p className="text-sm text-gray-600">12 articles</p>
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-lli-black via-gray-800 to-lli-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Never Miss a Post
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get new articles, tools, and insights delivered straight to your inbox every week
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-lg focus:border-lli-teal focus:outline-none text-lg"
              />
              <button className="bg-gradient-to-r from-lli-orange to-lli-orange-dark text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105 whitespace-nowrap">
                Subscribe Free
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Join 2,000+ leaders. No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
