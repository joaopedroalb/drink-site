import { useContext, useState } from "react"
import { DrinkContext } from "../../contexts/DrinkContext"
import Btn from "../Btn"
import styles from "./index.module.scss"

export default function FormPerson(){

    const {createUser} = useContext(DrinkContext)

    function createPerson(){
        console.log("Oi entrei aqui")
        console.log(person)
        console.log(person.path.includes("cdn.discordapp.com/attachments/"))
        if(person.name!=""&&person.path.includes("cdn.discordapp.com/attachments/")){
            createUser(person.name,person.path)
            setPerson({name:"",path:""})
        }
    }
    const [person,setPerson] = useState({
        name:"",
        path:""
    })

    return(
        <form className={styles.form}>
            <label>Digite o nome do ser humano</label>
            <input type="text" onChange={(e)=>setPerson({name:e.target.value,path:person.path})} value={person.name}/>

            <label>{"Digite o o path da imagem (favor use o path do discord, grato)"}</label>
            <input type="text" onChange={(e)=>setPerson({name:person.name,path:e.target.value})} value={person.path}/>

            <Btn text="Confirmar" onClick={()=>createPerson()}/>
        </form>
    )
}