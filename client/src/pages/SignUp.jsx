import React, { useState, useRef } from 'react';
import SiteHeader from '../layouts/SiteHeader.jsx';
import SiteFooter from '../layouts/SiteFooter.jsx';

const SignUp = (props) => {
  const idRef = useRef();
  const nickRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const confirmRef = useRef();
  const [formData, setFormData] = useState({
    user_id: '',
    user_nick: '',
    user_email: '',
    user_pass: '',
    user_pass_confirm: '',
  });
  const [formError, setFormError] = useState({
    user_id: '',
    user_nick: '',
    user_email: '',
    user_pass: '',
    user_pass_confirm: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validateForm = () => {
    let errors = {};
    let isValid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.user_id) {
      errors.user_id = '아이디를 입력하세요';
      isValid = false;
    }
    if (!formData.user_nick) {
      errors.user_nick = '사용자명을 입력하세요';
      isValid = false;
    }
    if (!formData.user_email) {
      errors.user_email = '이메일을 입력하세요';
      isValid = false;
    } else if (!emailRegex.test(formData.user_email.trim())) {
      errors.user_email = '유효한 이메일을 입력하세요';
      isValid = false;
    }
    if (!formData.user_pass) {
      errors.user_pass = '비밀번호를 입력하세요';
      isValid = false;
    }
    if (formData.user_pass !== formData.user_pass_confirm) {
      errors.user_pass_confirm = '비밀번호가 일치하지 않습니다';
      isValid = false;
    }
    setFormError(errors);
    return isValid;
  };
  const cleanUpForm = () => {
    setFormData({
      user_id: '',
      user_nick: '',
      user_email: '',
      user_pass: '',
      user_pass_confirm: '',
    });
    setFormError({
      user_id: '',
      user_nick: '',
      user_email: '',
      user_pass: '',
      user_pass_confirm: '',
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      cleanUpForm();
    } else {
      if (formError.user_id) {
        idRef.current.focus();
      } else if (formError.user_nick) {
        nickRef.current.focus();
      } else if (formError.user_email) {
        emailRef.current.focus();
      } else if (formError.user_pass) {
        passRef.current.focus();
      } else if (formError.user_pass_confirm) {
        confirmRef.current.focus();
      }
    }
  };
  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };
  return (
    <>
      <SiteHeader />
      <div className="flex justify-center w-full my-20">
        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="user_id">
              아이디
            </label>
            <input
              className={`w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${
                formError.user_id && 'border-red-500'
              }`}
              id="user_id"
              type="text"
              name="user_id"
              value={formData.user_id}
              ref={idRef}
              onChange={handleInputChange}
              placeholder="write user id"
              onKeyDown={handleKeyUp}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="user_nick">
              사용자명
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="user_nick"
              type="text"
              name="user_nick"
              value={formData.user_nick}
              ref={nickRef}
              onChange={handleInputChange}
              onKeyUp={handleKeyUp}
              placeholder="write user nick"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="user_email">
              이메일
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="user_email"
              type="email"
              name="user_email"
              value={formData.user_email}
              ref={emailRef}
              onChange={handleInputChange}
              onKeyDown={handleKeyUp}
              placeholder="write user email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700" htmlFor="user_pass1">
              비밀번호
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="user_pass"
              type="password"
              name="user_pass"
              value={formData.user_pass}
              onChange={handleInputChange}
              onClick={handleKeyUp}
              ref={passRef}
              placeholder="write user pass"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="user_pass2">
              비밀번호 확인
            </label>
            <input
              className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="user_pass_confirm"
              type="password"
              name="user_pass_confirm"
              value={formData.user_pass_confirm}
              onChange={handleInputChange}
              onClick={handleKeyUp}
              ref={confirmRef}
              placeholder="write user pass again"
            />
            {formData.user_pass.length > 0 && formData.user_pass === formData.user_pass_confirm ? (
              <p className="text-xs text-red-500">비밀번호가 일치합니다.</p>
            ) : (
              <p className="text-xs text-red-500">비밀번호가 일치하지 않습니다.</p>
            )}
          </div>
          <div className="flex items-center justify-between gap-2">
            <button
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              로그인
            </button>
            <a className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800" href="#">
              아이디 또는 비밀번호 찾기
            </a>
          </div>
        </form>
      </div>
      <SiteFooter />
    </>
  );
};

export default SignUp;
