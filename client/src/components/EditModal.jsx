import React, { useState, useRef, useEffect } from "react";

function EditModal({ handleEditSave, isOpen, onClose, initText, editId }) {
  const [newText, setNewText] = useState("");
  const newTextRef = useRef();
  const handleEditInputChange = (e) => {
    setNewText(e.target.value);
  };
  useEffect(() => {
    if (isOpen) {
      newTextRef.current.focus();
    }
  }, [isOpen]);
  const handleSave = () => {
    handleEditSave(editId, newText);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
            <div
              className='fixed inset-0 transition-opacity'
              aria-hidden='true'
            >
              <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
            </div>

            <span
              className='hidden sm:inline-block sm:align-middle sm:h-screen'
              aria-hidden='true'
            >
              &#8203;
            </span>

            <div className='inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
              <div className='px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4'>
                <div className='sm:flex sm:items-start'>
                  <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                    <h3 className='text-lg font-medium leading-6 text-gray-900'>
                      할일 수정하기
                    </h3>
                    <h2 className='mt-2'>선택한 할일 : {initText}</h2>
                    <div className='flex mt-2'>
                      <label htmlFor='newText'>변경할 할일 : </label>
                      <input
                        ref={newTextRef}
                        className='flex-1 shadow-sm outline-none pl-1rounded-md border-black-500 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        value={newText}
                        id='newText'
                        onChange={handleEditInputChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse'>
                <button
                  type='button'
                  className='inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm'
                  onClick={handleSave}
                >
                  수정
                </button>
                <button
                  type='button'
                  className='inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                  onClick={onClose}
                >
                  취소
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EditModal;
