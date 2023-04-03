import { useSelector } from 'react-redux';
import { deleteAction, updateAction } from '../reduxs/action';

const Label = ({ todo }) => {
  const todos = useSelector((todos) => todos);

  const deleteTodo = (id) => {
    deleteAction(id);
  };

  const updateTodo = async (id) => {
    const completed = todos.filter((todo) => todo.id === id)[0].completed;
    updateAction(id, completed);
  };

  return (
    <h3>
      <label
        className={todo.completed === 1 ? 'completed' : null}
        onClick={() => updateTodo(todo.id)} //취소선 그었을 때 db업데이트
      >
        {todo.todoname}
      </label>
      {/* 삭제 후 db에 저장 */}
      <label onClick={() => deleteTodo(todo.id)}>&nbsp;&nbsp;삭제</label>
    </h3>
  );
};

export default Label;
