// BEGIN (write your solution here)
function forEach(nums: number[], callback: (n: number, i: number) => void) {
    nums.forEach(callback)
}

// Решение учителя
// function forEach(numbers: number[], callback: (n: number, index: number) => void): void {
//     numbers.forEach((n, index) => callback(n, index));
// }
// END

export default forEach;