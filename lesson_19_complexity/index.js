// Queue - post office, store,
// Queue - First in First out ( NOT IN ISRAEL ONLY USA )

// fetchUsers() - 2s
// fetchCars() - 5s
// fetchProducts() - 1s
// fetchCountries() - 0.5s
// =>
// [fetchCountries(), fetchProducts() ,fetchUsers(),fetchCars() ]

const queue = []
function enqueue(item) { // insert into queue
    queue.push(item)
}
function dequeue() { // remove from queue
    const theFirstInQueue = queue[0] //O(1)
    queue.splice(0, 1) // O(n)
    return theFirstInQueue // O(1)
}