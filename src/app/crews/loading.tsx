export default function CrewsLoading() {
    const skeletons = Array.from({ length: 3});
    return (
        <main className="p-6">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">러닝 크루 모집</h1>
            <div className="space-y-4">
                {skeletons.map((_, index) => (
                    <div key={index} className="p-4 border border-slate-200 rounded-xl bg-slate-50 animate-pulse">
                        <div className="h-5 bg-slate-200 rounded w-2/3 mb-3"></div>
                        <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                    </div>
                ))}
            </div>
        </main>
    );
}