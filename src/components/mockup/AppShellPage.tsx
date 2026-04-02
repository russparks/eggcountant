import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import navIconHome from '../../../media/nav-icons/lm-home.png';
import navIconCalendar from '../../../media/nav-icons/lm-calendar.png';
import navIconFlock from '../../../media/nav-icons/lm-flock.png';
import navIconSales from '../../../media/nav-icons/lm-sales.png';
import { SURFACE_GRADIENT } from '../../constants';

const surfaceGradient = SURFACE_GRADIENT;

type PageKey = 'home' | 'calendar' | 'flock' | 'sales' | 'blank';
type ModalKey = 'none' | 'account' | 'logout' | 'eggs' | 'chicks' | 'meds' | 'expense';

function Header({ hidden, settingsOpen, setSettingsOpen, closeBottomNav, openAccountModal, openLogoutConfirm }: { hidden: boolean; settingsOpen: boolean; setSettingsOpen: React.Dispatch<React.SetStateAction<boolean>>; closeBottomNav: () => void; openAccountModal: () => void; openLogoutConfirm: () => void }) {
  const settingsItems = [
    { label: 'Account', icon: '/egg/media/icons/coop-icon.png', image: true, action: 'account' },
    { label: 'Logout', icon: '/egg/media/icons/logout-icon.png', image: true, action: 'logout' },
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
                    onClick={() => {
                      if (item.action === 'account') {
                        setSettingsOpen(false);
                        openAccountModal();
                      }
                      if (item.action === 'logout') {
                        setSettingsOpen(false);
                        openLogoutConfirm();
                      }
                    }}
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

function BottomNav({ menuOpen, setMenuOpen, closeSettingsNav, openChicksModal, openEggsModal, openMedsModal, openExpenseModal, active }: { menuOpen: boolean; setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>; closeSettingsNav: () => void; openChicksModal: () => void; openEggsModal: () => void; openMedsModal: () => void; openExpenseModal: () => void; active: PageKey }) {
  const navIcons = {
    home: navIconHome,
    calendar: navIconCalendar,
    flock: navIconFlock,
    sales: navIconSales,
  };

  const speedDialItems = [
    { label: 'Eggs', icon: '/egg/media/icons/1-egg.png', action: 'eggs' },
    { label: 'Chicks', icon: '/egg/media/icons/1-hatching.png', action: 'chicks' },
    { label: 'Meds', icon: '/egg/media/icons/meds.png', action: 'meds' },
    { label: 'Expense', icon: '/egg/media/icons/expense-icon.png', action: 'expense' },
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
      <div className="fixed inset-x-0 bottom-0 z-40 pointer-events-none">
        <div className="h-[6.07rem] border-t-[1.2px] border-slate-200 bg-white/95 backdrop-blur-[2px]" />
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 overflow-visible">
        <div className="relative h-[6.07rem] overflow-visible">
          <div className="absolute left-1/2 bottom-[20%] z-[60] flex -translate-x-1/2 flex-col items-center gap-3">
            {menuOpen ? (
              <div className="mb-2 grid gap-[0.7rem] animate-[fadeSlideUp_220ms_ease-out]">
                {speedDialItems.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    className="flex items-center gap-3 rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/95 px-5 py-[0.8rem] text-[1.56rem] font-semibold text-[#6f4bb8] shadow-[0_10px_24px_rgba(47,31,77,0.10)]"
                    onClick={() => {
                      if (item.action === 'chicks') {
                        setMenuOpen(false);
                        openChicksModal();
                      }
                      if (item.action === 'eggs') {
                        setMenuOpen(false);
                        openEggsModal();
                      }
                      if (item.action === 'meds') {
                        setMenuOpen(false);
                        openMedsModal();
                      }
                      if (item.action === 'expense') {
                        setMenuOpen(false);
                        openExpenseModal();
                      }
                    }}
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
              <img src="/egg/media/icons/big-egg-button.png" alt="Add" className="block h-full w-full object-contain drop-shadow-[0_14px_24px_rgba(111,75,184,0.66)]" />
            </button>
          </div>

          <div className="relative z-10 mx-auto grid h-[6.07rem] max-w-[32rem] grid-cols-[1fr_1fr_6.25rem_1fr_1fr] items-center gap-0 px-3 text-center sm:px-4">
            <a href="/egg/" className={`flex h-full justify-self-start flex-col items-center justify-center ${active === 'home' ? 'text-[#6f4bb8]' : 'text-[#c4b2f4]'}`}>
              <img src={navIcons.home} alt="Home" className="h-[15vw] w-[15vw] max-h-[4.75rem] max-w-[4.75rem] min-h-[2.5rem] min-w-[2.5rem] object-contain" />
            </a>
            <a href="/egg/calendar" className={`flex h-full justify-self-start translate-x-[0.18rem] flex-col items-center justify-center ${active === 'calendar' ? 'text-[#6f4bb8]' : 'text-[#c4b2f4]'}`}>
              <img src={navIcons.calendar} alt="Calendar" className="h-[15vw] w-[15vw] max-h-[4.75rem] max-w-[4.75rem] min-h-[2.5rem] min-w-[2.5rem] object-contain" />
            </a>
            <div className="h-full min-w-[6.25rem]" />
            <a href="/egg/flock" className={`flex h-full justify-self-end -translate-x-[0.18rem] flex-col items-center justify-center ${active === 'flock' ? 'text-[#6f4bb8]' : 'text-[#c4b2f4]'}`}>
              <img src={navIcons.flock} alt="Flock" className="h-[15vw] w-[15vw] max-h-[4.75rem] max-w-[4.75rem] min-h-[2.5rem] min-w-[2.5rem] object-contain" />
            </a>
            <a href="/egg/sales" className={`flex h-full justify-self-end flex-col items-center justify-center ${active === 'sales' ? 'text-[#6f4bb8]' : 'text-[#c4b2f4]'}`}>
              <img src={navIcons.sales} alt="Sales" className="h-[15vw] w-[15vw] max-h-[4.75rem] max-w-[4.75rem] min-h-[2.5rem] min-w-[2.5rem] object-contain" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function AccountModal({ onClose }: { onClose: () => void }) {
  const [downloadSelections, setDownloadSelections] = useState<string[]>(['All Data']);
  const [downloadConfirmOpen, setDownloadConfirmOpen] = useState(false);
  const [resetPasswordConfirmOpen, setResetPasswordConfirmOpen] = useState(false);
  const [deleteAccountConfirmOpen, setDeleteAccountConfirmOpen] = useState(false);
  const [deleteAccountFinalConfirmOpen, setDeleteAccountFinalConfirmOpen] = useState(false);
  const [deletePassword, setDeletePassword] = useState('');

  return (
    <>
      <button
        type="button"
        aria-label="Close account panel"
        className="fixed inset-0 z-[68] bg-[#2b124f]/28 backdrop-blur-[2px] animate-[fadeIn_180ms_ease-out]"
        onClick={onClose}
      />
      <div className="fixed inset-x-0 top-0 z-[69] flex max-h-screen justify-center overflow-y-auto px-2 pt-2 pb-4 sm:px-4 sm:pt-4">
        <div className={`max-h-[calc(100vh-1rem)] w-full max-w-[36rem] overflow-y-auto rounded-[1.6rem] border border-[#d9c9fb] ${surfaceGradient} p-4 text-[#6f4bb8] shadow-[0_20px_50px_rgba(47,31,77,0.16)] animate-[fadeSlideDown_220ms_ease-out] sm:max-h-[calc(100vh-2rem)]`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-[2.05rem] font-black italic leading-none tracking-tight text-[#6f4bb8]">Account</div>
            </div>
            <button type="button" className="text-[2.2rem] leading-none text-[#c4b2f4]" onClick={onClose}>×</button>
          </div>

          <div className="mt-4 space-y-3">
            <div className="grid grid-cols-[5.2rem_1fr] items-center gap-3">
              <div className="text-[0.75rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Name</div>
              <div className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
                <div className="text-[1.05rem] font-semibold leading-none text-[#b2aacb]">Russ Sparks</div>
              </div>
            </div>

            <div className="grid grid-cols-[5.2rem_1fr] items-center gap-3">
              <div className="text-[0.75rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Email</div>
              <div className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
                <div className="text-[1.05rem] font-semibold leading-none text-[#b2aacb]">russ@example.com</div>
              </div>
            </div>

            <hr className="border-0 border-t border-[#e7ddfb]" />

            <div>
              <div className="mb-2 text-[0.75rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Download Data</div>
              <div className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
                <div className="mb-3 text-[0.82rem] leading-relaxed text-[#c4b2f4]">Select the items you'd like to download, or leave All Data selected and press the Download button.</div>
                <div className="grid grid-cols-3 gap-2">
                  {['Eggs', 'Chicks', 'Flocks', 'Hens', 'Coops', 'Meds', 'Expenses', 'Sales', 'All Data'].map((item) => {
                    const active = downloadSelections.includes(item);
                    return (
                      <button
                        key={item}
                        type="button"
                        className={`flex items-center justify-center rounded-[var(--ui-radius)] border px-2 py-2.5 text-center text-[0.84rem] font-semibold leading-tight shadow-sm ${active ? 'border-[#6f4bb8] bg-[#f3edff] text-[#6f4bb8]' : 'border-[#e7ddfb] bg-white text-[#c4b2f4]'}`}
                        onClick={() => {
                          if (item === 'All Data') {
                            setDownloadSelections((prev) => prev.includes('All Data') ? [] : ['All Data']);
                            return;
                          }
                          setDownloadSelections((prev) => {
                            const withoutAll = prev.filter((entry) => entry !== 'All Data');
                            return withoutAll.includes(item)
                              ? withoutAll.filter((entry) => entry !== item)
                              : [...withoutAll, item];
                          });
                        }}
                      >
                        <span>{item}</span>
                      </button>
                    );
                  })}
                </div>
                <button
                  type="button"
                  className="mt-3 w-full rounded-[var(--ui-radius)] bg-[#6f4bb8] px-4 py-2.5 text-[0.95rem] font-semibold text-white shadow-[0_10px_24px_rgba(47,31,77,0.14)]"
                  onClick={() => setDownloadConfirmOpen(true)}
                >
                  Download
                </button>
                <div className="mt-2 text-[0.75rem] leading-relaxed text-[#c4b2f4]">
                  Only you can see your data while it is stored on our servers, and sensitive account details are hashed securely. If you have any queries, please review our <a href="#" className="font-semibold text-[#6f4bb8] underline underline-offset-2">privacy policy</a>.
                </div>
              </div>
            </div>

            <hr className="border-0 border-t border-[#e7ddfb]" />

            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 text-center text-[0.92rem] font-semibold text-[#6f4bb8] shadow-sm"
                onClick={() => setResetPasswordConfirmOpen(true)}
              >
                Reset Password
              </button>
              <button
                type="button"
                className="rounded-[var(--ui-radius)] border border-[#f7c6d1] bg-[#fff6f8] px-4 py-3 text-center text-[0.92rem] font-semibold text-[#d14d6f] shadow-sm"
                onClick={() => setDeleteAccountConfirmOpen(true)}
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>

      {downloadConfirmOpen ? (
        <SimpleModal title="Data Download" description="A download link will be sent to your registered email address, please give it a few minutes." onClose={() => setDownloadConfirmOpen(false)} />
      ) : null}

      {resetPasswordConfirmOpen ? (
        <ConfirmModal title="Reset password?" description="A password reset link will be sent to your registered email address." confirmLabel="Send reset" onClose={() => setResetPasswordConfirmOpen(false)} onConfirm={() => setResetPasswordConfirmOpen(false)} />
      ) : null}

      {deleteAccountConfirmOpen ? (
        <ConfirmModal title="Delete account?" description="This will permanently remove the account and all associated data." confirmLabel="Delete" danger onClose={() => setDeleteAccountConfirmOpen(false)} onConfirm={() => { setDeleteAccountConfirmOpen(false); setDeleteAccountFinalConfirmOpen(true); }} />
      ) : null}

      {deleteAccountFinalConfirmOpen ? (
        <div className="fixed inset-0 z-[77] flex items-center justify-center bg-[#2b124f]/42 p-4 backdrop-blur-[3px]">
          <div className="w-full max-w-[24rem] rounded-[var(--ui-radius)] border border-[#f0bfd0] bg-white p-4 shadow-[0_20px_50px_rgba(47,31,77,0.18)]">
            <div className="text-[1.3rem] font-bold text-[#d14d6f]">Are you SURE you want to delete all data and your account?</div>
            <div className="mt-2 text-[0.98rem] font-semibold text-[#d14d6f]">This cannot be undone!</div>
            <div className="mt-4">
              <div className="mb-2 text-[0.75rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Password</div>
              <input
                type="password"
                value={deletePassword}
                onChange={(e) => setDeletePassword(e.target.value)}
                placeholder="Enter password"
                className="w-full rounded-[var(--ui-radius)] border border-[#f0bfd0] bg-[#fff8fa] px-4 py-3 text-[1rem] text-[#6f4bb8] outline-none"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button type="button" className="rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white px-4 py-3 text-[1rem] font-semibold text-[#6f4bb8] shadow-sm" onClick={() => { setDeleteAccountFinalConfirmOpen(false); setDeletePassword(''); }}>Cancel</button>
              <button type="button" className="rounded-[var(--ui-radius)] bg-[#d14d6f] px-4 py-3 text-[1rem] font-semibold text-white shadow-[0_10px_24px_rgba(47,31,77,0.14)]" onClick={() => { setDeleteAccountFinalConfirmOpen(false); setDeletePassword(''); }}>Yes, delete</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function ConfirmModal({ title, description, confirmLabel, onClose, onConfirm, danger = false }: { title: string; description: string; confirmLabel: string; onClose: () => void; onConfirm: () => void; danger?: boolean }) {
  return (
    <div className="fixed inset-0 z-[76] flex items-center justify-center bg-[#2b124f]/35 p-4 backdrop-blur-[2px]">
      <div className={`w-full max-w-[24rem] rounded-[var(--ui-radius)] border ${danger ? 'border-[#f0bfd0]' : 'border-[#d9c9fb]'} bg-white p-4 shadow-[0_20px_50px_rgba(47,31,77,0.16)]`}>
        <div className={`text-[1.3rem] font-bold ${danger ? 'text-[#d14d6f]' : 'text-[#6f4bb8]'}`}>{title}</div>
        <div className={`mt-2 text-[0.98rem] ${danger ? 'text-[#c07b92]' : 'text-[#c4b2f4]'}`}>{description}</div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <button type="button" className="rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white px-4 py-3 text-[1rem] font-semibold text-[#6f4bb8] shadow-sm" onClick={onClose}>Cancel</button>
          <button type="button" className={`rounded-[var(--ui-radius)] px-4 py-3 text-[1rem] font-semibold text-white shadow-[0_10px_24px_rgba(47,31,77,0.14)] ${danger ? 'bg-[#d14d6f]' : 'bg-[#6f4bb8]'}`} onClick={onConfirm}>{confirmLabel}</button>
        </div>
      </div>
    </div>
  );
}

function SimpleModal({ title, description, onClose }: { title: string; description: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[76] flex items-center justify-center bg-[#2b124f]/35 p-4 backdrop-blur-[2px]">
      <div className="w-full max-w-[24rem] rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white p-4 shadow-[0_20px_50px_rgba(47,31,77,0.16)]">
        <div className="text-[1.3rem] font-bold text-[#6f4bb8]">{title}</div>
        <div className="mt-2 text-[0.98rem] text-[#c4b2f4]">{description}</div>
        <div className="mt-4 flex justify-end">
          <button type="button" className="rounded-[var(--ui-radius)] bg-[#6f4bb8] px-5 py-3 text-[1rem] font-semibold text-white shadow-[0_10px_24px_rgba(47,31,77,0.14)]" onClick={onClose}>Okay</button>
        </div>
      </div>
    </div>
  );
}

function AddEggsModal({ onClose }: { onClose: () => void }) {
  const [eggCount, setEggCount] = useState(7);
  const [layDate, setLayDate] = useState('2026-03-31');
  const [bestBeforeDate, setBestBeforeDate] = useState('2026-04-20');
  const [selectedHen, setSelectedHen] = useState('Willow');
  const [notesOpen, setNotesOpen] = useState(false);
  const [noteAdded, setNoteAdded] = useState('');
  const [photoAdded, setPhotoAdded] = useState(false);
  const [photoMiniModalOpen, setPhotoMiniModalOpen] = useState(false);
  const [photoZoom, setPhotoZoom] = useState(1);
  const [photoOffset, setPhotoOffset] = useState(0);
  const [tempOpen, setTempOpen] = useState(false);
  const [selectedTemp, setSelectedTemp] = useState('20.0°C');

  useEffect(() => {
    const next = new Date(layDate);
    if (!Number.isNaN(next.getTime())) {
      next.setDate(next.getDate() + 20);
      setBestBeforeDate(next.toISOString().slice(0, 10));
    }
  }, [layDate]);

  return (
    <>
      <div className="fixed inset-0 z-[70] flex items-end justify-center bg-[#2b124f]/28 p-2 backdrop-blur-[2px] sm:items-center sm:p-4">
        <div className={`max-h-[92vh] w-full max-w-[36rem] overflow-y-auto rounded-[var(--ui-radius)] border border-[#d9c9fb] ${surfaceGradient} p-4 text-[#6f4bb8] shadow-[0_20px_50px_rgba(47,31,77,0.16)] animate-[fadeSlideUp_220ms_ease-out]`}>
          <div className="flex items-start justify-between gap-4">
            <div className="text-[2.05rem] font-black italic leading-none tracking-tight text-[#6f4bb8]">Add Eggs</div>
            <button type="button" className="text-[2.2rem] leading-none text-[#c4b2f4]" onClick={onClose}>×</button>
          </div>

          <div className="mt-4 space-y-4">
            <div className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-4 shadow-sm">
              <div className="flex items-center gap-3">
                <button type="button" className="h-11 w-11 shrink-0 rounded-[var(--ui-radius)] bg-[#f3edff] text-[1.4rem] font-bold text-[#6f4bb8]" onClick={() => setEggCount((v) => Math.max(1, v - 1))}>−</button>
                <input type="range" min="1" max="24" value={eggCount} onChange={(e) => setEggCount(Number(e.target.value))} className="h-2 flex-1 accent-[#6f4bb8]" />
                <button type="button" className="h-11 w-11 shrink-0 rounded-[var(--ui-radius)] bg-[#f3edff] text-[1.4rem] font-bold text-[#6f4bb8]" onClick={() => setEggCount((v) => Math.min(24, v + 1))}>+</button>
                <div className="min-w-[3rem] text-right text-[2.6rem] font-black leading-none text-[#6f4bb8]">{eggCount}</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <label className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
                <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Date laid</div>
                <input type="date" value={layDate} onChange={(e) => setLayDate(e.target.value)} className="mt-2 w-full bg-transparent text-[1.225rem] font-semibold text-[#6f4bb8] outline-none" />
              </label>
              <label className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
                <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Best before</div>
                <input type="date" value={bestBeforeDate} onChange={(e) => setBestBeforeDate(e.target.value)} className="mt-2 w-full bg-transparent text-[1.225rem] font-semibold text-[#6f4bb8] outline-none" />
              </label>
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-3">
              <label className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
                <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Egg creator</div>
                <select value={selectedHen} onChange={(e) => setSelectedHen(e.target.value)} className="mt-2 w-full bg-transparent text-[1rem] font-semibold text-[#6f4bb8] outline-none">
                  <option>Willow</option>
                  <option>Dotty</option>
                  <option>Mabel</option>
                  <option>Flock 1</option>
                  <option>Flock 2</option>
                </select>
              </label>
              <button type="button" className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 text-[1rem] font-semibold text-[#6f4bb8] shadow-sm" onClick={() => setNotesOpen((v) => !v)}>{noteAdded ? 'Edit notes' : 'Notes'}</button>
            </div>

            {noteAdded && !notesOpen ? (
              <div className="w-full rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 text-[0.98rem] text-[#c4b2f4] shadow-sm">{noteAdded}</div>
            ) : null}

            {notesOpen ? (
              <div className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
                <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Notes</div>
                <textarea value={noteAdded} onChange={(e) => setNoteAdded(e.target.value)} placeholder="Type notes..." className="mt-2 min-h-[6rem] w-full resize-none bg-transparent text-[1rem] text-[#6f4bb8] outline-none" />
                <div className="mt-3 flex justify-end gap-2">
                  <button type="button" className="rounded-[var(--ui-radius)] bg-[#f3edff] px-3 py-2 text-[0.95rem] font-semibold text-[#6f4bb8]" onClick={() => setNotesOpen(false)}>Done</button>
                </div>
              </div>
            ) : null}

            <div className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div className="text-[1rem] font-semibold text-[#6f4bb8]">{photoAdded ? 'Photo ready' : 'No photo added yet'}</div>
                <button type="button" className="rounded-[var(--ui-radius)] bg-[#f3edff] px-3 py-2 text-[0.95rem] font-semibold text-[#6f4bb8]" onClick={() => setPhotoMiniModalOpen(true)}>{photoAdded ? 'Edit photo' : 'Add photo'}</button>
              </div>
            </div>

            <div className="relative grid grid-cols-[0.3fr_1fr] gap-3">
              <div>
                <button type="button" className="flex h-full w-full items-center justify-between rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 text-left shadow-sm" onClick={() => setTempOpen((v) => !v)}>
                  <div>
                    <div className="text-[0.72rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Temp</div>
                    <div className="mt-1 text-[1rem] font-semibold text-[#6f4bb8]">{selectedTemp}</div>
                  </div>
                  <span className="text-[#c4b2f4]">{tempOpen ? '−' : '+'}</span>
                </button>
                {tempOpen ? (
                  <>
                    <button type="button" aria-label="Close temperature popup" className="fixed inset-0 z-[75] bg-[#2b124f]/18 backdrop-blur-[2px] animate-[fadeIn_180ms_ease-out]" onClick={() => setTempOpen(false)} />
                    <div className="absolute bottom-[calc(100%+0.6rem)] left-0 z-[76] grid gap-2 rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/95 p-2 shadow-[0_10px_24px_rgba(47,31,77,0.10)] animate-[fadeSlideUp_220ms_ease-out]">
                      {['16.0°C', '18.0°C', '20.0°C', '22.0°C', '24.0°C', '26.0°C', '28.0°C'].map((temp) => (
                        <button key={temp} type="button" className={`rounded-[var(--ui-radius)] px-3 py-2 text-[0.95rem] font-semibold shadow-sm ${selectedTemp === temp ? 'bg-[#6f4bb8] text-white' : 'bg-white text-[#6f4bb8]'}`} onClick={() => { setSelectedTemp(temp); setTempOpen(false); }}>{temp}</button>
                      ))}
                    </div>
                  </>
                ) : null}
              </div>
              <button type="button" className="w-full rounded-[var(--ui-radius)] bg-[#6f4bb8] px-5 py-4 text-[1.15rem] font-semibold text-white shadow-[0_10px_24px_rgba(47,31,77,0.14)]">Incubate!</button>
            </div>
          </div>
        </div>
      </div>

      {photoMiniModalOpen ? (
        <PhotoMiniModal title="Edit photo" circle onClose={() => setPhotoMiniModalOpen(false)} onSave={() => { setPhotoAdded(true); setPhotoMiniModalOpen(false); }} photoZoom={photoZoom} setPhotoZoom={setPhotoZoom} photoOffset={photoOffset} setPhotoOffset={setPhotoOffset} previewLabel="Photo preview" />
      ) : null}
    </>
  );
}

function AddChicksModal({ onClose }: { onClose: () => void }) {
  const [eggCount, setEggCount] = useState(7);
  const [layDate, setLayDate] = useState('2026-03-31');
  const [anticipatedDate, setAnticipatedDate] = useState('2026-04-20');
  const [selectedHen, setSelectedHen] = useState('Willow');
  const [notesOpen, setNotesOpen] = useState(false);
  const [noteAdded, setNoteAdded] = useState('');
  const [photoAdded, setPhotoAdded] = useState(false);
  const [photoMiniModalOpen, setPhotoMiniModalOpen] = useState(false);
  const [photoZoom, setPhotoZoom] = useState(1);
  const [photoOffset, setPhotoOffset] = useState(0);
  const [tempOpen, setTempOpen] = useState(false);
  const [selectedTemp, setSelectedTemp] = useState('20.0°C');

  useEffect(() => {
    const next = new Date(layDate);
    if (!Number.isNaN(next.getTime())) {
      next.setDate(next.getDate() + 20);
      setAnticipatedDate(next.toISOString().slice(0, 10));
    }
  }, [layDate]);

  return (
    <>
      <div className="fixed inset-0 z-[70] flex items-end justify-center bg-[#2b124f]/28 p-2 backdrop-blur-[2px] sm:items-center sm:p-4">
        <div className={`max-h-[92vh] w-full max-w-[36rem] overflow-y-auto rounded-[var(--ui-radius)] border border-[#d9c9fb] ${surfaceGradient} p-4 text-[#6f4bb8] shadow-[0_20px_50px_rgba(47,31,77,0.16)] animate-[fadeSlideUp_220ms_ease-out]`}>
          <div className="flex items-start justify-between gap-4">
            <div className="text-[2.05rem] font-black italic leading-none tracking-tight text-[#6f4bb8]">Add Chicks</div>
            <button type="button" className="text-[2.2rem] leading-none text-[#c4b2f4]" onClick={onClose}>×</button>
          </div>

          <div className="mt-4 space-y-4">
            <div className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-4 shadow-sm">
              <div className="flex items-center gap-3">
                <button type="button" className="h-11 w-11 shrink-0 rounded-[var(--ui-radius)] bg-[#f3edff] text-[1.4rem] font-bold text-[#6f4bb8]" onClick={() => setEggCount((v) => Math.max(1, v - 1))}>−</button>
                <input type="range" min="1" max="24" value={eggCount} onChange={(e) => setEggCount(Number(e.target.value))} className="h-2 flex-1 accent-[#6f4bb8]" />
                <button type="button" className="h-11 w-11 shrink-0 rounded-[var(--ui-radius)] bg-[#f3edff] text-[1.4rem] font-bold text-[#6f4bb8]" onClick={() => setEggCount((v) => Math.min(24, v + 1))}>+</button>
                <div className="min-w-[3rem] text-right text-[2.6rem] font-black leading-none text-[#6f4bb8]">{eggCount}</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <label className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
                <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Date laid</div>
                <input type="date" value={layDate} onChange={(e) => setLayDate(e.target.value)} className="mt-2 w-full bg-transparent text-[1.225rem] font-semibold text-[#6f4bb8] outline-none" />
              </label>
              <label className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
                <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Hatch due</div>
                <input type="date" value={anticipatedDate} onChange={(e) => setAnticipatedDate(e.target.value)} className="mt-2 w-full bg-transparent text-[1.225rem] font-semibold text-[#6f4bb8] outline-none" />
              </label>
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-3">
              <label className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
                <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Egg creator</div>
                <select value={selectedHen} onChange={(e) => setSelectedHen(e.target.value)} className="mt-2 w-full bg-transparent text-[1rem] font-semibold text-[#6f4bb8] outline-none">
                  <option>Willow</option>
                  <option>Dotty</option>
                  <option>Mabel</option>
                  <option>Flock 1</option>
                  <option>Flock 2</option>
                </select>
              </label>
              <button type="button" className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 text-[1rem] font-semibold text-[#6f4bb8] shadow-sm" onClick={() => setNotesOpen((v) => !v)}>{noteAdded ? 'Edit notes' : 'Notes'}</button>
            </div>

            {noteAdded && !notesOpen ? (
              <div className="w-full rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 text-[0.98rem] text-[#c4b2f4] shadow-sm">{noteAdded}</div>
            ) : null}

            {notesOpen ? (
              <div className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
                <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Notes</div>
                <textarea value={noteAdded} onChange={(e) => setNoteAdded(e.target.value)} placeholder="Type notes..." className="mt-2 min-h-[6rem] w-full resize-none bg-transparent text-[1rem] text-[#6f4bb8] outline-none" />
                <div className="mt-3 flex justify-end gap-2">
                  <button type="button" className="rounded-[var(--ui-radius)] bg-[#f3edff] px-3 py-2 text-[0.95rem] font-semibold text-[#6f4bb8]" onClick={() => setNotesOpen(false)}>Done</button>
                </div>
              </div>
            ) : null}

            <div className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div className="text-[1rem] font-semibold text-[#6f4bb8]">{photoAdded ? 'Photo ready' : 'No photo added yet'}</div>
                <button type="button" className="rounded-[var(--ui-radius)] bg-[#f3edff] px-3 py-2 text-[0.95rem] font-semibold text-[#6f4bb8]" onClick={() => setPhotoMiniModalOpen(true)}>{photoAdded ? 'Edit photo' : 'Add photo'}</button>
              </div>
            </div>

            <div className="relative grid grid-cols-[0.3fr_1fr] gap-3">
              <div>
                <button type="button" className="flex h-full w-full items-center justify-between rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 text-left shadow-sm" onClick={() => setTempOpen((v) => !v)}>
                  <div>
                    <div className="text-[0.72rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Temp</div>
                    <div className="mt-1 text-[1rem] font-semibold text-[#6f4bb8]">{selectedTemp}</div>
                  </div>
                  <span className="text-[#c4b2f4]">{tempOpen ? '−' : '+'}</span>
                </button>
                {tempOpen ? (
                  <>
                    <button type="button" aria-label="Close temperature popup" className="fixed inset-0 z-[75] bg-[#2b124f]/18 backdrop-blur-[2px] animate-[fadeIn_180ms_ease-out]" onClick={() => setTempOpen(false)} />
                    <div className="absolute bottom-[calc(100%+0.6rem)] left-0 z-[76] grid gap-2 rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/95 p-2 shadow-[0_10px_24px_rgba(47,31,77,0.10)] animate-[fadeSlideUp_220ms_ease-out]">
                      {['16.0°C', '18.0°C', '20.0°C', '22.0°C', '24.0°C', '26.0°C', '28.0°C'].map((temp) => (
                        <button key={temp} type="button" className={`rounded-[var(--ui-radius)] px-3 py-2 text-[0.95rem] font-semibold shadow-sm ${selectedTemp === temp ? 'bg-[#6f4bb8] text-white' : 'bg-white text-[#6f4bb8]'}`} onClick={() => { setSelectedTemp(temp); setTempOpen(false); }}>{temp}</button>
                      ))}
                    </div>
                  </>
                ) : null}
              </div>
              <button type="button" className="w-full rounded-[var(--ui-radius)] bg-[#6f4bb8] px-5 py-4 text-[1.15rem] font-semibold text-white shadow-[0_10px_24px_rgba(47,31,77,0.14)]">Incubate!</button>
            </div>
          </div>
        </div>
      </div>

      {photoMiniModalOpen ? (
        <PhotoMiniModal title="Edit photo" circle onClose={() => setPhotoMiniModalOpen(false)} onSave={() => { setPhotoAdded(true); setPhotoMiniModalOpen(false); }} photoZoom={photoZoom} setPhotoZoom={setPhotoZoom} photoOffset={photoOffset} setPhotoOffset={setPhotoOffset} previewLabel="Photo preview" />
      ) : null}
    </>
  );
}

function AddMedsModal({ onClose }: { onClose: () => void }) {
  const [selectedMed, setSelectedMed] = useState('Wormer');
  const [otherMedName, setOtherMedName] = useState('');
  const [medDate, setMedDate] = useState('2026-04-01');
  const [medReminderDate, setMedReminderDate] = useState('2026-04-01');
  const [medReminderTouched, setMedReminderTouched] = useState(false);
  const [medRecipientsOpen, setMedRecipientsOpen] = useState(false);
  const [medRecipients, setMedRecipients] = useState<string[]>(['Willow']);
  const [medPhotoAdded, setMedPhotoAdded] = useState(false);
  const [medPhotoMiniModalOpen, setMedPhotoMiniModalOpen] = useState(false);
  const [medNotesOpen, setMedNotesOpen] = useState(false);
  const [medNotes, setMedNotes] = useState('');
  const [photoZoom, setPhotoZoom] = useState(1);
  const [photoOffset, setPhotoOffset] = useState(0);

  return (
    <>
      <div className="fixed inset-0 z-[70] flex items-end justify-center bg-[#2b124f]/28 p-2 backdrop-blur-[2px] sm:items-center sm:p-4">
        <div className={`max-h-[92vh] w-full max-w-[36rem] overflow-y-auto rounded-[var(--ui-radius)] border border-[#d9c9fb] ${surfaceGradient} p-4 text-[#6f4bb8] shadow-[0_20px_50px_rgba(47,31,77,0.16)] animate-[fadeSlideUp_220ms_ease-out]`}>
          <div className="flex items-start justify-between gap-4">
            <div className="text-[2.05rem] font-black italic leading-none tracking-tight text-[#6f4bb8]">Add Meds</div>
            <button type="button" className="text-[2.2rem] leading-none text-[#c4b2f4]" onClick={onClose}>×</button>
          </div>

          <div className="mt-4 space-y-4">
            <div className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
              <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Med given</div>
              <select value={selectedMed} onChange={(e) => setSelectedMed(e.target.value)} className="mt-2 w-full bg-transparent text-[1.2rem] font-semibold text-[#6f4bb8] outline-none">
                <option>Wormer</option>
                <option>Scaly Leg</option>
                <option>Lice Powder</option>
                <option>Anti-Peck</option>
                <option>Wound Spray</option>
                <option>Other</option>
              </select>
              {selectedMed === 'Other' ? (
                <input type="text" value={otherMedName} onChange={(e) => setOtherMedName(e.target.value)} placeholder="Enter medicine name" className="mt-3 w-full rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-[#f8f5ff] px-3 py-3 text-[0.98rem] text-[#6f4bb8] outline-none" />
              ) : null}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <label className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
                <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Date</div>
                <input type="date" value={medDate} onChange={(e) => setMedDate(e.target.value)} className="mt-2 w-full bg-transparent text-[1.225rem] font-semibold text-[#6f4bb8] outline-none" />
              </label>
              <label className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
                <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Add reminder</div>
                <input type="date" value={medReminderDate} onChange={(e) => { setMedReminderDate(e.target.value); setMedReminderTouched(true); }} className={`mt-2 w-full bg-transparent text-[1.225rem] font-semibold outline-none ${medReminderTouched ? 'text-[#6f4bb8]' : 'text-[#d7d0fb]'}`} />
              </label>
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-3 items-stretch">
              <div className="relative rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">GIVEN TO</div>
                    <div className="mt-2 text-[1rem] font-semibold text-[#6f4bb8]">{medRecipients.length ? medRecipients.join(', ') : 'Choose hen or flock'}</div>
                  </div>
                  <button type="button" className="rounded-[var(--ui-radius)] bg-[#f3edff] px-3 py-2 text-[1.1rem] font-semibold text-[#6f4bb8]" onClick={() => setMedRecipientsOpen((v) => !v)}>
                    {medRecipientsOpen ? 'Done' : '+'}
                  </button>
                </div>
                {medRecipientsOpen ? (
                  <div className="mt-3 grid gap-2">
                    {['Willow', 'Dotty', 'Mabel', 'Flock 1', 'Flock 2', 'Entire flock'].map((recipient) => {
                      const active = medRecipients.includes(recipient);
                      return (
                        <button
                          key={recipient}
                          type="button"
                          className={`flex items-center justify-between rounded-[var(--ui-radius)] border px-3 py-3 text-left text-[0.98rem] font-semibold shadow-sm ${active ? 'border-[#6f4bb8] bg-[#f3edff] text-[#6f4bb8]' : 'border-[#e7ddfb] bg-white text-[#c4b2f4]'}`}
                          onClick={() => setMedRecipients((prev) => prev.includes(recipient) ? prev.filter((item) => item !== recipient) : [...prev, recipient])}
                        >
                          <span>{recipient}</span>
                          <span>{active ? '✓' : '+'}</span>
                        </button>
                      );
                    })}
                  </div>
                ) : null}
              </div>
              <button type="button" className="h-full rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 text-[1rem] font-semibold text-[#6f4bb8] shadow-sm" onClick={() => setMedNotesOpen((v) => !v)}>{medNotes ? 'Edit notes' : 'Notes'}</button>
            </div>

            {medNotes || medNotesOpen ? (
              <div className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
                <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Notes</div>
                <textarea value={medNotes} onChange={(e) => setMedNotes(e.target.value)} placeholder="Type notes..." className="mt-2 min-h-[6rem] w-full resize-none bg-transparent text-[1rem] text-[#6f4bb8] outline-none" />
              </div>
            ) : null}

            <div className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div className="text-[1rem] font-semibold text-[#6f4bb8]">{medPhotoAdded ? 'Photo ready' : 'No photo added yet'}</div>
                <button type="button" className="rounded-[var(--ui-radius)] bg-[#f3edff] px-4 py-3 text-[0.95rem] font-semibold text-[#6f4bb8]" onClick={() => setMedPhotoMiniModalOpen(true)}>{medPhotoAdded ? 'Edit photo' : 'Add photo'}</button>
              </div>
              {medPhotoAdded ? <div className="mt-3 h-[6rem] w-full rounded-[1rem] border border-[#e7ddfb] bg-[#f3edff]" /> : null}
            </div>

            <button type="button" className="w-full rounded-[var(--ui-radius)] bg-[#6f4bb8] px-5 py-4 text-[1.05rem] font-semibold text-white shadow-[0_10px_24px_rgba(47,31,77,0.14)]">Log meds</button>
          </div>
        </div>
      </div>

      {medPhotoMiniModalOpen ? (
        <PhotoMiniModal title="Photograph med" onClose={() => setMedPhotoMiniModalOpen(false)} onSave={() => { setMedPhotoAdded(true); setMedPhotoMiniModalOpen(false); }} photoZoom={photoZoom} setPhotoZoom={setPhotoZoom} photoOffset={photoOffset} setPhotoOffset={setPhotoOffset} previewLabel="Med photo preview" />
      ) : null}
    </>
  );
}

function AddExpenseModal({ onClose }: { onClose: () => void }) {
  const [expenseItem, setExpenseItem] = useState('');
  const [expenseDate, setExpenseDate] = useState('2026-04-01');
  const [expenseDestination, setExpenseDestination] = useState('Coop');
  const [expenseCostDigits, setExpenseCostDigits] = useState('');
  const [expenseCostModalOpen, setExpenseCostModalOpen] = useState(false);
  const [expenseItemFocused, setExpenseItemFocused] = useState(false);
  const [expenseTags, setExpenseTags] = useState(['Layer feed', 'Bedding', 'Coop repair', 'Misc']);
  const [expensePhotoAdded, setExpensePhotoAdded] = useState(false);
  const [expensePhotoMiniModalOpen, setExpensePhotoMiniModalOpen] = useState(false);
  const [photoZoom, setPhotoZoom] = useState(1);
  const [photoOffset, setPhotoOffset] = useState(0);

  const formattedCost = expenseCostDigits ? `${expenseCostDigits.padStart(3, '0').slice(0, -2) || '0'}.${expenseCostDigits.padStart(2, '0').slice(-2)}` : '0.00';

  return (
    <>
      <div className="fixed inset-0 z-[70] flex items-end justify-center bg-[#2b124f]/28 p-2 backdrop-blur-[2px] sm:items-center sm:p-4">
        <div className={`max-h-[92vh] w-full max-w-[36rem] overflow-y-auto rounded-[var(--ui-radius)] border border-[#d9c9fb] ${surfaceGradient} p-4 text-[#6f4bb8] shadow-[0_20px_50px_rgba(47,31,77,0.16)] animate-[fadeSlideUp_220ms_ease-out]`}>
          <div className="flex items-start justify-between gap-4">
            <div className="text-[2.05rem] font-black italic leading-none tracking-tight text-[#6f4bb8]">Add an Expense</div>
            <button type="button" className="text-[2.2rem] leading-none text-[#c4b2f4]" onClick={onClose}>×</button>
          </div>

          <div className="mt-4 space-y-4">
            <div className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
              <div className="relative pr-8 pb-3">
                <textarea value={expenseItem} onFocus={() => setExpenseItemFocused(true)} onBlur={() => setExpenseItemFocused(false)} onChange={(e) => setExpenseItem(e.target.value)} placeholder={expenseItemFocused ? '' : 'What are you buying?'} rows={2} className="w-full resize-none bg-transparent text-[1.1rem] font-normal leading-snug text-[#6f4bb8] outline-none placeholder:font-normal placeholder:text-[#b09bdb]" />
                <button
                  type="button"
                  aria-label="Add current text as regular expense"
                  className="absolute right-0 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-[#e7ddfb] bg-[#f8f5ff] text-[0.9rem] font-semibold text-[#c4b2f4]"
                  onClick={() => {
                    const trimmed = expenseItem.trim().replace(/\s*&\s*/g, ' & ');
                    if (!trimmed || trimmed === '&') return;
                    setExpenseTags((prev) => prev.includes(trimmed) ? prev : [...prev, trimmed]);
                  }}
                >
                  +
                </button>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <button type="button" className="rounded-full border border-[#e7ddfb] bg-[#f8f5ff] px-3 py-1.5 text-[0.82rem] font-semibold text-[#c4b2f4]" onClick={() => setExpenseItem((prev) => prev ? `${prev}${prev.endsWith(' ') ? '' : ' '}& ` : '& ')}>&</button>
                {expenseTags.filter((item) => !expenseItem.includes(item)).map((item) => (
                  <button key={item} type="button" className="rounded-full border border-[#e7ddfb] bg-[#f8f5ff] px-3 py-1.5 text-[0.82rem] font-semibold text-[#c4b2f4]" onClick={() => setExpenseItem((prev) => prev ? `${prev}${prev.endsWith(' ') ? '' : ' '}${item} ` : `${item} `)}>{item}</button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <label className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
                <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Where for?</div>
                <select value={expenseDestination} onChange={(e) => setExpenseDestination(e.target.value)} className="mt-2 w-full bg-transparent text-[1rem] font-semibold text-[#6f4bb8] outline-none">
                  <option>Hen</option>
                  <option>Flock</option>
                  <option>Coop</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
                <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Date</div>
                <input type="date" value={expenseDate} onChange={(e) => setExpenseDate(e.target.value)} className="mt-2 w-full bg-transparent text-[1.225rem] font-semibold text-[#6f4bb8] outline-none" />
              </label>
            </div>

            <div className="grid grid-cols-[0.7fr_1fr] gap-3 items-start">
              <button type="button" className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 text-left shadow-sm" onClick={() => setExpenseCostModalOpen(true)}>
                <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Cost</div>
                <div className="mt-2 text-[1.2rem] font-semibold text-[#6f4bb8]">£{formattedCost}</div>
              </button>
              <div className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-[1rem] font-semibold text-[#6f4bb8]">{expensePhotoAdded ? 'Photo ready' : 'None added'}</div>
                  <button type="button" className="rounded-[var(--ui-radius)] bg-[#f3edff] px-4 py-3 text-[0.95rem] font-semibold text-[#6f4bb8]" onClick={() => setExpensePhotoMiniModalOpen(true)}>{expensePhotoAdded ? 'Edit photo' : 'Add photo'}</button>
                </div>
                {expensePhotoAdded ? <div className="mt-3 h-[6rem] w-full rounded-[1rem] border border-[#e7ddfb] bg-[#f3edff]" /> : null}
              </div>
            </div>

            <button type="button" className="w-full rounded-[var(--ui-radius)] bg-[#6f4bb8] px-5 py-4 text-[1.05rem] font-semibold text-white shadow-[0_10px_24px_rgba(47,31,77,0.14)]">Save</button>
          </div>
        </div>
      </div>

      {expenseCostModalOpen ? (
        <div className="fixed inset-0 z-[75] flex items-center justify-center bg-[#2b124f]/35 p-4 backdrop-blur-[2px]">
          <div className="w-full max-w-[22rem] rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white p-4 shadow-[0_20px_50px_rgba(47,31,77,0.16)]">
            <div className="flex items-start justify-between gap-4">
              <div className="text-[1.25rem] font-bold text-[#6f4bb8]">Enter cost</div>
              <button type="button" className="text-[2rem] leading-none text-[#c4b2f4]" onClick={() => setExpenseCostModalOpen(false)}>×</button>
            </div>
            <div className="mt-4 rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-[#f8f5ff] px-4 py-4 text-center text-[2rem] font-semibold text-[#6f4bb8]">
              £{formattedCost}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {['1','2','3','4','5','6','7','8','9','⌫','0','Done'].map((key) => (
                <button
                  key={key}
                  type="button"
                  className={`rounded-[var(--ui-radius)] px-4 py-4 text-[1.1rem] font-semibold shadow-sm ${key === 'Done' ? 'bg-[#6f4bb8] text-white' : 'border border-[#d9c9fb] bg-white text-[#6f4bb8]'}`}
                  onClick={() => {
                    if (key === 'Done') {
                      setExpenseCostModalOpen(false);
                      return;
                    }
                    if (key === '⌫') {
                      setExpenseCostDigits((prev) => prev.slice(0, -1));
                      return;
                    }
                    setExpenseCostDigits((prev) => `${prev}${key}`.replace(/^0+(?=\d)/, '').slice(0, 6));
                  }}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {expensePhotoMiniModalOpen ? (
        <PhotoMiniModal title="Photograph expense" onClose={() => setExpensePhotoMiniModalOpen(false)} onSave={() => { setExpensePhotoAdded(true); setExpensePhotoMiniModalOpen(false); }} photoZoom={photoZoom} setPhotoZoom={setPhotoZoom} photoOffset={photoOffset} setPhotoOffset={setPhotoOffset} previewLabel="Expense photo preview" />
      ) : null}
    </>
  );
}

function PhotoMiniModal({ title, onClose, onSave, photoZoom, setPhotoZoom, photoOffset, setPhotoOffset, previewLabel, circle = false }: { title: string; onClose: () => void; onSave: () => void; photoZoom: number; setPhotoZoom: React.Dispatch<React.SetStateAction<number>>; photoOffset: number; setPhotoOffset: React.Dispatch<React.SetStateAction<number>>; previewLabel: string; circle?: boolean }) {
  return (
    <div className="fixed inset-0 z-[75] flex items-center justify-center bg-[#2b124f]/35 p-4 backdrop-blur-[2px]">
      <div className="w-full max-w-[24rem] rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white p-4 shadow-[0_20px_50px_rgba(47,31,77,0.16)]">
        <div className="flex items-start justify-between gap-4">
          <div className="text-[1.25rem] font-bold text-[#6f4bb8]">{title}</div>
          <button type="button" className="text-[2rem] leading-none text-[#c4b2f4]" onClick={onClose}>×</button>
        </div>
        <div className="mt-4 flex justify-center">
          <div className={`relative overflow-hidden border-2 border-[#e7ddfb] bg-[#f3edff] ${circle ? 'h-[11rem] w-[11rem] rounded-full' : 'h-[11rem] w-full max-w-[14rem] rounded-[1rem]'}`}>
            <div className="absolute inset-0 flex items-center justify-center text-center text-[0.95rem] font-semibold text-[#c4b2f4]" style={{ transform: `translateX(${photoOffset}px) scale(${photoZoom})` }}>
              {previewLabel}
            </div>
          </div>
        </div>
        <div className="mt-4 space-y-3">
          <div>
            <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Zoom</div>
            <input type="range" min="1" max="2" step="0.1" value={photoZoom} onChange={(e) => setPhotoZoom(Number(e.target.value))} className="mt-2 h-2 w-full accent-[#6f4bb8]" />
          </div>
          <div>
            <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Pan</div>
            <input type="range" min="-30" max="30" step="1" value={photoOffset} onChange={(e) => setPhotoOffset(Number(e.target.value))} className="mt-2 h-2 w-full accent-[#6f4bb8]" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button type="button" className="rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white px-4 py-3 text-[1rem] font-semibold text-[#6f4bb8] shadow-sm">Upload</button>
            <button type="button" className="rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white px-4 py-3 text-[1rem] font-semibold text-[#6f4bb8] shadow-sm">Take photo</button>
          </div>
          <button type="button" className="w-full rounded-[var(--ui-radius)] bg-[#6f4bb8] px-5 py-3 text-[1rem] font-semibold text-white shadow-[0_10px_24px_rgba(47,31,77,0.14)]" onClick={onSave}>Save photo</button>
        </div>
      </div>
    </div>
  );
}

function HomeContent() {
  return (
    <div className="w-full space-y-5">
      <h1 className="text-[1.6rem] font-black italic leading-none tracking-tight text-[#6f4bb8] sm:text-[1.88rem]">
        This week, <span className="text-[#6f4bb8]">in a <span><span className="opacity-50 line-through">Nut</span>shell...</span></span>
      </h1>

      <section className={`overflow-hidden rounded-[var(--ui-radius)] border border-[#d9c9fb] ${surfaceGradient} p-3 text-[#6f4bb8] shadow-[0_10px_30px_rgba(47,31,77,0.08)]`}>
        <div className="relative min-h-[120px]">
          <div className="float-right ml-2 mb-2 rounded-[var(--ui-radius)] bg-white/90 px-4 py-3 text-right shadow-sm backdrop-blur-sm">
            <div className="mt-1 flex items-center gap-2 text-lg font-semibold text-[#6f4bb8]">+12%</div>
          </div>
          <h2 className="text-[1.6rem] font-normal leading-tight text-[#6f4bb8]">Your girls laid <span className="font-bold">94</span> eggs and earned you <span className="font-bold">£13.25</span> in profit!</h2>
          <p className="mt-2 max-w-[42rem] text-sm text-[#c4b2f4]">Cheeky little bump from last week, Willow continues to show egg-stra effort...</p>
          <div className="clear-both" />
        </div>
      </section>

      <section className={`rounded-[var(--ui-radius)] border border-[#d9c9fb] ${surfaceGradient} p-3 shadow-[0_10px_30px_rgba(47,31,77,0.08)]`}>
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <div className="text-[1.69rem] font-bold text-[#6f4bb8]">+£13.25</div>
            <div className="mt-px text-[0.9rem] uppercase text-[#9E9E9E]">Sales</div>
          </div>
          <div className="h-12 w-px shrink-0 bg-slate-200" />
          <div className="flex-1 text-right">
            <div className="text-[1.69rem] font-bold text-[#6f4bb8]">-£6.80</div>
            <div className="mt-px text-[0.9rem] uppercase text-[#9E9E9E]">Expenses</div>
          </div>
        </div>
        <div className="mt-5 rounded-[var(--ui-radius)] bg-white/80 px-4 py-4 shadow-sm border border-white/60">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="m-0 text-[0.8rem] uppercase text-emerald-500">Cluck Statement</div>
              <div className="mt-1 text-[2.25rem] font-bold text-emerald-500">+£6.45</div>
            </div>
            <img src="/egg/media/icons/sales-green.png" alt="" className="h-21 w-auto object-contain" />
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-4">
        <div className={`rounded-[var(--ui-radius)] border border-[#d9c9fb] ${surfaceGradient} p-3 shadow-[0_10px_30px_rgba(47,31,77,0.08)]`}>
          <div className="text-[1rem] uppercase text-[#6f4bb8]">Yokes Broke</div>
          <div className="mt-1.5 flex items-center justify-between">
            <img src="/egg/media/icons/1-fried.png" alt="" className="h-[3.4rem] w-auto max-w-[34%] object-contain" />
            <div className="text-[2.72rem] font-bold text-[#6f4bb8]">12</div>
          </div>
        </div>
        <div className={`rounded-[var(--ui-radius)] border border-[#d9c9fb] ${surfaceGradient} p-3 shadow-[0_10px_30px_rgba(47,31,77,0.08)]`}>
          <div className="text-right text-[1rem] uppercase text-[#6f4bb8]">Buns Cooked</div>
          <div className="mt-1.5 flex items-center justify-between">
            <div className="text-[2.72rem] font-bold text-[#6f4bb8]">6</div>
            <img src="/egg/media/icons/1-hatching.png" alt="" className="h-[3.4rem] w-auto max-w-[34%] object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PlaceholderContent({ title }: { title: string }) {
  return (
    <div className="w-full">
      <h1 className="text-[2.55rem] font-black italic leading-[0.94] tracking-tight text-[#6f4bb8] sm:text-[2.8rem]">
        {title}
      </h1>
    </div>
  );
}

export default function AppShellPage({ title, active }: { title: string; active: PageKey }) {
  const [headerHidden, setHeaderHidden] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [bottomNavOpen, setBottomNavOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<ModalKey>('none');

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

  useEffect(() => {
    const anyModalOpen = activeModal !== 'none';
    if (!anyModalOpen) return;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    const previousTouchAction = body.style.touchAction;

    body.style.overflow = 'hidden';
    body.style.touchAction = 'none';

    return () => {
      body.style.overflow = previousOverflow;
      body.style.touchAction = previousTouchAction;
    };
  }, [activeModal]);

  return (
    <div className="min-h-screen bg-[#f6f1ff] text-slate-900">
      <Header hidden={headerHidden} settingsOpen={settingsOpen} setSettingsOpen={setSettingsOpen} closeBottomNav={() => setBottomNavOpen(false)} openAccountModal={() => setActiveModal('account')} openLogoutConfirm={() => setActiveModal('logout')} />
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

      {activeModal === 'account' ? <AccountModal onClose={() => setActiveModal('none')} /> : null}
      {activeModal === 'logout' ? <ConfirmModal title="Log out?" description="Are you sure you want to log out of your account?" confirmLabel="Log out" onClose={() => setActiveModal('none')} onConfirm={() => setActiveModal('none')} /> : null}
      {activeModal === 'eggs' ? <AddEggsModal onClose={() => setActiveModal('none')} /> : null}
      {activeModal === 'chicks' ? <AddChicksModal onClose={() => setActiveModal('none')} /> : null}
      {activeModal === 'meds' ? <AddMedsModal onClose={() => setActiveModal('none')} /> : null}
      {activeModal === 'expense' ? <AddExpenseModal onClose={() => setActiveModal('none')} /> : null}

      <main className="mx-auto flex min-h-[calc(100vh-11rem)] max-w-6xl items-start px-4 pt-5 pb-40 sm:px-6 lg:px-8">
        {active === 'home' ? <HomeContent /> : <PlaceholderContent title={title} />}
      </main>

      <BottomNav active={active} menuOpen={bottomNavOpen} setMenuOpen={setBottomNavOpen} closeSettingsNav={() => setSettingsOpen(false)} openChicksModal={() => setActiveModal('chicks')} openEggsModal={() => setActiveModal('eggs')} openMedsModal={() => setActiveModal('meds')} openExpenseModal={() => setActiveModal('expense')} />
    </div>
  );
}
