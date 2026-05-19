import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CheckCircle2, Mail, Lock, ArrowRight, Clock, Calendar, Bell } from 'lucide-react'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('arif@tasque.app')
  const [password, setPassword] = useState('demo-password')

  return (
    <div className="min-h-full grid lg:grid-cols-2 bg-white">
      {/* Left — brand panel */}
      <aside className="relative hidden lg:flex flex-col justify-between p-10 text-white bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/5" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-white/5" />
        <div className="absolute top-1/3 right-10 h-40 w-40 rounded-full bg-brand-400/30 blur-3xl" />

        <div className="relative flex items-center gap-2.5">
          <span className="h-10 w-10 rounded-xl bg-white/15 backdrop-blur grid place-items-center">
            <CheckCircle2 className="h-5 w-5 text-white" strokeWidth={2.5} />
          </span>
          <span className="text-lg font-bold tracking-tight">Tasque</span>
        </div>

        <div className="relative space-y-8">
          <div>
            <h1 className="text-[42px] font-bold leading-[1.1] tracking-tight">
              Plan your day,<br />close every deadline.
            </h1>
            <p className="mt-4 text-white/80 max-w-md leading-relaxed">
              A team task manager built around a daily timeline and an accountability loop — so nothing slips past its deadline.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 max-w-md">
            <Feature icon={<Clock className="h-4 w-4" />} label="Daily timeline" />
            <Feature icon={<Calendar className="h-4 w-4" />} label="Deadline closing" />
            <Feature icon={<Bell className="h-4 w-4" />} label="Smart reminders" />
          </div>
        </div>

        <div className="relative text-sm text-white/70">
          “We cut missed deadlines by 38% in the first month.”
          <div className="mt-1 text-white/50 text-xs">— Maya Chen, Engineering Lead</div>
        </div>
      </aside>

      {/* Right — form */}
      <section className="flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-sm">
          <div className="lg:hidden mb-8 flex items-center gap-2.5">
            <span className="h-9 w-9 rounded-xl bg-brand-600 grid place-items-center">
              <CheckCircle2 className="h-5 w-5 text-white" strokeWidth={2.5} />
            </span>
            <span className="text-lg font-bold tracking-tight">Tasque</span>
          </div>

          <h2 className="text-2xl font-bold text-ink-900 tracking-tight">Welcome back</h2>
          <p className="mt-1.5 text-sm text-ink-500">Sign in to your workspace to continue.</p>

          <form
            onSubmit={(e) => { e.preventDefault(); navigate('/') }}
            className="mt-7 space-y-4"
          >
            <label className="block">
              <span className="text-xs font-medium text-ink-600">Email</span>
              <div className="relative mt-1.5">
                <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input pl-9"
                  placeholder="you@company.com"
                />
              </div>
            </label>

            <label className="block">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-ink-600">Password</span>
                <a href="#" className="text-xs font-medium text-brand-600 hover:text-brand-700">Forgot?</a>
              </div>
              <div className="relative mt-1.5">
                <Lock className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input pl-9"
                  placeholder="••••••••"
                />
              </div>
            </label>

            <label className="flex items-center gap-2 text-sm text-ink-600">
              <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-ink-300 text-brand-600 focus:ring-brand-500" />
              Keep me signed in
            </label>

            <button type="submit" className="btn-primary w-full">
              Sign in
              <ArrowRight className="h-4 w-4" />
            </button>

            <div className="relative my-2">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-ink-200" /></div>
              <div className="relative flex justify-center"><span className="bg-white px-2 text-xs text-ink-500">or</span></div>
            </div>

            <button type="button" className="btn-secondary w-full">
              <GoogleIcon /> Continue with Google
            </button>

            <p className="text-center text-sm text-ink-500 pt-2">
              New here? <Link to="/login" className="font-medium text-brand-600 hover:text-brand-700">Create an account</Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  )
}

function Feature({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="rounded-xl bg-white/10 backdrop-blur border border-white/15 p-3">
      <div className="h-7 w-7 rounded-lg bg-white/15 grid place-items-center mb-2">{icon}</div>
      <div className="text-xs font-medium">{label}</div>
    </div>
  )
}

function GoogleIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 48 48" aria-hidden>
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.9 32.6 29.4 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.4-.4-3.5z"/>
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16.1 19 13 24 13c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6 29.3 4 24 4 16.3 4 9.6 8.3 6.3 14.7z"/>
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.1C29.2 35.1 26.7 36 24 36c-5.4 0-9.9-3.4-11.6-8.1l-6.5 5C9.1 39.5 16 44 24 44z"/>
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.1 5.6l6.2 5.1C40.9 35.4 44 30.1 44 24c0-1.2-.1-2.4-.4-3.5z"/>
    </svg>
  )
}
