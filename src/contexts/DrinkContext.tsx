import { createContext, useState, ReactNode, useContext, useEffect } from "react";
import DrinkModel from "../model/Drink";
import UserModel from "../model/User";

import axios from 'axios'


type DrinkContextData = {
    lstUsers: UserModel[];
    setLstUsers:React.Dispatch<React.SetStateAction<Array<UserModel>>>;
    getUserById: (id:string)=>UserModel
    doneDrinkById: (idUser:string,idDrink:string)=>void
    createUser: (name:string,path:string)=>void
    createDrink:(idUser:string,name:string)=>void
    loaded:boolean
}

export const DrinkContext = createContext({} as DrinkContextData)

type DrinkContextProviderProps = {
    children:ReactNode
}

export function DrinkContextProvider({children}:DrinkContextProviderProps){
    const [lstUsers,setLstUsers] = useState<Array<UserModel>>([])
    const [loaded,setloaded] = useState(false)

    //ISSO SERA DELETADO
    const [lastIndexDrink,setLastIndexDrink] = useState("6")

    const baseUrl = `http://3.13.112.254:3000/user/`

    const pathImg = "https://cdn.discordapp.com/attachments/580125063186087966/926204078613225522/Portrait_Placeholder.png"

    useEffect(()=>{
        getUserData()
    },[])

    // inicio da req 
    async function getUserData() {
        //const userData:any = await axios.get("https://pokeapi.co/api/v2/").then(resp=>resp.data)
        const userData:any = await axios.get(baseUrl).then(resp=>resp.data)

        let lstUserAux:Array<UserModel> = []

        userData.map(async(user:any)=>{
            const userDrinks = await getDrinkLst(user._id)
            const newUser = new UserModel(user._id,
                                        user.name,
                                        user.path.includes("cdn.discordapp.com/attachments/")?user.path:pathImg,
                                        userDrinks)
            lstUserAux.push(newUser)
        })

        setLstUsers(lstUserAux)

        setTimeout(()=>{setloaded(true)},1800)
    }

    async function getDrinkLst(idUser:string){
        const drinkData:any = await axios.get(`${baseUrl}${idUser}/drinks`).then(resp=>resp.data)

        let lstDrinkAux:Array<DrinkModel> = []

        if(!drinkData)
            return lstDrinkAux

        drinkData.map((drink:any)=>{
            const newDrink = new DrinkModel(drink._id,idUser,drink.name,drink.done)
            lstDrinkAux.push(newDrink)
        })
        return lstDrinkAux
    }
    // fim da api req

    function getUserById(id:string){
        console.log(lstUsers)
        console.log("x")
        const user = lstUsers.filter(u=>u.id==id)[0]
        return user
    }

    function doneDrinkById(idDrink:string,idUser:string){
        const user = lstUsers.filter(u=>u.id==idUser)[0]
        const indexUser = lstUsers.indexOf(user)
        const indexDrink =  user.lstDrinks.indexOf(user.lstDrinks.filter(d=>d.id==idDrink)[0])
        const drinked = user.lstDrinks.filter(d=>d.id==idDrink)[0].Drinked()
        
        let newList = [...lstUsers]

        newList[indexUser].lstDrinks[indexDrink] = drinked
        
        setLstUsers(newList)
    }

    function createUser(name:string,path:string){
        //id enquanto nao tem o post
        const idMock = lstUsers[lstUsers.length-1].id+1

        const newUser = new UserModel(idMock,name,path,[])
        
        let newList = [...lstUsers]
        newList.push(newUser)

        setLstUsers(newList)
    }

    function createDrink(idUser:string,name:string){
        const idDrink = lastIndexDrink+1;
        setLastIndexDrink(idDrink);

        let newList = [...lstUsers]

        
        let user = newList.filter(u=>u.id==idUser)[0]
        const indexUser = newList.indexOf(user)

        user.lstDrinks.push(new DrinkModel(idDrink,user.id,name,false))

        newList[indexUser] = user

        setLstUsers(newList)
        
    }
    return <DrinkContext.Provider value={{
        lstUsers,setLstUsers,getUserById,doneDrinkById,createUser,createDrink,loaded
    }}>
        {children}
    </DrinkContext.Provider>
}