import type { LucideIcon } from 'lucide-react'
import type { ElementType } from 'react'

export type ProjectStatus = 'Live' | 'In Progress'

export interface NavItem {
  label: string
  href: string
}

export interface SocialLink {
  icon: LucideIcon | ElementType
  label: string
  value: string
  sub?: string
  href: string
  gradient: string
  bg?: string
  isBrand?: boolean
}

export interface Project {
  id: number
  title: string
  tagline: string
  description: string
  image: string
  tech: string[]
  category: string
  github: string
  demo?: string
  featured: boolean
  gradient: string
  status: ProjectStatus
}

export interface Service {
  id: string
  icon: LucideIcon
  title: string
  subtitle: string
  description: string
  features: string[]
  gradient: string
  glow: string
  textGlow: string
  span: string
  featured: boolean
  horizontal?: boolean
}

export interface ExperienceItem {
  id: number
  title: string
  company: string
  location: string
  period: string
  type: string
  typeColor: string
  description: string
  highlights: string[]
  icon: ElementType
  gradient: string
  glowColor: string
  accentBg: string
  achievements: string[]
}

export interface Achievement {
  id: string
  title: string
  description: string
  image: string
  year: string
  icon: LucideIcon
}

export interface SkillTrackItem {
  name: string
  color: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export type ContactFormField = keyof ContactFormData
