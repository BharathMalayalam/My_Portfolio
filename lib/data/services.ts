import { Code, Cloud, Database, Zap } from 'lucide-react'
import type { Service } from '@/lib/types/portfolio'

export const SERVICES: Service[] = [
  {
    id: '01',
    icon: Cloud,
    title: 'DevOps & Cloud',
    subtitle: 'Automated • Reliable • Scalable',
    description:
      'End-to-end infrastructure management — from CI/CD pipelines to Docker containers deployment — so your product ships faster.',
    features: ['AWS (EC2, S3)', 'Docker', 'Jenkins & GitHub Actions', 'Linux', 'Networking'],
    gradient: 'from-blue-500 to-cyan-400',
    glow: 'from-blue-400/25 to-cyan-500/15',
    textGlow: 'from-blue-500 to-cyan-400',
    span: 'lg:col-span-2',
    featured: false,
  },
  {
    id: '02',
    icon: Code,
    title: 'Web Development',
    subtitle: 'Modern • Responsive • Fast',
    description:
      'Crafting pixel-perfect, high-performance web apps using the latest frameworks. Every pixel is intentional, every interaction delightful.',
    features: ['React & Next.js', 'Tailwind CSS', 'TypeScript', 'SEO Optimised', 'Responsive Design'],
    gradient: 'from-orange-500 via-primary to-amber-400',
    glow: 'from-primary/30 to-accent/20',
    textGlow: 'from-primary to-accent',
    span: 'lg:col-span-1',
    featured: true,
  },
  {
    id: '03',
    icon: Database,
    title: 'Backend Development',
    subtitle: 'Scalable • Secure • Robust',
    description:
      'Building bulletproof server-side systems with clean architecture, real-time capabilities, and optimised queries.',
    features: ['Node.js & Express', 'Python (FastAPI)', 'PostgreSQL & MongoDB', 'Socket.io'],
    gradient: 'from-violet-500 to-purple-400',
    glow: 'from-violet-400/25 to-purple-500/15',
    textGlow: 'from-violet-500 to-purple-400',
    span: 'lg:col-span-1',
    featured: false,
  },
  {
    id: '04',
    icon: Zap,
    title: 'API Development',
    subtitle: 'RESTful • Documented • Secure',
    description:
      'Designing elegant, versioned APIs with proper auth, rate-limiting, and rich documentation so integrations are a pleasure.',
    features: ['REST & GraphQL', 'OAuth 2.0 / JWT', 'OpenAPI / Swagger', 'Postman Testing', 'Error Handling'],
    gradient: 'from-emerald-500 to-teal-400',
    glow: 'from-emerald-400/25 to-teal-500/15',
    textGlow: 'from-emerald-500 to-teal-400',
    span: 'lg:col-span-2',
    featured: false,
    horizontal: true,
  },
]

export const SERVICE_PROCESS_STEPS = [
  { num: '1', label: 'Discovery', desc: 'Understand requirements & goals' },
  { num: '2', label: 'Design', desc: 'Architecture & wireframe planning' },
  { num: '3', label: 'Build', desc: 'Agile development with clean code' },
  { num: '4', label: 'Deploy', desc: 'CI/CD, testing & cloud delivery' },
] as const
