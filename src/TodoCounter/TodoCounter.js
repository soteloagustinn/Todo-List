import './TodoCounter.css'

function TodoCounter({total, completed}){
  if(total === 0){
    return(
      <h1 className="todo-title">
        No hay TODOS pendientes
      </h1>
    )
  }
  
  if(total === completed){
    return(
      <h1 className="todo-title">
        Has completado todo los TODOS
      </h1>
    )
  }

  return(
    <h1 className="todo-title">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOS
    </h1>    
  )
}

export {TodoCounter}