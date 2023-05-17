let password = 'пароль';
password = password.toLocaleLowerCase();
let input = String(prompt('Введите пароль'));
if (password === input) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
}


let c = Number(prompt('Введите число'));
if (c>0 && c<10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}


let d = Number(prompt('Введите число'));
let e = Number(prompt('Введите число'));
if (d>100 || e>100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}


let a = '2';
let b = '3';
a = Number(a);
b = Number(b);
alert(a + b);


let monthNumber = prompt('Введите номер месяца или название');
monthNumber = monthNumber.toLocaleLowerCase();
switch (monthNumber) {
    case '1':
    case 'январь':
        console.log('Зима');
        break;
    case '2':
    case 'февраль':
        console.log('Зима');
        break;
    case '3':
    case 'март':
        console.log('Весна');
        break;
    case '4' :
    case 'апрель':
        console.log('Весна');
        break;
    case '5':
    case 'май':
        console.log('Весна');
        break;
    case '6':
    case 'июнь':
        console.log('Лето');
        break;
    case '7':
    case 'июль':
        console.log('Лето');
        break;
    case '8':
    case 'август':
        console.log('Лето');
        break;
    case '9':
    case 'сентябрь':
        console.log('Осень');
        break;
    case '10':
    case 'октябрь':
        console.log('Осень');
        break;
    case '11':
    case 'ноябрь':
        console.log('Осень');
        break;
    case '12':
    case 'декабрь':
        console.log('Зима');
        break;
    default:
        console.log('Такого месяца нет')
        break;
}