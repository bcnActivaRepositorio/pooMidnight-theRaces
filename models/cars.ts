"use strict"
console.log('cars works');
class Car {
    //atributes
    private name: string;
    private power: number;
    private maxSpeed: number;
    protected color: string;
    private price: any;
    //constructor
    constructor(name: string, power: number, maxSpeed: number, color: string, price: any){
        this.name     = name;
        this.power    = power;
        this.maxSpeed = maxSpeed;
        this.color    = color;
        this.price    = price;
    }
    //getters
    public get myName(){
        return this.name;
    }
    public get myPower(){
        return this.power;
    }
    public get myMaxSpeed(){
        return this.maxSpeed;
    }
    public get myColor(){
        return this.color;
    }
    public get myPrice(){
        return this.price;
    }
    //setters
    public set myName(name: string){
        this.name = name;
    }
    public set myPower(power: number){
         this.power = power;
    }
    public set myMaxSpeed(maxSpeed: number){
         this.maxSpeed = maxSpeed;
    }
    public set myColor(color: string){
         this.color = color;
    }
    public set myPrice(price: any){
         this.price = price;
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
    public carGross(){
        this.price = this.currencyToPay().format(this.price);
        return this.price;
    }
    public toString(){

        let text:string = "";
        text = `${this.name} F1 car created. ${this.power} CV. Max. Speed: ${this.maxSpeed} K/h. Color: ${this.color}. At the price of ${this.currencyToPay().format(this.price)}`;
        return text;
    }
}