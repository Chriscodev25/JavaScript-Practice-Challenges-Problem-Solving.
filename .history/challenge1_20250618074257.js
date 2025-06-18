// capitalize first letter of a string

function capitalizeWord(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalizeWord("Hello World"));

//counting times a character appears in a string
function count