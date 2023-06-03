function seasonGame() {
    let monthNumber = Number(prompt('Введите номер месяца'));

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


const numOne = [1, 5, 4, 10, 0, 3];

for (let a = 0; a < numOne.length; a++) {
    if (numOne[a] == 10) break;
    console.log(numOne[a]);
};


const numTwo = [1, 5, 4, 10, 0, 3];

console.log(numTwo.indexOf(4));


const numThree = [1, 3, 5, 10, 20];

console.log(numThree.join(' '));


const massiv = [];

for (let i = 0; i < 3; i++) {
    massiv[i] = [];

    for (let j = 0; j < 3; j++) {
        massiv[i][j] = 1;
    }
}

console.log(massiv);


const numFour = [1, 1, 1];

numFour.push(2, 2, 2);

console.log(numFour);


const numFive = [9, 8, 7, 'a', 6, 5];

numFive.sort();

numFive.pop();

console.log(numFive);


let numUser = Number(prompt('Введите число от 1 до 10'));

const numSix = [9, 8, 7, 6, 5];

console.log(numSix.includes(numUser));


const str = String('abcdef');

const strMas = Array.from(str);

strMas.reverse();

console.log(strMas.join(''));


const numSeven = [[1, 2, 3,],[4, 5, 6]];

const numSevenRes = [].concat(numSeven[0],numSeven[1]);

console.log(numSevenRes);


const numEight = [1, 4, 5, 2, 9, 3];

for (let index = 0; index < numEight.length - 1; index++) {
    console.log(numEight[index] + numEight[index + 1]);
};


const numNine = [1, 4, 5, 2, 9, 3];

let numNineRes = numNine.map(item => (item ** 2));

console.log(numNineRes);


const numTen = ['слово', '', 'слог', 'длинное предложение', 'буква'];

let numTenRes = numTen.map(item => item.length);

console.log(numTenRes);


const numEleven = [-25, 25, 0, -1000, -2];

let numElevenRes = numEleven.filter(item => item < 0);

console.log(numElevenRes);



