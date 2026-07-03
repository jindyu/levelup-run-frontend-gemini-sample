async function getCacheCrews() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users?limit=3", { next: { tags: ["dashboard-crews"] }  });

    if (!res.ok) {
        throw new Error("Failed to fetch crews");
    }

    return res.json();
}

export default async function CrewsSlot() {
    const crews = await getCacheCrews();
    const timestamp = new Date().toLocaleTimeString();

    return (
        <div>
            <h3 className="text-lg font-semibold mb-2 text-slate-900">모집 중인 크루 현황</h3>
            <p className="text-xs text-slate-500 mb-4">마지막 캐시 갱신: {timestamp}</p>
            <ul className="space-y-2">
                {crews.map((crew: any) => (
                    <li key={crew.id} className="text-sm text-slate-700 bg-white p-2 rounded border border-slate-200">
                        {crew.name.split(" ")[0]} 레이싱 클럽 (정원 여유)
                    </li>
                ))}
            </ul>
        </div>
    );
}