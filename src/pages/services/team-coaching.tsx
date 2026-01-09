import { Navigation } from '../../components/Navigation'
import { Footer } from '../../components/Footer'

export const TeamCoachingPage = () => {
  const heroImg = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=2000&h=1200&fit=crop";
  const resultsImg = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop";
  const chiaraPhotoUrl = "https://page.gensparksite.com/v1/base64_upload/e6822a23cff671668f780475724b62e7";

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <img 
          src={heroImg} 
          alt="High-Performing Team Collaboration" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-lli-black via-lli-black/90 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <div className="inline-block bg-lli-orange text-white px-4 py-2 rounded-lg font-semibold mb-6">
                <i className="fas fa-users mr-2"></i>
                Team Coaching
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Your Team Has Potential.<br/>
                <span className="text-lli-orange">We Unlock It.</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Stop wasting talent on dysfunctional dynamics. Transform your group of individuals into a high-performing team that delivers results—together.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-lli-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-lli-orange-dark transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Schedule Your Team Assessment
                <i className="fas fa-arrow-right ml-3"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* The Problem - Agitate */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-12 border-l-8 border-lli-orange">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Is This Your Team Right Now?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="fas fa-times-circle text-red-500 text-2xl mt-1 mr-4"></i>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Siloed Thinking</h3>
                    <p className="text-gray-700">Everyone protects their turf. Collaboration is a buzzword, not a behavior.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="fas fa-times-circle text-red-500 text-2xl mt-1 mr-4"></i>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Conflict Avoidance</h3>
                    <p className="text-gray-700">Issues fester in silence. People smile in meetings, then complain in the hallway.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="fas fa-times-circle text-red-500 text-2xl mt-1 mr-4"></i>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Unclear Accountability</h3>
                    <p className="text-gray-700">When everyone is responsible, no one is. Projects stall while people point fingers.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="fas fa-times-circle text-red-500 text-2xl mt-1 mr-4"></i>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Psychological Unsafe</h3>
                    <p className="text-gray-700">People don't speak up. Innovation dies. The best ideas never see daylight.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="fas fa-times-circle text-red-500 text-2xl mt-1 mr-4"></i>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Leader-Dependent</h3>
                    <p className="text-gray-700">Nothing happens without you. Your team waits for direction instead of taking ownership.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="fas fa-times-circle text-red-500 text-2xl mt-1 mr-4"></i>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">High Turnover</h3>
                    <p className="text-gray-700">Your best people leave. They're tired of dysfunction. Exit interviews reveal nothing useful.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8 border-l-4 border-red-500">
              <p className="text-xl font-bold text-gray-900 mb-3">
                Here's the truth you already know:
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                <strong>Individual talent doesn't guarantee team performance.</strong> You've hired smart people. You've invested in training. You've tried team-building exercises. But your team still underperforms. The problem isn't your people—it's the system they're operating in.
              </p>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What If Your Team Could...
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Team Coaching doesn't just improve dynamics—it transforms how your team shows up, collaborates, and delivers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-lli-teal to-lli-teal-dark text-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">
                <i className="fas fa-comments"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Communicate Fearlessly</h3>
              <p className="text-lg leading-relaxed">
                Say what needs to be said without destroying relationships. Navigate conflict as fuel for innovation, not a threat to avoid.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-lli-orange to-lli-orange-dark text-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Execute with Clarity</h3>
              <p className="text-lg leading-relaxed">
                Everyone knows the goal, their role, and how success is measured. No more confusion. No more wasted effort. Just results.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-lli-teal to-lli-teal-dark text-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Own Collective Success</h3>
              <p className="text-lg leading-relaxed">
                Stop waiting for leadership. Your team takes ownership, solves problems, and drives outcomes—without you micromanaging.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-20 bg-white rounded-2xl shadow-xl p-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            The LLI Team Coaching Process
          </h2>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-lli-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mr-6">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Team Assessment & Diagnosis</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  We don't guess. We diagnose. Through individual interviews, team observations, and research-backed assessments, we identify the invisible barriers holding your team back.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-lli-teal">
                  <p className="text-gray-800"><strong>What You Get:</strong> A comprehensive team health report with specific, prioritized recommendations.</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-lli-teal text-white rounded-full flex items-center justify-center text-2xl font-bold mr-6">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Structured Team Sessions</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Monthly facilitated sessions where we tackle the real issues—not surface-level complaints. We create the safety for hard conversations and the structure to make them productive.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-lli-orange">
                  <p className="text-gray-800"><strong>What You Get:</strong> 6-12 month engagement with bi-weekly or monthly 2-hour team sessions, plus interim check-ins.</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-lli-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mr-6">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Leadership Development Integration</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Your team leader gets dedicated coaching to lead the team forward. Because even the best team needs strong leadership to sustain momentum.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-lli-teal">
                  <p className="text-gray-800"><strong>What You Get:</strong> Monthly 1-on-1 coaching for the team leader to support team transformation.</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-lli-teal text-white rounded-full flex items-center justify-center text-2xl font-bold mr-6">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Accountability Systems & Measurement</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  We don't rely on feelings. We track metrics that matter: decision velocity, conflict resolution, innovation output, and team trust scores.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-lli-orange">
                  <p className="text-gray-800"><strong>What You Get:</strong> Quarterly progress reports showing measurable improvements in team performance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Real Teams. Real Results.
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 border-l-4 border-green-500">
                  <p className="text-2xl font-bold text-gray-900 mb-2">68% Faster Decision-Making</p>
                  <p className="text-gray-700">A leadership team eliminated months of debate paralysis and started shipping decisions in days.</p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-6 border-l-4 border-blue-500">
                  <p className="text-2xl font-bold text-gray-900 mb-2">Zero Voluntary Turnover</p>
                  <p className="text-gray-700">A previously toxic sales team retained 100% of their top performers for 18 months post-coaching.</p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-orange-50 rounded-xl p-6 border-l-4 border-purple-500">
                  <p className="text-2xl font-bold text-gray-900 mb-2">3x Innovation Output</p>
                  <p className="text-gray-700">An engineering team tripled their rate of new feature releases by eliminating dysfunction.</p>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border-l-4 border-lli-orange">
                  <p className="text-2xl font-bold text-gray-900 mb-2">42% Engagement Increase</p>
                  <p className="text-gray-700">A demoralized operations team went from bottom to top quartile in engagement scores.</p>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src={resultsImg} 
                alt="Successful Team Collaboration" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="mb-20 bg-gradient-to-r from-lli-black to-gray-800 rounded-2xl p-12 text-white">
          <div className="flex items-start space-x-6 mb-8">
            <img 
              src={chiaraPhotoUrl} 
              alt="Chiara Smith" 
              className="w-24 h-24 rounded-full border-4 border-lli-orange"
            />
            <div>
              <p className="text-lg leading-relaxed mb-4 italic">
                "Before working with Chiara, our leadership team was polite but ineffective. We avoided real issues and wondered why nothing changed. Within six months of team coaching, we were having the hard conversations, making faster decisions, and actually trusting each other. Our CEO said it best: 'We finally feel like a team, not just a group of executives.'"
              </p>
              <p className="font-bold text-lg">— VP of People Operations, Technology Company</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-6">
            <img 
              src={chiaraPhotoUrl} 
              alt="Client Testimonial" 
              className="w-24 h-24 rounded-full border-4 border-lli-teal"
            />
            <div>
              <p className="text-lg leading-relaxed mb-4 italic">
                "I was skeptical. We'd done team building before—trust falls, escape rooms, all of it. Nothing stuck. Chiara's approach was different. She didn't give us activities. She gave us frameworks for how to function together. A year later, we're the highest-performing team in the organization, and people are asking what changed."
              </p>
              <p className="font-bold text-lg">— Department Director, Healthcare Organization</p>
            </div>
          </div>
        </section>

        {/* Investment */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-lli-orange to-lli-orange-dark text-white rounded-2xl p-12 shadow-2xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                The Investment
              </h2>
              <p className="text-2xl mb-8 leading-relaxed">
                Team Coaching Engagements start at <strong>$15,000</strong> for a 6-month engagement (5-10 team members).
              </p>
              <p className="text-lg mb-8 leading-relaxed opacity-90">
                Includes: Team assessment, monthly facilitated sessions, leader coaching, accountability tools, and quarterly progress reporting.
              </p>
              
              <div className="bg-white/10 backdrop-blur rounded-xl p-8 mb-8">
                <p className="text-xl font-bold mb-4">What's the cost of NOT fixing your team?</p>
                <ul className="text-left space-y-2 text-lg">
                  <li>• Lost productivity from dysfunction: <strong>$50K-$200K annually</strong></li>
                  <li>• Turnover replacement costs: <strong>$100K-$300K per departing leader</strong></li>
                  <li>• Missed opportunities from slow decision-making: <strong>Incalculable</strong></li>
                </ul>
              </div>
              
              <a 
                href="/contact" 
                className="inline-block bg-white text-lli-orange px-12 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Schedule Your Team Assessment
                <i className="fas fa-arrow-right ml-3"></i>
              </a>
              
              <p className="mt-6 text-sm opacity-80">
                Limited availability. Currently accepting 2 new team engagements per quarter.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20 bg-white rounded-2xl shadow-xl p-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <i className="fas fa-question-circle text-lli-teal mr-3"></i>
                How long does team coaching take?
              </h3>
              <p className="text-gray-700 ml-10 leading-relaxed">
                Most teams see measurable improvement in 3-6 months. Real transformation takes 6-12 months. We don't do quick fixes—we build lasting change.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <i className="fas fa-question-circle text-lli-orange mr-3"></i>
                What size teams do you work with?
              </h3>
              <p className="text-gray-700 ml-10 leading-relaxed">
                5-15 members is ideal. Smaller teams get intensive attention. Larger teams require modified structures. We customize based on your needs.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <i className="fas fa-question-circle text-lli-teal mr-3"></i>
                Do you work with remote teams?
              </h3>
              <p className="text-gray-700 ml-10 leading-relaxed">
                Absolutely. 70% of our team coaching is fully virtual. Hybrid teams work too. Physical proximity doesn't determine team effectiveness—systems and culture do.
              </p>
            </div>
            
            <div className="pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <i className="fas fa-question-circle text-lli-orange mr-3"></i>
                What if some team members resist?
              </h3>
              <p className="text-gray-700 ml-10 leading-relaxed">
                Resistance is data. We address it directly in our assessment and early sessions. Teams that start skeptical often become the biggest advocates once they see results.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white rounded-2xl p-16 shadow-2xl">
            <h2 className="text-5xl font-bold mb-6">
              Stop Tolerating Mediocre Team Performance
            </h2>
            <p className="text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Your team has the talent. They need the system. We build it.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-lli-orange text-white px-12 py-5 rounded-xl font-bold text-xl hover:bg-lli-orange-dark transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Schedule Your Free Team Assessment
              <i className="fas fa-arrow-right ml-3"></i>
            </a>
            <p className="mt-6 text-lg">
              30-minute consultation. Zero pressure. Real insights.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
