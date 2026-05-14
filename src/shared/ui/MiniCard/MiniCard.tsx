import type { KeyboardEventHandler } from 'react';
import type { IMiniCard } from '../../../types/types';

export default function MiniCard({
    src,
    alt,
    title,
    children,
    border,
    onClick,
}: IMiniCard) {
    const interactive = Boolean(onClick);

    const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
        if (!onClick) return;
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick();
        }
    };

    return (
        <div
            className={`w-[300px] h-[400px] bg-[var(--background)] ${border ? 'border-l border-[var(--border-color)]' : ''} flex flex-col items-center justify-center gap-4 ${interactive ? 'cursor-pointer select-none outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[var(--button-color-default)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]' : ''}`}
            role={interactive ? 'button' : undefined}
            tabIndex={interactive ? 0 : undefined}
            onClick={onClick}
            onKeyDown={interactive ? handleKeyDown : undefined}
        >
            <img className="w-[80%] h-[200px] object-cover rounded-[10px]" src={src} alt={alt} />
            <h3 className="text-[length:var(--main-text-size)] text-[color:var(--main-text-color)] font-bold">{title}</h3>
            <p className="ml-[36px] text-[length:var(--main-text-size)] text-[color:var(--main-text-color)]">{children}</p>
        </div>
    )
}