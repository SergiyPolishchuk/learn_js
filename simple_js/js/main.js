// alert("Я - JavaScript");
// alert("Hello World!");

// let name = 'Roma';
// name = 'Anastasiya';

// alert(name); //Anastasiya

// const age = 3;

// alert(age); //3

// const COLOR_RED = "#F00";

// let color = COLOR_RED;

// alert(color); //#F00

// let name = 'Roma',
//     admin = name;

// alert(admin); //Roma

// let name = 'Роман';

// alert(`Привіт, ${name}е!`);

// let a = 4 > 1;
// b = 4 < 1;
// alert(a); //true
// alert(b); //false

// let user = "Ілля";

// alert( `привіт ${1}` ); // привіт 1

// alert( `привіт ${"user"}` ); //привіт user

// alert( `привіт ${user}` ); //привіт Ілля

// let age = prompt('Скільки вам років?', '');
// alert(`Вам ${age} років!`);

// let isBoss = confirm("Ви бос?");

// alert( isBoss ); // при натисканні 'Ok' результат true

// let userName = prompt('Введіть імя', '');

// alert(userName);

// let age = true;

// alert(typeof age);

// age = String(age);

// alert(typeof age); //string

// let age = '2';
// age = +'2';

// alert(typeof age);

// let a = 1, b = 1;

// let c = ++a;
// let d = b++

// alert(c);
// alert(d);

// let a = prompt('Введіть число', '');

// if (a > 0) {
//     alert('1');
// } else if (a < 0) {
//     alert('-1');
// } else alert('0');

// let login = prompt('Введіть');
    
// let message = (login == 'Працівник') ? 'Привіт' : (login == 'Лідер') ? 'Вітаю' : (login == '') ? 'Не має логіну' : '';

// alert(message);

// let age = prompt('введіть вік');

// let mess = (age < 14 || age > 90) ? 'not corect age' : age;

// alert(mess);


// let userName = prompt('Хто тут?');

// if (userName == 'Admin') {
//     let userPass = prompt('Введіть пароль');
//     if (userPass == '1234') {
//         alert('Welcome ' + userName);
//     } else if (userPass == null) {
//         alert('Cancel');
//     } else alert('Wrong Password');
// } else if (userName == null) {
//     alert('Cancel');
// } else alert('Я тебе не знаю');

// let word = prompt('Введіть слово', ''),
//     leter = word.charAt(0)+'_letter';
// console.log(leter);

// if (word.charAt(0) == 'a') {
//     console.log('Перша літера '+leter);
// } else console.log('інша буква');

// for (let i = 0; i <= 10; i++) {
//     if (i % 2 == 0 && i !== 0) {
//         console.log(i);
//     }
// }

// console.log('-------------------');

// let c = 0;

// while (c < 3) {
//     console.log(`число ${c}`);
//     c++;
// }

// let numberUser;
// while (true) {
//     numberUser = +prompt('Введіть число більше 100!', '');
//     if (numberUser >= 100 || !numberUser) {
//         break;
//     }
// }

// console.log(numberUser);

// let n = +prompt('Введіть число', '');

// for (let i = 2; i < n; i++) {

//     if (i == 2) {
//         console.log(i);
//     } else if (i % 2 != 0 && i % n != 0) {
//         console.log(i);
//     }
// }

// let browser = prompt('Введіть браузер', '');

// if (browser == 'Edge') {
//     alert( "You've got the Edge!" );
// } else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
//     alert( 'Ми підтримуємо і ці браузери' );
// } else {
//     alert( 'Маємо надію, що ця сторінка виглядає добре!' );
// }

// let a = +prompt('a?', '');

// switch (a) {
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert('2,3');
//         break;
// }


// function checkAge(age) {
//     age = +prompt('How old are you?', '');
//     return (age >= 18) || confirm('Whear is your parents?');
    
// }

// // console.log(checkAge());

// function min(a, b) {
//     return (a < b) ? console.log(a) : (a > b) ? console.log(b) : console.log("Числа рівні");
// }

// min(6, 6);

// function pow(x, n) {
//     let result = x;

//     for (let i = 1; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }

// let x = prompt('x?', '');
// let n = prompt('n?', '');

// if (n < 1) {
//     console.log('Невірна степінь');
// } else {
//     console.log(pow(x, n));
// }

// let i = prompt('some number', '');

// alert(i = i ? i < 0 ? Math.max(0, len + i) : i : 0);

