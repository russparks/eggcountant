import React from 'react';
import ComponentsShowcase from './components/mockup/ComponentsShowcase';
import AppShellPage from './components/mockup/AppShellPage';

type ViewMode = 'home' | 'components' | 'calendar' | 'flock' | 'sales' | 'blank';

export default function App() {
  const path = typeof window !== 'undefined' ? window.location.pathname : '/';
  const viewMode: ViewMode = path.includes('/components')
    ? 'components'
    : path.includes('/calendar')
      ? 'calendar'
      : path.includes('/flock')
        ? 'flock'
        : path.includes('/sales')
          ? 'sales'
          : path.includes('/blank')
            ? 'blank'
            : 'home';

  if (viewMode === 'components') {
    return <ComponentsShowcase />;
  }

  return <AppShellPage title={viewMode === 'home' ? 'Home' : viewMode === 'blank' ? 'Blank' : viewMode.charAt(0).toUpperCase() + viewMode.slice(1)} active={viewMode} />;
}
