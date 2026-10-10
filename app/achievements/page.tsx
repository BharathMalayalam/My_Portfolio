import type { Metadata } from 'next'
import { Achievements } from '@/components/achievements'

export const metadata: Metadata = {
  title: 'Achievements | Bharath Malayalam',
  description: 'Awards and achievements earned by Bharath Malayalam.',
}

export default function Page() {
  return (
    <main className="relative pt-20">
      <Achievements />
    </main>
  )
}
