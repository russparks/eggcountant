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

export function ChickCard({ count, started, status, progress, daysLeft, hatched, brewing, temperature, onEdit, onDelete, coopName = 'Willow House' }: { count: string; started: string; status: string; progress: number; daysLeft: string; hatched: string; brewing: string; temperature: string; onEdit?: () => void; onDelete?: () => void; coopName?: string }) {
  const totalEggs = Number(count);
  const hatchedCount = Number(hatched);
  const brewingCount = Number(brewing);
  const perishedCount = Math.max(totalEggs - hatchedCount - brewingCount, 0);
  const complete = brewingCount === 0;
  const mutedText = complete ? 'text-[#c7bddf]' : 'text-[#616161]';
  const mutedMeta = complete ? 'text-[#d6cdea]' : 'text-[#b09bdb]';
  const mutedSecondary = complete ? 'text-[#cfc6e3]' : 'text-[#9E9E9E]';

  return (
    <ShellCard surfaceGradient="bg-[linear-gradient(135deg,_#f1ecfb_0%,_#ffffff_58%,_#A58DD9_100%)]" className={`border border-[#b2aacb] ${surfaceGradient} p-5 text-[#6f4bb8] shadow-[0_10px_30px_rgba(47,31,77,0.08)]`}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-1">
          <img src="/egg/media/icons/ico-egg-narrow.png?" alt="" className={`h-[3.2rem] w-auto object-contain ${complete ? 'opacity-50 grayscale' : ''}`} />
          <div className="min-w-0">
            <div className={`px-2 text-[2.76rem] font-semibold leading-none ${complete ? 'text-[#c7bddf]' : 'text-[#6f4bb8]'}`}>{hatchedCount}</div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button type="button" className={`flex items-center justify-center bg-transparent text-[#6f4bb8] disabled:cursor-default ${complete ? 'opacity-35 grayscale' : ''}`} onClick={onEdit} disabled={!onEdit}>
            <img src="/egg/media/icons/ico-eggclutch-edit.png?v=20260404b" alt="" className="h-[3.6rem] w-auto object-contain" />
          </button>
        </div>
      </div>

      <hr className="mt-2 border-0 border-t border-slate-200" />
      <div className={`mt-1 grid grid-cols-2 gap-3 text-[1.275rem] ${mutedMeta}`}>
        <div>{started}</div>
        <div className={`text-right uppercase ${mutedSecondary}`}>{coopName}</div>
      </div>

      <div className="mt-2 flex items-center gap-1">
        <div className={`h-[0.7rem] w-[78%] overflow-hidden rounded-[var(--ui-radius)] ${complete ? 'bg-slate-100' : 'bg-[#eadffd]'}`}>
          <div className={`h-full rounded-[var(--ui-radius)] ${complete ? 'bg-slate-300' : 'bg-[linear-gradient(90deg,#ddd3fb_0%,#b49cf5_35%,#6f4bb8_68%,#6f4bb8_100%)]'}`} style={{ width: `${progress}%` }} />
        </div>
        <div className="ml-auto flex items-center gap-1 text-right">
          <span className={`text-[1.2rem] font-semibold ${complete ? 'text-[#c4b2f4]' : 'text-[#616161]'}`}>{daysLeft.replace(' days', 'd')}</span>
        </div>
      </div>

      <hr className="mt-3 border-0 border-t border-slate-200" />

      <div className={`mt-4 grid grid-cols-3 gap-3 text-[1.74rem] ${mutedText}`}>
        <div className="flex items-center justify-center gap-2 bg-white">
          <img src="/egg/media/icons/ico-chick.png?v=20260404b" alt="" className={`h-[2.6rem] w-[2.6rem] object-contain ${complete ? 'opacity-50 grayscale' : ''}`} />
          <span className="font-bold">{hatched}</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <img src="/egg/media/icons/ico-egg.png?v=20260404c" alt="" className={`h-[2.5rem] w-[2.5rem] object-contain ${complete ? 'opacity-50 grayscale' : ''}`} />
          <span className="font-bold">{brewing}</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <img src="/egg/media/icons/ico-perishX.png" alt="" className={`h-[2.6rem] w-[2.6rem] object-contain ${complete ? 'opacity-50 grayscale' : ''}`} />
          <span className="font-bold">{perishedCount}</span>
        </div>
      </div>
    </ShellCard>
  );
}

export function ChickCardsSection({ onEditCard, onDeleteCard }: { onEditCard?: () => void; onDeleteCard?: () => void }) {
  return (
    <div className="grid gap-4">
      <ChickCard count="13" started="27 Mar 2026" status="Incubating" progress={26} daysLeft="12 days" hatched="13" brewing="13" temperature="20.00°C" coopName="EGGSTEIN ISLAND" onEdit={onEditCard} onDelete={onDeleteCard} />
      <ChickCard count="8" started="19 Mar 2026" status="Incubating" progress={88} daysLeft="3 days" hatched="8" brewing="1" temperature="20.50°C" onEdit={onEditCard} onDelete={onDeleteCard} />
      <ChickCard count="7" started="01 Mar 2026" status="Complete" progress={100} daysLeft="0 days" hatched="4" brewing="0" temperature="19.80°C" onEdit={onEditCard} onDelete={onDeleteCard} />
    </div>
  );
}

