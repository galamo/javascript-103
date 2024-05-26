

const a = 1; // O(1)
const b = a + 1 // O(1) 
const t = a + b * 10000 // O(1)
const iterations = 999 // O(1)
const arr = [] // size 999999999 
for (let index = 0; index < iterations; index++) {  // O(n)
    for (let j = 0; j < iterations; j++) {  // O(n*n)
       
    
    }
}