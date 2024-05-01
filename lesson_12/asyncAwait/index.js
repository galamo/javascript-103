// promise example
// 1. pending - waiting for the response
// 2. resolve - completed successfully
// 3. reject - error  

const imgString = `<img src="https://consumerlifestylereviews.com/wp-content/uploads/sites/8/2023/08/IL-1.png" height="300" width="300" alt="">`
let counter = 0;
function init() {
    setTimeout(() => {
        document.querySelector("#commecrial").innerHTML = imgString
    }, 3000);
    const button = document.querySelector("#getProductsButton")
    button.addEventListener("click", async () => {
        try {
            document.querySelector("#spinner").style.display = "block"
            const result = await getDataFromApi(true)
            document.querySelector("#content").innerHTML = imgString
            document.querySelector("#spinner").style.display = "none"
        } catch (error) {
            console.log(error)
            alert("Something went wrong")
        }
    })
    document.querySelector("#count").addEventListener("click", () => {
        counter++;
        document.querySelector("#counterValue").innerText = counter;
    })
}
function getDataFromApi(bool) {
    const p = new Promise((res, rej) => {
        setTimeout(() => {
            if (bool) return res("success")
            else return rej()
        }, 3000);
    })
    console.log(p)
    return p;
}

init()