export function HenCardsSection({ onEditCard }: { onEditCard?: () => void }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <HenCard name="Willow" coop="Willow House" eggs="24" note="AGE: 2" medal="/egg/media/icons/gold.png" progress={66} nameColor="#FFCC01" compact profileImage="/egg/media/hens/hen-1.png" profileBadge="gold" onEdit={onEditCard} />
      <HenCard name="Dotty" coop="Speckled Coop" eggs="19" note="AGE: 1" medal="/egg/media/icons/silver.png" progress={51} nameColor="#999999" compact profileImage="/egg/media/hens/hen-2.png" profileBadge="silver" onEdit={onEditCard} />
      <HenCard name="Mabel" coop="Back Garden Coop" eggs="16" note="AGE: 3" medal="/egg/media/icons/bronze.png" progress={46} nameColor="#CC6602" compact profileImage="/egg/media/hens/hen-3.png" profileBadge="bronze" onEdit={onEditCard} />
    </div>
  );
}

export function CoopCardsSection({ onEditCard }: { onEditCard?: () => void }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <HenCard name="Willow House" coop="Willow House" eggs="38" note="North Field" medal="/egg/media/icons/gold.png" progress={66} nameColor="#6f4bb8" compact compactMode="coop" profileImage="/egg/media/coops/coop-1.png" profileBadge="gold" onEdit={onEditCard} />
      <HenCard name="Speckled Coop" coop="Speckled Coop" eggs="24" note="Back Orchard" medal="/egg/media/icons/silver.png" progress={51} nameColor="#6f4bb8" compact compactMode="coop" profileImage="/egg/media/coops/coop-2.png" profileBadge="silver" onEdit={onEditCard} />
      <HenCard name="Garden Roost" coop="Garden Roost" eggs="31" note="South Run" medal="/egg/media/icons/bronze.png" progress={46} nameColor="#6f4bb8" compact compactMode="coop" profileImage="/egg/media/coops/coop-3.png" profileBadge="bronze" onEdit={onEditCard} />
    </div>
  );
}

function HenBreedPicker({
  open,
  onClose,
  selectedBreed,
  setSelectedBreed,
  otherBreed,
  setOtherBreed,
}: {
  open: boolean;
  onClose: () => void;
  selectedBreed: string;
  setSelectedBreed: React.Dispatch<React.SetStateAction<string>>;
  otherBreed: string;
  setOtherBreed: React.Dispatch<React.SetStateAction<string>>;
}) {
  const breeds = [
    'Black Rock',
    'Goldline',
    'Speckledy (Speckled Ranger)',
    'Sussex',
    'Rhode Island Red',
    'Buff Orpington',
    'Marans',
    'Silkie',
    'Cream Legbar',
    'Wyandotte',
    'Pekin Bantam',
    'Other (enter breed)',
  ];

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[75] flex items-center justify-center bg-[#2b124f]/35 p-4 backdrop-blur-[2px]">
      <div className={`max-h-[90vh] w-full max-w-[28rem] overflow-y-auto rounded-[var(--ui-radius)] border border-[#d9c9fb] ${surfaceGradient} p-4 text-[#6f4bb8] shadow-[0_20px_50px_rgba(47,31,77,0.16)]`}>
        <div className="flex items-start justify-between gap-4">
          <div className="text-[1.35rem] font-bold text-[#6f4bb8]">Breed</div>
          <button type="button" className="text-[2rem] leading-none text-[#c4b2f4]" onClick={onClose}>×</button>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {breeds.map((breed) => {
            const active = selectedBreed === breed;
            return (
              <button
                key={breed}
                type="button"
                className={`rounded-[var(--ui-radius)] border px-3 py-3 text-center shadow-sm ${active ? 'border-[#6f4bb8] bg-[#f3edff] text-[#6f4bb8]' : 'border-[#e7ddfb] bg-white text-[#c4b2f4]'}`}
                onClick={() => setSelectedBreed(breed)}
              >
                <div className="text-[1.5rem]">🐔</div>
                <div className="mt-2 text-[0.88rem] font-semibold leading-tight">{breed}</div>
              </button>
            );
          })}
        </div>
        {selectedBreed === 'Other (enter breed)' ? (
          <input type="text" value={otherBreed} onChange={(e) => setOtherBreed(e.target.value)} placeholder="Enter breed" className="mt-4 w-full rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white px-3 py-3 text-[0.98rem] text-[#6f4bb8] outline-none" />
        ) : null}
        <button type="button" className="mt-4 w-full rounded-[var(--ui-radius)] bg-[#6f4bb8] px-4 py-3 text-[1rem] font-semibold text-white shadow-[0_10px_24px_rgba(47,31,77,0.14)]" onClick={onClose}>Done</button>
      </div>
    </div>
  );
}

