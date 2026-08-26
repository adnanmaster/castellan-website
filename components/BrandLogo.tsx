import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  href?: string;
  className?: string;
  priority?: boolean;
  dark?: boolean;
};

export default function BrandLogo({ href, className = "", priority = false, dark = false }: BrandLogoProps) {
  const logo = (
    <Image
      src="/masterlogo.svg"
      alt="Castellan"
      width={1600}
      height={520}
      className={`h-auto w-full transition-[filter] duration-200 ${dark ? "" : "invert"}`}
      priority={priority}
    />
  );

  if (!href) {
    return <div className={className}>{logo}</div>;
  }

  return (
    <Link href={href} aria-label="Castellan Startseite" className={`block ${className}`}>
      {logo}
    </Link>
  );
}
