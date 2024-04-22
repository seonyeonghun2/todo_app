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
    <div className='my-2'>
      <form onSubmit={handleSubmit} className='input_form'>
        <input
          ref={inputRef}
          type='text'
          value={newTodo}
          onChange={handleInputChange}
          className='border-b-2 todo_input border-b-slate-500'
        />
        <button
          type='submit'
          className='p-1 ml-1 text-white rounded bg-slate-500'
        >
          등록
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
