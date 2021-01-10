import React from 'react';
import { useSelector } from 'react-redux';
import { TodoItem } from './TodoItem';

function Items() {
  const arrItems = useSelector((state) => {
    return state.todos;
  });

  return arrItems.items.map((todo) => (
    <TodoItem key={todo.item_id} todo={todo}></TodoItem>
  ));
}

export default Items;
