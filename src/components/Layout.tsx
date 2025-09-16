// Shared layout component for all pages

export function Layout({ children, title, currentPage }: { children: any, title: string, currentPage: string }) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - CTS Consulting</title>
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
    <nav id="navbar" class="fixed w-full top-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex-shrink-0">
                    <a href="/" class="text-2xl font-bold text-white font-playfair">CTS Consulting</a>
                </div>
                
                <!-- Desktop Navigation -->
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-8">
                        <a href="/" class="nav-link ${currentPage === 'home' ? 'active' : ''}">Home</a>
                        <a href="/about" class="nav-link ${currentPage === 'about' ? 'active' : ''}">About</a>
                        <a href="/framework" class="nav-link ${currentPage === 'framework' ? 'active' : ''}">LLI Framework™</a>
                        <a href="/assessment" class="nav-link ${currentPage === 'assessment' ? 'active' : ''}">Assessment</a>
                        <a href="/services" class="nav-link ${currentPage === 'services' ? 'active' : ''}">Services</a>
                        <a href="/founder" class="nav-link ${currentPage === 'founder' ? 'active' : ''}">Founder</a>
                        <a href="/contact" class="nav-link ${currentPage === 'contact' ? 'active' : ''}">Contact</a>
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
                <a href="/" class="mobile-nav-link ${currentPage === 'home' ? 'active' : ''}">Home</a>
                <a href="/about" class="mobile-nav-link ${currentPage === 'about' ? 'active' : ''}">About</a>
                <a href="/framework" class="mobile-nav-link ${currentPage === 'framework' ? 'active' : ''}">LLI Framework™</a>
                <a href="/assessment" class="mobile-nav-link ${currentPage === 'assessment' ? 'active' : ''}">Assessment</a>
                <a href="/services" class="mobile-nav-link ${currentPage === 'services' ? 'active' : ''}">Services</a>
                <a href="/founder" class="mobile-nav-link ${currentPage === 'founder' ? 'active' : ''}">Founder</a>
                <a href="/contact" class="mobile-nav-link ${currentPage === 'contact' ? 'active' : ''}">Contact</a>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-16">
        ${children}
    </main>

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
                        <li><a href="/about" class="text-gray-300 hover:text-gold-400 transition-colors">About</a></li>
                        <li><a href="/framework" class="text-gray-300 hover:text-gold-400 transition-colors">LLI Framework™</a></li>
                        <li><a href="/services" class="text-gray-300 hover:text-gold-400 transition-colors">Services</a></li>
                        <li><a href="/founder" class="text-gray-300 hover:text-gold-400 transition-colors">Founder</a></li>
                        <li><a href="/contact" class="text-gray-300 hover:text-gold-400 transition-colors">Contact</a></li>
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
  `
}