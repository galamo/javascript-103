function init() {
    const button = document.querySelector("#getCountries")
    button.addEventListener("click", async () => {
        try {

            // document.querySelector("#spinner").style.display = "block"
            const result = await fetch("https://restcountries.com/v3.1/all")
            // data returned from API 
            const data = await result.json()
            // document.querySelector("#content").innerText = `The number of countries is: ${data.length}`
            // document.querySelector("#spinner").style.display = "none"
            console.log(data)
        } catch (error) {
            console.log(error)
            alert("Something went wrong")
        }
    })

}

init()

// We want the following result
// {  "Europe": 152451224, "Asia": 46565468 ..... }
