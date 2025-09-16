// CTS Consulting Website JavaScript

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100
    });
    
    initializeNavigation();
    initializeInteractiveElements();
    initializeContactForm();
    initializeScrollEffects();
    initializeCounterAnimation();
});

// Navigation functionality
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                mobileMenu.classList.add('hidden');
            }
        });
    });
    
    // Active navigation highlight
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Interactive elements
function initializeInteractiveElements() {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.help-card, .service-card, .framework-step');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });
    
    // Interactive button effects
    const buttons = document.querySelectorAll('a[href^="#"], .btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Parallax effect for floating shapes
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.floating-shape');
        
        shapes.forEach((shape, index) => {
            const rate = scrolled * -0.5 * (index + 1);
            shape.style.transform = `translateY(${rate}px) rotate(${rate * 0.1}deg)`;
        });
    });
}

// Contact form functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = '<span class="loading-spinner mr-2"></span>Sending...';
            submitBtn.disabled = true;
            
            try {
                const response = await axios.post('/api/contact', data);
                
                if (response.data.success) {
                    showNotification('Thank you! Your message has been sent successfully.', 'success');
                    this.reset();
                } else {
                    throw new Error(response.data.message);
                }
            } catch (error) {
                showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
                console.error('Contact form error:', error);
            } finally {
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }
}

// Scroll effects
function initializeScrollEffects() {
    // Reveal animations
    const revealElements = document.querySelectorAll('.text-reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const spans = entry.target.querySelectorAll('span');
                spans.forEach((span, index) => {
                    setTimeout(() => {
                        span.style.animationDelay = `${index * 0.1}s`;
                        span.classList.add('animate');
                    }, index * 50);
                });
            }
        });
    }, { threshold: 0.5 });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
    
    // Progress indicators
    window.addEventListener('scroll', function() {
        const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        document.documentElement.style.setProperty('--scroll-progress', scrolled + '%');
    });
}

