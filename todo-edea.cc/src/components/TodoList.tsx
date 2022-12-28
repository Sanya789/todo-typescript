import React from 'react';
import { TodoListItem } from './TodoListItem';

interface ITodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
}

export const TodoList: React.FC<ITodoListProps> = ({ todos, toggleComplete }) => {

  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.text} todo={todo} toggleComplete={toggleComplete} />
      ))}
    </ul>
  );
};
