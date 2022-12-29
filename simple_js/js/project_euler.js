// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

// Якщо ми перерахуємо всі натуральні числа нижче 10, кратні 3 або 5, то отримаємо 3, 5, 6 і 9. Сума цих кратних дорівнює 23.

// Знайдіть суму всіх кратних 3 або 5, менших за 1000.


// let n = +prompt('Введіть число!', '10');

// showSum();

// function showSum() {
//     let sumNumber = 0;
//     for (let i = 1; i < n; i++) {
//         if (i % 3 == 0 || i % 5 == 0) {
//             sumNumber += i;
//             // console.log(i);
//         }
//     }
//     console.log(sumNumber);
// }

//----------------------------------------------------------------------------------------------

// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even - valued terms.

// Кожен новий член у послідовності Фібоначчі генерується шляхом додавання двох попередніх членів. Починаючи з 1 і 2, перші 10 членів будуть:

//1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// Розглядаючи члени в послідовності Фібоначчі, значення яких не перевищують чотирьох мільйонів, знайдіть суму парних членів.



// let values = +prompt('Ввкдіть значення!', '10');

// let a = 0;
// let sum = 1;
// let result = 0;

// while (true) {
//     sum = sum + a;
//     a = sum - a;
//     if (sum >= values) break;

//     if (sum % 2 == 0) {
//         result = result + sum;
//     }
// }

// console.log('Сума парних чисел: ' + result);


//--------------------------------------------------------------------------------------------

// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

// Прості множники числа 13195: 5, 7, 13 і 29.

// Який найбільший простий множник числа 600851475143?

// let number = 600851475143;
// let primeNumber = 0;
// let checkPrimeNumber = 1;
// let counter = number;

// for (let i = 0; counter > 1; i++) {
//     if (counter % i == 0 && i != 1) {
//         counter = counter / i;
//         console.log('primeNumber: ' + i);

//         if (primeNumber < i) {
//             primeNumber = i;
//         }

//         checkPrimeNumber = checkPrimeNumber * i;
            
//         i = 0;
  
//     }
// }

// checkPrimeNumber = (checkPrimeNumber == number) ? true : false;
// console.log('checkPrimeNumber: ' + checkPrimeNumber);

// console.log('Найбільший множник: ' + primeNumber);

//-------------------------------------------------------------------------------


// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3 - digit numbers.

// Паліндромне число читається однаково в обох напрямках. Найбільший паліндром, складений із добутку двох двозначних чисел, дорівнює 9009 = 91 × 99.

// Знайдіть найбільший паліндром, складений із добутку двох 3-значних чисел.

// let palindromicNumber;
// let maxNumber = +prompt('Max number', '999');

// palindromicNumber = findPalindromicNumber(maxNumber);
// console.log(palindromicNumber);

// function findPalindromicNumber(n) {
//     let pN,
//         rpN,
//         max = 0;
    
//     for (let i = n; i > 100; i--) {
        
//         for (let j = n; j > 100; j--) {
//             pN = i * j;

//             rpN = pN.toString();
//             rpN = reverseString(rpN);

//             if (pN == rpN && pN > max) {
//                 max = rpN;
//                 console.log(i);
//                 console.log(j);
//                 console.log(max);
//             }
//         }
//     }
//     return max;
// }

// function reverseString(str) {
//     var newString = "";
 
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
 

//---------------------------------------------------------------------



// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20 ?
    
//     2520 — це найменше число, яке можна поділити на кожне з чисел від 1 до 10 без залишку.

// Яке найменше додатне число ділиться на всі числа від 1 до 20?


// let maxNumber = +prompt('enter number', '10');

// console.log(findNumber());

// function findNumber() {
//     let k = false,
//         counter;
//     for (counter = 1; k == false;) {
//         for (let j = 1; j < maxNumber; j++) {
//             if (counter % j == 0) {
//                 k = true;
//             } else {
//                 k = false;
//                 counter++;
//                 break;
//             }
//         }
//     }
//     return counter;
// }


//-------------------------------------------------------------------


// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

// Знайдіть різницю суми квадратів перших ста натуральних чисел і квадрата суми.

// let naturalNumbers = +prompt('Enter number!', '10');

// console.log(findDifference());

// function findDifference() {
//     let sumSquare = 0,
//         squareSum = 0;
    
//     for (let i = 1; i <= naturalNumbers; i++){
//         sumSquare = (i ** 2) + sumSquare;
//     }

//     console.log(sumSquare);

//     for (let i = 1; i <= naturalNumbers; i++){
//         squareSum = i + squareSum;
//     }

//     squareSum = squareSum ** 2;

//     console.log(squareSum);

//     return squareSum - sumSquare;
// }


//-------------------------------------------------------------------------


// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number ?

// Перерахувавши перші шість простих чисел: 2, 3, 5, 7, 11 і 13, ми можемо побачити, що 6-те просте число дорівнює 13.

