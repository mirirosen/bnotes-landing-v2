"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { cta, links, nav } from "@/lib/content";
import { MobileNav } from "./MobileNav";

/*
 * Adaptive header: floats transparent over the dark cinematic hero, and
 * becomes paper-glass once the page scrolls. backdrop-blur is applied only at
 * lg+ — below that the mobile menu's position:fixed backdrop would be trapped
 * by the filter's containing block.
 */
export function Header() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header sticky top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        atTop
          ? "at-top border-transparent bg-transparent"
          : "border-rule/80 bg-paper shadow-[0_8px_30px_rgb(23_25_21/6%)] lg:bg-paper/85 lg:backdrop-blur-md"
      }`}
    >
      <Container className="flex h-20 items-center justify-between gap-2 sm:h-24 sm:gap-6">
        <a href="#" className="shrink-0 rounded-lg focus-visible:outline-offset-4">
          <Logo />
        </a>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="ניווט ראשי"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-ink-soft transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <Button
            href={links.chromeStore}
            target="_blank"
            rel="noopener noreferrer"
            showChromeIcon
            className="header-cta max-sm:[&_svg]:hidden !min-h-10 !rounded-lg !border !border-accent/35 !bg-transparent !px-3 !py-1.5 !text-xs !text-accent !shadow-none hover:!bg-accent/8 sm:!min-h-11 sm:!rounded-xl sm:!border sm:!border-[#9dc2d6]/30 sm:!bg-gradient-to-b sm:!from-[#2e618e] sm:!to-[#1e4266] sm:!px-5 sm:!text-sm sm:!text-interface sm:!shadow-[0_6px_22px_rgb(36_79_118/45%),inset_0_1px_0_rgb(255_255_255/14%)] sm:hover:!from-[#356c9c] sm:hover:!to-[#245078]"
          >
            <span className="hidden sm:inline">{cta.primary}</span>
            <span className="sm:hidden">{cta.headerMobile}</span>
          </Button>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
