import { Hono } from 'hono'
import { renderer } from './renderer'
import { HomePage } from './pages/home'
import { ServicesPage } from './pages/services'
import { AboutPage } from './pages/about'
import { ResourcesPage } from './pages/resources'
import { BlogPage } from './pages/blog'
import { CaseStudiesPage } from './pages/case-studies'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(<HomePage />)
})

app.get('/services', (c) => {
  return c.render(<ServicesPage />)
})

app.get('/about', (c) => {
  return c.render(<AboutPage />)
})

app.get('/resources', (c) => {
  return c.render(<ResourcesPage />)
})

app.get('/blog', (c) => {
  return c.render(<BlogPage />)
})

app.get('/case-studies', (c) => {
  return c.render(<CaseStudiesPage />)
})

export default app
