// Задача №1
// Перевірити чи наша строка являється – паліндромом.
const str = "радар";
const newString = "Hello";
// 1)Зібрати зі строки масив
// 2)перевернути масив навпаки
// 3)з масива зробити строку
// 4)порівняти дві строки

// const array = str.split("");
// array.reverse();

// const reverString = array.join("");
// console.log(reverString);
// console.log(str === reverString);

const reversStringWhthCaning = str.split("").reverse().join("");
console.log(str === reversStringWhthCaning);

// console.log(array);
