function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
};

console.log(min(8, 4));
console.log(min(6, 6));


function num(numUser) {
    if (numUser % 2 == 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
};

console.log(num(6));
console.log(num(11));


function square(c) {
    let square = c ** 2;
    console.log(square);
};

square(2);

function squareReturn(d) {
    return d ** 2;
};

console.log(squareReturn(3));


let age = prompt("Сколько Вам лет?");

if (age >= 0 && age < 12) {
    function printMessage() {
        console.log("Привет, друг!");
    }
} else if (age >= 13) {
    function printMessage() {
        console.log("Добро пожаловать!");
    }
} else {
    function printMessage() {
        console.log("Вы ввели неправильное значение");
    }
};

printMessage();


let f = Number(prompt('Введите свой параметр'));
let e = Number(prompt('Введите свой параметр'));

if (isNaN(f, e)) {
    function notice() {
        console.log("Одно или оба значения не являются числом");
    }
} else {
    function notice() {
        console.log(f * e);
    }
};

notice();


let n = Number(prompt('Введите число n'));
let exponentiation = n ** 3;

if (isNaN(n)) {
    function noticeForUser() {
        console.log("Переданный параметр не является числом");
    }
} else {
    function noticeForUser() {
        console.log(`n в кубе равняется ${exponentiation}`);
    }
};

noticeForUser();


function getArea() {
    return 3.14 * (this.radius ** 2);
}
function getPerimeter() {
    return 2 * 3.14 * this.radius;
}

const circle1 = {
    radius: 4,

    Area: getArea,
    Perimeter: getPerimeter,
};

const circle2 = {
    radius: 7,

    Area: getArea,
    Perimeter: getPerimeter,
};

console.log(circle1.Area());
console.log(circle1.Perimeter());
console.log(circle2.Area());
console.log(circle2.Perimeter());


function seasonGame() {
    let monthNumber = prompt('Введите номер месяца');

    if (!Number.isInteger(monthNumber)) {
        function season() {
            console.log('Номер месяца введён неверно');
        }
    } else if (monthNumber === 12 || (monthNumber >= 1 && monthNumber <= 2)) {
        function season() {
            console.log('Зима');
        }
    } else if (monthNumber >= 3 && monthNumber <= 5) {
        function season() {
            console.log('Весна');
        }
    } else if (monthNumber >= 6 && monthNumber <= 8) {
        function season() {
            console.log('Лето');
        }
    } else if (monthNumber >= 9 && monthNumber <= 11) {
        function season() {
            console.log('Осень');
        }
    } else {
        function season() {
            console.log('Ты ввёл что-то не так');
        }
    }

    season();
};
