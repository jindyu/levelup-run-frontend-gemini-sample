"use client";

import { useState } from "react";

interface CoachCardProps {
    initialMessage: string;
}

export default function CoachCard({ initialMessage }: CoachCardProps) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"/>
                    <p className="font-semibold text-emerald-800">AI 코치 분석 결과</p>
                </div>

                {/* Toggle button to open/close the message */}
                <button
                    className="text-xs textg-emerald-600 hover:underline font-medium"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? '접기' : '펼치기'}
                </button>
            </div>
            
            {isOpen && (
                <>
                    <p className="text-slate-700 leading-relaxed mb-4 text-sm">
                        {initialMessage}
                    </p>
                    <button 
                        onClick={() => alert('코칭 세션을 시작합니다!')} 
                        className="w-full py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition text-sm">
                        오늘의 코칭 세션 시작하기
                    </button>
                </>
            )}
        </div>
    );
}