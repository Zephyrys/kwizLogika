function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
const signs=['+','-','*','/']
// Генерація чисел для прикладу
let num1=getRandomArbitrary(0,20)
let num2=getRandomArbitrary(0,20)
// Генерація знаку для прикладу
let signIndex=getRandomArbitrary(0,3)
let selectedSign = signs[signIndex]

// Вивід в консоль прикладу
console.log(num1+selectedSign+num2)


// Створення масиву відповідей та коректної відповіді
let answersArr=[]
let correctAnswer=0
// Перевірка знаку для прикладу
if(selectedSign=='+'){
    correctAnswer=num1+num2
    answersArr.push(correctAnswer)
}else if(selectedSign=='-'){
     correctAnswer=num1-num2
    answersArr.push(correctAnswer)
}else if(selectedSign=='*'){
     correctAnswer=num1*num2
    answersArr.push(correctAnswer)
}else if(selectedSign=='/'){
    correctAnswer=num1/num2
    answersArr.push(correctAnswer)
}

console.log(correctAnswer)
// Додавання неправильних відповідей
for(let i=0; i<4;i++){
    answersArr.push(getRandomArbitrary(correctAnswer-10,correctAnswer+5))
}
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
answersArr=shuffle(answersArr)
console.log(answersArr)

