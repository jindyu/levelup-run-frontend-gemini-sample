export const dynamic = "force-dynamic"; // 이 페이지는 항상 서버에서 렌더링되어야 함을 명시

async function getLiveMetrics() {
    // 가상 데이터 반환
    return {
        liveRunners: Math.floor(Math.random() * 100) + 150,
        totalDistanceKm: 3420
    };
}

export default async function AnalyticsPage() {
    const metrics = await getLiveMetrics();
    return (
        <div>
            <h3 className="text-lg font-semibold mb-2 text-slate-900">실시간 라이브 지표</h3>
            <p className="text-xs text-slate-500 mb-4">(접근 시마다 동적 계산 - force-dynamic)</p>
            <div className="space-y-2">
                <div className="flex justify-between border-b border-slate-200 pb-1">
                    <span className="text-xs text-slate-600">현재 달리는 중인 러너:</span>
                    <span className="font-bold text-blue-600">{metrics.liveRunners}명</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1">
                    <span className="text-xs text-slate-600">금일 달린 거리:</span>
                    <span className="font-bold text-slate-800">{metrics.totalDistanceKm} km</span>
                </div>
            </div>
        </div>
    );
}