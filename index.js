console.log(sum(25, 1));

function sum(a, b) {
  return a + b;
}

const name = 'Анна';
const surname = 'Борисенко';
const fullname = buildFIO(name, surname);

console.log(fullname);

function buildFIO(name, surname) {
  return `${name} ${surname}`;
}

// const myAge = 17;
// const goToDance = isAdalt(myAge);

// console.log(goToDance);

// function isAdalt(age) {
//   return age > 18;
// }

// Задание 1️⃣
// Напишите функцию multiple(a, b), которая перемножает два числа между собой. Функция возвращает результат умножения.

console.log(multiple(5, 6));

function multiple(a, b) {
  return a * b;
}

// Задание 2️⃣
// Напишите функцию buildDate(day, month, year), которая принимает на вход числами день недели, месяц и год. Функция возвращает дату строкой в формате dd/mm/yyyy.
const day = 24;
const month = 05;
const year = 2023;

let dayOutputString = day;
let monthOutputString = month;

if (day < 10) dayOutputString = `0${day}`;
if (month < 10) monthOutputString = `0${month}`;

buildDate();

function buildDate() {
  console.log(`${dayOutputString}.${monthOutputString}.${year}`);
}

// Задание 3️⃣
// Напишите функцию isAdult(age), которая принимает на вход возраст. Если возраст больше или равен 18, функция возвращает true. Иначе - false.
const myAge = 18;
const goToDancing = isAdult(myAge);

console.log(goToDancing);

function isAdult(age) {
  return age >= 18;
}

// Задание 4️⃣
// Напишите функцию getMonthByNumber(monthNumber), которая на вход принимает порядковый номер месяца от 1 до 12. Функция возвращает строкой название месяца (например, 'март'). Для решения задачи можно применить конструкцию switch-case (just google it).

const monthNumberExt = 12; //то что нужно узнать, вводим внешние данные
const result = getMonthByNumber(monthNumberExt); //помещаем внешние данные в эту функцию

console.log(result);

function getMonthByNumber(monthNumber) {
  //функция с образцом вычисления, monthNumber - образец, он ничему не равен, просто помогает произвести расчет
  switch (monthNumber) {
    case 1:
      monthNumber = 'январь';
      break;
    case 2:
      monthNumber = 'февраль';
      break;
    case 3:
      monthNumber = 'март';
      break;
    case 4:
      monthNumber = 'апрель';
      break;
    case 5:
      monthNumber = 'май';
      break;
    case 6:
      monthNumber = 'июнь';
      break;
    case 7:
      monthNumber = 'июль';
      break;
    case 8:
      monthNumber = 'август';
      break;
    case 9:
      monthNumber = 'сентябрь';
      break;
    case 10:
      monthNumber = 'октябрь';
      break;
    case 11:
      monthNumber = 'ноябрь';
      break;
    case 12:
      monthNumber = 'декабрь';
      break;

    default:
      monthNumber = 'такого месяца нет';
      break;
  }
  return monthNumber;
}
