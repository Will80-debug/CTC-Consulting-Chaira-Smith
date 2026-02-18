import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

interface BlogPostProps {
  title: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
  authorImage: string;
}

export const BlogPost = ({ title, category, date, readTime, content, authorImage }: BlogPostProps) => {
  const categoryColors: Record<string, string> = {
    'Leadership': 'lli-teal',
    'DEI & Equity': 'lli-orange',
    'Culture Change': 'lli-teal',
    'Implementation': 'lli-orange'
  };

  const color = categoryColors[category] || 'lli-teal';
  const heroImage = "https://sspark.genspark.ai/cfimages?u1=ghImmXMbKrGBMxYuscEj017YLMrF0DuubmxINuyW3IRDyr7yWiBRs7RVJ1n4aDLhNcPJo7gV7gzv8zDCMDIWIhu%2BIXi%2FBTIEIfDfaGUQ5kPejVntVrPMHks0xMBbNPeZRMX41IgOaDi2QFodGwkIOOAsYXw2vpMdhbYvKMsTc8bXCmCVH%2BW2dVHsh0601%2BVtEvftdaQ7ixSB3FDhc9NXrZUy3MBL&u2=DRJBwiDrnjEHDgQ%2B&width=2560";

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <a href="/blog" className="text-gray-500 hover:text-gray-700 transition-colors">
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Blog
          </a>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className={`bg-${color}/20 text-${color} px-4 py-1 rounded-full text-sm font-semibold uppercase`}>
              {category}
            </span>
            <span className="text-gray-500 text-sm">{readTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h1>

          <div className="flex items-center gap-4 pb-8 border-b border-gray-200">
            <img 
              src={authorImage} 
              alt="Chiara Smith" 
              className="w-16 h-16 rounded-full"
            />
            <div>
              <p className="font-bold text-gray-900">Chiara Smith</p>
              <p className="text-sm text-gray-600">Founder & CEO, LLI Consulting Group LLC</p>
              <p className="text-sm text-gray-500">{date}</p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img 
            src={heroImage} 
            alt={title}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Leadership?
            </h3>
            <p className="text-gray-700 mb-6">
              Let's discuss how LLI Consulting Group LLC can help you implement these insights in your organization.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-gradient-to-r from-lli-teal to-lli-teal-dark text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105"
            >
              Schedule a Discovery Call
            </a>
          </div>
        </footer>

        {/* Related Articles */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="/blog" className="block bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <span className={`text-xs text-${color} font-semibold uppercase`}>{category}</span>
              <h4 className="font-bold text-gray-900 mt-2 mb-2">Explore More {category} Articles</h4>
              <p className="text-sm text-gray-600">
                <i className="fas fa-arrow-right mr-2"></i>
                View all articles
              </p>
            </a>

            <a href="/resources" className="block bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <span className="text-xs text-lli-orange font-semibold uppercase">RESOURCES</span>
              <h4 className="font-bold text-gray-900 mt-2 mb-2">Download Free Resources</h4>
              <p className="text-sm text-gray-600">
                <i className="fas fa-download mr-2"></i>
                Access our toolkit
              </p>
            </a>
          </div>
        </section>
      </article>

      <Footer />
    </div>
  )
}
