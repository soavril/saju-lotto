import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: {
    default: "사주 로또 번호 생성기 - 이번 주 나만의 행운 번호",
    template: "%s | 사주 로또",
  },
  description:
    "생년월일 기반으로 이번 주 나만의 로또 번호를 뽑아보세요. 사주의 기운을 담은 재미있는 번호 생성기입니다. 오락 목적으로만 제공됩니다.",
  keywords: ["로또", "사주", "번호 생성기", "행운 번호", "로또 번호", "무료"],
  authors: [{ name: "사주로또" }],
  creator: "사주로또",
  publisher: "사주로또",
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL("https://saju-lotto.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://saju-lotto.vercel.app",
    siteName: "사주 로또 번호 생성기",
    title: "사주 로또 번호 생성기 - 이번 주 나만의 행운 번호",
    description:
      "생년월일 기반으로 이번 주 나만의 로또 번호를 뽑아보세요. 재미로 즐기는 번호 생성기!",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "사주 로또 번호 생성기",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "사주 로또 번호 생성기",
    description: "생년월일로 이번 주 행운 번호를 뽑아보세요!",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "추후_구글_인증_코드_입력",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1a56db" />
      </head>
      <body className={notoSansKR.className}>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
