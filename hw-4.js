let i = 0;
while (i < 2) {
    console.log ('Привет');
    i++;
}

let d = 1;
while (d <= 5) {
    console.log (d);
    d++;
}

let c = 7;
while (c <= 22) {
    console.log (c);
    c++;
}

const obj = {
    'Коля' : 200,
    'Вася' : 300,
    'Петя' : 400
}
for(key in obj){
    console.log (`${key}- Зарплата ${obj[key]} долларов`);
}

let n = 1000;
let num = 0;
while (n > 50) {
    num++;
    n /= 2;
}
console.log (n);
console.log (num);

let day = 4;
for (let weekDay = 1; weekDay <= 31; weekDay++) { 
    if (weekDay !== day) {
        continue;
    }
        day+=7;
        console.log(`Сегодня пятница, ${weekDay} -е число. Необходимо подготовить отчет.`); 
    }



