import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { Layout } from './components/Layout'

const app = new Hono()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// API routes
app.get('/api/contact', (c) => {
  return c.json({ message: 'Contact endpoint ready' })
})

app.post('/api/contact', async (c) => {
  try {
    const { name, email, organization, industry, message, service } = await c.req.json()
    
    // In a real application, you would process the contact form here
    // For now, we'll just return a success response
    
    return c.json({ 
      success: true, 
      message: 'Thank you for your message! We will get back to you soon.',
      data: { name, email, organization, industry, service }
    })
  } catch (error) {
    return c.json({ success: false, message: 'Failed to process your message' }, 400)
  }
})

// Home Page
app.get('/', (c) => {
  const content = `
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
        <!-- Background -->
        <div class="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900"></div>
        <div class="absolute inset-0 bg-black bg-opacity-30"></div>
        
        <!-- Animated background elements -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="floating-shape w-64 h-64 bg-gold-500 bg-opacity-10 rounded-full absolute top-1/4 left-1/4 animate-pulse"></div>
            <div class="floating-shape w-32 h-32 bg-accent-500 bg-opacity-20 rounded-full absolute bottom-1/4 right-1/4 animate-bounce"></div>
            <div class="floating-shape w-48 h-48 bg-primary-400 bg-opacity-15 rounded-full absolute top-3/4 left-1/2 animate-ping"></div>
        </div>
        
        <!-- Content -->
        <div class="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <div data-aos="fade-up" data-aos-duration="1000">
                <h1 class="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 font-playfair leading-tight">
                    Transform Your 
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                        Organization
                    </span>
                </h1>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <p class="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
                    Build safe, equitable cultures with the <strong class="text-gold-400">LLI Framework™</strong><br>
                    From insight to impact — with real strategy, accountability, and outcomes.
                </p>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" class="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
                <a href="/assessment" class="inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-gold-400 hover:to-gold-500 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    <i class="fas fa-chart-line mr-2"></i>
                    Take Free Assessment
                </a>
                <a href="/contact" class="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-900 transition-all duration-300">
                    <i class="fas fa-rocket mr-2"></i>
                    Start Your Transformation
                </a>
            </div>
            
            <!-- Animated Key Stats -->
            <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000" class="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div class="text-center">
                    <div class="stat-number text-4xl font-bold text-gold-400 mb-2" data-target="500" data-suffix="+">0+</div>
                    <div class="text-gray-300">Leaders Transformed</div>
                </div>
                <div class="text-center">
                    <div class="stat-number text-4xl font-bold text-gold-400 mb-2" data-target="95" data-suffix="%">0%</div>
                    <div class="text-gray-300">Client Satisfaction</div>
                </div>
                <div class="text-center">
                    <div class="stat-number text-4xl font-bold text-gold-400 mb-2" data-target="15" data-suffix="+">0+</div>
                    <div class="text-gray-300">Years Experience</div>
                </div>
                <div class="text-center">
                    <div class="stat-number text-4xl font-bold text-gold-400 mb-2" data-target="3" data-suffix="x">0x</div>
                    <div class="text-gray-300">Faster Results</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Featured Success Image -->
    <section class="py-16 bg-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12" data-aos="fade-up">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 font-playfair">Real Transformation in Action</h2>
                <div class="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                        src="https://www.consultingsuccess.com/wp-content/uploads/2024/03/strategic-consulting-meeting-agenda-framework.jpeg" 
                        alt="CTS Consulting strategic planning session with diverse leadership team"
                        class="w-full h-80 object-cover"
                        loading="lazy"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div class="absolute bottom-8 left-8 text-white">
                        <h3 class="text-2xl font-bold mb-2">Strategic Leadership Development</h3>
                        <p class="text-lg opacity-90">Empowering diverse teams through the LLI Framework™</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Quick Overview -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Content -->
                <div data-aos="fade-right">
                    <h2 class="text-4xl font-bold text-gray-900 mb-6 font-playfair">Why Choose CTS Consulting?</h2>
                    <div class="space-y-6">
                        <div class="flex items-start">
                            <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <i class="fas fa-award text-white text-xl"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold text-gray-900 mb-2">Proven LLI Framework™</h3>
                                <p class="text-gray-600">Our signature Listen → Learn → Implement methodology delivers measurable, sustainable change.</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="w-12 h-12 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <i class="fas fa-users text-white text-xl"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold text-gray-900 mb-2">15+ Years Experience</h3>
                                <p class="text-gray-600">Deep expertise in organizational transformation, leadership development, and equity strategy.</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <i class="fas fa-heart text-white text-xl"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold text-gray-900 mb-2">Holistic Approach</h3>
                                <p class="text-gray-600">Strategy with soul — rooted in values, guided by data, committed to lasting transformation.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-8 space-x-4">
                        <a href="/about" class="inline-block bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                            Learn More About Us
                        </a>
                        <a href="/framework" class="inline-block bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all">
                            Explore LLI Framework™
                        </a>
                    </div>
                </div>
                
                <!-- Image -->
                <div data-aos="fade-left">
                    <div class="relative">
                        <img 
                            src="https://www.aihr.com/wp-content/uploads/diversity-equity-inclusion-belonging-social-1.png" 
                            alt="Diversity, equity, inclusion and belonging workplace transformation"
                            class="w-full h-96 object-cover rounded-2xl shadow-xl"
                            loading="lazy"
                        />
                        <div class="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg">
                            <div class="text-center">
                                <div class="text-3xl font-bold text-primary-600 mb-1">95%</div>
                                <div class="text-sm text-gray-600">Success Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div data-aos="fade-up" data-aos-duration="1000">
                <h2 class="text-4xl sm:text-5xl font-bold mb-6 font-playfair">
                    Ready to Transform Your Organization?
                </h2>
                <p class="text-xl text-gray-200 mb-8 leading-relaxed">
                    Take our free assessment to discover where your organization stands today and get personalized recommendations for your equity journey.
                </p>
                <div class="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
                    <a href="/assessment" class="inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-gold-400 hover:to-gold-500 transform hover:scale-105 transition-all duration-300 shadow-lg">
                        <i class="fas fa-chart-line mr-2"></i>
                        Take Free Assessment
                    </a>
                    <a href="/contact" class="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-900 transition-all duration-300">
                        <i class="fas fa-calendar mr-2"></i>
                        Schedule Consultation
                    </a>
                </div>
            </div>
        </div>
    </section>
  `
  
  return c.html(Layout({ children: content, title: 'Equity Strategy & Transformation', currentPage: 'home' }))
})