export function AddHenModal({ onClose }: { onClose: () => void }) {
  const [breedModalOpen, setBreedModalOpen] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState('Black Rock');
  const [otherBreed, setOtherBreed] = useState('');
  const [henDob, setHenDob] = useState('2025-05-01');
  const [henCoop, setHenCoop] = useState('Eggstein Island');
  const [henPhotoAdded, setHenPhotoAdded] = useState(false);
  const [henNotesOpen, setHenNotesOpen] = useState(false);
  const [henNotes, setHenNotes] = useState('');

  return (
    <>
      <div className="fixed inset-0 z-[74] flex items-end justify-center bg-[#2b124f]/28 p-2 backdrop-blur-[2px] sm:items-center sm:p-4">
        <div className={`max-h-[92vh] w-full max-w-[36rem] overflow-y-auto rounded-[var(--ui-radius)] border border-[#d9c9fb] ${surfaceGradient} p-4 text-[#6f4bb8] shadow-[0_20px_50px_rgba(47,31,77,0.16)] animate-[fadeSlideUp_220ms_ease-out]`}>
          <div className="flex items-start justify-between gap-4">
            <div className="text-[2.05rem] font-black italic leading-none tracking-tight text-[#6f4bb8]">Add Hen</div>
            <button type="button" className="text-[2.2rem] leading-none text-[#c4b2f4]" onClick={onClose}>×</button>
          </div>

          <div className="mt-4 space-y-4">
            <label className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm block">
              <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Name</div>
              <input type="text" placeholder="Henrietta" className="mt-2 w-full bg-transparent text-[1.15rem] font-semibold text-[#6f4bb8] outline-none placeholder:text-[#c4b2f4]" />
            </label>

            <div className="grid grid-cols-2 gap-3">
              <button type="button" className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 text-left shadow-sm" onClick={() => setBreedModalOpen(true)}>
                <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Breed</div>
                <div className="mt-2 flex items-center justify-between gap-3 text-[1rem] font-semibold text-[#6f4bb8]">
                  <span className="truncate">{selectedBreed === 'Other (enter breed)' && otherBreed ? otherBreed : selectedBreed}</span>
                  <span className="text-[#c4b2f4]">+</span>
                </div>
              </button>

              <label className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
                <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">DoB (approx.)</div>
                <input type="date" value={henDob} onChange={(e) => setHenDob(e.target.value)} className="mt-2 w-full bg-transparent text-[1.04rem] font-semibold text-[#6f4bb8] outline-none" />
              </label>
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-3">
              <label className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
                <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Coop</div>
                <select value={henCoop} onChange={(e) => setHenCoop(e.target.value)} className="mt-2 w-full bg-transparent text-[1rem] font-semibold text-[#6f4bb8] outline-none">
                  <option>Eggstein Island</option>
                  <option>Willow House</option>
                  <option>Speckled Coop</option>
                  <option>Back Garden Coop</option>
                </select>
              </label>
              <button type="button" className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 text-[1rem] font-semibold text-[#6f4bb8] shadow-sm" onClick={() => setHenNotesOpen((v) => !v)}>{henNotes ? 'Edit notes' : 'Notes'}</button>
            </div>

            {henNotesOpen ? (
              <div className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
                <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Notes</div>
                <textarea value={henNotes} onChange={(e) => setHenNotes(e.target.value)} placeholder="Type notes..." className="mt-2 min-h-[6rem] w-full resize-none bg-transparent text-[1rem] text-[#6f4bb8] outline-none" />
              </div>
            ) : null}

            <div className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div className="text-[1rem] font-semibold text-[#6f4bb8]">{henPhotoAdded ? 'Photo ready' : 'No photo added yet'}</div>
                <button type="button" className="rounded-[var(--ui-radius)] bg-[#f3edff] px-3 py-2 text-[0.95rem] font-semibold text-[#6f4bb8]" onClick={() => setHenPhotoAdded(true)}>{henPhotoAdded ? 'Edit photo' : 'Add photo'}</button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button type="button" onClick={onClose} className="w-full rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white/85 px-5 py-4 text-[1.05rem] font-semibold text-[#6f4bb8] shadow-sm">Cancel</button>
              <button type="button" className="w-full rounded-[var(--ui-radius)] bg-[#6f4bb8] px-5 py-4 text-[1.05rem] font-semibold text-white shadow-[0_10px_24px_rgba(47,31,77,0.14)]">Let's Cluckin' Go!</button>
            </div>
          </div>
        </div>
      </div>

      <HenBreedPicker open={breedModalOpen} onClose={() => setBreedModalOpen(false)} selectedBreed={selectedBreed} setSelectedBreed={setSelectedBreed} otherBreed={otherBreed} setOtherBreed={setOtherBreed} />
    </>
  );
}

export function AddCoopModal({ onClose }: { onClose: () => void }) {
  const [addCoopName, setAddCoopName] = useState('');
  const [addCoopLocation, setAddCoopLocation] = useState('Home');
  const [addCoopPhotoAdded, setAddCoopPhotoAdded] = useState(false);
  const [addCoopPhotoMiniModalOpen, setAddCoopPhotoMiniModalOpen] = useState(false);
  const [addCoopNotesOpen, setAddCoopNotesOpen] = useState(false);
  const [addCoopNotes, setAddCoopNotes] = useState('');
  const [addCoopPhotoZoom, setAddCoopPhotoZoom] = useState(1);
  const [addCoopPhotoOffset, setAddCoopPhotoOffset] = useState(0);

  return (
    <>
      <div className="fixed inset-0 z-[74] flex items-end justify-center bg-[#2b124f]/28 p-2 backdrop-blur-[2px] sm:items-center sm:p-4">
        <div className={`max-h-[92vh] w-full max-w-[36rem] overflow-y-auto rounded-[var(--ui-radius)] border border-[#d9c9fb] ${surfaceGradient} p-4 text-[#6f4bb8] shadow-[0_20px_50px_rgba(47,31,77,0.16)] animate-[fadeSlideUp_220ms_ease-out]`}>
          <div className="flex items-start justify-between gap-4">
            <div className="text-[2.05rem] font-black italic leading-none tracking-tight text-[#6f4bb8]">Add Coop</div>
            <button type="button" className="text-[2.2rem] leading-none text-[#c4b2f4]" onClick={onClose}>×</button>
          </div>

          <div className="mt-4 space-y-4">
            <label className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm block">
              <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Name</div>
              <input type="text" value={addCoopName} onChange={(e) => setAddCoopName(e.target.value)} placeholder="Eggstein Island" className="mt-2 w-full bg-transparent text-[1.15rem] font-semibold text-[#6f4bb8] outline-none placeholder:text-[#c4b2f4]" />
            </label>

            <div className="grid grid-cols-[1fr_auto] gap-3">
              <label className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
                <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Location</div>
                <select value={addCoopLocation} onChange={(e) => setAddCoopLocation(e.target.value)} className="mt-2 w-full bg-transparent text-[1rem] font-semibold text-[#6f4bb8] outline-none">
                  <option>Home</option>
                  <option>Allotment</option>
                  <option>Other</option>
                </select>
              </label>
              <button type="button" className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 text-[1rem] font-semibold text-[#6f4bb8] shadow-sm" onClick={() => setAddCoopNotesOpen((v) => !v)}>{addCoopNotes ? 'Edit notes' : 'Notes'}</button>
            </div>

            <div className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div className="text-[1rem] font-semibold text-[#6f4bb8]">{addCoopPhotoAdded ? 'Current photo' : 'No photo added yet'}</div>
                <button type="button" className="rounded-[var(--ui-radius)] bg-[#f3edff] px-4 py-3 text-[0.95rem] font-semibold text-[#6f4bb8]" onClick={() => setAddCoopPhotoMiniModalOpen(true)}>{addCoopPhotoAdded ? 'Edit photo' : 'Add photo'}</button>
              </div>
              {addCoopPhotoAdded ? <div className="mt-3 flex justify-center"><img src="/egg/media/coops/coop-1.png" alt="Coop" className="h-[8rem] w-full rounded-[1rem] border border-[#e7ddfb] object-cover" /></div> : null}
            </div>

            {addCoopNotesOpen ? (
              <div className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
                <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Notes</div>
                <textarea value={addCoopNotes} onChange={(e) => setAddCoopNotes(e.target.value)} placeholder="Type notes..." className="mt-2 min-h-[6rem] w-full resize-none bg-transparent text-[1rem] text-[#6f4bb8] outline-none" />
              </div>
            ) : null}

            <div className="grid grid-cols-2 gap-3">
              <button type="button" onClick={onClose} className="w-full rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white/85 px-5 py-4 text-[1.05rem] font-semibold text-[#6f4bb8] shadow-sm">Cancel</button>
              <button type="button" className="w-full rounded-[var(--ui-radius)] bg-[#6f4bb8] px-5 py-4 text-[1.05rem] font-semibold text-white shadow-[0_10px_24px_rgba(47,31,77,0.14)]">Save</button>
            </div>
          </div>
        </div>
      </div>

      {addCoopPhotoMiniModalOpen ? (
        <div className="fixed inset-0 z-[75] flex items-center justify-center bg-[#2b124f]/35 p-4 backdrop-blur-[2px]">
          <div className="w-full max-w-[24rem] rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white p-4 shadow-[0_20px_50px_rgba(47,31,77,0.16)]">
            <div className="flex items-start justify-between gap-4">
              <div className="text-[1.25rem] font-bold text-[#6f4bb8]">Photograph coop</div>
              <button type="button" className="text-[2rem] leading-none text-[#c4b2f4]" onClick={() => setAddCoopPhotoMiniModalOpen(false)}>×</button>
            </div>
            <div className="mt-4 flex justify-center">
              <div className="relative h-[11rem] w-full max-w-[14rem] overflow-hidden rounded-[1rem] border-2 border-[#e7ddfb] bg-[#f3edff]">
                {addCoopPhotoAdded ? <img src="/egg/media/coops/coop-1.png" alt="Coop preview" className="absolute inset-0 h-full w-full object-cover" style={{ transform: `translateX(${addCoopPhotoOffset}px) scale(${addCoopPhotoZoom})` }} /> : <div className="absolute inset-0 flex items-center justify-center text-center text-[0.95rem] font-semibold text-[#c4b2f4]" style={{ transform: `translateX(${addCoopPhotoOffset}px) scale(${addCoopPhotoZoom})` }}>Coop photo preview</div>}
              </div>
            </div>
            <div className="mt-4 space-y-3">
              <div>
                <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Zoom</div>
                <input type="range" min="1" max="2" step="0.1" value={addCoopPhotoZoom} onChange={(e) => setAddCoopPhotoZoom(Number(e.target.value))} className="mt-2 h-2 w-full accent-[#6f4bb8]" />
              </div>
              <div>
                <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Pan</div>
                <input type="range" min="-30" max="30" step="1" value={addCoopPhotoOffset} onChange={(e) => setAddCoopPhotoOffset(Number(e.target.value))} className="mt-2 h-2 w-full accent-[#6f4bb8]" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button type="button" className="rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white px-4 py-3 text-[1rem] font-semibold text-[#6f4bb8] shadow-sm" onClick={() => setAddCoopPhotoAdded(true)}>Upload</button>
                <button type="button" className="rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white px-4 py-3 text-[1rem] font-semibold text-[#6f4bb8] shadow-sm" onClick={() => setAddCoopPhotoAdded(true)}>Take photo</button>
              </div>
              <button type="button" className="w-full rounded-[var(--ui-radius)] bg-[#6f4bb8] px-5 py-3 text-[1rem] font-semibold text-white shadow-[0_10px_24px_rgba(47,31,77,0.14)]" onClick={() => { setAddCoopPhotoAdded(true); setAddCoopPhotoMiniModalOpen(false); }}>Save photo</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export function EditCoopModal({ onClose }: { onClose: () => void }) {
  const [coopName, setCoopName] = useState('Willow House');
  const [coopLocation, setCoopLocation] = useState('Home');
  const [coopPhotoAdded, setCoopPhotoAdded] = useState(true);
  const [coopPhotoMiniModalOpen, setCoopPhotoMiniModalOpen] = useState(false);
  const [coopNotesOpen, setCoopNotesOpen] = useState(false);
  const [coopNotes, setCoopNotes] = useState('Main laying coop, cleaned twice weekly, south-facing run.');
  const [coopPhotoZoom, setCoopPhotoZoom] = useState(1);
  const [coopPhotoOffset, setCoopPhotoOffset] = useState(0);

  return (
    <>
      <div className="fixed inset-0 z-[74] flex items-end justify-center bg-[#2b124f]/28 p-2 backdrop-blur-[2px] sm:items-center sm:p-4">
        <div className={`max-h-[92vh] w-full max-w-[36rem] overflow-y-auto rounded-[var(--ui-radius)] border border-[#d9c9fb] ${surfaceGradient} p-4 text-[#6f4bb8] shadow-[0_20px_50px_rgba(47,31,77,0.16)] animate-[fadeSlideUp_220ms_ease-out]`}>
          <div className="flex items-start justify-between gap-4">
            <div className="text-[2.05rem] font-black italic leading-none tracking-tight text-[#6f4bb8]">Edit Coop</div>
            <button type="button" className="text-[2.2rem] leading-none text-[#c4b2f4]" onClick={onClose}>×</button>
          </div>

          <div className="mt-4 space-y-4">
            <label className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm block">
              <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Name</div>
              <input type="text" value={coopName} onChange={(e) => setCoopName(e.target.value)} className="mt-2 w-full bg-transparent text-[1.15rem] font-semibold text-[#6f4bb8] outline-none" />
            </label>

            <div className="grid grid-cols-[1fr_auto] gap-3">
              <label className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
                <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Location</div>
                <select value={coopLocation} onChange={(e) => setCoopLocation(e.target.value)} className="mt-2 w-full bg-transparent text-[1rem] font-semibold text-[#6f4bb8] outline-none">
                  <option>Home</option>
                  <option>Allotment</option>
                  <option>Other</option>
                </select>
              </label>
              <button type="button" className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 text-[1rem] font-semibold text-[#6f4bb8] shadow-sm" onClick={() => setCoopNotesOpen((v) => !v)}>{coopNotes ? 'Edit notes' : 'Notes'}</button>
            </div>

            <div className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div className="text-[1rem] font-semibold text-[#6f4bb8]">{coopPhotoAdded ? 'Current photo' : 'No photo added yet'}</div>
                <button type="button" className="rounded-[var(--ui-radius)] bg-[#f3edff] px-4 py-3 text-[0.95rem] font-semibold text-[#6f4bb8]" onClick={() => setCoopPhotoMiniModalOpen(true)}>{coopPhotoAdded ? 'Edit photo' : 'Add photo'}</button>
              </div>
              {coopPhotoAdded ? <div className="mt-3 flex justify-center"><img src="/egg/media/coops/coop-1.png" alt="Coop" className="h-[8rem] w-full rounded-[1rem] border border-[#e7ddfb] object-cover" /></div> : null}
            </div>

            {coopNotesOpen ? (
              <div className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
                <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Notes</div>
                <textarea value={coopNotes} onChange={(e) => setCoopNotes(e.target.value)} placeholder="Type notes..." className="mt-2 min-h-[6rem] w-full resize-none bg-transparent text-[1rem] text-[#6f4bb8] outline-none" />
              </div>
            ) : null}

            <div className="grid grid-cols-2 gap-3">
              <button type="button" onClick={onClose} className="w-full rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white/85 px-5 py-4 text-[1.05rem] font-semibold text-[#6f4bb8] shadow-sm">Cancel</button>
              <button type="button" className="w-full rounded-[var(--ui-radius)] bg-[#6f4bb8] px-5 py-4 text-[1.05rem] font-semibold text-white shadow-[0_10px_24px_rgba(47,31,77,0.14)]">Save</button>
            </div>
          </div>
        </div>
      </div>

      {coopPhotoMiniModalOpen ? (
        <div className="fixed inset-0 z-[75] flex items-center justify-center bg-[#2b124f]/35 p-4 backdrop-blur-[2px]">
          <div className="w-full max-w-[24rem] rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white p-4 shadow-[0_20px_50px_rgba(47,31,77,0.16)]">
            <div className="flex items-start justify-between gap-4">
              <div className="text-[1.25rem] font-bold text-[#6f4bb8]">Photograph coop</div>
              <button type="button" className="text-[2rem] leading-none text-[#c4b2f4]" onClick={() => setCoopPhotoMiniModalOpen(false)}>×</button>
            </div>
            <div className="mt-4 flex justify-center">
              <div className="relative h-[11rem] w-full max-w-[14rem] overflow-hidden rounded-[1rem] border-2 border-[#e7ddfb] bg-[#f3edff]">
                <img src="/egg/media/coops/coop-1.png" alt="Coop preview" className="absolute inset-0 h-full w-full object-cover" style={{ transform: `translateX(${coopPhotoOffset}px) scale(${coopPhotoZoom})` }} />
              </div>
            </div>
            <div className="mt-4 space-y-3">
              <div>
                <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Zoom</div>
                <input type="range" min="1" max="2" step="0.1" value={coopPhotoZoom} onChange={(e) => setCoopPhotoZoom(Number(e.target.value))} className="mt-2 h-2 w-full accent-[#6f4bb8]" />
              </div>
              <div>
                <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Pan</div>
                <input type="range" min="-30" max="30" step="1" value={coopPhotoOffset} onChange={(e) => setCoopPhotoOffset(Number(e.target.value))} className="mt-2 h-2 w-full accent-[#6f4bb8]" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button type="button" className="rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white px-4 py-3 text-[1rem] font-semibold text-[#6f4bb8] shadow-sm" onClick={() => setCoopPhotoAdded(true)}>Upload</button>
                <button type="button" className="rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white px-4 py-3 text-[1rem] font-semibold text-[#6f4bb8] shadow-sm" onClick={() => setCoopPhotoAdded(true)}>Take photo</button>
              </div>
              <button type="button" className="w-full rounded-[var(--ui-radius)] bg-[#6f4bb8] px-5 py-3 text-[1rem] font-semibold text-white shadow-[0_10px_24px_rgba(47,31,77,0.14)]" onClick={() => { setCoopPhotoAdded(true); setCoopPhotoMiniModalOpen(false); }}>Save photo</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export function EditHenModal({ onClose }: { onClose: () => void }) {
  const [editBreedModalOpen, setEditBreedModalOpen] = useState(false);
  const [editSelectedBreed, setEditSelectedBreed] = useState('Goldline');
  const [editOtherBreed, setEditOtherBreed] = useState('');
  const [editHenDob, setEditHenDob] = useState('2024-04-01');
  const [editHenCoop, setEditHenCoop] = useState('Willow House');
  const [editHenPhotoAdded, setEditHenPhotoAdded] = useState(true);
  const [editHenPhotoMiniModalOpen, setEditHenPhotoMiniModalOpen] = useState(false);
  const [editHenNotesOpen, setEditHenNotesOpen] = useState(false);
  const [editHenNotes, setEditHenNotes] = useState('Top layer this spring, calm temperament, likes the left perch.');
  const [editHenPhotoZoom, setEditHenPhotoZoom] = useState(1);
  const [editHenPhotoOffset, setEditHenPhotoOffset] = useState(0);
  const [henDepartureModalOpen, setHenDepartureModalOpen] = useState(false);

  return (
    <>
      <div className="fixed inset-0 z-[74] flex items-end justify-center bg-[#2b124f]/28 p-2 backdrop-blur-[2px] sm:items-center sm:p-4">
        <div className={`max-h-[92vh] w-full max-w-[36rem] overflow-y-auto rounded-[var(--ui-radius)] border border-[#d9c9fb] ${surfaceGradient} p-4 text-[#6f4bb8] shadow-[0_20px_50px_rgba(47,31,77,0.16)] animate-[fadeSlideUp_220ms_ease-out]`}>
          <div className="flex items-start justify-between gap-4">
            <div className="text-[2.05rem] font-black italic leading-none tracking-tight text-[#6f4bb8]">Edit Hen</div>
            <button type="button" className="text-[2.2rem] leading-none text-[#c4b2f4]" onClick={onClose}>×</button>
          </div>

          <div className="mt-4 space-y-4">
            <label className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm block">
              <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Name</div>
              <input type="text" value="Willow" readOnly className="mt-2 w-full bg-transparent text-[1.15rem] font-semibold text-[#6f4bb8] outline-none" />
            </label>

            <div className="grid grid-cols-2 gap-3">
              <button type="button" className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 text-left shadow-sm" onClick={() => setEditBreedModalOpen(true)}>
                <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Breed</div>
                <div className="mt-2 flex items-center justify-between gap-3 text-[1rem] font-semibold text-[#6f4bb8]">
                  <span className="truncate">{editSelectedBreed === 'Other (enter breed)' && editOtherBreed ? editOtherBreed : editSelectedBreed}</span>
                  <span className="text-[#c4b2f4]">+</span>
                </div>
              </button>

              <label className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
                <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">DoB (approx.)</div>
                <input type="date" value={editHenDob} onChange={(e) => setEditHenDob(e.target.value)} className="mt-2 w-full bg-transparent text-[1.04rem] font-semibold text-[#6f4bb8] outline-none" />
              </label>
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-3">
              <label className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
                <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Coop</div>
                <select value={editHenCoop} onChange={(e) => setEditHenCoop(e.target.value)} className="mt-2 w-full bg-transparent text-[1rem] font-semibold text-[#6f4bb8] outline-none">
                  <option>Eggstein Island</option>
                  <option>Willow House</option>
                  <option>Speckled Coop</option>
                  <option>Back Garden Coop</option>
                </select>
              </label>
              <button type="button" className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 text-[1rem] font-semibold text-[#6f4bb8] shadow-sm" onClick={() => setEditHenNotesOpen((v) => !v)}>{editHenNotes ? 'Edit notes' : 'Notes'}</button>
            </div>

            <div className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div className="text-[1rem] font-semibold text-[#6f4bb8]">{editHenPhotoAdded ? 'Photo ready' : 'No photo added yet'}</div>
                <button type="button" className="rounded-[var(--ui-radius)] bg-[#f3edff] px-3 py-2 text-[0.95rem] font-semibold text-[#6f4bb8]" onClick={() => setEditHenPhotoMiniModalOpen(true)}>{editHenPhotoAdded ? 'Edit photo' : 'Add photo'}</button>
              </div>
              {editHenPhotoAdded ? <div className="mt-3 flex justify-center"><img src="/egg/media/hens/hen-1.png" alt="Hen" className="h-[8rem] w-[8rem] rounded-full border-2 border-[#e7ddfb] object-cover" /></div> : null}
            </div>

            {editHenNotesOpen ? (
              <div className="rounded-[var(--ui-radius)] border border-[#e7ddfb] bg-white/85 px-4 py-3 shadow-sm">
                <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Notes</div>
                <textarea value={editHenNotes} onChange={(e) => setEditHenNotes(e.target.value)} placeholder="Type notes..." className="mt-2 min-h-[6rem] w-full resize-none bg-transparent text-[1rem] text-[#6f4bb8] outline-none" />
              </div>
            ) : null}

            <div className="grid grid-cols-2 gap-3">
              <button type="button" className="w-full rounded-[var(--ui-radius)] border border-[#f3c6d2] bg-[#fff5f7] px-5 py-4 text-[1.05rem] font-semibold text-[#d14d6f] shadow-sm" onClick={() => setHenDepartureModalOpen(true)}>Sadly Departed</button>
              <button type="button" className="w-full rounded-[var(--ui-radius)] bg-[#6f4bb8] px-5 py-4 text-[1.05rem] font-semibold text-white shadow-[0_10px_24px_rgba(47,31,77,0.14)]">Update</button>
            </div>
          </div>
        </div>
      </div>

      <HenBreedPicker open={editBreedModalOpen} onClose={() => setEditBreedModalOpen(false)} selectedBreed={editSelectedBreed} setSelectedBreed={setEditSelectedBreed} otherBreed={editOtherBreed} setOtherBreed={setEditOtherBreed} />

      {editHenPhotoMiniModalOpen ? (
        <div className="fixed inset-0 z-[75] flex items-center justify-center bg-[#2b124f]/35 p-4 backdrop-blur-[2px]">
          <div className="w-full max-w-[24rem] rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white p-4 shadow-[0_20px_50px_rgba(47,31,77,0.16)]">
            <div className="flex items-start justify-between gap-4">
              <div className="text-[1.25rem] font-bold text-[#6f4bb8]">Edit photo</div>
              <button type="button" className="text-[2rem] leading-none text-[#c4b2f4]" onClick={() => setEditHenPhotoMiniModalOpen(false)}>×</button>
            </div>
            <div className="mt-4 flex justify-center">
              <div className="relative h-[11rem] w-[11rem] overflow-hidden rounded-full border-2 border-[#e7ddfb] bg-[#f3edff]">
                <img src="/egg/media/hens/hen-1.png" alt="Hen preview" className="absolute inset-0 h-full w-full object-cover" style={{ transform: `translateX(${editHenPhotoOffset}px) scale(${editHenPhotoZoom})` }} />
              </div>
            </div>
            <div className="mt-4 space-y-3">
              <div>
                <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Zoom</div>
                <input type="range" min="1" max="2" step="0.1" value={editHenPhotoZoom} onChange={(e) => setEditHenPhotoZoom(Number(e.target.value))} className="mt-2 h-2 w-full accent-[#6f4bb8]" />
              </div>
              <div>
                <div className="text-[0.8rem] font-bold uppercase tracking-wide text-[#9E9E9E]">Pan</div>
                <input type="range" min="-30" max="30" step="1" value={editHenPhotoOffset} onChange={(e) => setEditHenPhotoOffset(Number(e.target.value))} className="mt-2 h-2 w-full accent-[#6f4bb8]" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button type="button" className="rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white px-4 py-3 text-[1rem] font-semibold text-[#6f4bb8] shadow-sm" onClick={() => setEditHenPhotoAdded(true)}>Upload</button>
                <button type="button" className="rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white px-4 py-3 text-[1rem] font-semibold text-[#6f4bb8] shadow-sm" onClick={() => setEditHenPhotoAdded(true)}>Take photo</button>
              </div>
              <button type="button" className="w-full rounded-[var(--ui-radius)] bg-[#6f4bb8] px-5 py-3 text-[1rem] font-semibold text-white shadow-[0_10px_24px_rgba(47,31,77,0.14)]" onClick={() => { setEditHenPhotoAdded(true); setEditHenPhotoMiniModalOpen(false); }}>Save photo</button>
            </div>
          </div>
        </div>
      ) : null}

      {henDepartureModalOpen ? (
        <div className="fixed inset-0 z-[76] flex items-center justify-center bg-[#2b124f]/35 p-4 backdrop-blur-[2px]">
          <div className={`w-full max-w-[24rem] rounded-[var(--ui-radius)] border border-[#d9c9fb] ${surfaceGradient} p-4 text-[#6f4bb8] shadow-[0_20px_50px_rgba(47,31,77,0.16)]`}>
            <div className="text-[1.45rem] font-bold text-[#6f4bb8]">Mark Willow as departed?</div>
            <div className="mt-2 text-[0.98rem] text-[#c4b2f4]">Choose how Willow left the flock. This keeps her records tidy without deleting her history.</div>
            <div className="mt-4 grid gap-3">
              <button type="button" className="rounded-[var(--ui-radius)] border border-[#d9c9fb] bg-white px-4 py-3 text-[1rem] font-semibold text-[#6f4bb8] shadow-sm" onClick={() => setHenDepartureModalOpen(false)}>Sold / Moved</button>
              <button type="button" className="rounded-[var(--ui-radius)] border border-[#f4c7d2] bg-[#fff6f8] px-4 py-3 text-[1rem] font-semibold text-[#d14d6f] shadow-sm" onClick={() => setHenDepartureModalOpen(false)}>Passed Away</button>
              <button type="button" className="rounded-[var(--ui-radius)] bg-[#6f4bb8] px-4 py-3 text-[1rem] font-semibold text-white shadow-[0_10px_24px_rgba(47,31,77,0.14)]" onClick={() => setHenDepartureModalOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export function HenCard({
  onEdit,
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
  onEdit?: () => void;
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
          <button type="button" onClick={onEdit} className="bg-transparent p-0"><img src="/egg/media/icons/ico-edit-hand.png" alt="" className="h-[1.99rem] w-auto object-contain" /></button>
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
