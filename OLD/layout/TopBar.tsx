import React from 'react';
import { LogOut, Moon, Sun } from 'lucide-react';
import { SessionUser } from '../../types';

interface TopBarProps {
  user: SessionUser;
  onLogout: () => void;
  isDark: boolean;
  onThemeToggle: () => void;
}

export default function TopBar({ user, onLogout, isDark, onThemeToggle }: TopBarProps) {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-2xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">🥚 Eggcountant</div>
        <div className="flex items-center gap-2">
          <button onClick={onThemeToggle} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={onLogout} className="flex items-center gap-2 px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-sm">
            <LogOut size={18} />
            <span className="hidden sm:inline">{user.nickname || user.email.split('@')[0]}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
