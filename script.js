let a = 10;
alert(a);
alert(a+10);
let iphone = 2007;
alert(iphone);
let creator = 'Брендан';
alert(creator);
let b = 2;
alert(a+b);
alert(a-b);
alert(a*b);
alert(a/b);
let result = b**5;
alert(result);
let c = 9;
alert(c%b);
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);
let age = Number(prompt('Сколько вам лет?'));
alert(`Вам ${age}`);
const user = {
    name: String('Дмитрий'),
    age: Number('28'),
    isAdmin: Boolean('Админ'),
    "city of residence": true,
    age: Number('25'),
    delete: "city of residence"
};
let info = prompt("Какую информацию хотите узнать о пользователе?", "name");
alert(user[info]);
let username = String(prompt('Как вас зовут?'));
alert(`Привет, ${username} !`);


