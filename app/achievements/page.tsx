import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { SectionSkeleton } from '@/components/ui/section-skeleton'

export const metadata: Metadata = {
  title: 'Achievements | Bharath Malayalam',
  description: 'Awards and achievements earned by Bharath Malayalam.',
}

const Achievements = dynamic(() => import('@/components/achievements').then(m => ({ default: m.Achievements })), {
  loading: () => <SectionSkeleton minH="80vh" />,
})

export default function Page() {
  return (
    <main className="relative pt-20">
      <Achievements />
    </main>
  )
}
