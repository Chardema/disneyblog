export function Card({ children, className }) {
  return (
    <div
      className={`rounded-xl border border-neutral-200 bg-white/70 backdrop-blur-sm shadow-sm transition-shadow hover:shadow-md ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return (
    <div className={`p-6 ${className || ""}`}>{children}</div>
  );
}