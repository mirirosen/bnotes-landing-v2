import Link from "next/link";
import { Button } from "@/components/ui/Button";

/*
 * Branded 404 — stays inside the night-desk world instead of breaking it.
 */
export default function NotFound() {
  return (
    <div className="hero-cinema relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <p className="text-sm font-semibold tracking-wide text-digital">404</p>
      <h1 className="mt-3 max-w-xl text-3xl font-bold leading-tight text-paper sm:text-4xl">
        הדף הזה לא נכנס לסיכום.
      </h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-[#c9c2b2]">
        הקישור שהגעתם אליו לא קיים — אבל ההרצאה ממשיכה בעמוד הראשי.
      </p>
      <div className="mt-8">
        <Button href="/">חזרה לעמוד הראשי</Button>
      </div>
      {/* the thread, resting */}
      <span
        aria-hidden="true"
        className="mt-12 block h-0.5 w-40 rounded-full bg-gradient-to-l from-digital via-accent to-marker"
      />
      <Link href="/" className="sr-only">
        חזרה לעמוד הראשי של B Notes
      </Link>
    </div>
  );
}
