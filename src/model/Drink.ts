export default class DrinkModel{
    id:string 
    idUser:string
    name: string
    drinked:boolean

    constructor(id:string,idUser:string,name:string, drinked=false){
        this.id = id;
        this.idUser = idUser
        this.name = name
        this.drinked = drinked
    }

    Drinked(){
        return new DrinkModel(this.id,this.idUser,this.name,true)
    }
    
}