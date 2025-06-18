// fizzBuzz
function fizzBuzz(str1, str2) {
    let combinedLength = str1.length + str2.length;
    if (combinedLength % 3 === 0) {
        return "Fizz";
    } else if (combinedLength % 5 === 0) {
        return "Buzz";
    } else if (combinedLength % 3 === 0 && combinedLength % 5 === 0) {
        return "FizzBuzz";
    } else {
        return " ";
    }
}

console.log(fizzBuzz("Java", "Script"));

//Age determination program

const birthYear = parseInt(prompt("Enter Your Birth  Year:"));
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;

if (age < 18) {
    console.log("You are a Minor.");
} else if (age >= 18 && age <= 36) {
    console.log(" You are a Youth.");
} else {
    console.log("You are an Elder.");
}

//twoSum program

function twoSum(nums, target) {
    for (i = 0; i)
}

