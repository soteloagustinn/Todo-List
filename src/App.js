import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem'; 
import {TodoButton} from './TodoButton'

import React from 'react'
import './App.css';

const defaulTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar el curso de Intro a React.js', completed: false},
  {text: 'Cortar cebollaX2', completed: true},
  {text: 'Cortar cebollaX3', completed: false},
  {text: 'Cortar cebollaX4', completed: false}

]

function App() {
  const [todos, setTodos] = React.useState(defaulTodos)
  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter( todo => 
    !!todo.completed // doble negacion para convertir a su tipo booleano
  ).length;
  const totalTodos = todos.length;



  return (
    < div className = "todo-app">

      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList> 
        {defaulTodos.map(todo => {
          return(
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
            />
          ) 
        })}
      </TodoList>

      <TodoButton/>

    </div>
  );
}

export default App;
