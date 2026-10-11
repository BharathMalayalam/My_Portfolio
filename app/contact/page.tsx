import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { SectionSkeleton } from '@/components/ui/section-skeleton'

export const metadata: Metadata = {
  title: 'Contact | Bharath Malayalam',
  description: 'Get in touch with Bharath Malayalam.',
}

const Contact = dynamic(() => import('@/components/contact').then(m => ({ default: m.Contact })), {
  loading: () => <SectionSkeleton minH="80vh" />,
})

export default function Page() {
  return (
    <main className="relative pt-20">
      <Contact />
    </main>
  )
}
