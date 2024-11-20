"use client";
import React, { useState } from "react";
import CreateName from "./CreateName";
import TodoList from "./TodoList";
import DoneList from "./DoneList";

const Checklist = () => {
  const [updateTrigger, setUpdateTrigger] = useState(false);

  const toggleUpdateTrigger = () => {
    setUpdateTrigger((prev) => !prev); // 상태를 반전하여 트리거 업데이트
  };

  return (
    <article className="w-9/12">
      <CreateName setUpdateTrigger={toggleUpdateTrigger} />
      <div className="flex gap-4 mt-4">
        <div className="w-1/2">
          <img
            src="/images/images/todo.png"
            className="title_img mb-2"
            alt="Todo"
          />
          <TodoList
            updateTrigger={updateTrigger}
            setUpdateTrigger={toggleUpdateTrigger}/>
        </div>
        <div className="w-1/2">
          <img
            src="/images/images/done.png"
            className="title_img mb-2"
            alt="Done"
          />
          <DoneList
            updateTrigger={updateTrigger}
            setUpdateTrigger={toggleUpdateTrigger}
          />
        </div>
      </div>
    </article>
  );
};

export default Checklist;