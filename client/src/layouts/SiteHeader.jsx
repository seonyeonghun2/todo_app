import React from "react";
import { useLocation, Link } from "react-router-dom";
const Cover = () => {
  return (
    <>
      <img src='https://picsum.photos/1000/300' alt='picsum' />
    </>
  );
};
const SiteHeader = () => {
  const location = useLocation();
  return (
    <>
      <div className='flex items-center justify-between w-full h-10 px-2 text-xs border-b-2 border-collapse border-slate-100'>
        <div className='capitalize logo'>My Todos</div>
        <nav className='nav'>
          <ul id='gnb' className='flex gap-2'>
            <li>
              <Link to='/' className='hover:text-blue-800'>
                처음으로
              </Link>
            </li>
            <li>
              <Link to='/login'>로그인</Link>
            </li>
            <li>
              <Link to='/join'>회원가입</Link>
            </li>
          </ul>
        </nav>
      </div>
      {location.pathname !== "/" && <Cover />}
    </>
  );
};

export default SiteHeader;
