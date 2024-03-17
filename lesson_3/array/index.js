///////////////// 0        1        2       3           4
var products = ["apple", "milk", "bread", "tea", "like a coffee"]
products.length // 5
products[2]

products.push("banana")

for (let j = 0; j < 3; j++) {
    let newProduct = prompt("Enter another product")
    products.push(newProduct)
}

for (let index = 0; index < products.length; index++) {
    console.log(products[index])
}

function returnMoreThanOne() {
    return [1 ,2]
}