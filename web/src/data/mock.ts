export type TaskStatus =
  | 'todo'
  | 'in_progress'
  | 'done'
  | 'overdue'
  | 'pending_approval'
  | 'escalated'

export type Priority = 'low' | 'medium' | 'high' | 'urgent'

export interface User {
  id: string
  name: string
  email: string
  role: string
}

export interface Project {
  id: string
  name: string
  color: string // tailwind bg-* token, used as accent
  progress: number // 0..100
  memberIds: string[]
  dueAt: Date
}

export interface Task {
  id: string
  title: string
  description?: string
  status: TaskStatus
  priority: Priority
  projectId: string
  assigneeId: string
  creatorId: string
  startAt: Date
  dueAt: Date
  durationMinutes: number
  tags: string[]
}

export interface ActivityItem {
  id: string
  actorId: string
  verb: string
  target: string
  at: Date
}

export interface NotificationItem {
  id: string
  kind: 'deadline' | 'mention' | 'assigned' | 'completed' | 'escalated'
  title: string
  body: string
  at: Date
  read: boolean
}

const day = 24 * 60 * 60 * 1000
const hour = 60 * 60 * 1000
const now = new Date()
const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate())
const at = (h: number, m = 0) =>
  new Date(startOfDay.getTime() + h * hour + m * 60 * 1000)

export const currentUser: User = {
  id: 'u1',
  name: 'Ariful Razib',
  email: 'arif@tasque.app',
  role: 'Product Designer',
}

export const users: User[] = [
  currentUser,
  { id: 'u2', name: 'Maya Chen',     email: 'maya@tasque.app',    role: 'Engineering Lead' },
  { id: 'u3', name: 'Daniel Park',   email: 'daniel@tasque.app',  role: 'Backend Engineer' },
  { id: 'u4', name: 'Sara Ahmed',    email: 'sara@tasque.app',    role: 'Product Manager'  },
  { id: 'u5', name: 'Leo Martin',    email: 'leo@tasque.app',     role: 'iOS Engineer'     },
  { id: 'u6', name: 'Priya Nair',    email: 'priya@tasque.app',   role: 'QA Engineer'      },
]

export const projects: Project[] = [
  { id: 'p1', name: 'Banking Dashboard',  color: 'bg-brand-600',     progress: 64, memberIds: ['u1','u2','u3','u4'], dueAt: new Date(startOfDay.getTime() + 8 * day) },
  { id: 'p2', name: 'Onboarding Revamp',  color: 'bg-emerald-500',   progress: 38, memberIds: ['u1','u4','u5'],      dueAt: new Date(startOfDay.getTime() + 14 * day) },
  { id: 'p3', name: 'Mobile App v2',      color: 'bg-violet-500',    progress: 82, memberIds: ['u2','u5','u6'],      dueAt: new Date(startOfDay.getTime() + 3 * day) },
  { id: 'p4', name: 'Compliance Audit',   color: 'bg-amber-500',     progress: 12, memberIds: ['u3','u4'],           dueAt: new Date(startOfDay.getTime() + 21 * day) },
]

