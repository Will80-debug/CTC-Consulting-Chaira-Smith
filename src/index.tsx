import { Hono } from 'hono'
import { renderer } from './renderer'
// New redesigned pages
import { HomePageTemplate } from './pages/home-template'
import { TrustAuditPage } from './pages/trust-audit'
import { FrameworkPage } from './pages/framework'
import { ServicesPageNew } from './pages/services-new'
import { ResourcesPageNew } from './pages/resources-new'
// Keep existing pages
import { AboutPage } from './pages/about'
import { BlogPage } from './pages/blog'
import { ContactPage } from './pages/contact'
import { BeyondPerformativeActionsPage } from './pages/blog-posts/beyond-performative-actions'
import { GenericBlogPostPage } from './pages/blog-posts/generic-article'
// Assessment pages removed - replaced by LLI Workplace Trust Audit
// Workbook download removed - replaced by Resources page with product collection

const app = new Hono()

app.use(renderer)

// Primary pages - redesigned to match template
app.get('/', (c) => {
  return c.render(<HomePageTemplate />)
})

app.get('/trust-audit', (c) => {
  return c.render(<TrustAuditPage />)
})

app.get('/framework', (c) => {
  return c.render(<FrameworkPage />)
})

app.get('/services', (c) => {
  return c.render(<ServicesPageNew />)
})

app.get('/resources', (c) => {
  return c.render(<ResourcesPageNew />)
})

app.get('/about', (c) => {
  return c.render(<AboutPage />)
})

app.get('/blog', (c) => {
  return c.render(<BlogPage />)
})

// Featured article - special custom page
app.get('/blog/beyond-performative-actions', (c) => {
  return c.render(<BeyondPerformativeActionsPage />)
})

// Dynamic route for all other blog posts
app.get('/blog/:slug', (c) => {
  const slug = c.req.param('slug')
  return c.render(<GenericBlogPostPage slug={slug} />)
})

app.get('/contact', (c) => {
  return c.render(<ContactPage />)
})

// API endpoint to send assessment report
app.post('/api/send-assessment-report', async (c) => {
  try {
    const body = await c.req.json()
    const { name, email, organization, results, timestamp } = body
    
    // Format the email content
    const { overallScore, dimensionScores, level } = results
    
    const emailContent = `
New Leadership Readiness Assessment Completed!

Assessment Taker Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${name}
Email: ${email}
Organization: ${organization || 'Not provided'}
Completed: ${new Date(timestamp).toLocaleString()}

Overall Results:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Overall Score: ${overallScore}/100
Performance Level: ${level.toUpperCase()}

Dimension Scores:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Leadership Effectiveness: ${dimensionScores.leadership}/100
• Culture Health: ${dimensionScores.culture}/100
• DEI Readiness: ${dimensionScores.dei}/100
• Change Capability: ${dimensionScores.change}/100
• Team Performance: ${dimensionScores.team}/100

Top Strengths:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${results.topStrengths.map(s => `• ${s.key}: ${s.score}/100`).join('\n')}

Priority Focus Areas:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${results.topGaps.map(g => `• ${g.key}: ${g.score}/100`).join('\n')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
View full results: https://lli-consulting.pages.dev/assessment/results
Contact: ${email}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `.trim()
    
    // Log for debugging
    console.log('Assessment Report Email:', emailContent)
    console.log('Send to: info@lliconsultinggroup.com')
    console.log('User Email:', email)
    
    // Check if Resend API key is configured
    const resendApiKey = c.env?.RESEND_API_KEY
    
    if (resendApiKey) {
      // Send email via Resend
      try {
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'LLI Assessment <noreply@lliconsulting.com>',
            to: ['info@lliconsultinggroup.com'],
            reply_to: email, // User's email for easy reply
            subject: `New Assessment: ${name} - Score: ${overallScore}/100`,
            text: emailContent
          })
        })
        
        if (!emailResponse.ok) {
          const errorData = await emailResponse.text()
          console.error('Resend API error:', errorData)
          throw new Error(`Resend API failed: ${emailResponse.status}`)
        }
        
        const responseData = await emailResponse.json()
        console.log('Email sent successfully via Resend:', responseData)
        
        return c.json({ 
          success: true, 
          message: 'Assessment report sent successfully',
          emailId: responseData.id
        })
      } catch (emailError) {
        console.error('Resend email error:', emailError)
        // Fall back to logging if email fails
        return c.json({ 
          success: true, 
          message: 'Assessment report logged (email service unavailable)',
          note: 'Email content saved to console logs'
        })
      }
    } else {
      // No API key configured - log only mode
      console.log('⚠️ RESEND_API_KEY not configured - email logged only')
      return c.json({ 
        success: true, 
        message: 'Assessment report logged successfully',
        note: 'Email integration pending - see console logs for content'
      })
    }
  } catch (error) {
    console.error('Error processing assessment report:', error)
    return c.json({ success: false, error: 'Failed to send report' }, 500)
  }
})

// Old assessment and workbook routes removed
// Replaced by:
// - /trust-audit for LLI Workplace Trust Audit™
// - /resources for LLI Framework™ Resource Collection

