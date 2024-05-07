import React, { useState } from "react";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
const TodoListItem = ({ todo, onEdit, onDelete }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };
  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsEditModalOpen(false);
  };
  const handleDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };
  const handleEditSave = (id, newText) => {
    onEdit(todo.id, newText);
  };
  const handleDeleteSave = (id) => {
    onDelete(todo.id);
  };
  const stringToDate = (stringDate) => {
    const targetDate = new Date(stringDate);
    const year = String(targetDate.getFullYear());
    const month = String(targetDate.getMonth() + 1);
    const date = String(targetDate.getDate());
    return `${year}/${month}/${date}`;
  };
  return (
    <>
      <li className='m-5' key={todo.id}>
        <div className='flex'>
          <span>{todo.todo_text}</span>
          <span className='inline-flex items-center px-1 ml-auto text-xs text-white bg-gray-600 rounded item'>
            {stringToDate(todo.created_at)}
          </span>
          <button
            onClick={handleEditClick}
            className='px-1 mx-1 text-xs text-white bg-indigo-600 rounded hover:bg-indigo-700'
          >
            수정
          </button>
          <button
            onClick={handleDeleteClick}
            className='px-1 text-xs text-white bg-red-600 rounded hover:bg-red-700'
          >
            삭제
          </button>
        </div>
        {isEditModalOpen && (
          <EditModal
            isOpen={isEditModalOpen}
            onClose={handleCloseModal}
            handleEditSave={handleEditSave}
            initText={todo.todo_text}
            editId={todo.id}
          />
        )}
        {isDeleteModalOpen && (
          <DeleteModal
            isOpen={isDeleteModalOpen}
            onClose={handleDeleteModal}
            onDelete={onDelete}
            editId={todo.id}
          />
        )}
      </li>
    </>
  );
};

export default TodoListItem;