// About Page
app.get('/about', (c) => {
  const content = `
    <!-- Page Header -->
    <section class="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-5xl sm:text-6xl font-bold mb-6 font-playfair">About CTS Consulting</h1>
            <p class="text-xl text-gray-200 leading-relaxed">
                Building a world where equity is not just a value — it's an outcome.
            </p>
        </div>
    </section>

    <!-- Vision & Mission -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Vision -->
                <div data-aos="fade-right" data-aos-duration="1000">
                    <div class="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl shadow-lg">
                        <div class="flex items-center mb-6">
                            <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mr-4">
                                <i class="fas fa-eye text-white text-xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-900 font-playfair">Our Vision</h3>
                        </div>
                        <p class="text-lg text-gray-700 leading-relaxed">
                            To build a world where equity is not just a value — it's an outcome. 
                            Where leaders lead with integrity, teams feel safe, and communities feel heard.
                        </p>
                    </div>
                </div>
                
                <!-- Image -->
                <div data-aos="fade-left" data-aos-duration="1000">
                    <img 
                        src="https://www.aihr.com/wp-content/uploads/building-diverse-and-inclusive-workspaces-featured.png" 
                        alt="Building diverse and inclusive workspaces"
                        class="w-full h-80 object-cover rounded-2xl shadow-xl"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    </section>

    <!-- Our Values -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-playfair">Our Core Values</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    These values guide every interaction, strategy, and outcome we create together.
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="100">
                    <div class="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-balance-scale text-white text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-4 text-center">Equity without ego</h3>
                    <p class="text-gray-600 text-center">Putting outcomes before recognition, focusing on sustainable change rather than performative actions.</p>
                </div>
                
                <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="200">
                    <div class="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-ear-listen text-white text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-4 text-center">Listening before leading</h3>
                    <p class="text-gray-600 text-center">Understanding diverse perspectives and experiences before developing strategies and solutions.</p>
                </div>
                
                <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="300">
                    <div class="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-heart text-white text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-4 text-center">Wellness is a right</h3>
                    <p class="text-gray-600 text-center">Supporting whole-person wellbeing as fundamental to creating thriving, equitable organizations.</p>
                </div>
                
                <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="400">
                    <div class="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-shield-alt text-white text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-4 text-center">Safety is a strategy</h3>
                    <p class="text-gray-600 text-center">Creating psychological safety by design, not by accident, in every organizational system.</p>
                </div>
                
                <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="500">
                    <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-compass text-white text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-4 text-center">Truth is our guide</h3>
                    <p class="text-gray-600 text-center">Data-driven, authentic approaches that address root causes, not just symptoms.</p>
                </div>
                
                <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="600">
                    <div class="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-hands-helping text-white text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-4 text-center">Collaboration over control</h3>
                    <p class="text-gray-600 text-center">Co-creating solutions with stakeholders rather than imposing external fixes.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Our Approach -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div data-aos="fade-right">
                    <img 
                        src="https://www.aihr.com/wp-content/uploads/Organizational-Transformation-Process.png" 
                        alt="Organizational transformation process methodology"
                        class="w-full h-96 object-cover rounded-2xl shadow-xl"
                        loading="lazy"
                    />
                </div>
                
                <div data-aos="fade-left">
                    <h2 class="text-4xl font-bold text-gray-900 mb-6 font-playfair">Our Approach is Different</h2>
                    <div class="space-y-6">
                        <div class="flex items-start">
                            <i class="fas fa-check-circle text-primary-500 text-xl mr-4 mt-1"></i>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900 mb-2">Intentional, Not Performative</h3>
                                <p class="text-gray-600">Every strategy is designed for concrete, measurable shifts that create lasting change.</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <i class="fas fa-check-circle text-primary-500 text-xl mr-4 mt-1"></i>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900 mb-2">Systems-Level Focus</h3>
                                <p class="text-gray-600">We move beyond "diversity days" to embed equity into organizational DNA.</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <i class="fas fa-check-circle text-primary-500 text-xl mr-4 mt-1"></i>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900 mb-2">Data-Driven Outcomes</h3>
                                <p class="text-gray-600">Real strategy, real accountability, and real outcomes that you can measure and sustain.</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <i class="fas fa-check-circle text-primary-500 text-xl mr-4 mt-1"></i>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900 mb-2">Holistic Transformation</h3>
                                <p class="text-gray-600">Strategy with soul — blending analytical rigor with authentic human connection.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl sm:text-5xl font-bold mb-6 font-playfair">Ready to Learn More?</h2>
            <p class="text-xl text-gray-200 mb-8">
                Discover how our LLI Framework™ can transform your organization's culture and outcomes.
            </p>
            <div class="space-x-6">
                <a href="/framework" class="inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Explore LLI Framework™
                </a>
                <a href="/assessment" class="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-900 transition-all duration-300">
                    Take Assessment
                </a>
            </div>
        </div>
    </section>
  `
  
  return c.html(Layout({ children: content, title: 'About Us - Our Vision & Values', currentPage: 'about' }))
})

