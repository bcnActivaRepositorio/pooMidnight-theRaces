"use strict";
console.log('team works');
//new class
var Team = /** @class */ (function () {
    //constructor
    function Team(name, budget, country) {
        this.arrCars = new Array;
        this.arrWork = new Array;
        this.name = name;
        this.budget = budget;
        this.country = country;
    }
    Object.defineProperty(Team.prototype, "myName", {
        //getters
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "myBudget", {
        get: function () {
            return this.budget;
        },
        //setters of all as it might change through the season
        set: function (budget) {
            this.budget = budget;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "myCountry", {
        get: function () {
            return this.country;
        },
        set: function (country) {
            this.country = country;
        },
        enumerable: false,
        configurable: true
    });
    //METHODS
    Team.prototype.addCars = function (car) {
        this.arrCars.push(car);
    };
    Team.prototype.addWorkers = function (worker) {
        this.arrWork.push(worker);
    };
    //nice muny print screen
    Team.prototype.currencyToPay = function () {
        //console.log('hotel currency works');
        var currency = new Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: "EUR"
        });
        return currency;
    };
    Team.prototype.budgetGross = function () {
        this.budget = this.currencyToPay().format(this.budget);
        return this.budget;
    };
    //what to say to the press
    Team.prototype.toString = function () {
        console.log('toString team works');
        var text;
        text = this.name + " team from " + this.country + " has been created.\n Budget: " + this.currencyToPay().format(this.budget) + ".\n Cars in the team: " + (this.addCars.length - 1) + ".\n Professionals in the team: " + this.arrWork.map(function (e) { return e.name + " " + e.surname; }) + " ";
        return text;
    };
    return Team;
}());