// API endpoint for contact form submission
app.post('/api/contact-form', async (c) => {
  try {
    const body = await c.req.json()
    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      organization, 
      role, 
      orgSize, 
      industry, 
      serviceInterest, 
      message, 
      timeline,
      timestamp 
    } = body

    console.log('📧 Contact form submission received:', {
      name: `${firstName} ${lastName}`,
      email,
      organization,
      timestamp: timestamp || new Date().toISOString()
    })

    // Construct email content
    const emailSubject = `New Consultation Request from ${firstName} ${lastName}`
    const emailBody = `
New Consultation Request - LLI Consulting Group

===== CONTACT INFORMATION =====
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}

===== ORGANIZATION DETAILS =====
Organization: ${organization}
Role: ${role}
Organization Size: ${orgSize}
Industry: ${industry}

===== REQUEST DETAILS =====
Service Interest: ${serviceInterest}
Timeline: ${timeline}

Message:
${message}

===== SUBMISSION INFO =====
Submitted: ${timestamp || new Date().toISOString()}
Source: LLI Consulting Group Website (lliconsultinggroup.com)

---
This is an automated message from the LLI Consulting Group website contact form.
Please respond to the email address provided above (${email}).
`

    // Try to send via Resend if API key is configured
    const RESEND_API_KEY = c.env?.RESEND_API_KEY
    
    if (RESEND_API_KEY) {
      try {
        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${RESEND_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'LLI Consulting Group <noreply@lliconsultinggroup.com>',
            to: ['smithchiara@gmail.com'],
            reply_to: email,
            subject: emailSubject,
            text: emailBody
          })
        })

        if (resendResponse.ok) {
          const result = await resendResponse.json()
          console.log('✅ Email sent successfully via Resend:', result)
          return c.json({ 
            success: true, 
            message: 'Your consultation request has been sent successfully. We will respond within 24 hours.'
          })
        } else {
          const error = await resendResponse.text()
          console.error('❌ Resend API error:', error)
          // Fall through to log-only mode
        }
      } catch (resendError) {
        console.error('❌ Error calling Resend API:', resendError)
        // Fall through to log-only mode
      }
    }

    // Fallback: Log only mode (no email service configured)
    console.log('⚠️ RESEND_API_KEY not configured - contact form logged only')
    console.log('📋 Full form data:', JSON.stringify(body, null, 2))
    console.log('📧 Email would be sent to: smithchiara@gmail.com')
    
    return c.json({ 
      success: true, 
      message: 'Your consultation request has been received. We will respond within 24 hours.',
      note: 'Email integration pending - form data logged to console'
    })

  } catch (error) {
    console.error('❌ Error processing contact form:', error)
    return c.json({ 
      success: false, 
      error: 'Failed to process your request. Please email us directly at info@lliconsultinggroup.com' 
    }, 500)
  }
})

// API endpoint for newsletter subscription
app.post('/api/newsletter-subscribe', async (c) => {
  try {
    const body = await c.req.json()
    const { name, email, timestamp } = body
    
    // Format the email content
    const emailContent = `
New Newsletter Subscription!

Subscriber Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${name}
Email: ${email}
Subscribed: ${new Date(timestamp).toLocaleString()}
Source: LLI Consulting Blog Page
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This subscriber has requested to receive:
• New articles delivered weekly
• Tools and insights
• Leadership resources

Action Required:
Add this email to your newsletter distribution list.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `.trim()
    
    // Log for debugging
    console.log('Newsletter Subscription:', emailContent)
    console.log('Send to: info@lliconsultinggroup.com')
    console.log('Subscriber Email:', email)
    
    // Check if Resend API key is configured
    const resendApiKey = c.env?.RESEND_API_KEY
    
    if (resendApiKey) {
      // Send email via Resend
      try {
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'LLI Newsletter <noreply@lliconsulting.com>',
            to: ['info@lliconsultinggroup.com'],
            reply_to: email, // Subscriber's email for easy contact
            subject: `New Newsletter Subscriber: ${name}`,
            text: emailContent
          })
        })
        
        if (!emailResponse.ok) {
          const errorData = await emailResponse.text()
          console.error('Resend API error:', errorData)
          throw new Error(`Resend API failed: ${emailResponse.status}`)
        }
        
        const responseData = await emailResponse.json()
        console.log('Newsletter subscription email sent successfully via Resend:', responseData)
        
        return c.json({ 
          success: true, 
          message: 'Newsletter subscription received successfully',
          emailId: responseData.id
        })
      } catch (emailError) {
        console.error('Resend email error:', emailError)
        // Fall back to logging if email fails
        return c.json({ 
          success: true, 
          message: 'Newsletter subscription logged (email service unavailable)',
          note: 'Subscription data saved to console logs'
        })
      }
    } else {
      // No API key configured - log only mode
      console.log('⚠️ RESEND_API_KEY not configured - newsletter subscription logged only')
      return c.json({ 
        success: true, 
        message: 'Newsletter subscription logged successfully',
        note: 'Email integration pending - see console logs for content'
      })
    }
  } catch (error) {
    console.error('Error processing newsletter subscription:', error)
    return c.json({ success: false, error: 'Failed to process subscription' }, 500)
  }
})

export default app
