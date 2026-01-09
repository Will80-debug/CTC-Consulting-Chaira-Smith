import { Navigation } from '../../components/Navigation'
import { Footer } from '../../components/Footer'

export const AssessmentStartPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Leadership Readiness Assessment
          </h1>
          <p className="text-xl text-gray-600">
            Answer 25 questions honestly. There are no right or wrong answers—only insights.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span id="progress-text" className="text-sm font-semibold text-gray-700">Question 1 of 25</span>
            <span id="progress-percent" className="text-sm font-semibold text-lli-teal">4%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div id="progress-bar" className="bg-gradient-to-r from-lli-teal to-lli-orange h-3 rounded-full transition-all duration-500" style={{ width: '4%' }}></div>
          </div>
        </div>

        {/* Assessment Form */}
        <form id="assessment-form" className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          
          {/* Current Dimension Indicator */}
          <div id="dimension-indicator" className="mb-8 p-4 bg-gradient-to-r from-lli-teal/10 to-lli-orange/10 rounded-lg border-l-4 border-lli-teal">
            <div className="flex items-center">
              <i id="dimension-icon" className="fas fa-user-tie text-2xl text-lli-orange mr-3"></i>
              <div>
                <p className="text-sm text-gray-600 font-semibold">Current Dimension</p>
                <p id="dimension-name" className="text-lg font-bold text-gray-900">Leadership Effectiveness</p>
              </div>
            </div>
          </div>

          {/* Question Container */}
          <div id="question-container">
            {/* Questions will be loaded dynamically via JavaScript */}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-8 border-t border-gray-200">
            <button
              type="button"
              id="prev-btn"
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Previous
            </button>
            
            <button
              type="button"
              id="next-btn"
              className="px-6 py-3 bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled
            >
              Next
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
            
            <button
              type="button"
              id="submit-btn"
              className="hidden px-8 py-3 bg-gradient-to-r from-lli-orange to-lli-orange-dark text-white rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              See My Results
              <i className="fas fa-chart-line ml-2"></i>
            </button>
          </div>
        </form>

        {/* Tips */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
          <div className="flex items-start">
            <i className="fas fa-lightbulb text-blue-500 text-2xl mr-4 mt-1"></i>
            <div>
              <p className="font-bold text-gray-900 mb-2">Assessment Tip</p>
              <p className="text-gray-700">
                Answer based on how things actually are in your organization, not how you wish they were. Honest answers lead to useful insights.
              </p>
            </div>
          </div>
        </div>

      </main>

      <Footer />
      
      <script src="/static/assessment.js"></script>
    </div>
  )
}
