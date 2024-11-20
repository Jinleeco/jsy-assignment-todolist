"use client";
import { getTodoDetail } from "@/api/get-todo-detail";
import React, { useEffect, useState } from "react";

type TodoDetail = {
  isCompleted: boolean;
  imageUrl: string;
  memo: string;
  name: string;
  tenantId: string;
  id: number;
};

const ChecklistDetail = ({ id }: { id: number }) => {
  const [data, setData] = useState<TodoDetail | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTodoDetail(id);
        setData(response);
      } catch (error) {
        console.error("Failed to fetch todo detail:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!data) {
    return <p>Loading...</p>; // 데이터가 로드되기 전 로딩 상태 표시
  }

  return (
    <article>
      <div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={data.name}
            readOnly // 값만 표시되도록 읽기 전용
          />
          <button type="submit">추가하기</button>
        </div>
      </div>
      <div>
        <label htmlFor="img">Image:</label>
        <input
          type="text"
          name="img"
          id="img"
          value={data.imageUrl}
          readOnly // 이미지를 경로만 표시
        />
      </div>
      <div>
        <div>
          <label htmlFor="memo">Memo:</label>
          <textarea
            name="memo"
            id="memo"
            value={data.memo}
            readOnly // 메모 필드도 읽기 전용
          />
        </div>
      </div>
    </article>
  );
};

export default ChecklistDetail;