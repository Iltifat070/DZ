// var array = [1, 2, 4, 5, 7, 5, 4, 4, 3]

// function maxElement(array) {
//     let max = array[0];
//     for (i = 0; i < array.length; i++) {

//         if (array[i] > max) {
//             max = array[i]
//         }
//     }
//     return max;
// }

// console.log(maxElement(array))

// function minElement(array){
//     let min = array[0]
//     for(let item of array){
//         if(item < min){
//             min = item
//         }
//     }
//     return min;
// }
// console.log(minElement(array));


// function middleElement(array){
//     let sum = 0;
//     for(let i = 0; i<array.length; i++){
//         sum += array[i]
//     }
//     return sum / (array.length)
// }
// console.log(middleElement(array));



// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

//Задача №1 отсортировать массив по возрастанию!
// var array = [2, 1, 5, 4, 3, 3, 4, 5] 
//array.sort((a,b) => a - b)
//console.log(array)

//Задача №2 отсортировать массив по убыванию
//array.sort((a, b) => b - a)
//console.log(array)

//Задача №3 Проверить, содержит ли массив определенный элемент.
//function checkElement(array, target){
//  return array.includes(target) //true | false

//}
//console.log(checkElement(array, 9)) // true | false

//Задача №4 Создать новый массив, состоящий только из уникальных элементов
//  function uniql (array) {
//   let res = [];
//    for(let el of array){
//      if(array.filter( item => item === el).length == 1){
//        res.push(el)
//      }
//    }
//    return res;
//  }

//console.log(uniql (array)) // [2, 1]

// array.filter( item => item === el).length == 1
// 1. array.filter( item => item === el) // => [5, 5]
// 2. array.filter( item => item === el).length === 2


//Задача №5 Найти индекс первого вхождения определенного элемента в массиве
// function arrIndex(array, elem){
//   return array.indexOf(elem)
// }

// console.log(arrIndex(array, 5))

// Задача №6 Объединить два массива в один
// function twoArray(array, arrayTwo){
//   return newArray = array.concat(arrayTwo)
// }

// console.log(twoArray([4,5,6 ], [1,2,3]))  //ЗАДАЧИ НА МАССИВЫ

//ЗАДАЧА №7 удалить определнный элемент из массива

const numbers = [1, 2, 3, 4, 5];
const numberToDelete = 3;

const filteredNumbers = numbers.filter((number) => number !== numberToDelete);
console.log(filteredNumbers);


//ЗАДАЧА №1 sum-of-positive

let array = [1, -4, 7, 12]

function sumOfPositive(array) {
   let sum = 0;
   for(let i = 0; i < array.length; i++){
       if(array[i] > 0){
           sum += array[i]
       }
   }
   return sum;
}


console.log(sumOfPositive(array))

function sumOfPositive(array){
    let reducer = (accumulator, current) => accumulator + (current > 0 ? current : 0)
    return array.reduce(reducer, 0)
}
console.log(sumOfPositive(array))



//ЗАДАЧА №2 shortest-word

function findShort(s) {
   let res = s.split(' ');
   let a = Infinity;
   
   for (let i = 0; i < res.length; i++) {
     a = Math.min(res[i].length, a);
   }
   return a;
 }
 console.log(findShort("Hello my dear friend"));  



//ЗАДАЧА №3 list-filtering

let arrayy = [1,'a','b',0,15];

function fliterList(arrayy){
   return arrayy.filter(elem => typeof elem === 'number')
}

console.log(fliterList(arrayy))



//ЗАДАЧА №4 --- Build a square




//ЗАДАЧА №5 Vowel Count

function getCount(input) {
   var vowelsCount = 0;
   var inputLetters = input.split("");
   
   const vowels = ["a","e","i","o","u"];
   
   vowels.forEach(function(vowel) {
     inputLetters.forEach(function(inpLetter) {
       if (inpLetter === vowel) {
         vowelsCount++;
       }
     });
   });
   
   return vowelsCount;
 }

 console.log(getCount('privet'))




//ЗАДАЧА №6 playing-with-digits

function digPow(n, p){
   let array = n.toString().split('').map(Number).reduce((acc,cur,i,array)=>acc+(Math.pow(array[i],p+i)),0)/n
   return ('' + array).includes('.') ? -1 : array
   }
console.log(digPow(91,2))




//ЗАДАЧА №7 Smallest value of an array ----

function minElement(array){
   let min = array[0]
   for(let item of array){
       if(item < min){
           min = item
       }
   }
   return min;
}
console.log(minElement(array));


//ЗАДАЧА №8 array-dot-diff

function array_diff(a, b) {
   return a.filter(e => !b.includes(e));
 }

 console.log(array_diff([1,2], [1]))




//ЗАДАЧА №9 find-the-capitals-1

function capitals(word){
   var array = []
   for(var i = 0; i < word.length; i++){
     if(word[i] == word[i].toUpperCase()){
       array.push(word.indexOf(word[i]))
     }
   }
  return array
 }
 console.log(capitals('HelLO'))



//ЗАДАЧА №10 insert-dashes

function insertDash(num) {
   var result = []

    num = num.toString().split('').map(Number)

    for(var i=0;i<num.length;i++){
    if(num[i] % 2 !== 0 && num[i+1] % 2 !== 0){
      result.push(num[i])
      result.push('-')
      }
    else {
      result.push(num[i])
      }
    }
    if(result[result.length-1]=='-') result.pop()
    return result.join("")
}

console.log(insertDash('41252521555677'))



//ЗАДАЧА №11 homogenous-arrays ---



//ЗАДАЧА №12  lottery-ticket

function bingo(ticket, win) {
   if (ticket.filter(a => a[0].split('').some(b => b.charCodeAt(0) == a[1])).length >= win) {
       return "Winner!";
   }
   return "Loser!";
}



//ЗАДАЧА № 13 row-weights ---



//ЗАДАЧА № 14 scrolling-text

function scrollingText(text){
   text = text.toUpperCase();
 
   return [...text].map((_, i) => text.slice(i) + text.slice(0, i));
 }


//ЗАДАЧА №15 Write Number in Expanded Form

function expandedForm(num) {
   var multiple = 10;
   var result = [];
   while (num > 1){
     var remainder = num%multiple;
     if(remainder >0){
       result.unshift(remainder);
     }
     num -= remainder;
     multiple = multiple * 10;
   }
   return result.join(" + ");
 }


// ЗАДАЧА №16 is-every-value-in-the-array-an-array ------



// ЗАДАЧА №17 make-a-square-box -------




// ЗАДАЧА №18 magic-index -----




// ЗАДАЧА №19 Email Address Obfuscator




// ЗАДАЧА №20 Excel sheet column numbers

function titleToNumber(title) {
   return title.split("").map(x=> x.charCodeAt(0)-64).reduce((x,y)=> x*26+y)
 }

 console.log(titleToNumber('AA'))

// ЗАДАЧА №21 Count the smiley faces -------



//ЗАДАЧИ НА МАССИВЫ И СТРОКИ


//ЗАДАЧА №1 RGB To Hex Conversion -----




//ЗАДАЧА №2 two sum

function twoSum(numbers, target) {
   for(let i = 0; i<numbers.length; i++){
     for(let j = i+1; j<numbers.length; j++){
       let res = numbers[i] + numbers[j]
       if(res == target){
           return [i,j]
       }
     }
   }
 }

 console.log(twoSum([1,2,3], 4))
 



// ЗАДАЧА №3 Length of missing array ----




// ЗАДАЧА №4 Data reverse
