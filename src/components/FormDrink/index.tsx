import { useState } from "react"
import Drink from "../../pages/Drink"
import Btn from "../Btn"
import styles from "./index.module.scss"

type MyDrink = {
    personId:number
    name:string
    isBebeu:boolean
}

export default function FormDrink(){
    function createDrink(){
        const newDrink:MyDrink = {personId:idPerson,name:nameDrink,isBebeu:false}
        console.log(newDrink)
    }
    const [idPerson,setIdPerson] = useState(0)
    const [nameDrink,setNameDrink] = useState("")
    
    return(
        <form className={styles.form}>
            <label>Digite o nome da bebida</label>
            <input type="text" onChange={(e)=>setNameDrink(e.target.value)}/>

            <label>{"Selecione a pessoa que deve beber"}</label>
            <select onChange={(e)=>setIdPerson(+e.target.value)}>
                <option value={0}>Gabriel</option>
                <option value={1}>Edson</option>
                <option value={2}>Isaque</option>
                <option value={3}>Chico</option>
            </select>

            <Btn text="Confirmar" onClick={()=>createDrink()}/>
        </form>
    )
}