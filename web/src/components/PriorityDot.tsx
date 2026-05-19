import type { Priority } from '../data/mock'
import { cn } from '../lib/utils'

const map: Record<Priority, { color: string; label: string }> = {
  low:    { color: 'bg-ink-300',      label: 'Low'    },
  medium: { color: 'bg-brand-500',    label: 'Medium' },
  high:   { color: 'bg-warning-500',  label: 'High'   },
  urgent: { color: 'bg-danger-500',   label: 'Urgent' },
}

export default function PriorityDot({ priority, withLabel = false }: { priority: Priority; withLabel?: boolean }) {
  const p = map[priority]
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-ink-600" title={`${p.label} priority`}>
      <span className={cn('h-2 w-2 rounded-full', p.color)} />
      {withLabel && <span className="font-medium">{p.label}</span>}
    </span>
  )
}