// Counter animation
function initializeCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.innerText);
                const duration = 2000; // 2 seconds
                const start = performance.now();
                
                const animate = (currentTime) => {
                    const elapsed = currentTime - start;
                    const progress = Math.min(elapsed / duration, 1);
                    
                    // Easing function
                    const easeOutCubic = 1 - Math.pow(1 - progress, 3);
                    const current = Math.floor(target * easeOutCubic);
                    
                    counter.innerText = current + (counter.dataset.suffix || '');
                    
                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    } else {
                        counter.innerText = target + (counter.dataset.suffix || '');
                    }
                };
                
                requestAnimationFrame(animate);
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.7 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Utility functions
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 max-w-sm p-4 rounded-lg shadow-lg transform translate-x-full transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' : 
        type === 'error' ? 'bg-red-500 text-white' : 
        'bg-blue-500 text-white'
    }`;
    
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas ${
                type === 'success' ? 'fa-check-circle' : 
                type === 'error' ? 'fa-exclamation-circle' : 
                'fa-info-circle'
            } mr-3"></i>
            <span>${message}</span>
            <button class="ml-4 text-white hover:text-gray-200" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(full)';
        setTimeout(() => {
            if (notification.parentElement) {
                notification.parentElement.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const animateOnScrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('[data-aos]');
    animateElements.forEach(element => {
        animateOnScrollObserver.observe(element);
    });
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // Escape key closes mobile menu
    if (e.key === 'Escape') {
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.add('hidden');
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(() => {
    // Scroll-dependent animations and effects
    updateScrollProgress();
    updateParallaxElements();
}, 16); // ~60fps

function updateScrollProgress() {
    const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    document.documentElement.style.setProperty('--scroll-progress', scrolled + '%');
}

function updateParallaxElements() {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.floating-shape');
    
    shapes.forEach((shape, index) => {
        const rate = scrolled * -0.3 * (index + 1);
        shape.style.transform = `translateY(${rate}px) rotate(${rate * 0.05}deg)`;
    });
}

window.addEventListener('scroll', throttledScrollHandler);

// Interactive Assessment Tool
function initializeAssessmentTool() {
    let currentQuestion = 1;
    const totalQuestions = 5;
    let responses = {};
    
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const submitBtn = document.getElementById('submit-assessment');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    
    if (!nextBtn) return; // Assessment not on this page
    
    // Next button handler
    nextBtn.addEventListener('click', function() {
        const currentQ = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
        if (!currentQ) {
            showNotification('Please select an answer before continuing.', 'error');
            return;
        }
        
        responses[`q${currentQuestion}`] = {
            value: currentQ.value,
            industry: currentQuestion === 5 ? currentQ.value : null
        };
        
        if (currentQuestion < totalQuestions) {
            showQuestion(currentQuestion + 1);
        }
    });
    
    // Previous button handler
    prevBtn.addEventListener('click', function() {
        if (currentQuestion > 1) {
            showQuestion(currentQuestion - 1);
        }
    });
    
    // Submit assessment handler
    submitBtn.addEventListener('click', function() {
        const currentQ = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
        if (!currentQ) {
            showNotification('Please select an answer before submitting.', 'error');
            return;
        }
        
        responses[`q${currentQuestion}`] = {
            value: currentQ.value,
            industry: currentQuestion === 5 ? currentQ.value : null
        };
        
        calculateAndShowResults();
    });
    
    // Retake assessment handler
    document.getElementById('retake-assessment')?.addEventListener('click', function() {
        resetAssessment();
    });
    
    function showQuestion(questionNum) {
        // Hide all questions
        document.querySelectorAll('.assessment-question').forEach(q => q.classList.add('hidden'));
        
        // Show current question
        document.querySelector(`[data-question="${questionNum}"]`).classList.remove('hidden');
        
        currentQuestion = questionNum;
        updateProgress();
        updateButtons();
    }
    
    function updateProgress() {
        const progress = (currentQuestion / totalQuestions) * 100;
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${currentQuestion} of ${totalQuestions}`;
    }
    
    function updateButtons() {
        prevBtn.classList.toggle('hidden', currentQuestion === 1);
        
        if (currentQuestion === totalQuestions) {
            nextBtn.classList.add('hidden');
            submitBtn.classList.remove('hidden');
        } else {
            nextBtn.classList.remove('hidden');
            submitBtn.classList.add('hidden');
        }
    }
    
    function calculateAndShowResults() {
        // Calculate score (1-4 scale, converted to 0-100)
        const numericAnswers = Object.values(responses)
            .map(r => parseInt(r.value))
            .filter(v => !isNaN(v));
        
        const avgScore = numericAnswers.reduce((sum, val) => sum + val, 0) / numericAnswers.length;
        const finalScore = Math.round(((avgScore - 1) / 3) * 100);
        
        // Get industry for recommendations
        const industry = responses.q5?.value || 'other';
        
        // Show results
        document.getElementById('assessment-questions').classList.add('hidden');
        document.getElementById('assessment-results').classList.remove('hidden');
        
        // Update score display
        animateScore(finalScore);
        updateScoreDescription(finalScore);
        updateRecommendations(finalScore, industry);
        
        // Hide navigation
        document.querySelector('.flex.justify-between').classList.add('hidden');
        document.querySelector('.mt-6').classList.add('hidden'); // Progress bar
    }
    
    function animateScore(targetScore) {
        const scoreDisplay = document.getElementById('score-display');
        let currentScore = 0;
        const increment = targetScore / 50; // 50 steps
        
        const timer = setInterval(() => {
            currentScore += increment;
            if (currentScore >= targetScore) {
                currentScore = targetScore;
                clearInterval(timer);
            }
            scoreDisplay.textContent = Math.round(currentScore);
        }, 30);
    }
    
    function updateScoreDescription(score) {
        const description = document.getElementById('score-description');
        let message = '';
        
        if (score <= 25) {
            message = "Your organization is at the beginning of its equity journey. Great potential for transformative growth!";
        } else if (score <= 50) {
            message = "Your organization has started the equity journey with some foundations in place. Ready for strategic development!";
        } else if (score <= 75) {
            message = "Your organization shows strong equity foundations with room for strategic advancement and deeper integration.";
        } else {
            message = "Your organization demonstrates advanced equity practices! Focus on refinement and sustained excellence.";
        }
        
        description.textContent = message;
    }
    
    function updateRecommendations(score, industry) {
        const recommendationsList = document.getElementById('recommendations');
        const servicesList = document.getElementById('suggested-services');
        
        // General recommendations based on score
        let recommendations = [];
        if (score <= 25) {
            recommendations = [
                'Start with organizational culture assessment',
                'Establish psychological safety foundations',
                'Begin leadership equity training',
                'Create listening tour strategy'
            ];
        } else if (score <= 50) {
            recommendations = [
                'Implement comprehensive LLI Framework™',
                'Develop systematic measurement tools',
                'Expand leadership development programs',
                'Strengthen employee engagement strategies'
            ];
        } else if (score <= 75) {
            recommendations = [
                'Advanced LLI Framework™ integration',
                'Peer learning and mentorship programs',
                'Cross-departmental equity initiatives',
                'Develop internal change champions'
            ];
        } else {
            recommendations = [
                'Share your success as a case study',
                'Mentor other organizations',
                'Advanced measurement and optimization',
                'Community partnership development'
            ];
        }
        
        // Industry-specific services
        const industryServices = getIndustryServices(industry);
        
        // Populate lists
        recommendationsList.innerHTML = recommendations.map(r => `<li class="flex items-start"><i class="fas fa-check-circle text-green-500 mr-2 mt-1"></i>${r}</li>`).join('');
        servicesList.innerHTML = industryServices.map(s => `<li class="flex items-start"><i class="fas fa-star text-gold-500 mr-2 mt-1"></i>${s}</li>`).join('');
    }
    
    function resetAssessment() {
        currentQuestion = 1;
        responses = {};
        
        // Reset UI
        document.getElementById('assessment-questions').classList.remove('hidden');
        document.getElementById('assessment-results').classList.add('hidden');
        document.querySelector('.flex.justify-between').classList.remove('hidden');
        document.querySelector('.mt-6').classList.remove('hidden');
        
        // Clear selections
        document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);
        
        showQuestion(1);
    }
}

