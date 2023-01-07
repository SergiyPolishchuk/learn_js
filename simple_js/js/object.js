// let name = prompt('Введіть імя!', ''),
//     age = prompt('Введіть вік!', ''),
//     access;

// checkAccess();

// console.log(access);
    
// function checkAccess() {
//     access = (age < 18) ? false : true;
//     return access;
// };



// console.log('Імя: ' + user.name);
// console.log('Повних років: ' + user.age);
// console.log(user.dostup);

// let user = {
//     name: 'Roma',
//     age: 4,
// }

// let key = prompt('Введіть ключ', '');

// alert( user[key] );

// let fruit = prompt("Введіть фрукт", 'apple');

// let bag = {
//     [fruit]: 5,
// };

// alert(bag.fruit);


// let user = {
//   name: "Іван",
//   age: 30,
//   isAdmin: true
// };

// for (let k in user) {

//   console.log( k + ": " + user[k]);
// }



// let name = prompt('Введіть властивість імя', 'name'),
//     userName = prompt('Введіть імя юзера', 'Ivan'),
//     surname = prompt('Введіть властивість фамілії', 'surname'),
//     userSurname = prompt('Введіть фамілію', 'Smith');

// let user = {
//     [name]: [userName],
//     [surname]:[userSurname]
// };

// for (let key in user) {
//     console.log(key + ': ' + user[key]);
// }

// user[name] = prompt('Змініть імя', 'Roma');

// for (let key in user) {
//     console.log(key + ': ' + user[key]);
// }

// delete user[name];

// for (let key in user) {
//     console.log(key + ': ' + user[key]);
// }




// let schedule = {};

// function isEmpty() {
//     for (let key in schedule) {
//         return false;
//     }
//     return true;
// }

// console.log(isEmpty(schedule));

// schedule["8:30"] = "Вставай";

// console.log(isEmpty(schedule));



// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// let sum = 0;

// let nice = checkZero(salaries);

// if (nice == true) {
//     sumSalaries(salaries)
// } else {
//     sum = 'Пусто';
// }

// console.log(sum);

// function checkZero(object) {
//     for (let key in object) {
//         return true;
//     }
//     return false;
// }

// function sumSalaries(object) {
//     for (let key in object) {
//         sum += object[key];
//     }
//     return sum;
// }



// let menu = {
//   width: 200,
//   height: 300,
//   title: "Моє меню"
// };

// for (let key in menu) {
//     console.log(key + ': ' + menu[key]);
// }

// multiplyNumeric(menu);

// for (let key in menu) {
//     console.log(key + ': ' + menu[key]);
// }

// function multiplyNumeric(object) {
//     for (let key in object) {
//         if (typeof object[key] === 'number') {
//             object[key] *= 2;
//         }
//     }
// }


// let user = {
//   name: "Іван",
//   age: 30
// };

// user.sayHi = function() {
//   console.log("Привіт!");
// };

// for (let key in user) {
//     console.log(key + ': ' + user[key]);
// }

// user.sayHi()


// function User(name) {
//     this.name = prompt('Name: ', 'Roma');
//     this.age = prompt('Age: ', '4');
// }

// let user = new User();
// let user1 = new User();

// console.log(user.name);
// console.log(user.age);
// console.log(user1.name);
// console.log(user1.age);

// function User() {
//     this.name = prompt('Enter name!', 'Roma');
//     this.age = prompt('Enter age!', '4');

//     this.sayHi = function () {
//         console.log('My name is ' + this.name);
//     };
// }

// let john = new User();
// let roma = new User();

// john.sayHi();
// roma.sayHi();

// for (let key in john) {
//     if (key !== undefined) {
//         console.log(`${key}: ${john[key]}`);
//     }
// }


// function Calculator() {
//     this.read = function () {
//         this.a = +prompt('a: ', '');
//         this.b = +prompt('b: ', '');
//     }

//     this.sum = function () {
//         return this.a + this.b;
//     }

//     this.mul = function () {
//         return this.a * this.b;
//     }
// }

// let calculator = new Calculator();

// calculator.read();

// console.log('sum: ' + calculator.sum());
// console.log('mul: ' + calculator.mul());

// let calculator2 = new Calculator();

// calculator2.read();

// console.log('sum: ' + calculator2.sum());
// console.log('mul: ' + calculator2.mul());
// let street = prompt('street', );

// let user = {
//     name: 'Roma',
//     age: 4,
//     address: street
// };

// console.log(user?.name);
// console.log(user?.address);
// console.log(user?.age);


// let user = {
//   name: "John"
// };

// let id = Symbol("id");

// user[id] = 1;

// for (let key in user) {
//     console.log(`${key}: ${user[key]}`);
//     console.log(`${id.description}: ${user[id]}`);
// }

// let user2 = {
//   name: "Кщьф"
// };

// user2[id] = 2;

// for (let key in user2) {
//     console.log(`${key}: ${user2[key]}`);
//     console.log(`${id.description}: ${user2[id]}`);
// }

// console.log(user2);


// let someText = prompt('Enter text', 'some');

// alert(someText);

// let newSomeText = ucFirst(someText);
// alert(newSomeText);


// function ucFirst(str) {
//     return str[0].toUpperCase() + str.slice(1);
// }


// let x = prompt('enter text', 'some text viagra sometext XXX');

// alert(checkSpam(x));

// function checkSpam(str) {
//     let strNew = str.toLowerCase();
    
//     return strNew.includes('viagra') || strNew.includes('xxx');
// }


// alert(truncate("Що я хотів би розповісти на цю тему:", 20));

// function truncate(str, maxlength) {
//     return (str.length >= maxlength) ?
//         str.slice(0, maxlength - 3) + '...' : str;
// }


// let price = prompt('Price', '$120');

// let number = extractCurrencyValue(price);

// alert(number);

// function extractCurrencyValue(str) {
//     return +str.slice(1);
// }

// let fruits = ["Apple", "Orange", "Plum"];

// console.log(fruits[2]);

// sumInput();

// function sumInput() {
//     let arr = [];
//     let sum = 0;

//     while (true) {
//         let number = +prompt('Enter number', '');

//         if (number === "" || number === null || !isFinite(number)) break;

//         arr.push(+number);
//     }

//     for (let n of arr) {
//         sum += n;
//     }
//     console.log(arr);
//     console.log(sum);
// }

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// for (let n of matrix) {
//     console.log(n);
// }

// console.log(matrix.length);

// let n = 01;

// console.log(n + 4);