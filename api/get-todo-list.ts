"use client";

// todo list 가져오기
export const getTodoList = async () => {
    // Swagger 기반의 API URL을 설정
    const swaggerBaseUrl = "https://assignment-todolist-api.vercel.app/api"; // Swagger UI에서 제공하는 기본 URL
    const endpoint = "/jsyassignment/items"; // ToDo 리스트를 가져오는 엔드포인트

    try {
        // Fetch API를 사용하여 데이터를 가져옴
        const response = await fetch(`${swaggerBaseUrl}${endpoint}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
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