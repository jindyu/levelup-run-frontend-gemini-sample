import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  analytics: React.ReactNode;
  crews: React.ReactNode;
}

export default function DashboardLayout({ children, analytics, crews }: DashboardLayoutProps) {
  return (
    <div className="p-6 max-w-7xl max-auto space-y-6">
        <h1 className="text-3xl font-bold trackig-tight">러닝 대시보드</h1>

        {/* 메인 콘텐츠 (Zod 검증 폼) */}
        <div className="bg-white p-2 roudned-xl border border-slate-200 shadow-sm">
            {children}
        </div>

        {/* 병렬 라우팅 슬롯 배치 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-2 border border-slate-200 rounded-xl bg-slate-50">
                {analytics}
            </div>
            <div className="p-2 border border-slate-200 rounded-xl bg-slate-50">
                {crews}
            </div>
        </div>
    </div>
  );
}