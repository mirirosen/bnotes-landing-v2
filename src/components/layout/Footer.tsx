import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { footer, links } from "@/lib/content";

/* A short dark close, right after Pricing's own cinematic bookend strip. */
export function Footer() {
  return (
    <footer className="on-dark border-t border-[#2a2a2e] bg-[#141417]">
      <Container className="flex flex-col gap-4 py-10 text-sm text-[#c9c2b2] sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <Logo className="opacity-95" />
          <p className="text-xs text-[#8d867a]">{footer.copyright}</p>
        </div>
        <nav className="flex flex-wrap gap-6" aria-label="קישורי מידע">
          <a href={links.privacyPolicy} className="transition-colors hover:text-digital">
            מדיניות פרטיות
          </a>
          <a
            href={links.productionSite}
            className="transition-colors hover:text-digital"
            rel="noopener noreferrer"
          >
            bnotes.ai
          </a>
        </nav>
      </Container>
    </footer>
  );
}
