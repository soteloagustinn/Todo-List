import React from 'react'
import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}){
  return(
    <input 
      className="todo-input"
      placeholder="Buscar tareas"
      value={searchValue}
      onChange={(event) =>{
        setSearchValue(event.target.value)
      }}
    
    
    />
  )
}


export {TodoSearch}