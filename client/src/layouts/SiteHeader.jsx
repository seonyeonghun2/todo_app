import React from "react";
import { useLocation, Link } from "react-router-dom";
// background: rgb(36, 123, 193);
//   background: linear-gradient(
//     90deg,
//     rgba(36, 123, 193, 1) 0%,
//     rgba(0, 212, 255, 1) 100%
//   );

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
const Cover = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname == "/login" ? (
        <div className='flex items-center justify-center text-3xl text-white h-28 bg-gradient-to-r from-violet-500 to-fuchsia-500'>
          로그인
        </div>
      ) : (
        <div className='flex items-center justify-center text-3xl text-white bg-gradient-to-r from-sky-500 to-indigo-500 h-28'>
          회원가입
        </div>
      )}
    </>
  );
};
export default SiteHeader;
