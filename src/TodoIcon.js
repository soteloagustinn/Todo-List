import {ReactComponent as CheckSVG} from './check.svg'
import {ReactComponent as DeletSVG} from './delete.svg'

const iconType = {
    "Check": <CheckSVG/>,
    "Delete" : <DeletSVG/>
}

function TodoIcon({type}){
    return(
        <span
            className={`Icon Icon-svg Icon-${type}`}
        >

        {iconType[type]}
        
        </span>
    )
}

export {TodoIcon}