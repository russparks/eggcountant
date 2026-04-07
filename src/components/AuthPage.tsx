import { useState } from 'react';
import { authApi } from '../api';

export default function AuthPage() {
  const [mode, setMode] = useState<'login' | 'register'>('register');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const submit = async () => {
    setLoading(true);
    setError('');
    try {
      if (mode === 'register') {
        await authApi.register(email, password, nickname);
      } else {
        await authApi.login(email, password);
      }

      const session = await authApi.session();
      if (!session.user) {
        throw new Error('Signed in, but session was not persisted.');
      }

      window.location.href = '/egg/sales';
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,_#f6f0ff_0%,_#ffffff_58%,_#efe6ff_100%)] px-4 py-10 text-slate-900">
      <div className="mx-auto max-w-[28rem] rounded-[1.8rem] border border-[#d9c9fb] bg-white/90 p-5 shadow-[0_18px_40px_rgba(47,31,77,0.08)] sm:p-6">
        <img src="/egg/media/icons/henlife-logo-800.png" alt="Hen Life" className="mx-auto h-[4.5rem] w-auto object-contain" />

        <div className="mt-5 grid grid-cols-2 gap-2 rounded-[1rem] bg-[#f3edff] p-1">
          <button type="button" onClick={() => setMode('login')} className={`min-h-[44px] rounded-[0.9rem] text-[1rem] font-bold ${mode === 'login' ? 'bg-white text-[#6f4bb8] shadow-sm' : 'text-[#9c8abf]'}`}>
            Login
          </button>
          <button type="button" onClick={() => setMode('register')} className={`min-h-[44px] rounded-[0.9rem] text-[1rem] font-bold ${mode === 'register' ? 'bg-white text-[#6f4bb8] shadow-sm' : 'text-[#9c8abf]'}`}>
            Register
          </button>
        </div>

        <div className="mt-5 space-y-3">
          {mode === 'register' ? (
            <label className="block rounded-[1rem] border border-[#ddd1fa] bg-white px-4 py-3 shadow-sm">
              <div className="text-[0.78rem] font-bold uppercase tracking-[0.16em] text-[#9c8abf]">Nickname</div>
              <input value={nickname} onChange={(e) => setNickname(e.target.value)} className="mt-2 w-full bg-transparent text-[1.06rem] font-semibold text-[#6f4bb8] outline-none" placeholder="Russ" />
            </label>
          ) : null}

          <label className="block rounded-[1rem] border border-[#ddd1fa] bg-white px-4 py-3 shadow-sm">
            <div className="text-[0.78rem] font-bold uppercase tracking-[0.16em] text-[#9c8abf]">Email</div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 w-full bg-transparent text-[1.06rem] font-semibold text-[#6f4bb8] outline-none" placeholder="you@example.com" />
          </label>

          <label className="block rounded-[1rem] border border-[#ddd1fa] bg-white px-4 py-3 shadow-sm">
            <div className="text-[0.78rem] font-bold uppercase tracking-[0.16em] text-[#9c8abf]">Password</div>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-2 w-full bg-transparent text-[1.06rem] font-semibold text-[#6f4bb8] outline-none" placeholder="••••••••" />
          </label>
        </div>

        {error ? <div className="mt-4 rounded-[1rem] bg-[#fff1f1] px-4 py-3 text-[0.98rem] font-semibold text-[#c05454]">{error}</div> : null}

        <button type="button" onClick={submit} disabled={loading} className="mt-5 min-h-[52px] w-full rounded-[1.2rem] bg-[#6f4bb8] px-4 py-4 text-[1.12rem] font-black text-white shadow-[0_10px_24px_rgba(47,31,77,0.14)] disabled:opacity-50">
          {loading ? 'Working...' : mode === 'register' ? 'Create account' : 'Login'}
        </button>
      </div>
    </main>
  );
}
