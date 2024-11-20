"use client";
import { getTodoList } from "@/api/get-todo-list";
import { updateTodo } from "@/api/update-todo";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type TodoItem = {
  isCompleted: boolean;
  name: string;
  id: number;
};

const DoneList = ({
  updateTrigger,
  setUpdateTrigger,
}: {
  updateTrigger: boolean;
  setUpdateTrigger: () => void;
}) => {
  const [data, setData] = useState<TodoItem[]>([]);
  const router = useRouter(); // Next.js의 useRouter 훅

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTodoList();
        setData(response);
      } catch (error) {
        console.error("Failed to fetch todo list:", error);
      }
    };

    fetchData();
  }, [updateTrigger]);

  const handleCheckboxChange = async (id: number) => {
    try {
      const updatedData = data.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      );
      setData(updatedData);

      const updatedItem = updatedData.find((item) => item.id === id);
      if (updatedItem) {
        await updateTodo(id, updatedItem.isCompleted);
        setUpdateTrigger();
      }
    } catch (error) {
      console.error("Failed to update todo:", error);
    }
  };

  const handleClickName = (id: number) => {
    router.push(`/items/${id}`); // useRouter를 사용하여 페이지 이동
  };

  return (
    <ul>
      {data
        .filter((item) => item.isCompleted)
        .map((item) => (
          <li
            className={`mb-1 p-2 ${
              item.isCompleted ? "bg-[#EDE9FE]" : "bg-white"
            }`}
            key={item.id}
          >
            <input
              type="checkbox"
              id={`done-${item.id}`}
              checked={item.isCompleted}
              onChange={() => handleCheckboxChange(item.id)}
            />
            <label
              className="ml-2 cursor-pointer"
              onClick={() => handleClickName(item.id)}
            >
              {item.name}
            </label>
          </li>
        ))}
    </ul>
  );
};

export default DoneList;