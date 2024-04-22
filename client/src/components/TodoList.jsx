import React, { useState } from "react";

import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, onEdit, onDelete }) => {
  return (
    <>
      <ul className='list-decimal'>
        {todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
