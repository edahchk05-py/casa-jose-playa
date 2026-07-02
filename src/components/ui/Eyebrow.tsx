type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

/** A small gold hairline above an eyebrow label — a quiet, recurring signature across sections. */
export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <p className={`eyebrow flex items-center gap-3 ${className}`}>
      <span aria-hidden className="gold-rule h-px w-6 shrink-0" />
      {children}
    </p>
  );
}
