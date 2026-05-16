export interface IButtonDefault {
  name?: string;
  handleClick?: () => void;
  styleButton?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'outline' | 'continue';
  ariaLabel?: string;
  children?: React.ReactNode;
  status?: boolean;
}

export interface IMiniCard {
    src: string;
    alt: string;
    title?: string;
    border?: boolean;
    children: React.ReactNode;
    /** Выбор карточки убийцы: родитель передаёт id через замыкание и обновляет превью */
    onClick?: () => void;
} 

export interface KillerComponentProps {
  data: KillerPreviewData;
}

/** Один перк в данных превью: `key` = `KillerPreviewData.id` (тот же, что `killerId` у Minicard). */
export interface KillerPerkEntry {
  id: string;
  key: string;
  title: string;
  image: string;
  description: string;
}

export interface KillerPreviewData {
  id: string;
  name: string;
  image: string;
  description: string;
  hints: string;
  difficulty: number;
  mobility: number;
  control: number;
  info: number;
  perks: KillerPerkEntry[];
  children?: React.ReactNode;
}
