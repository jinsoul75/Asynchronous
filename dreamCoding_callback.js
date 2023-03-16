"use strict"; // 자바스크립트에서 비상식적인 일이 일어나지 않게 막아준다!!!!!

console.log("순");
console.log("서");

setTimeout(() => {
  console.log("뿅!");
}, 2000);

console.log("대");
console.log("로");

setTimeout(() => {
  console.log("뿡!");
}, 1000);
//당장 순서대로 일어나지 않고 n초 후에 실행해줘! => 비동기적

console.log("?");
//console.log는 호출 순서대로 일어난다 => 동기적

//Synchronous callback
function scFunc(print) {
  print();
}
scFunc(() => console.log("it is a Synchronous callback function"));

//Asynchronous callback
function acFunc(print, timeout) {
  setTimeout(print, timeout);
}

acFunc(() => console.log("it is a Asynchronous callback function"), 500);
