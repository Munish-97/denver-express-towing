# Denver Express Towing Website

A premium, luxury, high-converting static website built for Denver Express Towing.

## Features
- **Premium Design:** Dark theme with gold accents, tailored for luxury/emergency towing.
- **Responsive Layout:** Works flawlessly across desktop, tablet, and mobile devices.
- **Interactive Elements:**
  - Sticky header with blur effects.
  - Smart Quote Estimator (Frontend Demo).
  - Live Dispatch Feed Dashboard.
  - Service Area Coverage Checker.
  - Animated Stats Counters and FAQ Accordion.
- **Lead Generation Focused:** Sticky mobile bottom CTA and highly visible booking forms.
- **Zero Dependencies:** Built with pure HTML, CSS, and Vanilla JavaScript.

## Setup Instructions

Since this is a static website, no complex build process is required.

1. **Clone the repository** (if applicable) or download the files.
2. **Add Hero Video:** 
   Place your background video in `assets/videos/denver-towing-hero.mp4`. If the video file is missing, the website will automatically display a premium dark animated CSS gradient background instead.
3. **Run Locally:**
   Simply open `index.html` in your preferred web browser. Alternatively, you can run a local server (e.g., using VS Code Live Server or python):
   ```bash
   npx serve .
   # or
   python3 -m http.server
   ```
4. Navigate to `http://localhost:3000` or `http://localhost:8000`.

## Deployment

This website is ready to be deployed to static hosting platforms like **Vercel**, **Netlify**, or **GitHub Pages**.

### Deploying to Vercel
1. Create a [Vercel account](https://vercel.com).
2. Install Vercel CLI (optional) or link your GitHub repository.
3. Vercel will automatically detect this as a static HTML project and deploy it.

## Customization
- **Colors:** You can change the primary colors by editing the CSS variables located at the top of `styles.css`.
- **Content:** Update the text and mock data directly in `index.html` and `script.js` to match real company information.