// Framework Page
app.get('/framework', (c) => {
  const content = `
    <!-- Page Header -->
    <section class="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-5xl sm:text-6xl font-bold mb-6 font-playfair">The LLI Framework™</h1>
            <p class="text-xl text-gray-200 leading-relaxed">
                Our signature 3-part system for sustainable change: From insight to impact with real strategy, accountability, and outcomes.
            </p>
        </div>
    </section>

    <!-- Framework Overview Image -->
    <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <img 
                src="https://digitalleadership.com/wp-content/uploads/2022/11/Strategic-Planning-Process.webp" 
                alt="Strategic planning process visualization representing the LLI Framework methodology"
                class="w-full h-64 object-contain rounded-lg shadow-lg mx-auto"
                loading="lazy"
            />
        </div>
    </section>

    <!-- LLI Framework Steps -->
    <section class="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Listen -->
                <div class="framework-step listen" data-aos="fade-up" data-aos-delay="100">
                    <div class="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl text-center h-full">
                        <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6 mx-auto">1</div>
                        <h3 class="text-3xl font-bold mb-4 font-playfair">Listen</h3>
                        <div class="w-16 h-1 bg-primary-400 mx-auto mb-6 rounded-full"></div>
                        <ul class="text-left space-y-3 text-gray-200">
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-primary-400 mr-3 mt-1"></i>
                                Conduct comprehensive listening tours
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-primary-400 mr-3 mt-1"></i>
                                Assess organizational culture deeply
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-primary-400 mr-3 mt-1"></i>
                                Create safe spaces to hear truth
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-primary-400 mr-3 mt-1"></i>
                                Identify systemic barriers and gaps
                            </li>
                        </ul>
                    </div>
                </div>
                
                <!-- Learn -->
                <div class="framework-step learn" data-aos="fade-up" data-aos-delay="200">
                    <div class="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl text-center h-full">
                        <div class="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6 mx-auto">2</div>
                        <h3 class="text-3xl font-bold mb-4 font-playfair">Learn</h3>
                        <div class="w-16 h-1 bg-accent-400 mx-auto mb-6 rounded-full"></div>
                        <ul class="text-left space-y-3 text-gray-200">
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-accent-400 mr-3 mt-1"></i>
                                Build data-driven strategy
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-accent-400 mr-3 mt-1"></i>
                                Examine root causes honestly
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-accent-400 mr-3 mt-1"></i>
                                Reflect with organizational honesty
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-accent-400 mr-3 mt-1"></i>
                                Design sustainable solutions
                            </li>
                        </ul>
                    </div>
                </div>
                
                <!-- Implement -->
                <div class="framework-step implement" data-aos="fade-up" data-aos-delay="300">
                    <div class="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl text-center h-full">
                        <div class="w-16 h-16 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6 mx-auto">3</div>
                        <h3 class="text-3xl font-bold mb-4 font-playfair">Implement</h3>
                        <div class="w-16 h-1 bg-gold-400 mx-auto mb-6 rounded-full"></div>
                        <ul class="text-left space-y-3 text-gray-200">
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-gold-400 mr-3 mt-1"></i>
                                Co-create policy changes
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-gold-400 mr-3 mt-1"></i>
                                Shift behaviors and structures
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-gold-400 mr-3 mt-1"></i>
                                Ensure lasting transformation
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-gold-400 mr-3 mt-1"></i>
                                Measure real outcomes
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Framework in Action -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl font-bold text-gray-900 mb-6 font-playfair">The Framework in Action</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    See how the LLI Framework™ creates lasting organizational transformation
                </p>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div data-aos="fade-right">
                    <img 
                        src="https://www.gartner.com/ngw/globalassets/en/articles/images/how-to-increase-change-management-success.png" 
                        alt="Change management success methodology"
                        class="w-full h-96 object-cover rounded-2xl shadow-xl"
                        loading="lazy"
                    />
                </div>
                
                <div data-aos="fade-left">
                    <h3 class="text-2xl font-bold text-gray-900 mb-6">Real Results, Measured Impact</h3>
                    <div class="space-y-4">
                        <div class="bg-primary-50 p-4 rounded-lg border-l-4 border-primary-500">
                            <h4 class="font-semibold text-gray-900 mb-1">Healthcare Organization</h4>
                            <p class="text-gray-600">65% improvement in psychological safety scores within 6 months</p>
                        </div>
                        <div class="bg-gold-50 p-4 rounded-lg border-l-4 border-gold-500">
                            <h4 class="font-semibold text-gray-900 mb-1">Tech Company</h4>
                            <p class="text-gray-600">40% increase in diverse leadership representation in 1 year</p>
                        </div>
                        <div class="bg-accent-50 p-4 rounded-lg border-l-4 border-accent-500">
                            <h4 class="font-semibold text-gray-900 mb-1">Nonprofit Organization</h4>
                            <p class="text-gray-600">89% employee satisfaction with new equity initiatives</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-bold mb-6 font-playfair">Ready to Implement the LLI Framework™?</h2>
            <p class="text-xl text-gray-200 mb-8">
                Start your transformation journey with our proven methodology.
            </p>
            <div class="space-x-6">
                <a href="/assessment" class="inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Take Assessment
                </a>
                <a href="/contact" class="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-900 transition-all duration-300">
                    Schedule Consultation
                </a>
            </div>
        </div>
    </section>
  `
  
  return c.html(Layout({ children: content, title: 'LLI Framework™ - Our Proven Methodology', currentPage: 'framework' }))
})

