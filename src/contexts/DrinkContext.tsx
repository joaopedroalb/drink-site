import { createContext, useState, ReactNode, useContext, useEffect } from "react";
import DrinkModel from "../model/Drink";
import UserModel from "../model/User";

import axios from 'axios'


type DrinkContextData = {
    lstUsers: UserModel[];
    setLstUsers:React.Dispatch<React.SetStateAction<Array<UserModel>>>;
}


export const DrinkContext = createContext({} as DrinkContextData)

type DrinkContextProviderProps = {
    children:ReactNode
}

export function DrinkContextProvider({children}:DrinkContextProviderProps){
    const [lstUsers,setLstUsers] = useState<Array<UserModel>>([])

    const baseUrl = `3.142.54.6/user/`
    useEffect(()=>{
        //base url 3.142.54.6
        getUserData()
    },[])

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

    return <DrinkContext.Provider value={{
        lstUsers,setLstUsers
    }}>
        {children}
    </DrinkContext.Provider>
}