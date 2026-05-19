import type { TaskStatus } from '../data/mock'
import { cn } from '../lib/utils'

const config: Record<TaskStatus, { label: string; classes: string }> = {
  todo:             { label: 'To do',            classes: 'bg-ink-100 text-ink-700' },
  in_progress:      { label: 'In progress',      classes: 'bg-brand-50 text-brand-700' },
  done:             { label: 'Done',             classes: 'bg-success-50 text-success-600' },
  overdue:          { label: 'Overdue',          classes: 'bg-danger-50 text-danger-600' },
  pending_approval: { label: 'Pending approval', classes: 'bg-warning-50 text-warning-600' },
  escalated:        { label: 'Escalated',        classes: 'bg-danger-50 text-danger-600 ring-1 ring-inset ring-danger-500/30' },
}

export default function StatusBadge({ status, className }: { status: TaskStatus; className?: string }) {
  const c = config[status]
  return <span className={cn('chip', c.classes, className)}>{c.label}</span>
}
