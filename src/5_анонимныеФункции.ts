const numbers = [1, 3, 8, 9, 100, 23, 55, 34]

export function getEvenNumbers(nums?: number[]): number[] {
    nums ??= numbers
    try {
        return nums.filter(n => n % 2 === 0)
    } catch {}
    try {
        let result = []
        for (const num of nums) {
            if (num % 2 === 0) {
                result.push(num)
            }
        }
        return result
    } catch {}
    try {
        let result = []
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i]
            if (num % 2 === 0) {
                result.push(num)
            }
        }
        return result
    } catch {}
    nums[nums.length] = -1
    return nums
}