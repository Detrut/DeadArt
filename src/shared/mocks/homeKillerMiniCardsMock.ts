/**
 * Карточки на главной: визуал и текст слота + `killerId` из `killersPreviewMockList`.
 */

export interface HomeKillerMiniCardMock {
    killerId: string;
    src: string;
    alt: string;
    title?: string;
    teaser: string;
    border?: boolean;
}

export const homeKillerMiniCardsMock: HomeKillerMiniCardMock[] = [
    {
        killerId: "1",
        src: "src\\shared\\assets\\images\\IconPowers_birdsOfTorment (2).png",
        alt: "Сила: вороны",
        title: "The Artist — вороны",
        teaser: "Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit.",
        border: false,
    },
    {
        killerId: "2",
        src: "src\\shared\\assets\\images\\bb59facee0955f5588e5384f038574d6689dd4a0.png",
        alt: "Промо-кадр",
        title: "The Dark Lord — тёмный лорд",
        teaser: "Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit.",
        border: true,
    },
    {
        killerId: "3",
        src: "src\\shared\\assets\\images\\Artist.jpg",
        alt: "Портрет убийцы",
        title: "The Singularity — сингулярность",
        teaser: "Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit.",
        border: true,
    },
    {
        killerId: "4",
        src: "src\\shared\\assets\\images\\IconPowers_birdsOfTorment (2).png",
        alt: "Иконка силы",
        title: "The Wrath — призрак",
        teaser: "Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit.",
        border: true,
    },
    {
        killerId: "5",
        src: "src\\shared\\assets\\images\\bb59facee0955f5588e5384f038574d6689dd4a0.png",
        alt: "Атмосфера",
        title: "The Lich — лич",
        teaser: "Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit.",
        border: true,
    },
];
