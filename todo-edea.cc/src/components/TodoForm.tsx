import React, { ChangeEvent, useState, FormEvent, MouseEventHandler } from 'react';
import { Button, Input } from 'antd';
import axios from 'axios';

interface ITodoFormProps {
  addTodo: AddTodo;
}

export const TodoForm: React.FC<ITodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('')
  };

  return (
    <form className="todo-form">
      <Input
      size='large'
        type="text"
        value={newTodo}
        className="todo-input"
        placeholder="Добавить задачу"
        onChange={handleChange}
      />
      <Button type="primary" htmlType="submit" className="todo-button" onClick={handleSubmit}>
        Добавить задачу
      </Button>
    </form>
  );
};
