let a = 10;
a = 20;
alert(a);
const iphone = 2007;
alert(iphone);
const creator = 'Брендан';
alert(creator);
let b = 2;
let d = 10;
alert(d+b);
alert(d-b);
alert(d*b);
alert(d/b);
let result = b**5;
alert(result);
let c = 9;
alert(c%b);
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);
let age = Number(prompt('Сколько вам лет?'));
alert(`Вам ${age}`);
const user = {
    name: 'Дмитрий',
    age: 28,
    isAdmin: false,
    "city of residence": true,
};
user.age = 23;
delete user["city of residence"];
let info = prompt("Какую информацию хотите узнать о пользователе?", "name");
alert(user[info]);
let username = String(prompt('Как вас зовут?'));
alert(`Привет, ${username} !`);


