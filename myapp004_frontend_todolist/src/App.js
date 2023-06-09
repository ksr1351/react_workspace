import './App.css';
import { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from './apiurl';

function App() {
  const inputRef = useRef('');
  const wrap = {
    width: '500px',
    border: '1px solid black',
    margin: '10px auto',
  };

  // let boardList = [
  //   { id: 1, todoname: '운동하기', completed: 0 },
  //   { id: 2, todoname: 'SNS꾸미기', completed: 0 },
  //   { id: 3, todoname: '사진정리하기', completed: 0 },
  // ];

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

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

  //async function getTodos(){}
  const getTodos = async () => {
    //get 자리에 delete, put 등 써주면 됨
    await axios
      .get(`${baseUrl}/todo/all`) //.get(baseUrl+'/todo/all')
      .then((response) => {
        console.log(response);
        console.log('111111111111111111');
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log('2222222222222222222)');
  };

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    inputRef.current.focus();
  }, [input]);

  return (
    <div className='App' style={wrap}>
      <h1>TODO LIST</h1>
      <form onSubmit={insertTodo}>
        <input
          type='text'
          required={true}
          value={input}
          onChange={handleChangeText}
          ref={inputRef}
        />
        <input type='submit' value='Create' />
      </form>
      {todos
        ? todos.map((todo) => {
            return (
              <div className='todo' key={todo.id}>
                <h3>
                  <label
                    className={todo.completed === 1 ? 'completed' : null}
                    onClick={() => {
                      updateTodo(todo.id);
                    }}
                  >
                    {todo.todoname}
                  </label>
                  <label
                    onClick={() => {
                      deleteTodo(todo.id);
                    }}
                  >
                    &nbsp;&nbsp;삭제
                  </label>
                </h3>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default App;
