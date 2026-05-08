import type { IButtonDefault } from "../../../types/types";

export default function ButtonDefault({
    name,
    type,
    styleButton,
    ariaLabel,
    children,

}: IButtonDefault) {
    return (
        <button type={type} className={styleButton} aria-label={ariaLabel}>
            {children || name}
        </button>
    )
}