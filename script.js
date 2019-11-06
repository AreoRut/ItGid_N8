// do...while
/*let outK;
out1 = document.querySelector('.out1');
let k = 0;
while (k < 100) {
    //k++;
    out1.innerHTML += k;
    console.log("suw " + k);
    k++;

    //out1.innerHTML += k;
    out1.innerHTML += '  ';
    //out1.innerHTML = k;
    //outK += k;

}*/
//out1.innerHTML += '<br>';
//console.log(k);
//console.log(outK);


//0 ....+10

let sum = 0;
let p = 0;
while (p <= 5) {
    sum = sum + p;
    p++;

}
console.log('sum' + sum);
//***

//****
//****
//****
/*
let out = document.querySelector('.out');
p = 0;
let outStr = '';
let flag = 3;
while (p < 4) {
    let p1 = 0;
    while (p1 < 4) {
        if (p1 < flag) {
            outStr += '+';
        } else {
            outStr += '*';
        }
        p1++;

    }
    flag--;
    outStr += '<br>';
    p++;
}
out.innerHTML = outStr;

*/

// Task 1
// Создайте функцию func_1, которая возращает строку от нуля до 100 в формате
// 0 1 2. .100(после 100 тоже есть пробел)
// задание сделать с помощью while


let out1 = document.querySelector('.out1');
//let weturn = func_1();
function func_1() {
    let k = 0;
    while (k <= 29) {
        //out1.innerHTML += k;
        //console.log("suw " + k);
        k++;
        //out1.innerHTML += '  ';
        //console.log("suwd " + k);

    }
    //console.log("s" + k);
    //return func_1();
}
func_1();
console.log("Result = " + func_1());
//out1.innerHTML += func_1();


// Task 2
// Создайте функцию func_2, которая принимает от пользователя 2 параметра числа и возращает строку от первого числа до второго с шагом 1. Разделитель пробел.
// Пример: пользователь ввел 5 и 7
// 5 6 7
// считаем что второе число всегда больше первого. Решаем с помощью while

/*
let but1 = document.querySelector('.but1');
let inputIn1 = document.querySelector('.in1');
let but2 = document.querySelector('.but2');
let inputIn2 = document.querySelector('.in2');
let out2 = document.querySelector('.out2');
let but3 = document.querySelector('.but3');
console.log(inputIn2.value);
let chet = func_2();
function func_2(a, b) {
    let x;
    let y;
    but1.onclick = () => {
        let x = inputIn1.value;
        return x;
        //console.log(x);
        //out2.innerHTML = "#1=   " + a;
        //console.log(x);
    }
    //console.log(x);
    but2.onclick = () => {
        let y = inputIn2.value;
        //console.log(y);
        //out2.innerHTML = "#2=   " + b;
    }
    //out2.innerHTML = "#2=   " + b;
    //console.log(y);
}
//out2.innerHTML += chet;
*/
////////////////////////////////////////////////////////
//#2

let a;
let b;

let inputIn1 = document.querySelector('.in1');
let inputIn2 = document.querySelector('.in2');
let but1 = document.querySelector('.but1');
let out2 = document.querySelector('.out2');

let qeturn = func_2();
function func_2() {
    document.querySelector('.but1').onclick = function () {
        console.log(inputIn1.value);
        console.log(inputIn2.value);
        inP1 = inputIn1.value;
        inP2 = inputIn2.value;
        if (inP1 < inP2) {
            let first = inP1;
            let sec = inP2;
            while (first <= sec) {
                out2.innerHTML += first;
                //console.log(first);
                first++;
                out2.innerHTML += '  ';
            }
        } else {
            alert("ВВодите числа првильно!");
        }
    }

}
//out2.innerHTML += '  ';
//out2.innerHTML += qeturn;
/////
//#3

let inputIn3 = document.querySelector('.in3');
let inputIn4 = document.querySelector('.in4');
let but3 = document.querySelector('.but3');
let out3 = document.querySelector('.out3');

