// var i = 10; //-1
// var array = [];
// while (i--) { 
//    const k = i
//   array.push(function() {
//       return k + k      
                               
//   });
// }

// console.log([
//     array[0](), // -2 // 18
//     array[1](), // -2 // 16
//     array[2](), // 14
// ])

// let j = 1



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




//16.04.23
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

function generateShape(n){
  let result = '' // '+++\n+++\n'
  for(let i = 0; i<n; i++){
    let temp = '' // '+++'
    for(let j = 0; j<n; j++){
      temp = temp + '+'
    }
    result = result + temp + '\n' 
  }

  return result // '+++\n+++\n+++\n'
}

console.log(generateShape(3)) // '+++\n+++\n+++'
console.log(generateShape(8)) // '+++++\n+++++\n++++++\n+++++\n+++++'


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




//ЗАДАЧА №7 Smallest value of an array

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



//ЗАДАЧА №11 homogenous-arrays

function filterHomogenous(arrays) {
  const result = []
  for(let i = 0; i < arrays.length; i++) {
    if (arrays[i].length > 0) {
      const type = typeof arrays[i][0]
      const isSame = arrays[i].every( el => typeof el === type)
      isSame && result.push(arrays[i])
    }
  }
  
  return result;
}

log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]))

//ЗАДАЧА №12  lottery-ticket

function bingo(ticket, win) {
   if (ticket.filter(a => a[0].split('').some(b => b.charCodeAt(0) == a[1])).length >= win) {
       return "Winner!";
   }
   return "Loser!";
}



//ЗАДАЧА № 13 row-weights

function rowWeights(array) {
  let one = 0;
  let second = 0;
  for(let i = 0; i < array.length; i++){
    if ( i % 2 === 0) {
      one = one + array[i]
    } else {
      second = second + array[i]
    }
  }

  return [one, second]
}

log(rowWeights([80])) // [80,0]);
log(rowWeights([100,50])) // [100,50]);
log(rowWeights([50,60,70,80])) // [120,140]);
log(rowWeights([13,27,49])) // [62,27]);

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


// ЗАДАЧА №16 is-every-value-in-the-array-an-array 

function arrCheck(array) {
  return array.every( el => Array.isArray(el))
}

log(arrCheck([]))    // true
log(arrCheck([['string']]))    // true
log(arrCheck([[],{}]))    // false
log(arrCheck([[1],[2],[3]]))    // true
log(arrCheck(['A', 'R', 'R', 'A', 'Y']))    // false


// ЗАДАЧА №17 make-a-square-box




//Доделать ДЗ

// ЗАДАЧА №18 magic-index 

function findMagic(array){
  return array.findIndex( (el, i) => el === i)
}
console.log(findMagiс([-20,-10,2,10,20])); // Returns 2

// ЗАДАЧА №19 Email Address Obfuscator

  



// ЗАДАЧА №20 Excel sheet column numbers

function titleToNumber(title) {
   return title.split("").map(x=> x.charCodeAt(0)-64).reduce((x,y)=> x*26+y)
 }

 console.log(titleToNumber('AA'))

// ЗАДАЧА №21 Count the smiley faces

function countSmileys(smileys) {
  let firstStep = smileyHasValidEye;
  return smileys.filter(smiley => {
    let state = firstStep;
    for (let s of [...smiley]) {
      state = state(s);
    }
    return state === true;
  }).length;
}

function smileyHasValidEye(s) {
  if (s === ':' || s === ';') {
    return smileyHasValidNose;
  }
  return smileyHasValidEye;
}

function smileyHasValidNose(s) {
  if (s === '-' || s === '~') {
    return smileyHasValidMouth;
  }
  return smileyHasValidMouth(s);
}

function smileyHasValidMouth(s) {
  if (s === ')' || s === 'D') {
    return true;
  }
  return;
}

console.log(countSmileys([':)', ';(', ';}', ':-D']));













//ЗАДАЧИ НА МАССИВЫ И СТРОКИ


//ЗАДАЧА №1 RGB To Hex Conversion

function rgb(r, g, b){
  return convertToRGB(r)+convertToRGB(g)+convertToRGB(b)
}

const convertToRGB = (rgbVal) =>{
  
  if(rgbVal <= 0) return '00'
  if(rgbVal >= 255) return 'FF'

  firstHex=parseInt(rgbVal/16)
  secondHex=((rgbVal/16)-firstHex) * 16
  
  return getHexValue(firstHex)+getHexValue(secondHex)
  
}


const getHexValue = (digit) =>{
  const rgbToHex = {
    '0': '0',  
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '10': 'A',
    '11': 'B',
    '12': 'C',
    '13': 'D',
    '14': 'E',
    '15': 'F',
  }
    
  return rgbToHex[digit.toString()]  
  
  
}



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

function getLengthOfMissingArray(arrayOfArrays) {
  const lengths = (arrayOfArrays || []).map(a => a ? a.length : 0).sort((a, b) => a - b)
  
  if (lengths.includes(0)) {
    return 0
  }

  for (let i = 0; i < lengths.length - 1; i++) {
    if (lengths[i] + 1 !== lengths[i + 1]) {
      return lengths[i] + 1
    }
  }

  return 0
}


// ЗАДАЧА №4 Data reverse

function dataReverse(data) {
  let x = { '11111111': 1, '00000000':2, '00001111':3, '10101010':4, '1': '11111111', '2': '00000000', '3': '00001111', '4': '10101010', }
  let y = [] 
  data = data.join('').match(/\d{8}/g) 
  data.forEach(a=> y.push(x[a]))
  y = y.sort((a,b)=> b - a) 
  return y.map(a=> x[a]).join('').split('').map(a=> Number(a))
}


