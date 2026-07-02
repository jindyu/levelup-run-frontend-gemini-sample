import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Level Up Running",
  description: "AI 러닝 코칭 및 크루 모집",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body suppressHydrationWarning className="bg-slate-100 text-slate-950">
        {/* 모바일 뷰포트 레이아웃 스타일링 (최대 가로폭 제한) */}
        <div className="max-w-md min-h-screen mx-auto bg-white flex flex-col shadow-lg relative">
          {/* 헤더 영역 */}
          <header className="h-14 border-b border-slate-100 items-center px-4 sticky top-0 bg-white/80 backdrop-blur-md z-10">
            <Link href="/" className="font-extrabold text-lg text-blue-600 tracking-tight">
              ⚡ LEVEL UP RUN
            </Link>
          </header>

          {/* 메인 컨텐츠 영역 */}
          <div className="flex-1 pb-20">
            {children}
          </div>
          
          {/* 푸터 영역 */}
          <nav className="fixed bottom-0 max-w-md w-full h-16 bg-white border-t border-slate-100 flex justify-around items-center z-10">
            <Link href="/" className="flex flex-col items-center text-xs font-medium text-slate-600 hover:text-blue-600">
              <span className="text-xl">🏠</span>
              <span>홈</span>
            </Link>
            <Link href="/crews" className="flex flex-col items-center text-xs font-medium text-slate-600 hover:text-blue-600">
              <span className="text-xl">🏃</span>
              <span>크루</span>
            </Link>
            <Link href="/coach" className="flex flex-col items-center text-xs font-medium text-slate-600 hover:text-blue-600">
              <span className="text-xl">🤖</span>
              <span>AI 코칭</span>
            </Link>
          </nav>
        </div>
      </body>
    </html>
  );
}
