import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { format } from 'date-fns'
import { ChevronLeft, Plus, Users, Activity, ListTodo, CalendarRange, FileText } from 'lucide-react'
import { projects, tasks, userById } from '../data/mock'
import TaskCard from '../components/TaskCard'
import Avatar, { AvatarStack } from '../components/Avatar'
import { cn } from '../lib/utils'

const tabs = [
  { id: 'tasks',    label: 'Tasks',    icon: ListTodo },
  { id: 'timeline', label: 'Timeline', icon: CalendarRange },
  { id: 'members',  label: 'Members',  icon: Users },
  { id: 'activity', label: 'Activity', icon: Activity },
  { id: 'files',    label: 'Files',    icon: FileText },
] as const

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id) ?? projects[0]
  const [tab, setTab] = useState<(typeof tabs)[number]['id']>('tasks')

  const projectTasks = tasks.filter((t) => t.projectId === project.id)
  const grouped = {
    todo:        projectTasks.filter((t) => t.status === 'todo'),
    in_progress: projectTasks.filter((t) => t.status === 'in_progress'),
    review:      projectTasks.filter((t) => t.status === 'pending_approval'),
    done:        projectTasks.filter((t) => t.status === 'done'),
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-1 text-sm text-ink-500">
        <Link to="/projects" className="hover:text-ink-900 inline-flex items-center gap-1">
          <ChevronLeft className="h-4 w-4" /> Projects
        </Link>
        <span>/</span>
        <span className="text-ink-900 font-medium">{project.name}</span>
      </div>

      <header className="card p-6">
        <div className="flex items-start gap-4">
          <span className={cn('h-14 w-14 rounded-2xl grid place-items-center text-white text-xl font-bold', project.color)}>
            {project.name[0]}
          </span>
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold tracking-tight text-ink-900">{project.name}</h1>
            <p className="mt-1 text-sm text-ink-500">Due {format(project.dueAt, 'EEEE, MMMM d, yyyy')} · {projectTasks.length} tasks</p>

            <div className="mt-4 flex items-center gap-6">
              <div className="flex-1 max-w-md">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-medium text-ink-600">Progress</span>
                  <span className="text-xs font-bold text-ink-900">{project.progress}%</span>
                </div>
                <div className="h-2 bg-ink-100 rounded-full overflow-hidden">
                  <div className={cn('h-full', project.color)} style={{ width: `${project.progress}%` }} />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <AvatarStack names={project.memberIds.map((id) => userById(id).name)} size="sm" />
                <button className="btn-secondary"><Plus className="h-4 w-4" /> Invite</button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-1 border-t border-ink-100 -mx-6 px-6 pt-4">
          {tabs.map((t) => {
            const Icon = t.icon
            const active = tab === t.id
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={cn(
                  'inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  active ? 'bg-brand-50 text-brand-700' : 'text-ink-600 hover:bg-ink-100',
                )}
              >
                <Icon className="h-4 w-4" />
                {t.label}
              </button>
            )
          })}
        </div>
      </header>

      {tab === 'tasks' && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <Column title="To do"        tone="bg-ink-100 text-ink-700"             items={grouped.todo} />
          <Column title="In progress"  tone="bg-brand-50 text-brand-700"          items={grouped.in_progress} />
          <Column title="In review"    tone="bg-warning-50 text-warning-600"      items={grouped.review} />
          <Column title="Done"         tone="bg-success-50 text-success-600"      items={grouped.done} />
        </div>
      )}

      {tab === 'members' && (
        <section className="card p-5">
          <h3 className="text-sm font-semibold text-ink-900 mb-4">Members ({project.memberIds.length})</h3>
          <ul className="divide-y divide-ink-100">
            {project.memberIds.map((id) => {
              const u = userById(id)
              return (
                <li key={u.id} className="py-3 flex items-center gap-3">
                  <Avatar name={u.name} size="md" />
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-ink-900">{u.name}</div>
                    <div className="text-xs text-ink-500">{u.role} · {u.email}</div>
                  </div>
                  <span className="chip bg-ink-100 text-ink-700">Member</span>
                </li>
              )
            })}
          </ul>
        </section>
      )}

      {tab !== 'tasks' && tab !== 'members' && (
        <section className="card p-12 text-center text-sm text-ink-500">
          “{tabs.find((t) => t.id === tab)?.label}” view — coming in V1.1
        </section>
      )}
    </div>
  )
}

function Column({ title, tone, items }: { title: string; tone: string; items: typeof tasks }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <span className={cn('chip', tone)}>{title}</span>
          <span className="text-xs font-semibold text-ink-500">{items.length}</span>
        </div>
        <button className="text-ink-400 hover:text-brand-600"><Plus className="h-4 w-4" /></button>
      </div>
      <div className="space-y-2.5">
        {items.map((t) => (
          <TaskCard key={t.id} task={t} compact />
        ))}
        {items.length === 0 && (
          <div className="text-center text-xs text-ink-400 py-6 border border-dashed border-ink-200 rounded-xl">
            No tasks here
          </div>
        )}
      </div>
    </div>
  )
}
