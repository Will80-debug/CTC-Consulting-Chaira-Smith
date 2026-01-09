import { Hono } from 'hono'
import { renderer } from './renderer'
import { HomePage } from './pages/home'
import { ServicesPage } from './pages/services'
import { AboutPage } from './pages/about'
import { ResourcesPage } from './pages/resources'
import { BlogPage } from './pages/blog'
import { CaseStudiesPage } from './pages/case-studies'
import { ContactPage } from './pages/contact'
import { PricingPage } from './pages/pricing'
import { CheckoutPage } from './pages/checkout'
import { BeyondPerformativeActionsPage } from './pages/blog-posts/beyond-performative-actions'
import { GenericBlogPostPage } from './pages/blog-posts/generic-article'
import { TeamCoachingPage } from './pages/services/team-coaching'
import { OrganizationalDevelopmentPage } from './pages/services/organizational-development'
import { LeadershipWorkshopsPage } from './pages/services/leadership-workshops'
import { AssessmentLandingPage } from './pages/assessment/landing'
import { AssessmentStartPage } from './pages/assessment/start'
import { AssessmentResultsPage } from './pages/assessment/results'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(<HomePage />)
})

app.get('/services', (c) => {
  return c.render(<ServicesPage />)
})

app.get('/services/team-coaching', (c) => {
  return c.render(<TeamCoachingPage />)
})

app.get('/services/organizational-development', (c) => {
  return c.render(<OrganizationalDevelopmentPage />)
})

app.get('/services/leadership-workshops', (c) => {
  return c.render(<LeadershipWorkshopsPage />)
})

app.get('/about', (c) => {
  return c.render(<AboutPage />)
})

app.get('/resources', (c) => {
  return c.render(<ResourcesPage />)
})

app.get('/pricing', (c) => {
  return c.render(<PricingPage />)
})

app.get('/checkout', (c) => {
  return c.render(<CheckoutPage />)
})

app.get('/blog', (c) => {
  return c.render(<BlogPage />)
})

// Featured article - special custom page
app.get('/blog/beyond-performative-actions', (c) => {
  return c.render(<BeyondPerformativeActionsPage />)
})

// Dynamic route for all other blog posts
app.get('/blog/:slug', (c) => {
  const slug = c.req.param('slug')
  return c.render(<GenericBlogPostPage slug={slug} />)
})

app.get('/case-studies', (c) => {
  return c.render(<CaseStudiesPage />)
})

app.get('/contact', (c) => {
  return c.render(<ContactPage />)
})

// API endpoint to send assessment report
app.post('/api/send-assessment-report', async (c) => {
  try {
    const body = await c.req.json()
    const { name, email, organization, results, timestamp } = body
    
    // Format the email content
    const { overallScore, dimensionScores, level } = results
    
    const emailContent = `
New Leadership Readiness Assessment Completed!

Assessment Taker Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${name}
Email: ${email}
Organization: ${organization || 'Not provided'}
Completed: ${new Date(timestamp).toLocaleString()}

Overall Results:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Overall Score: ${overallScore}/100
Performance Level: ${level.toUpperCase()}

Dimension Scores:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Leadership Effectiveness: ${dimensionScores.leadership}/100
• Culture Health: ${dimensionScores.culture}/100
• DEI Readiness: ${dimensionScores.dei}/100
• Change Capability: ${dimensionScores.change}/100
• Team Performance: ${dimensionScores.team}/100

Top Strengths:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${results.topStrengths.map(s => `• ${s.key}: ${s.score}/100`).join('\n')}

Priority Focus Areas:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${results.topGaps.map(g => `• ${g.key}: ${g.score}/100`).join('\n')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
View full results: https://lli-consulting.pages.dev/assessment/results
Contact: ${email}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `.trim()
    
    // In a production environment, you would integrate with an email service
    // For now, we'll log the email content and return success
    // You can integrate with services like:
    // - SendGrid
    // - AWS SES
    // - Resend
    // - Mailgun
    
    console.log('Assessment Report Email:', emailContent)
    console.log('Send to: Smithchiara@gmail.com')
    console.log('User Email:', email)
    
    // TODO: Integrate with actual email service
    // Example with fetch to an email service:
    /*
    const emailResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        personalizations: [{
          to: [{ email: 'Smithchiara@gmail.com' }],
          subject: `New Assessment: ${name} - Score: ${overallScore}/100`
        }],
        from: { email: 'noreply@lliconsulting.com' },
        content: [{
          type: 'text/plain',
          value: emailContent
        }]
      })
    })
    */
    
    return c.json({ 
      success: true, 
      message: 'Assessment report sent successfully',
      note: 'Email integration pending - see console logs for content'
    })
  } catch (error) {
    console.error('Error sending assessment report:', error)
    return c.json({ success: false, error: 'Failed to send report' }, 500)
  }
})

app.get('/assessment', (c) => {
  return c.render(<AssessmentLandingPage />)
})

app.get('/assessment/start', (c) => {
  return c.render(<AssessmentStartPage />)
})

app.get('/assessment/results', (c) => {
  return c.render(<AssessmentResultsPage />)
})

export default app
