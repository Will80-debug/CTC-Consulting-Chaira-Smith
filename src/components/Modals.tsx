export const Modals = () => {
  return (
    <>
      {/* Assessment Modal */}
      <div id="assessment-modal" className="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
          {/* Modal Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 p-6 z-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-900">3-Minute Culture Check</h3>
              <button onclick="closeAssessmentModal()" className="text-gray-400 hover:text-gray-600">
                <i className="fas fa-times text-2xl"></i>
              </button>
            </div>
            
            {/* Progress Bar */}
            <div className="flex items-center space-x-4">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div id="assessment-progress-bar" className="bg-gradient-to-r from-lli-teal to-lli-teal-dark h-2 rounded-full transition-all duration-500" style="width: 20%"></div>
              </div>
              <span id="assessment-progress-text" className="text-sm font-semibold text-gray-600 whitespace-nowrap">Step 1 of 5</span>
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
            
            {/* Step 2 */}
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
            
            {/* Step 3 */}
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
            
            {/* Step 4 */}
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
            
            {/* Step 5 */}
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
            

            {/* Results */}
            <div id="assessment-results" className="hidden text-center">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-lli-teal to-lli-teal-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-check text-3xl text-white"></i>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Culture Check Complete!</h4>
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
                <a href="https://www.LLIConsulting.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-3 bg-gradient-to-r from-lli-teal to-lli-teal-dark hover:from-lli-teal-dark hover:to-lli-teal text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105">
                  <i className="fas fa-calendar-check text-xl"></i>
                  <span className="text-lg">Schedule Your Discovery Call</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fit Check Modal */}
      <div id="fitcheck-modal" className="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
          {/* Modal Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 p-6 z-10">
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
            {/* Step 1 */}
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
            
            {/* Step 2 */}
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
            
            {/* Step 3 */}
            <div id="fitcheck-step-3" className="hidden">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Preferred next step?</h4>
              <div className="grid gap-4">
                <div className="fitcheck-card p-6 border-2 border-gray-200 rounded-xl hover:border-lli-orange hover:bg-orange-50 cursor-pointer transition-all" onclick="selectFitCheckAnswer(3, 'call')">
                  <h5 className="font-bold text-lg mb-2">💼 Strategy Call</h5>
                  <p className="text-gray-600">30-minute discovery conversation</p>
                </div>
                <div className="fitcheck-card p-6 border-2 border-gray-200 rounded-xl hover:border-lli-orange hover:bg-orange-50 cursor-pointer transition-all" onclick="selectFitCheckAnswer(3, 'workshop')">
                  <h5 className="font-bold text-lg mb-2">🎯 Workshop</h5>
                  <p className="text-gray-600">Team learning experience</p>
                </div>
                <div className="fitcheck-card p-6 border-2 border-gray-200 rounded-xl hover:border-lli-orange hover:bg-orange-50 cursor-pointer transition-all" onclick="selectFitCheckAnswer(3, 'coaching')">
                  <h5 className="font-bold text-lg mb-2">🌟 Executive Coaching</h5>
                  <p className="text-gray-600">1:1 leadership development</p>
                </div>
              </div>
            </div>
            
            {/* Results */}
            <div id="fitcheck-results" className="hidden text-center">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-lli-orange to-lli-orange-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-check text-3xl text-white"></i>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Perfect! Here's Your Recommended Path</h4>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-teal-50 rounded-xl p-8 mb-8">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-lli-teal text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">1</div>
                    <h5 className="font-bold text-gray-900 mb-2">Discovery Call</h5>
                    <p className="text-sm text-gray-600">We listen to your challenges</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-lli-orange text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">2</div>
                    <h5 className="font-bold text-gray-900 mb-2">Custom Plan</h5>
                    <p className="text-sm text-gray-600">We design your roadmap</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-lli-teal text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">3</div>
                    <h5 className="font-bold text-gray-900 mb-2">Transformation</h5>
                    <p className="text-sm text-gray-600">We implement together</p>
                  </div>
                </div>
                <a href="https://www.LLIConsulting.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-3 bg-gradient-to-r from-lli-orange to-lli-orange-dark hover:from-lli-orange-dark hover:to-lli-orange text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105">
                  <i className="fas fa-calendar-check text-xl"></i>
                  <span className="text-lg">Book Your Strategy Call</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
