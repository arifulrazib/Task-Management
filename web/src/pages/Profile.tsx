import { Mail, Briefcase, MapPin, Camera, CheckCircle2, Clock, TrendingUp } from 'lucide-react'
import { currentUser, tasks } from '../data/mock'
import Avatar from '../components/Avatar'
import { cn } from '../lib/utils'

export default function Profile() {
  const my = tasks.filter((t) => t.assigneeId === currentUser.id)
  const done = my.filter((t) => t.status === 'done').length
  const inProgress = my.filter((t) => t.status === 'in_progress').length
  const overdue = my.filter((t) => t.status === 'overdue').length

  return (
    <div className="space-y-5">
      <header className="card p-6 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-br from-brand-600 to-brand-800" />
        <div className="relative flex items-end gap-5">
          <div className="relative">
            <Avatar name={currentUser.name} size="lg" className="h-20 w-20 text-xl ring-4 ring-white" />
            <button className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full bg-white border border-ink-200 grid place-items-center text-ink-600 hover:bg-ink-50">
              <Camera className="h-3.5 w-3.5" />
            </button>
          </div>
          <div className="flex-1 pb-1">
            <h1 className="text-xl font-bold text-ink-900">{currentUser.name}</h1>
            <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-500">
              <span className="inline-flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" /> {currentUser.role}</span>
              <span className="inline-flex items-center gap-1"><Mail className="h-3.5 w-3.5" /> {currentUser.email}</span>
              <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> Dhaka, Bangladesh</span>
            </div>
          </div>
          <button className="btn-secondary">Edit profile</button>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-4">
        <Stat icon={<CheckCircle2 className="h-5 w-5" />} value={done} label="Completed" tone="bg-success-50 text-success-600" />
        <Stat icon={<Clock className="h-5 w-5" />} value={inProgress} label="In progress" tone="bg-brand-50 text-brand-700" />
        <Stat icon={<TrendingUp className="h-5 w-5" />} value={overdue} label="Overdue" tone="bg-danger-50 text-danger-600" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <section className="card p-5">
          <h3 className="text-sm font-semibold text-ink-900 mb-4">Productivity this week</h3>
          <div className="space-y-3.5">
            {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((d, i) => {
              const v = [70, 90, 55, 80, 40, 20, 10][i]
              return (
                <div key={d} className="flex items-center gap-3">
                  <span className="text-xs font-medium text-ink-500 w-8">{d}</span>
                  <div className="flex-1 h-2 bg-ink-100 rounded-full overflow-hidden">
                    <div className={cn('h-full rounded-full', v > 60 ? 'bg-success-500' : v > 30 ? 'bg-warning-500' : 'bg-ink-300')} style={{ width: `${v}%` }} />
                  </div>
                  <span className="text-xs font-semibold text-ink-700 w-8 text-right">{v}%</span>
                </div>
              )
            })}
          </div>
        </section>

        <section className="card p-5">
          <h3 className="text-sm font-semibold text-ink-900 mb-4">Account</h3>
          <ul className="divide-y divide-ink-100 -mx-5">
            {[
              { label: 'Workspace',         value: 'Tasque · Personal' },
              { label: 'Time zone',         value: '(GMT+6) Asia/Dhaka' },
              { label: 'Notifications',     value: 'Email + Push' },
              { label: 'Calendar sync',     value: 'Not connected' },
              { label: 'Plan',              value: 'Free · 4 of 5 projects used' },
            ].map((r) => (
              <li key={r.label} className="px-5 py-3 flex items-center justify-between">
                <span className="text-sm text-ink-600">{r.label}</span>
                <span className="text-sm font-medium text-ink-900">{r.value}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}

function Stat({ icon, value, label, tone }: { icon: React.ReactNode; value: number; label: string; tone: string }) {
  return (
    <div className="card p-5 flex items-center gap-4">
      <span className={cn('h-12 w-12 rounded-xl grid place-items-center', tone)}>{icon}</span>
      <div>
        <div className="text-2xl font-bold text-ink-900 leading-none">{value}</div>
        <div className="text-xs text-ink-500 mt-1.5 font-medium uppercase tracking-wide">{label}</div>
      </div>
    </div>
  )
}
