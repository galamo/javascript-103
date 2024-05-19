function init() {


    document.querySelector("#makeNewPost").addEventListener("click", async () => {

        const postTitle = document.querySelector("#title").value
        const postUserId = +document.querySelector("#userId").value
        const postBody = document.querySelector("#body").value

        try {
            const result = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                body: JSON.stringify({ title: postTitle, body: postBody, userId: postUserId }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            const data = await result.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }

    })



    document.querySelector("#updatePost").addEventListener("click", async () => {
        const postTitle = document.querySelector("#titleUpdate").value
        const postUserId = +document.querySelector("#userIdUpdate").value
        const postBody = document.querySelector("#bodyUpdate").value
        const postId = +document.querySelector("#postIdUpdate").value

        try {
            const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
                method: "PUT",
                body: JSON.stringify({ id: postId, title: postTitle, body: postBody, userId: postUserId }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            const data = await result.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }

    })

}



init()

