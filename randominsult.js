function randomInsult(){
document.getElementById('title').innerHTML = 'Random Insult!';
var randomBodyParts = ['nose', 'eyes', 'face', 'fingers'];
var randomAdjectives = ['stupid', 'crazy', 'fluffy', 'rotten', 'chubby', 'fat', 'round'];
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
