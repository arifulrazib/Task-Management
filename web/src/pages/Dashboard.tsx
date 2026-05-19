import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import {
  CheckCircle2, AlertTriangle, TrendingUp, Sparkles, ArrowUpRight,
  ChevronRight, Calendar, Clock, MoreHorizontal,
} from 'lucide-react'
import { currentUser, tasks, projects, activity, userById } from '../data/mock'
import TaskCard from '../components/TaskCard'
import { AvatarStack } from '../components/Avatar'
import Avatar from '../components/Avatar'
import { cn } from '../lib/utils'

export default function Dashboard() {
  const today = new Date()
  const myTodays = tasks
    .filter((t) => sameDay(t.startAt, today) && t.assigneeId === currentUser.id)
    .sort((a, b) => a.startAt.getTime() - b.startAt.getTime())

  const overdueTasks = tasks.filter((t) => t.status === 'overdue' || t.status === 'escalated')
  const upcoming = tasks
    .filter((t) => t.dueAt > today && t.status !== 'done' && !sameDay(t.startAt, today))
    .sort((a, b) => a.dueAt.getTime() - b.dueAt.getTime())
    .slice(0, 5)

  const completed = tasks.filter((t) => t.status === 'done').length
  const total = tasks.length
  const progress = Math.round((completed / total) * 100)

  return (
    <div className="space-y-6">
      {/* Greeting */}
      <div className="flex items-end justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-[26px] font-bold tracking-tight text-ink-900">
            {greeting()}, {currentUser.name.split(' ')[0]} <span className="inline-block">👋</span>
          </h1>
          <p className="mt-1 text-sm text-ink-500">
            {format(today, "EEEE, MMMM d")} · You have <span className="font-medium text-ink-700">{myTodays.length} tasks</span> scheduled today.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="btn-secondary">
            <Calendar className="h-4 w-4" />
            {format(today, 'MMM d, yyyy')}
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Today's tasks"
          value={String(myTodays.length)}
          accent="bg-brand-50 text-brand-700"
          icon={<Clock className="h-5 w-5" />}
          trend="+2 from yesterday"
          trendPositive
        />
        <StatCard
          label="Overdue"
          value={String(overdueTasks.length)}
          accent="bg-danger-50 text-danger-600"
          icon={<AlertTriangle className="h-5 w-5" />}
          trend="needs attention"
          trendPositive={false}
        />
        <StatCard
          label="Completed"
          value={String(completed)}
          accent="bg-success-50 text-success-600"
          icon={<CheckCircle2 className="h-5 w-5" />}
          trend={`+${completed} this week`}
          trendPositive
        />
        <StatCard
          label="Progress"
          value={`${progress}%`}
          accent="bg-violet-50 text-violet-600"
          icon={<TrendingUp className="h-5 w-5" />}
          trend="on track"
          trendPositive
          progress={progress}
        />
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        {/* Today timeline */}
        <section className="xl:col-span-2 card p-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-semibold text-ink-900">Today's timeline</h2>
              <p className="text-xs text-ink-500 mt-0.5">Your schedule, ordered by time.</p>
            </div>
            <Link to="/timeline" className="btn-ghost text-brand-600 hover:bg-brand-50">
              Open timeline <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-5 space-y-3">
            {myTodays.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
            {myTodays.length === 0 && (
              <div className="py-10 text-center text-sm text-ink-500">Nothing scheduled. Enjoy the calm. ☕</div>
            )}
          </div>
        </section>

        {/* Right rail */}
        <div className="space-y-5">
          {/* Overdue */}
          <section className="card p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-ink-900 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-danger-500" /> Needs closing
              </h3>
              <span className="chip bg-danger-50 text-danger-600">{overdueTasks.length}</span>
            </div>
            <div className="space-y-2.5">
              {overdueTasks.map((t) => {
                const a = userById(t.assigneeId)
                return (
                  <div key={t.id} className="rounded-xl border border-ink-100 p-3 hover:bg-ink-50/60">
                    <div className="flex items-start gap-2">
                      <Avatar name={a.name} size="xs" />
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-medium text-ink-900 truncate">{t.title}</div>
                        <div className="text-xs text-danger-600 mt-0.5">Past due · {format(t.dueAt, 'MMM d, h:mm a')}</div>
                      </div>
                    </div>
                    <div className="mt-2.5 flex gap-1.5">
                      <button className="flex-1 text-xs font-medium rounded-lg bg-brand-600 text-white py-1.5 hover:bg-brand-700">Close task</button>
                      <button className="text-xs font-medium rounded-lg border border-ink-200 text-ink-700 py-1.5 px-2.5 hover:bg-white">Extend</button>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Team activity */}
          <section className="card p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-ink-900">Team activity</h3>
              <button className="text-ink-400 hover:text-ink-700"><MoreHorizontal className="h-4 w-4" /></button>
            </div>
            <ul className="space-y-3.5">
              {activity.map((a) => {
                const u = userById(a.actorId)
                return (
                  <li key={a.id} className="flex items-start gap-3">
                    <Avatar name={u.name} size="sm" />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-ink-700 leading-snug">
                        <span className="font-semibold text-ink-900">{u.name}</span>{' '}
                        <span className="text-ink-500">{a.verb}</span>{' '}
                        <span className="font-medium text-ink-900">{a.target}</span>
                      </p>
                      <span className="text-xs text-ink-400 mt-0.5 block">{relative(a.at)}</span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </section>
        </div>
      </div>

      {/* Upcoming + Projects + AI tip */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        <section className="xl:col-span-2 card p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-ink-900">Upcoming deadlines</h2>
            <button className="btn-ghost">View all <ChevronRight className="h-4 w-4" /></button>
          </div>
          <div className="divide-y divide-ink-100">
            {upcoming.map((t) => {
              const a = userById(t.assigneeId)
              return (
                <div key={t.id} className="py-3 flex items-center gap-4">
                  <div className="text-center w-14 shrink-0">
                    <div className="text-xs text-ink-500 font-medium uppercase">{format(t.dueAt, 'MMM')}</div>
                    <div className="text-xl font-bold text-ink-900 -mt-0.5 leading-none">{format(t.dueAt, 'd')}</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-ink-900 truncate">{t.title}</div>
                    <div className="text-xs text-ink-500 mt-0.5">Due {format(t.dueAt, 'h:mm a')} · {a.name}</div>
                  </div>
                  <Avatar name={a.name} size="sm" />
                  <button className="text-ink-400 hover:text-brand-600"><ArrowUpRight className="h-4 w-4" /></button>
                </div>
              )
            })}
          </div>
        </section>

        <section className="card p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-ink-900">Your projects</h3>
            <Link to="/projects" className="btn-ghost">All <ChevronRight className="h-4 w-4" /></Link>
          </div>
          <div className="space-y-3">
            {projects.slice(0, 4).map((p) => (
              <Link key={p.id} to={`/projects/${p.id}`} className="block p-3 rounded-xl hover:bg-ink-50/70 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className={cn('h-2.5 w-2.5 rounded-full shrink-0', p.color)} />
                    <span className="text-sm font-medium text-ink-900 truncate">{p.name}</span>
                  </div>
                  <span className="text-xs font-semibold text-ink-500 shrink-0">{p.progress}%</span>
                </div>
                <div className="h-1.5 bg-ink-100 rounded-full overflow-hidden">
                  <div className={cn('h-full', p.color)} style={{ width: `${p.progress}%` }} />
                </div>
                <div className="mt-2.5 flex items-center justify-between">
                  <AvatarStack names={p.memberIds.map((id) => userById(id).name)} size="xs" />
                  <span className="text-[11px] text-ink-500">Due {format(p.dueAt, 'MMM d')}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* AI tip */}
      <section className="card p-5 bg-gradient-to-br from-brand-50 to-violet-50 border-brand-100">
        <div className="flex items-start gap-4">
          <div className="h-10 w-10 rounded-xl bg-brand-600 grid place-items-center shadow-pop shrink-0">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-ink-900">Suggestion from Tasque AI</h3>
              <span className="chip bg-white text-brand-700 border border-brand-100">Beta</span>
            </div>
            <p className="mt-1 text-sm text-ink-600 leading-relaxed">
              You usually miss tasks scheduled after 5 PM. Want to move <strong>“Submit weekly report”</strong> to <strong>2:30 PM</strong>?
            </p>
            <div className="mt-3 flex gap-2">
              <button className="btn-primary">Move to 2:30 PM</button>
              <button className="btn-secondary">Dismiss</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function StatCard({
  label, value, accent, icon, trend, trendPositive, progress,
}: {
  label: string
  value: string
  accent: string
  icon: React.ReactNode
  trend: string
  trendPositive: boolean
  progress?: number
}) {
  return (
    <div className="card p-5">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs font-medium text-ink-500">{label}</div>
          <div className="mt-2 text-[28px] font-bold tracking-tight text-ink-900 leading-none">{value}</div>
        </div>
        <span className={cn('h-10 w-10 rounded-xl grid place-items-center', accent)}>{icon}</span>
      </div>
      {typeof progress === 'number' && (
        <div className="mt-3 h-1.5 bg-ink-100 rounded-full overflow-hidden">
          <div className="h-full bg-brand-600" style={{ width: `${progress}%` }} />
        </div>
      )}
      <div className={cn('mt-3 text-xs font-medium', trendPositive ? 'text-success-600' : 'text-danger-600')}>{trend}</div>
    </div>
  )
}

function greeting() {
  const h = new Date().getHours()
  if (h < 12) return 'Good morning'
  if (h < 18) return 'Good afternoon'
  return 'Good evening'
}

function sameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

function relative(d: Date) {
  const m = Math.round((Date.now() - d.getTime()) / 60000)
  if (m < 60) return `${m}m ago`
  if (m < 60 * 24) return `${Math.round(m / 60)}h ago`
  return `${Math.round(m / (60 * 24))}d ago`
}
