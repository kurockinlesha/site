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


const strOne = 'js';

console.log(strOne.toUpperCase());


const searchStart = ['Кошка', 'Кит', 'Комар', 'Носорог'];

const search = 'ко';

searchStart.forEach((coincidence) => {
	if (coincidence.toLowerCase().includes(search.toLowerCase())) {
		console.log(coincidence);
	}
});


const numOne = 32.58884;

console.log(Math.floor(numOne));

console.log(Math.ceil(numOne));

console.log(Math.round(numOne));


console.log(Math.min(52, 53, 49, 77, 21, 32));

console.log(Math.max(52, 53, 49, 77, 21, 32));


function getRandomInt(minNum, maxNum) {

	return Math.round(Math.random() * maxNum);

};

console.log(getRandomInt(0, 10));


let userNum = Number(prompt('Введите целое число '));

const length = userNum / 2;

const lengthUse = Math.floor(length);

function randomNumbersArray() {
	return Array.from(Array(lengthUse), () => Math.floor(Math.random() * userNum));
};

const randomArr = randomNumbersArray();

console.log(randomArr);


const minValue = Number(prompt('Введите 1-ое целое число '));

const maxValue = Number(prompt('Введите 2-ое целое число '));

function getRandomInt(minValue, maxValue) {
	return Math.round(Math.random() * maxValue);
}

console.log(getRandomInt(minValue, maxValue));


let currentDateOne = new Date();

console.log(currentDateOne);


const currentDate = new Date();

currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);


const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
	"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

const myDate = new Date();

const fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " + days[myDate.getDay()];

const fullTime = "Время: " + myDate.getHours() + " : " + myDate.getMinutes() + " : " + myDate.getSeconds();

console.log(fullDate + "\n" + fullTime);


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


