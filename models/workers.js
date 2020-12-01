"use strict";
var TeamWorker = /** @class */ (function () {
    //constructor
    function TeamWorker(name, surname, age, yearsAtWork, wages) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.yearsAtWork = yearsAtWork;
        this.wages = wages = 50000;
    }
    Object.defineProperty(TeamWorker.prototype, "myName", {
        //getters
        get: function () {
            return this.name;
        },
        // if checked the end of the season
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamWorker.prototype, "mySurname", {
        get: function () {
            return this.surname;
        },
        //setters: what would be like to change straight?
        //surnames as anglosaxon females change their last name
        set: function (surname) {
            this.surname = surname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamWorker.prototype, "myAge", {
        get: function () {
            return this.age;
        },
        set: function (age) {
            this.age = age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamWorker.prototype, "myYearsAtWork", {
        get: function () {
            return this.yearsAtWork;
        },
        set: function (yearsAtWork) {
            this.yearsAtWork = yearsAtWork;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamWorker.prototype, "myWages", {
        get: function () {
            return this.wages;
        },
        //wages as the initial might change one year
        set: function (wages) {
            this.wages = wages;
        },
        enumerable: false,
        configurable: true
    });
    //METHODS
    TeamWorker.prototype.currencyToPay = function () {
        //console.log('hotel currency works');
        var currency = new Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: "EUR"
        });
        return currency;
    };
    TeamWorker.prototype.toSting = function () {
        console.log('toString worker Works');
    };
    return TeamWorker;
}());
