// class
// oop - object oriented programming

class Student {
    constructor(_id, _name, _year, _avgGrades) {
        this.id = _id
        this.name = _name
        this.year = _year
        this.grades = _avgGrades
    }

    sayHi() {
        console.log(`Hello my name is ${this.name}`)
    }

    sayBye() {

    }


    static isArray() { }
}

const MichalS = new Student("id111", "MichalMiles", 2, 95)
console.log(MichalS)




class Car {
    constructor(_lp, _type) {
        this.lp = _lp
        this.type = _type
        this.km = 0;
    }

    driveForward(km) {
        this.km = this.km + km
    }

    automaticParking() {
        console.log("i am parking!!!!")
    }

    printMe() {

    }
}



const tesla = new Car("adsd3r43", "tesla model 3")
tesla.automaticParking()
tesla.printMe()