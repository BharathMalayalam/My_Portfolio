import type { ContactFormData } from '@/lib/types/portfolio'

export const CONTACT_LIMITS = {
  name: { min: 2, max: 100 },
  email: { max: 254 },
  message: { min: 10, max: 1000 },
} as const

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const VALID_SUBJECTS = new Set([
  'project',
  'freelance',
  'internship',
  'collaboration',
  'other',
])

/** Strip control characters and trim whitespace. */
export function sanitizeText(value: string, maxLength: number): string {
  return value
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
    .trim()
    .slice(0, maxLength)
}

export function validateContactForm(data: ContactFormData): {
  success: boolean
  errors: Partial<Record<keyof ContactFormData, string>>
  sanitized?: ContactFormData
} {
  const errors: Partial<Record<keyof ContactFormData, string>> = {}

  const name = sanitizeText(data.name, CONTACT_LIMITS.name.max)
  const email = sanitizeText(data.email, CONTACT_LIMITS.email.max).toLowerCase()
  const subject = sanitizeText(data.subject, 50)
  const message = sanitizeText(data.message, CONTACT_LIMITS.message.max)

  if (name.length < CONTACT_LIMITS.name.min) {
    errors.name = `Name must be at least ${CONTACT_LIMITS.name.min} characters.`
  }

  if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!VALID_SUBJECTS.has(subject)) {
    errors.subject = 'Please select a subject.'
  }

  if (message.length < CONTACT_LIMITS.message.min) {
    errors.message = `Message must be at least ${CONTACT_LIMITS.message.min} characters.`
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors }
  }

  return {
    success: true,
    errors: {},
    sanitized: { name, email, subject, message },
  }
}
