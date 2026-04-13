# Developer Portfolio Website

A modern, responsive developer portfolio website built with Next.js, TailwindCSS, and TypeScript.

## Features

- ✨ **Hero Section** - Eye-catching landing section with call-to-action buttons
- 👤 **About Section** - Bio, skills showcase, and statistics
- 🚀 **Projects Showcase** - Project cards with descriptions, tech stacks, and links
- 📧 **Contact Form** - Fully functional contact form with validation
- 🌙 **Dark Mode** - Toggle between light and dark themes with persistent storage
- 📱 **Fully Responsive** - Mobile-first design that works seamlessly on all devices
- ⚡ **Performance** - Built with Next.js for optimal performance and SEO
- 🎨 **Beautiful UI** - TailwindCSS for modern, clean styling

## Components

- **Navbar** - Sticky navigation with smooth scrolling and mobile menu
- **Hero** - Landing section with gradient text and CTA buttons
- **About** - Bio, skills, and statistics with visual cards
- **Projects** - Showcase of 6 featured projects with links
- **Contact** - Contact form with email, phone, and social links
- **Footer** - Company info, links, and social media
- **ThemeProvider** - Dark mode implementation with localStorage persistence

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS with dark mode support
- **Components**: React Hooks for state management
- **Responsive**: Mobile-first design with grid and flexbox

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
npm run build
npm start
```

## File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with ThemeProvider
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── theme-provider.tsx  # Dark mode provider
├── components/
│   ├── navbar.tsx          # Navigation bar
│   ├── hero.tsx            # Hero section
│   ├── about.tsx           # About section
│   ├── projects.tsx        # Projects showcase
│   ├── contact.tsx         # Contact section
│   └── footer.tsx          # Footer
└── public/                 # Static assets
```

## Customization

### Add Your Information

1. **Hero Section** - Edit [src/components/hero.tsx](src/components/hero.tsx#L27) to add your name and title
2. **About Section** - Update bio and skills in [src/components/about.tsx](src/components/about.tsx#L26)
3. **Projects** - Modify project data in [src/components/projects.tsx](src/components/projects.tsx#L35)
4. **Contact** - Update contact info in [src/components/contact.tsx](src/components/contact.tsx#L53)
5. **Social Links** - Update social media URLs in footer and contact sections

### Change Colors

Edit the gradient colors in TailwindCSS classes throughout components or modify [tailwind.config.ts](tailwind.config.ts) for custom theme colors.

### Add Images

Place images in the `public/` folder and import them using Next.js Image component for optimized loading.

## Deployment

This project is ready to deploy to:

- **Vercel** (Recommended) - Zero-config deployment for Next.js
- **Netlify** - Support for Next.js with build commands
- **Docker** - Containerize and deploy anywhere
- **Traditional Hosting** - Build and serve static files

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## Features Breakdown

### Dark Mode
- Automatically detects system preference
- Toggle button in bottom-right corner
- Persists user preference in localStorage
- Smooth transitions between themes

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly interface
- Optimized for all screen sizes

### Contact Form
- Real-time validation
- Success message feedback
- Form data logged to console
- Ready to integrate with backend

### Navigation
- Smooth scroll to sections
- Active state indicators
- Mobile hamburger menu
- Sticky position on scroll

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please open a GitHub issue or contact hello@example.com.

---

**Happy coding!** 🚀
