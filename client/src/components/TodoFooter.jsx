import React from 'react'

const TodoFooter = ({count}) => {
  return (
    <div className='w-full pt-2 mt-5 text-center border-t-2'>총 {count}건의 할일이 등록되어 있습니다.</div>
  )
}

export default TodoFooter