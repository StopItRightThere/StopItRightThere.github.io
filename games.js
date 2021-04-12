function randomInsult(){
document.getElementById('title').innerHTML = 'Random Insult!';
var randomBodyParts = ['nose', 'eyes', 'face', 'fingers'];
var randomAdjectives = ['stupid', 'crazy', 'fluffy', 'rotten', 'chubby', 'fat', 'round', 'smelly', 'dumb'];
var randomWords = ['stick', 'cheese', 'book', 'elephent', 'banna'];
var lengthRandomBodyParts = randomBodyParts.length;
var lengthRandomAdjectives = randomAdjectives.length;
var lengthRandomWords = randomWords.length;
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * lengthRandomBodyParts)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * lengthRandomAdjectives)];
var randomWord = randomWords[Math.floor(Math.random() * lengthRandomWords)];
var tryAgain = 0;
if (randomBodyPart === 'eyes') {
var makeSence = ' are like a '
} else if (randomAdjective === 'crazy') {

} else {
var makeSence = ' is like a '
}
var randomInsult = 'Your ' + randomBodyPart + makeSence + randomAdjective + ' ' + randomWord
var randomInsultDisplay = randomInsult;
document.getElementById('title').innerHTML = randomInsultDisplay;
}
function madLibs() {
document.getElementById('title').innerHTML = '<strong><em>Mad libs!</em></strong>';
var startingWelcome = alert('Welcome to my Mad Libs game! There will be 7 pop-up windows where you can put in your answer!');
var boyNameOne = prompt('Enter a boys first name.');
if (boyNameOne === '') {
var emptyInputBoyNameOne = prompt('You can not put an empty input, put a boys first name.');
}
var vegtableOne = prompt('Enter a vegtable in singular form.');
if (vegtableOne === '') {
var emptyInputVegtableOne = prompt('You can not put in an empty input, put a vegtable in singular form.');
}
var teacherNameOne = prompt('Enter a teachers name like this: Ms. Brown, but dont use Ms. Brown.');
if (teacherNameOne === '') {
var emptyInputTeacherNameOne = prompt('You can not put in an empty input, put a teacher name like this: Ms. Brown, but dont use Ms. Brown.');
}
var girlNameOne = prompt('Enter a girls first name.');
if (girlNameOne === '') {
var emptyInputGirlNameOne = prompt('You can not put an empty input, put a girls first name.');
}
var vegtableTwo = prompt('Enter a vegtable in singular form, but not the same as the first vegtable.');
if (vegtableTwo === '') {
var emptyInputVegtableTwo = prompt('You can not put in an empty input, put in a vegtable in singular form, but it has to be different than the other vegtables.');
}
var boyNameTwo = prompt('Enter a boys first name, but dont use the same as the first one.');
if (boyNameTwo === '') {
var emptyInputBoyNameTwo = prompt('You can not put in an empty input, put in a boys first name that is differnt than the first one.');
}
var vegtableThree = prompt('Enter a vegtable in singular form, but do not use the same as the other vegtables.');
if (vegtableThree === '') {
var emptyInputVegtableThree = prompt('You can not put in an empty input, put in a vegatable in singular form that is different from the other ones.');
}
var madLibsOneDisplay = document.getElementById('title').innerHTML = 'Once upon a time there was a little boy named ' + boyNameOne + '. He was not like all the other children, because he had a very big secret. Everyday he went to school hoping no one had discovered the truth. You see ' + boyNameOne + "'s  parents were really " + vegtableOne + "'s. How he turned out to be a normal boy, he didn't know. This year was no exception, except that " + teacherNameOne + " always wanted to meet everyone's parents. Sure enough, at the bottom of his report card, an interview time had been scheduled. " + boyNameOne + ' was devastated! How would he explain? When he brought his report card home, his parents were excited. Finally they would get to meet one of ' + boyNameOne + " teacher's. That evening " + boyNameOne + ' and his parents walked to the school. All the while ' + boyNameOne + ' was dying inside. How, oh how, would he explain!? Hey, wait a minute! When he looked around he saw ' + girlNameOne + '  the most popular girl in class and her parents were ' + vegtableTwo + 's and walking towards the gym was ' + boyNameTwo + 'and his parents were ' + vegtableThree +'s. Wow, what a relief, ' + boyNameOne + "wasn't so different after all!";
}
function spaceInvaders() {
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#ff0000";
ctx.fillRect(600,150,25,25);
ctx.fillRect(750,150,25,25);
ctx.fillRect(625,175,25,25);
ctx.fillRect(725,175,25,25);
ctx.fillRect(600,200,175,25);
ctx.fillRect(575,225,50,25);
ctx.fillRect(650,225,75,25);
ctx.fillRect(750,225,50,25);
ctx.fillRect(550,250,275,25);
ctx.fillRect(550,275,25,25);
ctx.fillRect(600,275,175,25);
ctx.fillRect(800,275,25,25);
ctx.fillRect(550,300,25,25);
ctx.fillRect(600,300,25,25);
ctx.fillRect(800,300,25,25);
ctx.fillRect(750,300,25,25);
ctx.fillRect(700,325,50,25);
ctx.fillRect(625,325,50,25);
}
var moneyPerClickA;
var moneyPerClickC = 1;
var moneyPerClick = 1;
var extraClickCost = 15;
var extraClick = 0;
var money = 0;
function addMoney() {
if (extraClick > 0) {
moneyPerClickA = moneyPerClick * extraClick;
money = money + moneyPerClickA;
document.getElementById('money').innerHTML = money;
}
money++
document.getElementById('money').innerHTML = money;
var clickSound = new Audio('clickSound.mp3');
clickSound.play();
}
function addEC() {
if (money === extraClickCost) {
console.log(extraClickCost)
moneyPerClickC++;
document.getElementById('money').innerHTML = money;
extraClick++
money = money - extraClickCost;
extraClickCost = Math.floor(extraClickCost * 1.2);
document.getElementById('extraClcikCostA').innerHTML = extraClickCost;
document.getElementById('moneyClick').innerHTML = extraClick;
document.getElementById('money').innerHTML = money;
var buySound = new Audio('buySound.mp3');
buySound.play();
} else if (money > extraClickCost) {
moneyPerClickC++
extraClick++
money = money - extraClickCost;
extraClickCost = Math.floor(extraClickCost * 1.2);
document.getElementById('extraClcikCostA').innerHTML = extraClickCost;
document.getElementById('moneyClick').innerHTML = extraClick;
document.getElementById('moneyPerClickB').innerHTML = moneyPerClickC;
document.getElementById('money').innerHTML = money;
var buySound = new Audio('buySound.mp3');
buySound.play();
}
}
function addMoneyPlant() {

}
