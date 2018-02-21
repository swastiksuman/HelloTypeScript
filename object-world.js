var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.driveCar = function () {
        console.log("Car Drive");
    };
    ;
    return Car;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Truck.prototype.driveTruck = function () {
        console.log("Truck Driver");
    };
    return Truck;
}(Vehicle));
var vehicle = new Car();
vehicle.driveCar();
var v = new Truck();
v.driveTruck();
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.prototype.getFullName = function () {
        return this.first_name + this.last_name;
    };
    return Foo;
}());
var aPerson = new Foo();
var someObj = {
    first_name: "Test",
    last_name: "Test",
    getFullName: function () { return "test"; }
};
aPerson = someObj;
console.log(aPerson);
