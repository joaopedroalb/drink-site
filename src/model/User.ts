import DrinkModel from "./Drink";

export default class UserModel{
    id:string 
    name: string
    path:string
    lstDrinks:DrinkModel[]

    constructor(id:string,name:string,path:string,lstDrinks:DrinkModel[]){
        this.id = id;
        this.name = name
        this.path = path
        this.lstDrinks = lstDrinks
    }    
}