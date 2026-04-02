import React, { useEffect, useState } from 'react';
import { Calendar, ChevronUp, Home, PoundSterling, Users } from 'lucide-react';

function Header({ hidden, settingsOpen, setSettingsOpen, closeBottomNav }: { hidden: boolean; settingsOpen: boolean; setSettingsOpen: React.Dispatch<React.SetStateAction<boolean>>; closeBottomNav: () => void }) {
  const settingsItems = [
    { label: 'Dark', icon: '◐' },
    { label: 'Account', icon: '/egg/media/icons/coop-icon.png', image: true },
    { label: 'Logout', icon: '/egg/media/icons/logout-icon.png', image: true },
  ];

  return (
    <>
      {settingsOpen ? (
        <button
          type="button"
          aria-label="Close settings menu"
          className="fixed inset-0 z-40 bg-[#2b124f]/18 backdrop-blur-[1.5px] animate-[fadeIn_180ms_ease-out]"
          onClick={() => setSettingsOpen(false)}
        />
      ) : null}
      <header className={`sticky top-0 z-50 border-b-[1.2px] border-slate-200 bg-white/95 backdrop-blur-sm transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <img
            src="/egg/media/eggcountant-logo.png"
            alt="Eggcountant"
            className="h-[3.6rem] w-auto sm:h-[4.3125rem]"
          />
          <div className="relative">
            {settingsOpen ? (
              <div className="absolute right-0 top-[calc(100%+1.2rem)] z-50 grid justify-items-end gap-[0.7rem] animate-[fadeSlideDown_220ms_ease-out]">
                {settingsItems.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    className="flex min-w-max items-center justify-end gap-3 rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/95 px-[1.5rem] py-[0.8rem] text-[1.56rem] font-semibold text-[#6f4bb8] shadow-[0_10px_24px_rgba(47,31,77,0.10)]"
                  >
                    <span className="text-right">{item.label}</span>
                    {item.image ? (
                      <img src={item.icon} alt="" aria-hidden="true" className={`${item.label === 'Logout' ? 'h-[1.58rem] w-[1.58rem]' : 'h-[1.98rem] w-[1.98rem]'} object-contain`} />
                    ) : (
                      <span aria-hidden="true" className="text-[1.98rem] leading-none text-[#6f4bb8]">{item.icon}</span>
                    )}
                  </button>
                ))}
              </div>
            ) : null}
            <button
              type="button"
              aria-label="Settings"
              className="flex h-[3.74rem] w-[3.74rem] items-center justify-center rounded-[var(--ui-radius)] bg-white transition hover:bg-slate-50"
              onClick={() => {
                closeBottomNav();
                setSettingsOpen((open) => !open);
              }}
            >
              <img
                src="/egg/media/icons/top-settings.png"
                alt=""
                className="h-[5.076rem] w-[5.076rem] object-contain"
              />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

function BottomNavMock({ menuOpen, setMenuOpen, closeSettingsNav }: { menuOpen: boolean; setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>; closeSettingsNav: () => void }) {
  const speedDialItems = [
    { label: 'Eggs', icon: '/egg/media/icons/1-egg.png' },
    { label: 'Chicks', icon: '/egg/media/icons/1-hatching.png' },
    { label: 'Feed', icon: '/egg/media/icons/feed-icon.png' },
    { label: 'Meds', icon: '/egg/media/icons/meds.png' },
    { label: 'Expense', icon: '/egg/media/icons/expense-icon.png' },
  ];

  return (
    <>
      {menuOpen ? (
        <button
          type="button"
          aria-label="Close add menu"
          className="fixed inset-0 z-40 bg-[#2b124f]/18 backdrop-blur-[1.5px] animate-[fadeIn_180ms_ease-out]"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}
      <div className="fixed inset-x-0 bottom-0 z-50 w-screen">
        <div className="relative h-[4.8rem] w-screen border-t-[1.2px] border-slate-200 bg-white/95 px-3 backdrop-blur-[2px]">
          <div className="absolute left-1/2 bottom-0 flex -translate-x-1/2 -translate-y-[4px] flex-col items-center gap-3">
            {menuOpen ? (
              <div className="mb-2 grid gap-[0.7rem] animate-[fadeSlideUp_220ms_ease-out]">
                {speedDialItems.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    className="flex items-center gap-3 rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/95 px-5 py-[0.8rem] text-[1.56rem] font-semibold text-[#6f4bb8] shadow-[0_10px_24px_rgba(47,31,77,0.10)]"
                  >
                    <img src={item.icon} alt="" aria-hidden="true" className="h-[1.98rem] w-[1.98rem] object-contain" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            ) : null}
            <button
              type="button"
              aria-label="Open add menu"
              className="relative flex h-[6.375rem] w-[6.375rem] items-center justify-center"
              onClick={() => {
                closeSettingsNav();
                setMenuOpen((open) => !open);
              }}
            >
              <img src="/egg/media/icons/big-egg-button.png" alt="Add" className="h-full w-full object-contain" />
            </button>
          </div>

          <div className="grid h-full grid-cols-[1fr_1fr_5.5rem_1fr_1fr] items-center gap-0 px-4 text-center">
            <a href="/egg/" className="flex h-full justify-self-start flex-col items-center justify-center text-[#c4b2f4]">
              <img src="/egg/media/icons/nav-home.png" alt="" className="h-[2.375rem] w-[2.375rem] object-contain" />
              <span className="hidden text-[0.8rem] font-bold uppercase tracking-wide">Home</span>
            </a>
            <a href="/egg/chicks" className="flex h-full justify-self-start flex-col items-center justify-center text-[#8b5cf6]">
              <img src="/egg/media/icons/nav-calendar.png" alt="" className="h-[2.375rem] w-[2.375rem] object-contain" />
              <span className="hidden text-[0.8rem] font-bold uppercase tracking-wide">Cal</span>
            </a>
            <div className="h-full" />
            <button className="flex h-full justify-self-end flex-col items-center justify-center text-[#c4b2f4]">
              <img src="/egg/media/icons/nav-flocks.png" alt="" className="h-[2.375rem] w-[2.375rem] object-contain" />
              <span className="hidden text-[0.8rem] font-bold uppercase tracking-wide">Flock</span>
            </button>
            <button className="flex h-full justify-self-end flex-col items-center justify-center text-[#c4b2f4]">
              <img src="/egg/media/icons/nav-sales.png" alt="" className="h-[2.375rem] w-[2.375rem] object-contain" />
              <span className="hidden text-[0.8rem] font-bold uppercase tracking-wide">Sale</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default function ChicksPage() {
  const [headerHidden, setHeaderHidden] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [bottomNavOpen, setBottomNavOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 24) {
        setHeaderHidden(false);
      } else if (currentScrollY > lastScrollY + 8) {
        setHeaderHidden(true);
      } else if (currentScrollY < lastScrollY - 8) {
        setHeaderHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f6f1ff] text-slate-900">
      <Header hidden={headerHidden} settingsOpen={settingsOpen} setSettingsOpen={setSettingsOpen} closeBottomNav={() => setBottomNavOpen(false)} />
      {headerHidden ? (
        <button
          type="button"
          aria-label="Show header and scroll to top"
          className="fixed right-4 top-4 z-[60] flex h-11 w-11 items-center justify-center rounded-[var(--ui-radius)] bg-[#6f4bb8] text-white shadow-[0_10px_24px_rgba(47,31,77,0.18)] transition hover:bg-[#603ca8]"
          onClick={() => {
            setHeaderHidden(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <ChevronUp size={20} />
        </button>
      ) : null}

      <div className="mx-auto max-w-6xl px-4 pt-5 sm:px-6 lg:px-8">
        <h2 data-component="PageTitleText" className="text-[1.6rem] font-black italic leading-none tracking-tight text-[#6f4bb8] sm:text-[1.88rem]">
          Chicks
        </h2>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-6 pb-40 sm:px-6 lg:px-8">
        <p className="text-[1rem] text-[#8c79bb]">Ready for the screenshot build.</p>
      </div>

      <BottomNavMock menuOpen={bottomNavOpen} setMenuOpen={setBottomNavOpen} closeSettingsNav={() => setSettingsOpen(false)} />
    </div>
  );
}