export const tasks: Task[] = [
  // Today
  { id: 't1', title: 'Team standup',                            status: 'done',             priority: 'medium', projectId: 'p1', assigneeId: 'u1', creatorId: 'u4', startAt: at(9,0),  dueAt: at(9,30),  durationMinutes: 30, tags: ['meeting']  },
  { id: 't2', title: 'Design banking dashboard hero',           status: 'in_progress',      priority: 'high',   projectId: 'p1', assigneeId: 'u1', creatorId: 'u4', startAt: at(10,0), dueAt: at(12,0),  durationMinutes: 120, tags: ['design','ui'], description: 'Lay out the KPI strip, activity feed, and quick actions. Reference fintech v3 system.' },
  { id: 't3', title: 'Review onboarding copy with Sara',        status: 'todo',             priority: 'medium', projectId: 'p2', assigneeId: 'u1', creatorId: 'u4', startAt: at(13,0), dueAt: at(13,45), durationMinutes: 45,  tags: ['review'] },
  { id: 't4', title: 'Client call — Banking dashboard demo',    status: 'todo',             priority: 'urgent', projectId: 'p1', assigneeId: 'u1', creatorId: 'u4', startAt: at(15,0), dueAt: at(16,0),  durationMinutes: 60,  tags: ['client','demo'] },
  { id: 't5', title: 'Submit weekly report',                    status: 'todo',             priority: 'low',    projectId: 'p4', assigneeId: 'u1', creatorId: 'u4', startAt: at(17,0), dueAt: at(17,30), durationMinutes: 30,  tags: ['admin'] },

  // Overdue / pending
  { id: 't6',  title: 'Export accessibility audit PDF',         status: 'overdue',          priority: 'high',   projectId: 'p2', assigneeId: 'u1', creatorId: 'u4', startAt: new Date(startOfDay.getTime() - 1*day + 14*hour), dueAt: new Date(startOfDay.getTime() - 1*day + 17*hour), durationMinutes: 60, tags: ['a11y']    },
  { id: 't7',  title: 'Wire transfer flow QA round',            status: 'pending_approval', priority: 'high',   projectId: 'p1', assigneeId: 'u6', creatorId: 'u4', startAt: new Date(startOfDay.getTime() - 2*day + 10*hour), dueAt: new Date(startOfDay.getTime() - 1*day + 18*hour), durationMinutes: 120, tags: ['qa'] },
  { id: 't8',  title: 'Compliance — KYC token storage memo',    status: 'escalated',        priority: 'urgent', projectId: 'p4', assigneeId: 'u3', creatorId: 'u4', startAt: new Date(startOfDay.getTime() - 3*day),           dueAt: new Date(startOfDay.getTime() - 1*day),            durationMinutes: 60, tags: ['legal','urgent'] },

  // Upcoming
  { id: 't9',  title: 'Pair on transactions list virtualization', status: 'todo',  priority: 'medium', projectId: 'p3', assigneeId: 'u2', creatorId: 'u4', startAt: new Date(startOfDay.getTime() + 1*day + 10*hour), dueAt: new Date(startOfDay.getTime() + 1*day + 12*hour), durationMinutes: 120, tags: ['eng'] },
  { id: 't10', title: 'Mobile v2 — release checklist review',     status: 'todo',  priority: 'high',   projectId: 'p3', assigneeId: 'u5', creatorId: 'u4', startAt: new Date(startOfDay.getTime() + 2*day + 9*hour),  dueAt: new Date(startOfDay.getTime() + 2*day + 10*hour), durationMinutes: 60,  tags: ['release']    },
  { id: 't11', title: 'Onboarding empty-states sweep',            status: 'todo',  priority: 'medium', projectId: 'p2', assigneeId: 'u1', creatorId: 'u4', startAt: new Date(startOfDay.getTime() + 3*day + 14*hour), dueAt: new Date(startOfDay.getTime() + 3*day + 16*hour), durationMinutes: 120, tags: ['design']     },
  { id: 't12', title: 'Reconcile Q2 audit findings',              status: 'todo',  priority: 'low',    projectId: 'p4', assigneeId: 'u3', creatorId: 'u4', startAt: new Date(startOfDay.getTime() + 5*day + 11*hour), dueAt: new Date(startOfDay.getTime() + 5*day + 13*hour), durationMinutes: 120, tags: ['audit']      },
]

export const activity: ActivityItem[] = [
  { id: 'a1', actorId: 'u2', verb: 'completed',        target: 'Wire transfer flow QA round',   at: new Date(now.getTime() - 25*60*1000) },
  { id: 'a2', actorId: 'u4', verb: 'assigned you',     target: 'Client call — Banking dashboard demo', at: new Date(now.getTime() - 2*hour) },
  { id: 'a3', actorId: 'u3', verb: 'requested review', target: 'KYC token storage memo',         at: new Date(now.getTime() - 4*hour) },
  { id: 'a4', actorId: 'u5', verb: 'commented on',     target: 'Mobile v2 release checklist',    at: new Date(now.getTime() - 7*hour) },
  { id: 'a5', actorId: 'u6', verb: 'escalated',        target: 'KYC token storage memo',         at: new Date(now.getTime() - 22*hour) },
]

export const notifications: NotificationItem[] = [
  { id: 'n1', kind: 'deadline',  title: 'Deadline in 30 minutes',  body: 'Design banking dashboard hero is due at 12:00 PM.',           at: new Date(now.getTime() - 5*60*1000),  read: false },
  { id: 'n2', kind: 'mention',   title: 'Sara mentioned you',      body: '"@arif can you take a look at the onboarding copy today?"',   at: new Date(now.getTime() - 35*60*1000), read: false },
  { id: 'n3', kind: 'assigned',  title: 'New task assigned',       body: 'Sara assigned you "Client call — Banking dashboard demo".',   at: new Date(now.getTime() - 2*hour),     read: false },
  { id: 'n4', kind: 'escalated', title: 'Task escalated',          body: 'KYC token storage memo was escalated to Maya Chen.',          at: new Date(now.getTime() - 22*hour),    read: true  },
  { id: 'n5', kind: 'completed', title: 'Task completed',          body: 'Maya completed "Wire transfer flow QA round".',               at: new Date(now.getTime() - 26*hour),    read: true  },
]

export const userById = (id: string) => users.find((u) => u.id === id) ?? users[0]
export const projectById = (id: string) => projects.find((p) => p.id === id) ?? projects[0]
