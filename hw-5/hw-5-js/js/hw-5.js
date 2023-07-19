// Задание 1
function findSmallerNumber(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
  
  console.log(findSmallerNumber(8, 4));
  console.log(findSmallerNumber(6, 6));
  

// Задание 2
  function checkEvenOdd(number) {
    if (number % 2 === 0) {
      return 'Число четное';
    } else {
      return 'Число нечетное';
    }
  }
  
  console.log(checkEvenOdd(4)); // Число четное
  console.log(checkEvenOdd(7)); // Число нечетное


// Задание 3.1
    function printSquare(number) {
    console.log(number * number);
  }
  
  printSquare(5); //  25


// Задание 3.2
  function returnSquare(number) {
    return number * number;
  }
  
  console.log(returnSquare(5)); // 25


// Задание 4
function checkAge() {
    let age = prompt("Сколько вам лет?");
  
    if (age < 0) {
      console.log("Вы ввели неправильное значение");
    } else if (age >= 0 && age <= 12) {
      console.log("Привет, друг!");
    } else {
      console.log("Добро пожаловать!");
    }
  }
  
  checkAge();


// Задание 5
function multiplyNumbers(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      return 'Одно или оба значения не являются числом';
    } else {
      return num1 * num2;
    }
  }


// Задание 6
  function cubeNumber() {
    let number = prompt("Введите число:");
  
    if (isNaN(number)) {
      return 'Переданный параметр не является числом';
    } else {
      let cube = Math.pow(Number(number), 3);
      return `${number} в кубе равняется ${cube}`;
    }
  }


// Задание 7
  let circle1 = {
    radius: 5,
    getArea: function() {
      return Math.PI * this.radius * this.radius;
    },
    getPerimeter: function() {
      return 2 * Math.PI * this.radius;
    }
  };
  
  let circle2 = {
    radius: 10,
    getArea: function() {
      return Math.PI * this.radius * this.radius;
    },
    getPerimeter: function() {
      return 2 * Math.PI * this.radius;
    }
  };
