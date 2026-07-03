'use client';

import { useActionState } from "react";
import { joinCrewAction, ActionState } from "./actions";

const initialState: ActionState = {
    success: false,
    message: ""
};

export default function DashboardPage() {
    const [state, formAction, isPending] = useActionState(joinCrewAction, initialState);

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">크루 간편 가입 (보안 검증)</h2>
            <form action={formAction} className="space-y-4 max-w-md">
                <div>
                    <label htmlFor="crewId" className="block text-sm font-medium text-slate-700">크루 선택</label>
                    <select
                        name="crewId"
                        className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">선택하세요</option>
                        <option value="crew-01">크루 1</option>
                        <option value="crew-02">크루 2</option>
                    </select>
                    {state.error?.crewId && (
                        <p className="mt-1 text-sm text-red-600">{state.error.crewId[0]}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="runnerName" className="block text-sm font-medium text-slate-700">러너 이름</label>
                    <input
                        type="text"
                        id="runnerName"
                        name="runnerName"
                        placeholder="러너 이름을 입력하세요"
                        className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    {state.error?.runnerName && (
                        <p className="mt-1 text-sm text-red-600">{state.error.runnerName[0]}</p>
                    )}
                </div>
                <button
                    type="submit"
                    disabled={isPending}
                    className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                    {isPending ? "처리 중..." : "신청하기"}
                </button>
                {state.message && (
                    <p className={`mt-2 text-sm ${state.success ? 'text-green-600' : 'text-red-600'}`}>
                        {state.message}
                    </p>
                )}
            </form>
        </div>
    );
}