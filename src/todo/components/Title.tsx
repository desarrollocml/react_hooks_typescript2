import { useTodos } from '../hooks/useTodos';

export const Title = () => {
    const {pendingTodos}=useTodos()
  return <div><h1>Todos: {pendingTodos}</h1></div>;
};
