import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { Plus, Search, Filter, MoreHorizontal } from 'lucide-react'
import { projects, tasks, userById } from '../data/mock'
import { AvatarStack } from '../components/Avatar'
import { cn } from '../lib/utils'

export default function Projects() {
  return (
    <div className="space-y-5">
      <div className="flex items-end justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-[26px] font-bold tracking-tight text-ink-900">Projects</h1>
          <p className="mt-1 text-sm text-ink-500">{projects.length} active projects across your workspace.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400" />
            <input placeholder="Search projects" className="input pl-9 w-56" />
          </div>
          <button className="btn-secondary"><Filter className="h-4 w-4" /> Filter</button>
          <button className="btn-primary"><Plus className="h-4 w-4" /> New project</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {projects.map((p) => {
          const projectTasks = tasks.filter((t) => t.projectId === p.id)
          const completed = projectTasks.filter((t) => t.status === 'done').length
          const overdue = projectTasks.filter((t) => t.status === 'overdue' || t.status === 'escalated').length
          return (
            <Link
              key={p.id}
              to={`/projects/${p.id}`}
              className="card p-5 hover:shadow-lift transition-shadow group"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className={cn('h-10 w-10 rounded-xl grid place-items-center text-white font-semibold', p.color)}>
                    {p.name[0]}
                  </span>
                  <div>
                    <div className="text-[15px] font-semibold text-ink-900 leading-tight">{p.name}</div>
                    <div className="text-xs text-ink-500 mt-0.5">Due {format(p.dueAt, 'MMM d, yyyy')}</div>
                  </div>
                </div>
                <button onClick={(e) => e.preventDefault()} className="text-ink-400 hover:text-ink-700 opacity-0 group-hover:opacity-100 transition">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-medium text-ink-600">Progress</span>
                  <span className="text-xs font-bold text-ink-900">{p.progress}%</span>
                </div>
                <div className="h-2 bg-ink-100 rounded-full overflow-hidden">
                  <div className={cn('h-full', p.color)} style={{ width: `${p.progress}%` }} />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                <Stat label="Tasks" value={projectTasks.length} />
                <Stat label="Done" value={completed} tone="text-success-600" />
                <Stat label="Overdue" value={overdue} tone={overdue > 0 ? 'text-danger-600' : ''} />
              </div>

              <div className="mt-5 pt-4 border-t border-ink-100 flex items-center justify-between">
                <AvatarStack names={p.memberIds.map((id) => userById(id).name)} size="sm" />
                <span className="text-xs text-ink-500">{p.memberIds.length} members</span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

function Stat({ label, value, tone = '' }: { label: string; value: number; tone?: string }) {
  return (
    <div className="rounded-xl bg-ink-50/60 py-2.5">
      <div className={cn('text-lg font-bold leading-none', tone || 'text-ink-900')}>{value}</div>
      <div className="text-[11px] text-ink-500 mt-1 font-medium uppercase tracking-wide">{label}</div>
    </div>
  )
}
