function init() {
    document.querySelector("#delete").addEventListener("click", async () => {
        try {
            const result = await deleteProductApi(document.querySelector("#pid").value)
            alert(result)
        } catch (error) {
            alert("ERROR")
        }
    })

    document.querySelector("#create").addEventListener("click", async () => {
        try {
            const title = document.querySelector("#title").value
            const price = document.querySelector("#price").value

            const result = await createProductApi({ title, price })
            alert(result)
        } catch (error) {
            alert("ERROR")
        }
    })

    document.querySelector("#update").addEventListener("click", async () => {
        try {
            const id = document.querySelector("#pid_edit").value
            const title = document.querySelector("#title_edit").value
            const price = document.querySelector("#price_edit").value
            const result = await updateProductApi({ title, price }, id)
            alert(result)
        } catch (error) {
            alert("ERROR")
        }
    })

}

async function deleteProductApi(id) {
    const result = await fetch(`http://localhost:4500/products/${id}`, {
        method: "DELETE"
    })
    return await result.text()
}

async function createProductApi(product) {
    const result = await fetch(`http://localhost:4500/products/`, {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    return await result.text()
}

async function updateProductApi(product, id) {
    const result = await fetch(`http://localhost:4500/products/${id}`, {
        method: "PUT",
        body: JSON.stringify(product),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    return await result.text()
}


init()