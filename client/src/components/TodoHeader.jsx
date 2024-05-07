import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const TodoHeader = () => {
  const [nowDay, setNowDay] = useState("Unknown day");
  useEffect(() => {
    fetchToday();
  }, []);
  const fetchToday = async () => {
    try {
      const today = await new Date().getDay();
      switch (today) {
        case 0:
          setNowDay("Sunday");
          break;
        case 1:
          setNowDay("Monday");
          break;
        case 2:
          setNowDay("Tuesday");
          break;
        case 3:
          setNowDay("Thursday");
          break;
        case 4:
          setNowDay("Friday");
          break;
        case 5:
          setNowDay("Saturday");
          break;
        case 6:
          setNowDay("Sunday");
          break;
        default:
          setNowDay("Unknown day");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>      
      <div className='py-5 text-white header'>
        <h1 className='text-3xl text-center'>{nowDay}</h1>
        <p className='my-2 text-xs text-center text-blue-150'>
          오늘의 중요한 일정을 기록해보세요!
        </p>        
      </div>
    </>
  );
};

export default TodoHeader;
