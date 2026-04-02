import React, { useEffect, useState } from 'react';
import { Egg, TrendingUp, TrendingDown, MapPin, CalendarDays, Home, Calendar, Users, PoundSterling, ChevronUp } from 'lucide-react';

const surfaceGradient = 'bg-[linear-gradient(135deg,_#f1ecfb_0%,_#ffffff_58%,_#f6f1ff_100%)]';

const formatDisplayDate = (value: string) => {
  if (!value) return '';
  const [year, month, day] = value.split('-');
  if (!year || !month || !day) return value;
  return `${day}/${month}/${year.slice(-2)}`;
};

function ShellCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-[var(--ui-radius)] bg-white shadow-[0_10px_30px_rgba(47,31,77,0.08)] border border-white/60 ${className}`}>{children}</div>;
}

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
            data-component="HeaderLogo"
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
              data-component="HeaderSettingsButton"
              type="button"
              aria-label="Settings"
              className="flex h-[3.74rem] w-[3.74rem] items-center justify-center rounded-[var(--ui-radius)] bg-white transition hover:bg-slate-50"
              onClick={() => {
                closeBottomNav();
                setSettingsOpen((open) => !open);
              }}
            >
              <img
                data-component="HeaderSettingsIcon"
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


function ComponentLabel({ name }: { name: string }) {
  return (
    <div className="mb-3 w-full">
      <div className="w-full text-sm font-semibold tracking-wide text-slate-500">{name}</div>
      <hr className="mt-2 w-full border-0 border-t border-slate-200" />
    </div>
  );
}

function MetricCard({ title, value, subtitle, tone = 'purple', translucent = false }: { title: string; value: string; subtitle: string; tone?: 'purple' | 'pink' | 'gold'; translucent?: boolean }) {
  const tones = {
    purple: 'from-violet-500 to-fuchsia-500',
    pink: 'from-pink-500 to-rose-400',
    gold: 'from-amber-400 to-orange-400',
  };

  return (
    <ShellCard className={translucent ? 'bg-white/[0.15] p-5' : 'p-5'}>
      <div className={`inline-flex h-11 w-11 items-center justify-center rounded-[var(--ui-radius)] bg-gradient-to-br ${tones[tone]} text-white shadow-lg`}>
        <Egg size={20} />
      </div>
      <div className="mt-4 text-sm font-medium text-slate-500">{title}</div>
      <div className="mt-1 text-3xl font-bold tracking-tight text-slate-900">{value}</div>
      <div className="mt-1 text-sm text-slate-500">{subtitle}</div>
    </ShellCard>
  );
}

function WeeklySummaryCard({ trend = '+12%', positive = true, headline = <>Your girls laid <span className="font-bold">94</span> eggs and earned you <span className="font-bold">£13.25</span> in profit!</>, subtext = 'Cheeky little bump from last week, Willow continues to show egg-stra effort...' }: { trend?: string; positive?: boolean; headline?: React.ReactNode; subtext?: React.ReactNode }) {
  return (
    <ShellCard className={`overflow-hidden border border-[#d9c9fb] ${surfaceGradient} p-3 text-[#6f4bb8]`}>
      <div className="relative min-h-[120px]">
        <div data-component="WeeklySummaryCardTrendPill" className="float-right ml-2 mb-2 rounded-[var(--ui-radius)] bg-white/90 px-4 py-3 text-right shadow-sm backdrop-blur-sm">
          <div data-component="WeeklySummaryCardTrendValue" className="mt-1 flex items-center gap-2 text-lg font-semibold text-[#6f4bb8]">{positive ? <TrendingUp data-component="WeeklySummaryCardTrendIcon" className="text-emerald-500" size={18} /> : <TrendingDown data-component="WeeklySummaryCardTrendIcon" className="text-rose-500" size={18} />} {trend}</div>
        </div>
        <h2 data-component="WeeklySummaryCardHeadline" className="text-[1.6rem] font-normal leading-tight text-[#6f4bb8]">{headline}</h2>
        <p data-component="WeeklySummaryCardSubtext" className="mt-2 max-w-[42rem] text-sm text-[#8c79bb]">{subtext}</p>
        <div className="clear-both" />
      </div>
    </ShellCard>
  );
}

