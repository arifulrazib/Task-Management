import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Search, Bell, Plus, ChevronDown, LogOut, UserCog, Settings, HelpCircle, Check,
  AtSign, UserPlus, CheckCircle2, AlertTriangle, Clock,
} from 'lucide-react'
import Avatar from './Avatar'
import { currentUser, notifications } from '../data/mock'
import CreateTaskModal from './CreateTaskModal'
import { cn } from '../lib/utils'
import { format } from 'date-fns'

const iconMap = {
  deadline:  { icon: Clock,         tone: 'bg-brand-50 text-brand-600'     },
  mention:   { icon: AtSign,        tone: 'bg-violet-50 text-violet-600'   },
  assigned:  { icon: UserPlus,      tone: 'bg-sky-50 text-sky-600'         },
  completed: { icon: CheckCircle2,  tone: 'bg-success-50 text-success-600' },
  escalated: { icon: AlertTriangle, tone: 'bg-danger-50 text-danger-600'   },
} as const

export default function Topbar() {
  const navigate = useNavigate()
  const [modalOpen, setModalOpen] = useState(false)
  const [notifOpen, setNotifOpen] = useState(false)
  const [userOpen, setUserOpen] = useState(false)

  const notifRef = useRef<HTMLDivElement>(null)
  const userRef = useRef<HTMLDivElement>(null)

  const unread = notifications.filter((n) => !n.read)

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node
      if (notifRef.current && !notifRef.current.contains(t)) setNotifOpen(false)
      if (userRef.current && !userRef.current.contains(t)) setUserOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setNotifOpen(false); setUserOpen(false) }
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <>
      <header className="h-16 shrink-0 bg-white border-b border-ink-100 flex items-center gap-3 px-5 lg:px-8">
        {/* Left — search */}
        <div className="relative w-72">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400" />
          <input
            placeholder="Search tasks, projects, people…"
            className="input pl-9 bg-ink-50/60 border-transparent hover:bg-ink-100 focus:bg-white"
          />
          <kbd className="hidden md:inline-flex absolute right-3 top-1/2 -translate-y-1/2 items-center gap-1 rounded-md bg-white border border-ink-200 px-1.5 py-0.5 text-[10px] font-medium text-ink-500">
            ⌘K
          </kbd>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Right — actions */}
        <button onClick={() => setModalOpen(true)} className="btn-primary">
          <Plus className="h-4 w-4" strokeWidth={2.5} />
          New task
        </button>

        {/* Notifications */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => { setNotifOpen((v) => !v); setUserOpen(false) }}
            className={cn(
              'relative h-10 w-10 grid place-items-center rounded-xl transition-colors',
              notifOpen ? 'bg-ink-100 text-ink-900' : 'text-ink-600 hover:bg-ink-100',
            )}
            aria-label="Notifications"
          >
            <Bell className="h-[18px] w-[18px]" />
            {unread.length > 0 && (
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-danger-500 ring-2 ring-white" />
            )}
          </button>

          {notifOpen && (
            <div className="absolute right-0 mt-2 w-[380px] origin-top-right rounded-2xl bg-white border border-ink-100 shadow-pop overflow-hidden z-40">
              <div className="px-4 py-3 flex items-center justify-between border-b border-ink-100">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-ink-900">Notifications</h3>
                  {unread.length > 0 && (
                    <span className="chip bg-danger-50 text-danger-600">{unread.length} new</span>
                  )}
                </div>
                <button className="text-xs font-medium text-brand-600 hover:text-brand-700 inline-flex items-center gap-1">
                  <Check className="h-3.5 w-3.5" /> Mark all read
                </button>
              </div>

              <ul className="max-h-[420px] overflow-y-auto divide-y divide-ink-100">
                {notifications.slice(0, 5).map((n) => {
                  const { icon: Icon, tone } = iconMap[n.kind]
                  return (
                    <li
                      key={n.id}
                      className={cn(
                        'flex items-start gap-3 px-4 py-3 hover:bg-ink-50/60 cursor-pointer',
                        !n.read && 'bg-brand-50/20',
                      )}
                    >
                      <span className={cn('h-9 w-9 rounded-xl grid place-items-center shrink-0', tone)}>
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-semibold text-ink-900 truncate">{n.title}</h4>
                          {!n.read && <span className="h-1.5 w-1.5 rounded-full bg-brand-600 shrink-0" />}
                        </div>
                        <p className="mt-0.5 text-xs text-ink-600 line-clamp-2 leading-snug">{n.body}</p>
                        <span className="mt-1 inline-block text-[11px] text-ink-400">{format(n.at, 'MMM d, h:mm a')}</span>
                      </div>
                    </li>
                  )
                })}
              </ul>

              <Link
                to="/notifications"
                onClick={() => setNotifOpen(false)}
                className="block px-4 py-3 text-center text-sm font-medium text-brand-600 hover:bg-ink-50 border-t border-ink-100"
              >
                View all notifications
              </Link>
            </div>
          )}
        </div>

        {/* User dropdown */}
        <div className="relative" ref={userRef}>
          <button
            onClick={() => { setUserOpen((v) => !v); setNotifOpen(false) }}
            className={cn(
              'flex items-center gap-2.5 pl-2 pr-2 py-1 rounded-xl transition-colors',
              userOpen ? 'bg-ink-100' : 'hover:bg-ink-100',
            )}
            aria-haspopup="menu"
            aria-expanded={userOpen ? 'true' : 'false'}
          >
            <Avatar name={currentUser.name} size="md" />
            <div className="hidden md:block leading-tight text-left">
              <div className="text-sm font-semibold text-ink-900">{currentUser.name}</div>
              <div className="text-xs text-ink-500">{currentUser.role}</div>
            </div>
            <ChevronDown className={cn('h-4 w-4 text-ink-400 transition-transform', userOpen && 'rotate-180')} />
          </button>

          {userOpen && (
            <div className="absolute right-0 mt-2 w-64 origin-top-right rounded-2xl bg-white border border-ink-100 shadow-pop overflow-hidden z-40" role="menu">
              <div className="px-4 py-3 border-b border-ink-100 flex items-center gap-3">
                <Avatar name={currentUser.name} size="md" />
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-ink-900 truncate">{currentUser.name}</div>
                  <div className="text-xs text-ink-500 truncate">{currentUser.email}</div>
                </div>
              </div>

              <div className="py-1.5">
                <MenuItem to="/profile" icon={<UserCog className="h-4 w-4" />} onClick={() => setUserOpen(false)}>
                  Profile settings
                </MenuItem>
                <MenuItem to="/profile" icon={<Settings className="h-4 w-4" />} onClick={() => setUserOpen(false)}>
                  Workspace settings
                </MenuItem>
                <MenuItem to="/profile" icon={<HelpCircle className="h-4 w-4" />} onClick={() => setUserOpen(false)}>
                  Help & support
                </MenuItem>
              </div>

              <div className="border-t border-ink-100 py-1.5">
                <button
                  onClick={() => { setUserOpen(false); navigate('/login') }}
                  className="w-full flex items-center gap-3 px-4 py-2 text-sm font-medium text-danger-600 hover:bg-danger-50 transition-colors"
                  role="menuitem"
                >
                  <LogOut className="h-4 w-4" />
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      <CreateTaskModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}

function MenuItem({
  to, icon, children, onClick,
}: {
  to: string
  icon: React.ReactNode
  children: React.ReactNode
  onClick?: () => void
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      role="menuitem"
      className="flex items-center gap-3 px-4 py-2 text-sm text-ink-700 hover:bg-ink-100 hover:text-ink-900 transition-colors"
    >
      <span className="text-ink-500">{icon}</span>
      {children}
    </Link>
  )
}
