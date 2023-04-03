//상태전달 : Context API + useContext()
import './App.css';
import { useRef, useEffect, useState } from 'react';
import Todo from './components/todo2';
import Input from './components/input2';
import { InputContext } from './contexts/InputContext';
import { TodoContext } from './contexts/TodoContext';
import { baseUrl } from './apiurl';
import axios from 'axios';

function App() {
  const inputRef = useRef('');
  const wrap = {
    width: '500px',
    border: '1px solid black',
    margin: '10px auto',
  };

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

  //데이터 insert
  const insertTodo = async (e) => {
    e.preventDefault();

    await axios
      .post(baseUrl + '/todo/', { todoname: input })
      .then((response) => {
        console.log(response.data);
        setInput('');
        getTodos(); //insert 후 다시 리스트 가져오기
      });
  };

  //삭제
  const deleteTodo = async (id) => {
    await axios
      .delete(baseUrl + '/todo/' + id)
      .then((response) => {
        console.log(response.data);
        getTodos(); //delete 후 다시 리스트 가져오기
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const updateTodo = (id) => {
  //   setTodos(todos.map((todo) => {todo.id === id ? {...todo, completed: todo.completed === 1 ? 0 : 1} : todo}));
  // };
  // 아래와 같은 코드

  const updateTodo = async (id) => {
    let data = todos.filter((todo) => todo.id === id);
    console.log('id:' + id);
    console.log(todos.filter((todo) => todo.id === id));

    let completed = todos.filter((todo) => todo.id === id)[0].completed; //todo의 id값과 id가 같은 값만 가져옴
    console.log('completed :' + completed);

    await axios
      .put(baseUrl + '/todo/' + id + '/' + completed)
      .then((response) => {
        console.log(response.data);
        getTodos();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //db 리스트 가져오기
  const getTodos = async () => {
    await axios
      .get(`${baseUrl}/todo/all`) //.get(baseUrl+'/todo/all')
      .then((response) => {
        console.log(response);
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    inputRef.current.focus();
    console.log('useEffect');
  }, [input]);

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className='App' style={wrap}>
      <h1>TODO LIST</h1>
      <InputContext.Provider
        value={{ insertTodo, input, handleChangeText, inputRef }}
      >
        <Input />
      </InputContext.Provider>

      <TodoContext.Provider value={{ todos, updateTodo, deleteTodo }}>
        <Todo />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