// Assessment Page  
app.get('/assessment', (c) => {
  const content = `
    <!-- Page Header -->
    <section class="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-5xl sm:text-6xl font-bold mb-6 font-playfair">Equity Readiness Assessment</h1>
            <p class="text-xl text-gray-200 leading-relaxed">
                Discover where your organization stands today and get personalized recommendations for your transformation journey.
            </p>
        </div>
    </section>

    <!-- Assessment Tool -->
    <section class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12" data-aos="fade-up">
                <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-playfair">Where Is Your Organization Today?</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Take our free 2-minute assessment to discover your organization's equity readiness and get personalized recommendations.
                </p>
            </div>
            
            <div class="bg-gradient-to-br from-gray-50 to-primary-50 rounded-3xl p-8 shadow-xl">
                <div id="assessment-container">
                    <!-- Assessment Questions -->
                    <div id="assessment-questions" class="space-y-8">
                        <div class="assessment-question" data-question="1">
                            <h3 class="text-xl font-semibold text-gray-900 mb-4">1. How would you describe your organization's current approach to equity and inclusion?</h3>
                            <div class="space-y-3">
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q1" value="1" class="mr-3">
                                    <span>We haven't started formal equity initiatives yet</span>
                                </label>
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q1" value="2" class="mr-3">
                                    <span>We have some diversity programs but limited systematic approach</span>
                                </label>
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q1" value="3" class="mr-3">
                                    <span>We have established programs with some measurement</span>
                                </label>
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q1" value="4" class="mr-3">
                                    <span>Equity is integrated throughout our organizational systems</span>
                                </label>
                            </div>
                        </div>
                        
                        <div class="assessment-question hidden" data-question="2">
                            <h3 class="text-xl font-semibold text-gray-900 mb-4">2. How do employees typically respond when discussing workplace equity?</h3>
                            <div class="space-y-3">
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q2" value="1" class="mr-3">
                                    <span>Conversations are avoided or met with resistance</span>
                                </label>
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q2" value="2" class="mr-3">
                                    <span>Some engage, but many remain silent or uncomfortable</span>
                                </label>
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q2" value="3" class="mr-3">
                                    <span>Most participate, though depth varies</span>
                                </label>
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q2" value="4" class="mr-3">
                                    <span>Open, honest dialogue is the norm across all levels</span>
                                </label>
                            </div>
                        </div>
                        
                        <div class="assessment-question hidden" data-question="3">
                            <h3 class="text-xl font-semibold text-gray-900 mb-4">3. How do you currently measure success in equity and inclusion efforts?</h3>
                            <div class="space-y-3">
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q3" value="1" class="mr-3">
                                    <span>We don't have formal measurement systems</span>
                                </label>
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q3" value="2" class="mr-3">
                                    <span>Basic demographic tracking and compliance metrics</span>
                                </label>
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q3" value="3" class="mr-3">
                                    <span>Regular surveys and some outcome tracking</span>
                                </label>
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q3" value="4" class="mr-3">
                                    <span>Comprehensive metrics with regular assessment and adjustment</span>
                                </label>
                            </div>
                        </div>
                        
                        <div class="assessment-question hidden" data-question="4">
                            <h3 class="text-xl font-semibold text-gray-900 mb-4">4. How would you rate psychological safety in your workplace?</h3>
                            <div class="space-y-3">
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q4" value="1" class="mr-3">
                                    <span>People often fear speaking up or sharing concerns</span>
                                </label>
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q4" value="2" class="mr-3">
                                    <span>Some feel safe, but it's inconsistent across teams</span>
                                </label>
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q4" value="3" class="mr-3">
                                    <span>Most feel comfortable sharing ideas and feedback</span>
                                </label>
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q4" value="4" class="mr-3">
                                    <span>Strong culture of openness, trust, and authentic dialogue</span>
                                </label>
                            </div>
                        </div>
                        
                        <div class="assessment-question hidden" data-question="5">
                            <h3 class="text-xl font-semibold text-gray-900 mb-4">5. What's your organization's primary industry?</h3>
                            <div class="space-y-3">
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q5" value="healthcare" class="mr-3">
                                    <span>Healthcare & Medical</span>
                                </label>
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q5" value="nonprofit" class="mr-3">
                                    <span>Nonprofit & Philanthropy</span>
                                </label>
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q5" value="education" class="mr-3">
                                    <span>Education & Academic</span>
                                </label>
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q5" value="corporate" class="mr-3">
                                    <span>Corporate & Business</span>
                                </label>
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q5" value="government" class="mr-3">
                                    <span>Government & Public Sector</span>
                                </label>
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q5" value="other" class="mr-3">
                                    <span>Other</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Navigation Buttons -->
                    <div class="flex justify-between mt-8">
                        <button id="prev-btn" class="hidden bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                            <i class="fas fa-arrow-left mr-2"></i>Previous
                        </button>
                        <div class="ml-auto">
                            <button id="next-btn" class="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                                Next <i class="fas fa-arrow-right ml-2"></i>
                            </button>
                            <button id="submit-assessment" class="hidden bg-gold-500 hover:bg-gold-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors">
                                <i class="fas fa-chart-line mr-2"></i>Get My Results
                            </button>
                        </div>
                    </div>
                    
                    <!-- Progress Bar -->
                    <div class="mt-6">
                        <div class="flex justify-between text-sm text-gray-600 mb-2">
                            <span>Progress</span>
                            <span id="progress-text">1 of 5</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-3">
                            <div id="progress-bar" class="bg-gradient-to-r from-primary-500 to-accent-500 h-3 rounded-full transition-all duration-500" style="width: 20%"></div>
                        </div>
                    </div>
                </div>
                
                <!-- Assessment Results -->
                <div id="assessment-results" class="hidden">
                    <div class="text-center mb-8">
                        <div class="inline-block p-6 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full mb-4">
                            <div id="score-display" class="text-4xl font-bold text-primary-700">85</div>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-2">Your Equity Readiness Score</h3>
                        <p id="score-description" class="text-lg text-gray-600 mb-6">Your organization shows strong foundation with room for strategic growth.</p>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div class="bg-white p-6 rounded-xl shadow-sm">
                            <h4 class="text-lg font-semibold text-gray-900 mb-3">
                                <i class="fas fa-lightbulb text-gold-500 mr-2"></i>Recommended Next Steps
                            </h4>
                            <ul id="recommendations" class="space-y-2 text-gray-700">
                                <!-- Populated by JavaScript -->
                            </ul>
                        </div>
                        
                        <div class="bg-white p-6 rounded-xl shadow-sm">
                            <h4 class="text-lg font-semibold text-gray-900 mb-3">
                                <i class="fas fa-target text-primary-500 mr-2"></i>Suggested Services
                            </h4>
                            <ul id="suggested-services" class="space-y-2 text-gray-700">
                                <!-- Populated by JavaScript -->
                            </ul>
                        </div>
                    </div>
                    
                    <div class="text-center">
                        <a href="/contact" class="inline-block bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 mr-4">
                            <i class="fas fa-calendar mr-2"></i>Schedule Consultation
                        </a>
                        <button id="retake-assessment" class="inline-block bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-full font-semibold transition-colors">
                            <i class="fas fa-redo mr-2"></i>Retake Assessment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Take Assessment -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div data-aos="fade-right">
                    <h2 class="text-4xl font-bold text-gray-900 mb-6 font-playfair">Why Take This Assessment?</h2>
                    <div class="space-y-6">
                        <div class="flex items-start">
                            <i class="fas fa-map text-primary-500 text-xl mr-4 mt-1"></i>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900 mb-2">Know Where You Stand</h3>
                                <p class="text-gray-600">Get an honest assessment of your organization's current equity maturity level.</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <i class="fas fa-route text-gold-500 text-xl mr-4 mt-1"></i>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900 mb-2">Personalized Roadmap</h3>
                                <p class="text-gray-600">Receive tailored recommendations based on your specific needs and industry.</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <i class="fas fa-target text-accent-500 text-xl mr-4 mt-1"></i>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900 mb-2">Strategic Priority</h3>
                                <p class="text-gray-600">Identify the highest-impact areas for your transformation journey.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div data-aos="fade-left">
                    <img 
                        src="https://www.aihr.com/wp-content/uploads/Organizational-Transformation.jpg" 
                        alt="Organizational transformation assessment and planning"
                        class="w-full h-96 object-cover rounded-2xl shadow-xl"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    </section>
  `
  
  return c.html(Layout({ children: content, title: 'Free Equity Assessment - Discover Your Readiness', currentPage: 'assessment' }))
})

