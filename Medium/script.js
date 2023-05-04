// DISCLAIMER! While, I would love to keep doing these challenges multiple times in different ways displaying on the html page to get practice like I did last week and in the previous challenge, I just don't have much time this week due to our project. So the next few exercises will be simpler than my last GI.
// MEDIUM: Write a function that would allow you to do this:
// var sharePizza = cutPizzaSlices(8);
// console.log(sharePizza(2));
// prints "Each person gets 4.00 slices of pizza"
// console.log(sharePizza(3));
// prints "Each person gets 2.67 slices of pizza"

//First we need to create the funtion to cut the pizza slices. We will give it a peramiter of sliceNumber
function cutPizzaSlices(sliceNum) {
  //Next we will nest another function inside this function to deivide the number of people slices by the number of people sharing
  return function (peopleSharing) {
    let sharedSlices = sliceNum / peopleSharing;
    return "Each person gets " + sharedSlices.toFixed(2) + " slices of pizza";
  };
}

//Now we will set sharePizza equal to cutPizzaSlices with the sliceNum of 8
var sharePizza = cutPizzaSlices(8);

//Console log it to ensure it is working properly
console.log(sharePizza(2));
console.log(sharePizza(3));
