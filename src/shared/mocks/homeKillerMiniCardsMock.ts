import { powerImg } from "@assets/images/KillerImagesAll.ts";

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
        src: powerImg("T_iconPowers_birdsOfTorment"),
        alt: "Сила: Художница",
        title: "The Artist — Художница",
        teaser: "Терзающие птицы - отличный вариант для сильного контроля карты и закрытия лупов",
        border: false,
    },
    {
        killerId: "2",
        src: powerImg("iconPowers_K37_Shapeshift"),
        alt: "Сила: Дракула",
        title: "The Dark Lord — Тёмный лорд",
        teaser: "Смена облика - высокая мобильность и возможность быстро сокращать дистанцию",
        border: true,
    },
    {
        killerId: "3",
        src: powerImg("iconPowers_quantumInstantiation"),
        alt: "Сила: Сингулярность",
        title: "The Singularity — Сингулярность",
        teaser: "Квантовый скачок - большое давление на карту, а так же контроль генераторов",
        border: true,
    },
    {
        killerId: "4",
        src: powerImg("iconPowers_bell"),
        alt: "Сила: Колокол",
        title: "The Wrath — Призрак",
        teaser: "Колокол - возможность контролировать повешенных и быстро выводить их из игры",
        border: true,
    },
    {
        killerId: "5",
        src: powerImg("iconPowers_VileDarkness"),
        alt: "Сила: Лич",
        title: "The Lich — Лич",
        teaser: "Гримуар - универсальное решение для погони и сбора информации по карте",
        border: true,
    },
];
