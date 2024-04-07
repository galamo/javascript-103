
function init() {
    const tableBody = document.getElementById("usersTable")
    draw(users, tableBody)

    // access addNewUser button, how?!
    const addNewUserButton = document.getElementById("addNewUser")
    addNewUserButton.addEventListener("click", function () {
        const firstNameInput = document.getElementById("firstName");
        const lastNameInput = document.getElementById("lastName");
        const emailInput = document.getElementById("email");
        const phoneInput = document.getElementById("phone");
        const ageInput = document.getElementById("age");

        const user = {
            name: { first: firstNameInput.value, last: lastNameInput.value },
            email: emailInput.value,
            phone: phoneInput.value,
            dob: { age: ageInput.value },
            login: { username: `${firstNameInput.value}${Math.ceil(Math.random() * 9999)}` }
        }

        users.push(user)
        draw(users, tableBody)
    })
}

function draw(arrayOfUsers, tableBody) {
    for (let index = 0; index < arrayOfUsers.length; index++) {
        tableBody.append(getUserRowUI(arrayOfUsers[index]))
        // table  <=     // row       // data
    }
    // const usersRows = arrayOfUsers.map((currentUser) => getUserRowUI(currentUser))
    // tableBody.append(...usersRows)

}

function getUserRowUI(user) {

    const tdId = document.createElement("td")
    tdId.innerText = user?.login?.username

    const tdFirstName = document.createElement("td")
    tdFirstName.innerText = user?.name?.first

    const tdLastName = document.createElement("td")
    tdLastName.innerText = user?.name?.last

    const tdEmail = document.createElement("td")
    tdEmail.innerText = user?.email

    const tdPhone = document.createElement("td")
    tdPhone.innerText = user?.phone

    const tdAge = document.createElement("td")
    tdAge.innerText = user?.dob?.age

    const tdImage = document.createElement("td")
    const imgUser = document.createElement("img")
    imgUser.classList.add("user-image")
    imgUser.src = user?.picture?.large
    tdImage.append(imgUser)

    const trUser = document.createElement("tr")
    trUser.append(tdId, tdFirstName, tdLastName, tdEmail, tdPhone, tdAge, tdImage)

    return trUser

}


init()