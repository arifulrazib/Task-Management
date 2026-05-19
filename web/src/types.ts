export type Priority = 'low' | 'medium' | 'high' | 'urgent'

export type TaskStatus =
  | 'todo'
  | 'in_progress'
  | 'completed'
  | 'overdue'
  | 'pending_approval'
  | 'escalated'

export interface Member {
  id: string
  name: string
  role: string
  email: string
  avatarUrl?: string
}

export interface Project {
  id: string
  name: string
  color: string
  progress: number
  members: string[]
  taskCount: number
  description?: string
}

export interface Task {
  id: string
  title: string
  description?: string
  projectId: string
  assigneeId: string
  startTime: string
  deadline: string
  status: TaskStatus
  priority: Priority
  tags?: string[]
  completionProof?: string
}

export interface ActivityItem {
  id: string
  actorId: string
  type: 'completed' | 'created' | 'commented' | 'assigned' | 'overdue'
  message: string
  timestamp: string
  taskId?: string
}

export interface Notification {
  id: string
  type: 'deadline' | 'mention' | 'assignment' | 'overdue' | 'approval'
  title: string
  body: string
  timestamp: string
  read: boolean
}
