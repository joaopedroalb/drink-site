import styles from "./index.module.scss"
import {AiFillCheckCircle} from "react-icons/ai"
import DrinkModel from "../../model/Drink"
import { useContext } from "react"
import { DrinkContext } from "../../contexts/DrinkContext"

interface DrinkRowProps{
    drink:DrinkModel
}

export default function DrinkRow(props:DrinkRowProps){
    const drink = props.drink
    
    function drinkedDoned(){
        doneDrinkById(drink.id,drink.idUser)
    }
    const {doneDrinkById} = useContext(DrinkContext)
    return(
        <div className={styles.card}>
            <h1 className={styles.title}>{drink.name}</h1>
            <button onClick={()=>drinkedDoned()}>
                <AiFillCheckCircle/>
            </button>
        </div>
    )
}