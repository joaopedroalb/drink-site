import { createContext, useState, ReactNode, useContext, useEffect } from "react";
import DrinkModel from "../model/Drink";
import UserModel from "../model/User";

import axios from 'axios'


type DrinkContextData = {
    lstUsers: UserModel[];
    setLstUsers:React.Dispatch<React.SetStateAction<Array<UserModel>>>;
    getUserById: (id:number)=>UserModel
    doneDrinkById: (idUser:number,idDrink:number)=>void
    createUser: (name:string,path:string)=>void
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
            new UserModel(3,"Isaque","https://cdn.discordapp.com/attachments/580125063186087966/925741221874380830/latest.png",
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

    function doneDrinkById(idDrink:number,idUser:number){
        const user = lstUsers.filter(u=>u.id==idUser)[0]
        const indexUser = lstUsers.indexOf(user)
        const indexDrink =  user.lstDrinks.indexOf(user.lstDrinks.filter(d=>d.id==idDrink)[0])
        const drinked = user.lstDrinks.filter(d=>d.id==idDrink)[0].Drinked()

        console.log(user.lstDrinks)
        
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

    return <DrinkContext.Provider value={{
        lstUsers,setLstUsers,getUserById,doneDrinkById,createUser
    }}>
        {children}
    </DrinkContext.Provider>
}