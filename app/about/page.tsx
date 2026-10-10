import type { Metadata } from 'next'
import { About } from '@/components/about'

export const metadata: Metadata = {
  title: 'About | Bharath Malayalam',
  description: 'Learn more about Bharath Malayalam, a software developer and DevOps engineer.',
}

export default function Page() {
  return (
    <main className="relative pt-20">
      <About />
    </main>
  )
}
