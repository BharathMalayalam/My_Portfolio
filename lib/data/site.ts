import { Code2, Link2, Mail, Phone } from 'lucide-react'
import type { NavItem, SocialLink } from '@/lib/types/portfolio'

export const SITE = {
  name: 'Bharath Malayalam',
  initials: 'BM',
  title: 'Software Developer & DevOps Engineer',
  email: 'bharathmalayalam25@gmail.com',
  location: 'Karur, Tamil Nadu, India',
  resumePath: '/Bharath_Malayalam_Resume.pdf',
  github: 'https://github.com/BharathMalayalam',
  linkedin: 'https://www.linkedin.com/in/bharath-malayalam',
  leetcode: 'https://leetcode.com/u/bharathmalayalam/',
  whatsapp: 'https://wa.me/6379616027',
} as const

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export const FOOTER_NAV_ITEMS: NavItem[] = [
  ...NAV_ITEMS,
  { label: 'Experience', href: '#experience' },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: Mail,
    label: 'Email',
    value: SITE.email,
    sub: 'Drop a message anytime',
    href: `mailto:${SITE.email}`,
    gradient: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-500/10 hover:bg-amber-500/20',
  },
  {
    icon: Code2,
    label: 'GitHub',
    value: 'BharathMalayalam',
    sub: 'Check my open source work',
    href: SITE.github,
    gradient: 'from-gray-600 to-gray-800',
    bg: 'bg-gray-500/10 hover:bg-gray-500/20',
  },
  {
    icon: Link2,
    label: 'LinkedIn',
    value: 'bharath-malayalam',
    sub: 'Connect professionally',
    href: SITE.linkedin,
    gradient: 'from-blue-600 to-blue-700',
    bg: 'bg-blue-500/10 hover:bg-blue-500/20',
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+91 6379616027',
    sub: 'Quick chat & calls',
    href: SITE.whatsapp,
    gradient: 'from-green-500 to-emerald-600',
    bg: 'bg-green-500/10 hover:bg-green-500/20',
  },
]
