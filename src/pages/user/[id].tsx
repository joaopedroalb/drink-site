import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import DrinkRow from "../../components/DrinkRow";
import Navbar from "../../components/Navbar";
import { DrinkContext } from "../../contexts/DrinkContext";
import DrinkModel from "../../model/Drink";
import UserModel from "../../model/User";
import styles from "./user.module.scss"

export default function User(){
    const router = useRouter()
    const {getUserById,lstUsers} = useContext(DrinkContext)

    const {id} = router.query

    const [user,setUser] = useState<UserModel|undefined>()

    useEffect(()=>{
        if(!id)
            return 
        setUser(getUserById(parseInt(id as string)))
        console.log("Lista de usuarios: ")
        console.log(user)
        //console.log("Meu id é "+id)
    },[id])

    function renderContent(lstDrinks:DrinkModel[]){
        if(lstDrinks.filter(e=>e.drinked).length!=lstDrinks.length){
            return (
                lstDrinks.map((e,i)=>{
                    return e.drinked?(false):(<DrinkRow drink={e} key={i}/>)
                })
            )
        }
        return (
            <h1>
                Você não ta devendo nada
            </h1>
        )
    }

    return(
        <div className={styles.container}>
            <Navbar/>
            <div className={styles.content}>
                {user&&renderContent(user.lstDrinks)}
            </div>
        </div>
    )
}