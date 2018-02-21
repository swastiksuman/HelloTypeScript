class Vehicle{
    steering: number;
    wheels: number;
}

class Car extends Vehicle{
    driveCar(){
        console.log("Car Drive")
    };
}

class Truck extends Vehicle{
    driveTruck(){
        console.log("Truck Driver")
    }
}

var vehicle: Car = new Car();
vehicle.driveCar();

var v: Truck = new Truck();
v.driveTruck();

//interface and Duck Typing
interface Person{
    first_name: string;
    last_name: string;
    getFullName(): string;
}

class Foo implements Person{
    first_name: string;
    last_name: string;
    getFullName(): string{
        return this.first_name+this.last_name;
    }
}

let aPerson: Person = new Foo();

let someObj = {
    first_name: "Test",
    last_name: "Test",
    getFullName: ()=>"test"
}

aPerson = someObj;
console.log(aPerson);