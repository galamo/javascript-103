$(document).on("mousemove", function (event) {
    console.log(event.pageX, event.pageY)
    if (event.pageX > 141 && event.pageX < 267 && event.pageY > 216 && event.pageY < 326) {
        $("#bermanFriend").attr("src", "https://tovnews.co.il/wp-content/uploads/2024/02/%D7%A6%D7%99%D7%9C%D7%95%D7%9D-%D7%9E%D7%A1%D7%9A-2024-02-13-100919.png")
    } else {
        $("#bermanFriend").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Benjamin_Netanyahu%2C_February_2023.jpg/800px-Benjamin_Netanyahu%2C_February_2023.jpg")
    }


})
$(document).ready(function () {
    $("#bermanFriend").resizable()
    $("#bermanFriend").draggable()
    console.log("ready!");
    setTimeout(() => {
        const header = document.querySelector("#header")
        header.innerText = "Changed header";
        header.style.color = "pink"
        $(".eli").text("sdsfagsfhfsgf").css({ color: "pink" })

        $("#jqheader").text("Changed header").css({ color: "pink" })

        const content = $("#jqheader").html("<h2>THIS IS HTML TEXT</h2>")
        console.log(content)

        $(".emails").val("cristin@gmail.com")

        $("#pass").attr("type") // get
        $("#pass").attr("type", "date") // set
        $("#pass").css({ "color": "red", "background-color": "green", "width": "300px" })



    }, 2000);
    $("#btn2").click(function (event) {
        $("#bermanFriend").toggle()
    })
    setTimeout(() => {
        document.querySelectorAll(".emails").forEach(e => e.value = "Adi@gmail.com")

    }, 3000);
});

// const el = null
// function html(val){
//     if(val) {
//         el = val
//     }else {
//         return el;
//     }
// }
// let el2 = {}
// function attr(key, value) {
//     if (key && value) {
//         el2[key] = value
//         return;
//     }
//     if (key) {
//         return el2[value]
//     }
// }
// let el3 = {}
// function css(param1, param2) {
//     if (typeof param1 === 'object') {
//         Object.entries(param1).forEach(([key, value]) => {
//             el3.style[key] = value
//         })
//         return;
//     }
//     if (Array.isArray(param1)) {
//         let newArr = [];
//         Object.entries(el3).forEach(([key, value]) => {
//             if (param1.includes(key)) {
//                 newArr.push(value)
//             }
//         })
//         return newArr; // maybe object
//     }
//     if (typeof param1 === 'string' && typeof param2 === 'string') {
//         el3.style[param1] = param2
//     }
//     if (typeof param1 === 'string') {
//         return el3.style[param1]
//     }

// }