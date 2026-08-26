type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={`${centered ? "mx-auto max-w-4xl text-center" : "max-w-3xl"} ${className}`}>
      <p className={`eyebrow ${centered ? "justify-center" : ""}`}>{eyebrow}</p>
      <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-copy sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <div className={`${centered ? "mx-auto" : ""} mt-6 max-w-2xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8`}>
          {description}
        </div>
      ) : null}
    </div>
  );
}
