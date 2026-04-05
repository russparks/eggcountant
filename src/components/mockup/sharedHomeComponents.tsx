import React, { useState } from 'react';
import { SURFACE_GRADIENT } from '../../constants';

const surfaceGradient = SURFACE_GRADIENT;

export function ShellCard({ children, className = '', surfaceGradient: gradientOverride = SURFACE_GRADIENT }: { children: React.ReactNode; className?: string; surfaceGradient?: string }) {
  const resolvedClassName = className.replaceAll(SURFACE_GRADIENT, gradientOverride);
  return <div className={`rounded-[var(--ui-radius)] bg-white shadow-[0_10px_30px_rgba(47,31,77,0.08)] border border-white/60 ${resolvedClassName}`}>{children}</div>;
}

export function WeeklySummaryCard({ trend = '+12%', positive = true, headline = <>Your girls laid <span className="font-bold">94</span> eggs and earned you <span className="font-bold">£13.25</span> in profit!</>, subtext = positive ? 'Willow continues to show egg-stra effort, if she had a hand she\'d deserve a high-five...' : 'Mabel might still claw it back with some egg-streme hustle, if she has it in her...' }: { trend?: string; positive?: boolean; headline?: React.ReactNode; subtext?: React.ReactNode }) {
  return (
    <ShellCard className={`overflow-hidden border border-[#d9c9fb] ${surfaceGradient} p-3 text-[#6f4bb8]`}>
      <div className="relative min-h-[120px]">
        <div data-component="WeeklySummaryCardTrendPill" className="relative float-right ml-2 mb-2 flex h-[5.4rem] w-[5.5rem] items-start justify-start overflow-hidden rounded-[var(--ui-radius)] bg-white/0 p-0 text-left shadow-none backdrop-blur-none">
          <div data-component="WeeklySummaryCardTrendValue" className={`relative text-[1.9rem] font-bold leading-none ${positive ? 'text-emerald-500' : 'text-rose-500'} sm:text-[1.6rem]`}>{trend}</div>
        </div>
        <h2 data-component="WeeklySummaryCardHeadline" className="text-[1.6rem] font-normal leading-tight text-[#6f4bb8]">{headline}</h2>
        <p data-component="WeeklySummaryCardSubtext" className="mt-2 max-w-[42rem] text-[1.215rem] font-medium leading-tight text-[#9E9E9E]">{subtext}</p>
        <div className="clear-both" />
      </div>
    </ShellCard>
  );
}

export function ProfitLossCard() {
  const profit = 13.25;
  const loss = 6.8;
  const net = profit - loss;
  const netPositive = net >= 0;

  return (
    <ShellCard surfaceGradient="bg-[linear-gradient(135deg,_#f1ecfb_0%,_#ffffff_58%,_#f3edff_100%)]" className={`border border-[#d9c9fb] ${surfaceGradient} p-3`}>
      <div className="rounded-[var(--ui-radius)] bg-white/0 px-4 pt-2 pb-4 shadow-none border border-transparent">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className={`m-0 text-[1.35rem] font-bold leading-tight ${netPositive ? 'text-emerald-500' : 'text-rose-500'}`}>Cluck Statement</div>
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

      <div className="mt-1 flex items-center justify-between gap-0 px-5">
        <div className="flex-1 ml-[30px]">
          <div className="text-[1.2675rem] font-bold leading-none text-[#9E9E9E]">+£13.25</div>
          <div className="hidden mt-[5px] text-[0.9rem] uppercase leading-none text-[#9E9E9E]">IN</div>
        </div>
        <div className="flex-1 mr-[30px] text-right">
          <div className="text-[1.2675rem] font-bold leading-none text-[#9E9E9E]">-£6.80</div>
          <div className="hidden mt-[5px] text-[0.9rem] uppercase leading-none text-[#9E9E9E]">OUT</div>
        </div>
      </div>
    </ShellCard>
  );
}

