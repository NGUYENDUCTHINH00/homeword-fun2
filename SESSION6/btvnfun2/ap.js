// B1 : 
// function tong(){
//     let a = Number(prompt (" Hãy nhập số thứ 1"));
//     let b = Number(prompt (" Hãy nhập số thứ 2"));
//     let c = a + b
//     console.log(c);
//     retunrn;
// };
// tong();

// B2 :
// function le() {
//     let arr = [1, 2, 3, 4, 5, 6];
//     let a = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             a = a + arr[i];
//         }
//     }
//     console.log(a);
//     return;
// }
// le();

// B3 : 
// function so(){
//     let a = Number(prompt("Hãy nhập số 1"));
//     let b = Number(prompt("Hãy nhập số thứ 2"));
//     if(a <= b){
//         console.log(a+b);
//     }
//     else{
//         console.log(`${a} > ${b}`);
//     }
//     return;
// }
// so();

// B4 :

// function addNumbers() {
//   firstNum = 4;
//   secondNum = 8;
//   result = firstNum + secondNum;
//   alert(result);
//   return result;
// }
// result = 0;
// alert(result);
// result = addNumbers();

// B5 :
// let foot = Number(prompt("input length in foot"));
// function footToMeter(foot) {
//   result = foot * 0.305;
//   console.log(result);
//   return result;
// }
// footToMeter(foot);

// let meter = Number(prompt("input length in meter"));
// function meterToFoot(meter) {
//   result = meter * 3.279;
//   console.log(result);
//   return result;
// }
// meterToFoot(meter);

// B6:
// let number = Number(prompt("moi nhap so bat ki de kiem tra"));
// function isPrime(number) {
//   let state = true;

//   if (number < 2) {
//     state = false;
//   } else if (number === 2) {
//     state = true;
//   } else if (number % 2 === 0) {
//     state = false;
//   } else {
//     for (let i = 3; i < number - 1; i = i + 2) {
//       if (number % i === 0) {
//         state = false;
//         break;
//       }
//     }
//   }
//   if (state === true) {
//     console.log(`${number} la so nguyen to`);
//   } else {
//     console.log(`${number} ko phai so nguyen to`);
//   }
//   return state;
// }

// let a = "";
// for (let i = 0; i < 100; i++) {
//   if (isPrime(i) === true) {
//     a = a + "," + i;
//   }
// }
// console.log(a.replace(",", ""));