import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'

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
    const { name, email, organization, message, service } = await c.req.json()
    
    // In a real application, you would process the contact form here
    // For now, we'll just return a success response
    
    return c.json({ 
      success: true, 
      message: 'Thank you for your message! We will get back to you soon.',
      data: { name, email, organization, service }
    })
  } catch (error) {
    return c.json({ success: false, message: 'Failed to process your message' }, 400)
  }
})

// Main page
app.get('/', (c) => {
  return c.html(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CTS Consulting - Equity • Strategy • Transformation</title>
    <meta name="description" content="CTS Consulting helps organizations build safe, equitable cultures using the LLI Framework™. From insight to impact with real strategy, accountability, and outcomes.">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Font Awesome -->
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- AOS Animation Library -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    
    <!-- Custom CSS -->
    <link href="/static/styles.css" rel="stylesheet">
    
    <!-- Tailwind Config -->
    <script>
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              'inter': ['Inter', 'sans-serif'],
              'playfair': ['Playfair Display', 'serif'],
            },
            colors: {
              primary: {
                50: '#f0f9ff',
                100: '#e0f2fe',
                200: '#bae6fd',
                300: '#7dd3fc',
                400: '#38bdf8',
                500: '#0ea5e9',
                600: '#0284c7',
                700: '#0369a1',
                800: '#075985',
                900: '#0c4a6e',
              },
              accent: {
                50: '#fdf4ff',
                100: '#fae8ff',
                200: '#f5d0fe',
                300: '#f0abfc',
                400: '#e879f9',
                500: '#d946ef',
                600: '#c026d3',
                700: '#a21caf',
                800: '#86198f',
                900: '#701a75',
              },
              gold: {
                50: '#fffbeb',
                100: '#fef3c7',
                200: '#fde68a',
                300: '#fcd34d',
                400: '#fbbf24',
                500: '#f59e0b',
                600: '#d97706',
                700: '#b45309',
                800: '#92400e',
                900: '#78350f',
              }
            }
          }
        }
      }
    </script>