// ЗАДАЧА №5 Proof Read ---



// ЗАДАЧА №6 Format words into a sentence --



// ЗАДАЧА №7 Simple Fun #79: Delete a Digit

function deleteDigit(n) {
  var s = String(n).split('').map(Number)
  return Math.max(...s.map((el,i)=>{var r = s.slice(); r.splice(i,1); return Number( r.join(''))}))
}


// ЗАДАЧА №8 Equal Sides Of An Array

const options = [{ label: "" }, { label: "123" }];
const modified = options.filter((el) => el.label.length).map((option, i) => ({ ...option, order: i }));
console.log(modified);


// ЗАДАЧА №9  Easy Balance Checking

// function balance(book) {
//   let arr = book.match(/[a-zA-z,0-9, ,.,\t\n\v\f\r]/g).join('').replace(/^/, 'Original_Balance: ').replace(/\s{2,}/g, '\n')
//   let arrN = arr.match(/\d+.\d+$/gm).slice(1)
//   let arrN1 = []
//   arr + 'Total expense  ' + (arrN.reduce((sum, current) => (+sum.toFixed(2) + +current), 0)).toFixed(2) +
//   '\nAverage_expense  ' + (arrN.reduce((sum, current) => (+sum.toFixed(2) + +current), 0) / arrN.length).toFixed(2)
//   let arr3 = arr.match(/\d+.\d+$/gm).slice(1).reduce(function(sum, item) {
//   arrN1.push(sum);
//   return (+sum - +item).toFixed(2);
// }, +arr.match(/\d+.\d+$/gm)[0]);

//   arrN1.push(arr3)
//   arrN1.splice(0,1)
//   let arr4 = arr.match(/.+\n/g).map(item => item.trim())
//   let arr5 = arrN1.map((item, index, arr)=> arr4[index+1] + ' Balance ' + item + '\n').join('')
//   let result = (arr5.replace(/^/, arr.match(/.+\n/))+ 'Total expense  ' + (arrN.reduce((sum, current) => (+sum.toFixed(2) + +current), 0)).toFixed(2) +
//   '\nAverage_expense  ' + (arrN.reduce((sum, current) => (+sum.toFixed(2) + +current), 0) / arrN.length).toFixed(2))
  
//   return(result.replace(/\n/, '\r\n'))

// }



// ЗАДАЧА №10  Birthday I - Cake


function findTallestCandleCount(candles){
    
  let max = 0, count = 0

  for (let candle of candles) {
      if (candle > max) {
          max = candle
          count = 1
      } else if (candle === max){
          count++
      }
  }

  return count;
}

// ЗАДАЧА №11 Element equals its index ---



// ЗАДАЧА №12 Valid Parentheses


function validParentheses(parens){
  var indent = 0;
  
  for (var i = 0 ; i < parens.length && indent >= 0; i++) {
    indent += (parens[i] == '(') ? 1 : -1;    
  }
  
  return (indent == 0);
}


// ЗАДАЧА №13 Evaluating prefix Polish notation


function isOperand(c)
{
    if (c.charCodeAt() >= 48 && c.charCodeAt() <= 57)
        return true;
    else
        return false;
}

function evaluatePrefix(exprsn)
{
    let Stack = [];

    for (let j = exprsn.length - 1; j >= 0; j--) {

        if (isOperand(exprsn[j]))
            Stack.push((exprsn[j].charCodeAt() - 48));

        else {
            let o1 = Stack[Stack.length - 1];
            Stack.pop();
            let o2 = Stack[Stack.length - 1];
            Stack.pop();

            switch (exprsn[j]) {
            case '+':
                Stack.push(o1 + o2);
                break;
            case '-':
                Stack.push(o1 - o2);
                break;
            case '*':
                Stack.push(o1 * o2);
                break;
            case '/':
                Stack.push(o1 / o2);
                break;
            }
        }
    }

    return Stack[Stack.length - 1];
}


// ЗАДАЧА №14 RLE

const runLengthEncoding = function(str){
  const res=[];
  let counter=1;

  for (let i=0;i<str.length+1;i++){
    if(str[i]!==str[i+1]){
      res.push([counter,str[i]]);
      counter=0;
    }
    ++counter;
  }
   
  return res; 
}


// ЗАДАЧА №15 Is a number prime

function isPrime(num) { 
  if (num < 2) return false;  
  for (var i=2; i<num; i++) {
  if (num % i == 0) {  
  return false;}}  
  return true;  
}


// ЗАДАЧА №16 Zero-plentiful Array


function zeroPlentiful(arr){
  let arr1 = arr.join('').match(/0000/g)
  if (arr1) return(arr1.length)
    else return (0)
}


//ЗАДАЧА №17 Kebabize

function kebabize(str) {  
  return str.replace(/[0-9]/g, '').split(/(?=[A-Z])/).join('-').toLowerCase()  
  }

// ЗАДАЧА №18 Word a10n (abbreviation)


function abbreviate(string) {
  return string.replace(/\w{4,}/g, function(w) { return w[0] + (w.length - 2) + w[w.length - 1] });
}

//ЗАДАЧА №19 IP Validation

function isValidIP(str) {
  console.log(str);
    return /^(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/.test(str);
  }

// ЗАДАЧА №20 String incrementer


function incrementString(input) {
  var splits = input.split(/(\d+)$/),
  num = 1;
  if (splits[1] !== undefined){
     num = parseInt(splits[1]) + 1;
  }
  return splits[0] + num;
}

//ЗАДАЧА №21 String insert values

const
    object = { first_name: 'Jack', age: 30 },
    string = 'Hi dear {{first_name}}, your age is {{age}}',
    result = string.replace(/\{\{([^\}]+)\}\}/g, (_, k) => object[k]);

console.log(result);