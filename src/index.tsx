import { Hono } from 'hono'
import { renderer } from './renderer'
import { HomePage } from './pages/home'
import { ServicesPage } from './pages/services'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(<HomePage />)
})

app.get('/services', (c) => {
  return c.render(<ServicesPage />)
})

// Placeholder routes for future pages
app.get('/about', (c) => {
  return c.html('<html><body><h1>About Page - Coming Soon</h1><a href="/">Back to Home</a></body></html>')
})

app.get('/case-studies', (c) => {
  return c.html('<html><body><h1>Case Studies Page - Coming Soon</h1><a href="/">Back to Home</a></body></html>')
})

export default app
