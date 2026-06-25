# Denver Express Towing – Project PRD

## 1. Project Overview

**Project Name:** Denver Express Towing  
**Website Type:** Premium static business website  
**Business Category:** Towing Service / Roadside Assistance  
**Target Location:** Denver, CO  
**Primary Goal:** Generate towing leads through calls, booking forms, reservation forms, and contact inquiries.  
**Deployment Workflow:** Antigravity / Codex → GitHub → Vercel

This project is a premium demo website for a USA-based towing business. The site should look professional, luxury, trustworthy, urgent, and client-ready. It is designed to show potential towing clients how a modern lead-generation website can help them get emergency towing inquiries.

---

## 2. Brand Details

**Business Name:** Denver Express Towing  
**Phone:** +1-110-100-0000  
**Email:** denvertowing@gmail.com  
**Location:** Denver, CO

All contact details must remain consistent across the full website, including header, footer, CTA sections, forms, contact cards, sticky bars, and buttons.

---

## 3. Design Direction

The design must feel premium and realistic, not colorful or basic.

### Color Theme

Use only 2–3 premium colors:

- Deep black / charcoal
- Premium gold / towing yellow
- White / light gray

### Visual Style

- Luxury towing company feel
- Dark premium background
- Gold CTA buttons
- Realistic towing/highway/roadside images
- Strong dark overlays
- Smooth animations
- No cartoon style
- No colorful gradients
- No cheap template look

---

## 4. Website Pages

The website includes these main pages:

1. Home – `index.html`
2. About – `about.html`
3. Services – `services.html`
4. Service Areas – `service-areas.html`
5. Reservation – `reservation.html`
6. Contact Us – `contact.html`

Navigation must include:

- Home
- About
- Services
- Service Areas
- Reservation
- Contact Us
- Call Now button

---

## 5. Home Page Requirements

The homepage is approved and should not be redesigned unless specifically requested.

### Home Page Sections

- Premium sticky header
- Full-screen hero banner
- Realistic towing / highway background image
- Dark overlay with gold glow effect
- Call Now and Book a Tow buttons
- Floating trust badges
- Sticky emergency CTA bar
- Request a Tow form
- Trust badge strip
- Premium services grid
- Smart Quote Estimator
- Live Dispatch Demo section
- Service Area Search
- Denver service area section
- How It Works
- Why Choose Us
- Animated counters
- Customer reviews
- Emergency CTA banner
- FAQ accordion
- Premium footer

---

## 6. About Page Requirements

**File:** `about.html`

### Page Goal

Build trust and explain why Denver drivers can rely on Denver Express Towing.

### Required Sections

- Premium inner page hero
- About Denver Express Towing
- Mission statement
- Why Denver drivers trust us
- Licensed and insured towing operators
- 24/7 emergency support
- Professional towing and roadside assistance approach
- Stats/counters
- CTA: Need towing help in Denver?

### Recommended H1

**About Denver Express Towing**

---

## 7. Services Page Requirements

**File:** `services.html`

### Page Goal

Show all major towing and roadside assistance services clearly.

### Services to Include

- Emergency Towing
- Flatbed Towing
- Roadside Assistance
- Battery Jump Start
- Flat Tire Change
- Vehicle Lockout
- Fuel Delivery
- Accident Recovery
- Winching Service

### Required Sections

- Premium inner page hero
- Service cards with short descriptions
- How our towing service works
- Emergency CTA
- Services FAQ

### Recommended H1

**Premium Towing Services in Denver, CO**

---

## 8. Service Areas Page Requirements

**File:** `service-areas.html`

### Page Goal

Show local Denver service coverage and nearby cities.

### Areas to Include

- Downtown Denver
- Aurora
- Lakewood
- Westminster
- Thornton
- Centennial
- Englewood
- Littleton

### Required Feature: Service Area Search

User enters city name.

If city matches covered area, show:

**Yes, Denver Express Towing serves this area.**

If not, show:

**Call us to confirm availability.**

### Recommended H1

**Towing Service Areas Around Denver, CO**

