let nuber = 5;
const leftBorderWidth = 1;
//console.log(nuber);
const obj = {
    name: "John",
    age: 25,
    isMarried: false
};

//console.log(obj.name);

//console.log(obj ["name"]);

let arr = ['plum.png', 'orange.gim'];
//console.log(arr[0]);
//const result = confirm ("Are you her?");
//console.log(result);
// const answer = prompt("Вам есть 18?", "18");
// console.log(typeof(answer));
const answers = [];

answers[0] = prompt('Как Ваше имя?');
answers[1] = prompt('Как Ваше фамилия?');
answers[2] = prompt('Сколько Вам лет?');

document.write(answers);