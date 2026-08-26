import { Image as ImageIcon } from "lucide-react";

type MediaPlaceholderProps = {
  label: string;
  hint?: string;
  aspect?: "hero" | "wide" | "landscape" | "portrait" | "square";
  fill?: boolean;
  className?: string;
};

const aspectClasses = {
  hero: "aspect-[16/10]",
  wide: "aspect-video",
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
};

export default function MediaPlaceholder({
  label,
  hint = "Hier später kuratiertes Bild einsetzen",
  aspect = "landscape",
  fill = false,
  className = "",
}: MediaPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`${label}. ${hint}`}
      className={`media-placeholder ${fill ? "media-placeholder--fill" : aspectClasses[aspect]} ${className}`}
    >
      {fill ? (
        <div className="absolute right-5 top-24 max-w-64 text-right md:right-8 md:top-28">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/45">Hero-Bildplatzhalter</p>
          <p className="mt-2 hidden text-xs leading-5 text-white/40 md:block">{label}</p>
        </div>
      ) : (
        <>
          <span className="absolute left-5 top-5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted">
            Bildplatzhalter
          </span>
          <div className="mx-auto flex max-w-xs flex-col items-center px-6 text-center">
            <span className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-black/25 text-accent">
              <ImageIcon className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="mt-5 text-sm font-semibold text-copy">{label}</p>
            <p className="mt-2 text-xs leading-5 text-muted">{hint}</p>
          </div>
        <span className="absolute bottom-5 right-5 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-quiet">
          {aspect}
        </span>
        </>
      )}
    </div>
  );
}
