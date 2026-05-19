import { avatarColor, cn, initials } from '../lib/utils'

interface Props {
  name: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
  className?: string
  ring?: boolean
}

const sizes = {
  xs: 'h-6 w-6 text-[10px]',
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-12 w-12 text-base',
}

export default function Avatar({ name, size = 'sm', className, ring = false }: Props) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-full font-semibold text-white shrink-0',
        sizes[size],
        avatarColor(name),
        ring && 'ring-2 ring-white',
        className,
      )}
      title={name}
    >
      {initials(name)}
    </span>
  )
}

export function AvatarStack({ names, max = 4, size = 'sm' }: { names: string[]; max?: number; size?: Props['size'] }) {
  const visible = names.slice(0, max)
  const overflow = names.length - visible.length
  return (
    <div className="flex -space-x-2">
      {visible.map((n) => (
        <Avatar key={n} name={n} size={size} ring />
      ))}
      {overflow > 0 && (
        <span className={cn('inline-flex items-center justify-center rounded-full bg-ink-200 text-ink-700 font-semibold ring-2 ring-white', sizes[size ?? 'sm'])}>
          +{overflow}
        </span>
      )}
    </div>
  )
}
