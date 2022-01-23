import { TodoList } from "./components/TodoList";
import { TodoProvider } from "./context/TodoProvider";

export const Todo = () => {
  return (
    <>
      <h1>Todo:</h1>
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </>
  );
};
