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
    const id = parseInt(router.query.id as string)

    const {lstUsers} = useContext(DrinkContext)

    const [user,setUser] = useState<any>(getUserById(id))

    useEffect(()=>{},[])

    function getUserById(id:number){
        const user = lstUsers.filter(u=>u.id==id)[0]
        console.log(user)
        return user
    }

    function renderContent(lstDrinks:DrinkModel[]){
        if(lstDrinks.filter(e=>e.drinked).length!=lstDrinks.length){
            return (
                lstDrinks.map((e,i)=>{
                    return e.drinked?(false):(<DrinkRow name={e.name} onClick={()=>console.log("oi")} key={i}/>)
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
                {user != null ? renderContent(user.lstDrinks):false}
            </div>
        </div>
    )
}