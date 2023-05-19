let password = 'пароль';
let input = prompt('Введите пароль');
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
    case '12':
    case 'декабрь':
    case '1':
    case 'январь':
    case '2':
    case 'февраль':
        console.log('Зима');
        break;
    case '3':
    case 'март':
    case '4' :
    case 'апрель':
    case '5':
    case 'май':
        console.log('Весна');
        break;
    case '6':
    case 'июнь':
    case '7':
    case 'июль':
    case '8':
    case 'август':
        console.log('Лето');
        break;
    case '9':
    case 'сентябрь':
    case '10':
    case 'октябрь':
    case '11':
    case 'ноябрь':
        console.log('Осень');
        break;
    default:
        console.log('Такого месяца нет')
        break;
}