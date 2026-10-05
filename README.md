# Fidel's Portfolio

Personal portfolio website built for **CSN 1101: Web Technologies and Internet Applications** at KCA University. This is the final version (Assignment 3), continuing from Assignments 1 and 2.

## Live Links
- GitHub Pages: `https://samatifidel-sketch.github.io/my_portforlio/`
- Vercel: `https://my-portforlio-ashy.vercel.app/`

## What's on the Site
- **Home**: introduction and headshot
- **Projects**: my projects, plus a live list of my GitHub repositories
- **Contact**: contact form (from Assignment 2)

## Assignment 3 Work

### 1. Live API Integration (GitHub API)
The Projects page fetches my public repositories from the GitHub API using the Fetch API:

`https://api.github.com/users/samatifidel-sketch/repos`

- **Loading state**: shows "Loading repositories..." while the request runs.
- **Rendering**: each repo's name, description, language, stars and link are turned into a card.
- **Error handling**: if the request fails, a friendly message is shown instead of a broken page. Tested by deliberately using a wrong URL.
- **No API key** is needed. Unauthenticated requests are limited to 60 per hour per IP, which is another reason the error handling matters.

Code is in `github.js`.

### 2. Security Review
- No API keys, tokens or secrets anywhere in the client-side code.
- All dynamic content is inserted with `textContent` (no `innerHTML` anywhere in the project, confirmed by searching the whole codebase).
- External links use `rel="noopener"`.
- Both deployments are served over HTTPS (confirmed on GitHub Pages and Vercel).

### 3. Performance
- Images compressed and resized to the size they are displayed at.
- `loading="lazy"` added to below-the-fold images.
- `width` and `height` set on images to avoid layout shift.

#### Lighthouse Performance (mobile)

| Page     | Before | After |
|----------|--------|-------|
| Home     | 100    | 100   |
| Projects | 100    | 100   |

Total page weight: `X MB` before, `Y KB` after image compression.

## Project Structure
```
index.html
projects.html
contact.html
style.css
github.js
(images)
```
Adjust this to match your actual files.

## Tech
HTML, CSS, vanilla JavaScript, Fetch API, GitHub Pages, Vercel.

## Notes
JavaScript in this project is my own work, with reference to MDN and the GitHub API documentation.
