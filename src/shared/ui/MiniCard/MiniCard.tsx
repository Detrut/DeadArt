
import type { IMiniCard } from '../../../types/types';

export default function MiniCard({
    src,
    alt,
    title,
    children,
    border,
}: IMiniCard) {
    return (
        <div className={`w-[300px] h-[400px] bg-[var(--background)] ${border ? 'border-l border-[var(--border-color)]' : ''} flex flex-col items-center justify-center gap-4`}>
            <img className="w-[80%] h-[200px] object-cover rounded-[10px]" src={src} alt={alt} />
            <h3 className="text-[length:var(--main-text-size)] text-[color:var(--main-text-color)] font-bold">{title}</h3>
            <p className="ml-[36px] text-[length:var(--main-text-size)] text-[color:var(--main-text-color)]">{children}</p>
        </div>
    )
}