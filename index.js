// 1
let popStars = ['usmonova', 'morgenshtern', 'baskov', 'eldzhey', '50cent', 'eminem', 'oxy']

let ShortestName = popStars.reduce((longest, shortest) => longest.name > shortest.name ? longest : shortest);

console.log(ShortestName.name)
console.log(ShortestName)

// 2
let cars = [
    {
        name: "malibu",
        price: 31000
    },
    {
        name: "nexia",
        price: 12000
    },
    {
        name: "onix",
        price: 21000
    },
    {
        name: "tahoe",
        price: 100000
    },
    {
        name: "cobalt",
        price: 13000
    },
    {
        name: "tracker",
        price: 26000
    },
    {
        name: "kia k5",
        price: 43000
    },
    {
        name: "santafe",
        price: 50000
    },
    {
        name: "elantra",
        price: 35000
    },
    {
        name: "tico",
        price: 2500
    }
]

let MostExpensiveCar = cars.reduce((max, min) => max.price > min.price ? max : min);

console.log(MostExpensiveCar.carName)
console.log(MostExpensiveCar)

