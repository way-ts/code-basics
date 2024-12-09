export function isComplete(course: { name: string, lessons: string[] }) {
    return course.lessons.length >= 4
}

// Решение учителя
// function isComplete(course: { name: string, lessons: string[] }): boolean {
//     return course.lessons.length >= 4;
// }