export function MiniStatCardHalf({
  title,
  value,
  icon,
  align,
  className = '',
  titleClassName = '',
  valueClassName = '',
  iconClassName = '',
}: {
  title: string;
  value: string;
  icon: string;
  align: 'left' | 'right';
  className?: string;
  titleClassName?: string;
  valueClassName?: string;
  iconClassName?: string;
}) {
  const isLeft = align === 'left';

  return (
    <ShellCard surfaceGradient="bg-[linear-gradient(135deg,_#f1ecfb_0%,_#ffffff_58%,_#f3edff_100%)]" className={`border border-[#d9c9fb] ${surfaceGradient} p-3 ${className}`}>
      <div className={isLeft ? 'text-left' : 'text-right'}>
        <div className={`m-0 text-[1.2rem] uppercase text-[#6f4bb8] ${titleClassName}`}>{title}</div>
      </div>
      <div className={`mt-1.5 flex items-center ${isLeft ? 'justify-between flex-row-reverse' : 'justify-between'}`}>
        <img src={icon} alt="" className={`h-[3.4rem] w-auto max-w-[34%] object-contain ${iconClassName}`} />
        <div className={`text-[3.25rem] font-bold text-[#6f4bb8] ${isLeft ? 'ml-3' : 'mr-3'} ${valueClassName}`}>{value}</div>
      </div>
    </ShellCard>
  );
}

export function HenCard({
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
      <ShellCard surfaceGradient="bg-[linear-gradient(135deg,_#f1ecfb_0%,_#ffffff_58%,_#f3edff_100%)]" className={`border border-[#d9c9fb] ${surfaceGradient} p-3`}>
        <div className="flex min-h-[3.4rem] w-full items-center justify-center overflow-hidden">
          <div className="m-0 line-clamp-2 w-full text-center text-[1.55rem] font-bold leading-none text-[#6f4bb8]">{name}</div>
        </div>
        <div className="relative mt-3 flex justify-center">
          {profileImage ? (
            <img src={profileImage} alt="" className="w-[92%] rounded-[var(--ui-radius)] object-contain drop-shadow-[0_8px_12px_rgba(47,31,77,0.12)]" />
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
          <div className="mt-[0.05rem] text-center text-[1.14rem] text-[#c4b2f4]">AGE: {note.replace('AGE: ', '')}</div>
        ) : null}
        <div className="mt-[0.05rem] text-center text-[0.9rem] uppercase text-[#9E9E9E]">{compactMode === 'coop' ? note : coop}</div>
        <hr className="mt-[0.35rem] border-0 border-t border-slate-200" />
        <div className="mt-[0.35rem] flex items-center justify-between gap-2 text-[1.326rem] font-bold leading-none text-[#9E9E9E]">
          <div className="flex items-center gap-2">
            <img src={compactMode === 'coop' ? '/egg/media/icons/ico-chick.png' : '/egg/media/icons/ico-egg.png'} alt="" className="h-[1.99rem] w-auto object-contain" />
            <span>x {eggs}</span>
          </div>
          <img src="/egg/media/icons/ico-edit.png" alt="" className="h-[1.99rem] w-auto object-contain" />
        </div>
      </ShellCard>
    );
  }

  return (
    <ShellCard surfaceGradient="bg-[linear-gradient(135deg,_#f1ecfb_0%,_#ffffff_58%,_#f3edff_100%)]" className={`border border-[#d9c9fb] ${surfaceGradient} p-3`}>
      <div className="flex items-center justify-center gap-3 text-center">
        <div className="min-w-0 flex-1">
          <div className="m-0 w-full text-center font-black italic leading-none tracking-tight" style={{ color: nameColor, fontSize: `${Math.max(0.88, 1.36 - Math.max(0, name.length - 10) * 0.045)}rem` }}>{name}</div>
        </div>
      </div>
      <hr className="mt-2 border-0 border-t border-slate-200" />
      <div className="mt-[0.15rem] flex items-center justify-center gap-3 text-center">
        <div className="text-[1.03rem] font-medium leading-tight text-[#9E9E9E]">{coop}</div>
      </div>
      <div className="mt-3 flex items-center justify-between gap-3 text-[1.326rem] font-bold leading-none text-[#9E9E9E]">
        <div className="flex items-center gap-2">
          <img src={medal} alt="" className="h-[1.221rem] w-auto object-contain" />
          <span>x {eggs}</span>
        </div>
        <div className="text-[1.326rem] font-bold leading-none" style={{ color: nameColor }}>{progress}%</div>
      </div>
    </ShellCard>
  );
}

