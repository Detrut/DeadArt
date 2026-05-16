import React from 'react';
import type { KillerComponentProps, KillerPerkEntry } from '../../../types/types';
import ButtonDefault from '../ButtonDefault/ButtonDefault';

const STAT_MAX = 10;

const KillerPerk: React.FC<{ perk: KillerPerkEntry; index: number }> = ({ perk, index }) => {
    const slotLabel = ['I', 'II', 'III'][index] ?? String(index + 1);
    return (
        <article
            className="rounded-lg border border-[color:var(--main-text-color)]/15 bg-[color:var(--main-text-color)]/5 p-4"
            aria-labelledby={`killer-perk-${perk.id}-title`}
        >
            <div className="mb-2 flex items-center gap-2">
                <span
                    className="inline-flex h-7 min-w-7 items-center justify-center rounded bg-[color:var(--main-text-color)]/10 text-xs font-semibold tabular-nums text-[color:var(--main-text-color)]"
                    aria-hidden
                >
                    {slotLabel}
                </span>
                <h4 id={`killer-perk-${perk.id}-title`} className="text-[length:var(--main-text-size)] font-semibold text-[color:var(--main-text-color)]">
                    {perk.title}
                </h4>
            </div>
            <div className='flex justify-center gap-4'>
                <img src={perk.image} alt="" className="mb-3 h-[100px] w-[100px] rounded object-cover object-center" />
                <p className="text-[length:var(--main-text-size)] leading-relaxed text-[color:var(--main-text-color)]/90">{perk.description}</p>
            </div>
        </article>
    );
};

function statWidthPercent(value: number): number {
    if (!Number.isFinite(value)) return 0;
    return Math.max(0, Math.min(100, (value / STAT_MAX) * 100));
}

type StatBarProps = {
    label: string;
    value: number;
    fillClassName: string;
};

const StatBar: React.FC<StatBarProps> = ({ label, value, fillClassName }) => {
    const width = statWidthPercent(value);
    return (
        <div className="space-y-1">
            <div className="flex justify-between gap-2 text-[length:var(--main-text-size)] text-[color:var(--main-text-color)]">
                <span>{label}</span>
                <span className="tabular-nums opacity-80">{value}</span>
            </div>
            <div
                className="h-2.5 w-full overflow-hidden rounded-full bg-[color:var(--main-text-color)]/15"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={STAT_MAX}
                aria-valuenow={Math.round(Math.max(0, Math.min(STAT_MAX, value)))}
                aria-label={label}
            >
                <div
                    className={`h-full rounded-full transition-[width] duration-500 ease-out ${fillClassName}`}
                    style={{ width: `${width}%` }}
                />
            </div>
        </div>
    );
};

export const KillerPreview: React.FC<KillerComponentProps> = ({ data }) => {
    const perksForKiller = data.perks.filter((perk) => perk.key === data.id);

    return (
         <>
            <section className='bg-[var(--background)] pt-[50px] flex justify-center'>
                <div className="flex gap-[30px] mr-[100px]">
                    <div className='flex flex-col w-[700px]'>
                        <div className='flex flex-col bg-[var(--accent-color)] mb-4 ml-[100px] relative max-w-[700px] h-[700px] overflow-hidden'>
                            <img src={data.image} alt={data.name} className="w-full h-full object-cover object-center" />
                            <div
                                className="pointer-events-none absolute inset-y-0 left-0 w-[100px] bg-gradient-to-r from-[var(--background)] to-transparent"
                                aria-hidden
                            />
                            <div
                                className="pointer-events-none absolute inset-y-0 right-0 w-[50px] bg-gradient-to-l from-[var(--background)] to-transparent"
                                aria-hidden
                            />
                            <div
                                className="pointer-events-none absolute inset-x-0 top-0 h-[50px] bg-gradient-to-b from-[var(--background)] to-transparent"
                                aria-hidden
                            />
                            <div
                                className="pointer-events-none absolute inset-x-0 bottom-0 h-[50px] bg-gradient-to-t from-[var(--background)] to-transparent"
                                aria-hidden
                            />
                        </div>
                        <div className='flex flex-col w-[500px] ml-[100px]'>
                            <h1 className='text-[length:var(--h1-size)] font-bold text-[color:var(--main-text-color)]'>Заметки</h1>
                            <p className='bottom-4 left-4 text-[length:var(--main-text-size)] text-[color:var(--main-text-color)]/80'>{data.hints}</p>
                            <ButtonDefault 
                                type='button'
                                name='Guide'
                                styleButton='mt-16 font-bold text-[length:var(--main-text-size)] rounded-[5%] bg-[var(--button-color-default)] w-[600px] h-[60px] flex items-center justify-center hover:bg-[var(--button-color-default-hover)] hover:text-[var(--acent-main-text-color)]'
                            > К гайду
                            </ButtonDefault>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-[length:var(--title-text)] text-[color:var(--main-text-color)] font-bold'>{data.name}</h2>
                        <div>
                            <h3 className="mb-2 text-[length:var(--main-text-size)] font-semibold text-[color:var(--main-text-color)]">
                                Описание
                            </h3>
                             <p className="text-[color:var(--main-text-color)] w-[600px]">{data.description}</p>
                        </div>
                        <div className="max-w-[400px] space-y-4">
                            <div className="space-y-4 border-t border-[color:var(--main-text-color)]/20 pt-4">
                                <StatBar
                                    label="Сложность"
                                    value={data.difficulty}
                                    fillClassName="bg-rose-500"
                                />
                                <StatBar
                                    label="Мобильность"
                                    value={data.mobility}
                                    fillClassName="bg-sky-500"
                                />
                                <StatBar
                                    label="Контроль"
                                    value={data.control}
                                    fillClassName="bg-violet-500"
                                />
                                <StatBar
                                    label="Информация"
                                    value={data.info}
                                    fillClassName="bg-amber-500"
                                />
                            </div>
                        </div>
                        <div className="mt-6 max-w-[600px]">
                            <h3 className="mb-3 text-[length:var(--main-text-size)] font-semibold text-[color:var(--main-text-color)]">
                                Перки убийцы
                            </h3>
                            <ul className="flex list-none flex-col gap-3 p-0">
                                {perksForKiller.map((perk, index) => (
                                    <li key={`${perk.key}-${perk.id}-slot-${index}`}>
                                        <KillerPerk perk={perk} index={index} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>   
         </>
    )
};