import styles from "./index.module.scss"
import Image from "next/image"
import Btn from "../Btn"


interface CardProps{
    name:string
    idPerson:string
    drinks:number
    pathImg:string
}

export default function Card(props:CardProps){
    return(
        <div className={styles.card}>
            <Image src={props.pathImg} width={300} height={300} />
            <hgroup className={styles.headerContainer}>
                <h2 className={styles.drink}>{props.drinks}</h2>
                <h3>{props.name}</h3>
            </hgroup>
            <div className={styles.footer}>
                <Btn text="Beber" url={`/user/${props.idPerson}`}/>
            </div>
        </div>
    )
}