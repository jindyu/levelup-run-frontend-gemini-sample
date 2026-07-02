import CoachCard from './CoachCard';

export default function CoachPage() {
    const serverSideMessage = `"최근 러닝 데이터를 분석한 결과, 후반 지점에서 케이던스가 약간 떨어지는 경향이 있습니다. 페이스 유지를 위해 피치를 조금 더 짧게 가져가 보세요."`;
    return (
        <main className="p-6">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">AI 러닝 코칭</h1>

            {/* CoachCard 컴포넌트에 서버 사이드 메시지를 전달 */}
            <CoachCard initialMessage={serverSideMessage} />
        </main>
    );
}   