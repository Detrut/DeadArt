interface IScrolButton {
  direction: "left" | "right";
  onClick: () => void;
}

export default function ScrolButton({ direction, onClick }: IScrolButton) {
  const isLeft = direction === "left";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isLeft ? "Прокрутить влево" : "Прокрутить вправо"}
      className="w-12 h-12 rounded-full border border-[var(--border-color)] text-[var(--main-text-color)] hover:bg-[var(--background-hover)] transition-colors duration-200 flex items-center justify-center"
    >
      <span className="text-2xl leading-none pb-[6px]">{isLeft ? "‹" : "›"}</span>
    </button>
  );
}
