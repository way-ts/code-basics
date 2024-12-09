// BEGIN (write your solution here)
function filter(nums: number[], predicate: (n: number) => boolean) {
    return nums.filter(predicate)
}

// Решение учителя
// function filter(numbers: number[], callback: (n: number) => boolean): number[] {
//     const result: number[] = [];
//     numbers.forEach((n) => {
//       if (callback(n)) {
//         result.push(n);
//       }
//     });
//     return result;
// }
// END

export default filter;