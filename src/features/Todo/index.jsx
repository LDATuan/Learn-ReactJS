import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Code',
      status: 'complete',
    },
    {
      id: 3,
      title: 'Sleep',
      status: 'new',
    },
  ];
  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredState, setFilteredState] = useState('all');

  const onToDoClick = (todo, index) => {
    const currentTodo = [...todoList];
    console.log(todo);
    const newToDo = {
      ...todo,
      status: todo.status === 'new' ? 'complete' : 'new',
    };

    currentTodo[index] = newToDo;
    setTodoList(currentTodo);
  };

  const handleShowAllClick = () => {
    setFilteredState('all');
  };
  const handleShowCompletedlick = () => {
    setFilteredState('complete');
  };
  const handleShowNewlick = () => {
    setFilteredState('new');
  };

  const filteredToDo = todoList.filter(
    (todo) => filteredState === 'all' || todo.status === filteredState
  );
  const handleTodoFormOnsubmit = (values) => {
    const newToDo = {
      id: todoList.length + 1,
      title: values.title,
      status: 'new',
    };
    const newToDoList = [...todoList, newToDo];
    // currentTodo.push(newToDo);
    setTodoList(newToDoList);
    console.log('From submit', values);
  };
  return (
    <div>
      <h3>What todo</h3>
      <TodoForm onSubmit={handleTodoFormOnsubmit} />
      <h3>To do List</h3>

      <TodoList todoList={filteredToDo} onToDoClick={onToDoClick} />
      <button onClick={() => handleShowAllClick()}>Show All</button>
      <button onClick={() => handleShowCompletedlick()}>Show Completed</button>
      <button onClick={() => handleShowNewlick()}>Show New</button>
    </div>
  );
}

export default TodoFeature;
