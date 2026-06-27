import { Award, Star, Trophy } from 'lucide-react'
import type { Achievement } from '@/lib/types/portfolio'

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'gusto-expo',
    title: 'Gusto Expo 2nd Place',
    description:
      'Got 2nd place in the Gusto Expo innovation challenge. Developed a full-stack platform connecting farmers directly with customers for online sale of organic produce.',
    image: '/a1.jpeg',
    year: '2026',
    icon: Trophy,
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI Workshop',
    description:
      'Acquired practical expertise in designing, training, and deploying large language models (LLMs), specifically fine-tuning open-source models for complex reasoning tasks.',
    image: '/a5.jpg',
    year: '2026',
    icon: Star,
  },
  {
    id: 'smart-college-hackathon',
    title: 'Smart College Hackathon',
    description:
      'Participated in a 24-hour hackathon focused on Infostream, where I pitched a centralized notification platform designed to streamline communication across college systems.',
    image: '/a2.jpeg',
    year: '2026',
    icon: Trophy,
  },
  {
    id: 'cloud-intern',
    title: 'Cloud Intern',
    description:
      'Gained hands-on experience in cloud computing and full-stack development. Developed "Axis," a Jira-like application featuring task management, issue tracking, user roles, and workflow management.',
    image: '/a4.jpeg',
    year: '2026',
    icon: Award,
  },
  {
    id: 'global-startup',
    title: 'Global Startup',
    description:
      'Participated in a global startup event, explored startup ideas, and gained knowledge from people across the world.',
    image: '/a3.jpeg',
    year: '2025',
    icon: Trophy,
  },
]

export const ACHIEVEMENT_SLIDE_DURATION_MS = 6000
