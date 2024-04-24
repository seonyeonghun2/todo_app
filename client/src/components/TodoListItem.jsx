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
    confirm("정말로, 삭제하시겠습니까?") && onDelete(todo.id);
  };
  return (
    <>
      <li className='m-5' key={todo.id}>
        <div className='flex'>
          <span>{todo.text}</span>
          <button
            onClick={handleEditClick}
            className='px-1 mx-1 ml-auto text-white bg-indigo-600 rounded hover:bg-indigo-700'
          >
            수정
          </button>
          <button
            onClick={handleDelete}
            className='px-1 mr-1 text-white bg-red-600 rounded hover:bg-red-700'
          >
            삭제
          </button>
        </div>
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
