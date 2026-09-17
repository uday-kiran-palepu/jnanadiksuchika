type ImagePlaceholderProps = {
  className?: string;
  alt: string;
};

/** TODO: replace with real photo asset */
export function ImagePlaceholder({ className = "", alt }: ImagePlaceholderProps) {
  return (
    <div
      className={`bg-gray-300 shrink-0 ${className}`}
      role="img"
      aria-label={alt}
    />
  );
}
