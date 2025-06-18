// function that takes an Array as a parameter and returns an Object with keys evens, odds, and chars

function sortValue(arr) {
    const result = {
        evens: [],
        odds: [],
        chars: []
    };

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];

        if (typeof item === 'string' && item.length === 1) {
            result.chars.push(item);
        } else if (typeof item === 'number' && !isNaN(item) && Number.isInteger(item)) {
            if (item % 2 === 0) {
                result.evens.push(item);
            } else {
                result.odds.push(item);
            }
        }
    }

    // Sort inside the function before returning
    result.evens.sort((a, b) => a - b);
    result.odds.sort((a, b) => a - b);
    result.chars.sort();

    return result; // Now correctly returns the sorted result
}

console.log(sortValue([1, 3, 4, 6, "a", "g", 9]));

// remove repeated values

function repeated(nums) {
    return new Set(nums).size  !== nums.length;
}

console.log(repeated([1, 2, 3, 6, 1]));

// find single value

function singleValue(nums) {
    const = {};

}