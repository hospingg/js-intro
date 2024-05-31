
// Task 1:
//Створіть дві змінні a  та b. Виведіть у консоль результат їх множення.
let a = 4;
let b = 19;
console.log('Task 1:', a*b)
//let result = a*b
//consle.log(result)

// Task 2:
//Створіть дві змінні c  та d. Виведіть у консоль результат ділення першого на друге.
let c = 121;
let d = 11;
console.log('Task 2:', c/d)
//let result = c/d
//consle.log(result)

// Task 3:
//Створіть дві змінні c  та d. Виведіть у консоль результат ділення першого на друге.
let e = 54;
let f = 13;
console.log('Task 3:', e+f)
//let result = c+d
//consle.log(result)

// Task 4:
//Визначте змінні зі значеннями 11, true, "java script", "100"  і виведіть їх в консоль
console.log('Task 5:',typeof 11, typeof true, typeof "java script", typeof '100')

// Task 5:
//Переробіть наведений код так, щоб у ньому використовувалися операції +=, -=, *=, /=, ++, --
let num = 1;
num +=11;
num -=11;
num *=11;
num /=11;
num++;
num--;
console.log('Task 5:',num)

//Завдання на введення/виведення (вводити з допомогою prompt, виводити з допомогою alert):
console.log('Завдання на введення/виведення')

// Task 1:
// Запитати число у користувача, піднести його до квадрату і вивести результат.
let number = prompt('Будь ласка, запишіть число')
console.log('Task 1:', number**2)
// console.log('Task 1:', Math.pow(number, 2))

// Task 2:
// Запитати число у користувача, піднести його до квадрату і вивести результат.
let number1 = Number(prompt('Будь ласка, введіть перше значеня для середнього арифметичного'))
let number2 = Number(prompt('Будь ласка, введіть друге значеня для середнього арифметичного'))
// // let avg = ((number1 + number2)/2);
// console.log('Task 2:', avg)
console.log('Task 2:', ((number1 + number2)/2));

// Task 3:
// Запитати число у користувача, піднести його до квадрату і вивести результат.
let minute = Number(prompt('Будь ласка, введіть кількість хвилин'))
console.log('Task 3:', minute, 'хвилин =', minute*60, 'секунд')
// let seconds = minute*60
// console.log('Task 3:', minute, 'хвилин =', seconds, 'секунд')

// Task 4:
// 4) Створіть змінну greeting зі значенням 'Hello,' і оголосіть змінну userName. Запитайте ім'я користувача та внесіть це значення у змінну userName. Виведіть повідомлення з привітанням, наприклад, 'Hello, Tarase!'. (згадайте про конкатенацію)
let greeting = "Hello, ";
let username = prompt("Будь ласка, введіть ваще ім'я");
console.log(greeting + username + '!')


// Task 5:
// Користувач вводе ім'я, прізвище, імейл, номер телефону, кількість років, адресу зображення (з інтернету) тощо. Передбачити дефолтні значення, навіть для зображення
let i;
let uName;
let uSingleName;
let email;
let phoneNumber;
let age;
let URLImage;
(i = prompt("Будь ласка, введіть ім'я")) == '' ? uName = 'Anonim' : uName = i;
(i = prompt("Будь ласка, введіть прізвище")) == '' ? uSingleName = 'Anonim' : uSingleName = i;
!(i = prompt("Будь ласка, введіть Gmail пошту")).includes('gmail.com') ? email = 'example@gmail.com' : email = i;
!(i = prompt("Будь ласка, введіть український номер")).includes('+380') ? phoneNumber = '+1234567890' : phoneNumber = i;
(i = prompt("Будь ласка, введіть вік")) == (Number > 0) ? age = 'XX' : age = i;
(i = prompt("Будь ласка, введіть посилання на зображення профілю")).includes("https://") == '' ? URLImage = 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png' : URLImage = i;

console.log("Ваше ім'я", uName, '\nВаше прізвище:',  uSingleName, '\nВаша пошта:', email, '\nВаш номер телефона:', phoneNumber, '\nВаш вік:', age, '\nПосилання на фото профілю:', URLImage)