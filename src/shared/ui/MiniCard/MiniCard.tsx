import type { KeyboardEventHandler } from 'react';
import type { IMiniCard } from '../../../types/types';

export default function MiniCard({
    src,
    alt,
    title,
    children,
    border: _border,
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
        <>
            <div
                className={`w-[300px] h-[400px] bg-[var(--background)] flex flex-col items-center justify-center reletive`}
                role={interactive ? 'button' : undefined}
                tabIndex={interactive ? 0 : undefined}
                onClick={onClick}
                onKeyDown={interactive ? handleKeyDown : undefined}
            >
                <img className="w-[80%] h-[230px] object-cover rounded-[10px]" src={src} alt={alt} />
                <h3 className="text-[length:var(--main-text-size)] text-[color:var(--main-text-color)] font-bold">{title}</h3>
                <p className="text-center text-[length:var(--main-text-size)] text-[color:var(--main-text-color)]">{children}</p>
            </div>
        </>
    )
}