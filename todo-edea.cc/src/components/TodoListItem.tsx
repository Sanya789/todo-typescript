import React from 'react'

interface ITodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
}

export const TodoListItem: React.FC<ITodoListItemProps> = ({todo, toggleComplete}) => {
  
  return (
    <li className={todo.complete? 'todo-row completed' : 'todo-row'}>
      <label >
        {todo.text}
      </label>
      <input
      className='todo-checkbox'
      type='checkbox'
      onChange={()=> toggleComplete(todo)}
      checked={todo.complete}
      />
    </li>
  )
}
