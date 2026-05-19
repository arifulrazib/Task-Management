import { useEffect } from 'react'
import { X, Calendar, Flag, Users, Tag, FileText } from 'lucide-react'
import { projects, users } from '../data/mock'

interface Props {
  open: boolean
  onClose: () => void
}

export default function CreateTaskModal({ open, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-[10vh]" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-ink-900/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-pop border border-ink-100 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-ink-100">
          <div>
            <h2 className="text-base font-semibold text-ink-900">Create new task</h2>
            <p className="text-xs text-ink-500 mt-0.5">Assign work, set a deadline, and we'll close the loop for you.</p>
          </div>
          <button onClick={onClose} className="h-9 w-9 grid place-items-center rounded-lg text-ink-500 hover:bg-ink-100">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          <input
            autoFocus
            placeholder="Task title (e.g. Design banking dashboard hero)"
            className="w-full text-lg font-semibold text-ink-900 placeholder:text-ink-300 bg-transparent border-0 p-0 focus:outline-none"
          />
          <div className="flex items-start gap-2">
            <FileText className="h-4 w-4 text-ink-400 mt-2.5" />
            <textarea
              placeholder="Add a short description, acceptance criteria, or links…"
              rows={3}
              className="input border-transparent bg-ink-50/60 resize-none focus:bg-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Field icon={<Users className="h-4 w-4 text-ink-400" />} label="Project">
              <select className="input">
                {projects.map((p) => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            </Field>
            <Field icon={<Users className="h-4 w-4 text-ink-400" />} label="Assignee">
              <select className="input">
                {users.map((u) => (
                  <option key={u.id} value={u.id}>{u.name}</option>
                ))}
              </select>
            </Field>
            <Field icon={<Calendar className="h-4 w-4 text-ink-400" />} label="Due date">
              <input type="datetime-local" className="input" defaultValue={new Date().toISOString().slice(0,16)} />
            </Field>
            <Field icon={<Flag className="h-4 w-4 text-ink-400" />} label="Priority">
              <select className="input" defaultValue="medium">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </Field>
          </div>

          <Field icon={<Tag className="h-4 w-4 text-ink-400" />} label="Tags">
            <input placeholder="design, ui, client" className="input" />
          </Field>
        </div>

        <div className="flex items-center justify-between px-6 py-4 bg-ink-50/60 border-t border-ink-100">
          <label className="flex items-center gap-2 text-sm text-ink-600">
            <input type="checkbox" className="h-4 w-4 rounded border-ink-300 text-brand-600 focus:ring-brand-500" />
            Notify assignee
          </label>
          <div className="flex items-center gap-2">
            <button onClick={onClose} className="btn-secondary">Cancel</button>
            <button onClick={onClose} className="btn-primary">Create task</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Field({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-ink-600 flex items-center gap-1.5 mb-1.5">{icon}{label}</span>
      {children}
    </label>
  )
}
