// write a function that takes an array of numbers and returns a new array only containing even numbers
function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter(num => num % 2 === 0);
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5, 6];
const evenNumbersArray = filterEvenNumbers(inputArray);
console.log(evenNumbersArray); // Output: [2, 4, 6]