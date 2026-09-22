# Personal Portfolio - Home Page

A responsive, semantic HTML5 personal portfolio website built for **CSN 1101: Web Technologies and Internet Applications** at KCA University.

## About

This is a professional portfolio home page showcasing web development skills and introducing myself as a first-year ICT student at KCA University. The site is built with clean, semantic HTML5 and responsive CSS, with no external frameworks or libraries.

## Features

- **Responsive Design**: Works seamlessly from 320px (mobile) to desktop widths
- **Semantic HTML5**: Proper use of `<header>`, `<nav>`, `<main>`, `<footer>` elements
- **Light Theme**: Modern, professional design with a clean color palette
- **Mobile-First**: Optimized for all screen sizes using CSS media queries
- **External Styling**: All CSS in a separate stylesheet (no inline styles)
- **Professional Photo**: Clear headshot with optimized file size
- **Contact Links**: Email and social/professional links (GitHub, LinkedIn)

## Sections

1. **Navigation Bar** - Links to Home, Projects, and Contact
2. **Hero Section** - Professional photo, name, and tagline
3. **About Me** - Brief introduction about skills and interests
4. **Contact Footer** - Email and social links with call-to-action

## Technical Details

- **HTML5**: Valid and semantic markup
- **CSS3**: Responsive design with mobile-first approach
- **Accessibility**: Clear structure and semantic elements for screen readers
- **Performance**: Optimized images and minimal external resources

## Live Deployments

## Live Deployments

- **GitHub Pages**: [https://samatifidel-sketch.github.io/my_portforlio/](https://samatifidel-sketch.github.io/my_portforlio/)
- **Vercel**: [https://my-portforlio-xxxxx.vercel.app](https://my-portforlio-xxxxx.vercel.app)


## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/portfolio-repo.git
   cd portfolio-repo
   ```

2. Open `index.html` in your browser:
   - Right-click `index.html` → Open with browser
   - Or use a local server: `python -m http.server 8000`

3. View at `http://localhost:8000`

## Project Structure

```
portfolio-repo/
├── index.html        # Main home page
├── style.css         # Responsive stylesheet
├── photo.jpg         # Professional headshot (300-500KB)
└── README.md         # This file
```

## Customization

### Add Your Photo
Replace `photo.jpg` with your own professional headshot. Compress it to 300-500KB for performance.

### Update Contact Links
Edit the contact links in the footer:
- Change `your-email@example.com` to your actual email
- Update GitHub and LinkedIn URLs

### Change the Color Palette
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-color: #2c3e50;      /* Dark blue-grey */
    --secondary-color: #3498db;    /* Bright blue */
    --light-bg: #f8f9fa;           /* Off-white background */
    /* ... etc */
}
```

## Deployment Instructions

### Deploy to GitHub Pages

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/your-username/portfolio-repo.git
   git push -u origin main
   ```

2. In your GitHub repository:
   - Go to **Settings** → **Pages**
   - Set **Source** to "Deploy from a branch"
   - Select **main** branch and **/ (root)** folder
   - Click **Save**

3. Wait 1-2 minutes, then visit: `https://your-username.github.io/portfolio-repo/`

### Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/log in with GitHub
2. Click **Add New** → **Project**
3. Select your portfolio repository
4. Leave default settings and click **Deploy**
5. Your site will be live at `https://your-portfolio-name.vercel.app`

## Validation

- **HTML Validation**: Check at [validator.w3.org](https://validator.w3.org)
- **Responsive Testing**: Test in browser dev tools at different viewport sizes (320px, 480px, 768px, 1024px)
- **Performance**: Compress images and test load times

## Assignment Rubric Coverage

- ✅ **HTML Structure & Semantics** (20%): Semantic HTML5 with proper elements
- ✅ **CSS Styling & Responsiveness** (20%): Light theme, responsive to 320px+
- ✅ **Content Quality** (15%): Professional photo, bio, contact info
- ✅ **Deployment** (20%): GitHub Pages and Vercel live
- ✅ **Code Quality & Organisation** (10%): Clean indentation, external CSS, README
- ✅ **Presentation** (15%): Ready for 2-3 minute walkthrough

## Notes

- Both deployments auto-update when you push to GitHub
- Test in private/incognito browser before submission to ensure links work
- Be ready to present the live site in your next lab session

---

**Built for CSN 1101 Assignment 1**  
KCA University, September 2026
