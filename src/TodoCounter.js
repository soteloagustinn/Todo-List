import './TodoCounter.css'

function TodoCounter({total, completed}){
  if(total == completed){
    return(
      <h1 className="todo-title">
      Has completado todos los TODOS
    </h1>
    )
  }else{
    return(
      <h1 className="todo-title">
        Has completado <span>{completed}</span> de <span>{total}</span> TODOS
      </h1>
    )
  }
}

export {TodoCounter}