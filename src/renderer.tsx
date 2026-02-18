import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>LLI Consulting Group LLC - Individual Coaching Services</title>
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
            
            // Toggle resource category display
            function toggleCategory(category) {
              const resourceDiv = document.getElementById(category + '-resources');
              const icon = document.getElementById(category + '-icon');
              
              // Hide all other categories
              ['leadership', 'dei', 'change', 'strategic'].forEach(cat => {
                if (cat !== category) {
                  const otherDiv = document.getElementById(cat + '-resources');
                  const otherIcon = document.getElementById(cat + '-icon');
                  if (otherDiv && !otherDiv.classList.contains('hidden')) {
                    otherDiv.classList.add('hidden');
                    if (otherIcon) {
                      otherIcon.classList.remove('fa-chevron-up');
                      otherIcon.classList.add('fa-chevron-down');
                    }
                  }
                }
              });
              
              // Toggle current category
              if (resourceDiv) {
                resourceDiv.classList.toggle('hidden');
                if (icon) {
                  if (resourceDiv.classList.contains('hidden')) {
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                  } else {
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-up');
                    // Smooth scroll to the opened section
                    setTimeout(() => {
                      resourceDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }, 100);
                  }
                }
              }
            }
            
            // Toggle blog topic display
            function toggleTopic(topic) {
              const articleDiv = document.getElementById(topic + '-articles');
              const icon = document.getElementById(topic + '-icon');
              
              // Hide all other topics
              ['leadership', 'dei', 'culture', 'implementation'].forEach(top => {
                if (top !== topic) {
                  const otherDiv = document.getElementById(top + '-articles');
                  const otherIcon = document.getElementById(top + '-icon');
                  if (otherDiv && !otherDiv.classList.contains('hidden')) {
                    otherDiv.classList.add('hidden');
                    if (otherIcon) {
                      otherIcon.classList.remove('fa-chevron-up');
                      otherIcon.classList.add('fa-chevron-down');
                    }
                  }
                }
              });
              
              // Toggle current topic
              if (articleDiv) {
                articleDiv.classList.toggle('hidden');
                if (icon) {
                  if (articleDiv.classList.contains('hidden')) {
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                  } else {
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-up');
                    // Smooth scroll to the opened section
                    setTimeout(() => {
                      articleDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }, 100);
                  }
                }
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
      </head>
      <body className="bg-gray-50">{children}</body>
    </html>
  )
})
