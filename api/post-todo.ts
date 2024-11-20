"use client";

// todo 등록하기
export const postTodo = async (todo_item:string) => {
    // Swagger 기반의 API URL을 설정
    const swaggerBaseUrl = "https://assignment-todolist-api.vercel.app/api"; // Swagger UI에서 제공하는 기본 URL
    const endpoint = "/jsyassignment/items"; // ToDo 리스트를 가져오는 엔드포인트
    const _todo_item = todo_item;

    try {
        const response = await fetch(`${swaggerBaseUrl}${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: _todo_item,
            })
        });

        // HTTP 상태 코드 확인
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // JSON 데이터를 파싱하여 반환
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching ToDo list:", error);
        throw error; 
    }
};