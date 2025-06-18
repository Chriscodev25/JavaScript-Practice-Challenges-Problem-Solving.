// capitalize first letter of a string

function capitalizeWord(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalizeWord("Hello World"));

//counting times a character appears in a string
function countA(str) {
        let count = 0;
    for (let char of str.toLowerCase()){
        if (char === 'a') count++;
    }
    return count;
}
console.log(countA("JavaScript is amazing"));

//while loop for first 5 multiples of 3

let i = 1;
    while(i <= 5) {
        console.log(3 * i);
        i++;}
