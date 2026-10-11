import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { SectionSkeleton } from '@/components/ui/section-skeleton'

export const metadata: Metadata = {
  title: 'Projects | Bharath Malayalam',
  description: 'A selection of software and DevOps projects built by Bharath Malayalam.',
}

const Projects = dynamic(() => import('@/components/projects').then(m => ({ default: m.Projects })), {
  loading: () => <SectionSkeleton minH="80vh" />,
})

export default function Page() {
  return (
    <main className="relative pt-20">
      <Projects />
    </main>
  )
}
