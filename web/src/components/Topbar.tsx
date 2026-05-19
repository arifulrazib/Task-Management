import { useState } from 'react'
import { Search, Bell, Plus, ChevronDown } from 'lucide-react'
import Avatar from './Avatar'
import { currentUser, notifications } from '../data/mock'
import CreateTaskModal from './CreateTaskModal'

export default function Topbar() {
  const [open, setOpen] = useState(false)
  const unread = notifications.filter((n) => !n.read).length

  return (
    <>
      <header className="h-16 shrink-0 bg-white border-b border-ink-100 flex items-center gap-4 px-5 lg:px-8">
        <div className="relative flex-1 max-w-xl">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400" />
          <input
            placeholder="Search tasks, projects, people…"
            className="input pl-9 bg-ink-50/60 border-transparent hover:bg-ink-100 focus:bg-white"
          />
          <kbd className="hidden md:inline-flex absolute right-3 top-1/2 -translate-y-1/2 items-center gap-1 rounded-md bg-white border border-ink-200 px-1.5 py-0.5 text-[10px] font-medium text-ink-500">
            ⌘K
          </kbd>
        </div>

        <button onClick={() => setOpen(true)} className="btn-primary">
          <Plus className="h-4 w-4" strokeWidth={2.5} />
          New task
        </button>

        <button className="relative h-10 w-10 grid place-items-center rounded-xl text-ink-600 hover:bg-ink-100">
          <Bell className="h-[18px] w-[18px]" />
          {unread > 0 && (
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-danger-500 ring-2 ring-white" />
          )}
        </button>

        <div className="flex items-center gap-2.5 pl-2 border-l border-ink-100">
          <Avatar name={currentUser.name} size="md" />
          <div className="hidden md:block leading-tight">
            <div className="text-sm font-semibold text-ink-900">{currentUser.name}</div>
            <div className="text-xs text-ink-500">{currentUser.role}</div>
          </div>
          <ChevronDown className="h-4 w-4 text-ink-400" />
        </div>
      </header>

      <CreateTaskModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
