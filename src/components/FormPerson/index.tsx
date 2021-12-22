import Btn from "../Btn"
import styles from "./index.module.scss"

export default function FormPerson(){
    return(
        <form className={styles.form}>
            <label>Digite o nome do ser humano</label>
            <input type="text" />

            <label>{"Digite o o path da imagem (favor use o path do discord, grato)"}</label>
            <input type="text" />

            <Btn text="Confirmar" onClick={()=>console.log("Vai fazer algo")}/>
        </form>
    )
}