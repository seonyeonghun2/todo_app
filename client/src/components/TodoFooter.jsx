import React from "react";

const TodoFooter = ({ count }) => {
  return (
    <div className='w-full pt-2 text-xs text-center border-t-2'>
      {count <= 0 ? (
        <span>할일을 등록하세요</span>
      ) : (
        <span>총 {count}건의 할일이 등록되어 있습니다.</span>
      )}
    </div>
  );
};

export default TodoFooter;
