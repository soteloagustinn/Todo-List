import './TodoButton.css'

function TodoButton() {
    return(
        <button className="TodoButton" 
            onClick={(  ) => 
                console.log('le diste clicl al boton')
            }>
            +
        </button>
    )
}

export {TodoButton}