export function RollingLayRateCard() {
  const bars = [8, 10, 7, 11, 9, 6, 10];
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  return (
    <ShellCard surfaceGradient="bg-[linear-gradient(135deg,_#f1ecfb_0%,_#ffffff_58%,_#f3edff_100%)]" className={`border border-[#d9c9fb] ${surfaceGradient} p-3`}>
      <div>
        <div className="m-0 text-[1.2rem] font-bold uppercase text-[#6f4bb8]">This Week in Eggs...</div>
      </div>
      <div className="mt-4 flex h-44 items-end gap-2">
        {bars.map((bar, i) => {
          const isToday = i === bars.length - 1;
          return (
            <div key={`lay-${i}`} className="flex flex-1 flex-col items-center gap-1">
              <div
                className="relative flex w-full items-end justify-center rounded-t-[var(--ui-radius)] bg-gradient-to-b from-[#6f4bb8] to-transparent transition-opacity"
                style={{ height: `${bar * 12}px`, opacity: isToday ? 1 : 0.42 }}
              >
                <span className="absolute top-2 text-[1rem] font-black leading-none text-white">{bar}</span>
              </div>
              <span className={`text-[1rem] font-black leading-none ${isToday ? 'text-[#6f4bb8]' : 'text-[#c4b2f4]'}`}>{days[i]}</span>
            </div>
          );
        })}
      </div>
    </ShellCard>
  );
}

export function PunFactCard({ mode = 'pun', text }: { mode?: 'pun' | 'fact'; text: string }) {
  const isPun = mode === 'pun';

  return (
    <ShellCard surfaceGradient="bg-[linear-gradient(135deg,_#f1ecfb_0%,_#ffffff_58%,_#f3edff_100%)]" className={`overflow-hidden border border-[#d9c9fb] ${surfaceGradient} p-3 text-[#6f4bb8]`}>
      <div className="grid grid-cols-[1fr_auto] gap-x-3 gap-y-2 items-start">
        <div className="text-[1.3rem] font-normal italic leading-tight text-[#6f4bb8]">
          “{text}”
        </div>
        <div className="flex flex-col shrink-0 gap-2 pt-1">
          <button
            type="button"
            className={`min-w-[3.6rem] rounded-[var(--ui-radius)] px-[0.62rem] py-[0.36rem] text-[0.72rem] font-semibold uppercase tracking-wide shadow-sm ${isPun ? 'bg-[#ece7f8] text-[#b7afcc]' : 'bg-[#6f4bb8] text-white'}`}
          >
            Pun
          </button>
          <button
            type="button"
            className={`min-w-[3.6rem] rounded-[var(--ui-radius)] px-[0.62rem] py-[0.36rem] text-[0.72rem] font-semibold uppercase tracking-wide shadow-sm ${!isPun ? 'bg-[#ece7f8] text-[#b7afcc]' : 'bg-[#6f4bb8] text-white'}`}
          >
            Fact
          </button>
        </div>
      </div>
    </ShellCard>
  );
}

export function WikiItemCard({
  title = 'Egg marketing standards',
  body = 'Explains egg marketing rules for producers, including when registration/stamping may apply and what information must be shown when selling direct or at markets.',
}: {
  title?: string;
  body?: string;
}) {
  return (
    <a href="#" target="_blank" rel="noreferrer" className="block">
      <ShellCard surfaceGradient="bg-[linear-gradient(135deg,_#f1ecfb_0%,_#ffffff_58%,_#f3edff_100%)]" className={`overflow-hidden border border-[#d9c9fb] ${surfaceGradient} p-3 text-[#6f4bb8]`}>
        <div className="text-[1.35rem] font-bold text-[#6f4bb8]">{title}</div>
        <div className="mt-[0.45rem] w-full text-[1.12rem] font-normal leading-tight text-[#6f4bb8]">
          {body}
        </div>
        <div className="mt-3 text-right text-[1.215rem] font-medium leading-tight text-[#9E9E9E]">Open article →</div>
      </ShellCard>
    </a>
  );
}

export function WikiShowMoreCard() {
  return (
    <a href="#" target="_blank" rel="noreferrer" className="block rounded-[var(--ui-radius)] bg-[#6f4bb8] p-3 text-center text-white shadow-[0_10px_24px_rgba(47,31,77,0.10)]">
      <div className="text-[1rem] font-bold text-white">Show more (45 remaining)</div>
    </a>
  );
}

