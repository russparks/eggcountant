import { useState, useEffect } from 'react';
import { dataApi, salesApi } from '../../api';
import { ChevronUp } from 'lucide-react';
import navIconHome from '../../../media/nav-icons/lm-home.png';
import navIconCalendar from '../../../media/nav-icons/lm-calendar.png';
import navIconFlock from '../../../media/nav-icons/lm-flock.png';
import navIconSales from '../../../media/nav-icons/lm-sales.png';
import { SURFACE_GRADIENT } from '../../constants';
import { ProfitLossCard, MiniStatCardHalf, HenCard, RollingLayRateCard, PunFactCard, WikiItemCard, WikiShowMoreCard, CalendarCard, CalendarSummarySection, EggToHenFooter, ChickCardsSection, HenCardsSection, CoopCardsSection, AddHenModal, AddCoopModal, EditHenModal, EditCoopModal } from './sharedHomeComponents';
import { AddChicksModal, AddEggsModal, AddMedsModal, AddExpenseModal, PhotoMiniModal, EditChicksModal } from './ComponentsShowcase';

const surfaceGradient = SURFACE_GRADIENT;

type PageKey = 'home' | 'calendar' | 'flock' | 'sales' | 'blank';
type ModalKey = 'none' | 'account' | 'logout' | 'eggs' | 'chicks' | 'hen' | 'coop' | 'editHen' | 'editCoop' | 'meds' | 'expense' | 'editChicks';

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
      <header className={`sticky top-0 z-50 border-b-[1.2px] border-slate-200 bg-cover bg-center bg-no-repeat bg-[linear-gradient(135deg,_#f1ecfb_0%,_#ffffff_58%,_#A58DD9_100%)] drop-shadow-[0_14px_24px_rgba(111,75,184,0.3)] backdrop-blur-sm transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <img
            src="/egg/media/icons/henlife-logo-800.png"
            alt="Hen Life"
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
              className="flex h-[3.74rem] w-[3.74rem] items-center justify-end rounded-[var(--ui-radius)] bg-transparent transition hover:bg-transparent"
              onClick={() => {
                closeBottomNav();
                setSettingsOpen((open) => !open);
              }}
            >
              <img
                src="/egg/media/icons/ico-settings-top.png"
                alt=""
                className="h-[3.4rem] w-auto object-contain"
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
    { label: 'Chicks', icon: '/egg/media/icons/ico-chick.png', action: 'chicks' },
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
      <div className="fixed left-0 bottom-0 z-40 w-[100dvw] max-w-[100dvw] pointer-events-none [transform:translateZ(0)]">
        <div className="absolute inset-x-0 bottom-0 h-[env(safe-area-inset-bottom)] bg-white/95" />
        <div className="h-[6.07rem] border-t-[1.2px] border-slate-200 bg-white/95 backdrop-blur-[2px]" />
      </div>

      <div className="fixed left-0 bottom-0 z-50 w-[100dvw] max-w-[100dvw] overflow-visible [transform:translateZ(0)]">
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

          <div className="relative z-10 mx-auto grid h-[6.07rem] w-full max-w-[32rem] grid-cols-[1fr_1fr_6.25rem_1fr_1fr] items-center gap-0 px-3 text-center sm:px-4">
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


export function EditChicksModal({ onClose }: { onClose: () => void }) {
  const [eggStates, setEggStates] = useState<number[]>([1, 1, 1, 1, 1, 2, 0, 0, 0]);
  const [editPhotoAdded, setEditPhotoAdded] = useState(true);
  const [editPhotoMiniModalOpen, setEditPhotoMiniModalOpen] = useState(false);
  const [editNoteOpen, setEditNoteOpen] = useState(false);
  const [editNoteAdded, setEditNoteAdded] = useState('Strong shells, one late hatchling, keep an eye on humidity.');
  const [photoZoom, setPhotoZoom] = useState(1);
  const [photoOffset, setPhotoOffset] = useState(0);

  return (
    <>
      <div className="fixed inset-0 z-[70] flex items-end justify-center bg-[#2b124f]/28 p-2 backdrop-blur-[2px] sm:items-center sm:p-4">
        <div className={`max-h-[92vh] w-full max-w-[36rem] overflow-y-auto rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-[linear-gradient(135deg,_#f1ecfb_0%,_#ffffff_58%,_#f3edff_100%)] p-4 text-[#6f4bb8] shadow-[0_20px_50px_rgba(47,31,77,0.16)] animate-[fadeSlideUp_220ms_ease-out]`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-[2.05rem] font-black italic leading-none tracking-tight text-[#6f4bb8]">Edit Chicks</div>
            </div>
            <button type="button" className="text-[2.2rem] leading-none text-[#c4b2f4]" onClick={onClose}>×</button>
          </div>

          <div className="mt-5 space-y-4">
            <div className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-4 shadow-sm">
              <div className="mb-3 text-[1.215rem] font-medium leading-tight text-[#9E9E9E]">Click the Eggs to Update</div>
              <div className="grid grid-cols-5 gap-3">
                {eggStates.map((state, index) => (
                  <button
                    key={index}
                    type="button"
                    className="flex h-[4.4rem] w-full items-center justify-center bg-transparent p-0 shadow-none"
                    onClick={() => setEggStates((prev) => prev.map((value, i) => i === index ? (value + 1) % 3 : value))}
                  >
                    <img src={state === 1 ? '/egg/media/icons/ico-chick.png?v=20260404b' : state === 2 ? '/egg/media/icons/ico-perishX.png' : '/egg/media/icons/ico-egg.png?v=20260404c'} alt="" className="h-[3.2rem] w-[3.2rem] object-contain" />
                  </button>
                ))}
              </div>
              <div className="mt-3 flex items-center justify-center gap-4 text-center text-[1.215rem] leading-tight text-[#6f4bb8]">
                <span><span className="text-[1.458rem] font-bold">{eggStates.filter((v) => v === 1).length}</span> <span className="font-normal">hatched</span></span>
                <span><span className="text-[1.458rem] font-bold">{eggStates.filter((v) => v === 0).length}</span> <span className="font-normal">brewing</span></span>
                <span><span className="text-[1.458rem] font-bold">{eggStates.filter((v) => v === 2).length}</span> <span className="font-normal">perished</span></span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 items-start">
              <div className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-4 shadow-sm">
                <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Photo</div>
                <div className="mt-3 flex justify-center">
                  <button type="button" className="flex h-[7.5rem] w-[7.5rem] items-center justify-center rounded-full border border-dashed border-[#d9c9fb] bg-[#f8f5ff] text-center text-[0.95rem] font-semibold text-[#c4b2f4]" onClick={() => setEditPhotoMiniModalOpen(true)}>
                    {editPhotoAdded ? 'Tap to edit photo' : 'Tap to add photo'}
                  </button>
                </div>
              </div>
              <div className="space-y-3">
                <button type="button" className="w-full rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 text-[1rem] font-semibold text-[#6f4bb8] shadow-sm" onClick={() => setEditNoteOpen(true)}>{editNoteAdded ? 'Edit notes' : 'Notes'}</button>
                {editNoteAdded ? (
                  <div className="w-full rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 text-[0.98rem] text-[#c4b2f4] shadow-sm">{editNoteAdded}</div>
                ) : null}
              </div>
            </div>

            {editNoteOpen ? (
              <div className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
                <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Notes</div>
                <textarea value={editNoteAdded} onChange={(e) => setEditNoteAdded(e.target.value)} placeholder="Type notes..." rows={3} className="mt-2 min-h-[3.5rem] w-full resize-none overflow-hidden bg-transparent text-[1rem] text-[#6f4bb8] outline-none" />
                <div className="mt-3 flex justify-end gap-2">
                  <button type="button" className="rounded-[var(--ui-radius)] bg-[#f3edff] px-3 py-2 text-[0.95rem] font-semibold text-[#6f4bb8]" onClick={() => setEditNoteOpen(false)}>Done</button>
                </div>
              </div>
            ) : null}

            <div className="grid grid-cols-2 gap-3">
              <button type="button" className="w-full rounded-[var(--ui-radius)] border border-[#f7c6d1] bg-white/85 px-5 py-4 text-[1.05rem] font-semibold text-[#d14d6f] shadow-sm" onClick={onClose}>Remove Clutch</button>

              <button type="button" className="w-full rounded-[var(--ui-radius)] bg-[#6f4bb8] px-5 py-4 text-[1.05rem] font-semibold text-white shadow-[0_10px_24px_rgba(47,31,77,0.14)]" onClick={onClose}>Update</button>
            </div>
          </div>
        </div>
      </div>
      {editPhotoMiniModalOpen ? (
        <PhotoMiniModal title="Edit photo" circle onClose={() => setEditPhotoMiniModalOpen(false)} onSave={() => { setEditPhotoAdded(true); setEditPhotoMiniModalOpen(false); }} photoZoom={photoZoom} setPhotoZoom={setPhotoZoom} photoOffset={photoOffset} setPhotoOffset={setPhotoOffset} previewLabel="Photo preview" />
      ) : null}
    </>
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
              {['1', '2', '3', '4', '5', '6', '7', '8', '9', '⌫', '0', 'Done'].map((key) => (
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
    <div className="w-full">
      {/* Home page title hidden for now */}
      <ProfitLossCard />
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <MiniStatCardHalf title="Yokes to Go" value="12" icon="/egg/media/icons/ico-fried-egg.png" align="left" />
        </div>
        <div>
          <MiniStatCardHalf title="Buns to Cook" value="6" icon="/egg/media/icons/ico-chick.png" align="right" />
        </div>
      </div>
      <hr className="mt-6 border-0 border-t border-slate-200" />
      <div className="mt-6 grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div><HenCard name="Willow" coop="Willow House" eggs="24" note="66% Egg Bossing" medal="/egg/media/icons/gold.png" progress={66} nameColor="#FFCC01" /></div>
          <div><HenCard name="Dotty" coop="Speckled Coop" eggs="19" note="51% Egg Bossing" medal="/egg/media/icons/silver.png" progress={51} nameColor="#999999" /></div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div><HenCard name="Mabel" coop="Back Garden Coop" eggs="16" note="46% Egg Bossing" medal="/egg/media/icons/bronze.png" progress={46} nameColor="#CC6602" /></div>
          <div className="flex items-start justify-center pt-1">
            <img src="/egg/media/icons/egg-volution.png" alt="Egg-volution" className="h-[6.48rem] w-auto object-contain" />
          </div>
        </div>
      </div>
      <hr className="mt-6 border-0 border-t border-slate-200" />
      <div className="mt-6">
        <RollingLayRateCard />
      </div>
      <div
        className="mt-4 relative flex min-h-[3.75rem] w-full items-center justify-center overflow-hidden p-1"
        style={{
          backgroundColor: 'transparent',
          backgroundImage: `url("/egg/media/icons/ico-egg-divider-faded.png")`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto 100%',
        }}
      >
        <div className="text-[1.7rem] font-bold text-[#616161] text-center">
          Divider Text
        </div>
      </div>
      <div className="mt-4 grid gap-4 text-[1.1rem]">
        <PunFactCard mode="pun" text="My flock's project management style? Scrum… and peck." />
        <WikiItemCard
          title="Egg marketing standards"
          body="Explains egg marketing rules for producers, including when registration/stamping may apply and what information must be shown when selling direct or at markets."
        />
        <WikiItemCard
          title="Keeping hens laying smoothly"
          body="A quick guide to daylight balance, feed quality, and reducing stress so laying stays steady through the week."
        />
        <WikiItemCard
          title="Coop hygiene basics"
          body="Simple reminders for bedding, ventilation, and cleaning rhythms that help keep the flock comfortable and productive."
        />
        <WikiShowMoreCard />
        <EggToHenFooter />
      </div>
    </div>
  );
}

function FlockContent({ onEditChickCard, onDeleteChickCard, onEditHenCard, onEditCoopCard, onAddChickCard, onAddHenCard, onAddCoopCard }: { onEditChickCard: () => void; onDeleteChickCard: () => void; onEditHenCard: (henId: string) => void; onEditCoopCard: () => void; onAddChickCard: () => void; onAddHenCard: () => void; onAddCoopCard: () => void }) {
  const [activeTab, setActiveTab] = useState<'chicks' | 'hens' | 'coops'>('chicks');
  const [hens, setHens] = useState<any[]>([]);
  const [coops, setCoops] = useState<any[]>([]);

  useEffect(() => {
    dataApi.list('hens').then(setHens).catch(() => setHens([]));
    dataApi.list('locations').then(setCoops).catch(() => setCoops([]));
  }, []);

  return (
    <div className="w-full">
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setActiveTab('chicks')}
          className={`flex-[3] flex flex-col items-center justify-center gap-0 rounded-[var(--ui-radius)] px-3 py-2 text-center text-[2rem] font-semibold shadow-sm ${activeTab === 'chicks' ? 'bg-[#c4b2f4] text-white' : 'border border-[#d9c9fb] bg-white text-[#c4b2f4]'}`}
        >

          <img src="/egg/media/icons/ico-chick.png" alt="" className={`h-[3.4rem] w-auto object-contain`} />
          <span></span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('hens')}
          className={`flex-[3] flex flex-col items-center justify-center gap-0 rounded-[var(--ui-radius)] px-3 py-2 text-center text-[2rem]  font-semibold shadow-sm ${activeTab === 'hens' ? 'bg-[#c4b2f4] text-white' : 'border border-[#d9c9fb] bg-white text-[#c4b2f4]'}`}
        >

          <img src="/egg/media/icons/ico-hen.png" alt="" className={`h-[3.4rem] w-auto object-contain`} />
          <span></span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('coops')}
          className={`flex-[3] flex flex-col items-center justify-center gap-0 rounded-[var(--ui-radius)] px-3 py-2 text-center text-[2rem] font-semibold shadow-sm ${activeTab === 'coops' ? 'bg-[#c4b2f4] text-white' : 'border border-[#d9c9fb] bg-white text-[#c4b2f4]'}`}
        >

          <img src="/egg/media/icons/ico-coop.png" alt="" className={`h-[3.4rem] w-auto object-contain`} />
          <span></span>
        </button>
        <button
          type="button"
          onClick={() => {
            if (activeTab === 'chicks') onAddChickCard();
            if (activeTab === 'hens') onAddHenCard();
            if (activeTab === 'coops') onAddCoopCard();
          }}
          className={`flex-[1] flex flex-col items-center justify-center gap-0 rounded-[var(--ui-radius)] px-3 py-2 text-center text-[2rem] font-semibold `}
        >

          <img src="/egg/media/icons/ico-plus.png" alt="" className={`h-[3rem] w-auto object-contain`} />
          <span></span>
        </button>
        {/*<button
          type="button"
          className="flex-[1] rounded-[var(--ui-radius)] bg-[#6f4bb8] px-2 py-3 text-center text-[1rem] font-semibold text-white shadow-sm"
        >
          +
        </button>*/}
      </div>

      <hr className="mt-4 border-0 border-t border-[#e7ddfb]" />

      <div className="mt-4">
        <div className={activeTab === 'chicks' ? 'block' : 'hidden'}>
          <ChickCardsSection onEditCard={onEditChickCard} onDeleteCard={onDeleteChickCard} />
        </div>
        <div className={activeTab === 'hens' ? 'block' : 'hidden'}>
          <HenCardsSection onEditCard={onEditHenCard} hens={hens} coops={coops} />
        </div>
        <div className={activeTab === 'coops' ? 'block' : 'hidden'}>
          <CoopCardsSection onEditCard={onEditCoopCard} coops={coops} />
        </div>
      </div>

      <div className="mt-6">
        <EggToHenFooter />
      </div>
    </div>
  );
}

function SalesContent() {
  const [remoteSummary, setRemoteSummary] = useState<{ allTimeNet: number; salesTotal: number; expensesTotal: number } | null>(null);
  const [remoteItems, setRemoteItems] = useState<any[] | null>(null);
  const [remotePagination, setRemotePagination] = useState<{ page: number; perPage: number; total: number; totalPages: number } | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const typeFilters = ['All', 'Eggs', 'Chicks', 'Chicken', 'Feed', 'Equipment', 'Expenses'];
  const dateFilters = ['All', '1W', '2W', '1M', 'Custom'];
  const statusFilters = ['All', 'Paid', 'Due', 'Overdue'];
  const [activeTypeFilter, setActiveTypeFilter] = useState('All');
  const [activeDateFilter, setActiveDateFilter] = useState('All');
  const [activeStatusFilter, setActiveStatusFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 20;

  useEffect(() => {
    setLoading(true);
    setLoadError(null);

    salesApi.list({
      page: currentPage,
      perPage: recordsPerPage,
      type: activeTypeFilter,
      status: activeStatusFilter,
      dateRange: activeDateFilter,
    })
      .then((data) => {
        setRemoteSummary(data.summary ?? null);
        setRemoteItems(Array.isArray(data.items) ? data.items : []);
        setRemotePagination(data.pagination ?? null);
      })
      .catch((error) => {
        setRemoteSummary(null);
        setRemoteItems([]);
        setRemotePagination({
          page: 1,
          perPage: recordsPerPage,
          total: 0,
          totalPages: 1,
        });
        setLoadError(error instanceof Error ? error.message : 'Unable to load sales data.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [activeDateFilter, activeStatusFilter, activeTypeFilter, currentPage]);

  const totalPages = remotePagination?.totalPages ?? 1;
  const pagedRecords = remoteItems ?? [];
  const allTimeNet = remoteSummary?.allTimeNet ?? 0;

  return (
    <div className="w-full">
      <div className="flex items-stretch gap-3">
        <div className="flex-1 rounded-[1.25rem] bg-[#8f78c8] px-4 py-4 text-white shadow-[0_10px_24px_rgba(47,31,77,0.12)]">
          <div className="text-[0.82rem] font-bold uppercase tracking-[0.18em] text-white/70">All time</div>
          <div className="mt-2 text-[2rem] font-black leading-none">£{allTimeNet.toFixed(2)}</div>
        </div>
        <button type="button" className="flex-1 rounded-[1.25rem] bg-[#6f4bb8] px-4 py-4 text-left text-white shadow-[0_10px_24px_rgba(47,31,77,0.14)] transition hover:bg-[#603ca8]">
          <div className="text-[1.45rem] font-black leading-none">New Sale</div>
        </button>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        <label className="rounded-[1rem] border border-[#ddd1fa] bg-white px-4 py-3 shadow-sm">
          <div className="text-[0.76rem] font-bold uppercase tracking-[0.16em] text-[#9c8abf]">Type</div>
          <select value={activeTypeFilter} onChange={(e) => { setActiveTypeFilter(e.target.value); setCurrentPage(1); }} className="mt-2 w-full bg-transparent text-[1.02rem] font-semibold text-[#6f4bb8] outline-none">
            {typeFilters.map((filter) => <option key={filter}>{filter}</option>)}
          </select>
        </label>
        <label className="rounded-[1rem] border border-[#ddd1fa] bg-white px-4 py-3 shadow-sm">
          <div className="text-[0.76rem] font-bold uppercase tracking-[0.16em] text-[#9c8abf]">Date</div>
          <select value={activeDateFilter} onChange={(e) => setActiveDateFilter(e.target.value)} className="mt-2 w-full bg-transparent text-[1.02rem] font-semibold text-[#6f4bb8] outline-none">
            {dateFilters.map((filter) => <option key={filter}>{filter}</option>)}
          </select>
        </label>
        <label className="rounded-[1rem] border border-[#ddd1fa] bg-white px-4 py-3 shadow-sm">
          <div className="text-[0.76rem] font-bold uppercase tracking-[0.16em] text-[#9c8abf]">Status</div>
          <select value={activeStatusFilter} onChange={(e) => { setActiveStatusFilter(e.target.value); setCurrentPage(1); }} className="mt-2 w-full bg-transparent text-[1.02rem] font-semibold text-[#6f4bb8] outline-none">
            {statusFilters.map((filter) => <option key={filter}>{filter}</option>)}
          </select>
        </label>
      </div>

      <hr className="mt-5 border-0 border-t border-[#e7ddfb]" />

      <div className="mt-5 overflow-hidden rounded-[1.4rem] border border-[#e7ddfb] bg-white/90 shadow-[0_10px_24px_rgba(47,31,77,0.06)]">
        {loadError ? (
          <div className="border-b border-[#f3d6de] bg-[#fff4f6] px-4 py-3 text-[0.95rem] font-semibold text-[#b04a6a]">
            {loadError}
          </div>
        ) : null}
        <div className="hidden grid-cols-[1fr_0.95fr_1.8fr_1.1fr_0.55fr_0.8fr_0.8fr] gap-3 border-b border-[#eee6ff] bg-[#f8f4ff] px-4 py-3 text-[0.9rem] font-bold uppercase tracking-[0.12em] text-[#9c8abf] sm:grid">
          <div>Date</div>
          <div>Type</div>
          <div>Record</div>
          <div>Contact</div>
          <div>Qty</div>
          <div>Value</div>
          <div>Status</div>
        </div>

        <div className="divide-y divide-[#f0e8ff]">
          {loading ? (
            <div className="px-4 py-8 text-center text-[1rem] font-semibold text-[#9c8abf]">Loading sales data…</div>
          ) : pagedRecords.length === 0 ? (
            <div className="px-4 py-8 text-center text-[1rem] font-semibold text-[#9c8abf]">No sales data found yet.</div>
          ) : pagedRecords.map((record, index) => (
            <div key={`${record.date}-${record.item}-${index}`} className="px-4 py-4 sm:grid sm:grid-cols-[1fr_0.95fr_1.8fr_1.1fr_0.55fr_0.8fr_0.8fr] sm:items-center sm:gap-3 sm:px-4 sm:py-4">
              <div className="flex items-start justify-between gap-3 sm:block">
                <div className="flex items-start gap-3">
                  <img src={record.icon} alt="" className="h-[2rem] w-[2rem] object-contain sm:hidden" />
                  <div>
                    <div className="text-[1.14rem] font-bold text-[#6f4bb8] sm:hidden">{record.item}</div>
                    <div className="mt-1 text-[1rem] text-[#9c8abf] sm:hidden">{record.date} · {record.party}</div>
                  </div>
                </div>
                <div className={`rounded-full px-3 py-1 text-[0.82rem] font-bold uppercase tracking-[0.12em] sm:hidden ${record.status === 'Paid' ? 'bg-[#e9f8ef] text-[#2c8b57]' : record.status === 'Due' ? 'bg-[#fff1df] text-[#bf7a1a]' : 'bg-[#ffe3e3] text-[#c05454]'}`}>{record.status}</div>
              </div>

              <div className="mt-3 hidden text-[1rem] font-semibold text-[#7c68a7] sm:block">{record.date}</div>
              <div className="mt-3 inline-flex rounded-full bg-[#f3edff] px-3 py-1 text-[0.96rem] font-bold text-[#6f4bb8] sm:mt-0 sm:bg-transparent sm:px-0 sm:py-0 sm:text-[1rem]">{record.type}</div>
              <div className="mt-3 hidden items-center gap-3 sm:flex">
                <img src={record.icon} alt="" className="h-[2rem] w-[2rem] object-contain" />
                <span className="text-[1.08rem] font-bold text-[#6f4bb8]">{record.item}</span>
              </div>
              <div className="mt-3 text-[1rem] text-[#8f7db8] sm:mt-0">{record.party}</div>
              <div className="mt-3 text-[1rem] font-semibold text-[#6f4bb8] sm:mt-0">x{record.qty}</div>
              <div className={`mt-3 text-[1.14rem] font-black sm:mt-0 ${record.direction === 'expense' ? 'text-[#c05454]' : 'text-[#6f4bb8]'}`}>{record.total < 0 ? `-£${Math.abs(record.total).toFixed(2)}` : `£${record.total.toFixed(2)}`}</div>
              <div className="mt-3 hidden sm:block">
                <span className={`rounded-full px-3 py-1 text-[0.8rem] font-bold uppercase tracking-[0.12em] ${record.status === 'Paid' ? 'bg-[#e9f8ef] text-[#2c8b57]' : record.status === 'Due' ? 'bg-[#fff1df] text-[#bf7a1a]' : 'bg-[#ffe3e3] text-[#c05454]'}`}>{record.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {(remotePagination ? remotePagination.total > recordsPerPage : false) ? (
        <div className="mt-4 flex items-center justify-between gap-3 rounded-[1rem] border border-[#e7ddfb] bg-white px-4 py-3 shadow-sm">
          <div className="text-[0.96rem] font-semibold text-[#8f7db8]">Page {currentPage} of {totalPages}</div>
          <div className="flex gap-2">
            <button type="button" onClick={() => setCurrentPage((page) => Math.max(1, page - 1))} disabled={currentPage === 1} className="min-h-[44px] rounded-full border border-[#ddd1fa] bg-white px-4 py-2 text-[0.95rem] font-semibold text-[#6f4bb8] disabled:opacity-40">Prev</button>
            <button type="button" onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))} disabled={currentPage === totalPages} className="min-h-[44px] rounded-full bg-[#6f4bb8] px-4 py-2 text-[0.95rem] font-semibold text-white disabled:opacity-40">Next</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function PlaceholderContent({ title }: { title: string }) {
  return (
    <div className="w-full">
      <h1 className="text-[2.55rem] font-black italic leading-[0.94] tracking-tight text-[#6f4bb8] sm:text-[2.8rem]">
        {/*title*/}
      </h1>
    </div>
  );
}

export default function AppShellPage({ title, active }: { title: string; active: PageKey }) {
  const [headerHidden, setHeaderHidden] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [bottomNavOpen, setBottomNavOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<ModalKey>('none');
  const [selectedHenId, setSelectedHenId] = useState<string | null>(null);

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
      {activeModal === 'hen' ? <AddHenModal onClose={() => setActiveModal('none')} /> : null}
      {activeModal === 'coop' ? <AddCoopModal onClose={() => setActiveModal('none')} /> : null}
      {activeModal === 'editHen' ? <EditHenModal henId={selectedHenId} onClose={() => setActiveModal('none')} /> : null}
      {activeModal === 'editCoop' ? <EditCoopModal onClose={() => setActiveModal('none')} /> : null}
      {activeModal === 'meds' ? <AddMedsModal onClose={() => setActiveModal('none')} /> : null}
      {activeModal === 'expense' ? <AddExpenseModal onClose={() => setActiveModal('none')} /> : null}
      {activeModal === 'editChicks' ? <EditChicksModal onClose={() => setActiveModal('none')} /> : null}

      <main className="mx-auto flex min-h-[calc(100vh-11rem)] max-w-6xl items-start px-4 pt-5 pb-40 sm:px-6 lg:px-8">
        {active === 'home' ? <HomeContent /> : active === 'calendar' ? <div className="w-full">

          <CalendarCard /><CalendarSummarySection /><EggToHenFooter /></div> : active === 'flock' ? <FlockContent onEditChickCard={() => setActiveModal('editChicks')} onDeleteChickCard={() => { }} onEditHenCard={(henId) => { setSelectedHenId(henId); setActiveModal('editHen'); }} onEditCoopCard={() => setActiveModal('editCoop')} onAddChickCard={() => setActiveModal('chicks')} onAddHenCard={() => setActiveModal('hen')} onAddCoopCard={() => setActiveModal('coop')} /> : active === 'sales' ? <SalesContent /> : <PlaceholderContent title={title} />}
      </main>

      <BottomNav active={active} menuOpen={bottomNavOpen} setMenuOpen={setBottomNavOpen} closeSettingsNav={() => setSettingsOpen(false)} openChicksModal={() => setActiveModal('chicks')} openEggsModal={() => setActiveModal('eggs')} openMedsModal={() => setActiveModal('meds')} openExpenseModal={() => setActiveModal('expense')} />
    </div>
  );
}
