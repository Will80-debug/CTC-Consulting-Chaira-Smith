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
      </head>
      <body className="bg-gray-50">{children}</body>
    </html>
  )
})
