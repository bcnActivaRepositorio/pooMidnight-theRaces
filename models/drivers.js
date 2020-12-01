"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Driver = /** @class */ (function (_super) {
    __extends(Driver, _super);
    //constructor
    function Driver(name, surname, age, yearsAtWork, wages, height, weight) {
        var _this = 
        //inheritance
        _super.call(this, name, surname, age, yearsAtWork, wages) || this;
        // its own
        _this.weight = weight;
        _this.height = height;
        return _this;
    }
    Object.defineProperty(Driver.prototype, "myHeight", {
        //getters
        get: function () {
            return this.height;
        },
        set: function (height) {
            this.height = height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Driver.prototype, "myWeight", {
        get: function () {
            return this.weight;
        },
        //setter
        set: function (weight) {
            this.weight = weight;
        },
        enumerable: false,
        configurable: true
    });
    //METHODS
    Driver.prototype.driversGross = function () {
        var plusPerill = 50000;
        var time = this.yearsAtWork * 10000;
        this.wages = this.wages + (time) + (plusPerill);
        this.wages = this.currencyToPay().format(this.wages);
        return this.wages;
    };
    Driver.prototype.driverHeight = function () {
        this.height = parseFloat(this.height);
        this.height = this.height / 100;
        this.height = this.height.toFixed(2) + " m";
        return this.height;
    };
    Driver.prototype.toSting = function () {
        var text = "";
        text = this.name + " " + this.surname + " is a new pilot of the team.\n Age: " + this.age + ".\n Height: " + this.height + ".\n Weight: " + this.weight + " Kg.\n Years in the team: " + this.yearsAtWork + "\n Salary: " + this.wages;
        return text;
    };
    return Driver;
}(TeamWorker));
