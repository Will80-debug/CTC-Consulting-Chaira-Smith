# CTS Consulting Website

## Project Overview
- **Name**: CTS Consulting - Equity • Strategy • Transformation
- **Goal**: Professional consulting website showcasing CTS Consulting's LLI Framework™ and equity services
- **Features**: Interactive animations, responsive design, contact forms, service showcases, founder profile

## 🌟 Current Features

### ✅ Completed Features
- **Interactive Hero Section** with animated background elements and call-to-action buttons
- **🎯 Interactive Assessment Tool** - "Where is your organization today?" with personalized scoring
- **📊 Animated Counter Statistics** - Dynamic metrics (500+ Leaders, 95% Satisfaction, 3x Results)
- **🎯 Smart Contact Forms** - Industry-specific service recommendations and auto-suggestions
- **LLI Framework™ Showcase** with 3-step visual framework (Listen, Learn, Implement)
- **Core Services Section** with 6 service areas including hover effects and icons
- **Founder Profile** with professional photography of Chiara Smith, MA
- **Responsive Navigation** with smooth scrolling, mobile menu, and assessment link
- **Modern Design** with Tailwind CSS, custom animations, and professional styling
- **Working API Endpoints** for contact form submissions and assessment processing

### 📍 Functional Entry Points

#### Main Pages
- **Homepage**: `/` - Complete website with all sections
- **Sections**: Navigation links to `#about`, `#framework`, `#services`, `#founder`, `#contact`

#### API Endpoints
- **GET** `/api/contact` - Contact endpoint status
- **POST** `/api/contact` - Submit contact form
  - Parameters: `name`, `email`, `organization`, `industry`, `message`, `service`
  - Response: JSON with success status and confirmation message

#### Interactive Features
- **Assessment Tool**: `/` → `#assessment` - Interactive equity readiness assessment
  - 5-question survey with scoring algorithm
  - Personalized recommendations based on responses
  - Industry-specific service suggestions
- **Animated Counters**: Scroll-triggered statistics animation
- **Smart Forms**: Dynamic service recommendations based on industry selection

#### Static Assets
- **CSS**: `/static/styles.css` - Custom styling and animations
- **JavaScript**: `/static/app.js` - Interactive features and form handling

## 🏗️ Technical Architecture

### Data Models & Storage
- **Contact Form Data**: JSON structure for lead capture
  ```json
  {
    "name": "string",
    "email": "string", 
    "organization": "string",
    "message": "string",
    "service": "string"
  }
  ```
- **Static Content**: All content served from HTML templates
- **No External Database**: Currently uses in-memory processing for contact forms

### Technology Stack
- **Backend**: Hono Framework (lightweight web framework)
- **Frontend**: Tailwind CSS + Custom CSS + Vanilla JavaScript
- **Animations**: AOS (Animate On Scroll) library
- **Icons**: Font Awesome
- **Fonts**: Inter + Playfair Display (Google Fonts)
- **Platform**: Cloudflare Pages compatible

## 📱 User Experience Features

### Interactive Elements
- **Smooth Scrolling Navigation** with active section highlighting
- **Animated Cards** with hover effects and transforms
- **Loading Animations** for form submissions
- **Notification System** for user feedback
- **Mobile-Responsive Menu** with hamburger toggle
- **Parallax Effects** on floating background elements

### Content Sections
1. **Hero Section**: Compelling headline with statistics and dual CTAs
2. **About/Vision**: Core values and organizational vision
3. **Services Overview**: "We Help You..." section with 4 key benefits
4. **LLI Framework™**: Detailed 3-step methodology showcase
5. **Core Services**: 6 specialized service areas with detailed descriptions
6. **Founder Profile**: Comprehensive biography of Chiara Smith, Masters
7. **Contact Form**: Professional contact capture with service selection
8. **Footer**: Quick links and contact information

## 🎯 Key Messaging & Branding

### Core Value Proposition
- **Tagline**: "From insight to impact — with real strategy, accountability, and outcomes"
- **Mission**: Build safe, equitable cultures using the LLI Framework™
- **Approach**: Listen → Learn → Implement

### Service Areas
1. Psychological Safety & Workplace Culture
2. Racial & Philanthropic Equity  
3. Organizational Development
4. Violence Prevention & Community Engagement
5. Wellness-Centered Leadership
6. Strategic Planning & Implementation

