import React, { useEffect, useState } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import './App.css';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const addTodo: AddTodo = async (newTodo) => {
    if (newTodo !== '') {
console.log(newTodo);

      const {data} = await axios.post('https://63ac12b334c46cd7ae765ce1.mockapi.io/todos', {text: newTodo, comlpele: false});
console.log(newTodo);

        // setTodos(prev => [...prev, data])
      setTodos([...todos, data]);
      // setTodos([...todos, { text: newTodo, complete: false }]);
    }
  };

  const toggleComplete: ToggleComplete = (selectedTodo) => {
    const updateTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  useEffect(() => {
    async function fetchTodos() {
      const [fetchedTodos] = await Promise.all([
        axios.get('https://63ac12b334c46cd7ae765ce1.mockapi.io/todos'),
      ]);
      setTodos(fetchedTodos.data);
    }
    fetchTodos();
  }, []);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
