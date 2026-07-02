import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="p-6">
      <div className="py-8 text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-1">오늘도 달려볼까요?</h2>
        <p className="text-sm text-slate-600">AI 코치가 당신의 페이스를 분석할 준비를 마쳤습니다.</p>
      </div>      

      <div className="space-y-4">
        <h3 className="font-bold text-slate-800">최근 나의 활동</h3>
        <div className="p-4 border border-slate-100 rounded-xl bg-slate-50">
          <p className="text-xs text-slate-400">2026.06.28</p>
          <div className="flex justify-between items-center mt-1">
            <span className="font-semibold">양재천 모닝 러닝</span>
            <span className="text-sm font-bold text-blue-600">5.2 km</span>
          </div>
        </div>
      </div>
    </main>
  );
}