function ProfitLossCard() {
  const profit = 13.25;
  const loss = 6.8;
  const net = profit - loss;
  const netPositive = net >= 0;

  return (
    <ShellCard className={`border border-[#d9c9fb] ${surfaceGradient} p-3`}>
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
            <div className={`m-0 text-[0.8rem] uppercase ${netPositive ? 'text-emerald-500' : 'text-rose-500'}`}>Cluck Statement</div>
            <div className={`mt-1 text-[2.25rem] font-bold ${netPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
              {netPositive ? '+' : '-'}£{Math.abs(net).toFixed(2)}
            </div>
          </div>
          <img
            data-component="ProfitLossCardNetIcon"
            src={netPositive ? '/egg/media/icons/sales-green.png' : '/egg/media/icons/sales-red.png'}
            alt=""
            className="h-21 w-auto object-contain"
          />
        </div>
      </div>
    </ShellCard>
  );
}

function PunFactCard() {
  return (
    <ShellCard className={`overflow-hidden border border-[#d9c9fb] ${surfaceGradient} p-3 text-[#6f4bb8]`}>
      <div className="flex justify-end">
        <button
          type="button"
          className="rounded-[var(--ui-radius)] bg-[#6f4bb8] px-[0.62rem] py-[0.36rem] text-[0.72rem] font-semibold uppercase tracking-wide text-white shadow-sm"
        >
          Another Pun
        </button>
      </div>
      <div className="mt-[0.45rem] w-full text-[1.6rem] font-normal italic leading-tight text-[#6f4bb8]">
        “My flock's project management style? Scrum… and peck.”
      </div>
    </ShellCard>
  );
}

function WikiItemCard() {
  return (
    <a href="#" target="_blank" rel="noreferrer" className="block">
      <ShellCard className={`overflow-hidden border border-[#d9c9fb] ${surfaceGradient} p-3 text-[#6f4bb8]`}>
        <div className="text-[1.35rem] font-bold text-[#6f4bb8]">Egg marketing standards</div>
        <div className="mt-[0.45rem] w-full text-[1.12rem] font-normal leading-tight text-[#6f4bb8]">
          Explains egg marketing rules for producers, including when registration/stamping may apply and what information must be shown when selling direct or at markets.
        </div>
        <div className="mt-3 text-[0.9rem] font-bold text-[#9E9E9E]">Open article →</div>
      </ShellCard>
    </a>
  );
}

function WikiShowMoreCard() {
  return (
    <a href="#" target="_blank" rel="noreferrer" className="block">
      <ShellCard className="overflow-hidden border border-[#d9c9fb] bg-white p-3 text-center text-[#6f4bb8]">
        <div className="text-[1rem] font-bold text-[#6f4bb8]">Show more (45 remaining)</div>
      </ShellCard>
    </a>
  );
}

function BlankProfileCard() {
  return (
    <ShellCard className="relative min-h-[3.75rem] w-full overflow-hidden border border-[#d9c9fb] bg-[#fefcff] p-3">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
            radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)`,
        }}
      />
    </ShellCard>
  );
}

function ChickCard({ count, started, status, progress, daysLeft, hatched, brewing, temperature, onEdit, onDelete }: { count: string; started: string; status: string; progress: number; daysLeft: string; hatched: string; brewing: string; temperature: string; onEdit?: () => void; onDelete?: () => void }) {
  const totalEggs = Number(count);
  const hatchedCount = Number(hatched);
  const brewingCount = Number(brewing);
  const perishedCount = Math.max(totalEggs - hatchedCount - brewingCount, 0);
  const complete = brewingCount === 0;

  return (
    <ShellCard className={`border border-[#e4dafb] ${surfaceGradient} p-5 text-[#6f4bb8] shadow-[0_10px_30px_rgba(47,31,77,0.08)] ${complete ? 'opacity-70' : ''}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <img src="/egg/media/icons/3-eggs.png" alt="" className="h-[3.6rem] w-[3.6rem] object-contain" />
          <div className="min-w-0">
            <div className="text-[2.3rem] font-black leading-none text-[#6f4bb8]">{hatchedCount} of {totalEggs}</div>
            <div className="mt-1 text-[1.45rem] font-bold leading-tight text-[#8f79c6]">hatched</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" className="flex h-[2.88rem] w-[2.88rem] items-center justify-center rounded-[var(--ui-radius)] bg-[#f6f1ff] text-[#6f4bb8] shadow-sm" onClick={onEdit}>
            <img src="/egg/media/icons/1-hatching.png" alt="" className="h-[1.47rem] w-[1.47rem] object-contain opacity-75" />
          </button>
          <button type="button" className="flex h-[2.88rem] w-[2.88rem] items-center justify-center rounded-[var(--ui-radius)] bg-[#fff1f4] text-[#ff6b8a] shadow-sm" onClick={onDelete}>
            <span className="text-[1.23rem]">🗑️</span>
          </button>
        </div>
      </div>

      <hr className="mt-4 border-0 border-t border-slate-200" />
      <div className="mt-3 w-full text-[1.275rem] text-[#b09bdb]">Started {started} • Willow House</div>

      <div className="mt-3 flex items-center gap-4">
        <div className="h-[0.7rem] w-[70%] overflow-hidden rounded-[var(--ui-radius)] bg-[#eadffd]">
          <div className="h-full rounded-[var(--ui-radius)] bg-[linear-gradient(90deg,#ddd3fb_0%,#b49cf5_35%,#8b5cf6_68%,#6f4bb8_100%)]" style={{ width: `${progress}%` }} />
        </div>
        <div className="ml-auto flex items-center gap-2 text-right">
          <span className="text-[1.2rem] font-semibold text-[#8f79c6]">{daysLeft.replace(' days', 'd')}</span>
          <img src="/egg/media/icons/1-hatching.png" alt="" className="h-[2.85rem] w-[2.85rem] object-contain" />
        </div>
      </div>

      <hr className="mt-3 border-0 border-t border-slate-200" />

      <div className="mt-4 grid grid-cols-3 gap-3 text-[1rem] text-[#8f79c6]">
        <div className="flex items-center justify-center gap-2">
          <span className="text-[2rem] leading-none">🐣</span>
          <span>{hatched} hatched</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="text-[2rem] leading-none">🥚</span>
          <span>{brewing} brewing</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="text-[2rem] leading-none">💀</span>
          <span>{perishedCount} perished</span>
        </div>
      </div>
    </ShellCard>
  );
}

function MiniStatCard({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <ShellCard className="p-5">
      <div className={`h-2 w-16 rounded-[var(--ui-radius)] ${accent}`} />
      <div className="mt-4 text-sm text-slate-500">{label}</div>
      <div className="mt-2 text-2xl font-bold text-slate-900">{value}</div>
    </ShellCard>
  );
}

function MiniStatCardHalf({
  title,
  value,
  icon,
  align,
}: {
  title: string;
  value: string;
  icon: string;
  align: 'left' | 'right';
}) {
  const isLeft = align === 'left';

  return (
    <ShellCard className={`border border-[#d9c9fb] ${surfaceGradient} p-3`}>
      <div className={isLeft ? 'text-left' : 'text-right'}>
        <div className="m-0 text-[1rem] uppercase text-[#6f4bb8]">{title}</div>
      </div>
      <div className={`mt-1.5 flex items-center ${isLeft ? 'justify-between flex-row-reverse' : 'justify-between'}`}>
        <img src={icon} alt="" className="h-[3.4rem] w-auto max-w-[34%] object-contain" />
        <div className={`text-[2.72rem] font-bold text-[#6f4bb8] ${isLeft ? 'ml-3' : 'mr-3'}`}>{value}</div>
      </div>
    </ShellCard>
  );
}

function HenCard({
  name,
  coop,
  eggs,
  note,
  medal,
  progress,
  nameColor,
  compact = false,
  profileImage,
  profileBadge,
  compactMode = 'hen',
}: {
  name: string;
  coop: string;
  eggs: string;
  note: string;
  medal: string;
  progress: number;
  nameColor: string;
  compact?: boolean;
  profileImage?: string;
  profileBadge?: 'gold' | 'silver' | 'bronze';
  compactMode?: 'hen' | 'coop';
}) {
  if (compact) {
    return (
      <ShellCard className={`border border-[#d9c9fb] ${surfaceGradient} p-3`}>
        <div className="flex min-h-[3.4rem] w-full items-center justify-center overflow-hidden">
          <div className="m-0 line-clamp-2 w-full text-center text-[1.55rem] font-bold leading-none text-[#6f4bb8]">{name}</div>
        </div>
        <hr className="mt-2 border-0 border-t border-slate-200" />
        <div className="relative mt-3 flex justify-center">
          {profileImage ? (
            <img src={profileImage} alt="" className="w-[92%] rounded-[var(--ui-radius)] border-[2px] border-black object-contain drop-shadow-[0_8px_12px_rgba(47,31,77,0.12)]" />
          ) : null}
          {profileBadge ? (
            <img
              src={`/egg/media/icons/${profileBadge}-over.png`}
              alt=""
              className="absolute bottom-0 left-[75%] h-[2.3025rem] w-auto -translate-x-1/2 object-contain"
            />
          ) : null}
        </div>
        <hr className="mt-3 border-0 border-t border-slate-200" />
        {compactMode === 'hen' ? (
          <div className="mt-[0.05rem] text-center text-[1.14rem] text-[#c7b2f7]">AGE: {note.replace('AGE: ', '')}</div>
        ) : null}
        <div className="mt-[0.05rem] text-center text-[0.9rem] uppercase text-[#9E9E9E]">{compactMode === 'coop' ? note : coop}</div>
        <hr className="mt-[0.35rem] border-0 border-t border-slate-200" />
        <div className="mt-[0.35rem] flex items-center justify-between gap-2 text-[1.326rem] font-bold leading-none text-[#9E9E9E]">
          <div className="flex items-center gap-2">
            <img src={compactMode === 'coop' ? '/egg/media/icons/1-hatching.png' : '/egg/media/icons/1-egg.png'} alt="" className="h-[1.99rem] w-auto object-contain" />
            <span>x {eggs}</span>
          </div>
          <img src="/egg/media/icons/edit-icon.png" alt="" className="h-[1.99rem] w-auto object-contain" />
        </div>
      </ShellCard>
    );
  }

  return (
    <ShellCard className={`border border-[#d9c9fb] ${surfaceGradient} p-3`}>
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="m-0 text-[2.1rem] font-bold leading-none" style={{ color: nameColor }}>{name}</div>
        </div>
        <img src={medal} alt="" className="h-12 w-12 object-contain" />
      </div>
      <hr className="mt-2 border-0 border-t border-slate-200" />
      <div className="mt-2 flex items-center gap-2 text-[3.315rem] font-bold text-[#704BB8] leading-none">
        <span>{eggs}</span>
        <img src="/egg/media/icons/1-egg.png" alt="" className="h-[2.05rem] w-auto object-contain" />
      </div>
      <div className="mt-3 h-2.5 w-full overflow-hidden rounded-[var(--ui-radius)] bg-slate-200">
        <div className="h-full rounded-[var(--ui-radius)] bg-[#c7b2f7]" style={{ width: `${progress}%` }} />
      </div>
      <div className="mt-2 flex items-center justify-between gap-3">
        <div className="text-[1.3125rem] text-[#c7b2f7]">{note}</div>
        <div className="text-[0.9rem] uppercase text-[#9E9E9E]">{coop}</div>
      </div>
    </ShellCard>
  );
}

function ProfitExpenseCard({
  name,
  value,
  icon,
  tone,
  className = '',
}: {
  name: 'ProfitCard' | 'ExpenseCard';
  value: string;
  icon: string;
  tone: 'green' | 'red';
  className?: string;
}) {
  const valueClass = tone === 'green' ? 'text-emerald-500' : 'text-rose-500';

  return (
    <ShellCard className={`border border-[#d9c9fb] ${surfaceGradient} px-4 py-3 ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <img data-component={`${name}Icon`} src={icon} alt="" className="h-12 w-12 shrink-0 object-contain" />
        <div data-component={`${name}Value`} className={`shrink-0 whitespace-nowrap text-[1.45rem] font-bold tracking-tight ${valueClass}`}>
          {value}
        </div>
      </div>
    </ShellCard>
  );
}

function ProfitHeroCard() {
  return (
    <ShellCard className={`border border-[#d9c9fb] ${surfaceGradient} px-4 py-3`}>
      <div className="flex flex-col items-center justify-center text-center">
        <img data-component="ProfitHeroCardImage" src="/egg/media/icons/sales-green.png" alt="" className="h-28 w-auto object-contain" />
        <div data-component="ProfitHeroCardValue" className="mt-3 text-[2.2rem] font-bold tracking-tight text-emerald-500">
          +£13.25
        </div>
      </div>
    </ShellCard>
  );
}

function RollingLayRateCard() {
  const bars = [8, 10, 7, 11, 9, 6, 10, 8, 7, 11, 9, 10, 6, 8];

  return (
    <ShellCard className={`border border-[#d9c9fb] ${surfaceGradient} p-3`}>
      <div>
        <div className="m-0 text-[1.2rem] font-bold uppercase text-[#6f4bb8]">Rollin' 14 Days Lays</div>
      </div>
      <div className="mt-2 flex h-44 items-end gap-2">
        {bars.map((bar, i) => (
          <div key={`lay-${i}`} className="flex flex-1 flex-col items-center gap-1">
            <div className="flex w-full items-end justify-center rounded-t-[var(--ui-radius)] bg-gradient-to-t from-violet-500 to-fuchsia-400" style={{ height: `${bar * 12}px` }} />
            <span className="text-xs font-medium text-slate-400">{bar}</span>
          </div>
        ))}
      </div>
    </ShellCard>
  );
}

function CalendarCard() {
  const weekdays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const filters = ['Eggs', 'Chicks', 'Sales', 'Expenses'];
  const days = [
    [null, null, null, null, null, null, { day: 1 }],
    [{ day: 2 }, { day: 3 }, { day: 4 }, { day: 5 }, { day: 6 }, { day: 7 }, { day: 8 }],
    [{ day: 9, value: 6, type: 'eggs' }, { day: 10 }, { day: 11 }, { day: 12 }, { day: 13 }, { day: 14 }, { day: 15 }],
    [{ day: 16, value: 4, type: 'chicks' }, { day: 17 }, { day: 18 }, { day: 19, value: 3, type: 'sales' }, { day: 20 }, { day: 21 }, { day: 22 }],
    [{ day: 23, value: 2, type: 'expenses' }, { day: 24 }, { day: 25 }, { day: 26 }, { day: 27 }, { day: 28, selected: true }, { day: 29 }],
    [{ day: 30 }, { day: 31 }, null, null, null, null, null],
  ];

  return (
    <ShellCard className={`border border-[#d9c9fb] ${surfaceGradient} p-3`}>
      <div className="flex items-center justify-between gap-3">
        <button className="rounded-[var(--ui-radius)] bg-white/80 px-3 py-2 text-[1rem] font-bold text-[#6f4bb8] shadow-sm">&lt;</button>
        <div className="m-0 text-[1.56rem] font-bold uppercase text-[#6f4bb8]">March</div>
        <button className="rounded-[var(--ui-radius)] bg-white/80 px-3 py-2 text-[1rem] font-bold text-[#6f4bb8] shadow-sm">&gt;</button>
      </div>

      <div className="mt-4 flex items-center justify-between gap-2">
        {filters.map((filter, index) => (
          <button
            key={filter}
            className={[
              'min-h-[31px] flex-1 whitespace-nowrap rounded-[var(--ui-radius)] px-3 py-[0.35rem] text-[0.9rem] font-semibold shadow-sm',
              index === 0 ? 'bg-[#7c3aed] text-white' : 'bg-white/80 text-[#8f79c6]',
            ].join(' ')}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-7 gap-2 text-center text-[0.8rem] font-semibold uppercase text-[#c7b2f7]">
        {weekdays.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="mt-2 space-y-2">
        {days.map((week, weekIndex) => (
          <div key={weekIndex} className="grid grid-cols-7 gap-2">
            {week.map((cell, cellIndex) => {
              if (!cell) return <div key={cellIndex} className="h-[4.2rem]" />;

              const hasEntry = typeof cell.value !== 'undefined';
              const isSelected = Boolean(cell.selected);

              return (
                <div
                  key={cellIndex}
                  className={[
                    'h-[4.2rem] rounded-[var(--ui-radius)] px-2 py-1 flex flex-col items-center',
                    isSelected
                      ? 'border-2 border-[#7c3aed] bg-[#7c3aed] text-white shadow-[0_10px_24px_rgba(124,58,237,0.28)]'
                      : hasEntry
                        ? 'border-2 border-[#876BC2] bg-white text-[#6f4bb8]'
                        : 'border border-[#ece3ff] bg-white/90 text-[#c7b2f7]',
                  ].join(' ')}
                >
                  <div className={`w-full text-center text-[1.09rem] font-medium leading-none ${isSelected ? 'text-white/90' : 'text-[#9E9E9E]'}`}>{cell.day}</div>
                  <div className="flex flex-1 items-center justify-center">
                    {hasEntry ? (
                      <div className={`text-[1.55rem] font-bold leading-none ${isSelected ? 'text-white' : 'text-[#6f4bb8]'}`}>{cell.value}</div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between gap-2">
        <button className="min-h-[31px] flex-1 whitespace-nowrap rounded-[var(--ui-radius)] px-3 py-[0.35rem] text-[0.9rem] font-semibold bg-white/80 text-[#8f79c6] shadow-sm">1 week</button>
        <button className="min-h-[31px] flex-1 whitespace-nowrap rounded-[var(--ui-radius)] px-3 py-[0.35rem] text-[0.9rem] font-semibold bg-white/80 text-[#8f79c6] shadow-sm">2 weeks</button>
        <button className="min-h-[31px] flex-1 whitespace-nowrap rounded-[var(--ui-radius)] px-3 py-[0.35rem] text-[0.9rem] font-semibold bg-[#7c3aed] text-white shadow-sm">1 month</button>
      </div>
    </ShellCard>
  );
}

function BottomNavMock({ menuOpen, setMenuOpen, closeSettingsNav, openChicksModal, openEggsModal, openMedsModal, openExpenseModal }: { menuOpen: boolean; setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>; closeSettingsNav: () => void; openChicksModal: () => void; openEggsModal: () => void; openMedsModal: () => void; openExpenseModal: () => void }) {
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
      <div className="fixed bottom-0 left-0 right-0 z-50 overflow-visible">
        <div className="relative h-[4.8rem] overflow-visible border-t-[1.2px] border-slate-200 bg-white/95 backdrop-blur-[2px]">
          <div className="absolute left-1/2 bottom-0 z-[60] flex -translate-x-1/2 flex-col items-center gap-3">
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
              <img src="/egg/media/icons/big-egg-button.png" alt="Add" className="block h-full w-full object-contain" />
            </button>
          </div>

          <div className="relative z-10 mx-auto grid h-full max-w-[32rem] grid-cols-[1fr_1fr_5.5rem_1fr_1fr] items-center gap-0 px-4 text-center">
              <button className="flex h-full justify-self-start flex-col items-center justify-center text-[#8b5cf6]">
                <img src="/egg/media/icons/nav-home.png" alt="" className="h-[2.375rem] w-[2.375rem] object-contain" />
                <span className="hidden text-[0.8rem] font-bold uppercase tracking-wide">Home</span>
              </button>
              <a href="/egg/chicks" className="flex h-full justify-self-start flex-col items-center justify-center text-[#c4b2f4]">
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

export default function ComponentsShowcase() {
  const [headerHidden, setHeaderHidden] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [bottomNavOpen, setBottomNavOpen] = useState(false);
  const [chicksModalOpen, setChicksModalOpen] = useState(false);
  const [eggsModalOpen, setEggsModalOpen] = useState(false);
  const [eggCount, setEggCount] = useState(7);
  const [layDate, setLayDate] = useState('2026-03-31');
  const [anticipatedDate, setAnticipatedDate] = useState('2026-04-20');
  const [selectedHen, setSelectedHen] = useState('Willow');
  const [noteAdded, setNoteAdded] = useState('');
  const [tempOpen, setTempOpen] = useState(false);
  const [selectedTemp, setSelectedTemp] = useState('20.0°C');
  const [photoAdded, setPhotoAdded] = useState(false);
  const [photoMiniModalOpen, setPhotoMiniModalOpen] = useState(false);
  const [photoZoom, setPhotoZoom] = useState(1);
  const [photoOffset, setPhotoOffset] = useState(0);
  const [notesOpen, setNotesOpen] = useState(false);
  const [editChicksModalOpen, setEditChicksModalOpen] = useState(false);
  const [editPhotoAdded, setEditPhotoAdded] = useState(true);
  const [editPhotoMiniModalOpen, setEditPhotoMiniModalOpen] = useState(false);
  const [editNoteOpen, setEditNoteOpen] = useState(false);
  const [editNoteAdded, setEditNoteAdded] = useState('Strong shells, one late hatchling, keep an eye on humidity.');
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [eggStates, setEggStates] = useState<number[]>([1, 1, 1, 1, 1, 2, 0, 0, 0]);
  const [medsModalOpen, setMedsModalOpen] = useState(false);
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
  const [expenseModalOpen, setExpenseModalOpen] = useState(false);
  const [expenseItem, setExpenseItem] = useState('');
  const [expenseDate, setExpenseDate] = useState('2026-04-01');
  const [expenseDestination, setExpenseDestination] = useState('Coop');
  const [expenseCostDigits, setExpenseCostDigits] = useState('');
  const [expenseCostModalOpen, setExpenseCostModalOpen] = useState(false);
  const [expenseItemFocused, setExpenseItemFocused] = useState(false);
  const [expenseTags, setExpenseTags] = useState(['Layer feed', 'Bedding', 'Coop repair', 'Misc']);
  const [expensePhotoAdded, setExpensePhotoAdded] = useState(false);
  const [expensePhotoMiniModalOpen, setExpensePhotoMiniModalOpen] = useState(false);

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
    const next = new Date(layDate);
    if (!Number.isNaN(next.getTime())) {
      next.setDate(next.getDate() + 20);
      setAnticipatedDate(next.toISOString().slice(0, 10));
    }
  }, [layDate]);

  const anyModalOpen = eggsModalOpen || chicksModalOpen || medsModalOpen || expenseModalOpen || expenseCostModalOpen || photoMiniModalOpen || medPhotoMiniModalOpen || expensePhotoMiniModalOpen || editChicksModalOpen || editPhotoMiniModalOpen || deleteConfirmOpen;

  useEffect(() => {
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
  }, [anyModalOpen]);

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

      {eggsModalOpen ? (
        <div className="fixed inset-0 z-[70] flex items-end justify-center bg-[#2b124f]/28 p-2 backdrop-blur-[2px] sm:items-center sm:p-4">
          <div className={`max-h-[92vh] w-full max-w-[36rem] overflow-y-auto rounded-[var(--ui-radius)] border border-[#d9c9fb] ${surfaceGradient} p-4 text-[#6f4bb8] shadow-[0_20px_50px_rgba(47,31,77,0.16)] animate-[fadeSlideUp_220ms_ease-out]`}>
            <div className="flex items-start justify-between gap-4">
              <div className="text-[2.05rem] font-black italic leading-none tracking-tight text-[#6f4bb8]">Add Eggs</div>
              <button type="button" className="text-[2.2rem] leading-none text-[#8c79bb]" onClick={() => setEggsModalOpen(false)}>×</button>
            </div>

            <div className="mt-4 space-y-4">
              <div>
                <div className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <button type="button" className="h-11 w-11 shrink-0 rounded-[var(--ui-radius)] bg-[#f3edff] text-[1.4rem] font-bold text-[#6f4bb8]" onClick={() => setEggCount((v) => Math.max(1, v - 1))}>−</button>
                    <input type="range" min="1" max="24" value={eggCount} onChange={(e) => setEggCount(Number(e.target.value))} className="h-2 flex-1 accent-[#6f4bb8]" />
                    <button type="button" className="h-11 w-11 shrink-0 rounded-[var(--ui-radius)] bg-[#f3edff] text-[1.4rem] font-bold text-[#6f4bb8]" onClick={() => setEggCount((v) => Math.min(24, v + 1))}>+</button>
                    <div className="min-w-[3rem] text-right text-[2.6rem] font-black leading-none text-[#6f4bb8]">{eggCount}</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <label className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
                  <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Date laid</div>
                  <input type="date" value={layDate} onChange={(e) => setLayDate(e.target.value)} className="mt-2 w-full bg-transparent text-[0.98rem] font-semibold text-[#6f4bb8] outline-none" />
                </label>
                <label className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
                  <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Best before</div>
                  <input type="date" value={anticipatedDate} onChange={(e) => setAnticipatedDate(e.target.value)} className="mt-2 w-full bg-transparent text-[0.98rem] font-semibold text-[#6f4bb8] outline-none" />
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
                <button type="button" className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 text-[1rem] font-semibold text-[#6f4bb8] shadow-sm" onClick={() => setNotesOpen(true)}>{noteAdded ? 'Edit notes' : 'Notes'}</button>
              </div>

              {noteAdded && !notesOpen ? (
                <div className="w-full rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 text-[0.98rem] text-[#8c79bb] shadow-sm">{noteAdded}</div>
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
                    <span className="text-[#8c79bb]">{tempOpen ? '−' : '+'}</span>
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
      ) : null}

      {chicksModalOpen ? (
        <div className="fixed inset-0 z-[70] flex items-end justify-center bg-[#2b124f]/28 p-2 backdrop-blur-[2px] sm:items-center sm:p-4">
          <div className={`max-h-[92vh] w-full max-w-[36rem] overflow-y-auto rounded-[var(--ui-radius)] border border-[#d9c9fb] ${surfaceGradient} p-4 text-[#6f4bb8] shadow-[0_20px_50px_rgba(47,31,77,0.16)] animate-[fadeSlideUp_220ms_ease-out]`}>
            <div className="flex items-start justify-between gap-4">
              <div className="text-[2.05rem] font-black italic leading-none tracking-tight text-[#6f4bb8]">Add Chicks</div>
              <button type="button" className="text-[2.2rem] leading-none text-[#8c79bb]" onClick={() => setChicksModalOpen(false)}>×</button>
            </div>

            <div className="mt-4 space-y-4">
              <div>
                <div className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <button type="button" className="h-11 w-11 shrink-0 rounded-[var(--ui-radius)] bg-[#f3edff] text-[1.4rem] font-bold text-[#6f4bb8]" onClick={() => setEggCount((v) => Math.max(1, v - 1))}>−</button>
                    <input type="range" min="1" max="24" value={eggCount} onChange={(e) => setEggCount(Number(e.target.value))} className="h-2 flex-1 accent-[#6f4bb8]" />
                    <button type="button" className="h-11 w-11 shrink-0 rounded-[var(--ui-radius)] bg-[#f3edff] text-[1.4rem] font-bold text-[#6f4bb8]" onClick={() => setEggCount((v) => Math.min(24, v + 1))}>+</button>
                    <div className="min-w-[3rem] text-right text-[2.6rem] font-black leading-none text-[#6f4bb8]">{eggCount}</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <label className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
                  <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Date laid</div>
                  <input type="date" value={layDate} onChange={(e) => setLayDate(e.target.value)} className="mt-2 w-full bg-transparent text-[0.98rem] font-semibold text-[#6f4bb8] outline-none" />
                </label>
                <label className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
                  <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Hatch due</div>
                  <input type="date" value={anticipatedDate} onChange={(e) => setAnticipatedDate(e.target.value)} className="mt-2 w-full bg-transparent text-[0.98rem] font-semibold text-[#6f4bb8] outline-none" />
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
                <button type="button" className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 text-[1rem] font-semibold text-[#6f4bb8] shadow-sm" onClick={() => setNotesOpen(true)}>{noteAdded ? 'Edit notes' : 'Notes'}</button>
              </div>

              {noteAdded && !notesOpen ? (
                <div className="w-full rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 text-[0.98rem] text-[#8c79bb] shadow-sm">{noteAdded}</div>
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
                    <span className="text-[#8c79bb]">{tempOpen ? '−' : '+'}</span>
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
      ) : null}

      {medsModalOpen ? (
        <div className="fixed inset-0 z-[70] flex items-end justify-center bg-[#2b124f]/28 p-2 backdrop-blur-[2px] sm:items-center sm:p-4">
          <div className={`max-h-[92vh] w-full max-w-[36rem] overflow-y-auto rounded-[var(--ui-radius)] border border-[#d9c9fb] ${surfaceGradient} p-4 text-[#6f4bb8] shadow-[0_20px_50px_rgba(47,31,77,0.16)] animate-[fadeSlideUp_220ms_ease-out]`}>
            <div className="flex items-start justify-between gap-4">
              <div className="text-[2.05rem] font-black italic leading-none tracking-tight text-[#6f4bb8]">Add Meds</div>
              <button type="button" className="text-[2.2rem] leading-none text-[#8c79bb]" onClick={() => setMedsModalOpen(false)}>×</button>
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
                  <input type="date" value={medDate} onChange={(e) => setMedDate(e.target.value)} className="mt-2 w-full bg-transparent text-[0.98rem] font-semibold text-[#6f4bb8] outline-none" />
                </label>
                <label className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
                  <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Add reminder</div>
                  <input type="date" value={medReminderDate} onChange={(e) => { setMedReminderDate(e.target.value); setMedReminderTouched(true); }} className={`mt-2 w-full bg-transparent text-[0.98rem] font-semibold outline-none ${medReminderTouched ? 'text-[#6f4bb8]' : 'text-[#d7d0fb]'}`} />
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
                            className={`flex items-center justify-between rounded-[var(--ui-radius)] border px-3 py-3 text-left text-[0.98rem] font-semibold shadow-sm ${active ? 'border-[#6f4bb8] bg-[#f3edff] text-[#6f4bb8]' : 'border-[#e7ddfb] bg-white text-[#8c79bb]'}`}
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
      ) : null}

      {expenseModalOpen ? (
        <div className="fixed inset-0 z-[70] flex items-end justify-center bg-[#2b124f]/28 p-2 backdrop-blur-[2px] sm:items-center sm:p-4">
          <div className={`max-h-[92vh] w-full max-w-[36rem] overflow-y-auto rounded-[var(--ui-radius)] border border-[#d9c9fb] ${surfaceGradient} p-4 text-[#6f4bb8] shadow-[0_20px_50px_rgba(47,31,77,0.16)] animate-[fadeSlideUp_220ms_ease-out]`}>
            <div className="flex items-start justify-between gap-4">
              <div className="text-[2.05rem] font-black italic leading-none tracking-tight text-[#6f4bb8]">Add an Expense</div>
              <button type="button" className="text-[2.2rem] leading-none text-[#8c79bb]" onClick={() => setExpenseModalOpen(false)}>×</button>
            </div>

            <div className="mt-4 space-y-4">
              <div className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
                <div className="relative pr-8 pb-3">
                  <textarea value={expenseItem} onFocus={() => setExpenseItemFocused(true)} onBlur={() => setExpenseItemFocused(false)} onChange={(e) => setExpenseItem(e.target.value)} placeholder={expenseItemFocused ? '' : 'What are you buying?'} rows={2} className="w-full resize-none bg-transparent text-[1.1rem] font-normal leading-snug text-[#6f4bb8] outline-none placeholder:font-normal placeholder:text-[#b09bdb]" />
                  <button
                    type="button"
                    aria-label="Add current text as regular expense"
                    className="absolute right-0 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-[#e7ddfb] bg-[#f8f5ff] text-[0.9rem] font-semibold text-[#8c79bb]"
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
                  <button type="button" className="rounded-full border border-[#e7ddfb] bg-[#f8f5ff] px-3 py-1.5 text-[0.82rem] font-semibold text-[#8c79bb]" onClick={() => setExpenseItem((prev) => prev ? `${prev}${prev.endsWith(' ') ? '' : ' '}& ` : '& ')}>&</button>
                  {expenseTags.filter((item) => !expenseItem.includes(item)).map((item) => (
                    <button key={item} type="button" className="rounded-full border border-[#e7ddfb] bg-[#f8f5ff] px-3 py-1.5 text-[0.82rem] font-semibold text-[#8c79bb]" onClick={() => setExpenseItem((prev) => prev ? `${prev}${prev.endsWith(' ') ? '' : ' '}${item} ` : `${item} `)}>{item}</button>
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
                  <input type="date" value={expenseDate} onChange={(e) => setExpenseDate(e.target.value)} className="mt-2 w-full bg-transparent text-[0.98rem] font-semibold text-[#6f4bb8] outline-none" />
                </label>
              </div>

              <div className="grid grid-cols-[0.7fr_1fr] gap-3 items-start">
                <button type="button" className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 text-left shadow-sm" onClick={() => setExpenseCostModalOpen(true)}>
                  <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Cost</div>
                  <div className="mt-2 text-[1.2rem] font-semibold text-[#6f4bb8]">£{expenseCostDigits ? `${expenseCostDigits.padStart(3, '0').slice(0, -2) || '0'}.${expenseCostDigits.padStart(2, '0').slice(-2)}` : '0.00'}</div>
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
      ) : null}

      {expenseCostModalOpen ? (
        <div className="fixed inset-0 z-[75] flex items-center justify-center bg-[#2b124f]/35 p-4 backdrop-blur-[2px]">
          <div className="w-full max-w-[22rem] rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white p-4 shadow-[0_20px_50px_rgba(47,31,77,0.16)]">
            <div className="flex items-start justify-between gap-4">
              <div className="text-[1.25rem] font-bold text-[#6f4bb8]">Enter cost</div>
              <button type="button" className="text-[2rem] leading-none text-[#8c79bb]" onClick={() => setExpenseCostModalOpen(false)}>×</button>
            </div>
            <div className="mt-4 rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-[#f8f5ff] px-4 py-4 text-center text-[2rem] font-semibold text-[#6f4bb8]">
              £{expenseCostDigits ? `${expenseCostDigits.padStart(3, '0').slice(0, -2) || '0'}.${expenseCostDigits.padStart(2, '0').slice(-2)}` : '0.00'}
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
        <div className="fixed inset-0 z-[75] flex items-center justify-center bg-[#2b124f]/35 p-4 backdrop-blur-[2px]">
          <div className="w-full max-w-[24rem] rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white p-4 shadow-[0_20px_50px_rgba(47,31,77,0.16)]">
            <div className="flex items-start justify-between gap-4">
              <div className="text-[1.25rem] font-bold text-[#6f4bb8]">Photograph expense</div>
              <button type="button" className="text-[2rem] leading-none text-[#8c79bb]" onClick={() => setExpensePhotoMiniModalOpen(false)}>×</button>
            </div>
            <div className="mt-4 flex justify-center">
              <div className="relative h-[11rem] w-full max-w-[14rem] overflow-hidden rounded-[1rem] border-2 border-[#e7ddfb] bg-[#f3edff]">
                <div className="absolute inset-0 flex items-center justify-center text-center text-[0.95rem] font-semibold text-[#8c79bb]" style={{ transform: `translateX(${photoOffset}px) scale(${photoZoom})` }}>
                  Expense photo preview
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
                <button type="button" className="rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white px-4 py-3 text-[1rem] font-semibold text-[#6f4bb8] shadow-sm" onClick={() => setExpensePhotoAdded(true)}>Upload</button>
                <button type="button" className="rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white px-4 py-3 text-[1rem] font-semibold text-[#6f4bb8] shadow-sm" onClick={() => setExpensePhotoAdded(true)}>Take photo</button>
              </div>
              <button type="button" className="w-full rounded-[var(--ui-radius)] bg-[#6f4bb8] px-5 py-3 text-[1rem] font-semibold text-white shadow-[0_10px_24px_rgba(47,31,77,0.14)]" onClick={() => { setExpensePhotoAdded(true); setExpensePhotoMiniModalOpen(false); }}>Save photo</button>
            </div>
          </div>
        </div>
      ) : null}

      {medPhotoMiniModalOpen ? (
        <div className="fixed inset-0 z-[75] flex items-center justify-center bg-[#2b124f]/35 p-4 backdrop-blur-[2px]">
          <div className="w-full max-w-[24rem] rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white p-4 shadow-[0_20px_50px_rgba(47,31,77,0.16)]">
            <div className="flex items-start justify-between gap-4">
              <div className="text-[1.25rem] font-bold text-[#6f4bb8]">Photograph med</div>
              <button type="button" className="text-[2rem] leading-none text-[#8c79bb]" onClick={() => setMedPhotoMiniModalOpen(false)}>×</button>
            </div>
            <div className="mt-4 flex justify-center">
              <div className="relative h-[11rem] w-full max-w-[14rem] overflow-hidden rounded-[1rem] border-2 border-[#e7ddfb] bg-[#f3edff]">
                <div className="absolute inset-0 flex items-center justify-center text-center text-[0.95rem] font-semibold text-[#8c79bb]" style={{ transform: `translateX(${photoOffset}px) scale(${photoZoom})` }}>
                  Med photo preview
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
                <button type="button" className="rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white px-4 py-3 text-[1rem] font-semibold text-[#6f4bb8] shadow-sm" onClick={() => setMedPhotoAdded(true)}>Upload</button>
                <button type="button" className="rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white px-4 py-3 text-[1rem] font-semibold text-[#6f4bb8] shadow-sm" onClick={() => setMedPhotoAdded(true)}>Take photo</button>
              </div>
              <button type="button" className="w-full rounded-[var(--ui-radius)] bg-[#6f4bb8] px-5 py-3 text-[1rem] font-semibold text-white shadow-[0_10px_24px_rgba(47,31,77,0.14)]" onClick={() => { setMedPhotoAdded(true); setMedPhotoMiniModalOpen(false); }}>Save photo</button>
            </div>
          </div>
        </div>
      ) : null}

      {photoMiniModalOpen ? (
        <div className="fixed inset-0 z-[75] flex items-center justify-center bg-[#2b124f]/35 p-4 backdrop-blur-[2px]">
          <div className="w-full max-w-[24rem] rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white p-4 shadow-[0_20px_50px_rgba(47,31,77,0.16)]">
            <div className="flex items-start justify-between gap-4">
              <div className="text-[1.25rem] font-bold text-[#6f4bb8]">Edit photo</div>
              <button type="button" className="text-[2rem] leading-none text-[#8c79bb]" onClick={() => setPhotoMiniModalOpen(false)}>×</button>
            </div>
            <div className="mt-4 flex justify-center">
              <div className="relative h-[11rem] w-[11rem] overflow-hidden rounded-full border-2 border-[#e7ddfb] bg-[#f3edff]">
                <div className="absolute inset-0 flex items-center justify-center text-center text-[0.95rem] font-semibold text-[#8c79bb]" style={{ transform: `translateX(${photoOffset}px) scale(${photoZoom})` }}>
                  Photo preview
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
                <button type="button" className="rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white px-4 py-3 text-[1rem] font-semibold text-[#6f4bb8] shadow-sm" onClick={() => setPhotoAdded(true)}>Upload</button>
                <button type="button" className="rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white px-4 py-3 text-[1rem] font-semibold text-[#6f4bb8] shadow-sm" onClick={() => setPhotoAdded(true)}>Take photo</button>
              </div>
              <button type="button" className="w-full rounded-[var(--ui-radius)] bg-[#6f4bb8] px-5 py-3 text-[1rem] font-semibold text-white shadow-[0_10px_24px_rgba(47,31,77,0.14)]" onClick={() => { setPhotoAdded(true); setPhotoMiniModalOpen(false); }}>Save photo</button>
            </div>
          </div>
        </div>
      ) : null}

      {editChicksModalOpen ? (
        <div className="fixed inset-0 z-[70] flex items-end justify-center bg-[#2b124f]/28 p-2 backdrop-blur-[2px] sm:items-center sm:p-4">
          <div className={`max-h-[92vh] w-full max-w-[36rem] overflow-y-auto rounded-[var(--ui-radius)] border border-[#d9c9fb] ${surfaceGradient} p-4 text-[#6f4bb8] shadow-[0_20px_50px_rgba(47,31,77,0.16)] animate-[fadeSlideUp_220ms_ease-out]`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-[2.05rem] font-black italic leading-none tracking-tight text-[#6f4bb8]">Edit Chicks</div>
              </div>
              <button type="button" className="text-[2.2rem] leading-none text-[#8c79bb]" onClick={() => setEditChicksModalOpen(false)}>×</button>
            </div>

            <div className="mt-5 space-y-4">
              <div className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-4 shadow-sm">
                <div className="mb-3 text-[0.9rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Chicks Hatched</div>
                <div className="grid grid-cols-5 gap-3">
                  {eggStates.map((state, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`flex h-[3.2rem] w-full items-center justify-center rounded-[var(--ui-radius)] border shadow-sm ${state === 1 ? 'border-[#d9c9fb] bg-[#eefbf3]' : state === 2 ? 'border-[#f5c2cf] bg-[#fff1f4]' : 'border-[#e7ddfb] bg-white'}`}
                      onClick={() => setEggStates((prev) => prev.map((value, i) => i === index ? (value + 1) % 3 : value))}
                    >
                      <span className="text-[1.5rem]">{state === 1 ? '🐣' : state === 2 ? '💀' : '🥚'}</span>
                    </button>
                  ))}
                </div>
                <div className="mt-3 text-center text-[0.98rem] text-[#8c79bb]">
                  {eggStates.filter((v) => v === 1).length} hatched • {eggStates.filter((v) => v === 2).length} perished • {eggStates.filter((v) => v === 0).length} still brewing
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 items-start">
                <div className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-4 shadow-sm">
                  <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Photo</div>
                  <div className="mt-3 flex justify-center">
                    <button type="button" className="flex h-[7.5rem] w-[7.5rem] items-center justify-center rounded-full border border-dashed border-[#d9c9fb] bg-[#f8f5ff] text-center text-[0.95rem] font-semibold text-[#8c79bb]" onClick={() => setEditPhotoMiniModalOpen(true)}>
                      {editPhotoAdded ? 'Tap to edit photo' : 'Tap to add photo'}
                    </button>
                  </div>
                </div>
                <div className="space-y-3">
                  <button type="button" className="w-full rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 text-[1rem] font-semibold text-[#6f4bb8] shadow-sm" onClick={() => setEditNoteOpen(true)}>{editNoteAdded ? 'Edit notes' : 'Notes'}</button>
                  {editNoteAdded ? (
                    <div className="w-full rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 text-[0.98rem] text-[#8c79bb] shadow-sm">{editNoteAdded}</div>
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
                <button type="button" className="w-full rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white/85 px-5 py-4 text-[1.05rem] font-semibold text-[#6f4bb8] shadow-sm" onClick={() => setEditChicksModalOpen(false)}>Cancel</button>
                <button type="button" className="w-full rounded-[var(--ui-radius)] bg-[#6f4bb8] px-5 py-4 text-[1.05rem] font-semibold text-white shadow-[0_10px_24px_rgba(47,31,77,0.14)]">Update</button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {editPhotoMiniModalOpen ? (
        <div className="fixed inset-0 z-[75] flex items-center justify-center bg-[#2b124f]/35 p-4 backdrop-blur-[2px]">
          <div className="w-full max-w-[24rem] rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white p-4 shadow-[0_20px_50px_rgba(47,31,77,0.16)]">
            <div className="flex items-start justify-between gap-4">
              <div className="text-[1.25rem] font-bold text-[#6f4bb8]">Edit photo</div>
              <button type="button" className="text-[2rem] leading-none text-[#8c79bb]" onClick={() => setEditPhotoMiniModalOpen(false)}>×</button>
            </div>
            <div className="mt-4 flex justify-center">
              <div className="relative h-[11rem] w-[11rem] overflow-hidden rounded-full border-2 border-[#e7ddfb] bg-[#f3edff]">
                <div className="absolute inset-0 flex items-center justify-center text-center text-[0.95rem] font-semibold text-[#8c79bb]" style={{ transform: `translateX(${photoOffset}px) scale(${photoZoom})` }}>
                  Photo preview
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
                <button type="button" className="rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white px-4 py-3 text-[1rem] font-semibold text-[#6f4bb8] shadow-sm" onClick={() => setEditPhotoAdded(true)}>Upload</button>
                <button type="button" className="rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white px-4 py-3 text-[1rem] font-semibold text-[#6f4bb8] shadow-sm" onClick={() => setEditPhotoAdded(true)}>Take photo</button>
              </div>
              <button type="button" className="w-full rounded-[var(--ui-radius)] bg-[#6f4bb8] px-5 py-3 text-[1rem] font-semibold text-white shadow-[0_10px_24px_rgba(47,31,77,0.14)]" onClick={() => { setEditPhotoAdded(true); setEditPhotoMiniModalOpen(false); }}>Save photo</button>
            </div>
          </div>
        </div>
      ) : null}

      {deleteConfirmOpen ? (
        <div className="fixed inset-0 z-[75] flex items-center justify-center bg-[#2b124f]/35 p-4 backdrop-blur-[2px]">
          <div className={`w-full max-w-[24rem] rounded-[var(--ui-radius)] border border-[#d9c9fb] ${surfaceGradient} p-4 text-[#6f4bb8] shadow-[0_20px_50px_rgba(47,31,77,0.16)]`}>
            <div className="text-[2.03rem] font-bold text-[#6f4bb8]">Delete clutch?</div>
            <div className="mt-2 text-[1.57rem] text-[#8c79bb]">Once deleted, clutches and their date cannot be brought back, please be sure.</div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button type="button" className="rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white/85 px-4 py-3 text-[1rem] font-semibold text-[#6f4bb8] shadow-sm" onClick={() => setDeleteConfirmOpen(false)}>Cancel</button>
              <button type="button" className="rounded-[var(--ui-radius)] bg-[#e85b7b] px-4 py-3 text-[1rem] font-semibold text-white shadow-[0_10px_24px_rgba(47,31,77,0.14)]" onClick={() => setDeleteConfirmOpen(false)}>Delete</button>
            </div>
          </div>
        </div>
      ) : null}

      <div className="mx-auto max-w-6xl px-4 pt-5 sm:px-6 lg:px-8">
        <h2 data-component="PageTitleText" className="text-[1.6rem] font-black italic leading-none tracking-tight text-[#6f4bb8] sm:text-[1.88rem]">
          This week, <span className="text-[#6f4bb8]">in a <span><span data-component="PageTitleStrikeWord" className="opacity-50 line-through">Nut</span>shell...</span></span>
        </h2>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-6 pb-40 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div>
            <ComponentLabel name="WeeklySummaryCard" />
            <div className="space-y-6">
              <WeeklySummaryCard />
              <WeeklySummaryCard
                trend="-8%"
                positive={false}
                headline={<>Your girls laid <span className="font-bold">76</span> eggs and earned you <span className="font-bold">£8.40</span> in profit!</>}
                subtext={<>Sales dipped a touch this week, but <span className="font-bold">Mabel</span> might still claw it back with some <span className="italic">egg-stra</span> hustle...</>}
              />
            </div>
          </div>

          <div>
            <ComponentLabel name="ProfitLossCard" />
            <ProfitLossCard />
          </div>

          <div>
            <ComponentLabel name="MiniStatCardHalf" />
            <div className="grid grid-cols-2 gap-6">
              <div>
                <MiniStatCardHalf title="Yokes Broke" value="12" icon="/egg/media/icons/1-fried.png" align="left" />
              </div>
              <div>
                <MiniStatCardHalf title="Buns Cooked" value="6" icon="/egg/media/icons/1-hatching.png" align="right" />
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <div className="sm:col-span-2 lg:col-span-2"><ComponentLabel name="HenCard" /></div>
            <div><HenCard name="Willow" coop="Willow House" eggs="24" note="66% Egg Bossing" medal="/egg/media/icons/gold.png" progress={66} nameColor="#FFCC01" /></div>
            <div><HenCard name="Dotty" coop="Speckled Coop" eggs="19" note="51% Egg Bossing" medal="/egg/media/icons/silver.png" progress={51} nameColor="#999999" /></div>
            <div><HenCard name="Mabel" coop="Back Garden Coop" eggs="16" note="46% Egg Bossing" medal="/egg/media/icons/bronze.png" progress={46} nameColor="#CC6602" /></div>
          </div>

          <div className="mt-6">
            <ComponentLabel name="RollingLayRateCard" />
            <RollingLayRateCard />
          </div>

          <div>
            <ComponentLabel name="CalendarCard" />
            <CalendarCard />
          </div>

          <div><ComponentLabel name="LocationProgressCard" /><ShellCard className={`border border-[#d9c9fb] ${surfaceGradient} p-3`}>
            <div>
              <div className="m-0 text-[1.2rem] font-bold uppercase text-[#6f4bb8]">It's not a competition...but...</div>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between gap-3 text-sm text-slate-500">
                <span>Eggstein Island</span>
                <span>78%</span>
              </div>
              <div className="mt-2 h-3 w-full overflow-hidden rounded-[var(--ui-radius)] bg-slate-200">
                <div className="h-full w-[78%] rounded-[var(--ui-radius)] bg-gradient-to-r from-violet-500 to-fuchsia-400" />
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between gap-3 text-sm text-slate-500">
                <span>Pecking Palace</span>
                <span>67%</span>
              </div>
              <div className="mt-2 h-3 w-full overflow-hidden rounded-[var(--ui-radius)] bg-slate-200">
                <div className="h-full w-[67%] rounded-[var(--ui-radius)] bg-gradient-to-r from-violet-500 to-fuchsia-400" />
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between gap-3 text-sm text-slate-500">
                <span>Cluck the Fuck Up</span>
                <span>59%</span>
              </div>
              <div className="mt-2 h-3 w-full overflow-hidden rounded-[var(--ui-radius)] bg-slate-200">
                <div className="h-full w-[59%] rounded-[var(--ui-radius)] bg-gradient-to-r from-violet-500 to-fuchsia-400" />
              </div>
            </div>
          </ShellCard></div>

          <div className="grid gap-6">
            <div><ComponentLabel name="WikiElements" /></div>
            <div><PunFactCard /></div>
            <div><WikiItemCard /></div>
            <div><WikiShowMoreCard /></div>
          </div>

          <div className="grid gap-6">
            <div><ComponentLabel name="Buttons" /></div>
            <div className="grid gap-4">
              <button type="button" className="w-full rounded-[var(--ui-radius)] bg-[#6f4bb8] px-6 py-4 text-center text-[1.1rem] font-semibold text-white shadow-[0_10px_24px_rgba(47,31,77,0.10)]">Full</button>
              <div className="grid grid-cols-2 gap-4">
                <button type="button" className="w-full rounded-[var(--ui-radius)] bg-[#6f4bb8] px-6 py-4 text-center text-[1.1rem] font-semibold text-white shadow-[0_10px_24px_rgba(47,31,77,0.10)]">Half</button>
                <button type="button" className="w-full rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white text-[#8c79bb] px-6 py-4 text-center text-[1.1rem] font-semibold shadow-[0_10px_24px_rgba(47,31,77,0.06)]">Half</button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <button type="button" className="w-full rounded-[var(--ui-radius)] bg-[#6f4bb8] px-4 py-4 text-center text-[1.1rem] font-semibold text-white shadow-[0_10px_24px_rgba(47,31,77,0.10)]">Third</button>
                <button type="button" className="w-full rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white text-[#8c79bb] px-4 py-4 text-center text-[1.1rem] font-semibold shadow-[0_10px_24px_rgba(47,31,77,0.06)]">Third</button>
                <button type="button" className="w-full rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white text-[#8c79bb] px-4 py-4 text-center text-[1.1rem] font-semibold shadow-[0_10px_24px_rgba(47,31,77,0.06)]">Third</button>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div><ComponentLabel name="FillEffects" /></div>
            <div><BlankProfileCard /></div>
          </div>

          <div className="grid gap-6">
            <div><ComponentLabel name="ProfileCards" /></div>
            <div className="grid grid-cols-2 gap-4">
              <div><HenCard name="Willow" coop="Willow House" eggs="24" note="AGE: 2" medal="/egg/media/icons/gold.png" progress={66} nameColor="#FFCC01" compact profileImage="/egg/media/hens/hen-1.png" profileBadge="gold" /></div>
              <div><HenCard name="Dotty" coop="Speckled Coop" eggs="19" note="AGE: 1" medal="/egg/media/icons/silver.png" progress={51} nameColor="#999999" compact profileImage="/egg/media/hens/hen-2.png" profileBadge="silver" /></div>
              <div><HenCard name="Mabel" coop="Back Garden Coop" eggs="16" note="AGE: 3" medal="/egg/media/icons/bronze.png" progress={46} nameColor="#CC6602" compact profileImage="/egg/media/hens/hen-3.png" profileBadge="bronze" /></div>
            </div>
          </div>

          <div className="grid gap-6">
            <div><ComponentLabel name="CoopCards" /></div>
            <div className="grid grid-cols-2 gap-4">
              <div><HenCard name="Willow House" coop="Willow House" eggs="38" note="North Field" medal="/egg/media/icons/gold.png" progress={66} nameColor="#6f4bb8" compact compactMode="coop" profileImage="/egg/media/coops/coop-1.png" profileBadge="gold" /></div>
              <div><HenCard name="Speckled Coop" coop="Speckled Coop" eggs="24" note="Back Orchard" medal="/egg/media/icons/silver.png" progress={51} nameColor="#6f4bb8" compact compactMode="coop" profileImage="/egg/media/coops/coop-2.png" profileBadge="silver" /></div>
              <div><HenCard name="Garden Roost" coop="Garden Roost" eggs="31" note="South Run" medal="/egg/media/icons/bronze.png" progress={46} nameColor="#6f4bb8" compact compactMode="coop" profileImage="/egg/media/coops/coop-3.png" profileBadge="bronze" /></div>
            </div>
          </div>

          <div className="grid gap-6">
            <div><ComponentLabel name="ChickCards" /></div>
            <div className="grid gap-6">
              <ChickCard count="7" started="19 Mar 2026" status="Failed" progress={58} daysLeft="9 days" hatched="5" brewing="2" temperature="20.00°C" onEdit={() => setEditChicksModalOpen(true)} onDelete={() => setDeleteConfirmOpen(true)} />
              <ChickCard count="12" started="08 Apr 2026" status="Incubating" progress={72} daysLeft="4 days" hatched="8" brewing="4" temperature="20.50°C" onEdit={() => setEditChicksModalOpen(true)} onDelete={() => setDeleteConfirmOpen(true)} />
              <ChickCard count="4" started="02 Apr 2026" status="Complete" progress={100} daysLeft="0 days" hatched="3" brewing="0" temperature="19.80°C" onEdit={() => setEditChicksModalOpen(true)} onDelete={() => setDeleteConfirmOpen(true)} />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <div className="sm:col-span-2 lg:col-span-2"><ComponentLabel name="MiniStatCard" /></div>
            <div>
              <MiniStatCard label="Best coop today" value="Willow House" accent="bg-emerald-400" />
            </div>
            <div>
              <MiniStatCard label="Average per hen" value="0.83 eggs" accent="bg-pink-400" />
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="md:col-span-3"><ComponentLabel name="MetricCard" /></div>
          <div><MetricCard title="Collected today" value="18" subtitle="2 more than yesterday" tone="purple" translucent /></div>
          <div><MetricCard title="Weekly total" value="94" subtitle="Strong week so far" tone="pink" /></div>
          <div><MetricCard title="Sales this week" value="£42" subtitle="Fake money, real vibes" tone="gold" /></div>
        </div>
      </div>
      <BottomNavMock menuOpen={bottomNavOpen} setMenuOpen={setBottomNavOpen} closeSettingsNav={() => setSettingsOpen(false)} openChicksModal={() => setChicksModalOpen(true)} openEggsModal={() => setEggsModalOpen(true)} openMedsModal={() => setMedsModalOpen(true)} openExpenseModal={() => setExpenseModalOpen(true)} />
    </div>
  );
}
