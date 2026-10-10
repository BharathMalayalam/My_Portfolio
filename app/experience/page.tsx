import type { Metadata } from 'next'
import { Experience } from '@/components/experience'

export const metadata: Metadata = {
  title: 'Experience | Bharath Malayalam',
  description: 'Professional experience of Bharath Malayalam.',
}

export default function Page() {
  return (
    <main className="relative pt-20">
      <Experience />
    </main>
  )
}
