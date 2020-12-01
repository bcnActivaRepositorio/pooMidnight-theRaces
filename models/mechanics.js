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
var Mechanic = /** @class */ (function (_super) {
    __extends(Mechanic, _super);
    //constructor
    function Mechanic(name, surname, age, yearsAtWork, wages, graduated) {
        var _this = 
        //inheritance
        _super.call(this, name, surname, age, yearsAtWork, wages) || this;
        //its own
        _this.graduated = graduated;
        return _this;
    }
    Object.defineProperty(Mechanic.prototype, "myGraduated", {
        //getters
        get: function () {
            return this.graduated;
        },
        //setter
        set: function (graduated) {
            this.graduated = graduated;
        },
        enumerable: false,
        configurable: true
    });
    //METHODS
    Mechanic.prototype.mechanicsGross = function () {
        var time = this.yearsAtWork * 10000;
        this.wages = this.wages + parseInt(time);
        this.wages = this.currencyToPay().format(this.wages);
        return this.wages;
    };
    Mechanic.prototype.toSting = function () {
        var text = "";
        text = this.name + " " + this.surname + " is a mechanic of the team.\n Years in the team: " + this.yearsAtWork + " \n Engineer?: " + this.graduated + "\n Salary: " + this.wages;
        return text;
    };
    return Mechanic;
}(TeamWorker));
