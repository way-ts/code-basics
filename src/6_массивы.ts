function getSumChars(s: string) {
    return Array(s.length).fill(0).map((_, i) => s.charCodeAt(i)).reduce((acc, v) => acc + v, 0)
}

export function filterAnagrams(word: string, list: string[]) {
    const sumChars = getSumChars(word)
    return list.filter(word => getSumChars(word) === sumChars)
}

// решение учителя
// function filterAnagrams(anagram: string, anagrams: string[]): string[] {
//     const standard = anagram.split('').sort().join('');
//     return anagrams.filter((item) => item.split('').sort().join('') === standard);
// }