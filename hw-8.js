function seasonGame() {
    let monthNumber = Number(prompt('Введите номер месяца'));

    if (!Number.isInteger(monthNumber)) {
        {
            alert('Номер месяца введён неверно');
        }
    } else if (monthNumber === 12 || (monthNumber >= 1 && monthNumber <= 2)) {
        {
            alert('Зима');
        }
    } else if (monthNumber >= 3 && monthNumber <= 5) {
        {
            alert('Весна');
        }
    } else if (monthNumber >= 6 && monthNumber <= 8) {
        {
            alert('Лето');
        }
    } else if (monthNumber >= 9 && monthNumber <= 11) {
        {
            alert('Осень');
        }
    } else {
        {
            alert('Ты ввёл что-то не так');
        }
    }
};



function wordGame() {

    let word = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

    word = word.sort(() => Math.random() - 0.5);

    const wordFirst = word[0];

    const wordLast = word[word.length - 1];

    alert(word);

    userWordOne = prompt('Чему равнялся первый элемент массива?');

    userWordTwo = prompt('Чему равнялспоследний элемент массиваа?');

    if (wordFirst.toLowerCase() === userWordOne.toLowerCase() && wordLast.toLowerCase() === userWordTwo.toLowerCase()) {
        alert('Поздравляем!');
    } else if (wordFirst.toLowerCase() === userWordOne.toLowerCase() || wordLast.toLowerCase() === userWordTwo.toLowerCase()) {
        alert('Вы были близки к победе!');
    } else {
        alert('Вы ответили неверно');
    }
};



const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

console.log(people.sort(peopleSort));

function peopleSort(a, b) {
    if (a.age > b.age) {
        return 1;
    }
    if (a.age < b.age) {
        return -1;
    }
    return 0;
};



function isPositive(numberFil) {
    return numberFil > 0;
};

function isMale(personFil) {
    return personFil.gender === 'male';
};

function filter(arr, ruleFunction) {
    const output = [];

    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            output.push(arr[i]);
        }
    }
    return output;
};

console.log(filter([3, -4, 1, 9], isPositive));

const peopleFil = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(peopleFil, isMale));



const timer = (deadline) => {

    let time = new Date();
    const interval = setInterval(() => {
        time.setSeconds(time.getSeconds() + 3);
        console.log(time);
    }, 1000 * 3);

    setTimeout(() => {
        clearInterval(interval);
    }, deadline * 1000)
};

const deadline = 30;

timer(deadline);



function delayForSecondOne(callback) {
    setTimeout(callback, 1000);
}

delayForSecondOne(function () {
    console.log('Привет, Глеб!');
})



function delayForSecond(cb) {

    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) {
            cb();
        }
    }, 1000);
};

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond();
setTimeout(sayHi, 1000, 'Глеб');