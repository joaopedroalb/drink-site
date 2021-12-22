import FormDrink from "../components/FormDrink";
import Navbar from "../components/Navbar";
import styles from "./Drink.module.scss"

export default function Drink(){
    return(
        <div className={styles.container}>
            <Navbar/>
            <div className={styles.content}>
                <FormDrink />
            </div>
        </div>
    )
}