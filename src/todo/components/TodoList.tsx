import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export const TodoList = () => {
    const {todoState}=useContext(TodoContext)
  return (
      <ul>
          <li></li>
      </ul>
  )
};
