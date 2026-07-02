import { createCrewAction } from '../actions';

export default function NewCrewPage() {
    return (
        <main className="p-6">
            <h1 className="text-2xl font-bold text-slate-900 mb-6">새 러닝 크루 개설</h1>

            {/* action 속성에 복잡한 URL 대신 Server Action 함수를 그대로 바인딩합니다 */}
            <form action={createCrewAction} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">크루 이름</label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="예: 서울 마라톤 러닝 크루"
                        required 
                        className="w-full p-3 border border-slate-200 rounded-xl text-sm focus:outline-blue-500" />
                </div>
                <div>
                    <label htmlFor="time" className="block text-sm font-semibold text-slate-700 mb-1">정기 일정</label>
                    <input 
                        type="text" 
                        name="time" 
                        placeholder="예: 매주 토요일 19:00"
                        required 
                        className="w-full p-3 border border-slate-200 rounded-xl text-sm focus:outline-blue-500" />
                </div>
                <div>
                    <label htmlFor="pace" className="block text-sm font-semibold text-slate-700 mb-1">목표 페이스</label>
                    <input 
                        type="text" 
                        name="pace" 
                        placeholder={'예: 6\'00"'}
                        required 
                        className="w-full p-3 border border-slate-200 rounded-xl text-sm focus:outline-blue-500" />
                </div>
                <button 
                    type="submit" 
                    className="w-full py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition text-sm mt-4">크루 생성</button>
            </form>
        </main>
    );
}