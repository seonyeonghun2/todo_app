import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/todos");
      setTodos(response.data);
    } catch (error) {
      console.error("에러:", error);
    }
  };

  const onCreate = async (newTodo) => {
    try {
      await axios.post("http://localhost:3000/todos", { text: newTodo });
      fetchTodos();
    } catch (error) {
      console.error("등록 에러 :", error);
    }
  };

  const onEdit = async (id, newText) => {
    console.log(id, newText);
    try {
      // 서버에 수정 요청 보내기
      await axios.put(`http://localhost:3000/todos/${id}`, { text: newText });

      // 수정이 성공하면 할일 목록 다시 불러오기
      fetchTodos();
    } catch (error) {
      console.error("업데이트 에러:", error);
      // 에러 처리
    }
  };
  const onDelete = async (id) => {
    try {
      // 서버에 수정 요청 보내기
      await axios.delete(`http://localhost:3000/todos/${id}`);

      // 수정이 성공하면 할일 목록 다시 불러오기
      fetchTodos();
    } catch (error) {
      console.error("삭제 에러:", error);
      // 에러 처리
    }
  };

  return (
    <div className='flex flex-col items-center '>
      <TodoHeader />
      <TodoInput onCreate={onCreate} />
      <TodoList todos={todos} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
}

export default App;
