import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { Todo } from "../interfaces/interfaces";

interface props {
  todo: Todo;
}
export const TodoItem = ({ todo }: props) => {
  const { toggleTodo } = useContext(TodoContext);

  const handleDbCliick = () => {
    toggleTodo(todo.id);
  };
  return (
    <li
      style={{
        cursor: "pointer",
        textDecoration: todo.completed ? "Line-through" : "",
      }}
      key={todo.id}
      onDoubleClick={handleDbCliick}
    >
      {todo.desc}
    </li>
  );
};
