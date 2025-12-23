import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>LLI Consulting Group - Individual Coaching Services</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <link href="/static/style.css" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    'lli-orange': '#EA580C',
                    'lli-orange-dark': '#C2410C',
                    'lli-teal': '#14B8A6',
                    'lli-teal-dark': '#0F766E',
                    'lli-black': '#000000',
                    'lli-white': '#FFFFFF'
                  }
                }
              }
            }
          `
        }}></script>
        
        {/* Image Lazy Loading and Optimization */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Mobile menu toggle
            function toggleMobileMenu() {
              const menu = document.getElementById('mobile-menu');
              if (menu) {
                menu.classList.toggle('hidden');
              }
            }
            
            // Lazy load images when they enter viewport
            if ('IntersectionObserver' in window) {
              document.addEventListener('DOMContentLoaded', function() {
                const imageObserver = new IntersectionObserver((entries, observer) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      const img = entry.target;
                      if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                      }
                      img.classList.add('fade-in');
                      observer.unobserve(img);
                    }
                  });
                }, {
                  rootMargin: '50px 0px',
                  threshold: 0.01
                });

                // Observe all images with loading="lazy"
                document.querySelectorAll('img[loading="lazy"]').forEach(img => {
                  imageObserver.observe(img);
                });
              });
            }
          `
        }}></script>
        
        {/* Calendly Integration */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      </head>
      <body className="bg-gray-50">{children}</body>
    </html>
  )
})
