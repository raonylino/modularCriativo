import Image from "next/image";

type BrandLogoProps = { compact?: boolean };

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <a className={`brand${compact ? " brand--compact" : ""}`} href="#inicio" aria-label="Modular Criativo — início">
      <Image
        src="/logo-modular-criativo.png"
        alt="Modular Criativo"
        width={500}
        height={288}
        priority
      />
    </a>
  );
}
