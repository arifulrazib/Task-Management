# Task Management — Product Spec

**Stack (decided):** React (web frontend) + Node + Supabase (Postgres, auth, realtime).
**Status:** Pre-MVP. Spec only. No code yet.

---

## 1. Vision

A task management app that helps a user instantly answer **"What should I do right now?"** — built around a daily timeline, smart reminders, and team accountability via deadline closing.

---

## 2. Main Features

### 2.1 Dashboard
What the user sees on the home screen:
- Today's tasks
- Upcoming deadlines
- Overdue tasks
- Team activity
- Progress percentage
- Timeline calendar

**UX goal:** the user understands "what should I do now?" in under 3 seconds.

### 2.2 Daily Timeline View (core feature)
A time-ordered list of the day's tasks.

| Time     | Task              |
|----------|-------------------|
| 9:00 AM  | Team Meeting      |
| 10:00 AM | Design Homepage   |
| 1:00 PM  | Client Call       |
| 4:00 PM  | Submit Report     |

Builds: habit structure, productivity flow, time awareness.

### 2.3 Smart Reminder System
Reminder types:
- Push notifications
- Deadline alerts
- Missed-task alerts
- Repeated reminders
- Team-mention alerts

Example copy: *"Your UI Design task deadline is in 30 minutes."*

### 2.4 Project Workspace
Each project contains:
- Task list
- Timeline
- Team members
- File upload
- Comments
- Activity history

### 2.5 Assignee System
Task creator can:
- Assign a member
- Set deadline
- Set priority
- Track completion

Example:
- Task: *Create Banking Dashboard*
- Assigned to: Arif
- Deadline: May 20
- Status: In Progress

### 2.6 Deadline Closing System (unique accountability feature)
When a deadline ends, the task automatically becomes one of:
- Overdue
- Pending approval
- Escalated

The assignee must then:
- Close the task, **or**
- Request an extension, **or**
- Add completion proof

### 2.7 Productivity Analytics
Track:
- Completed tasks
- Delayed tasks
- Team performance
- Focus time
- Daily consistency

### 2.8 Calendar Integration
- View tasks in calendar
- Drag to reschedule
- Weekly planning
- Monthly overview

### 2.9 AI Features (future, not MVP)
- "You usually miss tasks after 5 PM."
- "Move this task earlier."
- "High priority deadline tomorrow."
- Auto-schedule tasks.

---

## 3. User Flow

```
Onboarding
  ├─ Create account
  ├─ Join/Create workspace
  ├─ Add team members
  └─ Create first project
        ↓
Dashboard
  ├─ Today timeline
  └─ Upcoming tasks
        ↓
Project
  ├─ Create tasks
  ├─ Assign members
  └─ Set deadlines
        ↓
Reminder
  ├─ Notifications
  ├─ Alerts
  └─ Deadline tracking
        ↓
Completion
  ├─ Close task
  ├─ Mark complete
  └─ Performance tracking
```

---

## 4. App Structure

**Bottom navigation (mobile) / sidebar (web):**
1. Home
2. Timeline
3. Projects
4. Notifications
5. Profile

---

## 5. Design System

**Style:** clean, minimal, fintech-grade. White + soft blue base. Timeline cards. Rounded components. Progress indicators. Status colors.

**Colors:**
- Primary: `#01559D`
- Success: green
- Warning: orange
- Overdue: red

---

## 6. Monetization

| Tier      | Includes                                                          |
|-----------|-------------------------------------------------------------------|
| Free      | Personal tasks, basic reminders                                    |
| Premium   | Team collaboration, analytics, AI scheduling, unlimited projects   |
| Business  | Admin dashboard, employee tracking, team productivity reports      |

---

## 7. MVP Scope (V1)

**Build only these:**
1. Login (Supabase Auth)
2. Dashboard
3. Create task
4. Reminder
5. Timeline
6. Assign member
7. Deadline status

Everything else (analytics, calendar drag-drop, AI, file uploads, comments, monetization tiers) is **post-MVP**.

---

## 8. Open Questions

- Email/password only, or social login (Google) at MVP?
- Push notifications on web only (via Web Push) or do we need a mobile companion?
- Single workspace per user at MVP, or multi-workspace from day one?
- Time zones — store everything in UTC and render local? (Yes, assume so unless changed.)
