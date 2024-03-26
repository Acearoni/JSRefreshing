// Create a function that takes two numbers as arguments and returns their sum.

function add(num1, num2) {
    x = num1 + num2;
    return x;
}

console.log(add(5,4));

//Create a function that takes the age in years and returns the age in days.
//365 days in a year, per age. 

function convertAge(num1) {
    let year = 365;
    let ageDays = year * num1;
    return ageDays;
}
console.log(convertAge(8))