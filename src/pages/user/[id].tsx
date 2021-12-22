import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DrinkRow from "../../components/DrinkRow";
import Navbar from "../../components/Navbar";
import styles from "./user.module.scss"

class Person{
    name:string
    isBebeu:boolean

    constructor(name:string){
        this.name = name
        this.isBebeu = false
    }

    bebeu(){
        console.log("entrou no do "+this.name)
        this.isBebeu = true;
    }

}

const mocksAux:Array<Person> = [
    new Person("Pinga"),
    new Person("Dose de 51"),
    new Person("Água"),
]

export default function User(){
    const router = useRouter()
    const id = router.query.id

    const [mocks,setMocks] = useState(mocksAux)

    useEffect(()=>{
        setMocks(mocksAux)
        
    },[])

    function irmaoBebeu(index:number){
        const lst = [...mocks]
        lst[index].bebeu()
        setMocks(lst)
    }

    function renderContent(){
        if(mocks.filter(e=>e.isBebeu==true).length!=mocks.length){
            return (
                mocks.map((e,i)=>{
                    return e.isBebeu?(false):(<DrinkRow name={e.name} onClick={()=>irmaoBebeu(i)} key={i}/>)
                })
            )
        }
        return (
            <h1>
                Você não ta devendo nada
            </h1>
        )
    }

    return(
        <div className={styles.container}>
            <Navbar/>
            <div className={styles.content}>
                {renderContent()}
            </div>
        </div>
    )
}