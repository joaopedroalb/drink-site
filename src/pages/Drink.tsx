import { useContext } from "react";
import FormDrink from "../components/FormDrink";
import Navbar from "../components/Navbar";
import { DrinkContext } from "../contexts/DrinkContext";
import styles from "./Drink.module.scss"

export default function Drink(){
    const {loaded} = useContext(DrinkContext)
    return(
        <div className={styles.container}>
            <Navbar/>
            <div className={styles.content}>
                {loaded?<FormDrink />:<h1>Loading . . .</h1>}
            </div>
        </div>
    )
}