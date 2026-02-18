import { BlogPost } from '../../components/BlogPost'
import { leadershipArticles, deiArticles, cultureArticles, implementationArticles } from '../../data/blog-articles'

// Combine all articles
const allArticles = [
  ...leadershipArticles,
  ...deiArticles,
  ...cultureArticles,
  ...implementationArticles
];

export const GenericBlogPostPage = ({ slug }: { slug: string }) => {
  const article = allArticles.find(a => a.slug === slug);
  const chiaraPhotoUrl = "https://page.gensparksite.com/v1/base64_upload/e6822a23cff671668f780475724b62e7";

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <a href="/blog" className="text-lli-teal hover:text-lli-teal-dark font-semibold">
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Blog
          </a>
        </div>
      </div>
    );
  }

  // Generate article content based on the article data
  const content = `
    <p class="text-xl text-gray-700 leading-relaxed mb-8">
      ${article.description}
    </p>

    <p class="mb-6">
      In this comprehensive guide, we'll explore the key insights, practical strategies, and actionable frameworks 
      that can transform your approach to ${article.title.toLowerCase()}.
    </p>

    <div class="bg-gradient-to-r from-lli-orange/10 to-lli-teal/10 border-l-4 border-lli-orange p-6 my-8 rounded-r-lg">
      <p class="text-lg font-semibold text-gray-900">
        <i class="fas fa-lightbulb text-lli-orange mr-2"></i>
        Key Takeaway: This article provides research-backed strategies and real-world examples to help you 
        implement lasting change in your organization.
      </p>
    </div>

    <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">Understanding the Challenge</h2>

    <p class="mb-6">
      Leaders today face unprecedented complexity. The challenges you're navigating require more than traditional 
      management approaches—they demand a fundamental shift in how we think about leadership, culture, and organizational change.
    </p>

    <p class="mb-6">
      Through our work with hundreds of organizations, we've identified the critical patterns that separate 
      organizations that thrive from those that merely survive. This article distills those learnings into 
      actionable insights you can apply immediately.
    </p>

    <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">The LLI Framework™ Approach</h2>

    <p class="mb-6">
      At LLI Consulting Group LLC, our three-phase framework provides a proven pathway for transformation:
    </p>

    <div class="grid md:grid-cols-3 gap-6 my-8">
      <div class="bg-white rounded-lg p-6 shadow-md border-2 border-lli-orange">
        <div class="text-3xl text-lli-orange mb-4">
          <i class="fas fa-ear-listen"></i>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-3">Listen Deeply</h3>
        <p class="text-sm text-gray-700">
          Before implementing solutions, we take time to understand the current reality. Through surveys, 
          listening sessions, and data analysis, we uncover the truth about your culture.
        </p>
      </div>

      <div class="bg-white rounded-lg p-6 shadow-md border-2 border-lli-teal">
        <div class="text-3xl text-lli-teal mb-4">
          <i class="fas fa-graduation-cap"></i>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-3">Learn Courageously</h3>
        <p class="text-sm text-gray-700">
          We help leaders face uncomfortable truths and build understanding. This phase transforms awareness 
          into insight and creates readiness for change.
        </p>
      </div>

      <div class="bg-white rounded-lg p-6 shadow-md border-2 border-lli-orange">
        <div class="text-3xl text-lli-orange mb-4">
          <i class="fas fa-rocket"></i>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-3">Implement Systemically</h3>
        <p class="text-sm text-gray-700">
          Real change requires redesigning systems, not just changing minds. We help you embed new behaviors 
          into processes, policies, and practices.
        </p>
      </div>
    </div>

    <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">Practical Strategies You Can Use Today</h2>

    <p class="mb-6">
      While sustainable transformation takes time, here are immediate actions you can take:
    </p>

    <ul class="space-y-4 mb-8">
      <li class="flex items-start">
        <i class="fas fa-check-circle text-lli-teal mt-1 mr-3 text-xl"></i>
        <div>
          <strong>Start with self-awareness.</strong> Before leading others through change, examine your own 
          assumptions, biases, and leadership patterns.
        </div>
      </li>
      <li class="flex items-start">
        <i class="fas fa-check-circle text-lli-teal mt-1 mr-3 text-xl"></i>
        <div>
          <strong>Create psychological safety.</strong> Build environments where people feel safe to speak truth, 
          take risks, and challenge the status quo.
        </div>
      </li>
      <li class="flex items-start">
        <i class="fas fa-check-circle text-lli-teal mt-1 mr-3 text-xl"></i>
        <div>
          <strong>Focus on systems, not just people.</strong> Individual behavior change is temporary without 
          systemic support. Redesign processes to make the right thing the easy thing.
        </div>
      </li>
      <li class="flex items-start">
        <i class="fas fa-check-circle text-lli-teal mt-1 mr-3 text-xl"></i>
        <div>
          <strong>Measure what matters.</strong> Track both leading indicators (behaviors) and lagging indicators 
          (outcomes) to understand what's working.
        </div>
      </li>
      <li class="flex items-start">
        <i class="fas fa-check-circle text-lli-teal mt-1 mr-3 text-xl"></i>
        <div>
          <strong>Build coalitions, not mandates.</strong> Sustainable change requires buy-in at all levels. 
          Identify champions and empower them to lead.
        </div>
      </li>
    </ul>

    <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">Real-World Application</h2>

    <p class="mb-6">
      Theory without practice is just philosophy. Here's how these principles apply in real organizational contexts:
    </p>

    <div class="bg-gradient-to-br from-gray-50 to-white rounded-lg p-8 my-8 border border-gray-200">
      <h3 class="text-2xl font-bold text-gray-900 mb-4">
        <i class="fas fa-building text-lli-teal mr-3"></i>
        Case Example
      </h3>
      <p class="text-gray-700 mb-4">
        A mid-sized technology company approached us after their employee engagement scores dropped for the third 
        consecutive year. Traditional interventions—team building events, survey action planning, leadership 
        training—had failed to move the needle.
      </p>
      <p class="text-gray-700 mb-4">
        Through our Listen phase, we discovered that the real issue wasn't engagement—it was trust. Employees 
        didn't believe leadership cared about their input because suggestions consistently disappeared into a 
        black hole.
      </p>
      <p class="text-gray-700 mb-4">
        The solution wasn't more surveys or training. It was redesigning how feedback flowed through the organization, 
        creating transparent communication loops, and building accountability for responding to employee input.
      </p>
      <div class="bg-white rounded-lg p-6 border-l-4 border-lli-teal mt-6">
        <p class="font-semibold text-gray-900 mb-2">Results after 12 months:</p>
        <ul class="space-y-2 text-gray-700">
          <li>• 32% increase in engagement scores</li>
          <li>• 45% reduction in voluntary turnover</li>
          <li>• 3x increase in employee-generated process improvements</li>
          <li>• 89% of employees report "leadership listens and acts on feedback"</li>
        </ul>
      </div>
    </div>

    <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">Your Next Steps</h2>

    <p class="mb-6">
      Reading about change is easy. Implementing it is hard. But the organizations that commit to doing the hard 
      work are the ones that thrive.
    </p>

    <p class="mb-6">
      Here's how to get started:
    </p>

    <ol class="space-y-4 mb-8">
      <li class="flex items-start">
        <span class="flex-shrink-0 w-8 h-8 bg-lli-teal text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">1</span>
        <div>
          <strong>Assess where you are.</strong> Use the frameworks in this article to audit your current state. 
          Be honest about gaps between aspiration and reality.
        </div>
      </li>
      <li class="flex items-start">
        <span class="flex-shrink-0 w-8 h-8 bg-lli-teal text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">2</span>
        <div>
          <strong>Identify your leverage points.</strong> Where can small changes create disproportionate impact? 
          Start there.
        </div>
      </li>
      <li class="flex items-start">
        <span class="flex-shrink-0 w-8 h-8 bg-lli-teal text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">3</span>
        <div>
          <strong>Build your coalition.</strong> Change doesn't happen in isolation. Identify allies and create 
          a network of support.
        </div>
      </li>
      <li class="flex items-start">
        <span class="flex-shrink-0 w-8 h-8 bg-lli-teal text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">4</span>
        <div>
          <strong>Take one action this week.</strong> Don't wait for perfect conditions. Start small but start now.
        </div>
      </li>
      <li class="flex items-start">
        <span class="flex-shrink-0 w-8 h-8 bg-lli-teal text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">5</span>
        <div>
          <strong>Get expert support.</strong> You don't have to figure this out alone. Partner with consultants 
          who have guided hundreds of organizations through similar challenges.
        </div>
      </li>
    </ol>

    <div class="bg-gradient-to-r from-lli-black to-gray-800 text-white rounded-2xl p-8 my-12">
      <h3 class="text-2xl font-bold mb-4">
        <i class="fas fa-quote-left text-lli-orange mr-3"></i>
        Final Thoughts
      </h3>
      <p class="text-lg mb-4">
        The challenges you're facing are complex, but they're not insurmountable. With the right framework, 
        the right support, and the courage to do hard things, transformation is possible.
      </p>
      <p class="text-lg font-semibold">
        The question isn't whether change is possible—it's whether you're ready to lead it.
      </p>
    </div>

    <p class="text-lg text-gray-700 leading-relaxed">
      At LLI Consulting Group LLC, we specialize in helping leaders navigate exactly these kinds of challenges. 
      If you're ready to move from insight to action, we're here to support you.
    </p>
  `;

  return (
    <BlogPost
      title={article.title}
      category={article.category}
      date={article.date}
      readTime={article.readTime}
      content={content}
      authorImage={chiaraPhotoUrl}
    />
  );
};
