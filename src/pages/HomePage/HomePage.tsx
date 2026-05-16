import { Fragment, useMemo, useRef, useState } from "react"
import Header from "../../feature/header/header"
import ButtonDefault from "../../shared/ui/ButtonDefault/ButtonDefault"
import MiniCard from "../../shared/ui/MiniCard/MiniCard"
import Separetor from "../../shared/ui/Separetor/Separetor"
import ScrolButton from "../../shared/ui/ScrolButton/ScrolButton"
import { KillerPreview } from "../../shared/ui/KillerPreview/KillerPreview"
import { homeKillerMiniCardsMock } from "../../shared/mocks/homeKillerMiniCardsMock"
import { getKillerPreviewDataById } from "../../shared/ui/KillerPreview/KillerPreviewMock"

export default function HomePage() {
    const cardsWrapperRef = useRef<HTMLDivElement>(null)
    const [selectedKillerId, setSelectedKillerId] = useState<string | null>(null)

    const selectedKiller = useMemo(
        () => (selectedKillerId ? getKillerPreviewDataById(selectedKillerId) : undefined),
        [selectedKillerId],
    )

    const handleCardsScroll = (direction: "left" | "right") => {
        if (!cardsWrapperRef.current) {
            return
        }

        const scrollStep = 340
        cardsWrapperRef.current.scrollBy({
            left: direction === "left" ? -scrollStep : scrollStep,
            behavior: "smooth",
        })
    }

    return (
        <>
        <Header />
        {/* Секция с изображением */}
        <section className="relative">
            <div className="absolute inset-0 flex items-center justify-center flex-col px-8 mb-[150px]">
                <h1 className="w-[70%] text-[length:var(--h1-size)] text-[color:var(--main-text-color)] font-bold z-10">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <h2 className="w-[70%] text-[length:var(--h2-size)] text-[color:var(--main-text-color)] font-bold z-10 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit eaque repellendus ex facere aspernatur fugiat eum voluptatem non beatae, quas dolorem excepturi blanditiis modi. Mollitia quos dolorum voluptas cum officia facere harum velit laudantium!</h2>
            </div>
            <div className="absolute flex gap-[40px] left-[41%] top-[70%]">
            <ButtonDefault
                type="button"
                name="Profile"
                styleButton="font-bold text-[length:var(--main-text-size)] rounded-[5%] bg-[var(--button-color-default)] w-[136px] h-[60px] flex items-center justify-center hover:bg-[var(--button-color-default-hover)] hover:text-[var(--acent-main-text-color)] z-10"
            >
                Начать
            </ButtonDefault>
            <ButtonDefault
                type="button"
                name="Profile"
                styleButton="text-[var(--main-text-color)] border border-[var(--button-color-default)] font-bold text-[length:var(--main-text-size)] rounded-[5%] bg-transparent w-[136px] h-[60px] flex items-center justify-center hover:bg-[var(--button-color-default-hover)] hover:text-[var(--acent-main-text-color)] z-10"
            >
                Профиль
            </ButtonDefault>
            </div>
            <div>
                <img className="max-h-[600px] w-full object-cover" src="src\shared\assets\images\EyeOfCrow.png" alt="Воронье гнездовье" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
            </div>
        </section>
        <section className="bg-[var(--background)] pt-[50px] px-6 relative">
            <div className="flex items-center justify-between mb-4 absolute top-[50%] left-1/2 -translate-x-1/2 z-10 w-full max-w-[1100px]">
                <ScrolButton direction="left" onClick={() => handleCardsScroll("left")} />
                <ScrolButton direction="right" onClick={() => handleCardsScroll("right")} />
            </div>
            <div ref={cardsWrapperRef} className="flex items-stretch overflow-x-auto scroll-smooth pb-4 max-w-[810px] mx-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {homeKillerMiniCardsMock.map((card, index) => (
                    <Fragment key={`${card.killerId}-${index}`}>
                        {index > 0 && <Separetor />}
                        <div className="shrink-0">
                            <MiniCard
                                src={card.src}
                                alt={card.alt}
                                title={card.title}
                                border={card.border}
                                onClick={() => setSelectedKillerId(card.killerId)}
                            >
                                {card.teaser}
                            </MiniCard>
                        </div>
                    </Fragment>
                ))}
            </div>
        </section>
        {/* Отображения информации об убийце при клике на карточку */}
        <section className="bg-[var(--background)] px-6 py-8">
            {selectedKiller ? (
                <KillerPreview data={selectedKiller} />
            ) : (
                <p className="mx-auto max-w-[900px] text-center text-[color:var(--main-text-color)] opacity-80">
                    Выберите карточку убийцы выше — здесь появится превью.
                </p>
            )}
        </section>
        </>
    )
};
