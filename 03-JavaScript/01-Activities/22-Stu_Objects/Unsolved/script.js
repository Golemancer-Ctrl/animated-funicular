//WRITE YOUR CODE BELOW
var customerOrder = {
    drink: "Mojito",
    sugars: 60,
    order: true
}

console.log(customerOrder.drink);
console.log("The sugar content is " + customerOrder.sugars + "mg.");

if (customerOrder.order) {
    console.log("Ready for pick up");
} else {
    console.log("Still in order queue");
}