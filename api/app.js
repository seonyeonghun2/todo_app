import compression from 'compression';
import express from 'express';
import logger from 'morgan';
const app = express();
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(compression());
app.use(logger('dev'));
app.use(cors());

let todos = [];
let i = 0;
// todos 목록 응답
app.get('/todos', (req, res) => {
  res.status(200).json(todos);
});

// Create - 새 Todo 추가
app.post('/todos', (req, res) => {
  const newTodo = {
    id: i++,
    text: req.body.text,
  };
  todos.push(newTodo);
  res.status(201).send('할일이 추가되었습니다.');
});

// Read - 기존 Todos 읽기
app.get('/todos', (req, res) => {
  res.status(201).json(todos);
});

// 특정 ID에 해당하는 할일을 읽기
app.get('/todos/:id', (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const todo = todos.find((todo) => todo.id === parseInt(id));
  if (!todo) {
    return res.status(404).send('해당 ID에 대한 할일이 존재하지 않습니다.');
  } else {
    return res.status(200).json(todo);
  }
});

// Update - 특정 할일의 내용을 수정하기
app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  console.log(`아이디/텍스트 : ${id}, ${text}`);
  const index = todos.findIndex((todo) => todo.id === parseInt(id));
  console.log('index : ' + index);
  if (index === -1) {
    return res.status(404).send('해당 ID에 대한 할일이 존재하지 않습니다.');
  }
  todos[index].text = text;
  res.status(201).send('할일이 업데이트 되었습니다');
});

// Delete - 특정 할일을 삭제하기
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex((todo) => todo.id === parseInt(id));
  if (index === -1) {
    return res.status(404).send('해당 ID에 대한 할일이 존재하지 않습니다.');
  }
  todos.splice(index, 1);
  res.status(201).send('할일이 삭제 되었습니다.');
});
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port}에서 실행중입니다.`);
});
