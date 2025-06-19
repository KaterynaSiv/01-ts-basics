// TODO Задача 4. Функції
// Функція printUserInfo виводить інформацію про користувача, включаючи ім'я, вік і (опціонально) email.

// TODO Завдання:
// Додай явну типізацію до параметрів функції: name, age та email.
// Зроби параметр email опціональним - щоб функція могла працювати як з ним, так і без нього.
// Типізуй повернення функції, зауваж що вона нічого явно не повертає.
// Залиш реалізацію функції без змін.

function printUserInfo(name: string, age: number, email?: string): void {
  console.log("Name:", name);
  //   console.log("Type of name:", typeof name);
  console.log("Age:", age);
  //   console.log("Type of age:", typeof age);
  if (email) {
    console.log("Email:", email);
    // console.log("Type of email:", typeof email);
  }
}

printUserInfo("Alice", 30);
printUserInfo("Bob", 25, "bob@mail.com");
