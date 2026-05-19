import { format } from 'date-fns'
import { Bell, AtSign, UserPlus, CheckCircle2, AlertTriangle, Clock } from 'lucide-react'
import { notifications } from '../data/mock'
import { cn } from '../lib/utils'

const iconMap = {
  deadline:  { icon: Clock,          tone: 'bg-brand-50 text-brand-600'    },
  mention:   { icon: AtSign,         tone: 'bg-violet-50 text-violet-600'  },
  assigned:  { icon: UserPlus,       tone: 'bg-sky-50 text-sky-600'        },
  completed: { icon: CheckCircle2,   tone: 'bg-success-50 text-success-600'},
  escalated: { icon: AlertTriangle,  tone: 'bg-danger-50 text-danger-600'  },
} as const

export default function Notifications() {
  const unread = notifications.filter((n) => !n.read)
  const read   = notifications.filter((n) => n.read)

  return (
    <div className="space-y-5">
      <div className="flex items-end justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-[26px] font-bold tracking-tight text-ink-900">Notifications</h1>
          <p className="mt-1 text-sm text-ink-500">{unread.length} unread · {notifications.length} total</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="btn-secondary">Mark all as read</button>
          <button className="btn-ghost">Settings</button>
        </div>
      </div>

      <section className="card divide-y divide-ink-100">
        {unread.length > 0 && (
          <div className="px-5 py-3 bg-brand-50/40 text-xs font-semibold uppercase tracking-wide text-brand-700">
            Unread
          </div>
        )}
        {unread.map((n) => <Row key={n.id} n={n} />)}
        {read.length > 0 && (
          <div className="px-5 py-3 bg-ink-50/60 text-xs font-semibold uppercase tracking-wide text-ink-500">
            Earlier
          </div>
        )}
        {read.map((n) => <Row key={n.id} n={n} />)}
        {notifications.length === 0 && (
          <div className="py-16 text-center">
            <Bell className="mx-auto h-8 w-8 text-ink-300" />
            <p className="mt-3 text-sm text-ink-500">You're all caught up.</p>
          </div>
        )}
      </section>
    </div>
  )
}

function Row({ n }: { n: typeof notifications[number] }) {
  const { icon: Icon, tone } = iconMap[n.kind]
  return (
    <div className={cn('flex items-start gap-4 px-5 py-4 hover:bg-ink-50/40', !n.read && 'bg-brand-50/20')}>
      <span className={cn('h-10 w-10 rounded-xl grid place-items-center shrink-0', tone)}>
        <Icon className="h-5 w-5" />
      </span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h4 className="text-sm font-semibold text-ink-900">{n.title}</h4>
          {!n.read && <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />}
        </div>
        <p className="mt-0.5 text-sm text-ink-600 leading-snug">{n.body}</p>
        <span className="mt-1 inline-block text-xs text-ink-400">{format(n.at, 'MMM d, h:mm a')}</span>
      </div>
      <div className="flex items-center gap-2">
        <button className="btn-ghost text-xs">View</button>
      </div>
    </div>
  )
}
