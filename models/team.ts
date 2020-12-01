"use strict"
console.log('team works');
//new class
class Team {
    //atributos
    private name: string;
    private budget: any;
    private country: string;
    private arrCars: Car[] = new Array;
    private arrWork: TeamWorker[] = new Array;
    //constructor
    constructor(name: string, budget: any, country: string ){
        this.name = name;
        this.budget = budget;
        this.country = country;

    }
    //getters
    public get myName(){
        return this.name;
    }
    public get myBudget(){
        return this.budget;
    }
    public get myCountry(){
        return this.country;
    }
    //setters of all as it might change through the season
    public set myBudget(budget: any){
        this.budget = budget;
    }
    public set myName(name: string){
        this.name = name;
    }
    public set myCountry(country: string){
        this.country = country;
    }
    //METHODS
    public addCars(car: Car){

        this.arrCars.push(car);
    }
    public addWorkers(worker: TeamWorker){

        this.arrWork.push(worker);
    }
    //nice muny print screen
    public currencyToPay(){

        //console.log('hotel currency works');
      
       let currency = new Intl.NumberFormat("es-ES", {
      
            style: "currency",
            
            currency: "EUR"
          })
      
        return   currency;
    }
    public budgetGross(){
        this.budget = this.currencyToPay().format(this.budget);
        return this.budget;
    }
    //what to say to the press
    public toString(){
        console.log('toString team works');
        let text: string;
        text = `${this.name} team from ${this.country} has been created.\n Budget: ${this.currencyToPay().format(this.budget)}.\n Cars in the team: ${this.addCars.length - 1}.\n Professionals in the team: ${this.arrWork.map((e: any) => e.name + " " + e.surname)} `;
        return text;
    }

}