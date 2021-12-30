import styles from "./index.module.scss"

import drink from '../../../public/caneca.png'

import Image from "next/image"
import Btn from "../Btn"
import Link from "next/link"


export default function Navbar(){
    return(
        <nav className={styles.container}>
            <div className={styles.homeSec}>
                <div style={{cursor:'pointer'}}>
                    <Link href="/">
                        <Image src={drink} width={55} height={45} alt="Drink" />
                    </Link>
                </div>
                
                <a>
                    <h1 className={styles.title}>Local Host</h1>
                </a>
                
            </div>
            <div className={styles.CrudSec}>
                <Btn url="/Person" text="Cadastrar Pessoa"/>
                <Btn url="/Drink" text="Cadastrar Bebida"/>
            </div>
        </nav>
    )
}