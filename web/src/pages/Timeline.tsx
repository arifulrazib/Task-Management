import { useMemo, useState } from 'react'
import { addDays, format, isSameDay, startOfWeek } from 'date-fns'
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import { tasks, userById, projectById } from '../data/mock'
import StatusBadge from '../components/StatusBadge'
import Avatar from '../components/Avatar'
import { cn } from '../lib/utils'

const HOUR_HEIGHT = 64 // px per hour
const START_HOUR = 8
const END_HOUR = 19

export default function Timeline() {
  const [anchor, setAnchor] = useState(new Date())
  const weekStart = startOfWeek(anchor, { weekStartsOn: 1 })
  const days = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i))
  const [selected, setSelected] = useState(new Date())

  const dayTasks = useMemo(
    () =>
      tasks
        .filter((t) => isSameDay(t.startAt, selected))
        .sort((a, b) => a.startAt.getTime() - b.startAt.getTime()),
    [selected],
  )

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-end justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-[26px] font-bold tracking-tight text-ink-900">Timeline</h1>
          <p className="mt-1 text-sm text-ink-500">{format(selected, "EEEE, MMMM d")} · {dayTasks.length} tasks</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setAnchor(addDays(anchor, -7))} className="h-9 w-9 grid place-items-center rounded-lg border border-ink-200 text-ink-600 hover:bg-white">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button onClick={() => { setAnchor(new Date()); setSelected(new Date()) }} className="btn-secondary">Today</button>
          <button onClick={() => setAnchor(addDays(anchor, 7))} className="h-9 w-9 grid place-items-center rounded-lg border border-ink-200 text-ink-600 hover:bg-white">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Week strip */}
      <div className="card p-2 grid grid-cols-7 gap-1">
        {days.map((d) => {
          const active = isSameDay(d, selected)
          const isToday = isSameDay(d, new Date())
          const count = tasks.filter((t) => isSameDay(t.startAt, d)).length
          return (
            <button
              key={d.toISOString()}
              onClick={() => setSelected(d)}
              className={cn(
                'flex flex-col items-center gap-1 py-3 rounded-xl text-sm transition-colors',
                active ? 'bg-brand-600 text-white' : 'hover:bg-ink-100 text-ink-700',
              )}
            >
              <span className={cn('text-[11px] uppercase font-medium', active ? 'text-white/70' : 'text-ink-500')}>
                {format(d, 'EEE')}
              </span>
              <span className={cn('text-lg font-bold leading-none', isToday && !active && 'text-brand-600')}>
                {format(d, 'd')}
              </span>
              <span className={cn('h-1.5 w-1.5 rounded-full', count > 0 ? (active ? 'bg-white' : 'bg-brand-500') : 'bg-transparent')} />
            </button>
          )
        })}
      </div>

      {/* Day timeline */}
      <div className="card overflow-hidden">
        <div className="flex">
          {/* Time column */}
          <div className="w-20 shrink-0 border-r border-ink-100 bg-ink-50/40 py-4">
            {Array.from({ length: END_HOUR - START_HOUR + 1 }, (_, i) => START_HOUR + i).map((h) => (
              <div key={h} className="flex items-start justify-end pr-3" style={{ height: HOUR_HEIGHT }}>
                <span className="text-[11px] font-medium text-ink-400 -translate-y-2">
                  {formatHour(h)}
                </span>
              </div>
            ))}
          </div>

          {/* Tracks */}
          <div className="relative flex-1 py-4">
            {/* Hour grid lines */}
            {Array.from({ length: END_HOUR - START_HOUR + 1 }, (_, i) => i).map((i) => (
              <div key={i} className="border-t border-dashed border-ink-100" style={{ height: HOUR_HEIGHT }} />
            ))}

            {/* Now indicator */}
            {isSameDay(selected, new Date()) && <NowLine />}

            {/* Tasks */}
            {dayTasks.map((t) => {
              const startH = t.startAt.getHours() + t.startAt.getMinutes() / 60
              const top = (startH - START_HOUR) * HOUR_HEIGHT + 16 // +py-4 offset
              const height = Math.max(40, (t.durationMinutes / 60) * HOUR_HEIGHT - 6)
              const project = projectById(t.projectId)
              const assignee = userById(t.assigneeId)
              return (
                <div
                  key={t.id}
                  className="absolute left-3 right-3 rounded-xl bg-white border border-ink-100 shadow-card hover:shadow-lift transition-shadow overflow-hidden"
                  style={{ top, height }}
                >
                  <div className={cn('absolute left-0 top-0 h-full w-1', project.color)} />
                  <div className="pl-3 pr-3 py-2.5 h-full flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 text-[11px] text-ink-500">
                        <span className="font-medium">{project.name}</span>
                        <span>·</span>
                        <span>{format(t.startAt, 'h:mm a')} – {format(t.dueAt, 'h:mm a')}</span>
                      </div>
                      <div className="mt-0.5 text-sm font-semibold text-ink-900 truncate">{t.title}</div>
                      <div className="mt-1.5 flex items-center gap-2">
                        <StatusBadge status={t.status} />
                      </div>
                    </div>
                    <Avatar name={assignee.name} size="sm" />
                  </div>
                </div>
              )
            })}

            {dayTasks.length === 0 && (
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <p className="text-sm text-ink-500">No tasks scheduled for this day.</p>
                  <button className="mt-3 btn-primary inline-flex"><Plus className="h-4 w-4" /> Add a task</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function NowLine() {
  const now = new Date()
  const h = now.getHours() + now.getMinutes() / 60
  if (h < START_HOUR || h > END_HOUR) return null
  const top = (h - START_HOUR) * HOUR_HEIGHT + 16
  return (
    <div className="absolute left-0 right-0 z-10 pointer-events-none" style={{ top }}>
      <div className="flex items-center gap-2">
        <span className="ml-1 h-2.5 w-2.5 rounded-full bg-danger-500 ring-4 ring-danger-500/20" />
        <div className="h-px flex-1 bg-danger-500" />
      </div>
    </div>
  )
}

function formatHour(h: number) {
  if (h === 0) return '12 AM'
  if (h === 12) return '12 PM'
  return h < 12 ? `${h} AM` : `${h - 12} PM`
}
