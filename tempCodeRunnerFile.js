//365 days in a year, per age. 

function convertAge(num1) {
    let year = 365;
    let ageDays = year * num1;
    return ageDays;
}
console.log(convertAge(8))