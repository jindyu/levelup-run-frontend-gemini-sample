import Link from "next/link";

interface Crew {
    id: string;
    name: string;
    time: string;
    pace: string;
    status: string;
}

async function getCrews(): Promise<Crew[]> {
    const res = await fetch("http://localhost:3000/api/crews", { cache: "no-store" });

    if (!res.ok) {
        throw new Error("Failed to fetch crews");
    }

    return res.json();
}


export default async function CrewsPage() {
    const crews = await getCrews();

    return (
        <main className="p-6">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">러닝 크루 모집</h1>
            <div className="space-y-4">
                {crews.map((crew) => (
                    <Link key={crew.id} href={`/crews/${crew.id}`} className="block p-4 border border-slate-200 rounded-xl bg-white shadow-sm">
                        <div className="flex justify-between items-start">
                            <h2 className="text-lg font-bold mt-2">{crew.name}</h2>
                            <span className={`text-xs font-semibold px-2 py-1 rounded ${crew.status === '모집중' ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-500'}`}>
                                {crew.status}
                            </span>
                        </div>
                        
                        <p className="text-sm text-slate-500 mt-1">{crew.time} | 페이스 {crew.pace}</p>
                    </Link>
                ))}
            </div>
        </main>
    );
}   