import { ChangeEvent, ChangeEventHandler, useContext, useState } from "react"
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

    function handleChange(e:ChangeEvent<HTMLInputElement>){
        const newPerson = {...person}

        if(e.target.id=="name"||e.target.id=="path"){
            newPerson[e.target.id] = e.target.value
            setPerson(newPerson)
        }
        
    }

    return(
        <form className={styles.form}>
            <label>Digite o nome do ser humano</label>
            <input id="name" type="text" onChange={(e)=>handleChange(e)} value={person.name}/>

            <label>{"Digite o o path da imagem (favor use o path do discord, grato)"}</label>
            <input id="path" type="text" onChange={(e)=>handleChange(e)} value={person.path}/>

            <Btn text="Confirmar" onClick={()=>createPerson()}/>
        </form>
    )
}