// Industry-specific service recommendations
function getIndustryServices(industry) {
    const services = {
        healthcare: [
            'Patient Care Equity Programs',
            'Healthcare Leadership Development',
            'BIPOC Healthcare Worker Support',
            'Community Health Partnerships'
        ],
        nonprofit: [
            'Philanthropic Equity Assessment',
            'Board Diversity & Inclusion',
            'Community-Centered Strategy',
            'Donor Engagement Equity'
        ],
        education: [
            'Student Equity & Inclusion',
            'Faculty Development Programs',
            'Campus Climate Assessment',
            'Educational Leadership Training'
        ],
        corporate: [
            'Workplace Culture Transformation',
            'Executive Leadership Coaching',
            'Employee Resource Groups',
            'Inclusive Recruitment Strategies'
        ],
        government: [
            'Public Service Equity',
            'Community Engagement Programs',
            'Policy Development Support',
            'Civic Leadership Training'
        ],
        other: [
            'Custom LLI Framework™ Implementation',
            'Organizational Assessment',
            'Leadership Development',
            'Strategic Planning Support'
        ]
    };
    
    return services[industry] || services.other;
}

// Smart contact form recommendations
function updateServiceRecommendations() {
    const industry = document.getElementById('industry').value;
    const recommendationsDiv = document.getElementById('smart-recommendations');
    const recommendationsList = document.getElementById('recommended-services-list');
    const industryNote = document.getElementById('industry-note');
    
    if (industry && industry !== '') {
        const services = getIndustryServices(industry);
        recommendationsList.innerHTML = services.map(service => 
            `<li class="flex items-start">
                <i class="fas fa-arrow-right text-primary-500 mr-2 mt-1 text-xs"></i>
                ${service}
             </li>`
        ).join('');
        
        recommendationsDiv.classList.remove('hidden');
        industryNote.textContent = `(${industry.charAt(0).toUpperCase() + industry.slice(1)} focused)`;
        
        // Auto-select relevant service if available
        const serviceSelect = document.getElementById('service');
        if (industry === 'healthcare' || industry === 'nonprofit') {
            serviceSelect.value = 'racial-equity';
        } else if (industry === 'corporate') {
            serviceSelect.value = 'psychological-safety';
        } else {
            serviceSelect.value = 'lli-framework';
        }
    } else {
        recommendationsDiv.classList.add('hidden');
        industryNote.textContent = '';
    }
}

// Enhanced counter animation with intersection observer
function initializeEnhancedCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.target);
                const suffix = counter.dataset.suffix || '';
                const duration = 2500; // 2.5 seconds
                const start = performance.now();
                
                const animate = (currentTime) => {
                    const elapsed = currentTime - start;
                    const progress = Math.min(elapsed / duration, 1);
                    
                    // Easing function for smooth animation
                    const easeOutCubic = 1 - Math.pow(1 - progress, 3);
                    const current = Math.floor(target * easeOutCubic);
                    
                    counter.innerText = current + suffix;
                    
                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    } else {
                        counter.innerText = target + suffix;
                        // Add a subtle pulse effect when complete
                        counter.style.transform = 'scale(1.1)';
                        setTimeout(() => {
                            counter.style.transform = 'scale(1)';
                        }, 200);
                    }
                };
                
                requestAnimationFrame(animate);
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.7 });
    
    counters.forEach(counter => {
        counter.style.transition = 'transform 0.3s ease';
        counterObserver.observe(counter);
    });
}

// Add loading state management
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Initialize new features
    initializeAssessmentTool();
    initializeEnhancedCounters();
    
    // Trigger any load-dependent animations
    setTimeout(() => {
        AOS.refresh();
    }, 100);
});