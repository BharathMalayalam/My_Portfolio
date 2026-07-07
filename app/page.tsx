import dynamic from 'next/dynamic'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'

const About = dynamic(() => import('@/components/about').then((mod) => mod.About), {
  loading: () => <div className="h-40" />,
})
const Services = dynamic(() => import('@/components/services').then((mod) => mod.Services), {
  loading: () => <div className="h-40" />,
})
const Projects = dynamic(() => import('@/components/projects').then((mod) => mod.Projects), {
  loading: () => <div className="h-40" />,
})
const Skills = dynamic(() => import('@/components/skills').then((mod) => mod.Skills), {
  loading: () => <div className="h-40" />,
})
const Achievements = dynamic(() => import('@/components/achievements').then((mod) => mod.Achievements), {
  loading: () => <div className="h-40" />,
})
const Experience = dynamic(() => import('@/components/experience').then((mod) => mod.Experience), {
  loading: () => <div className="h-40" />,
})
const Contact = dynamic(() => import('@/components/contact').then((mod) => mod.Contact), {
  loading: () => <div className="h-40" />,
})
const Footer = dynamic(() => import('@/components/footer').then((mod) => mod.Footer), {
  loading: () => <div className="h-20" />,
})

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Achievements />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
