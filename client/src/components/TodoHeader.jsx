import React, { useState, useEffect } from "react";

const TodoHeader = () => {
  const [nowDay, setNowDay] = useState("Unknown day");
  useEffect(() => {
    fetchToday();
  }, []);
  const fetchToday = async () => {
    try {
      const today = await new Date().getDay();
      console.log(today);
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
    <div className='header text-white'>
      <h1 className='text-3xl text-center py-2'>{nowDay}</h1>
      <p className='text-center my-2 text-blue-950'>할일을 입력해보세요!</p>
    </div>
  );
};

export default TodoHeader;
