import { createContext, useState, ReactNode, useContext, useEffect } from "react";
import DrinkModel from "../model/Drink";
import UserModel from "../model/User";

import axios from 'axios'


type DrinkContextData = {
    lstUsers: UserModel[];
    setLstUsers:React.Dispatch<React.SetStateAction<Array<UserModel>>>;
    getUserById: (id:number)=>UserModel
}

export const DrinkContext = createContext({} as DrinkContextData)

type DrinkContextProviderProps = {
    children:ReactNode
}

export function DrinkContextProvider({children}:DrinkContextProviderProps){
    const [lstUsers,setLstUsers] = useState<Array<UserModel>>([])

    const baseUrl = `3.142.54.6:3000/user/`

    useEffect(()=>{
        //base url 3.142.54.6:3000
        //getUserData()
        if(lstUsers.length<=0){
            getUserDataMock()
        }
    },[])

    //func mock enquanto nao tem api
    async function getUserDataMock(){
        let lstUserAux:Array<UserModel> = [] 

        lstUserAux.push(
        new UserModel(1,"Aderaldo","https://cdn.discordapp.com/attachments/580125063186087966/925739276388429864/EzXdQzlVEAEUcqG.png",
        [new DrinkModel(1,1,"Caninha do engenho",false),new DrinkModel(2,1,"Dose de cana",false)]))
        
        lstUserAux.push(
            new UserModel(2,"Edson","https://cdn.discordapp.com/attachments/580125063186087966/925740228000481330/9k.png",
            [new DrinkModel(3,2,"Vinho",false), new DrinkModel(4,2,"Skol",false), new DrinkModel(5,2,"Dose de 51",false)])
        )

        lstUserAux.push(
            new UserModel(3,"Isaque","https://cdn.discordapp.com/attachments/469630958811742212/925800217905856543/lucas-crispim-comemora-gol-marcado-pelo-fortaleza-em-cima-do-santos-seu-ex-clube-1630704930812_v2_450x337.png",
            [new DrinkModel(6,3,"Skolzinha",false)])
        )

        setLstUsers(lstUserAux)
    }

    // inicio da req 
    async function getUserData() {
        const userData:any = await axios.get(baseUrl).then(resp=>resp.data)
        let lstUserAux:Array<UserModel> = []

        userData.map(async(user:any)=>{
            const userDrinks = await getDrinkLst(user.Id)
            const newUser = new UserModel(user.Id,user.Name,user.Path,userDrinks)
            lstUserAux.push(newUser)
        })

        setLstUsers(lstUserAux)
    }

    async function getDrinkLst(idUser:number){
        const drinkData:any = await axios.get(`${baseUrl}${idUser}/drinks`).then(resp=>resp.data)

        let lstDrinkAux:Array<DrinkModel> = []
        drinkData.map((drink:any)=>{
            const newDrink = new DrinkModel(drink.Id,idUser,drink.Name,drink.None)
            lstDrinkAux.push(newDrink)
        })
        return lstDrinkAux
    }
    // fim da api req

    function getUserById(id:number){
        const user = lstUsers.filter(u=>u.id==id)[0]
        return user
    }
    return <DrinkContext.Provider value={{
        lstUsers,setLstUsers,getUserById
    }}>
        {children}
    </DrinkContext.Provider>
}