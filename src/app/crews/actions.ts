"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// 실습 목적상 가상 API와 연동하거나 콘솔에 출력하는 형태로 작성합니다.
export async function createCrewAction(formData: FormData) {
    const name = formData.get("name") as string;
    const time = formData.get("time") as string;
    const pace = formData.get("pace") as string;

    if (!name || !time || !pace) {
        throw new Error("모든 필드를 입력해야 합니다.");
    }

    // 실무 환경이라면 여기서 DB Insert나 외부 API POST 통신을 수행합니다.
    console.log("Creating crew with data:", { name, time, pace });

    // ⭐️ 핵심: 데이터가 바뀌었으므로 기존 크루 목록 페이지의 캐시를 파괴하고 새로고침하도록 지시
    revalidatePath("/crews"); // 크루 목록 페이지를 다시 렌더링하도록 Next.js에 알립니다.

    // 크루 생성 후 목록 페이지로 리디렉션
    redirect("/crews");
}