import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import "./styles.scss";

TodoList.propTypes = {
  todoList: PropTypes.array,
  onToDoClick: PropTypes.func,
};

TodoList.default = {
  todoList: [],
  onToDoClick: null,
};

function TodoList({ todoList, onToDoClick }) {
  const handletoDoClick = (todo, index) => {
    if (!onToDoClick) return;

    onToDoClick(todo, index);
  };

  return (
    <ul className="todoList">
      {todoList.map((todo, index) => (
        <li
          key={todo.id}
          className={classNames({
            completed: todo.status === "complete",
          })}
          onClick={() => handletoDoClick(todo, index)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
