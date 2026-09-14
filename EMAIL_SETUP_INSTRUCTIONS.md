# Email Setup Instructions for Contact Form

## Current Status

✅ **Contact form API is fully functional**
- Form submissions are being received and logged
- All form data is captured correctly
- API endpoint: `/api/contact-form`

⚠️ **Email delivery requires Resend API key**
- Currently in "log-only" mode
- Form data is logged to console but emails are NOT sent
- Target email: **smithchiara@gmail.com**

## How to Enable Email Delivery

### Step 1: Create Resend Account (FREE)

1. Go to https://resend.com/signup
2. Sign up with your email (smithchiara@gmail.com recommended)
3. Verify your email address
4. Complete account setup

### Step 2: Get API Key

1. Log into Resend dashboard: https://resend.com/api-keys
2. Click "Create API Key"
3. Name it: `LLI Consulting Contact Form`
4. Copy the API key (starts with `re_`)
5. **Save this key securely** - you won't be able to see it again

### Step 3: Configure Domain (Optional but Recommended)

For professional emails from `noreply@lliconsultinggroup.com`:

1. In Resend dashboard, go to "Domains"
2. Click "Add Domain"
3. Enter: `lliconsultinggroup.com`
4. Add the DNS records Resend provides to your domain registrar
5. Wait for verification (usually 5-15 minutes)

**Without domain setup:**
- Emails will be sent from: `onboarding@resend.dev`
- Still works perfectly, just less professional

**With domain setup:**
- Emails will be sent from: `noreply@lliconsultinggroup.com`
- More professional and branded

### Step 4: Add API Key to Cloudflare Pages

#### Option A: Using Cloudflare Dashboard (Recommended)

1. Go to: https://dash.cloudflare.com
2. Select your account
3. Go to "Workers & Pages" → "lli-consulting"
4. Go to "Settings" → "Environment Variables"
5. Click "Add variable"
6. Name: `RESEND_API_KEY`
7. Value: Paste your Resend API key (re_xxxxx)
8. Click "Save"
9. Redeploy the site for changes to take effect

#### Option B: Using Wrangler CLI

```bash
cd /home/user/webapp
npx wrangler pages secret put RESEND_API_KEY --project-name=lli-consulting
# Paste your API key when prompted
```

### Step 5: Test Email Delivery

After adding the API key and redeploying:

1. Visit: https://your-site.pages.dev/contact
2. Fill out the consultation form
3. Click "Submit Request"
4. Check **smithchiara@gmail.com** for the email
5. Should arrive within 1-2 minutes

## Email Details

**Emails will be sent to:** smithchiara@gmail.com

**Email format:**
```
From: LLI Consulting Group <noreply@lliconsultinggroup.com>
To: smithchiara@gmail.com
Reply-To: [visitor's email]
Subject: New Consultation Request from [Visitor Name]

New Consultation Request - LLI Consulting Group

===== CONTACT INFORMATION =====
Name: [First] [Last]
Email: [email]
Phone: [phone]

===== ORGANIZATION DETAILS =====
Organization: [company]
Role: [role]
Organization Size: [size]
Industry: [industry]

===== REQUEST DETAILS =====
Service Interest: [service]
Timeline: [timeline]

Message:
[visitor's message]

===== SUBMISSION INFO =====
Submitted: [timestamp]
Source: LLI Consulting Group Website
```

## Cost

**Resend Pricing:**
- FREE tier: 3,000 emails/month
- More than enough for a consulting business
- No credit card required for free tier

## Troubleshooting

### Emails not arriving?

1. **Check spam folder** in smithchiara@gmail.com
2. **Check Resend logs**: https://resend.com/emails
3. **Verify API key** is set correctly in Cloudflare
4. **Check wrangler logs**: `npx wrangler pages deployment tail`

### Still not working?

Check PM2 logs for errors:
```bash
pm2 logs lli-coaching-webapp --nostream
```

Look for:
- ✅ "Email sent successfully via Resend" = Working!
- ⚠️ "RESEND_API_KEY not configured" = API key missing
- ❌ "Resend API error" = Check API key or domain setup

## Security Notes

✅ **API key is secure:**
- Stored as environment variable in Cloudflare
- Never exposed to frontend code
- Only accessible to backend API

✅ **No payment information collected:**
- Form collects contact details only
- No credit card fields
- No payment integration

## Alternative: Manual Email Forwarding

If you don't want to set up Resend, form submissions are logged to Cloudflare:

1. Go to Cloudflare Dashboard
2. Workers & Pages → lli-consulting → "Logs"
3. View real-time logs
4. Copy form submissions and email them manually

**This is NOT recommended** - automated email is much better!

---

## Quick Start Summary

1. Sign up at https://resend.com
2. Get API key
3. Add to Cloudflare: `RESEND_API_KEY=re_xxxxx`
4. Redeploy site
5. Done! Emails will arrive at smithchiara@gmail.com
