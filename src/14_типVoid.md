# Задание
Попробуйте самостоятельно определить функцию `forEach()` для чисел:
```ts
forEach([1, 2, 3], (n) => console.log(n));
// 1
// 2
// 3

const result = [];
forEach([1, 2, 3], (n) => result.push(n));
// [1, 2, 3]
```
Параметры функции:
1. Массив чисел
2. Анонимная функция, которая принимает на вход число и возвращает `void`. У этой функции есть необязательный параметр — индекс элемента в массиве
```ts
forEach([8, 9], (n, index) => console.log(index + n));
// 8
// 10
```