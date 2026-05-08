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
} 