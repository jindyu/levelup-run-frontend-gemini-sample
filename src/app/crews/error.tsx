"use client";

import { useEffect } from "react";

interface CrewsErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function CrewsError({ error, reset }: CrewsErrorProps) {
    useEffect(() => {
        console.error("Error in CrewsPage:", error);
    }, [error]);

    return (
        <div className="p-6 text-center py-12">
            <div className="text-4xl mb-4">⚠️</div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">크루 목록을 불러오지 못했습니다</h2>
            <p className="text-sm text-slate-500 mb-6">네트워크 연결 상태를 확인하거나 잠시 후 다시 시도해 주세요.</p>
            
            <button
                onClick={() => reset()}
                className="px-4 py-2 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition text-sm"
            >
                다시 시도하기
            </button>
        </div>
    );
}