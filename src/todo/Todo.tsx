import { Title } from "./components/Title";
import { TodoList } from "./components/TodoList";
import { TodoProvider } from "./context/TodoProvider";
import { useTodos } from "./hooks/useTodos";

export const Todo = () => {

  return (
    <>
      <TodoProvider>
        <Title/>
        <TodoList />
      </TodoProvider>
    </>
  );
};
