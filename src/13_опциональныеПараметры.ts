/* eslint-disable @typescript-eslint/no-explicit-any */

// BEGIN (write your solution here)
function map(nums: number[], callback: (n: number, i: number) => number) {
    return nums.map(callback)
}

// Решение учителя
// function map(numbers: number[], callback: (n: number, index: number) => number): number[] {
//     const result: number[] = [];
//     numbers.forEach((n, index) => result.push(callback(n, index)));
//     return result;
// }
// END

export default map;