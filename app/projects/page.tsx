import type { Metadata } from 'next'
import { Projects } from '@/components/projects'

export const metadata: Metadata = {
  title: 'Projects | Bharath Malayalam',
  description: 'A selection of software and DevOps projects built by Bharath Malayalam.',
}

export default function Page() {
  return (
    <main className="relative pt-20">
      <Projects />
    </main>
  )
}
