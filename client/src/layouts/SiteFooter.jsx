import React from "react";

const SiteFooter = () => {
  return (
    <div className='flex justify-center w-full gap-10 py-4 mt-2 text-xs text-white bg-black'>
      <div className='logo_footer'>My Todos</div>
      <address>
        <p className='text-center capitalize'>
          copyright &copy; 2024. <span className='owner'>MyTodos</span>. all
          rights reserved
        </p>
      </address>
    </div>
  );
};

export default SiteFooter;
