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

export interface KillerPreviewData {
  id: string;
  name: string;
  image: string;
  description: string;
  difficulty: number;
  mobility: number;
  control: number;
  info: number;
  perks:[
    {
      id: string;
      title: string;
      image: string;
      description: string;
    },
    {
      id: string;
      title: string;
      image: string;
      description: string;
    },
    {
      id: string;
      title: string;
      image: string;
      description: string;
    }
  ];
  children?: React.ReactNode;
}