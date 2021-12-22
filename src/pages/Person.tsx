import FormPerson from "../components/FormPerson";
import Navbar from "../components/Navbar";
import styles from "./Person.module.scss"

export default function Person(){
    return(
        <div className={styles.container}>
            <Navbar/>
            <div className={styles.content}>
                <FormPerson/>
            </div>
        </div>
    )
}