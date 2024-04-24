import "./TodoInput.css";
import React, { useState, useRef } from "react";

const TodoInput = ({ onCreate }) => {
  const [newTodo, setNewTodo] = useState("");
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo === "") {
      inputRef.current.focus();
      return;
    }
    onCreate(newTodo);
    setNewTodo("");
  };
  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };
  return (
    <div className='w-full p-2 bg-slate-700'>
      <form onSubmit={handleSubmit} className='flex w-full input_form'>
        <input
          ref={inputRef}
          type='text'
          value={newTodo}
          onChange={handleInputChange}
          className='flex-1 border-b-2 todo_input indent-1'
        />
        <button
          type='submit'
          className='p-1 ml-1 text-white rounded bg-slate-400 hover:bg-yellow-600'
        >
          등록
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
