
$(document).ready(async function () {

    const loader = $("#loader")

    try {
        const data = await getJokesApi()
        const jokesUi = getJokesUI(data);
        $("#jokesList").append(jokesUi)
        $("#jokesList").on("click", async function (event) {
            if (!event.target.id) return;
            const singleJokeData = await getJokeById(event.target.id)
            console.log(singleJokeData)
            alert(singleJokeData.punchline)
        })
    } catch (error) {
        alert("Something went wrong!")
    } finally {
        loader.toggle()
    }

    function getJokesUI(data) {
        const elements = data.map((singleJoke) => {
            return `<div class="i-am-clickable" id="${singleJoke.id}">[${singleJoke.id}] ${singleJoke.setup} </div>`
        })
        return elements
    }

});

async function getJokesApi() {
    const result = await fetch("https://official-joke-api.appspot.com/jokes/ten")
    const data = await result.json();
    return data;
}

async function getJokeById(id) {
    const result = await fetch(`https://official-joke-api.appspot.com/jokes/${id}`)
    const data = await result.json();
    return data;
}



