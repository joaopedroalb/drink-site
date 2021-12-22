import styles from "./index.module.scss"
import {AiFillCheckCircle} from "react-icons/ai"

interface DrinkRowProps{
    name:string
    onClick:(e:any)=>void
}

export default function DrinkRow(props:DrinkRowProps){
    return(
        <div className={styles.card}>
            <h1 className={styles.title}>{props.name}</h1>
            <button onClick={props.onClick}>
                <AiFillCheckCircle/>
            </button>
        </div>
    )
}