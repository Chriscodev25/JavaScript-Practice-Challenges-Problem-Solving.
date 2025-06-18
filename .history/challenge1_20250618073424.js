// capitalize first letter of a string

function capitalizeWord(str) {
    return structuredClone.split(` `)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}