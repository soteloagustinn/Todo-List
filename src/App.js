import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem'; 
import {TodoButton} from './TodoButton'

import React from 'react'
import './App.css';

// const defaulTodos = [
//  {text: 'Cortar cebolla', completed: true},
//  {text: 'Tomar el curso de Intro a React.js', completed: false},
//  {text: 'Cortar cebollaX2', completed: true},
  // {text: 'Cortar cebollaX3', completed: false},
  // {text: 'Cortar cebollaX4', completed: false}

// ]

// localStorage.setItem('TODOS_V1', defaulTodos)


function useLocalStorage(itemName, initiaValue){
  const localStorageItem = localStorage.getItem(itemName)

  let parsedItem;

  if(localStorageItem){
  parsedItem = JSON.parse(localStorageItem);
  }else{
    localStorage.setItem(itemName, JSON.stringify(initiaValue))
    parsedItem = initiaValue;
  };

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  return [item, saveItem];
}

function App() {
  
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter( todo => 
    !!todo.completed // doble negacion para convertir a su tipo booleano
  ).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter( todo => {
    const todoText = todo.text.toLowerCase( );
    const searchText = searchValue.toLowerCase(); 
    return todoText.includes(searchText)
  });

  const completeTodos = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

   const deleteTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    < div className = "todo-app">
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList> 
        {searchedTodos.map(todo => {
          return(
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete={() => {completeTodos(todo.text)}}
              onDelete = {() =>{deleteTodo(todo.text)}}
            />
          ) 
        })}
      </TodoList>
      <TodoButton/>
    </div>
  );
}

export default App;
