function ImageCard(_url, _id) {
    this.URL = _url;
    this.id = _id;

    this.countUsage = 2;

}

var images = [];
function CreateImages() {
    var id = 1;
    images.push(new ImageCard("http://cdn.playbuzz.com/cdn/78d179a7-6e4f-4f3f-8c40-b4e3a3127bbf/136fa33c-bce9-42c9-9b7b-637fc44d5a6a_560_420.jpg", id++))

    images.push(new ImageCard("http://illusion.scene360.com/wp-content/uploads/2012/03/laurie_lipton_03.jpg", id++))

    images.push(new ImageCard("http://nitrogenius.net/wp-content/uploads/2015/09/thumbnail3.jpg", id++))

    images.push(new ImageCard("https://i.ytimg.com/vi/KoxgP_FQuWk/maxresdefault.jpg", id++))

    images.push(new ImageCard("https://media.fromthegrapevine.com/assets/images/2017/9/scream-horror.jpg.482x490_q71_crop-smart.jpg", id++))
}

CreateImages();

var board = document.getElementById("board");

function createBoard() {

    while (images.length != 0) {
        var randomNumber = parseInt((Math.random() * (images.length - 1)));
        if (images[randomNumber].countUsage > 0) {
            var myCard = generateCardMemory(images[randomNumber]);
            board.appendChild(myCard);
            //genreate card to the screen
            images[randomNumber].countUsage--;
        }
        else {
            images.splice(randomNumber, 1);
        }
    }

}
createBoard();
function generateCardMemory(theRandomImage) { //this will return image inide div

    var template = document.getElementById("clone");
    var divCard = template.cloneNode(true);

    
    var img = document.createElement("IMG");
    img.style.height = "300px";
    img.style.width = "300px";
    img.src = theRandomImage.URL;

    divCard.getElementsByClassName("back")[0].appendChild(img)

    divCard.getElementsByClassName("front")[0].style.backgroundColor = "green";

    divCard.addEventListener("click", function () {
        round(this)
    })

    divCard.id = theRandomImage.id

    return divCard;


}



var selectedCards = [];
function round(divCard) {
    if (selectedCards.length == 0) {
        selectedCards.push(divCard);
        divCard.classList.toggle("hover");
    } else if (selectedCards.length == 1) {
        selectedCards.push(divCard);
        divCard.classList.toggle("hover");

        setTimeout(function () {
            //this code will execute after 
            if (selectedCards[0].id == selectedCards[1].id) {
                alert("great Job");
            } else {
                selectedCards.forEach(function (card) {
                    card.classList.toggle("hover");
                })
            }
            selectedCards.splice(0);
        }, 1200)
    }
}

// var card = document.getElementById("newCard");
// var card2 = card.cloneNode(true);
// card2.getElementsByClassName("front")[0].innerText = "the new eleme";
// board.appendChild(card2);