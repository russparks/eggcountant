import React from 'react';
import ComponentsShowcase from './components/mockup/ComponentsShowcase';
import HomePage from './components/mockup/HomePage';
import CalendarPage from './components/mockup/CalendarPage';
import FlockPage from './components/mockup/FlockPage';
import SalesPage from './components/mockup/SalesPage';
import BlankPage from './components/mockup/BlankPage';

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

  if (viewMode === 'calendar') {
    return <CalendarPage />;
  }

  if (viewMode === 'flock') {
    return <FlockPage />;
  }

  if (viewMode === 'sales') {
    return <SalesPage />;
  }

  if (viewMode === 'blank') {
    return <BlankPage />;
  }

  return <HomePage />;
}