---

## 9. Reservation Page Requirements

**File:** `reservation.html`

### Page Goal

Allow users to submit a towing reservation or emergency tow request.

### Reservation Form Fields

- Name
- Phone
- Email
- Pickup Location
- Drop-off Location
- Vehicle Type
- Service Needed
- Preferred Time
- Message

### Button Text

**Submit Reservation**

### Success Message

Show inline near the form, not as browser alert:

**Thanks for connecting with Denver Express Towing. Your request has been received, and our dispatch team will contact you shortly.**

### Error Message

**Something went wrong. Please call +1-110-100-0000 for immediate towing help.**

### Recommended H1

**Book a Tow in Denver, CO**

---

## 10. Contact Page Requirements

**File:** `contact.html`

### Page Goal

Make it easy for customers to contact the business quickly.

### Required Sections

- Premium inner hero
- Contact cards
- Phone
- Email
- Service Area
- Hours: 24/7 Emergency Service
- Contact form
- Emergency CTA
- FAQ/contact support section

### Contact Form Fields

- Name
- Phone
- Email
- Message

### Recommended H1

**Contact Denver Express Towing**

---

## 11. Form Integration

Forms should use **Web3Forms**.

### Forms to Connect

- Homepage Request a Tow form
- Reservation page form
- Contact page form

### Web3Forms Endpoint

`https://api.web3forms.com/submit`

### Required Hidden Fields

Each form should include:

```html
<input type="hidden" name="access_key" value="WEB3FORMS_ACCESS_KEY">
<input type="hidden" name="subject" value="New towing inquiry from Denver Express Towing website">
<input type="hidden" name="from_name" value="Denver Express Towing Website">
<input type="checkbox" name="botcheck" style="display:none">
```

### Important Form Behavior

- Do not use browser `alert()`.
- Show premium inline success/error messages near the form.
- Keep styling consistent with website.
- Reset form after successful submission.
- Keep Web3Forms working.

---

## 12. Buttons and Links

All phone buttons and links must use:

```html
<a href="tel:+11101000000">+1-110-100-0000</a>
```

All email links must use:

```html
<a href="mailto:denvertowing@gmail.com">denvertowing@gmail.com</a>
```

### Buttons to Check

- Call Now
- Book a Tow
- Get Quote
- Submit Reservation
- Contact Form Submit
- Sticky CTA buttons
- Header Call button
- Footer phone link

---

## 13. SEO Requirements

Every page must include:

- Unique meta title
- Unique meta description
- Canonical link
- Open Graph title
- Open Graph description
- Open Graph type
- Open Graph image
- Twitter card tags
- One clear H1
- SEO-friendly H2 and H3 headings

### Home Page SEO

**Title:** Denver Express Towing | 24/7 Towing Service in Denver, CO  
**Meta Description:** Denver Express Towing provides 24/7 towing service in Denver, CO, including emergency towing, flatbed towing, roadside assistance, jump starts, lockouts, tire changes, and accident recovery.

### About Page SEO

**Title:** About Denver Express Towing | Trusted Towing Company in Denver, CO  
**Meta Description:** Learn about Denver Express Towing, a trusted towing company in Denver, CO offering 24/7 emergency towing, roadside assistance, flatbed towing, and professional vehicle recovery services.

### Services Page SEO

**Title:** Towing Services in Denver, CO | Denver Express Towing  
**Meta Description:** Explore premium towing services in Denver, CO from Denver Express Towing, including emergency towing, flatbed towing, roadside assistance, jump starts, lockouts, fuel delivery, and winching.

### Service Areas Page SEO

**Title:** Towing Service Areas in Denver, CO | Denver Express Towing  
**Meta Description:** Denver Express Towing serves Denver, CO and nearby areas including Aurora, Lakewood, Westminster, Thornton, Centennial, Englewood, and Littleton with fast towing and roadside assistance.

### Reservation Page SEO

