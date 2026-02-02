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
    default: "사주 행운 번호 생성기 - 생년월일 기반 로또 번호",
    template: "%s | 사주 행운 번호",
  },
  description:
    "생년월일과 이번 주 테마를 조합해 나만의 행운 번호 5세트를 생성합니다. 재미로 즐기는 무료 번호 생성기입니다.",
  keywords: ["로또", "사주", "번호 생성기", "행운 번호", "로또 번호", "무료"],
  authors: [{ name: "사주로또" }],
  creator: "사주로또",
  publisher: "사주로또",
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL("https://saju-number.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://saju-number.com",
    siteName: "사주 행운 번호",
    title: "사주 행운 번호 생성기 - 생년월일 기반 로또 번호",
    description:
      "생년월일과 이번 주 테마를 조합해 나만의 행운 번호 5세트를 만들어 드려요.",
  },
  twitter: {
    card: "summary_large_image",
    title: "사주 행운 번호 생성기",
    description: "생년월일 기반 행운 번호 생성기",
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
        <meta name="theme-color" content="#1a56db" />
        {/* Naver Search Advisor 인증 */}
        <meta name="naver-site-verification" content="5c9fbcfa01b4e2addfeb83a20c4e6cc9dfb3833a" />
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5547434174125750"
          crossOrigin="anonymous"
        />
      </head>
      <body className={notoSansKR.className}>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
