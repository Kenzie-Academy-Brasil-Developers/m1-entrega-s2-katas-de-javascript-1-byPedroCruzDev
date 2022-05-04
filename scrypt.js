//1
//oneThroughTwenty - Retornar os números de 1 a 20. (1, 2, 3,…, 19, 20)
function oneThroughTwenty(numbers){
    let counter = [];
    for (let i=0;i < numbers; i++){

     counter.push(i)
   
    } return counter
}
console.log(oneThroughTwenty(20))


//2-
//evensToTwenty - Retornar os números pares de 1 a 20. (2, 4, 6,…, 18, 20)
function evensToTwenty (numbers){

    let count = [];
    for(let index=1; index <= numbers; index++){
        if(index % 2 === 0){
            count.push(index)
            
        }
    }return count 
}
console.log(evensToTwenty(20))


//3
//oddsToTwenty - Retornar os números ímpares de 1 a 20. (1, 3, 5,…, 17, 19)
function oddsToTwenty (numbers){

    let count = [];
    for(let index=1; index <= numbers; index++){
        if(index % 2 !== 0){
            count.push(index)
            
        }
    }return count 
}
console.log(oddsToTwenty(20))


//4
//multiplesOfFive - Retornar os múltiplos de 5 até 100. (5, 10, 15,…, 95, 100)
function multiplesOfFive(numbers){

    let count = [];
    for(let index=5; index <= numbers; index++){
        if(index % 5 === 0){
            count.push(index)
        }
    }
    return count
}
console.log(multiplesOfFive(100))


//5
//squareNumbers - Retornar todos os números até 100 que forem quadrados perfeitos. (1, 4, 9, …, 81, 100)

function squareNumbers(square){
    let count = [];

    for(let index = 1; index <= square; index ++){
        if(Math.sqrt(index) % 1 === 0){
            count.push(index)
        }
    }
    return count
}
console.log(squareNumbers(100))

//6
//countingBackwards - Retornar os números contando de trás para frente de 20 até 1. (20, 19, 18, …, 2, 1)
function countingBackwards (numbers){
    let count = [];

    for(let index = 20; index >= numbers; index--){
        count.push(index)
    }
    return count
}
console.log(countingBackwards(1))


//7
//evenNumbersBackwards - Retornar os números pares de 20 até 1. (20, 18, 16, …, 4, 2)
function evenNumbersBackwards(number){
    
    let count = [];
    
    for(let index = 20; index >= number; index--){
        if(index % 2 === 0){
            count.push(index)
        }
    }return count
}
console.log(evenNumbersBackwards(1))

//8
//oddNumbersBackwards - Retornar os números ímpares de 20 até 1. (19, 17, 15, …, 3, 1)
function oddNumbersBackwards (number){

    let count = [];
    for(let index = 20; index >= number; index--){

        if(index % 2 !== 0){
            count.push(index)
        }
    }return count
}
console.log(oddNumbersBackwards (1))

//9
//multiplesOfFiveBackwards - Retornar os múltiplos de 5 contando de trás para frente a partir de 100. (100, 95, 90, …, 10, 5)
function multiplesOfFiveBackwards (numbers){

    let count = [];

    for(let index = 100; index >= numbers; index--){

        if(index % 5 === 0){
            count.push(index)
        }
    }return count
}
console.log(multiplesOfFiveBackwards (1))

//10
//squareNumbersBackwards - Retornar os quadrados perfeitos contando de trás para frente a partir de 100. (100, 81, 64, …, 4, 1)
function squareNumbersBackwards (numbers){

    let count = [];
    for(let index = 100; index >= numbers; index --){

        if(Math.sqrt(index) % 1 === 0){
            count.push(index)
        }
    }return count
}
console.log(squareNumbersBackwards (1))