const imgString = `<img src="https://consumerlifestylereviews.com/wp-content/uploads/sites/8/2023/08/IL-1.png" height="300" width="300" alt="">`
let counter = 0;
function init() {
    const button = document.querySelector("#getProductsButton")
    button.addEventListener("click", () => {
        console.log(document.querySelector("#spinner").style)
        document.querySelector("#spinner").style.display = "block"
        setTimeout(dataFetchedFromApi, 3500);
    })



    document.querySelector("#count").addEventListener("click", () => {
        counter++;
        document.querySelector("#counterValue").innerText = counter;
    })
}

function dataFetchedFromApi() {
    document.querySelector("#content").innerHTML = imgString
    document.querySelector("#spinner").style.display = "none"
}


init()