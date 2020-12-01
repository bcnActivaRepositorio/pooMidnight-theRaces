"use strict"
class Driver extends TeamWorker {

    //propeties
    public height: any;
    public weight: number;
    //constructor
    constructor(name: string, surname: string, age: number, yearsAtWork: number, wages: any, height: number, weight: number){
        //inheritance
        super(name, surname, age, yearsAtWork, wages);
        // its own
        this.weight = weight;
        this.height = height;
    }
    //getters
    public get myHeight(){
        return this.height;
    }
    public get myWeight(){
        return this.weight;
    }
    //setter
    public set myWeight(weight: number){
        this.weight = weight;
    }
    public set myHeight(height: number){
        this.height = height;
    }
    //METHODS
    public driversGross(){
        let plusPerill: number = 50000;

        let time: number = this.yearsAtWork * 10000;

        this.wages = this.wages + (time) + (plusPerill);

        this.wages = this.currencyToPay().format(this.wages);

        return this.wages;
    }
    public driverHeight(){
        this.height = parseFloat(this.height);
        this.height = this.height / 100;
        this.height = this.height.toFixed(2) + " m";
        return this.height;
    }
    public toSting(){
        let text: string = "";
        text = `${this.name} ${this.surname} is a new pilot of the team.\n Age: ${this.age}.\n Height: ${this.height}.\n Weight: ${this.weight} Kg.\n Years in the team: ${this.yearsAtWork}\n Salary: ${this.wages}`;
        return text;
    }
}