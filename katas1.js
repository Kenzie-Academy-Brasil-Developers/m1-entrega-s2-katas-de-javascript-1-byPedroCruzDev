//1.oneThroughTwenty - Retornar os números de 1 a 20. (1, 2, 3,..., 19, 20)
function oneThroughTwenty(num) {

  let newArr = [];

  for(let i = 1; i <= num; i++){
    newArr.push(i)
  }
  return newArr
    
}
console.log(oneThroughTwenty(20))

//2.call function oneThroughTwenty

//evensToTwenty - Retornar os números pares de 1 a 20. (2, 4, 6,..., 18, 20)
function evensToTwenty(num) {
    
let pairArr = [];

for(let i = 1; i <= num ; i++){
  if( i % 2 == 0){
    pairArr.push(i)
  }
}
  return pairArr
}

console.log(evensToTwenty(20))


//3.oddsToTwenty - Retornar os números ímpares de 1 a 20. (1, 3, 5,..., 17, 19)
function oddsToTwenty(num) {
    
  let oddArr = [];

  for(let i = 1; i <= num; i++){
    if( i % 2 !== 0){
      oddArr.push(i)
    }
  }
  return oddArr
   
}

console.log(oddsToTwenty(20))

//4.multiplesOfFive - Retornar os múltiplos de 5 até 100. (5, 10, 15,..., 95, 100)
function multiplesOfFive(num) {
    
let multiplesArr = [];
for(let i = 1; i <= num; i++){
  if( i % 5 == 0){
    multiplesArr.push(i)
  }
}
return multiplesArr

}

console.log(multiplesOfFive(100))


//5.squareNumbers - Retornar todos os números até 100 que forem quadrados perfeitos. (1, 4, 9, ..., 81, 100)
function squareNumbers(num) {
    
let squareArr = [];
for(let i = 1; i <= num; i++){
  if(Math.sqrt(i) % 1 === 0){
    squareArr.push(i)
  }
}
return squareArr
    
}

console.log(squareNumbers(100))

//6.countingBackwards - Retornar os números contando de trás para frente de 20 até 1. (20, 19, 18, ..., 2, 1)
function countingBackwards(num) {
  let counter = [];
  
  for(let i = num; i >= 1; i--){
    counter.push(i)
  }
  return counter
}

console.log(countingBackwards(20))


//7.evenNumbersBackwards - Retornar os números pares de 20 até 1. (20, 18, 16, ..., 4, 2)
function evenNumbersBackwards(num) {
    
  let pairArr = [];

  for(let i = num; i >= 1; i--){
    if( i%2 == 0 ){
      pairArr.push(i)
    }
  }
  return pairArr
}

console.log(evenNumbersBackwards(20))


//8.oddNumbersBackwards - Retornar os números ímpares de 20 até 1. (19, 17, 15, ..., 3, 1)
function oddNumbersBackwards(num) {

  let oddArr = [];

  for(let i = num; i >= 1; i--){
    if( i%2 !== 0 ){
      oddArr.push(i)
    }
  }
  return oddArr

}

console.log(oddNumbersBackwards(20))


//9.multiplesOfFiveBackwards - Retornar os múltiplos de 5 contando de trás para frente a partir de 100. (100, 95, 90, ..., 10, 5)
function multiplesOfFiveBackwards(num) {
    
let multiplesArr = [];

for(let i = num; i >= 1; i--){
  if( i%5 === 0){
    multiplesArr.push(i)
  }
}
return multiplesArr
}

console.log(multiplesOfFiveBackwards(100))

//10.squareNumbersBackwards - Retornar os quadrados perfeitos contando de trás para frente a partir de 100. (100, 81, 64, ..., 4, 1)
function squareNumbersBackwards(num) {
    
  let squareArr = [];

  for(let i = num; i >= 1; i--){
    if(Math.sqrt(i)%1 == 0){
      squareArr.push(i)
    }
  }
  return squareArr
}

console.log(squareNumbersBackwards(100))
