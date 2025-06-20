// TODO Задача 3. Типізація масивів
// У цьому коді є три масиви з різними типами даних: рядки, числа та об'єкти.

// TODO Завдання:
// Додай тип для масиву рядків usernames, використовуючи синтаксис [].
// Додай тип для масиву чисел ratings, використовуючи синтаксис [].
// Для масиву products:
// Створи окремий інтерфейс Product для елементів масиву.
// Типізуй сам масив за допомогою цього інтерфейсу.
// Залиш елементи масиву products без змін.

const usernames: string[] = ["alice", "bob", "charlie"];

const ratings: number[] = [4.5, 3.8, 5];

interface Product {
  id: number;
  title: string;
}

const products: Product[] = [
  { id: 1, title: "Phone" },
  { id: 2, title: "Laptop" },
];

console.log(`Usernames: ${JSON.stringify(usernames)}`);
// console.log(Array.isArray(usernames));
// console.log(typeof usernames[0]);

console.log(`Ratings: ${JSON.stringify(ratings)}`);
// console.log(Array.isArray(ratings));
// console.log(typeof ratings[0]);

console.log(`Products: ${JSON.stringify(products)}`);
// console.log(Array.isArray(products));
// console.log(typeof products[0]);
// console.log(products[0].title);
// console.log(typeof products[0].title);
