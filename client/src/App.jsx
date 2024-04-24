import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, [todos]);

  const fetchTodos = async () => {
    try {
      let { data: todoList, error } = await supabase.from("todos").select("*");
      if (todoList) {
        setTodos(todoList);
        console.log(todoList);
      }
    } catch (error) {
      console.log("데이터 패칭 에러 : ", error);
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
    const { error } = await supabase.from("todos").delete().eq("id", id);
  };

  return (
    <div className='flex flex-col items-center '>
      <TodoHeader />
      <TodoInput onCreate={onCreate} />
      <TodoList todos={todos} onEdit={onEdit} onDelete={onDelete} />
      <TodoFooter count={todos.length} />
    </div>
  );
}

export default App;
