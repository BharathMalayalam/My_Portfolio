# 🚀 Complete Setup & Customization Guide

## Quick Start (5 Minutes)

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Run Development Server
```bash
pnpm dev
```

### 3. Open in Browser
Visit [http://localhost:3000](http://localhost:3000)

### 4. Start Customizing!
Edit the component files to personalize your portfolio.

---

## 📝 Customization Steps

### Step 1: Update Your Name & Title

**File**: `components/hero.tsx`

```typescript
// Line 51-53
<span className="...">Bharath Malayalam</span>
```

**File**: `components/footer.tsx`

```typescript
// Line 42
"© {currentYear} Bharath Malayalam. All rights reserved."
```

**File**: `app/layout.tsx`

```typescript
// Update metadata
export const metadata: Metadata = {
  title: 'Your Name - Software Developer',
  description: 'Your description here',
}
```

### Step 2: Personalize Hero Section

**File**: `components/hero.tsx`

Update the following:
- **Name**: Line 51
- **Title**: Line 55
- **Tagline**: Line 60-63
- **Buttons**: Modify the "View Projects" and "Download Resume" buttons
- **Status**: Update availability and location (Lines 79-86)

### Step 3: Update About Section

**File**: `components/about.tsx`

Replace the three paragraphs with your own bio:
```typescript
<p className="text-lg text-muted-foreground leading-relaxed">
  Your bio paragraph here...
</p>
```

Update statistics (Lines 65-84):
```typescript
<div className="text-3xl sm:text-4xl font-bold text-primary mb-2">YOUR_NUMBER</div>
<p className="text-muted-foreground">YOUR_LABEL</p>
```

### Step 4: Customize Services

**File**: `components/services.tsx`

Update each service card:
```typescript
const services = [
  {
    icon: IconName,
    title: 'Your Service Title',
    description: 'Your service description',
  },
  // ... more services
]
```

### Step 5: Add Your Projects

**File**: `components/projects.tsx`

Update project array (Lines 11-31):

```typescript
const projects = [
  {
    title: 'Project Title',
    description: 'Project description...',
    image: '/projectX.png',  // Add your image to /public/
    tech: ['Tech1', 'Tech2', 'Tech3'],
    github: 'https://github.com/yourrepo',
    demo: 'https://project-demo.com',
  },
  // ... more projects
]
```

**Update Images**:
1. Create 3 project images
2. Save them as PNG files in `/public/`:
   - `project1.png`
   - `project2.png`
   - `project3.png`

### Step 6: Update Skills

**File**: `components/skills.tsx`

Modify skill categories (Lines 12-26):

```typescript
const skillCategories = [
  {
    name: 'Programming Languages',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript'],
  },
  // ... more categories
]
```

Add or remove skills as needed in each category.

### Step 7: Update Experience

**File**: `components/experience.tsx`

Update experiences array (Lines 14-46):

```typescript
const experiences = [
  {
    title: 'Job Title',
    company: 'Company Name',
    period: 'YYYY - YYYY',
    description: 'What you did...',
    highlights: ['Achievement1', 'Achievement2'],
  },
  // ... more experiences
]
```

### Step 8: Configure Contact Info

**File**: `components/contact.tsx`

Update contact links:
```typescript
// Email (Line 97)
href="mailto:your.email@example.com"

// LinkedIn (Line 111)
href="https://linkedin.com/in/your-profile"
"LinkedIn": "your-profile"

// GitHub (Line 127) - Uses Code icon
href="https://github.com/your-username"
"GitHub": "your-username"
```

**Update form placeholder** (Lines 145-156):
```typescript
placeholder="Your Name"
placeholder="your@email.com"
placeholder="Tell me about your project..."
```

### Step 9: Update Footer

**File**: `components/footer.tsx`

Update social links (Line 15-18):
```typescript
const socialLinks = [
  { icon: Code, href: 'https://github.com/your-username', label: 'GitHub' },
  { icon: Briefcase, href: 'https://linkedin.com/in/your-profile', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
]
```

---

## 🎨 Theme Customization

### Change Colors

**File**: `app/globals.css`

Update the color variables:

```css
:root {
  --background: #0f0f1e;      /* Main background */
  --foreground: #ffffff;      /* Main text */
  --primary: #6366f1;         /* Primary accent */
  --accent: #818cf8;          /* Secondary accent */
  --card: #1a1a2e;            /* Card background */
  --border: #2d2d44;          /* Border color */
  --input: #2d2d44;           /* Input background */
  --muted-foreground: #a0a0a8; /* Muted text */
}
```

#### Color Palette Suggestions:

**Modern Blue**:
```css
--primary: #6366f1;      /* Indigo */
--accent: #818cf8;       /* Light Indigo */
```

**Tech Purple**:
```css
--primary: #a78bfa;      /* Purple */
--accent: #d8b4fe;       /* Light Purple */
```

**Gradient Red/Orange**:
```css
--primary: #f97316;      /* Orange */
--accent: #fb923c;       /* Light Orange */
```

**Professional Teal**:
```css
--primary: #14b8a6;      /* Teal */
--accent: #2dd4bf;       /* Light Teal */
```

### Change Animations

Edit animation duration in components:
```typescript
transition={{ duration: 0.8 }}  // Change duration (seconds)
```

---

## 📦 Project Images

### How to Add Project Images

1. **Size Requirement**: Recommend 600x400px minimum
2. **Format**: PNG, JPG, or WebP
3. **Location**: Place in `/public/` folder
4. **Naming**: `project1.png`, `project2.png`, etc.

### Generate Images

You can:
- Take screenshots of your projects
- Use design tools like Figma
- Use services like Vercel's image generation
- Use stock photo sites

---

## 🚢 Deployment Guide

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Next.js
6. Click "Deploy"

**Custom Domain** (Optional):
1. Go to project settings in Vercel
2. Add your custom domain
3. Update DNS records with Vercel's nameservers

### Deploy to Netlify

1. **Build locally**:
   ```bash
   pnpm build
   ```

2. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

3. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

### Deploy to GitHub Pages

Note: GitHub Pages with Next.js requires static export.

1. Update `next.config.mjs`:
   ```javascript
   const nextConfig = {
     output: 'export',
   }
   ```

2. Build:
   ```bash
   pnpm build
   ```

3. Push `out` folder to GitHub Pages

---

## 🔧 Advanced Customization

### Add New Sections

1. Create new component in `/components/`
2. Import in `app/page.tsx`
3. Add to the main layout

Example:
```typescript
// components/testimonials.tsx
export function Testimonials() {
  return (
    <section id="testimonials">
      {/* Your content */}
    </section>
  )
}
```

### Modify Navigation

**File**: `components/navbar.tsx`

```typescript
const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  // Add more nav items here
]
```

### Add Dark Mode Toggle

1. Install next-themes:
   ```bash
   pnpm add next-themes
   ```

2. Wrap layout with ThemeProvider
3. Add toggle button to navbar

---

## 📱 Mobile Optimization

### Test on Mobile

Use Chrome DevTools:
1. Press F12
2. Click device toggle (Ctrl+Shift+M)
3. Select device to test

Or use agent-browser:
```bash
agent-browser set device "iPhone 14"
```

### Common Mobile Issues

- **Text too small**: Adjust `text-` classes (use `sm:` prefix for mobile)
- **Images too large**: Use responsive sizing
- **Buttons too small**: Ensure minimum tap target (44x44px)

---

## 🎯 SEO Best Practices

### Metadata Optimization

**File**: `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Your Name - Full Job Title',
  description: 'Brief description with keywords',
  openGraph: {
    title: 'Your Name - Full Job Title',
    description: 'Brief description',
    type: 'website',
  },
}
```

### Keywords to Target

- Your skills: "React Developer", "DevOps Engineer"
- Services: "Web Development", "Cloud Solutions"
- Location: "Based in Kerala"

### Image Alt Text

All images should have alt text:
```typescript
<Image alt="Project description" src={...} />
```

---

## 🐛 Troubleshooting

### Issue: Dev server won't start

**Solution**:
```bash
rm -rf .next
pnpm dev
```

### Issue: Images not showing

**Check**:
1. Image file exists in `/public/`
2. Filename matches exactly
3. File format is supported (PNG, JPG, WebP)

### Issue: Build fails

**Solution**:
```bash
pnpm build
```

Check error message and fix accordingly.

### Issue: Animations lag on mobile

**Solution**:
Reduce animation duration or disable on mobile:
```typescript
transition={{ duration: isMobile ? 0.3 : 0.8 }}
```

---

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

---

## ✅ Pre-Deployment Checklist

- [ ] Updated all personal information
- [ ] Added project images and details
- [ ] Updated skills and experience
- [ ] Fixed all contact information
- [ ] Tested on mobile devices
- [ ] All links are working
- [ ] No console errors
- [ ] Page loads quickly
- [ ] SEO metadata updated
- [ ] Ready to deploy!

---

**Happy building! 🎉**
