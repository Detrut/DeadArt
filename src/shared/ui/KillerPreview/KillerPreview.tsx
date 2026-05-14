import React from 'react';
import type { KillerComponentProps } from '../../../types/types';

const STAT_MAX = 10;

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
     return (
         <>
            <section className='bg-[var(--background)] pt-[50px] flex justify-center'>
                <div className="flex gap-[30px] mr-[100px]">
                    <div className='bg-[var(--accent-color)] mb-4 ml-[100px] relative max-w-[700px] h-[700px] overflow-hidden'>
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
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-[length:var(--title-text)] text-[color:var(--main-text-color)] font-bold'>{data.name}</h2>
                        <div>
                            <h3 className="mb-2 text-[length:var(--main-text-size)] font-semibold text-[color:var(--main-text-color)]">
                                Описание
                            </h3>
                             <p className="text-[color:var(--main-text-color)] w-[400px] h-[100px] whitespace-normal break-words hyphens-auto verflow-y-auto overflow-x-hidden box-border text-base leading-relaxed" >{data.description}</p>
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
                    </div>
                </div>
            </section>   
         </>
    )
};