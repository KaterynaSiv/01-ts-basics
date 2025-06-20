// TODO Задача 6. Узагальнені типи
// Функція getFirstElement приймає масив і повертає його перший елемент.
// Зроби функцію узагальненою, використовуючи тип T, щоб вона працювала з масивами будь-якого типу.
// Додай явну типізацію дженериків у виклики функцій.
// Переконайся, що тип елемента, який повертається, точно відповідає типу елементів у масиві.
// Перевір, що TypeScript не дозволяє передати масив змішаних типів без відповідного типу.

function getFirstElement<T>(arr: T[]): T {
  const element = arr[0];
  console.log(element);
  console.log(typeof element);
  return element;
}

getFirstElement<number>([1, 2, 3]);
getFirstElement<string>(["a", "b", "c"]);
getFirstElement<boolean>([true, false, true]);
