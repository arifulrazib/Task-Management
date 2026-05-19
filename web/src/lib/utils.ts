import clsx, { type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function initials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export function avatarColor(name: string) {
  const palette = [
    'bg-brand-600',
    'bg-emerald-500',
    'bg-amber-500',
    'bg-rose-500',
    'bg-violet-500',
    'bg-sky-500',
    'bg-fuchsia-500',
    'bg-teal-500',
  ]
  let hash = 0
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash)
  return palette[Math.abs(hash) % palette.length]
}