// Services Page
app.get('/services', async (c) => {
  const { servicesPage } = await import('./pages/services')
  return c.html(Layout({ children: servicesPage, title: 'Our Services - Comprehensive Equity Solutions', currentPage: 'services' }))
})

// Founder Page
app.get('/founder', (c) => {
  const content = `
    <!-- Page Header -->
    <section class="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-5xl sm:text-6xl font-bold mb-6 font-playfair">Meet Our Founder</h1>
            <p class="text-xl text-gray-200 leading-relaxed">
                "Listen. Learn. Implement.™ Transform Together."
            </p>
        </div>
    </section>

    <!-- Founder Profile -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Founder Image -->
                <div data-aos="fade-right" data-aos-duration="1000">
                    <div class="image-hover relative">
                        <div class="aspect-w-4 aspect-h-5 bg-gradient-to-br from-primary-200 to-accent-200 rounded-2xl overflow-hidden shadow-2xl">
                            <img 
                                src="https://page.gensparksite.com/v1/base64_upload/d2587015bf5f776d9212e72f6427e4d6" 
                                alt="Chiara Smith, MA - Founder and CEO of CTS Consulting" 
                                class="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                                loading="lazy"
                            />
                        </div>
                        
                        <!-- Achievement badges -->
                        <div class="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg">
                            <div class="text-center">
                                <div class="text-2xl font-bold text-primary-600">15+</div>
                                <div class="text-xs text-gray-600">Years</div>
                            </div>
                        </div>
                        
                        <div class="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-lg">
                            <div class="text-center">
                                <div class="text-lg font-bold text-gold-600">LLI™</div>
                                <div class="text-xs text-gray-600">Creator</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Founder Content -->
                <div data-aos="fade-left" data-aos-duration="1000">
                    <div class="space-y-6">
                        <div>
                            <h2 class="text-4xl font-bold text-gray-900 mb-4 font-playfair">Chiara Smith, MA</h2>
                            <div class="space-y-2 text-lg text-gray-600">
                                <p class="font-semibold text-xl">Founder • Equity Strategist • Community Architect</p>
                                <p class="font-semibold text-primary-600">CEO of CTS Consulting™ | Creator of the LLI Framework™</p>
                            </div>
                        </div>
                        
                        <div class="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full"></div>
                        
                        <div class="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Chiara Smith, MA, is a trusted equity advisor and thought leader committed to systems change. 
                                As the Founder and CEO of CTS Consulting™, she supports organizations, institutions, and communities 
                                in building cultures grounded in psychological safety, racial equity, and collective well-being.
                            </p>
                            
                            <p>
                                With over 15 years in strategy, leadership development, and community engagement work, 
                                Chiara's approach is always intentional — not performative. Whether through coaching, 
                                listening sessions, or strategic planning, her focus is on concrete shifts that last.
                            </p>
                        </div>
                        
                        <div class="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-500">
                            <h3 class="font-bold text-primary-800 mb-2 flex items-center">
                                <i class="fas fa-star text-gold-500 mr-2"></i>
                                Notable Achievement
                            </h3>
                            <p class="text-primary-700">
                                Author of "The Illusion of Inclusive Workspaces and the Psychological Safety of BIPOC Colleagues" — 
                                Grant makers In Health's most-read article of 2021, sparking national conversations on organizational wellness.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Credentials & Experience -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl font-bold text-gray-900 mb-6 font-playfair">Experience & Credentials</h2>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="bg-white p-6 rounded-xl shadow-lg text-center" data-aos="fade-up" data-aos-delay="100">
                    <i class="fas fa-graduation-cap text-4xl text-primary-500 mb-4"></i>
                    <h3 class="text-lg font-bold text-gray-900 mb-2">Masters Degree</h3>
                    <p class="text-gray-600">Human Relations</p>
                </div>
                
                <div class="bg-white p-6 rounded-xl shadow-lg text-center" data-aos="fade-up" data-aos-delay="200">
                    <i class="fas fa-award text-4xl text-gold-500 mb-4"></i>
                    <h3 class="text-lg font-bold text-gray-900 mb-2">15+ Years</h3>
                    <p class="text-gray-600">Strategy & Leadership Development</p>
                </div>
                
                <div class="bg-white p-6 rounded-xl shadow-lg text-center" data-aos="fade-up" data-aos-delay="300">
                    <i class="fas fa-map-marker-alt text-4xl text-accent-500 mb-4"></i>
                    <h3 class="text-lg font-bold text-gray-900 mb-2">Rochester Native</h3>
                    <p class="text-gray-600">Deep Community Roots</p>
                </div>
                
                <div class="bg-white p-6 rounded-xl shadow-lg text-center" data-aos="fade-up" data-aos-delay="400">
                    <i class="fas fa-lightbulb text-4xl text-green-500 mb-4"></i>
                    <h3 class="text-lg font-bold text-gray-900 mb-2">Framework Creator</h3>
                    <p class="text-gray-600">LLI Framework™ Innovator</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Leadership Philosophy -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div data-aos="fade-right">
                    <img 
                        src="https://www.ccl.org/wp-content/uploads/2023/03/leading-with-wellbeing-infographic-center-for-creative-leadership.png.webp" 
                        alt="Leading with wellbeing - culture, leadership and wellbeing interconnection"
                        class="w-full h-96 object-cover rounded-2xl shadow-xl"
                        loading="lazy"
                    />
                </div>
                
                <div data-aos="fade-left">
                    <h2 class="text-4xl font-bold text-gray-900 mb-6 font-playfair">Leadership Philosophy</h2>
                    <div class="space-y-6">
                        <blockquote class="text-lg italic text-gray-700 border-l-4 border-gold-500 pl-6">
                            "Her leadership style blends strategy with soul — rooted in values, guided by data, 
                            and committed to crafting spaces where people feel seen, safe, and supported."
                        </blockquote>
                        
                        <div class="space-y-4">
                            <div class="flex items-start">
                                <i class="fas fa-heart text-primary-500 text-xl mr-4 mt-1"></i>
                                <div>
                                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Values-Driven Leadership</h3>
                                    <p class="text-gray-600">Every strategy rooted in authentic values and genuine care for human dignity.</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start">
                                <i class="fas fa-chart-line text-accent-500 text-xl mr-4 mt-1"></i>
                                <div>
                                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Data-Informed Decisions</h3>
                                    <p class="text-gray-600">Combining emotional intelligence with analytical rigor for sustainable outcomes.</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start">
                                <i class="fas fa-users text-gold-500 text-xl mr-4 mt-1"></i>
                                <div>
                                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Community-Centered Approach</h3>
                                    <p class="text-gray-600">Building solutions with communities, not for them — authentic co-creation at every step.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Fun Facts & Impact -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl font-bold text-gray-900 mb-6 font-playfair">Beyond Consulting</h2>
                <p class="text-xl text-gray-600">Community impact and entrepreneurial ventures</p>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div class="bg-white p-8 rounded-2xl shadow-lg" data-aos="fade-up" data-aos-delay="100">
                    <div class="flex items-center mb-6">
                        <i class="fas fa-leaf text-3xl text-green-500 mr-4"></i>
                        <h3 class="text-2xl font-bold text-gray-900">Do Gooder: The Earth Conscious Brand™</h3>
                    </div>
                    <p class="text-gray-600 leading-relaxed">
                        Creative force behind an innovative sustainable brand that combines environmental consciousness 
                        with social impact, demonstrating how business can be a force for positive change.
                    </p>
                </div>
                
                <div class="bg-white p-8 rounded-2xl shadow-lg" data-aos="fade-up" data-aos-delay="200">
                    <div class="flex items-center mb-6">
                        <i class="fas fa-utensils text-3xl text-gold-500 mr-4"></i>
                        <h3 class="text-2xl font-bold text-gray-900">14621 Food Stands Initiative</h3>
                    </div>
                    <p class="text-gray-600 leading-relaxed">
                        Founded mutual-aid initiative that fed thousands during the COVID-19 pandemic, 
                        demonstrating community-centered leadership and rapid response to crisis through 
                        grassroots organizing and authentic community partnership.
                    </p>
                </div>
            </div>
            
            <!-- Speaking & Recognition -->
            <div class="mt-16 text-center" data-aos="fade-up">
                <div class="bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-2xl">
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Speaking & Recognition</h3>
                    <p class="text-lg text-gray-700 mb-6">
                        Chiara has spoken at national forums on leadership, health equity, and community power, 
                        sharing insights that bridge grassroots organizing with institutional transformation.
                    </p>
                    <div class="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                        <span class="bg-white px-4 py-2 rounded-full">National Health Equity Forums</span>
                        <span class="bg-white px-4 py-2 rounded-full">Leadership Development Conferences</span>
                        <span class="bg-white px-4 py-2 rounded-full">Community Power Symposiums</span>
                        <span class="bg-white px-4 py-2 rounded-full">Grant makers In Health Publications</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-bold mb-6 font-playfair">Ready to Work with Chiara?</h2>
            <p class="text-xl text-gray-200 mb-8">
                Experience firsthand what values-driven, data-informed leadership can do for your organization.
            </p>
            <div class="space-x-6">
                <a href="/assessment" class="inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Start with Assessment
                </a>
                <a href="/contact" class="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-900 transition-all duration-300">
                    Schedule Meeting
                </a>
            </div>
        </div>
    </section>
  `
  
  return c.html(Layout({ children: content, title: 'Chiara Smith, MA - Founder & CEO', currentPage: 'founder' }))
})

