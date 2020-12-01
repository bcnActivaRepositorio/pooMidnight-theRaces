"use strict"
class Mechanic extends TeamWorker {
    //properties
    private graduated;
    //constructor
    constructor(name: string, surname: string, age: number, yearsAtWork: number, wages: number, graduated: string){
        //inheritance
        super(name, surname, age, yearsAtWork,wages);
        //its own
        this.graduated = graduated;
    }
    //getters
    get myGraduated(){
        return this.graduated;
    }
    //setter
    set myGraduated(graduated: string){
        this.graduated = graduated;
    }
    //METHODS
    public mechanicsGross(){
        let time: any = this.yearsAtWork * 10000;

        this.wages = this.wages + parseInt(time);

        this.wages = this.currencyToPay().format(this.wages);

        return this.wages;
    }
    public toSting(){
        let text: string = "";
        text = `${this.name} ${this.surname} is a mechanic of the team.\n Years in the team: ${this.yearsAtWork} \n Engineer?: ${this.graduated}\n Salary: ${this.wages}`;
        return text; 
    }
}
