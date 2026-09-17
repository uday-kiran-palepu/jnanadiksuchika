import Image from "next/image";

const STOCK = [
  "/images/stock-1.jpg",
  "/images/stock-2.jpg",
  "/images/stock-3.jpg",
  "/images/stock-4.jpg",
  "/images/stock-5.jpg",
  "/images/stock-6.jpg",
  "/images/stock-7.jpg",
  "/images/stock-8.jpg",
  "/images/stock-9.jpg",
  "/images/stock-10.jpg",
];

function stockForAlt(alt: string): string {
  let h = 0;
  for (let i = 0; i < alt.length; i++) h = (h + alt.charCodeAt(i)) % STOCK.length;
  return STOCK[h];
}

type ImagePlaceholderProps = {
  className?: string;
  alt: string;
  src?: string;
  priority?: boolean;
};

export function ImagePlaceholder({
  className = "",
  alt,
  src,
  priority,
}: ImagePlaceholderProps) {
  const imageSrc = src ?? stockForAlt(alt);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
      />
    </div>
  );
}

export const BRAND_LOGO_SRC = "/images/logo.png";
