// Задание 1
const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
	if (numbs[i] == 10) break;
	console.log(numbs[i]);
}


// Задание 2
let massive2 = [1, 5, 4, 10, 0, 3];
console.log(massive2.indexOf(4));


// Задание 3
let massive3 = [1, 3, 5, 10, 20];
massive3 = massive3.join(' ');
console.log(massive3);


// Задача 4
let arr4 = [];

for (let i = 0; i < 3; i++  ) {
    arr4[i] = []; // создаем подмассив

    for (let j = 0; j < 3; j++) {
        arr4[i].push(1); // заполняем подмассив числами
    }
}

console.log(arr4);


// Задание 5
let massive5 = [1, 1, 1];
massive5.push(2, 2, 2,);
console.log(massive5);


// Задание 6
let massive6 = [9, 8, 7, 'a', 6, 5]
massive6 = massive6.sort(); // 
massive6.splice(5,1);
console.log(massive6);


// Задание 7
let arr7 = [9, 8, 7, 6, 5];
let n = number(promt('Введите число'));
if (arr7.includes(n)) {
	alert('Вы угадали');
} else {
	alert('Вы не угадали');
}


// Задание 8
const str = 'abcdef';
const reverse = str.split('').reverse().join('');
console.log(reverse);


// Задание 9
let arr9 = [[1, 2, 3,],[4, 5, 6]];
let newArr = arr9.flat(Infinity);
console.log(newArr);


// Задание 10
let arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr.length - 1; i++) {
  let sum = arr[i] + arr[i + 1];
  console.log(sum);
}


// Задание 11
let arr11 = [5, 2, 3];

const newNumbers = arr11.map((number) => number ** 2);
console.log(newNumbers);


// Задание 12
const getLengthWords = source => source.map(str => str.length);

console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));


// Задание 13
function getNegativeNumbers(arr) {
	let negativeNumbers = [];
	for (let i = 0; i < arr.length; i++) {
	  if (arr[i] < 0) {
		negativeNumbers.push(arr[i]);
	  }
	}
	return negativeNumbers;
  }
  
  let numbers = [1, -2, 3, -4, 5];
  let negativeNumbers = getNegativeNumbers(numbers);
  console.log(negativeNumbers); // [-2, -4]
  