// Яке 10 001-е просте число?

// let findNumber = +prompt('Enter number!', '10');
// let k = false;
// let counter = 0;
// let i;

// for (i = 1; counter < findNumber; i++) {
//     if (i == 2) {
//         k = true;
//     } else {
//         for (j = 2; j < i; j++) {
//             if (i % j == 0) {
//                 k = false;
//                 break;
//             } else {
//                 k = true;
//             }
//         }
//     }
//     if (k == true) {
//         // console.log(i);
//         counter++;
//     }
// }

// console.log(`${counter}th is ${i - 1}`);


//-------------------------------------------------------------------------


// let number = '7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450'

// let lengthNumber = number.length,
//     howLength = +prompt('Lenth!', '4');

// findNumber();

// function findNumber() {

//     let newNumber = number,
//         minNumber = newNumber,
//         lengthMinNumber = minNumber.length;
//     let k = 0;

//     for (let i = 0; i < lengthNumber; i++) {
//         if (productNumber(newNumber) > k) {
//             k = productNumber(newNumber);
            
//             newNumber = newNumber.substring(1);
//             lengthMinNumber = minNumber.length;
//             console.log(true);
//             console.log(k);

//         } else {
//             newNumber = newNumber.substring(1);
//             lengthMinNumber = minNumber.length;
//             console.log(false);
//         }
//     }
//     console.log(k);
// }

// function productNumber(x) {
//     let b = 0;
//     let d = 1;

//     for (let i = 1; i <= howLength; i++) {
//         a = x.substring(b, i);
//         b++;
//         console.log(a);
//         d = d * a;
//     }
//     return d;
// }



//-------------------------------------------------------------------------------



// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

// Піфагорова трійка — це набір із трьох натуральних чисел a < b < c, для якого

// a2 + b2 = c2
// Наприклад, 32 + 42 = 9 + 16 = 25 = 52.

// Існує рівно одна піфагорова трійка, для якої a + b + c = 1000.
// Знайдіть добуток abc.



// let sumPifagor = +prompt('Enter number!', '50');
// let sqrt = 0;
// let chek = 0;
// let chekPif = 0;
// let f = false;
// let a = 0,
//     b = 0,
//     c = 0;

// for (let i = 1; f == false; i++) {

//     if ( i != 1 && sqrtIsInteger(i) == true) {

//         for (let j = 1; j < i; j++) {

//             if (sqrtIsInteger(j) == true) {

//                 for (let k = 1; k < j; k++) {

//                     if (sqrtIsInteger(k) == true) {

//                         chek = k + j;
                        
//                         if (chek == i) {
        
//                             chekPif = (k ** (1/2)) + (j ** (1/2)) + (i ** (1/2));

//                             if (chekPif == sumPifagor) {
//                                 console.log(true);
//                                 a = k ** (1 / 2);
//                                 b = j ** (1 / 2);
//                                 c = i ** (1 / 2);
//                                 console.log('k:' + k);
//                                 console.log('j:' + j);
//                                 console.log('i: ' + i);
//                                 console.log('chekPif: ' + chekPif);
//                                 console.log('a:' + a);
//                                 console.log('b:' + b);
//                                 console.log('c: ' + c);
//                                 console.log('a*b*c= ' + a * b * c);
//                                 f = true;
//                             } else if (chekPif > sumPifagor) {
//                                 console.log(false);
//                                 f = true;
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }

// }

// function sqrtIsInteger(a) {
//     sqrt = a ** (1 / 2);
//     return Number.isInteger(sqrt);
// }


//-----------------------------------------------------------------------------

// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

// Сума простих чисел нижче 10 дорівнює 2 + 3 + 5 + 7 = 17.

// Знайдіть суму всіх простих чисел, менших двох мільйонів.


// let maxNumber = +prompt('Enter number!', '10');

// let sum = 0;

// console.time('time');

// for ( let i = 1; i < maxNumber; i++) {
   
//     if (checkNumber(i) == true) {
//         // console.log(i);
//         sum = sum + i;
//     }
// }

// console.log('sum = ' + sum);
// console.timeEnd('time');

// function checkNumber(counter) {
//     let l = false;

//     if (counter == 2) {
//         l = true;
//     } else {
//         for (let j = 2; j < maxCounter(counter, maxNumber); j++) {
            
//             if (counter % j == 0) {
//                 l = false;
//                 break;
//             } else {
//                 l = true;
//             }
//         }
//     }
//     return l;
// }

// function maxCounter(x, maxN) {
//     let sqrt = Math.round(maxN ** (1 / 2)) + 1;

//     return (x > sqrt) ? sqrt : x;
// }

//-----------------------------------------------------------------------------

