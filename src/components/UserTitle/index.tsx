import styles from "./index.module.scss"
import UserModel from "../../model/User";
import Image from "next/image"

interface UserTitleProps{
    User:UserModel
}

export default function UserTitle(props:UserTitleProps){
    const user = props.User
    
    return(
        <div className={styles.container}>
            <Image src={user.path} width={150} height={150} alt="User Photo" layout="fixed" className="rounded-full"/>
            <h1>{user.name}</h1>
        </div>
    )
}