document.querySelector('.but3').onclick = function () {

    inP3 = inputIn3.value;
    inP4 = inputIn4.value;
    if (inP3 > inP4) {
        let first = inP3;
        let sec = inP4;
        while (first >= sec) {
            out3.innerHTML += first;
            //console.log(first);
            first--;
            out3.innerHTML += '  ';
        }

    } else {
        alert("ВВодите числа првильно!");
    }
}

//#4
let inputIn5 = document.querySelector('.in5');
let inputIn6 = document.querySelector('.in6');
let inputIn7 = document.querySelector('.in7');
let but2 = document.querySelector('.but2');
let out4 = document.querySelector('.out4');

document.querySelector('.but2').onclick = () => {
    inP5 = inputIn5.value;
    inP6 = inputIn6.value;
    inP7 = inputIn7.value;
    if (inP5 > inP6) {
        let first = inP5;
        let sec = inP6;
        let step = inP7;
        console.log(first);
        console.log(sec);
        console.log(step);
        while (first > sec) {
            //stg = first - step;
            first = first - step;
            out4.innerHTML += first;
            console.log(first);
            out4.innerHTML += '  ';
        }
    } else {
        alert("Вводите числа правильно!");
    }
}

//#5
let inputIn8 = document.querySelector('.in8');
let inputIn9 = document.querySelector('.in9');
let but4 = document.querySelector('.but4');
let out5 = document.querySelector('.out5');

document.querySelector('.but4').onclick = () => {
    inP8 = +inputIn8.value;
    inP9 = +inputIn9.value;
    let first = inP8;
    let sec = inP9;
    if (first <= 20 || sec >= 0) {
        console.log(first);
        summ = first + sec;
        out5.innerHTML += summ;
        console.log(summ);
        out5.innerHTML += '  ';
    } else {
        alert("Вводите числа правильно!");
    }
}

//#6
let inputIn10 = document.querySelector('.in10');
let inputIn11 = document.querySelector('.in11');
let but5 = document.querySelector('.but5');
let out6 = document.querySelector('.out6');

document.querySelector('.but5').onclick = () => {
    inP10 = +inputIn10.value;
    inP11 = +inputIn11.value;
    let first = inP10;
    let sec = inP11;

    //console.log(first);
    //console.log(sec);

    let i = 0;
    let summ = 0;
    //if (first < sec) {
    while (i < sec) {
        //let summ = first;
        //summ = summ + i;
        i++;
        summ += i;


        console.log(summ);
    } out6.innerHTML = summ;
    /* } else {
         alert("False");
     }*/

}

/*
aBut2 = document.querySelector('.but2');
aBut2.onclick = function () {
    //console.log(inputIn2.value);
    b = inputIn2.value;
    //console.log(b);
    return b;
}
//////////////////////
console.log(b);
 
//et f1 = document.querySelector('.but1');
//let but1 = 1;
let int1 = 0;
console.log(int1);
but1.onClick = () => {
    int1 = document.querySelector('.in1').value;
    console.log(int1);
    return int1;
}
console.log(int1);
/*
function one() {
    // x1 = document.querySelector('.in1').value;
    //console.log(x1);
 
    x1 = x1 + 1;
    console.log(x1);
    return x1;
}
//console.log(x1);
console.log(one());
out2.innerHTML = one();
*/
//one();
//console.log(1 + one());
///////////////////////////////////////////////////////////
//Эксперимент

const div = document.querySelector('#div')
let x = 0;

div.addEventListener('mouseover', () => {
    div.innerHTML = calc();
});

function calc() {
    return x = x + 1;
}
////////////////////////////////////////////////////////////////


// Task 3
// Создайте функцию func_3, которая принимает от пользователя 2 параметра числа и возращает строку от большего числа меньшего с шагом 1. Разделитель пробел.
// Пример: пользователь ввел 5 и 7
// 7 6 5
// Решаем с помощью while

function func_3(a, b) {

}

// Task 4
// Создайте функцию func_4, которая принимает от пользователя 3 параметра(число, число и шаг) и возращает строку от большего числа меньшего с заданным. Разделитель пробел.
// Пример: пользователь ввел 1 5 2
// 5 3 1
// Решаем с помощью while

