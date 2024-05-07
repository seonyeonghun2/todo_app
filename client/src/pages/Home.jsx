import React, { useState, useEffect } from "react";
import SiteHeader from "../layouts/SiteHeader";
import SiteFooter from "../layouts/SiteFooter";
import TodoHeader from "../components/TodoHeader";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import TodoFooter from "../components/TodoFooter";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, [todos]); // 의존성 추가
  const fetchTodos = async () => {
    try {
      let { data: todoList, error } = await supabase.from("todos").select("*");
      if (todoList) {
        setTodos(todoList);
      }
    } catch (error) {
      console.log("투두 목록 동기화 에러 : ", error);
    }
  };

  const onCreate = async (newTodo) => {
    try {
      const { data, error } = await supabase
        .from("todos")
        .insert([{ todo_text: newTodo }])
        .select();
      // fetchTodos();
    } catch (error) {
      console.error("투두 등록 에러 :", error);
    }
  };

  const onEdit = async (id, newText) => {
    try {
      const { data, error } = await supabase
        .from("todos")
        .upsert({ id: id, todo_text: newText })
        .select();
      // fetchTodos();
    } catch (error) {
      console.error("투두 업데이트 에러:", error);
      // 에러 처리
    }
  };
  const onDelete = async (id) => {
    const { error } = await supabase.from("todos").delete().eq("id", id);
    // fetchTodos();
  };
  return (
    <>
      <SiteHeader />
      <div className='flex flex-col items-center'>
        <TodoHeader />
        <TodoInput onCreate={onCreate} />
        <TodoList todos={todos} onEdit={onEdit} onDelete={onDelete} />
        <TodoFooter count={todos.length} />
      </div>
      <SiteFooter />
    </>
  );
};

export default Home;
