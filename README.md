# GbagadaHub Workspace Website

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-7-purple?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green)

A modern and responsive landing website for **GbagadaHub**, designed to showcase workspace services, pricing plans, and benefits for professionals, startups, and teams looking for a productive environment.

The project is built using **React, Vite, and TailwindCSS**, focusing on performance, clean UI design, and reusable component architecture.

---

# Live Demo

Visit the live website:

(Add your deployment link here)

Example:

https://gbagadahub.vercel.app

---

# Screenshots

(Add screenshots of your website once deployed)

### Homepage

![Homepage Screenshot](./screenshots/home.png)

### Pricing Section

![Pricing Screenshot](./screenshots/pricing.png)

### FAQ Section

![FAQ Screenshot](./screenshots/faq.png)

Tip: Create a **screenshots folder** in your project root and place images inside it.

Example structure:

screenshots/  
home.png  
pricing.png  
faq.png

---

# Features

- Modern responsive landing page
- Workspace pricing and plans
- Benefits section
- FAQ accordion interaction
- Contact section
- Clean navigation layout
- Reusable React components
- Optimized images and SVG assets
- Fast development and build using Vite

---

# Tech Stack

## Frontend

- React
- Vite
- TailwindCSS

## Libraries

- React Router
- Lucide React Icons

## Tooling

- ESLint
- Vite Dev Server
- Modern ES Modules

---

# Project Structure

```
gbagadahub/
│
├── public/
│   ├── assets/        # Images used throughout the website
│   ├── svg/           # SVG icons
│
├── src/
│   ├── component/
│   │   ├── about.jsx
│   │   ├── accordion.jsx
│   │   ├── contact.jsx
│   │   ├── footer.jsx
│   │   ├── home.jsx
│   │   ├── nav.jsx
│   │   ├── pricebenefit.jsx
│   │   └── pricing.jsx
│   │
│   ├── data/
│   │   └── datas.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

# Installation

Clone the repository

```bash
git clone https://github.com/yourusername/gbagadahub.git
```

Navigate into the project

```bash
cd gbagadahub
```

Install dependencies

```bash
bun install
```

Or using **Bun**

```bash
bun install
```

---

# Running the Development Server

Start the development server

```bash
bun run dev
```

or

```bash
bun run dev
```

The project will run at

```
http://localhost:5173
```

---

# Building for Production

Create a production build

```bash
bun run build
```

Preview production build locally

```bash
bun run preview
```

---

# Deployment

This project can be deployed easily to:

- Vercel
- Netlify
- GitHub Pages

### Deploy to Vercel

Install Vercel CLI

```bash
bun install -g vercel
```

Deploy

```bash
vercel
```

---

# Components Overview

### Navigation

Handles navigation between sections of the website.

### Home

Landing section introducing GbagadaHub and its workspace offering.

### About

Overview of the workspace and its mission.

### Pricing

Displays available workspace plans and pricing tiers.

### Price Benefits

Shows the value and benefits included in each plan.

### FAQ (Accordion)

Interactive section answering frequently asked questions.

### Contact

Provides contact information for potential clients.

### Footer

Contains additional navigation and closing information.

---

# Future Improvements

Potential improvements for future versions:

- Workspace booking system
- Backend integration for contact submissions
- Event scheduling system
- SEO optimization
- Analytics integration
- Admin dashboard for content management

---

# Author

**Joshua George**

Frontend Developer

GitHub  
https://github.com/ayomiposy

---

# License

This project is open source and available for learning and educational purposes.
