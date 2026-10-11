import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { SectionSkeleton } from '@/components/ui/section-skeleton'

export const metadata: Metadata = {
  title: 'About | Bharath Malayalam',
  description: 'Learn more about Bharath Malayalam, a software developer and DevOps engineer.',
}

const About = dynamic(() => import('@/components/about').then(m => ({ default: m.About })), {
  loading: () => <SectionSkeleton minH="80vh" />,
})

export default function Page() {
  return (
    <main className="relative pt-20">
      <About />
    </main>
  )
}
