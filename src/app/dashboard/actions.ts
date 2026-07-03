'use server';

import { revalidateTag } from "next/cache";
import { z } from "zod";

const CrewJoinSchema = z.object({
  crewId: z.string().min(1, "크루 ID는 필수입니다."),
  runnerName: z.string().min(2, "이름은 2글자 이상이어야 합니다.").max(10, "이름은 10글자 이하이어야 합니다."),
});

export type ActionState = {
    success: boolean;
    message: string;
    error?: {
        crewId?: string[];
        runnerName?: string[];
    };
};

export async function joinCrewAction(prevState: ActionState, formData: FormData): Promise<ActionState> {
    const validatedFields = CrewJoinSchema.safeParse({
        crewId: formData.get("crewId"),
        runnerName: formData.get("runnerName"),
    });

    if (!validatedFields.success) {
        return {
            success: false,
            message: "입력값이 유효하지 않습니다.",
            error: validatedFields.error.flatten().fieldErrors,
        };
    }

    // 여기에 크루 가입 로직을 추가하세요
    // 예: DB에 데이터를 저장하거나 API를 호출하는 등의 작업
    const { crewId, runnerName } = validatedFields.data;

    try {
        revalidateTag("dashboard-crews", "max");
        
        return {
            success: true,
            message: `${runnerName}님, 크루 가입 신청이 완료되었습니다.`,
        };
    } catch (error) {
        return {
            success: false,
            message: "서버 내부 오류가 발생했습니다.",
        };
    }
}