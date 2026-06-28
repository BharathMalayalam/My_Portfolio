import { NextResponse } from 'next/server'
import emailjs from '@emailjs/nodejs'
import { validateContactForm } from '@/lib/validation/contact'
import type { ContactFormData } from '@/lib/types/portfolio'

emailjs.init({
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
  privateKey: process.env.EMAILJS_PRIVATE_KEY || '',
})

const RATE_LIMIT_WINDOW_MS = 60_000
const MAX_REQUESTS_PER_WINDOW = 5
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''

const requestLog = new Map<string, { count: number; resetAt: number }>()

function getClientIp(request: Request): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'
  )
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = requestLog.get(ip)

  if (!entry || now > entry.resetAt) {
    requestLog.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) return true
  entry.count += 1
  return false
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request)
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in a minute.' },
        { status: 429 },
      )
    }

    let body: unknown
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON payload.' }, { status: 400 })
    }

    const data = body as Partial<ContactFormData>
    const result = validateContactForm({
      name: data.name ?? '',
      email: data.email ?? '',
      subject: data.subject ?? '',
      message: data.message ?? '',
    })

    if (!result.success || !result.sanitized) {
      return NextResponse.json(
        { error: 'Validation failed.', errors: result.errors },
        { status: 400 },
      )
    }

    const { name, email, subject, message } = result.sanitized

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
        to_email: 'bharathmalayalam25@gmail.com',
      })

      if (process.env.NODE_ENV === 'development') {
        console.info('[contact] Email sent successfully:', { name, email, subject })
      }
    } catch (emailError) {
      console.error('[contact] EmailJS error:', emailError)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 },
      )
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 },
    )
  }
}
