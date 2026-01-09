import { Navigation } from '../../components/Navigation'
import { Footer } from '../../components/Footer'

export const LeadershipWorkshopsPage = () => {
  const heroImg = "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=2000&h=1200&fit=crop";
  const workshopImg = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop";
  const chiaraPhotoUrl = "https://page.gensparksite.com/v1/base64_upload/e6822a23cff671668f780475724b62e7";

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <img 
          src={heroImg} 
          alt="Leadership Workshop Training" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-lli-black via-lli-black/90 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <div className="inline-block bg-lli-orange text-white px-4 py-2 rounded-lg font-semibold mb-6">
                <i className="fas fa-chalkboard-teacher mr-2"></i>
                Leadership Workshops
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Leadership Training That Actually Changes Behavior.<br/>
                <span className="text-lli-orange">Not Just Slides.</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Forget death-by-PowerPoint. Our workshops are intensive, interactive, and designed to build skills your leaders will use Monday morning.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-lli-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-lli-orange-dark transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Explore Workshop Topics
                <i className="fas fa-arrow-right ml-3"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* The Problem */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-12 border-l-8 border-lli-orange">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Tired of Training That Doesn't Stick?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  <i className="fas fa-times-circle text-red-500 mr-3"></i>
                  Most Leadership Training Fails Because:
                </h3>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-start">
                    <i className="fas fa-chevron-right text-red-500 mt-2 mr-3"></i>
                    <span><strong>It's too theoretical.</strong> Great concepts. Zero application.</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-chevron-right text-red-500 mt-2 mr-3"></i>
                    <span><strong>It's too generic.</strong> One-size-fits-all doesn't fit anyone.</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-chevron-right text-red-500 mt-2 mr-3"></i>
                    <span><strong>There's no follow-through.</strong> People leave inspired. Then nothing changes.</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-chevron-right text-red-500 mt-2 mr-3"></i>
                    <span><strong>It avoids the hard stuff.</strong> Conflict? DEI? Accountability? Too uncomfortable.</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  Our Workshops Are Different:
                </h3>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-start">
                    <i className="fas fa-chevron-right text-green-500 mt-2 mr-3"></i>
                    <span><strong>Immediately actionable.</strong> Tools, frameworks, scripts you'll use this week.</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-chevron-right text-green-500 mt-2 mr-3"></i>
                    <span><strong>Customized to your context.</strong> Your challenges. Your culture. Your reality.</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-chevron-right text-green-500 mt-2 mr-3"></i>
                    <span><strong>Built for behavior change.</strong> Practice, feedback, accountability—not just learning.</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-chevron-right text-green-500 mt-2 mr-3"></i>
                    <span><strong>Unapologetically real.</strong> We go there. The conversations your organization needs.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8 border-l-4 border-lli-orange">
              <p className="text-xl font-bold text-gray-900 mb-3">
                Here's what we believe:
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                <strong>Leadership is a skill, not a personality trait.</strong> It can be taught. It must be practiced. And it requires courage to do differently. Our workshops give your leaders permission, tools, and support to lead better—starting immediately.
              </p>
            </div>
          </div>
        </section>

        {/* Workshop Topics */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Most Requested Workshops
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each workshop is fully customizable. Half-day, full-day, or multi-session formats available.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Workshop 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-lli-teal">
              <div className="flex items-center mb-4">
                <div className="bg-lli-teal text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mr-4">
                  <i className="fas fa-comments"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Courageous Conversations</h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Navigate difficult dialogue without destroying relationships. Perfect for leaders avoiding feedback, conflict, or accountability conversations.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start text-gray-700">
                  <i className="fas fa-check text-lli-teal mt-1 mr-2"></i>
                  <span>The 5-step conversation framework</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <i className="fas fa-check text-lli-teal mt-1 mr-2"></i>
                  <span>Managing emotional reactions (yours and theirs)</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <i className="fas fa-check text-lli-teal mt-1 mr-2"></i>
                  <span>Live practice with real scenarios</span>
                </li>
              </ul>
              <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-lli-teal">
                <p className="font-bold text-gray-900">Duration: Half-day or full-day</p>
                <p className="text-gray-700 text-sm">Ideal for: Managers, directors, executives</p>
              </div>
            </div>

            {/* Workshop 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-lli-orange">
              <div className="flex items-center mb-4">
                <div className="bg-lli-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mr-4">
                  <i className="fas fa-users-cog"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Leading Through Change</h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Lead teams through uncertainty, resistance, and transformation. Essential for organizations navigating restructuring, new strategy, or culture change.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start text-gray-700">
                  <i className="fas fa-check text-lli-orange mt-1 mr-2"></i>
                  <span>Change psychology & resistance management</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <i className="fas fa-check text-lli-orange mt-1 mr-2"></i>
                  <span>Communication strategies that build trust</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <i className="fas fa-check text-lli-orange mt-1 mr-2"></i>
                  <span>Leading when you don't have all the answers</span>
                </li>
              </ul>
              <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-lli-orange">
                <p className="font-bold text-gray-900">Duration: Full-day</p>
                <p className="text-gray-700 text-sm">Ideal for: Change leaders, executives, project managers</p>
              </div>
            </div>

            {/* Workshop 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-lli-teal">
              <div className="flex items-center mb-4">
                <div className="bg-lli-teal text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mr-4">
                  <i className="fas fa-balance-scale"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Equity-Centered Leadership</h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Move beyond diversity training to equity-driven action. For leaders ready to dismantle bias and build inclusive teams that actually work.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start text-gray-700">
                  <i className="fas fa-check text-lli-teal mt-1 mr-2"></i>
                  <span>Recognizing & interrupting bias in decisions</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <i className="fas fa-check text-lli-teal mt-1 mr-2"></i>
                  <span>Building psychological safety for all identities</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <i className="fas fa-check text-lli-teal mt-1 mr-2"></i>
                  <span>Equity audits of your team practices</span>
                </li>
              </ul>
              <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-lli-teal">
                <p className="font-bold text-gray-900">Duration: Full-day or 2-day deep dive</p>
                <p className="text-gray-700 text-sm">Ideal for: All leaders, especially hiring managers</p>
              </div>
            </div>

            {/* Workshop 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-lli-orange">
              <div className="flex items-center mb-4">
                <div className="bg-lli-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mr-4">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Strategic Thinking for Leaders</h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Develop the strategic mindset executives need. Move beyond tactical firefighting to big-picture thinking and long-term impact.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start text-gray-700">
                  <i className="fas fa-check text-lli-orange mt-1 mr-2"></i>
                  <span>Strategic analysis frameworks</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <i className="fas fa-check text-lli-orange mt-1 mr-2"></i>
                  <span>Connecting daily work to organizational vision</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <i className="fas fa-check text-lli-orange mt-1 mr-2"></i>
                  <span>Making high-stakes decisions with incomplete data</span>
                </li>
              </ul>
              <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-lli-orange">
                <p className="font-bold text-gray-900">Duration: Full-day</p>
                <p className="text-gray-700 text-sm">Ideal for: Senior managers, directors, VPs</p>
              </div>
            </div>

            {/* Workshop 5 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-lli-teal">
              <div className="flex items-center mb-4">
                <div className="bg-lli-teal text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mr-4">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Building High-Trust Teams</h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Trust is the foundation of performance. Learn the specific behaviors that build—or destroy—trust on teams.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start text-gray-700">
                  <i className="fas fa-check text-lli-teal mt-1 mr-2"></i>
                  <span>The trust equation: credibility + reliability + intimacy</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <i className="fas fa-check text-lli-teal mt-1 mr-2"></i>
                  <span>Rebuilding trust after it's broken</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <i className="fas fa-check text-lli-teal mt-1 mr-2"></i>
                  <span>Creating psychological safety</span>
                </li>
              </ul>
              <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-lli-teal">
                <p className="font-bold text-gray-900">Duration: Half-day</p>
                <p className="text-gray-700 text-sm">Ideal for: Team leaders, project managers</p>
              </div>
            </div>

            {/* Workshop 6 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-lli-orange">
              <div className="flex items-center mb-4">
                <div className="bg-lli-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mr-4">
                  <i className="fas fa-user-tie"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Executive Presence & Influence</h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Command the room without being domineering. Influence without authority. Lead with gravitas and authenticity.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start text-gray-700">
                  <i className="fas fa-check text-lli-orange mt-1 mr-2"></i>
                  <span>Communication techniques for impact</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <i className="fas fa-check text-lli-orange mt-1 mr-2"></i>
                  <span>Navigating organizational politics</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <i className="fas fa-check text-lli-orange mt-1 mr-2"></i>
                  <span>Personal brand & leadership reputation</span>
                </li>
              </ul>
              <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-lli-orange">
                <p className="font-bold text-gray-900">Duration: Half-day or full-day</p>
                <p className="text-gray-700 text-sm">Ideal for: Emerging executives, high-potential leaders</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center bg-gradient-to-r from-gray-50 to-teal-50 rounded-xl p-8 border-l-4 border-lli-teal">
            <p className="text-xl font-bold text-gray-900 mb-3">
              <i className="fas fa-lightbulb text-lli-orange mr-3"></i>
              Need something custom?
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We design bespoke workshops for your organization's specific challenges. Conflict resolution? Performance management? First-time manager bootcamp? We build it.
            </p>
          </div>
        </section>

        {/* How Workshops Work */}
        <section className="mb-20 bg-white rounded-2xl shadow-xl p-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            What Makes Our Workshops Different
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-lli-teal to-lli-teal-dark text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Interactive & Experiential</h3>
              <p className="text-gray-700 leading-relaxed">
                70% practice, 30% teaching. Live simulations, role plays, case studies from your organization, and real-time feedback.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-lli-orange to-lli-orange-dark text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                <i className="fas fa-cog"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fully Customized</h3>
              <p className="text-gray-700 leading-relaxed">
                We interview your leaders beforehand. We tailor content to your culture. We use your language, your examples, your reality.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-lli-teal to-lli-teal-dark text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                <i className="fas fa-rocket"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Built for Transfer</h3>
              <p className="text-gray-700 leading-relaxed">
                Post-workshop action planning. 30-day follow-up sessions. Peer accountability groups. We ensure learning becomes behavior change.
              </p>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={workshopImg} 
                alt="Leadership Workshop in Action" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Workshops That Actually Work
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 border-l-4 border-green-500">
                  <p className="text-xl font-bold text-gray-900 mb-2">92% Apply Within 30 Days</p>
                  <p className="text-gray-700">Participants report using workshop tools within a month—not just "learned something."</p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-6 border-l-4 border-blue-500">
                  <p className="text-xl font-bold text-gray-900 mb-2">4.8/5.0 Average Rating</p>
                  <p className="text-gray-700">Across 150+ workshops delivered. Most common feedback: "Best training I've ever attended."</p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-orange-50 rounded-xl p-6 border-l-4 border-purple-500">
                  <p className="text-xl font-bold text-gray-900 mb-2">35% Performance Increase</p>
                  <p className="text-gray-700">Teams whose leaders complete our workshops show measurable improvement in engagement and performance metrics.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="mb-20 bg-gradient-to-r from-lli-black to-gray-800 rounded-2xl p-12 text-white">
          <div className="mb-8">
            <div className="flex items-start space-x-6">
              <img 
                src={chiaraPhotoUrl} 
                alt="Client Testimonial" 
                className="w-24 h-24 rounded-full border-4 border-lli-teal flex-shrink-0"
              />
              <div>
                <p className="text-lg leading-relaxed mb-4 italic">
                  "I've attended leadership training before. This was nothing like it. Chiara didn't sugarcoat anything. She challenged us, made us uncomfortable, and gave us tools we used that same week. Six months later, my team still references concepts from the workshop. That's never happened before."
                </p>
                <p className="font-bold text-lg">— Director of Operations, Manufacturing Company</p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex items-start space-x-6">
              <img 
                src={chiaraPhotoUrl} 
                alt="Client Testimonial" 
                className="w-24 h-24 rounded-full border-4 border-lli-orange flex-shrink-0"
              />
              <div>
                <p className="text-lg leading-relaxed mb-4 italic">
                  "We brought Chiara in for an equity-centered leadership workshop with our executive team. It was the most honest conversation we'd ever had as a group. She created safety to say hard things, then gave us frameworks to actually do something about them. Worth every penny."
                </p>
                <p className="font-bold text-lg">— CEO, Social Impact Organization</p>
              </div>
            </div>
          </div>
        </section>

        {/* Investment */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-lli-orange to-lli-orange-dark text-white rounded-2xl p-12 shadow-2xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Workshop Investment
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <p className="text-3xl font-bold mb-2">$5,000</p>
                  <p className="text-xl mb-4">Half-Day Workshop</p>
                  <p className="text-sm opacity-90">Up to 25 participants</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <p className="text-3xl font-bold mb-2">$8,500</p>
                  <p className="text-xl mb-4">Full-Day Workshop</p>
                  <p className="text-sm opacity-90">Up to 25 participants</p>
                </div>
              </div>
              
              <p className="text-lg mb-8 leading-relaxed opacity-90">
                Includes: Pre-workshop leader interviews, customized content, all materials, post-workshop action planning, and 30-day follow-up session.
              </p>
              
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-8">
                <p className="text-lg font-bold mb-3">
                  <i className="fas fa-gift mr-3"></i>
                  Workshop Series Pricing:
                </p>
                <p className="text-base leading-relaxed">
                  Book 3+ workshops and save 15%. Create a year-long leadership development track customized to your organization's needs.
                </p>
              </div>
              
              <a 
                href="/contact" 
                className="inline-block bg-white text-lli-orange px-12 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Book Your Workshop
                <i className="fas fa-arrow-right ml-3"></i>
              </a>
              
              <p className="mt-6 text-sm opacity-80">
                Limited dates available. Currently booking 2-3 months in advance.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20 bg-white rounded-2xl shadow-xl p-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Workshop FAQs
          </h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <i className="fas fa-question-circle text-lli-teal mr-3"></i>
                Can workshops be delivered virtually?
              </h3>
              <p className="text-gray-700 ml-10 leading-relaxed">
                Yes! We've designed all our workshops for both in-person and virtual delivery. Virtual workshops are highly interactive with breakout rooms, polls, chat engagement, and live practice.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <i className="fas fa-question-circle text-lli-orange mr-3"></i>
                What's the ideal group size?
              </h3>
              <p className="text-gray-700 ml-10 leading-relaxed">
                12-25 participants is optimal for interactivity. Smaller groups (8-12) allow for deeper work. Larger groups (25-50) work for keynote-style sessions with less individual practice.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <i className="fas fa-question-circle text-lli-teal mr-3"></i>
                Do you offer certifications or continuing education credits?
              </h3>
              <p className="text-gray-700 ml-10 leading-relaxed">
                We provide certificates of completion for all workshops. For HR professionals seeking continuing education credits (SHRM, HRCI), we can apply for credit approval with advance notice.
              </p>
            </div>
            
            <div className="pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <i className="fas fa-question-circle text-lli-orange mr-3"></i>
                Can we create a multi-session leadership development program?
              </h3>
              <p className="text-gray-700 ml-10 leading-relaxed">
                Absolutely. Many organizations choose a series of workshops spread over 6-12 months to build comprehensive leadership capability. We design custom leadership tracks.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white rounded-2xl p-16 shadow-2xl">
            <h2 className="text-5xl font-bold mb-6">
              Your Leaders Deserve Real Training
            </h2>
            <p className="text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Not another forgettable seminar. Training that transforms how they lead.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-lli-orange text-white px-12 py-5 rounded-xl font-bold text-xl hover:bg-lli-orange-dark transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Explore Workshop Options
              <i className="fas fa-arrow-right ml-3"></i>
            </a>
            <p className="mt-6 text-lg">
              Free consultation to discuss your leadership development needs.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
