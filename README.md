 Bharath Malayalam - Professional Portfolio

A modern, responsive portfolio website built with Next.js 16, React, TypeScript, and Tailwind CSS. Featuring smooth animations, a dark premium theme, and optimized for all devices.

## 🚀 Features

- **Modern Design**: Dark premium gradient theme inspired by professional portfolios
- **Smooth Animations**: Framer Motion animations for engaging user interactions
- **Fully Responsive**: Mobile-first design that works perfectly on all screen sizes
- **Performance Optimized**: Next.js 16 with Turbopack for blazing-fast builds
- **SEO Ready**: Proper metadata, semantic HTML, and accessibility best practices
- **Scroll Animations**: Components animate into view as you scroll
- **Interactive Navigation**: Sticky navbar with smooth scrolling to sections
- **Project Showcase**: Beautiful project cards with tech stack and demo links
- **Contact Form**: Functional contact form with email integration
- **Social Links**: Quick access to GitHub, LinkedIn, and Email

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── globals.css         # Global styles and theme
│   ├── page.tsx            # Main page with all sections
│   └── favicon.ico
├── components/
│   ├── navbar.tsx          # Navigation bar
│   ├── hero.tsx            # Hero section
│   ├── about.tsx           # About section
│   ├── services.tsx        # Services section
│   ├── projects.tsx        # Featured projects
│   ├── skills.tsx          # Skills and expertise
│   ├── experience.tsx      # Experience timeline
│   ├── contact.tsx         # Contact form
│   └── footer.tsx          # Footer
├── public/
│   ├── project1.png        # Project images
│   ├── project2.png
│   └── project3.png
├── package.json
├── tsconfig.json
├── next.config.mjs
└── tailwind.config.ts
```

## 🎨 Theme & Colors

The portfolio uses a carefully crafted dark premium color scheme:
- **Primary**: #6366f1 (Indigo)
- **Accent**: #818cf8 (Light Indigo)
- **Background**: #0f0f1e (Dark Navy)
- **Card**: #1a1a2e (Slightly Lighter Navy)
- **Border**: #2d2d44 (Subtle Gray)
- **Text**: #ffffff (White)
- **Muted**: #a0a0a8 (Gray)

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Geist Sans & Geist Mono (Google Fonts)
- **UI Components**: shadcn/ui

## 📦 Installation & Setup

1. **Clone or extract the project**:
   ```bash
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Run the development server**:
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**:
   ```bash
   pnpm build
   pnpm start
   ```

## 🎯 Customization Guide

### Update Your Information

1. **Hero Section** (`components/hero.tsx`):
   - Change name and tagline
   - Update the resume download link
   - Modify the call-to-action buttons

2. **About Section** (`components/about.tsx`):
   - Update your bio and introduction
   - Modify statistics to reflect your achievements

3. **Services Section** (`components/services.tsx`):
   - Update service descriptions
   - Modify service titles as needed

4. **Projects Section** (`components/projects.tsx`):
   - Update project titles, descriptions, and images
   - Add your GitHub and live demo links
   - Modify tech stack for each project

5. **Skills Section** (`components/skills.tsx`):
   - Add/remove programming languages
   - Update technology categories
   - Customize skill tags

6. **Experience Section** (`components/experience.tsx`):
   - Update your work experience
   - Modify internship details
   - Add new positions or roles

7. **Contact Section** (`components/contact.tsx`):
   - Update email address
   - Modify social media links
   - Configure email integration

### Update Project Images

Replace the project images in `public/`:
- `project1.png` - First project
- `project2.png` - Second project
- `project3.png` - Third project

### Change Colors

Edit `app/globals.css` to modify the color scheme:
```css
:root {
  --background: #0f0f1e;
  --foreground: #ffffff;
  --primary: #6366f1;
  --accent: #818cf8;
  /* ... other colors ... */
}
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and import your repository
4. Vercel will automatically detect Next.js and configure it
5. Click "Deploy"

Your portfolio will be live at a Vercel URL. You can connect a custom domain.

### Deploy to Netlify

1. Build the project locally:
   ```bash
   pnpm build
   ```

2. Deploy the `.next` folder or use Netlify CLI:
   ```bash
   npm i -g netlify-cli
   netlify deploy
   ```

### Deploy to GitHub Pages

Next.js projects require some configuration for GitHub Pages. See [Next.js Deployment Docs](https://nextjs.org/docs/pages/building-your-application/deploying).

## 🔧 Key Files to Modify

| File | Purpose |
|------|---------|
| `components/hero.tsx` | Hero section content |
| `components/about.tsx` | About section content |
| `components/projects.tsx` | Project details and images |
| `components/skills.tsx` | Skills and expertise |
| `components/contact.tsx` | Contact form and links |
| `app/layout.tsx` | Metadata and SEO |
| `app/globals.css` | Theme colors and animations |

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

All components adapt gracefully to different screen sizes.

## ⚡ Performance

- Optimized images with Next.js Image component
- Code splitting and lazy loading
- Minimal CSS with Tailwind CSS
- Framer Motion for GPU-accelerated animations
- Next.js built-in performance optimizations

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Support

For issues or questions:
1. Check the documentation files
2. Review the component code
3. Refer to the official framework docs

---

**Built with ❤️ using modern web technologies**
