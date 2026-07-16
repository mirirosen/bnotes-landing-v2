import type { Metadata } from "next";
import { Frank_Ruhl_Libre, Assistant } from "next/font/google";
import "./globals.css";

const frankRuhlLibre = Frank_Ruhl_Libre({
  variable: "--font-frank-ruhl",
  subsets: ["hebrew", "latin"],
  weight: ["500", "700"],
  display: "swap",
});

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "B Notes — הרצאה אונליין הופכת לסיכום לימודי מסודר",
  description:
    "B Notes הוא תוסף Chrome שמתמלל הרצאות אונליין בזמן אמת והופך אותן בסיום לסיכום לימודי ברור, מחולק לנושאים. תמיכה ב-Zoom, YouTube, Panopto, Vimeo ו-Microsoft Teams.",
  metadataBase: new URL("https://bnotes.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "B Notes — הרצאה אונליין הופכת לסיכום לימודי מסודר",
    description:
      "תוסף Chrome שמתמלל בזמן אמת ומפיק סיכום מסודר בסיום ההרצאה.",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "/media/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "B Notes — חוט דיו כחול זורם ממסך הרצאה אל דף סיכום מסודר",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "B Notes — הרצאה אונליין הופכת לסיכום לימודי מסודר",
    description:
      "תוסף Chrome שמתמלל בזמן אמת ומפיק סיכום מסודר בסיום ההרצאה.",
    images: ["/media/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${frankRuhlLibre.variable} ${assistant.variable} h-full`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-paper font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-paper"
        >
          דילוג לתוכן הראשי
        </a>
        {children}
      </body>
    </html>
  );
}