// Contact Page
app.get('/contact', (c) => {
  const content = `
    <!-- Page Header -->
    <section class="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-5xl sm:text-6xl font-bold mb-6 font-playfair">Get in Touch</h1>
            <p class="text-xl text-gray-200 leading-relaxed">
                Ready to start your transformation journey? Let's begin the conversation about building safe, equitable cultures together.
            </p>
        </div>
    </section>

    <!-- Contact Methods -->
    <section class="py-16 bg-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="text-center" data-aos="fade-up" data-aos-delay="100">
                    <div class="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-phone text-white text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                    <p class="text-gray-600 mb-3">Speak directly with our team</p>
                    <a href="tel:+15859051772" class="text-primary-600 hover:text-primary-800 font-semibold text-lg">
                        (585) 905-1772
                    </a>
                </div>
                
                <div class="text-center" data-aos="fade-up" data-aos-delay="200">
                    <div class="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-envelope text-white text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                    <p class="text-gray-600 mb-3">Send us a detailed message</p>
                    <a href="mailto:hello@ctsconsulting.com" class="text-accent-600 hover:text-accent-800 font-semibold text-lg">
                        hello@ctsconsulting.com
                    </a>
                </div>
                
                <div class="text-center" data-aos="fade-up" data-aos-delay="300">
                    <div class="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-map-marker-alt text-white text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                    <p class="text-gray-600 mb-3">Rochester, NY & Virtual</p>
                    <span class="text-gold-600 font-semibold text-lg">
                        Consultations Available
                    </span>
                </div>
            </div>
        </div>
    </section>

    <!-- Main Contact Section -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Contact Form -->
                <div data-aos="fade-right" data-aos-duration="1000">
                    <div class="bg-white p-8 rounded-2xl shadow-xl">
                        <h2 class="text-3xl font-bold text-gray-900 mb-6 font-playfair">Start Your Transformation</h2>
                        <p class="text-gray-600 mb-8">
                            Ready to build safe, equitable cultures? Let's begin the conversation about your organization's journey.
                        </p>
                        
                        <form id="contact-form" class="space-y-6">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        required 
                                        class="form-input"
                                        placeholder="Your full name"
                                    >
                                </div>
                                <div>
                                    <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        required 
                                        class="form-input"
                                        placeholder="your.email@example.com"
                                    >
                                </div>
                            </div>
                            
                            <div>
                                <label for="organization" class="block text-sm font-semibold text-gray-700 mb-2">Organization</label>
                                <input 
                                    type="text" 
                                    id="organization" 
                                    name="organization" 
                                    class="form-input"
                                    placeholder="Your organization name"
                                >
                            </div>
                            
                            <div>
                                <label for="industry" class="block text-sm font-semibold text-gray-700 mb-2">Organization Type</label>
                                <select id="industry" name="industry" class="form-input" onchange="updateServiceRecommendations()">
                                    <option value="">Select your industry...</option>
                                    <option value="healthcare">Healthcare & Medical</option>
                                    <option value="nonprofit">Nonprofit & Philanthropy</option>
                                    <option value="education">Education & Academic</option>
                                    <option value="corporate">Corporate & Business</option>
                                    <option value="government">Government & Public Sector</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            
                            <div>
                                <label for="service" class="block text-sm font-semibold text-gray-700 mb-2">
                                    Recommended Services 
                                    <span id="industry-note" class="text-primary-600 text-sm font-normal"></span>
                                </label>
                                <select id="service" name="service" class="form-input">
                                    <option value="">Select a service area...</option>
                                    <option value="lli-framework">LLI Framework™ Implementation</option>
                                    <option value="psychological-safety">Psychological Safety & Culture</option>
                                    <option value="racial-equity">Racial & Philanthropic Equity</option>
                                    <option value="organizational-development">Organizational Development</option>
                                    <option value="violence-prevention">Violence Prevention</option>
                                    <option value="wellness-leadership">Wellness-Centered Leadership</option>
                                    <option value="strategic-planning">Strategic Planning</option>
                                    <option value="consultation">General Consultation</option>
                                </select>
                            </div>
                            
                            <div id="smart-recommendations" class="hidden bg-primary-50 p-4 rounded-lg border border-primary-200">
                                <h4 class="font-semibold text-primary-800 mb-2">
                                    <i class="fas fa-lightbulb text-primary-600 mr-2"></i>
                                    Based on your industry, we recommend:
                                </h4>
                                <ul id="recommended-services-list" class="text-sm text-primary-700 space-y-1">
                                    <!-- Populated by JavaScript -->
                                </ul>
                            </div>
                            
                            <div>
                                <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows="4" 
                                    required 
                                    class="form-input"
                                    placeholder="Tell us about your organization's needs and goals..."
                                ></textarea>
                            </div>
                            
                            <button 
                                type="submit" 
                                class="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-primary-400 hover:to-primary-500 transform hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                                <i class="fas fa-paper-plane mr-2"></i>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
                
                <!-- Contact Information & Benefits -->
                <div data-aos="fade-left" data-aos-duration="1000">
                    <div class="space-y-8">
                        <!-- Why Choose Us -->
                        <div class="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 class="text-2xl font-bold text-gray-900 mb-6 font-playfair">Why Choose CTS Consulting?</h3>
                            
                            <div class="space-y-6">
                                <div class="flex items-start">
                                    <i class="fas fa-star text-gold-500 text-xl mr-4 mt-1"></i>
                                    <div>
                                        <div class="font-semibold text-gray-900 mb-1">Proven Framework</div>
                                        <div class="text-gray-600">LLI Framework™ with measurable outcomes and 95% satisfaction rate</div>
                                    </div>
                                </div>
                                
                                <div class="flex items-start">
                                    <i class="fas fa-users text-primary-500 text-xl mr-4 mt-1"></i>
                                    <div>
                                        <div class="font-semibold text-gray-900 mb-1">15+ Years Experience</div>
                                        <div class="text-gray-600">500+ leaders transformed across healthcare, nonprofit, education, and corporate sectors</div>
                                    </div>
                                </div>
                                
                                <div class="flex items-start">
                                    <i class="fas fa-heart text-accent-500 text-xl mr-4 mt-1"></i>
                                    <div>
                                        <div class="font-semibold text-gray-900 mb-1">Holistic Approach</div>
                                        <div class="text-gray-600">Strategy with soul — rooted in values, guided by data, committed to lasting change</div>
                                    </div>
                                </div>
                                
                                <div class="flex items-start">
                                    <i class="fas fa-chart-line text-gold-500 text-xl mr-4 mt-1"></i>
                                    <div>
                                        <div class="font-semibold text-gray-900 mb-1">Real Results</div>
                                        <div class="text-gray-600">3x faster transformation with sustainable, systems-level change that lasts</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Next Steps -->
                        <div class="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl border border-primary-200">
                            <h3 class="text-xl font-bold text-gray-900 mb-6">What Happens Next?</h3>
                            
                            <div class="space-y-4">
                                <div class="flex items-start">
                                    <div class="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">1</div>
                                    <div>
                                        <div class="font-semibold text-gray-900">Initial Consultation</div>
                                        <div class="text-gray-600 text-sm">30-minute discovery call to understand your needs</div>
                                    </div>
                                </div>
                                
                                <div class="flex items-start">
                                    <div class="w-6 h-6 bg-accent-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">2</div>
                                    <div>
                                        <div class="font-semibold text-gray-900">Customized Proposal</div>
                                        <div class="text-gray-600 text-sm">Tailored strategy and timeline for your transformation</div>
                                    </div>
                                </div>
                                
                                <div class="flex items-start">
                                    <div class="w-6 h-6 bg-gold-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">3</div>
                                    <div>
                                        <div class="font-semibold text-gray-900">LLI Framework™ Implementation</div>
                                        <div class="text-gray-600 text-sm">Begin your journey from insight to impact</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Social Connect -->
                        <div class="bg-white p-8 rounded-2xl shadow-lg text-center">
                            <h3 class="text-xl font-bold text-gray-900 mb-4">Connect With Us</h3>
                            <p class="text-gray-600 mb-6">Follow our journey and get insights on equity transformation</p>
                            <div class="flex justify-center space-x-4">
                                <a href="#" class="w-12 h-12 bg-primary-100 hover:bg-primary-200 rounded-full flex items-center justify-center transition-colors">
                                    <i class="fab fa-linkedin-in text-primary-600"></i>
                                </a>
                                <a href="#" class="w-12 h-12 bg-accent-100 hover:bg-accent-200 rounded-full flex items-center justify-center transition-colors">
                                    <i class="fab fa-twitter text-accent-600"></i>
                                </a>
                                <a href="#" class="w-12 h-12 bg-gold-100 hover:bg-gold-200 rounded-full flex items-center justify-center transition-colors">
                                    <i class="fab fa-instagram text-gold-600"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Alternative Contact Methods -->
    <section class="py-20 bg-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div data-aos="fade-up">
                <h2 class="text-3xl font-bold text-gray-900 mb-8 font-playfair">Prefer a Different Approach?</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl">
                        <i class="fas fa-chart-line text-4xl text-primary-600 mb-4"></i>
                        <h3 class="text-xl font-bold text-gray-900 mb-4">Start with Assessment</h3>
                        <p class="text-gray-600 mb-6">
                            Not sure where to begin? Take our free assessment to get personalized recommendations.
                        </p>
                        <a href="/assessment" class="inline-block bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-semibold transition-colors">
                            Take Free Assessment
                        </a>
                    </div>
                    
                    <div class="bg-gradient-to-br from-gold-50 to-gold-100 p-8 rounded-2xl">
                        <i class="fas fa-phone text-4xl text-gold-600 mb-4"></i>
                        <h3 class="text-xl font-bold text-gray-900 mb-4">Call Directly</h3>
                        <p class="text-gray-600 mb-6">
                            Prefer to speak directly? Call us for an immediate conversation about your needs.
                        </p>
                        <a href="tel:+15859051772" class="inline-block bg-gold-500 hover:bg-gold-600 text-black px-6 py-3 rounded-full font-semibold transition-colors">
                            (585) 905-1772
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `
  
  return c.html(Layout({ children: content, title: 'Contact Us - Start Your Transformation', currentPage: 'contact' }))
})

export default app