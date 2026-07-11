import type { Project } from '@/lib/types/portfolio'

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'CodeDaily',
    tagline: 'Real-time · Full-stack · Scalable',
    description:
      'CodeDaily is a Python-based problem-solving platform designed to help students learn Python and improve their problem-solving skills. Starting from scratch, the platform already has 30+ active users and is running successfully behind my college ecosystem.',
    image: '/Project 1.png',
    tech: ['Typescript', 'Node.js', 'MongoDB', 'Express.js'],
    category: 'Typescript',
    github: 'https://github.com/BharathMalayalam/Coding-platform',
    demo: 'https://codedaily-kappa.vercel.app/',
    featured: true,
    gradient: 'from-primary via-accent to-orange-300',
    status: 'Live',
  },
  {
    id: 2,
    title: 'AXIS',
    tagline: 'AWS · CI/CD pipelines · Docker',
    description:
      'Built a scalable Jira-inspired system using cloud computing (AWS) with real-time task tracking and role-based workflows.',
    image: '/Project 2.png',
    tech: ['AWS', 'Docker', 'GitHub Actions'],
    category: 'DevOps',
    github: 'https://github.com/BharathMalayalam/AXIS',
    demo: 'https://axis-dev.duckdns.org/',
    featured: false,
    gradient: 'from-violet-500 to-purple-400',
    status: 'Live',
  },
  {
    id: 3,
    title: 'INFOSTREAM',
    tagline: 'Notification System',
    description:
      'Infostream is a centralized notification system that streamlines campus communication by bringing all updates into one platform.',
    image: '/Project 4.png',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    category: 'Full stack',
    github:'https://github.com/BharathMalayalam/Infostream.git',
    demo: 'https://infostream-xi.vercel.app/',
    featured: false,
    gradient: 'from-blue-500 to-cyan-400',
    status: 'Live',
  },
  {
    id: 4,
    title: 'SkyCast',
    tagline: 'Weather-App',
    description:
      'Built a Weather App using React with a CI/CD pipeline powered by Jenkins and Docker. Containerization and deployment using Docker Hub and Render for continuous delivery',
    image: '/Project 5.png',
    tech: ['React.js', 'Docker', 'Jenkins', 'Render', 'OpenWeatherMap API'],
    category: 'Full stack',
    github: 'https://github.com/BharathMalayalam/Weather_app',
    demo: 'https://weather-app-rbfk.onrender.com/',
    featured: false,
    gradient: 'from-pink-500 to-cyan-400',
    status: 'Live',
  },
  {
    id: 5,
    title: 'Agri-Product Website',
    tagline: 'E-commerce Website',
    description:
      'Developed a full-stack platform connecting farmers directly with customers for online sale of organic produce.',
    image: '/Project 3.jpg',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    category: 'Full stack',
    github: 'https://github.com/BharathMalayalam/Agri-Product',
    featured: false,
    gradient: 'from-red-500 to-cyan-400',
    status: 'In Progress',
  },
]

export function getFeaturedProject(projects: Project[] = PROJECTS): Project {
  return projects.find((p) => p.featured) ?? projects[0]
}

export function getOtherProjects(projects: Project[] = PROJECTS): Project[] {
  const featured = getFeaturedProject(projects)
  return projects.filter((p) => p.id !== featured.id)
}
