import { Hono } from 'hono'
import { renderer } from './renderer'
import { ServicesPage } from './pages/services'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(<ServicesPage />)
})

app.get('/services', (c) => {
  return c.render(<ServicesPage />)
})

export default app
