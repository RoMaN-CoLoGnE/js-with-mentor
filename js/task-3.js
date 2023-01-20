/**
 *?      Напишите цикл, который выводит в консоль
 *?      числа от max до min по убыванию
 *?      Выведите в консоль всех четных чисел от min до max
 */

const max = 50;
const min = 23;

for (let i = max; i >= min; i--) {
    console.log (i);
}

for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
        console.log(i);
    } 
}
console.log("hello");