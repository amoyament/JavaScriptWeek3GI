// EASY: Write a function that would allow you to do this:
// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running"
// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"

//First I need to name and define the function with a peramiter of activity
let exercise = function (activity) {
  //Now create an if else statement to see which activity we are doing and return the correct string for the correct argument
  if (activity === "running") {
    return `Today's exercise: ${activity}`;
  } else if (activity === "swimming") {
    return `Today's exercise: ${activity}`;
  } else {
    return `I'm sorry ${activity} is not a valid exercise`;
  }
};

console.log(exercise("running"));
console.log(exercise("swimming"));
console.log(exercise("jumping"));

//This can also be done with an array holding the activity and a single funtion to call on those things
//We can also make it interact with our HTML page

//First we need to create variables with which we can interact with the HTML elements
//Input box
let exInput = document.getElementById("exInput");
//Enter button
let button = document.getElementById("enter");
//Where we want the today's exercise to display on HTML page
let result = document.getElementById("result");

// Create event listener to display today's exercise on click
button.addEventListener("click", function exercise1() {
  //Define activity by the input value of the input box (what the user entered)
  let activity = exInput.value;
  //Create array of activities that we can loop through for when we have a larger number of activities
  //Added "jogging" to make sure loop will still work
  let activityNames = ["running", "swimming", "jogging"];
  //Create a value to determine if an activity is found, so we can stop the code below, so we have a for loop and not an infinity loop
  let activityFound = false;
  //create for loop so we loop through the array to find our exercise
  for (let i = 0; i < activityNames.length; i++) {
    //If the enerted activity matches one in the array, it will return the today's exercise string with the corresponding activity name
    if (activity === activityNames[i]) {
      console.log(`Today's exercise: ${activity}`);
      result.textContent = `Today's exercise: ${activity}`;
      //Once an an activty is found, break the loop so it doesn't go on forever
      activityFound = true;
      break;
    }
  }
  //If an activity in the array is not found return that the user did not enter a valid exercise
  if (!activityFound) {
    console.log(`I'm sorry, ${exInput.value} is not a valid exercise`);
    result.textContent = `I'm sorry, ${exInput.value} is not a valid exercise`;
  }
});