export function EggToHenFooter() {
  return (
    <div className="flex items-start justify-center pt-4 px-6">
      <img src="/egg/media/icons/ico-egg-to-hen.png" alt="Hen Life" className="h-[4.48rem] w-auto object-contain" />
    </div>
  );
}

export function CalendarSummarySection() {
  return (
    <>
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
        <div className="text-[1.8rem] text-[#6f4bb8] text-center">
          Eggsecutive Summary
        </div>
      </div>

      <div className="mt-3">
        <WeeklySummaryCard />
      </div>
    </>
  );
}

export function CalendarCard() {
  const weekdays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const today = new Date();
  const [displayMonth, setDisplayMonth] = useState(today.getMonth());
  const [displayYear, setDisplayYear] = useState(today.getFullYear());
  const [selectedDay, setSelectedDay] = useState(today.getDate());
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const firstOfMonth = new Date(displayYear, displayMonth, 1);
  const daysInMonth = new Date(displayYear, displayMonth + 1, 0).getDate();
  const startOffset = (firstOfMonth.getDay() + 6) % 7;
  const totalSlots = Math.ceil((startOffset + daysInMonth) / 7) * 7;
  const slots = Array.from({ length: totalSlots }, (_, index) => {
    const day = index - startOffset + 1;
    return day > 0 && day <= daysInMonth ? day : null;
  });
  const weeks = Array.from({ length: totalSlots / 7 }, (_, weekIndex) => slots.slice(weekIndex * 7, weekIndex * 7 + 7));
  const fakeMonthData = Array.from({ length: daysInMonth }, (_, index) => {
    const day = index + 1;
    if (day > today.getDate()) {
      return { eggs: 0, chicks: 0, sales: 0, expenses: 0 };
    }
    if (day === Math.max(1, today.getDate() - 2)) {
      return { eggs: 0, chicks: 0, sales: 0, expenses: 0 };
    }
    return {
      eggs: 4 + ((day * 3) % 9),
      chicks: 1 + (day % 3),
      sales: Number((8 + ((day * 2.7) % 14)).toFixed(0)),
      expenses: Number((2 + ((day * 1.9) % 8)).toFixed(0)),
    };
  });
  const selectedMetrics = fakeMonthData[Math.max(0, selectedDay - 1)] || fakeMonthData[today.getDate() - 1] || fakeMonthData[0];

  return (
    <ShellCard surfaceGradient="bg-[linear-gradient(135deg,_#f1ecfb_0%,_#ffffff_58%,_#f3edff_100%)]" className={`border border-[#d9c9fb] ${surfaceGradient} p-3`}>
      <div className="flex items-center justify-between gap-2">
        <button
          type="button"
          className="flex items-center justify-center bg-transparent p-0 shadow-none border-0"
          onClick={() => {
            setDisplayMonth((current) => {
              if (current === 0) {
                setDisplayYear((year) => year - 1);
                return 11;
              }
              return current - 1;
            });
          }}
        >
          <img src="/egg/media/icons/ico-left.png" alt="Previous month" className="h-[1.8rem] w-auto object-contain" />
        </button>

        <div className="m-0 text-[1.7rem] font-bold uppercase text-[#6f4bb8]">{monthNames[displayMonth]}</div>

        <button
          type="button"
          className="flex items-center justify-center bg-transparent p-0 shadow-none border-0"
          onClick={() => {
            setDisplayMonth((current) => {
              if (current === 11) {
                setDisplayYear((year) => year + 1);
                return 0;
              }
              return current + 1;
            });
          }}
        >
          <img src="/egg/media/icons/ico-right.png" alt="Next month" className="h-[1.8rem] w-auto object-contain" />
        </button>
      </div>

      <hr className="mt-2 border-0 border-t border-[#e7ddfb]" />

      <div className="mt-1 grid grid-cols-3 gap-4">
        <div className="w-full bg-transparent px-2 py-2">
          <div className="flex items-start gap-2">
            <img
              src="/egg/media/icons/ico-fried-egg.png"
              className="h-[2.1rem] w-auto object-contain"
              alt=""
            />
            <div className="text-[2.1rem] font-bold leading-none text-[#6f4bb8]">
              {selectedMetrics.eggs}
            </div>
          </div>
        </div>
        <div className="w-full bg-transparent px-2 py-2 text-center">
          <div className="text-center text-[1.6rem] uppercase leading-none text-[#9E9E9E]">
            {selectedDay}
            <span className="text-[0.7em]">
              {selectedDay % 10 === 1 && selectedDay !== 11 ? 'ST' : selectedDay % 10 === 2 && selectedDay !== 12 ? 'ND' : selectedDay % 10 === 3 && selectedDay !== 13 ? 'RD' : 'TH'}
            </span>
          </div>
        </div>
        <div className="w-full bg-transparent px-2 py-2">
          <div className="flex items-end justify-end gap-2">
            <div className="text-[2.1rem] font-bold leading-none text-[#6f4bb8]">
              {selectedMetrics.chicks}
            </div>
            <img
              src="/egg/media/icons/ico-chick.png"
              className="h-[2.1rem] w-auto object-contain"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr className="my-0 border-0 border-t border-[#e7ddfb]" />

      <div className="mt-2 grid grid-cols-7 gap-2 text-center text-[1rem] font-semibold uppercase text-[#c4b2f4]">
        {weekdays.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="mt-2 space-y-2">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="grid grid-cols-7 gap-2">
            {week.map((cell, cellIndex) => {
              if (cell === null) return <div key={cellIndex} className="h-[4.2rem]" />;

              const day = cell;
              const isToday = displayYear === todayYear && displayMonth === todayMonth && day === today.getDate();
              const isSelected = day === selectedDay && displayMonth === todayMonth && displayYear === todayYear;
              const isFuture = displayYear > todayYear || (displayYear === todayYear && displayMonth > todayMonth) || (displayYear === todayYear && displayMonth === todayMonth && day > today.getDate());
              const hasEntry = displayMonth === todayMonth && displayYear === todayYear && day <= today.getDate() && fakeMonthData[day - 1].eggs > 0;
              const mutedDay = isFuture || !hasEntry;

              return (
                <button
                  key={cellIndex}
                  type="button"
                  onClick={() => setSelectedDay(day)}
                  className={[
                    'h-[4.2rem] rounded-[var(--ui-radius)] px-2 py-1 flex flex-col items-center transition-colors',
                    isSelected
                      ? 'border-2 border-[#6f4bb8] bg-[#6f4bb8] text-white shadow-[0_10px_24px_rgba(124,58,237,0.28)]'
                      : isToday
                        ? 'border-2 border-[#876BC2] bg-white text-[#6f4bb8]'
                        : mutedDay
                          ? 'border border-[#f1ebff] bg-white/70 text-[#d6cdea]'
                          : 'border border-[#ece3ff] bg-white/90 text-[#c4b2f4]',
                  ].join(' ')}
                >
                  <div className={`w-full text-center text-[1.2rem] font-medium leading-none ${isSelected ? 'text-white/90' : isToday ? 'text-[#6f4bb8]' : mutedDay ? 'text-[#cfc6e3]' : 'text-[#9E9E9E]'}`}>{day}</div>
                  <div className="flex flex-1 items-center justify-center">
                    {hasEntry ? (
                      <div className={`text-[1.7rem] font-bold leading-none ${isSelected ? 'text-white' : mutedDay ? 'text-[#cfc6e3]' : 'text-[#6f4bb8]'}`}>{fakeMonthData[day - 1].eggs}</div>
                    ) : null}
                    {isSelected ? <div className="sr-only">Selected</div> : null}
                  </div>
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/*}
      <div className="mt-3 text-center text-[1.6rem] font-black leading-none text-[#6f4bb8]">
        {selectedDay}{selectedDay % 10 === 1 && selectedDay !== 11 ? 'st' : selectedDay % 10 === 2 && selectedDay !== 12 ? 'nd' : selectedDay % 10 === 3 && selectedDay !== 13 ? 'rd' : 'th'}
        <span className="ml-2 text-[1.4rem] italic text-[#9E9E9E]">{monthNames[displayMonth]}, {String(displayYear).slice(-2)}</span>
      </div>
      
      <hr className="my-4 border-0 border-t border-[#e7ddfb]" />
      */}

    </ShellCard>
  );
}
