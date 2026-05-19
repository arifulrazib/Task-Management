import { NavLink } from 'react-router-dom'
import { LayoutDashboard, CalendarRange, FolderKanban, Bell, User2, CheckCircle2, Settings } from 'lucide-react'
import { cn } from '../lib/utils'

const nav = [
  { to: '/',              label: 'Home',          icon: LayoutDashboard },
  { to: '/timeline',      label: 'Timeline',      icon: CalendarRange },
  { to: '/projects',      label: 'Projects',      icon: FolderKanban },
  { to: '/notifications', label: 'Notifications', icon: Bell, badge: 3 },
  { to: '/profile',       label: 'Profile',       icon: User2 },
]

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex w-[248px] shrink-0 flex-col bg-white border-r border-ink-100">
      <div className="h-16 flex items-center gap-2.5 px-5 border-b border-ink-100">
        <span className="h-9 w-9 rounded-xl bg-brand-600 grid place-items-center shadow-pop">
          <CheckCircle2 className="h-5 w-5 text-white" strokeWidth={2.5} />
        </span>
        <div>
          <div className="text-[15px] font-bold tracking-tight text-ink-900 leading-none">Tasque</div>
          <div className="text-[11px] text-ink-500 mt-0.5">Plan. Close. Repeat.</div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {nav.map(({ to, label, icon: Icon, badge }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              cn(
                'group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-brand-50 text-brand-700'
                  : 'text-ink-600 hover:bg-ink-100 hover:text-ink-900',
              )
            }
          >
            {({ isActive }) => (
              <>
                <Icon className={cn('h-[18px] w-[18px]', isActive ? 'text-brand-600' : 'text-ink-500 group-hover:text-ink-700')} strokeWidth={2} />
                <span className="flex-1">{label}</span>
                {badge && (
                  <span className="inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-danger-500 px-1.5 text-[11px] font-semibold text-white">
                    {badge}
                  </span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-ink-100 px-3 py-3">
        <NavLink to="/profile" className="flex items-center gap-2 rounded-xl px-2 py-2 text-sm text-ink-700 hover:bg-ink-100">
          <Settings className="h-[18px] w-[18px] text-ink-500" />
          Settings
        </NavLink>
      </div>
    </aside>
  )
}
