import type { SkillTrackItem } from '@/lib/types/portfolio'

export const SKILL_LOGO_URL: Record<string, string> = {
  Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  C: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  Docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  Jenkins: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
  AWS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  GitHub: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  SQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  Linux: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  'GitHub Actions': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  'REST APIs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  Langchain: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  EC2: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  S3: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  Lambda: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  IAM: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  Networking: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
}

export const SKILL_STATS = [
  { value: 20, suffix: '+', label: 'Projects & Assignments', icon: '🚀' },
  { value: 26, suffix: '+', label: 'Technologies', icon: '⚡' },
  { value: 3, suffix: '+', label: 'Years Learning', icon: '📅' },
] as const

export const SKILL_TRACKS: SkillTrackItem[][] = [
  [
    { name: 'Java', color: '#F59E0B' },
    { name: 'Python', color: '#F59E0B' },
    { name: 'JavaScript', color: '#F59E0B' },
    { name: 'C', color: '#F59E0B' },
    { name: 'SQL', color: '#10B981' },
    { name: 'MongoDB', color: '#10B981' },
    { name: 'Linux', color: '#10B981' },
    { name: 'Langchain', color: '#10B981' },
  ],
  [
    { name: 'React', color: '#3B82F6' },
    { name: 'Next.js', color: '#3B82F6' },
    { name: 'Node.js', color: '#3B82F6' },
    { name: 'Express.js', color: '#3B82F6' },
    { name: 'HTML', color: '#3B82F6' },
    { name: 'CSS', color: '#3B82F6' },
    { name: 'REST APIs', color: '#10B981' },
  ],
  [
    { name: 'Docker', color: '#8B5CF6' },
    { name: 'Jenkins', color: '#8B5CF6' },
    { name: 'GitHub Actions', color: '#8B5CF6' },
    { name: 'AWS', color: '#8B5CF6' },
    { name: 'EC2', color: '#8B5CF6' },
    { name: 'S3', color: '#8B5CF6' },
    { name: 'Lambda', color: '#8B5CF6' },
    { name: 'IAM', color: '#8B5CF6' },
    { name: 'Networking', color: '#8B5CF6' },
    { name: 'Git', color: '#10B981' },
    { name: 'GitHub', color: '#10B981' },
  ],
]

export const MARQUEE_REPEAT_COUNT = 4

/** Logos that need invert filter on light backgrounds */
export const INVERT_ON_LIGHT = new Set(['Next.js', 'GitHub', 'Express.js'])