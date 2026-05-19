import { format, formatDistanceToNowStrict, isPast } from 'date-fns'
import { Clock, MessageSquare, Paperclip, AlertTriangle } from 'lucide-react'
import type { Task } from '../data/mock'
import { projectById, userById } from '../data/mock'
import Avatar from './Avatar'
import StatusBadge from './StatusBadge'
import PriorityDot from './PriorityDot'
import { cn } from '../lib/utils'

interface Props {
  task: Task
  compact?: boolean
}

export default function TaskCard({ task, compact = false }: Props) {
  const project = projectById(task.projectId)
  const assignee = userById(task.assigneeId)
  const overdue = task.status === 'overdue' || task.status === 'escalated'
  const dueSoon = !overdue && task.status !== 'done' && isPast(new Date(task.dueAt.getTime() - 60 * 60 * 1000))

  return (
    <article
      className={cn(
        'card group p-4 hover:shadow-lift transition-shadow relative overflow-hidden',
        overdue && 'ring-1 ring-danger-500/20',
      )}
    >
      <span className={cn('absolute left-0 top-0 h-full w-1', project.color)} aria-hidden />

      <div className="flex items-start gap-3 pl-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-xs text-ink-500">
            <span className={cn('h-1.5 w-1.5 rounded-full', project.color)} />
            <span className="font-medium text-ink-600">{project.name}</span>
            <PriorityDot priority={task.priority} />
          </div>

          <h4 className={cn('mt-1.5 font-semibold text-ink-900 leading-snug', compact ? 'text-sm' : 'text-[15px]')}>
            {task.title}
          </h4>

          {!compact && task.description && (
            <p className="mt-1.5 text-sm text-ink-500 line-clamp-2">{task.description}</p>
          )}

          <div className="mt-3 flex items-center gap-3 flex-wrap">
            <StatusBadge status={task.status} />
            <span className={cn('inline-flex items-center gap-1.5 text-xs', overdue ? 'text-danger-600 font-medium' : dueSoon ? 'text-warning-600 font-medium' : 'text-ink-500')}>
              {overdue ? <AlertTriangle className="h-3.5 w-3.5" /> : <Clock className="h-3.5 w-3.5" />}
              {format(task.startAt, 'h:mm a')} · {overdue ? `${formatDistanceToNowStrict(task.dueAt)} overdue` : `due ${format(task.dueAt, 'h:mm a')}`}
            </span>
            {task.tags.length > 0 && !compact && (
              <div className="flex items-center gap-1">
                {task.tags.slice(0, 2).map((t) => (
                  <span key={t} className="chip bg-ink-100 text-ink-600">#{t}</span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col items-end gap-2">
          <Avatar name={assignee.name} size="sm" />
          {!compact && (
            <div className="flex items-center gap-2 text-xs text-ink-400">
              <span className="inline-flex items-center gap-1"><MessageSquare className="h-3 w-3" />2</span>
              <span className="inline-flex items-center gap-1"><Paperclip className="h-3 w-3" />1</span>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
