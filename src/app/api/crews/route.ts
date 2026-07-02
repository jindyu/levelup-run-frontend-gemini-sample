import { NextResponse } from "next/server";

// 간단한 가상 데이터베이스 데이터
const mockCrews = [
  { id: '1', name: '양재천 야간 불꽃 러닝 크루', time: '매주 수요일 저녁 8시', pace: '6\'00"', status: '모집중' },
  { id: '2', name: '여의도 새벽 한강공원 질주반', time: '매주 토요일 오전 6시', pace: '5\'30"', status: '마감' },
  { id: '3', name: '남산 둘레길 힐클라이밍 런', time: '매주 일요일 오전 9시', pace: '6\'30"', status: '모집중' },
];

export async function GET() {
    // 실제 외부 API나 DB 연동을 시뮬레이션하기 위해 0.5초의 지연을 줍니다.
    await new Promise(resolve => setTimeout(resolve, 500)); // 0.5초 지연

    return NextResponse.json(mockCrews);
}