export default function Loading() {
  return (
    <div className="flex h-[70vh] w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <span
          className="block h-9 w-px bg-soft-gold/70"
          style={{ animation: "loading-pulse 1.4s ease-in-out infinite" }}
        />
        <span className="eyebrow text-stone/70">Casa Jose Playa</span>
      </div>
    </div>
  );
}
