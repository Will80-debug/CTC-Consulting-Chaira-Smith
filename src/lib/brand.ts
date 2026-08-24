/**
 * LLI Consulting Group™️ Brand System
 * 
 * Strategic positioning: Premium organizational advisory practice
 * focused on workplace trust and culture
 */

export const BRAND = {
  // Brand Names (use consistently with ™️)
  names: {
    company: 'LLI Consulting Group™️',
    companyShort: 'LLI™️',
    framework: 'LLI Framework™️',
    trustAudit: 'LLI Workplace Trust Audit™️',
    listen: 'LISTEN™️',
    learn: 'LEARN™️',
    implement: 'IMPLEMENT™️',
    workbook: 'LLI Framework™️ Workbook',
    companionGuide: 'LLI Framework™️ Companion Guide',
    planner: 'LLI Framework™️ Planner',
    resourceCollection: 'LLI Framework™️ Resource Collection',
  },

  // Core Brand Statement
  tagline: 'Listening with intention. Learning authentically. Implementing with accountability.',

  // Primary Positioning
  positioning: 'LLI Consulting Group™️ helps organizations understand how trust is experienced across the workplace, identify the conditions shaping organizational culture, and develop accountable strategies for change.',

  // Colors - Teal Dominant
  colors: {
    // Primary - Deep/Intense Teal (visually dominant)
    teal: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf',
      500: '#14b8a6',  // Primary teal
      600: '#0d9488',  // Deep teal
      700: '#0f766e',  // Intense teal
      800: '#115e59',
      900: '#134e4a',
    },
    // Accent - Intense Orange (strategic use only)
    orange: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',  // Intense orange
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
    },
    // Neutral - Cream/Off-white
    neutral: {
      cream: '#fefdfb',
      offwhite: '#faf9f7',
      warmGray: '#f5f4f2',
    },
    // Supporting - Black/Charcoal (readability only)
    text: {
      primary: '#1a1a1a',
      secondary: '#4a4a4a',
      tertiary: '#6b6b6b',
    }
  },

  // Typography
  typography: {
    fontFamily: {
      sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      heading: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    },
    scale: {
      hero: '3.5rem',      // 56px
      h1: '2.5rem',        // 40px
      h2: '2rem',          // 32px
      h3: '1.5rem',        // 24px
      h4: '1.25rem',       // 20px
      body: '1rem',        // 16px
      small: '0.875rem',   // 14px
    },
    weight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    }
  },

  // Spacing (use substantial negative space)
  spacing: {
    section: '8rem',      // Between major sections
    element: '4rem',      // Between elements
    tight: '2rem',        // Tight spacing
    comfortable: '3rem',  // Comfortable spacing
  },

  // Design Principles
  principles: {
    feel: ['Premium', 'Professional', 'Clean', 'Minimal', 'Structured', 'Credible', 'Human'],
    avoid: ['Excessive icons', 'Emojis', 'Unnecessary gradients', 'Excessive animation', 'Cluttered sections'],
  }
} as const

// Helper function to get teal color
export const getTeal = (shade: keyof typeof BRAND.colors.teal = 600) => BRAND.colors.teal[shade]

// Helper function to get orange color
export const getOrange = (shade: keyof typeof BRAND.colors.orange = 600) => BRAND.colors.orange[shade]

// Tailwind color classes for consistency
export const tw = {
  // Background colors
  bg: {
    teal: 'bg-teal-600',
    tealLight: 'bg-teal-50',
    orange: 'bg-orange-600',
    orangeLight: 'bg-orange-50',
    cream: 'bg-[#fefdfb]',
    offwhite: 'bg-[#faf9f7]',
  },
  // Text colors
  text: {
    teal: 'text-teal-700',
    tealDark: 'text-teal-800',
    orange: 'text-orange-600',
    primary: 'text-gray-900',
    secondary: 'text-gray-600',
  },
  // Button styles
  button: {
    primary: 'bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-lg transition-all',
    secondary: 'bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-lg transition-all',
    outline: 'border-2 border-teal-600 text-teal-700 hover:bg-teal-50 font-semibold px-8 py-4 rounded-lg transition-all',
  }
} as const

/**
 * Trademark Helper - Ensures consistent superscript formatting
 * Strips ™️ symbols from text so they can be added separately with proper formatting
 */
export const tm = (text: string): string => {
  return text.replace(/™️?/g, '')
}

/**
 * Visual Depth System
 * Layered elements, subtle textures, and depth indicators
 */
export const VISUAL = {
  // Glass morphism effect
  glass: 'backdrop-blur-lg bg-white/30 border border-white/20',
  
  // Subtle texture overlays
  texture: {
    grain: 'bg-[url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=")]',
    subtle: 'bg-gradient-to-br from-transparent via-white/5 to-transparent',
  },
  
  // Network lines (organizational connections)
  network: {
    svg: `<svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="network" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="1" fill="currentColor" opacity="0.3"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#network)"/>
    </svg>`,
  },
  
  // Trust dimension circles
  trustCircles: ['Trust', 'Voice', 'Leadership', 'Accountability'],
  
  // Shadow system
  shadow: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
    orange: 'shadow-lg shadow-orange-500/20',
    teal: 'shadow-lg shadow-teal-500/20',
  },
  
  // Gradient overlays
  gradient: {
    darkTeal: 'bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900',
    tealOrange: 'bg-gradient-to-r from-teal-600 to-orange-600',
    subtle: 'bg-gradient-to-br from-gray-50 via-white to-gray-50',
    overlay: 'bg-gradient-to-t from-black/60 via-black/30 to-transparent',
  }
} as const
