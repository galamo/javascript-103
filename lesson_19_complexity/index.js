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
    queue.push(item) // O(1)
}
function dequeue() { // remove from queue
    const theFirstInQueue = queue[0] //O(1)
    queue.splice(0, 1) // O(n)
    return theFirstInQueue // O(1)
}


let queue2 = {}
let first = 0;
let last = 0;
function enqueue2(item) { // insert into queue
    queue2[last] = item; // O(1)
    last++; // O(1)
}
function dequeue2() { // remove from queue
    const aniBator = queue2[first] // O(1)
    delete queue2[first] // O(1)
    first++ // O(1)
    if (Object.keys(queue2).length === 0) { // O(n)
        resetQueue()
    }
    return aniBator; // O(1)
}

function resetQueue() {
    queue2 = {}
    first = 0;
    last = 0;
}

