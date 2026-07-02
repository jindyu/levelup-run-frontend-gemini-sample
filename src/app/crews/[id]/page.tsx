import Link from 'next/link';

interface CrewDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function CrewDetailPage({ params }: CrewDetailPageProps) {
  const { id } = await params;

  return (
    <main className="p-6">
        <div className="mb-4">
            <Link href="/crews" className="text-xs text-blue-500 hover:underline">
                ← 목록으로 돌아가기
            </Link>
        </div>
        <div className="border border-slate-100 rounded-2xl p-6 bg-slate-50">
            <span className="text-xs font-bold text-slate-400">크루 식별자: ID {id}</span>
            <h1 className="text-2xl font-extrabold text-slate-900 mt-2 mb-4">
                {id === '1' ? '양재천 야간 불꽃 러닝 크루' : '여의도 새벽 한강공원 질주반'}
            </h1>

            <div className="space-y-3 text-sm text-slate-700">
                <p><strong>📍 장소:</strong> {id === '1' ? '양재천 매봉역 인근' : '여의도 한강공원 안내소 앞'}</p>
                <p><strong>⏰ 시간:</strong> {id === '1' ? '매주 수요일 저녁 8시' : '매주 토요일 오전 6시'}</p>
                <p><strong>🏃 목표 페이스:</strong> {id === '1' ? "6'00\"" : "5'30\""}</p>
            </div>

            <div className="mt-8">
                <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition shadow-md shadow-blue-100">
                    {id === '1' ? '크루 참가 신청하기' : '모집이 마감되었습니다'}
                </button>
            </div>
        </div>
    </main>
  );
}