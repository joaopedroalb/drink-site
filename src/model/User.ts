import DrinkModel from "./Drink";

export default class UserModel{
    id:number 
    name: string
    path:string
    lstDrinks:DrinkModel[]

    constructor(id:number,name:string,path:string,lstDrinks:DrinkModel[]){
        this.id = id;
        this.name = name
        this.path = path
        this.lstDrinks = lstDrinks
    }    
}