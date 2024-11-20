"use client";
import React,{useEffect} from 'react';
import { postTodo } from '@/api/post-todo';

const CreateName = ({ setUpdateTrigger }: { setUpdateTrigger: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;

    postTodo(name).then(() => {
      setUpdateTrigger((prev) => !prev); // TodoList 갱신 트리거
    });
  };
  return (
  <form className="w-full mb-4 flex items-center" onSubmit={handleSubmit}>
    <input type="text" name="name" className="search-with-icon flex-grow h-12"/>
    <button type="submit" className="w-2/12 button-add-with-icon ml-2 h-12 flex justify-center items-center"/>
  </form>
  )
};

export default CreateName;