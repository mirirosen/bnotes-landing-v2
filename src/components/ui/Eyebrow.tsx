export function Eyebrow({
  children,
  tone = "default",
}: {
  children: string;
  tone?: "default" | "light";
}) {
  return (
    <p
      className={`text-sm font-semibold tracking-wide ${
        tone === "light" ? "text-digital" : "text-accent"
      }`}
    >
      {children}
    </p>
  );
}
