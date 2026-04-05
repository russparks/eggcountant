import React from 'react';
import { SURFACE_GRADIENT } from '../../constants';

const surfaceGradient = SURFACE_GRADIENT;

export function ShellCard({ children, className = '', surfaceGradient: gradientOverride = SURFACE_GRADIENT }: { children: React.ReactNode; className?: string; surfaceGradient?: string }) {
  const resolvedClassName = className.replaceAll(SURFACE_GRADIENT, gradientOverride);
  return <div className={`rounded-[var(--ui-radius)] bg-white shadow-[0_10px_30px_rgba(47,31,77,0.08)] border border-white/60 ${resolvedClassName}`}>{children}</div>;
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
}: {
  title: string;
  value: string;
  icon: string;
  align: 'left' | 'right';
}) {
  const isLeft = align === 'left';

  return (
    <ShellCard surfaceGradient="bg-[linear-gradient(135deg,_#f1ecfb_0%,_#ffffff_58%,_#f3edff_100%)]" className={`border border-[#d9c9fb] ${surfaceGradient} p-3`}>
      <div className={isLeft ? 'text-left' : 'text-right'}>
        <div className="m-0 text-[1.2rem] uppercase text-[#6f4bb8]">{title}</div>
      </div>
      <div className={`mt-1.5 flex items-center ${isLeft ? 'justify-between flex-row-reverse' : 'justify-between'}`}>
        <img src={icon} alt="" className="h-[3.4rem] w-auto max-w-[34%] object-contain" />
        <div className={`text-[3.25rem] font-bold text-[#6f4bb8] ${isLeft ? 'ml-3' : 'mr-3'}`}>{value}</div>
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
