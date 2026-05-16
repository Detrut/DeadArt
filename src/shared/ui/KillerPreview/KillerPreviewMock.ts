import type { KillerComponentProps, KillerPreviewData } from "@types";
import { portraitImg, perkImg } from "@assets/images/KillerImagesAll.ts";

const artistKiller: KillerPreviewData = {
    id: "1",
    name: "The Artist",
    image: portraitImg("Artist.jpg"),
    description:
        "Художница - убийца со средне-дальним радиусом атаки. Низкая мобильность компенсируется высоким уровнем контроля и сбора информации о действия выживших на карте",
    hints: "Вороны - почти как топоры. Только круче. Но не стоит забывать про М1.",
    difficulty: 8,
    mobility: 3,
    control: 7,
    info: 6,
    perks: [
        {
            id: "1",
            key: "1",
            title: "Секущий крюк - резонанс боли",
            image: perkImg("T_iconPerks_painResonance.png"),
            description:
                "При повесе на секущий крюк выжившего в первый раз, генератор с самым большим прогрессом на карте взрывается, теряя 20% от общего прогресса, и начинает регрессировать.",
        },
        {
            id: "2",
            key: "1",
            title: "Мрачные объятия",
            image: perkImg("T_iconPerks_grimEmbrace.png"),
            description: "За каждый уникальный повес - блокирует все генераторы на 6 секунд. Блокирует все генераторы на 40 секунд при повесе каждого выжившего на крюк. Подсвечивает объект одержимости на 6 секунд.",
        },
        {
            id: "3",
            key: "1",
            title: "Порча: пентименто",
            image: perkImg("T_iconPerks_hexPentimento.png"),
            description: "Позволяет восстанавливать сломанные тотемы. Замедляет процесс починки и лицения на 30% + 5% за каждый восстановленный тотем.",
        },
    ],
};

const DarkLordKiller: KillerPreviewData = {
    id: "2",
    name: "The Dark Lord",
    image: portraitImg("TheDarkLord.jpg"),
    description:
        "Дракула - высокая мобильность с возможность эффективно закрывать лупы по средствам переключения между формами.",
    hints: "Промазал одной способностью - не беда. У тебя их еще 2!",
    difficulty: 7,
    mobility: 7,
    control: 5,
    info: 5,
    perks: [
        {
            id: "1",
            key: "2",
            title: "Порча: Горькая участь",
            image: perkImg("iconPerks_HexWretchedFate.png"),
            description:
                "При заводке первого генератора, активируется порча. Объект одержимости страдает от 33% дебафа к починке.",
        },
        {
            id: "2",
            key: "2",
            title: "Человеческая жадность",
            image: perkImg("iconPerks_HumanGreed.png"),
            description: "При приближении к закрытому сундуку, выживший в 8и метрах подсвечивается на 3 секунды. Позволяет закрывать сундуки.",
        },
        {
            id: "3",
            key: "2",
            title: "Доминирование",
            image: perkImg("iconPerks_Dominance.png"),
            description: "Блокирует сундук или тотем при первой попытки с ними провзаимодействовать на 16 секунд. Такие объеты подсвечиваются белым убийце.",
        },
    ],
};

const singularityKiller: KillerPreviewData = {
    id: "3",
    name: "Singularity",
    image: portraitImg("Singul.jpg"),
    description:
        "Сингулярность - известный шахматист. Этот парень отлично играет в них, успевая следить за генераторами",
    hints: "Требует очень высокой скорости реакции. Не полагайтесь на авто-наведение.",
    difficulty: 7,
    mobility: 6,
    control: 8,
    info: 10,
    perks: [
        {
            id: "1",
            key: "3",
            title: "Вынужденная нерешительность",
            image: perkImg("IconPerks_ForcedHesitation.png"),
            description:
                "Когда вы наносите выжившему смертельно ранение, остальные выжившие в радиусе 16м от него получают 20% эффекта замедления на 10 сек.",
        },
        {
            id: "2",
            key: "3",
            title: "Генетические ограничения",
            image: perkImg("IconPerks_GeneticLimits.png"),
            description: "Когда выживший получает урон, он получает эффект усталость на 8 секунд.",
        },
        {
            id: "3",
            key: "3",
            title: "Машинное обучение",
            image: perkImg("IconPerks_SelfAware.png"),
            description: "При заводке последнего поврежденного генератора - вы получаете спешку 8% и незаметность на 60 секунд.",
        },
    ],
};

const wrathKiller: KillerPreviewData = {
    id: "4",
    name: "The Wrath",
    image: portraitImg("Wrath.jpg"),
    description:
        "Призрак — машина по вытуннеливанию и поеданию всего спавна на карте",
    hints: "Выбирайте для туннеля только не одержимость.",
    difficulty: 6,
    mobility: 4,
    control: 9,
    info: 8,
    perks: [
        {
            id: "1",
            key: "4",
            title: "Детище тьмы",
            image: perkImg("iconPerks_Shadowborn.png"),
            description:
                "Когда вас ослепляют, вы получаете спешку в 10% на 10 сек.",
        },
        {
            id: "2",
            key: "4",
            title: "Хищник",
            image: perkImg("iconPerks_Predator.png"),
            description: "Прекращая погоню за выжившим, вы видите его ауру в течение 4 сек.",
        },
        {
            id: "3",
            key: "4",
            title: "Ищейка",
            image: perkImg("iconPerks_Bloodhound.png"),
            description: "Следы крови становятся ярче и пропадают на 4 секунды дольше",
        },
    ],
};

const lichKiller: KillerPreviewData = {
    id: "5",
    name: "The Lich",
    image: portraitImg("Lich.jpg"),
    description:
        "Лич - убийца с различными инструментами для эффективной погони и получения информации о нахождении выживших",
    hints: "Небольше пианино. Не стесняйтесь использовать каждый спэл. Даже сферу.",
    difficulty: 6,
    mobility: 5,
    control: 3,
    info: 5,
    perks: [
        {
            id: "1",
            key: "5",
            title: "Связь с плетением",
            image: perkImg("iconPerks_WeaveAttunement.png"),
            description:
                "Рыскрывает ауру выжившего в 12 метрах от предмета на земле.",
        },
        {
            id: "2",
            key: "5",
            title: "Темное высокомерие",
            image: perkImg("iconPerks_DarkArrogance.png"),
            description: "Вы совершаете базовые прыжки в окна на 25% быстрее. Слепота и оглушение от доски длится на 15% дольше.",
        },
        {
            id: "3",
            key: "5",
            title: "Безжизненное касание",
            image: perkImg("iconPerks_LanguidTouch.png"),
            description: "В 36 метрах от вас любой выживший, спугнувший ворону, получет усталость на 10 секунд.",
        },
    ],
};

export const killersPreviewMockList: KillerPreviewData[] = [
    artistKiller,
    DarkLordKiller,
    singularityKiller,
    wrathKiller,
    lichKiller,
];

export function getKillerPreviewDataById(id: string): KillerPreviewData | undefined {
    return killersPreviewMockList.find((k) => k.id === id);
}

export const KillerPreviewMock: KillerComponentProps = {
    data: killersPreviewMockList[0]!,
};
