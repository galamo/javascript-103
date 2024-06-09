function init() {
    Promise.all([getJokes(), getUsersApi()]).then((results) => {
        console.log("Wait for all requests to be resolved!!!")
        console.log(results[0], results[1])
    }).catch(() => {
        console.log("one of the requests failed.")
    })

    Promise.race([getJokes(), getUsersApi()]).then((results) => {
        console.log("Print the first that resolved!!!")
        console.log(results)
    }).catch(() => {
        console.log("one of the requests failed.")
    })
}

async function getInitUsers() {
    const result = await getUsersApi()
    if (!Array.isArray(result)) return;
    const countriesPromises = [];
    result.forEach(u => {
        countriesPromises.push(getCountryByName(u.location.country))
    })
    Promise.all(countriesPromises).then(r => console.log(r)).catch()
}

async function getJokes() {
    const result = await fetch(`https://official-joke-api.appspot.com/jokes/ten`)
    const r = await result.json()
    return r;

}
async function getUsersApi() {
    const result = await fetch(`https://randomuser.me/api?results=10`)
    const r = await result.json()
    return r.results;
}

async function getCountryByName(cName) {
    const result = await fetch(`https://restcountries.com/v3.1/name/${cName}`)
    const r = await result.json()
    return r[0];
}

getInitUsers()

