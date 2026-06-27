import { NextResponse } from 'next/server'
import { validateContactForm } from '@/lib/validation/contact'
import type { ContactFormData } from '@/lib/types/portfolio'

const RATE_LIMIT_WINDOW_MS = 60_000
const MAX_REQUESTS_PER_WINDOW = 5

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

    // Extend with Resend, SendGrid, or Web3Forms when ready.
    if (process.env.NODE_ENV === 'development') {
      console.info('[contact] New message:', result.sanitized)
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 },
    )
  }
}
