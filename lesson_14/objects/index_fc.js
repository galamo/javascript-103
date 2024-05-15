// function constructor

// function getUsers(){

// }


function DrivingLicence(_name, _lastName, _idNumber, _lc) {
    this.name = _name
    this.lastName = _lastName
    this.idNumber = _idNumber
    this.licenseList = _lc
    this.expirationDate = new Date(new Date().getTime() + 999999000000).toISOString()
}

const DLAmir2 = new DrivingLicence("Amir", "Mizrahi", 2451351, ["B", "A2"])
console.log(DLAmir2)