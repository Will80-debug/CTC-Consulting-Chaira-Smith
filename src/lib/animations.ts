/**
 * LLI Consulting Group™ Animation System
 * Restrained, consistent motion for authority and sophistication
 */

export const ANIMATIONS = {
  // Intersection Observer for scroll-triggered animations
  observerOptions: {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1
  },

  // Animation classes
  fadeUp: 'opacity-0 translate-y-8 transition-all duration-700 ease-out',
  fadeUpActive: 'opacity-100 translate-y-0',
  
  staggerDelay: (index: number) => `animation-delay-${index * 100}ms`,
  
  // Card animations
  cardLift: 'transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl',
  
  // Button animations
  buttonHover: 'transition-all duration-300 ease-out hover:shadow-lg hover:shadow-orange-500/50 hover:-translate-y-0.5',
  
  // Icon animations  
  iconPulse: 'animate-pulse-slow',
  
  // Progress animations
  progressLine: 'transition-all duration-1000 ease-out',
  
  // Number count animations
  counterDuration: 2000, // 2 seconds
  
  // Parallax effect
  parallax: 'transition-transform duration-300 ease-out'
}

// Initialize scroll animations
export const initScrollAnimations = () => {
  if (typeof window === 'undefined') return

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
        
        // Trigger number counters
        if (entry.target.hasAttribute('data-counter')) {
          const target = parseInt(entry.target.getAttribute('data-counter') || '0')
          animateCounter(entry.target as HTMLElement, target)
        }
        
        // Trigger progress lines
        if (entry.target.hasAttribute('data-progress')) {
          const progress = parseInt(entry.target.getAttribute('data-progress') || '0')
          (entry.target as HTMLElement).style.width = `${progress}%`
        }
      }
    })
  }, ANIMATIONS.observerOptions)

  // Observe all elements with animation classes
  document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el)
  })
}

// Animate numbers counting up
export const animateCounter = (element: HTMLElement, target: number, duration: number = ANIMATIONS.counterDuration) => {
  const start = 0
  const increment = target / (duration / 16) // 60fps
  let current = start

  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      element.textContent = target.toString()
      clearInterval(timer)
    } else {
      element.textContent = Math.floor(current).toString()
    }
  }, 16)
}

// Stagger reveal children
export const staggerReveal = (container: HTMLElement, delay: number = 100) => {
  const children = Array.from(container.children) as HTMLElement[]
  children.forEach((child, index) => {
    setTimeout(() => {
      child.classList.add('opacity-100', 'translate-y-0')
      child.classList.remove('opacity-0', 'translate-y-8')
    }, index * delay)
  })
}

// Scroll progress tracker
export const trackScrollProgress = (element: HTMLElement, callback: (progress: number) => void) => {
  const onScroll = () => {
    const rect = element.getBoundingClientRect()
    const elementHeight = rect.height
    const windowHeight = window.innerHeight
    
    // Calculate how much of the element is visible
    const visibleTop = Math.max(0, -rect.top)
    const visibleBottom = Math.min(elementHeight, windowHeight - rect.top)
    const visibleHeight = Math.max(0, visibleBottom - visibleTop)
    
    const progress = Math.min(100, (visibleHeight / elementHeight) * 100)
    callback(progress)
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll() // Initial call
  
  return () => window.removeEventListener('scroll', onScroll)
}

// Parallax effect
export const initParallax = () => {
  if (typeof window === 'undefined') return

  const parallaxElements = document.querySelectorAll('[data-parallax]')
  
  window.addEventListener('scroll', () => {
    parallaxElements.forEach(el => {
      const speed = parseFloat(el.getAttribute('data-parallax') || '0.5')
      const rect = el.getBoundingClientRect()
      const scrolled = window.scrollY
      
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const yPos = -(scrolled * speed)
        ;(el as HTMLElement).style.transform = `translateY(${yPos}px)`
      }
    })
  }, { passive: true })
}

// Animated underline on scroll
export const animatedNav = () => {
  if (typeof window === 'undefined') return

  const nav = document.querySelector('nav')
  if (!nav) return

  let lastScroll = 0

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY

    if (currentScroll > 100) {
      nav.classList.add('nav-scrolled')
    } else {
      nav.classList.remove('nav-scrolled')
    }

    lastScroll = currentScroll
  }, { passive: true })
}

// Initialize all animations on page load
export const initAnimations = () => {
  if (typeof window === 'undefined') return

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initScrollAnimations()
      initParallax()
      animatedNav()
    })
  } else {
    initScrollAnimations()
    initParallax()
    animatedNav()
  }
}
