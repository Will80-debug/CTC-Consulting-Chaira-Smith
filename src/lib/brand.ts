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
