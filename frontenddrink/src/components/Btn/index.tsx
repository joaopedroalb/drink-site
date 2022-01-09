import styles from "./index.module.scss"
import Link from "next/link"

interface BtnProps{
    url?:string
    text:string
    onClick?:(e:any)=>void
}

export default function Btn(props:BtnProps){

    function renderBtn(){
        return(
            <button onClick={props.onClick} className={styles.btn} type="button">
                {props.text}
            </button>
        )
    }

    return props.url?(
        <Link href={props.url}>
            {renderBtn()}
        </Link>
    ):renderBtn()
}