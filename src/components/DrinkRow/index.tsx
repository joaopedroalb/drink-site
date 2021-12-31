import styles from "./index.module.scss"
import {AiFillCheckCircle,AiFillLike} from "react-icons/ai"
import {BiDrink} from "react-icons/bi"
import DrinkModel from "../../model/Drink"
import { useContext } from "react"
import { DrinkContext } from "../../contexts/DrinkContext"

interface DrinkRowProps{
    drink:DrinkModel
}

export default function DrinkRow(props:DrinkRowProps){
    const drink = props.drink
    
    function drinkedDoned(){
        if(!drink.drinked)
        doneDrinkById(drink.id,drink.idUser)
    }
    const {doneDrinkById} = useContext(DrinkContext)
    return !drink.drinked?(
        <div className={styles.card}>
            <h1 className={styles.title}>{drink.name}</h1>
            <button onClick={()=>drinkedDoned()}>
                <BiDrink/>
            </button>
        </div>
    ):(
        <div className={styles.cardDisable}>
            <h1 className={styles.title}>{drink.name}</h1>
            <button >
                <AiFillLike/>
            </button>
        </div>
    )
}