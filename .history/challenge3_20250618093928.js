// function that takes an Array as a parameter and returns an Object with keys evens, odds, and chars

function sortValue(arr) {
    const result = {
        evens : [],
        odds : [],
        chars : []
    };
    for (i=0; i < arr.length; i++) {
        const item = arr[i];
    }
    if (typeof item === 'string' && item.length === 1) {
        result.chars.push(item);
    } else if (typeof item === 'number' && !isNaN(item)) {

    }

}