import type { Metadata } from 'next'
import { Contact } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Contact | Bharath Malayalam',
  description: 'Get in touch with Bharath Malayalam.',
}

export default function Page() {
  return (
    <main className="relative pt-20">
      <Contact />
    </main>
  )
}
