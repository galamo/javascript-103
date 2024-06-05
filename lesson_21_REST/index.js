function init() {
    document.querySelector("#calcOperation").addEventListener("click", async () => {
        try {
            const n1 = document.querySelector("#n1").value
            const n2 = document.querySelector("#n2").value
            const operation = document.querySelector("#operation").value

            const result = await calculateApi(operation, n1, n2)
            console.log(result)
            document.querySelector("#result").value = result;

        } catch (error) {
            alert("ERROR")
        }
    })


}

async function calculateApi(operation, n1, n2) {
    const result = await fetch(`http://localhost:4500/${operation}/${n1}/${n2}`)
    const r = await result.text()
    return r;
}


init()