// let number = '37107287533902102798797998220837590246510135740250463769376774900097126481248969700780504170182605387432498619952474105947423330951305812372661730962991942213363574161572522430563301811072406154908250230675882075393461711719803104210475137780632466768926167069662363382013637841838368417873436172675728112879812849979408065481931592621691275889832738442742289174325203219235894228767964876702721893184745144573600130643909116721685684458871160315327670386486105843025439939619828917593665686757934951621764571418565606295021572231965867550793241933316490635246274190492910143244581382266334794475817892575867718337217661963751590579239728245598838407582035653253593990084026335689488301894586282278288018119938482628201427819413994056758715117009439035398664372827112653829987240784473053190104293586865155060062958648615320752733719591914205172558297169388870771546649911559348760353292171497005693854370070576826684624621495650076471787294438377604532826541087568284431911906346940378552177792951453612327252500029607107508256381565671088525835072145876576172410976447339110607218265236877223636045174237069058518606604482076212098132878607339694128114266041808683061932846081119106155694051268969251934325451728388641918047049293215058642563049483624672216484350762017279180399446930047329563406911573244438690812579451408905770622942919710792820955037687525678773091862540744969844508330393682126183363848253301546861961243487676812975343759465158038628759287849020152168555482871720121925776695478182833757993103614740356856449095527097864797581167263201004368978425535399209318374414978068609844840309812907779179908821879532736447567559084803087086987551392711854517078544161852424320693150332599594068957565367821070749269665376763262354472106979395067965269474259770973916669376304263398708541052684708299085211399427365734116182760315001271653786073615010808570091499395125570281987460043753582903531743471732693212357815498262974255273730794953759765105305946966067683156574377167401875275889028025717332296191766687138199318110487701902712526768027607800301367868099252546340106163286652636270218540497705585629946580636237993140746255962240744869082311749777923654662572469233228109171419143028819710328859780666976089293863828502533340334413065578016127815921815005561868836468420090470230530811728164304876237919698424872550366387845831148769693215490281042402013833512446218144177347063783299490636259666498587618221225225512486764533677201869716985443124195724099139590089523100588229554825530026352078153229679624948164195386821877476085327132285723110424803456124867697064507995236377742425354112916842768655389262050249103265729672370191327572567528565324825826546309220705859652229798860272258331913126375147341994889534765745501184957014548792889848568277260777137214037988797153829820378303147352772158034814451349137322665138134829543829199918180278916522431027392251122869539409579530664052326325380441000596549391598795936352974615218550237130764225512118369380358038858490341698116222072977186158236678424689157993532961922624679571944012690438771072750481023908955235974572318970677254791506150550495392297953090112996751986188088225875314529584099251203829009407770775672113067397083047244838165338735023408456470580773088295917476714036319800818712901187549131054712658197623331044818386269515456334926366572897563400500428462801835170705278318394258821455212272512503275512160354698120058176216521282765275169129689778932238195734329339946437501907836945765883352399886755061649651847751807381688378610915273579297013376217784275219262340194239963916804498399317331273132924185707147349566916674687634660915035914677504995186714302352196288948901024233251169136196266227326746080059154747183079839286853520694694454072476841822524674417161514036427982273348055556214818971426179103425986472045168939894221798260880768528778364618279934631376775430780936333301898264209010848802521674670883215120185883543223812876952786713296124747824645386369930090493103636197638780396218407357239979422340623539380833965132740801111666627891981488087797941876876144230030984490851411606618262936828367647447792391803351109890697907148578694408955299065364044742557608365997664579509666024396409905389607120198219976047599490197230297649139826800329731560371200413779037855660850892521673093931987275027546890690370753941304265231501194809377245048795150954100921645863754710598436791786391670211874924319957006419179697775990283006991536871371193661495281130587638027841075444973307840789923115535562561142322423255033685442488917353448899115014406480203690680639606723221932041495354150312888033953605329934036800697771065056663195481234880673210146739058568557934581403627822703280826165707739483275922328459417065250945123252306082291880205877731971983945018088807242966198081119777158542502016545090413245809786882778948721859617721078384350691861554356628840622574736922845095162084960398013400172393067166682355524525280460972253503534226472524250874054075591789781264330331690';

// let lenghtNumber = number.length;

// console.log(lenghtNumber);

// boomba(number);

// function boomba(x) {
//     let a;
//     let f = true;
//     let sum = BigInt(0);

//     for (let i = 0; f == true; i++){
//         console.log(x.length);
//         if (x.length > 0) {
//             a = BigInt(x.substring(0, 50));
//             sum = a + sum;

//             x = x.substring(50);

//             console.log(f);
//             console.log('sum: ' + sum);
//         } else {
//             f = false;
//             console.log(f);
//         }
//     }

//     console.log('sum: ' + sum);
    
//     sum = String(sum);
    
//     a = sum.substring(0, 10);

//     console.log(a);

// }

