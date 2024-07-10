// 1. argument sifatida berilgan sonning nechchi xonali ekanligini aniqlaydigan function tuzing 


// let result;
// const findDigit = (n) => {
//     result = n.toString().length
//     return `${result} xonali son`
// }   
// console.log(findDigit(12));



// 2. argument sifatida berilgan stringda nechta son qatnashganligini aniqlaydigan function tuzing


// let str = "salom123"
// function findNums(n) {
//     let count = 0
//     let result
//     for (let i = 0; i < n.length; i++) {
//         result = isNaN(n[i])
//         if (result == false) {
//             count++
//         }  
//     }
//     console.log(count,"ta son bor");
// }
// findNums(str)



//  3. argument sifatida berilgan stringda nechta  a 
// harfi ishtirok etganini aniqlaydigan function tuzing


// let str = "salom"

// const findA = (n) => {
//     let count = 0
//     for(let find of n) {
//        if (find == "a" || find == "A") {
//         count++
//        }
//     }
//     console.log(count);
// }
// findA(str)



// 4. Gapdagi eng uzun va eng qisqa so’zlarni aniqlab 
// {minWord: “…”, maxWord: “….”} qiymat qaytaruvchi minMaxWord() nomli 
// function yarating Input: “Men dasturlash kursida o’qiyman” 
// Output: {minWord: “Men”, maxWord: “dasturlash”}


// function minMaxWord(str) {
//     let arr = str.split(" ")

//     let min_word = arr[0]
//     let max_word = arr[0]

//     for(let len of arr) {
       
//         if (len.length == min_word.length) {
//             min_word = len
//         }
//         if (len.length == max_word.length) {
//             max_word = len
//         }
        
//         return  {minWord:min_word, maxWord:max_word}   
//     } 
// }
// let result = (minMaxWord("men daturlash kurisda oqiyman"));
// console.log(result);



// 5. Stringlar arrayi berilgan. Shunday object hosil qilinki o’sha object kalitlari array elementlaridan va qiymatlari ularning uzuligindan iborat bo’lsin Input: [”text”, “world”, “laptop”] Output: {”text”: 4, “world”: 4, “laptop”: 6}

// let arr =  ["text", "salomlar", "laptop"]

// let obj = {}
// for(let val of arr) {
//     obj[val] = val.length
// }   
// console.log(obj);


// 7. O'rta arfimetigini topish

// let arr = [1,2,3,4,5]
// let total = 0
// for (let i = 0; i < arr.length; i++) {
//     total += arr[i]
// }
// total /= arr.length
// console.log(total);