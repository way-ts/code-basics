// BEGIN (write your solution here)
function isPlainObject(value: unknown): boolean {
    return typeof value === 'object' && !(value instanceof Array)
}

// Решение учителя
// function isPlainObject(value: unknown): boolean {
//     return value instanceof Object && !Array.isArray(value);
// }
// END

export default isPlainObject;