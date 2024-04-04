 // 1. ixtiyoriy array yarating va uning ichidagi juft va toq sonlar nechtaligini toping


// let arr = [3, 4, 5, 6, 7, 8, 9, 10, 2, 11, 75]
// let juftSon = 0
// let toqson = 0 
// for (let i = 0; i < arr.length; i++) { 
//     if (arr[i] % 2 === 0) { 
//         juftSon++;
//     } else { 
//         toqson++;
//     }
// }
// console.log("Array ichidagi juft sonlar soni: " + juftSon);
// console.log("Array ichidagi toq sonlar soni: " + toqson);

// 2.ixtiyoriy array yarating va uning ichidagi juft va toq sonlar yigindisini toping
//  va promt da kiritilgan son bilan array ichidagi sonlar yigindisi o'rtasidagi farq ni toping

// let arr = [5, 8, 3, 6, 12, 9, 10, 11, 12]

// let juftyigindi = 0
//  // let toqyigindi = 0

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 === 0) {
//         juftyigindi += arr[i];
//     } else {
//         toqyigindi += arr[i];
//     }
// }
// let kiritilganson = parseInt(prompt("Ixtiyoriy son kiriting:"));

// let farq = Math.abs(kiritilganson - (juftyigindi - toqyigindi));

// console.log("Juft sonlar yig'indisi: " + juftyigindi);
// console.log("Toq sonlar yig'indisi: " + toqyigindi);
// console.log("Kiritilgan son bilan array ichidagi sonlar yig'indisi o'rtasidagi farq: " + farq);



//3. foydalanuvchi 2 ta son kiritadi va shu 2 ta so oralig’idagi
//  juft sonlar yig’indisini chiqaruvchi algaritm tuzing faqat
//  1- son 2- son dan kichikligini tekshiring

// let son1 = parseInt(prompt("Birinchi sonni kiriting:"));
// let son2 = parseInt(prompt("Ikkinchi sonni kiriting:"));

// if (son1 < son2) {
//     if (son1 % 2 === 0) {
//         console.log("Juft son " + son1);
//     } else {
//         console.log(son1 + " - Juft son emas");
//     }
// } else if (son1 > son2) {
//     if (son2 % 2 === 0) {
//         console.log("Juft son " + son2);
//     } else {
//         console.log(son2 + " - Juft son emas");
//     }
// } else {
//     console.log("Kiritilgan ikki son teng");
// }

// 5.object ni key larini va value larini alohida array olib chiqib beradigan
//  functionlar yarating va key uchun alohida function


// function x(obj){
//     return Object.keys(obj);
// }
// function y(obj) {
//     return Object.values(obj);
// }

// let obyekt = {
//     nom: "Ruslan", 
//     yosh: 22,
//     manzil: "Samarqand"
// }
// let keylar = x(obyekt);
// console.log("Obyekt keylari: ", keylar);

// let valuelar = y(obyekt);
// console.log("Obyekt valuelari:", valuelar);

// 6.N ta element dan iborat bo’lgan array yarating va arraydagi eng katta va eng kichkina sonlar
//  o’rnini almashtiring: arr = [1, 3, 2, 0, 4, 5], result = [1,3,2,5,4,0]

// function almashtir(arr) {
//     let engKattason = arr.indexOf(Math.max(...arr));
//     let engKichikson = arr.indexOf(Math.min(...arr));
  
//     let temp = arr[engKattason];
//     arr[engKattason] = arr[engKichikson];
//     arr[engKichikson] = temp;

//     return arr;
// }

// let arr = [1, 3, 2, 0, 4, 5];

// let result = almashtir(arr);

// console.log("Natija:", result);


// 7.N natural son berilgan. Dastlabki n ta toq sondan tashkil topgan array qaytaruvchi getInitialOdds(n) nomli function tuzing 
// input: 3
// output: [1,3,5]


// function getInitialOdds(n) {
//     var result = [];
//     for (var i = 1; i <= n * 2; i += 2) {
//         result.push(i);
//     }
//     return result;
// }

// var n = parseInt(prompt("Natural son kiriting:"));

// var result = getInitialOdds(n);

// console.log("Natija:", result);


// 8.nums = [2,7,11,15], target = 9 => ixtiyoriy array va biron bir target nomli o'zgaruvchi olinsin. Array ichidagi 
// sonlar yig'indisi target ga teng bu lgan sonlarni index si topilsin
// Misol uchun 2 va 7 soni yig'indisi 9 ga teng, masala sharti mana shu 2 va 7 soni indexi console ga chiqarilsin


// function yigindisiTengSonlar(nums, target) {
//     var indekslar = [];

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 indekslar.push(i);
//                 indekslar.push(j);
//             }
//         }
//     }
//     return indekslar;
// }

// let nums = [2, 7, 11, 15];

// let target = 9;

// let indekslar = yigindisiTengSonlar(nums, target);

// if (indekslar.length > 0) {
//     console.log("Misol uchun indekslar:", indekslar);
// } else {
//     console.log("Berilgan massivda yig'indisi target ga teng bo'lgan ikki son topilmadi");
// }



// 9.Ixtiyoriy n ta element dan iborat bo’lgan array yarating va uning ichidagi dublicate bo’lgan item larni o’chiring:
// let arr = [1, 3, 2, 2, 3 ] ⇒ 2 va 3 1 martadan ko’p ishtirok etgani uchun ularni o’chirish kerak
// natija ⇒ [1,2,3]


// function kopsonlarniochir(arr) {
//     let yangiArr = [];
//     let dublikatlar = {};

//     for (let i = 0; i < arr.length; i++) {
//         if (!dublikatlar[arr[i]]) {
//             yangiArr.push(arr[i]);
//             dublikatlar[arr[i]] = true;
//         }
//     }
//     return yangiArr;
// }

// let arr = [1, 3, 2, 2, 3];

// let natija = kopsonlarniochir(arr);

// console.log("Natija:", natija);

// 10. n natural soni berilgan 2 sonining dastlabki n ta darajasidan tashkil topgan arrayni qaytaruvchi getLevel(n) nomli function tuzing
// n: 4 
// result : [2,4,8,16] 2 ning 1-darajasidan boshlanishi kerak va 4-darajasigacha
// n: 5
// result: [2,4,8,16,32] 2 ning 5-darajasi 32 bo’ganligi uchun 32 da tugayapti


function getLevel(n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(Math.pow(2, i));
    }
    return result;
}

let n = parseInt(prompt("Natural son kiriting:"));

let result = getLevel(n);

console.log("Natija:", result);
