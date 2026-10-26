import {ReactComponent as CheckSVG} from './check.svg'
import {ReactComponent as DeletSVG} from './delete.svg'
import './TodoIcon.css'


const iconType = {
    "Check": (color) => <CheckSVG className="Icon-svg" fill={color}/>,
    "Delete" : (color) => <DeletSVG className="Icon-svg" fill={color}/>
}

function TodoIcon({type, color, onClick}){
    return(
        <span
            className={`Icon-container  Icon-continer${type.toLowerCase()}`}
            onClick={onClick}
        >

        {iconType[type](color)}
        
        </span>
    )
}

export {TodoIcon}
