function insertProducts(numOfProducts) {
    if (typeof numOfProducts !== 'number') return
    var cart = [];
    for (let index = 0; index < numOfProducts; index++) {
        var currentProduct = prompt("enter product name")
        cart.push(currentProduct)
    }
    return cart;
}


function deleteFromCart(cart, productToDelete) {
    var foundIndex = -1;
    for (let index = 0; index < cart.length; index++) {
        if (cart[index].toLowerCase() === productToDelete.toLowerCase()) {
            foundIndex = index; // 2
        }
    }
    if (foundIndex > -1) {
        cart.splice(foundIndex, 1)
    }
}

var cart = insertProducts(5)
console.log(JSON.stringify(cart))
deleteFromCart(cart, prompt("enter product to delete")) //["a","b","c","d","e"] "c"
console.log(cart)
