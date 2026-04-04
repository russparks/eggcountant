import React, { useState } from 'react';
import { authApi } from '../../api';
import { SessionUser } from '../../types';

interface AuthShellProps {
  onAuthSuccess: (user: SessionUser) => void;
}

export default function AuthShell({ onAuthSuccess }: AuthShellProps) {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (mode === 'login') {
        const result = await authApi.login(email, password);
        onAuthSuccess(result.user);
      } else {
        const result = await authApi.register(email, password, nickname);
        onAuthSuccess(result.user);
      }
    } catch (err) {
      setError((err as Error).message || 'Auth failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 dark:from-slate-950 to-white dark:to-slate-900 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">🥚</div>
          <h1 className="text-4xl font-bold text-indigo-700 dark:text-indigo-300">Eggcountant</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">Track your flock</p>
        </div>

        <form onSubmit={handleSubmit} className="card p-8">
          <div className="mb-6 flex gap-4">
            <button
              type="button"
              onClick={() => {
                setMode('login');
                setError('');
              }}
              className={`flex-1 py-2 rounded-lg font-medium ${
                mode === 'login' ? 'bg-indigo-700 text-white' : 'bg-slate-100 dark:bg-slate-800'
              }`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('register');
                setError('');
              }}
              className={`flex-1 py-2 rounded-lg font-medium ${
                mode === 'register' ? 'bg-indigo-700 text-white' : 'bg-slate-100 dark:bg-slate-800'
              }`}
            >
              Register
            </button>
          </div>

          {error && <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-800 rounded-lg text-sm">{error}</div>}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-field"
                placeholder="you@example.com"
              />
            </div>

            {mode === 'register' && (
              <div>
                <label className="block text-sm font-medium mb-2">Nickname</label>
                <input
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  className="input-field"
                  placeholder="Your name"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input-field"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button type="submit" disabled={loading} className="btn-primary w-full mt-6">
            {loading ? 'Loading...' : mode === 'login' ? 'Login' : 'Register'}
          </button>
        </form>

        <p className="text-center text-sm text-slate-600 dark:text-slate-400 mt-6">
          {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
          <button
            type="button"
            onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
            className="text-indigo-700 dark:text-indigo-300 font-medium"
          >
            {mode === 'login' ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
}
