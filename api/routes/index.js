import express from 'express';
const router = express.Router();
let todos = [];
let i = 0;
// Create - 새 Todo 추가
router.post('/', (req, res) => {
  const newTodo = {
    id: i++,
    text: req.body.text,
    isDone: false
  };
  todos.push(newTodo);
  res.status(201).send('할일이 추가되었습니다.');
});

// Read - 기존 Todos 읽기
router.get('/', (req, res) => {
  res.status(201).json(todos);
});

// 특정 ID에 해당하는 할일을 읽기
router.get('/:id', (req, res) => {
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
router.put('/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex((todo) => todo.id === parseInt(id));
  if (index === -1) {
    return res.status(404).send('해당 ID에 대한 할일이 존재하지 않습니다.');
  }
  todos.splice(index, 1);
  res.status(201).send('할일이 삭제 되었습니다.');
});
export default router;
