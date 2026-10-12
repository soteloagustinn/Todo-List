import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem'; 
import {TodoButton} from './TodoButton'

import './App.css';

const defaulTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar el curso de Intro a React.js', completed: false},
  {text: 'Cortar cebollaX2', completed: false},
  {text: 'Cortar cebollaX3', completed: false}

]

function App() {
  return (
    < div className = "todo-app">

      <TodoCounter completed={16} total={25}/>
      <TodoSearch/>
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