### Founder Credentials
- **Chiara Smith, Masters**: 15+ years experience
- **Creator**: LLI Framework™
- **Author**: "The Illusion of Inclusive Workspaces" (GIH's most-read article 2021)
- **Location**: Rochester, NY with national reach

## 🚀 URLs & Access

### Development URLs
- **Local Development**: http://localhost:3000
- **Public Access**: https://3000-i5xvdgz90z0ll9f6vug8q-6532622b.e2b.dev

### Visual Assets
- **Chiara's Professional Photo**: Professional headshot integrated in founder section
- **Team Collaboration Image**: Diverse team visual in services section
- **Strategic Planning Visual**: Framework methodology illustration

### Future Production URLs
- **Cloudflare Pages**: (To be deployed)
- **Custom Domain**: (To be configured)

## 🛠️ Development Guide

### Setup & Installation
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Start development server
npm run dev:sandbox

# Start with PM2 (recommended for sandbox)
pm2 start ecosystem.config.cjs
```

### Project Structure
```
webapp/
├── src/
│   └── index.tsx          # Main Hono application
├── public/
│   └── static/
│       ├── styles.css     # Custom CSS animations
│       └── app.js         # Interactive JavaScript
├── dist/                  # Built files (generated)
├── ecosystem.config.cjs   # PM2 configuration
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Build configuration
└── wrangler.jsonc         # Cloudflare Pages config
```

### Key Technologies
- **Hono**: Fast, lightweight web framework
- **Tailwind CSS**: Utility-first CSS framework
- **AOS**: Animate On Scroll library
- **Axios**: HTTP client for API calls
- **PM2**: Process manager for development

## 🎨 Design Features

### Color Palette
- **Primary**: Blue gradient (#0ea5e9 to #0369a1)
- **Accent**: Purple gradient (#d946ef to #a21caf) 
- **Gold**: Gold/yellow gradient (#f59e0b to #d97706)
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Headings**: Playfair Display (serif, elegant)
- **Body**: Inter (sans-serif, modern, readable)

### Animations
- **Scroll Animations**: Fade-up, fade-left/right with AOS
- **Hover Effects**: Card lifts, button scales, color transitions
- **Background**: Floating animated shapes with parallax
- **Loading States**: Spinners and smooth transitions

## 📊 Performance & Optimization

### Current Optimizations
- **CDN Resources**: External libraries loaded from CDN
- **Minimal Bundle**: Lightweight Hono backend
- **Lazy Loading**: AOS animations trigger on scroll
- **Responsive Images**: Placeholder content for professional photos
- **Throttled Scrolling**: Optimized scroll event handling

### Recommended Improvements
- Add actual professional photos for founder section
- Implement image optimization and WebP support
- Add service worker for offline functionality
- Integrate analytics tracking (Google Analytics/Plausible)
- Add blog/resources section for content marketing

## 📈 Next Steps & Roadmap

### Immediate (High Priority)
1. **Professional Photography**: Replace placeholder images with actual photos
2. **Content Review**: Refine copy and messaging with client feedback
3. **SEO Optimization**: Add meta tags, structured data, sitemap
4. **Analytics Setup**: Implement tracking and conversion measurement

### Short Term (Medium Priority)
1. **Blog Integration**: Add resources/insights section for thought leadership
2. **Case Studies**: Showcase successful client transformations
3. **Testimonials**: Add client success stories and quotes
4. **Resource Library**: Downloadable guides and frameworks

### Long Term (Future Features)
1. **Client Portal**: Secure area for ongoing client collaboration
2. **Assessment Tools**: Interactive organizational culture assessments
3. **Scheduling Integration**: Calendly or similar for consultation booking
4. **Newsletter Signup**: Email marketing integration (Mailchimp/ConvertKit)

## 🔧 Deployment Status
- **Platform**: Cloudflare Pages compatible
- **Status**: ✅ Active Development Build
- **Tech Stack**: Hono + TypeScript + Tailwind CSS
- **Last Updated**: December 14, 2024

## 📞 Contact Information
- **Website**: https://3000-i5xvdgz90z0ll9f6vug8q-6532622b.e2b.dev
- **API Status**: ✅ Contact form functional
- **Performance**: ✅ Fast loading, responsive design
- **Accessibility**: ✅ Keyboard navigation, screen reader friendly

---

**Built with ❤️ using the LLI Framework™ approach: Listen to requirements, Learn best practices, Implement with excellence.**