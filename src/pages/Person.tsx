import { useContext } from "react";
import FormPerson from "../components/FormPerson";
import Navbar from "../components/Navbar";
import { DrinkContext } from "../contexts/DrinkContext";
import styles from "./Person.module.scss"

export default function Person(){

    const {loaded} = useContext(DrinkContext)

    return(
        <div className={styles.container}>
            <Navbar/>
            <div className={styles.content}>
                {loaded?<FormPerson/>:<h1>Loading . . . </h1>}
            </div>
        </div>
    )
}