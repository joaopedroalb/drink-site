import styles from "./index.module.scss"
import {AiFillCheckCircle} from "react-icons/ai"
import DrinkModel from "../../model/Drink"

interface DrinkRowProps{
    drink:DrinkModel
}

function drinkedDoned(){
    console.log("Done drinked")
    
}

export default function DrinkRow(props:DrinkRowProps){
    const drink = props.drink
    
    return(
        <div className={styles.card}>
            <h1 className={styles.title}>{drink.name}</h1>
            <button onClick={()=>drinkedDoned()}>
                <AiFillCheckCircle/>
            </button>
        </div>
    )
}