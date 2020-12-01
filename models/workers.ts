"use strict"
class TeamWorker {
    //property
    protected name: string;
    protected surname: string;
    protected age: number;
    protected yearsAtWork: number;
    protected wages: any;
    //constructor
    constructor(name: string, surname: string, age: number, yearsAtWork: number, wages: number){
        this.name        = name;
        this.surname     = surname;
        this.age         = age;
        this.yearsAtWork = yearsAtWork;
        this.wages       = wages = 50000;
    }
    //getters
    get myName(){
        
        return this.name;
    }
    get mySurname(){

        return this.surname;
    }
    get myAge(){

        return this.age;
    }
    get myYearsAtWork(){

        return this.yearsAtWork;
    }
    get myWages(){

        return this.wages;
    }
    //setters: what would be like to change straight?
    //surnames as anglosaxon females change their last name
    set mySurname(surname: string){

        this.surname = surname;
    }
    // if checked the end of the season
    set myName(name: string){

        this.name = name;
    }
    //wages as the initial might change one year
    set myWages(wages: number){

        this.wages = wages;
    }
    set myAge(age: number){

        this.age = age;
    }
    set myYearsAtWork(yearsAtWork: number){

        this.yearsAtWork = yearsAtWork;
    }
    //METHODS
   public currencyToPay(){

        //console.log('hotel currency works');
      
       let currency = new Intl.NumberFormat("es-ES", {
      
            style: "currency",
            
            currency: "EUR"
          })
      
        return   currency;
      }
    public toSting(){
        console.log('toString worker Works');
    }


}