import type { KillerComponentProps, KillerPreviewData } from "../../../types/types";

const lorem = "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus.";

function perksFor(killerLabel: string): KillerPreviewData["perks"] {
    return [
        {
            id: "1",
            title: `${killerLabel}: перк I`,
            image: "",
            description: lorem,
        },
        {
            id: "2",
            title: `${killerLabel}: перк II`,
            image: "",
            description: lorem,
        },
        {
            id: "3",
            title: `${killerLabel}: перк III`,
            image: "",
            description: lorem,
        },
    ];
}

const artistKiller: KillerPreviewData = {
    id: "1",
    name: "The Artist",
    image: "src\\shared\\assets\\images\\Artist.jpg",
    description:
        "Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit.",
    difficulty: 8,
    mobility: 3,
    control: 8,
    info: 6,
    perks: perksFor("The Artist"),
};

const tricksterKiller: KillerPreviewData = {
    id: "2",
    name: "The Dark Lord",
    image: "src\\shared\\assets\\images\\bb59facee0955f5588e5384f038574d6689dd4a0.png",
    description:
        "The Dark Lord.",
    difficulty: 4,
    mobility: 7,
    control: 5,
    info: 9,
    perks: perksFor("The Dark Lord"),
};

const legionKiller: KillerPreviewData = {
    id: "3",
    name: "Singularity",
    image: "src\\shared\\assets\\images\\Artist.jpg",
    description:
        "SingularitySingularitySingularitySingularitySingularitySingularitySingularitySingularitySingularitySingularitySingularitySingularity.",
    difficulty: 5,
    mobility: 9,
    control: 4,
    info: 5,
    perks: perksFor("Singularity"),
};

const onryoKiller: KillerPreviewData = {
    id: "4",
    name: "The Wrath",
    image: "src\\shared\\assets\\images\\IconPowers_birdsOfTorment (2).png",
    description:
        "The Wrath. Quis fugit eaque repellendus ex facere aspernatur.",
    difficulty: 6,
    mobility: 4,
    control: 9,
    info: 8,
    perks: perksFor("The Wrath"),
};

const dredgeKiller: KillerPreviewData = {
    id: "5",
    name: "The Lich",
    image: "src\\shared\\assets\\images\\bb59facee0955f5588e5384f038574d6689dd4a0.png",
    description:
        "The Lich Quis fugit eaque repellendus ex facere aspernatur.",
    difficulty: 7,
    mobility: 5,
    control: 6,
    info: 7,
    perks: perksFor("The Lich"),
};

/** Список убийц для превью: id должны совпадать с `killerId` в `homeKillerMiniCardsMock` */
export const killersPreviewMockList: KillerPreviewData[] = [
    artistKiller,
    tricksterKiller,
    legionKiller,
    onryoKiller,
    dredgeKiller,
];

export function getKillerPreviewDataById(id: string): KillerPreviewData | undefined {
    return killersPreviewMockList.find((k) => k.id === id);
}

export const KillerPreviewMock: KillerComponentProps = {
    data: killersPreviewMockList[0]!,
};
