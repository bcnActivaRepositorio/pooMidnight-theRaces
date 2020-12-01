"use strict";
console.log('cars works');
var Car = /** @class */ (function () {
    //constructor
    function Car(name, power, maxSpeed, color, price) {
        this.name = name;
        this.power = power;
        this.maxSpeed = maxSpeed;
        this.color = color;
        this.price = price;
    }
    Object.defineProperty(Car.prototype, "myName", {
        //getters
        get: function () {
            return this.name;
        },
        //setters
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "myPower", {
        get: function () {
            return this.power;
        },
        set: function (power) {
            this.power = power;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "myMaxSpeed", {
        get: function () {
            return this.maxSpeed;
        },
        set: function (maxSpeed) {
            this.maxSpeed = maxSpeed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "myColor", {
        get: function () {
            return this.color;
        },
        set: function (color) {
            this.color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "myPrice", {
        get: function () {
            return this.price;
        },
        set: function (price) {
            this.price = price;
        },
        enumerable: false,
        configurable: true
    });
    //METHODS
    Car.prototype.currencyToPay = function () {
        //console.log('hotel currency works');
        var currency = new Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: "EUR"
        });
        return currency;
    };
    Car.prototype.carGross = function () {
        this.price = this.currencyToPay().format(this.price);
        return this.price;
    };
    Car.prototype.toString = function () {
        var text = "";
        text = this.name + " F1 car created. " + this.power + " CV. Max. Speed: " + this.maxSpeed + " K/h. Color: " + this.color + ". At the price of " + this.currencyToPay().format(this.price);
        return text;
    };
    return Car;
}());
