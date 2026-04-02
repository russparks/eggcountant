import React, { useEffect, useState } from 'react';
import { authApi } from './api';
import { SessionUser } from './types';
import ComponentsShowcase from './components/mockup/ComponentsShowcase';
import ChicksPage from './components/mockup/ChicksPage';
import CalendarPage from './components/mockup/CalendarPage';
import BlankPage from './components/mockup/BlankPage';

type ViewMode = 'home' | 'components' | 'chicks' | 'calendar' | 'blank';

export default function App() {
  const [user, setUser] = useState<SessionUser | null>(null);
  const [authReady, setAuthReady] = useState(false);

  const path = typeof window !== 'undefined' ? window.location.pathname : '/';
  const viewMode: ViewMode = path.includes('/components')
    ? 'components'
    : path.includes('/calendar')
      ? 'calendar'
      : path.includes('/blank')
        ? 'blank'
        : path.includes('/chicks')
          ? 'chicks'
          : 'home';

  useEffect(() => {
    authApi
      .session()
      .then((data) => setUser(data.user))
      .catch(() => setUser(null))
      .finally(() => setAuthReady(true));
  }, []);

  if (viewMode === 'components') {
    return <ComponentsShowcase />;
  }

  if (viewMode === 'chicks') {
    return <ChicksPage />;
  }

  if (viewMode === 'calendar') {
    return <CalendarPage />;
  }

  if (viewMode === 'blank') {
    return <BlankPage />;
  }

  if (!authReady) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white text-slate-900">
        <div className="text-center">
          <div className="text-4xl font-bold text-indigo-700">Eggcountant</div>
          <p className="mt-2 text-slate-500">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <ComponentsShowcase />;
  }

  return <ComponentsShowcase />;
}