**Title:** Book a Tow in Denver, CO | Denver Express Towing  
**Meta Description:** Book a tow with Denver Express Towing in Denver, CO. Request emergency towing, flatbed towing, roadside assistance, jump start, lockout help, tire change, fuel delivery, or accident recovery.

### Contact Page SEO

**Title:** Contact Denver Express Towing | 24/7 Towing Help in Denver, CO  
**Meta Description:** Contact Denver Express Towing for 24/7 towing help in Denver, CO. Call +1-110-100-0000 or email denvertowing@gmail.com for emergency towing and roadside assistance.

---

## 14. Favicon and Social Sharing

The website must include a premium towing van / tow truck favicon and social sharing image.

### Required Assets

- `assets/favicon/favicon.ico`
- `assets/favicon/favicon-16x16.png`
- `assets/favicon/favicon-32x32.png`
- `assets/favicon/apple-touch-icon.png`
- `assets/favicon/android-chrome-192x192.png`
- `assets/favicon/android-chrome-512x512.png`
- `assets/favicon/site.webmanifest`
- `assets/images/og-image.jpg`

### Icon Style

- Black / charcoal background
- Gold tow truck or towing van icon
- Simple and readable at small size
- Premium, modern, professional

### Social Share Image

Recommended size:

`1200 x 630`

Must include:

- Denver Express Towing
- 24/7 Towing Service in Denver, CO
- +1-110-100-0000
- Premium towing visual
- Black/gold theme

---

## 15. Mobile-Friendly Requirements

The full website must be responsive.

### Mobile Rules

- No horizontal scrolling
- Header must work properly
- Hamburger menu if needed
- Hero text must fit on small screens
- CTA buttons should stack neatly
- Forms must be full-width
- Service cards should stack
- Contact cards should not overflow
- Sticky CTA should not hide important content
- Footer columns should stack
- Buttons should be large enough for touch
- Images should not stretch badly

### Breakpoints

Use CSS media queries for:

- 1024px
- 768px
- 480px

---

## 16. Dynamic Features

### Smart Quote Estimator

Frontend-only JavaScript demo.

Inputs:

- Service Type
- Vehicle Type
- Distance Range

Output:

- Estimated price range

### Service Area Search

Input:

- City name

Output:

- Covered city message or call-to-confirm message

### FAQ Accordion

- Smooth open/close animation
- Works on all pages where FAQ exists

### Animated Counters

Include counters for:

- 24/7 Service
- 20–30 Min Average ETA
- 1000+ Vehicles Helped
- 4.9 Rating

---

## 17. Technical Stack

### Frontend

- HTML
- CSS
- JavaScript

### Backend

No backend required.

### Form Handling

- Web3Forms

### Repository

GitHub repository:

`denver-express-towing`

### Deployment

Vercel deployment.

---

## 18. Final QA Checklist

Before final deployment, check:

- All pages open correctly
- Navigation links work
- Header and footer consistent
- Phone number updated everywhere
- Email updated everywhere
- Location updated everywhere
- All Call Now buttons use correct `tel:` link
- All email links use correct `mailto:` link
- Web3Forms working on all forms
- No browser alert popups
- Inline success/error messages working
- SEO meta titles added
- SEO meta descriptions added
- H1/H2/H3 structure correct
- Favicon loads in browser tab
- Social share image meta tags added
- Images load properly
- No broken placeholders
- Mobile view works properly
- No horizontal scrolling
- Website ready for Vercel
- GitHub changes committed and pushed

---

## 19. Approved Workflow

The project should follow this workflow:

1. Create GitHub repo
2. Clone repo in GitHub Desktop
3. Open repo folder in Antigravity
4. Build or update website files
5. Test locally / preview
6. Commit changes in GitHub Desktop
7. Push to GitHub
8. Deploy on Vercel
9. Test live Vercel link
10. Final share with boss/client

---

## 20. Current Project Status

The main website design is completed.  
Major pages are completed.  
Final updates required/handled include:

- Contact details update
- SEO meta update
- Mobile responsiveness
- Favicon and social share setup
- Web3Forms integration
- Inline form success message
- Final QA before Vercel deployment
