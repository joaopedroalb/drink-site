import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import styles from "./user.module.scss"

export default function User(){
    const router = useRouter()
    const id = router.query.id

    return(
        <div className={styles.container}>
            <Navbar/>
            <div className={styles.content}>
                <h1>Person com id :{id}</h1>
            </div>
        </div>
    )
}