const products = [
    "Apple iPhone 15 ProMax", //0 swap = Apple iPhone 15 ProMax; arr[0] = arr[8] , arr[8] = swap
    "Samsung Galaxy S21 Ultra", //1
    "Google Pixel 6 Pro", //2
    "Amazon Echo Dot (4th Gen)", //3
    "Sony WH-1000XM4 Wireless Headphones", //4
    "Apple AirPods Pro", //5
    "Samsung Galaxy Tab S7+", //6
    "Microsoft Surface Pro 7", //7
    "Dell XPS 15", //8
    "Logitech MX Master 3", //9
    "Razer DeathAdder V2", //10
    "Corsair Vengeance LPX 16GB (2 x 8GB) DDR4 3200MHz", //11
    "Samsung 970 EVO Plus SSD 1TB",
    "Samsung By Harel - order Frame",
    "Samsung By Carfurre",//12
    "Crucial P1 1TB NVMe PCIe M.2 SSD",//13
    "Western Digital My Passport 2TB Portable External Hard Drive",//14
    "Samsung Galaxy Z Fold3 5G"//15
];

function swapArray(arr) {
    if (arr.length % 2 !== 0) return "Non Valid array" + arr.length
    var halfSizeArray = arr.length / 2;
    for (let index = 0; index < halfSizeArray; index++) {
        console.log(`Swap between index: ${index} And index: ${index + halfSizeArray} 
        => swap between values: ${arr[index]} And ${arr[index + halfSizeArray]}`)
        var swap = arr[index]
        arr[index] = arr[index + halfSizeArray]
        arr[index + halfSizeArray] = swap
    }
    return arr;
}

console.log(swapArray(products))