</head>
<body class="font-inter text-gray-900 antialiased">
    
    <!-- Navigation -->
    <nav id="navbar" class="fixed w-full top-0 z-50 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex-shrink-0">
                    <a href="#home" class="text-2xl font-bold text-white font-playfair">CTS Consulting</a>
                </div>
                
                <!-- Desktop Navigation -->
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-8">
                        <a href="#home" class="nav-link">Home</a>
                        <a href="#about" class="nav-link">About</a>
                        <a href="#framework" class="nav-link">LLI Framework™</a>
                        <a href="#services" class="nav-link">Services</a>
                        <a href="#founder" class="nav-link">Founder</a>
                        <a href="#contact" class="nav-link">Contact</a>
                    </div>
                </div>
                
                <!-- Mobile menu button -->
                <div class="md:hidden">
                    <button id="mobile-menu-btn" class="text-white hover:text-gold-300 transition-colors">
                        <i class="fas fa-bars text-xl"></i>
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Mobile Navigation Menu -->
        <div id="mobile-menu" class="hidden md:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1 bg-black bg-opacity-90 backdrop-blur-sm">
                <a href="#home" class="mobile-nav-link">Home</a>
                <a href="#about" class="mobile-nav-link">About</a>
                <a href="#framework" class="mobile-nav-link">LLI Framework™</a>
                <a href="#services" class="mobile-nav-link">Services</a>
                <a href="#founder" class="mobile-nav-link">Founder</a>
                <a href="#contact" class="mobile-nav-link">Contact</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden">
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
                <a href="#contact" class="inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-gold-400 hover:to-gold-500 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    <i class="fas fa-rocket mr-2"></i>
                    Start Your Transformation
                </a>
                <a href="#framework" class="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-900 transition-all duration-300">
                    <i class="fas fa-lightbulb mr-2"></i>
                    Explore LLI Framework™
                </a>
            </div>
            
            <!-- Key Stats -->
            <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000" class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="text-center">
                    <div class="text-4xl font-bold text-gold-400 mb-2">15+</div>
                    <div class="text-gray-300">Years Experience</div>
                </div>
                <div class="text-center">
                    <div class="text-4xl font-bold text-gold-400 mb-2">100%</div>
                    <div class="text-gray-300">Equity Focused</div>
                </div>
                <div class="text-center">
                    <div class="text-4xl font-bold text-gold-400 mb-2">LLI™</div>
                    <div class="text-gray-300">Proven Framework</div>
                </div>
            </div>
        </div>
        
        <!-- Scroll indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
            <a href="#about" class="block">
                <i class="fas fa-chevron-down text-2xl"></i>
            </a>
        </div>
    </section>

    <!-- About/Vision Section -->
    <section id="about" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-playfair">Our Vision & Values</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Building a world where equity is not just a value — it's an outcome.
                </p>
            </div>
            
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
                
                <!-- Values -->
                <div data-aos="fade-left" data-aos-duration="1000">
                    <h3 class="text-2xl font-bold text-gray-900 mb-6 font-playfair">Our Core Values</h3>
                    <div class="space-y-4">
                        <div class="flex items-start">
                            <div class="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                                <i class="fas fa-balance-scale text-white text-sm"></i>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-900">Equity without ego</h4>
                                <p class="text-gray-600">Putting outcomes before recognition</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                                <i class="fas fa-ear-listen text-white text-sm"></i>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-900">Listening before leading</h4>
                                <p class="text-gray-600">Understanding before action</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                                <i class="fas fa-heart text-white text-sm"></i>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-900">Wellness is a right</h4>
                                <p class="text-gray-600">Supporting whole-person wellbeing</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="w-8 h-8 bg-gold-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                                <i class="fas fa-shield-alt text-white text-sm"></i>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-900">Safety is a strategy</h4>
                                <p class="text-gray-600">Creating psychological safety by design</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                                <i class="fas fa-compass text-white text-sm"></i>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-900">Truth is our guide</h4>
                                <p class="text-gray-600">Data-driven, authentic approaches</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- We Help You Section -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Hero Image -->
            <div class="text-center mb-12" data-aos="fade-up">
                <div class="max-w-4xl mx-auto mb-12">
                    <div class="relative rounded-2xl overflow-hidden shadow-2xl">
                        <img 
                            src="https://thediversitymovement.com/wp-content/uploads/2024/01/iStock-1481369283-scaled.jpg" 
                            alt="Diverse team collaboration representing inclusive workplace culture"
                            class="w-full h-64 sm:h-80 object-cover"
                            loading="lazy"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div class="absolute bottom-6 left-6 text-white">
                            <p class="text-lg font-semibold">Building Inclusive, Thriving Teams</p>
                            <p class="text-sm opacity-90">Real collaboration. Real outcomes.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-playfair">We Help You...</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Transform your organization with proven strategies and sustainable outcomes
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="help-card" data-aos="fade-up" data-aos-delay="100">
                    <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center h-full">
                        <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <i class="fas fa-handshake text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4">Cultivate Trust</h3>
                        <p class="text-gray-600 leading-relaxed">
                            Build authentic trust across your teams and community through transparent, equitable practices.
                        </p>
                    </div>
                </div>
                
                <div class="help-card" data-aos="fade-up" data-aos-delay="200">
                    <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center h-full">
                        <div class="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <i class="fas fa-users text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4">Safe Cultures</h3>
                        <p class="text-gray-600 leading-relaxed">
                            Create safe, honest, and equitable work cultures where everyone can thrive authentically.
                        </p>
                    </div>
                </div>
                
                <div class="help-card" data-aos="fade-up" data-aos-delay="300">
                    <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center h-full">
                        <div class="w-16 h-16 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <i class="fas fa-dna text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4">Center Equity</h3>
                        <p class="text-gray-600 leading-relaxed">
                            Embed equity and wellness into your organizational DNA for lasting transformation.
                        </p>
                    </div>
                </div>
                
                <div class="help-card" data-aos="fade-up" data-aos-delay="400">
                    <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center h-full">
                        <div class="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <i class="fas fa-cogs text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4">Systems Change</h3>
                        <p class="text-gray-600 leading-relaxed">
                            Move beyond "diversity days" into meaningful, systems-level organizational change.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- LLI Framework Section -->
    <section id="framework" class="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl sm:text-5xl font-bold mb-6 font-playfair">The LLI Framework™</h2>
                <p class="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                    Our signature 3-part system for sustainable change: From insight to impact with real strategy, accountability, and outcomes.
                </p>
                <div class="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full"></div>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Listen -->
                <div class="framework-step listen" data-aos="fade-up" data-aos-delay="100">
                    <div class="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl text-center h-full">
                        <div class="step-number mx-auto">1</div>
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
                        <div class="step-number mx-auto">2</div>
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
                        <div class="step-number mx-auto">3</div>
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
            
            <!-- Framework Visual -->
            <div class="text-center mt-16 mb-12" data-aos="fade-up" data-aos-delay="350">
                <div class="max-w-2xl mx-auto">
                    <img 
                        src="https://digitalleadership.com/wp-content/uploads/2022/11/Strategic-Planning-Process.webp" 
                        alt="Strategic planning process visualization representing the LLI Framework methodology"
                        class="w-full h-48 object-contain opacity-80 rounded-lg"
                        loading="lazy"
                    />
                </div>
            </div>
            
            <!-- Framework CTA -->
            <div class="text-center mt-16" data-aos="fade-up" data-aos-delay="400">
                <p class="text-xl text-gray-200 mb-8">
                    Ready to transform your organization with the LLI Framework™?
                </p>
                <a href="#contact" class="inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-gold-400 hover:to-gold-500 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    <i class="fas fa-comments mr-2"></i>
                    Start the Conversation
                </a>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-playfair">Core Focus Areas</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Comprehensive strategies for building equitable, thriving organizations
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Psychological Safety -->
                <div class="service-card" data-aos="fade-up" data-aos-delay="100">
                    <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-shield-alt text-white text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Psychological Safety & Workplace Culture</h3>
                    <p class="text-gray-600 leading-relaxed mb-6">
                        Create environments where all team members feel safe to contribute, question, and innovate without fear.
                    </p>
                    <ul class="space-y-2 text-gray-600">
                        <li class="flex items-center"><i class="fas fa-check text-primary-500 mr-2"></i> Culture assessments</li>
                        <li class="flex items-center"><i class="fas fa-check text-primary-500 mr-2"></i> Safety audits</li>
                        <li class="flex items-center"><i class="fas fa-check text-primary-500 mr-2"></i> Team workshops</li>
                    </ul>
                </div>
                
                <!-- Racial & Philanthropic Equity -->
                <div class="service-card" data-aos="fade-up" data-aos-delay="200">
                    <div class="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-balance-scale text-white text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Racial & Philanthropic Equity</h3>
                    <p class="text-gray-600 leading-relaxed mb-6">
                        Address systemic inequities and build truly inclusive practices that create measurable change.
                    </p>
                    <ul class="space-y-2 text-gray-600">
                        <li class="flex items-center"><i class="fas fa-check text-accent-500 mr-2"></i> Equity audits</li>
                        <li class="flex items-center"><i class="fas fa-check text-accent-500 mr-2"></i> Policy development</li>
                        <li class="flex items-center"><i class="fas fa-check text-accent-500 mr-2"></i> Impact measurement</li>
                    </ul>
                </div>
                
                <!-- Organizational Development -->
                <div class="service-card" data-aos="fade-up" data-aos-delay="300">
                    <div class="w-16 h-16 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-sitemap text-white text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Organizational Development</h3>
                    <p class="text-gray-600 leading-relaxed mb-6">
                        Redesign systems, processes, and structures to support equity and excellence simultaneously.
                    </p>
                    <ul class="space-y-2 text-gray-600">
                        <li class="flex items-center"><i class="fas fa-check text-gold-500 mr-2"></i> Systems mapping</li>
                        <li class="flex items-center"><i class="fas fa-check text-gold-500 mr-2"></i> Process redesign</li>
                        <li class="flex items-center"><i class="fas fa-check text-gold-500 mr-2"></i> Change management</li>
                    </ul>
                </div>
                
                <!-- Violence Prevention -->
                <div class="service-card" data-aos="fade-up" data-aos-delay="400">
                    <div class="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-hands-helping text-white text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Violence Prevention & Community Engagement</h3>
                    <p class="text-gray-600 leading-relaxed mb-6">
                        Build safer communities through proactive prevention strategies and authentic engagement.
                    </p>
                    <ul class="space-y-2 text-gray-600">
                        <li class="flex items-center"><i class="fas fa-check text-red-500 mr-2"></i> Prevention programs</li>
                        <li class="flex items-center"><i class="fas fa-check text-red-500 mr-2"></i> Community partnerships</li>
                        <li class="flex items-center"><i class="fas fa-check text-red-500 mr-2"></i> Training & education</li>
                    </ul>
                </div>
                
                <!-- Wellness-Centered Leadership -->
                <div class="service-card" data-aos="fade-up" data-aos-delay="500">
                    <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-heart text-white text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Wellness-Centered Leadership</h3>
                    <p class="text-gray-600 leading-relaxed mb-6">
                        Develop leaders who prioritize collective wellbeing while driving organizational success.
                    </p>
                    <ul class="space-y-2 text-gray-600">
                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i> Leadership coaching</li>
                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i> Wellness frameworks</li>
                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i> Sustainable practices</li>
                    </ul>
                </div>
                
                <!-- Strategic Planning -->
                <div class="service-card" data-aos="fade-up" data-aos-delay="600">
                    <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-chess text-white text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Strategic Planning & Implementation</h3>
                    <p class="text-gray-600 leading-relaxed mb-6">
                        Develop and execute strategies that embed equity into every aspect of your operations.
                    </p>
                    <ul class="space-y-2 text-gray-600">
                        <li class="flex items-center"><i class="fas fa-check text-purple-500 mr-2"></i> Strategic planning</li>
                        <li class="flex items-center"><i class="fas fa-check text-purple-500 mr-2"></i> Implementation support</li>
                        <li class="flex items-center"><i class="fas fa-check text-purple-500 mr-2"></i> Progress tracking</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Founder Section -->
    <section id="founder" class="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-playfair">Meet Our Founder</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    "Listen. Learn. Implement.™ Transform Together."
                </p>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Founder Image -->
                <div class="order-2 lg:order-1" data-aos="fade-right" data-aos-duration="1000">
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
                <div class="order-1 lg:order-2" data-aos="fade-left" data-aos-duration="1000">
                    <div class="space-y-6">
                        <div>
                            <h3 class="text-3xl font-bold text-gray-900 mb-2 font-playfair">Chiara Smith, MA</h3>
                            <div class="space-y-2 text-lg text-gray-600">
                                <p class="font-semibold">Founder • Equity Strategist • Community Architect</p>
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
                            
                            <p class="bg-primary-50 p-4 rounded-lg border-l-4 border-primary-500">
                                <strong>Notable Achievement:</strong> Author of "The Illusion of Inclusive Workspaces and the 
                                Psychological Safety of BIPOC Colleagues" — Grant makers In Health's most-read article of 2021.
                            </p>
                        </div>
                        
                        <!-- Credentials -->
                        <div class="grid grid-cols-2 gap-4 pt-6">
                            <div class="bg-white p-4 rounded-lg shadow-sm">
                                <div class="flex items-center">
                                    <i class="fas fa-graduation-cap text-primary-500 mr-3"></i>
                                    <div>
                                        <div class="font-semibold text-gray-900">Masters Degree</div>
                                        <div class="text-sm text-gray-600">Human Relations</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="bg-white p-4 rounded-lg shadow-sm">
                                <div class="flex items-center">
                                    <i class="fas fa-map-marker-alt text-accent-500 mr-3"></i>
                                    <div>
                                        <div class="font-semibold text-gray-900">Rochester Native</div>
                                        <div class="text-sm text-gray-600">Deep Community Roots</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Fun Fact -->
                        <div class="bg-gradient-to-r from-gold-50 to-gold-100 p-6 rounded-2xl border border-gold-200">
                            <h4 class="font-bold text-gray-900 mb-2 flex items-center">
                                <i class="fas fa-lightbulb text-gold-500 mr-2"></i>
                                Fun Fact
                            </h4>
                            <p class="text-gray-700">
                                Chiara is also the creative force behind <strong>Do Gooder: The Earth Conscious Brand™</strong> 
                                and the founder of the <strong>14621 Food Stands</strong>, a mutual-aid initiative that fed 
                                thousands during the COVID-19 pandemic.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Call to Action Section -->
    <section class="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div data-aos="fade-up" data-aos-duration="1000">
                <h2 class="text-4xl sm:text-5xl font-bold mb-6 font-playfair">
                    Your People Deserve Safe, Equity-Centered Spaces to Thrive
                </h2>
                <p class="text-xl text-gray-200 mb-8 leading-relaxed">
                    Let's co-create the systems that support that transformation.
                </p>
                <div class="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
                    <a href="#contact" class="inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-gold-400 hover:to-gold-500 transform hover:scale-105 transition-all duration-300 shadow-lg">
                        <i class="fas fa-calendar mr-2"></i>
                        Schedule Your Consultation
                    </a>
                    <a href="tel:+15859051772" class="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-900 transition-all duration-300">
                        <i class="fas fa-phone mr-2"></i>
                        Call Us Today
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-playfair">Start Your Transformation</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Ready to build safe, equitable cultures? Let's begin the conversation about your organization's journey.
                </p>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Contact Form -->
                <div data-aos="fade-right" data-aos-duration="1000">
                    <div class="bg-gradient-to-br from-gray-50 to-primary-50 p-8 rounded-2xl shadow-lg">
                        <h3 class="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                        
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
                                <label for="service" class="block text-sm font-semibold text-gray-700 mb-2">Service Interest</label>
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
                
                <!-- Contact Information -->
                <div data-aos="fade-left" data-aos-duration="1000">
                    <div class="space-y-8">
                        <!-- Contact Details -->
                        <div class="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 class="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                            
                            <div class="space-y-4">
                                <div class="flex items-center">
                                    <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                                        <i class="fas fa-envelope text-primary-600"></i>
                                    </div>
                                    <div>
                                        <div class="font-semibold text-gray-900">Email</div>
                                        <a href="mailto:hello@ctsconsulting.com" class="text-primary-600 hover:text-primary-800 transition-colors">
                                            hello@ctsconsulting.com
                                        </a>
                                    </div>
                                </div>
                                
                                <div class="flex items-center">
                                    <div class="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mr-4">
                                        <i class="fas fa-phone text-accent-600"></i>
                                    </div>
                                    <div>
                                        <div class="font-semibold text-gray-900">Phone</div>
                                        <a href="tel:+15859051772" class="text-accent-600 hover:text-accent-800 transition-colors">
                                            (585) 905-1772
                                        </a>
                                    </div>
                                </div>
                                
                                <div class="flex items-center">
                                    <div class="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mr-4">
                                        <i class="fas fa-map-marker-alt text-gold-600"></i>
                                    </div>
                                    <div>
                                        <div class="font-semibold text-gray-900">Location</div>
                                        <span class="text-gray-600">Rochester, NY & Virtual Consultations</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Why Choose Us -->
                        <div class="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl">
                            <h3 class="text-2xl font-bold text-gray-900 mb-6">Why Choose CTS Consulting?</h3>
                            
                            <div class="space-y-4">
                                <div class="flex items-start">
                                    <i class="fas fa-star text-gold-500 mr-3 mt-1"></i>
                                    <div>
                                        <div class="font-semibold text-gray-900">Proven Framework</div>
                                        <div class="text-gray-600">LLI Framework™ with measurable outcomes</div>
                                    </div>
                                </div>
                                
                                <div class="flex items-start">
                                    <i class="fas fa-users text-primary-500 mr-3 mt-1"></i>
                                    <div>
                                        <div class="font-semibold text-gray-900">15+ Years Experience</div>
                                        <div class="text-gray-600">Deep expertise in equity and transformation</div>
                                    </div>
                                </div>
                                
                                <div class="flex items-start">
                                    <i class="fas fa-heart text-accent-500 mr-3 mt-1"></i>
                                    <div>
                                        <div class="font-semibold text-gray-900">Holistic Approach</div>
                                        <div class="text-gray-600">Strategy with soul, rooted in values</div>
                                    </div>
                                </div>
                                
                                <div class="flex items-start">
                                    <i class="fas fa-chart-line text-gold-500 mr-3 mt-1"></i>
                                    <div>
                                        <div class="font-semibold text-gray-900">Real Results</div>
                                        <div class="text-gray-600">Sustainable, systems-level change</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Social Links -->
                        <div class="bg-white p-8 rounded-2xl shadow-lg text-center">
                            <h3 class="text-xl font-bold text-gray-900 mb-4">Connect With Us</h3>
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

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Brand -->
                <div>
                    <h3 class="text-2xl font-bold mb-4 font-playfair">CTS Consulting</h3>
                    <p class="text-gray-300 mb-4">
                        Building a world where equity is not just a value — it's an outcome.
                    </p>
                    <p class="text-gold-400 font-semibold">
                        "Listen. Learn. Implement.™ Transform Together."
                    </p>
                </div>
                
                <!-- Quick Links -->
                <div>
                    <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul class="space-y-2">
                        <li><a href="#about" class="text-gray-300 hover:text-gold-400 transition-colors">About</a></li>
                        <li><a href="#framework" class="text-gray-300 hover:text-gold-400 transition-colors">LLI Framework™</a></li>
                        <li><a href="#services" class="text-gray-300 hover:text-gold-400 transition-colors">Services</a></li>
                        <li><a href="#founder" class="text-gray-300 hover:text-gold-400 transition-colors">Founder</a></li>
                        <li><a href="#contact" class="text-gray-300 hover:text-gold-400 transition-colors">Contact</a></li>
                    </ul>
                </div>
                
                <!-- Contact Info -->
                <div>
                    <h4 class="text-lg font-semibold mb-4">Get in Touch</h4>
                    <div class="space-y-2 text-gray-300">
                        <p><i class="fas fa-envelope mr-2"></i> hello@ctsconsulting.com</p>
                        <p><i class="fas fa-phone mr-2"></i> (585) 905-1772</p>
                        <p><i class="fas fa-map-marker-alt mr-2"></i> Rochester, NY</p>
                    </div>
                </div>
            </div>
            
            <div class="border-t border-gray-800 mt-8 pt-8 text-center">
                <p class="text-gray-400">
                    &copy; 2024 CTS Consulting. All rights reserved. | LLI Framework™ is a trademark of CTS Consulting.
                </p>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
    <script src="/static/app.js"></script>
</body>
</html>
  `)
})

export default app