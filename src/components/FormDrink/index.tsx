import { useContext, useState } from "react"
import { DrinkContext } from "../../contexts/DrinkContext"
import Drink from "../../pages/Drink"
import Btn from "../Btn"
import styles from "./index.module.scss"

type MyDrink = {
    personId:number
    name:string
    isBebeu:boolean
}

export default function FormDrink(){
    function addDrink(){
        if(nameDrink!=""&&idPerson!=""){
            console.log("Id: "+idPerson+" Name: "+nameDrink)
            createDrink(idPerson,nameDrink)
        }
    }
    const [idPerson,setIdPerson] = useState("")
    const [nameDrink,setNameDrink] = useState("")

    const {lstUsers,createDrink} =  useContext(DrinkContext)
    
    return(
        <form className={styles.form}>
            <label>Digite o nome da bebida</label>
            <input type="text" onChange={(e)=>setNameDrink(e.target.value)}/>

            <label>{"Selecione a pessoa que deve beber"}</label>
            <select onChange={(e)=>setIdPerson(e.target.value)}>
                <option value={0}>Escolha uma pessoa</option>
                {lstUsers.map(user=>{
                    return <option value={user.id} key={user.id}>{user.name}</option>
                })}
            </select>

            <Btn text="Confirmar" onClick={()=>addDrink()}/>
        </form>
    )
}