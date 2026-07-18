import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { links, privacy } from "@/lib/content";

export function Privacy() {
  return (
    <section className="border-b border-rule py-12 sm:py-14 lg:py-16">
      <Container>
        <SectionHeading eyebrow={privacy.eyebrow} title={privacy.title} />
        <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-rule border-s-4 border-s-accent bg-interface p-6 shadow-sm sm:p-8">
          <p className="text-lg leading-relaxed text-ink-soft">{privacy.body}</p>
          <a
            href={links.privacyPolicy}
            className="mt-3 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-accent underline decoration-rule decoration-2 underline-offset-4 hover:text-accent-hover"
          >
            {privacy.linkLabel}
          </a>
        </div>
      </Container>
    </section>
  );
}