function func_4(a, b, c) {

}

// Task5
// С помощью цикла
// while создайте функцию func_5, считает и возвращает сумму чисел от 0 до 20.

function func_5() {

}

// Task 6
// C помощью цикла
// while создайте функцию func_6, которая принимает 2 параметра, и если второй параметр больше первого, то возвращает сумму чисел от первого до второго включительно. Если нет - то false.Считаем, что пользователь может ввести только числа.

function func_6(a, b) {

}

// Task 7
// C помощью цикла
// while создайте функцию func_7, которая принимает 2 параметра, и если второй параметр больше первого, то возвращает произведение чисел от первого до второго включительно.Если нет - то false.Считаем, что пользователь может ввести только числа.

function func_7(a, b) {

}

// Task 8
// У пользователя есть 333 монеты в кармане.Каждый день, начиная с первого количество монет увеличиваетя в 2 раза. Напишите функцию func_8, которая вернет день, в который количество монет станет больше или равно 1 000 000.

function func_8() {

}

// Task 9
// Создайте функцию func_9, которая принимает 2 параметра и возращает строку от первого до второго введенного параграфа, где все четные числа заменены на символ нуля(0).

function func_9(a, b) {

}

// Task 10
// Cоздайте функцию func_10, которая вернет строку(решаем через
//         while):
//     **
//     *
//     **
//     *
//     **
//     *

function func_10() {

}

// Task 11
// Создайте функцию func_11, которая вернет следующую строку: 10 1 9 2 8 3. . 1 10. Решаем через
// while.

function func_11() {

}

// Task 12
// Прочитайте о цикле <a href = "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/do...while"
// target = "_blank" >do while</a>. Напишите код:
// let a = 0;
// do
//     console.log('do while work');
// while (a < 0);

// let b = 0;
// while (b < 0) {
//     console.log('while work');
// }

// изучите вывод.Как видите, цикл do while срабатывает минимум один раз в любом случае.Т.е.вначале идет срабатывание, а потом проверка.

function func_12() {

}

// Task 13
// Напишите функцию func_13 которая возвращает строку, от 100 до 0 включительно.Используем цикл do while.

function func_13() {

}

// Task 14
// Стаханов в первый день своей работы добыл 5 тонн угля.Во второй - на 30 % больше от предыдущего дня .Напишите функцию func_14 которая вернет день, когда Стаханова побьют все, кто с ним работает, этот день наступит тогда, когда Стаханов в день добудет 132 тонны угля.Используйте для решения do while. Считаем, что каждый день Стаханов дает угля на 30% больше предыдущего.

function func_14() {

}

// Task 15
// Гермиона Грейнджер в первый день наварила 1.1 литра зелья.Во второй день на 0.3 литра зелья больше.Напишите функцию func_15, которая вернет день, когда в Хоргвардсе не останется пустых котлов(суммарный объем котлов в замке 568 литров).Обратите внимание, что вам нужно найти суммарных объем сваренного зелья, а не дневной объем.Используем do while.

function func_15() {

}

// Task 16
// На странице есть четыре параграфа p.task-16. Используя цикл do ..while посчитайте количество параграфов p.task-16 и если число четное - верните значение, если нет - верните false.Код напишите в функции func_16.

function func_16() {

}

// Task 17
// На странице есть четыре параграфа p.task-16. Используя цикл do ..while выведите в первый p.task-16 - число 1, во второй 2 и т.д.Решение оформите в виде функции func_17.

function func_17() {

}


// Task 18
// На странице есть три параграфа p.task-18. Используя цикл do ..while выведите в первый p.task-18 - число равное количеству параграфов p.task - 18, во второй на единицу меньше и т.д.Решение оформите в виде функции func_18.

function func_18() {

}


// Task 19
// Напишите функцию func_19, которая возвращает строку вида: 1*3*5*7*9*11*13*15*17*19. Решите с помощью do while.

function func_19() {

}

// Task 20
// Напишите функцию func_20, которая возвращает строку вида:
//     1 * * *
//     * 1 * *
//     * * 1 *
//     * * * 1

function func_20() {

}