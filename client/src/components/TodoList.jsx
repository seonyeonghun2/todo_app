import React, { useState } from "react";

import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, onEdit, onDelete }) => {
  return (
    <>
      <ul className='flex flex-col w-full list-none'>
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
