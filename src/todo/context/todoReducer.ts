import { Todo, TodoState } from "../interfaces/interfaces";

type TodoAction =
  | { type: "addTodo"; payload: Todo }
  | { type: "togleTodo"; payload: { id: string } };

export const todoReducer = (state: TodoState, action: TodoAction) => {
    switch(action.type){
        case 'addTodo':
            return{
                ...state,
                todos:[...state.todos,action.payload]
            }
        default:
            return state;
    }
};
