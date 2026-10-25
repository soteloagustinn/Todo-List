import React from 'react'
import { TodoIcon } from './TodoIcon'

function DeleteIcon({onDelete}){
    return (
        <TodoIcon
            type = "Delete"
            color="gray"
            onClick={onDelete}
        />
    )
}

export {DeleteIcon}