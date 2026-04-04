import React from 'react';
import { Home, Bird, ShoppingCart, Settings } from 'lucide-react';

type TabKey = 'home' | 'chicks' | 'sales' | 'settings';

interface BottomNavProps {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
}

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs: Array<{ key: TabKey; label: string; icon: React.ReactNode }> = [
    { key: 'home', label: 'Home', icon: <Home size={24} /> },
    { key: 'chicks', label: 'Chicks', icon: <Bird size={24} /> },
    { key: 'sales', label: 'Sales', icon: <ShoppingCart size={24} /> },
    { key: 'settings', label: 'Settings', icon: <Settings size={24} /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-around h-20">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => onTabChange(tab.key)}
              className={`flex flex-col items-center justify-center flex-1 gap-1 transition-colors ${
                activeTab === tab.key ? 'text-indigo-700 dark:text-indigo-300' : 'text-slate-500'
              }`}
            >
              {tab.icon}
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
