// reference 

const newEmployee = {
    name: "harel",
    age: 22,
    role: "developer"
}


const newEmployee2 = newEmployee // now newEmployee2 point on  newEmployee reference

let a = 4;
let b = a;
a = a + 1;
// a ? 5
// b ? 4

newEmployee.age = 30
console.log(newEmployee2)
const newEMployee44 = newEmployee


function increaseEmployeeAge(e) {
    e.age = e.age + 1
    console.log(e)
}

// copy an object ( shallow )

// ...
const newEmployeeCopy = { ...newEmployee }
newEmployeeCopy.name
newEmployeeCopy.age


// we can make deep copy  with ( JSONstringify & parse, lodash, jquery)
// new way and best practice - use structuredClone
