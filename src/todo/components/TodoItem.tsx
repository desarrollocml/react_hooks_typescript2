/* import { useContext } from "react";
import { TodoContext } from "../context/TodoContext"; */
import { useTodos } from "../hooks/useTodos";
import { Todo } from "../interfaces/interfaces";

interface props {
  todo: Todo;
}
export const TodoItem = ({ todo }: props) => {
  //const { toggleTodo } = useContext(TodoContext);
  const {toggleTodo}=useTodos()

  /* const handleDbCliick = () => {
    toggleTodo(todo.id);
  }; */
  return (
    <li
      style={{
        cursor: "pointer",
        textDecoration: todo.completed ? "Line-through" : "",
      }}
      key={todo.id}
      onDoubleClick={()=> toggleTodo(todo.id)}
    >
      {todo.desc}
    </li>
  );
};
