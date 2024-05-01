

const scream = "https://upload.wikimedia.org/wikipedia/en/thumb/1/19/Scream3_ver2.jpg/220px-Scream3_ver2.jpg"
const nun = "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/32/1533822689-nun-cp-001r.jpg?crop=1.00xw:0.340xh;0,0.0327xh&resize=1200:*"
const anable = "https://miro.medium.com/v2/resize:fit:400/1*vRgvLnYHnYbY23b_xcP8-Q.jpeg"
const frediKrooger = "https://media-prod.fangoria.com/images/nightmare_on_elm_street_2010.original.jpg"


let lastClick = new Date().getTime();

function init() {

    // fredi question
    setTimeout(() => {
        const current = new Date().getTime()
        console.log(current - lastClick)
        if (current - lastClick > 4000) {
            // alert("are you still here?")
        }
    }, 10 * 1000);

    const cardsElements = document.getElementsByClassName("cards");
    console.log(cardsElements)
    for (let item of cardsElements) {
        item.addEventListener("click", function (event) {
            lastClick = new Date().getTime()
            const targetElement = event.target
            const image = getImageCard(targetElement.id)
            targetElement.append(image)
            setTimeout(() => {
                image.remove()
            }, 2000);
        })
    }
}

function getImageCard(cardId) {
    let currentImage = ""
    if (cardId === "1") {
        currentImage = scream
    } else if (cardId === "2") {
        currentImage = nun
    } else if (cardId === "3") {
        currentImage = anable
    } else {
        currentImage = frediKrooger
    }
    const imageElement = document.createElement("img")
    imageElement.src = currentImage
    imageElement.height = 200;
    imageElement.width = 200;
    return imageElement;
}

init()

console.log("a")
console.log("b")
console.log("c")