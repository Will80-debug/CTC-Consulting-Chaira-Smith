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
