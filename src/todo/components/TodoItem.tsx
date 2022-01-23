import { Todo } from "../interfaces/interfaces"

interface props {
   todo:Todo 
}
export const TodoItem = ({todo}:props) => {
  return (
    <li key={todo.id}>{todo.desc}</li>
    )
  }