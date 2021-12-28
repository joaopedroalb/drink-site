import { createContext, useState, ReactNode, useContext, useEffect } from "react";
import DrinkModel from "../model/Drink";
import UserModel from "../model/User";


type DrinkContextData = {
    lstUsers: UserModel[];
    setLstUsers:React.Dispatch<React.SetStateAction<Array<UserModel>>>;
    lstDrinks: DrinkModel[];
    setLstDrinks: React.Dispatch<React.SetStateAction<Array<DrinkModel>>>;
}


export const DrinkContext = createContext({} as DrinkContextData)

type DrinkContextProviderProps = {
    children:ReactNode
}

export function DrinkContextProvider({children}:DrinkContextProviderProps){
    const [lstUsers,setLstUsers] = useState<Array<UserModel>>([])
    const [lstDrinks,setLstDrinks] = useState<Array<DrinkModel>>([])

    

    return <DrinkContext.Provider value={{
        lstUsers, lstDrinks,setLstUsers,setLstDrinks
    }}>
        {children}
    </DrinkContext.Provider>
}