import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "start",
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "start" | "center";
}) {
  return (
    <Reveal
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">{body}</p>
      ) : null}
    </Reveal>
  );
}
