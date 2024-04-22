import React, { useState } from "react";
import EditModal from "./EditModal";
const TodoListItem = ({ todo, onEdit, onDelete }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsEditModalOpen(false);
  };
  const handleEditSave = (id, newText) => {
    onEdit(todo.id, newText);
  };
  const handleDelete = () => {
    onDelete(todo.id);
  };
  return (
    <>
      <li className='my-5' key={todo.id}>
        {todo.text}{" "}
        <button
          onClick={handleEditClick}
          className='px-1 mx-1 text-white bg-indigo-600 rounded hover:bg-indigo-700'
        >
          수정
        </button>
        <button
          onClick={handleDelete}
          className='px-1 text-white bg-red-600 rounded hover:bg-red-700'
        >
          삭제
        </button>
        <EditModal
          isOpen={isEditModalOpen}
          onClose={handleCloseModal}
          handleEditSave={handleEditSave}
          initText={todo.text}
          editId={todo.id}
        />
      </li>
    </>
  );
};

export default TodoListItem;
