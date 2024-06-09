
let year = document.querySelector('.year');
let month = document.querySelector('.month');
let date = document.querySelector('.date');

//한국표준시 (Korea Standard time)
// new는 객체를 생성하는 역할 Date 객체
let kst = new Date();
console.log(kst)

let getYear = kst.getFullYear(); 
let getMonth = kst.getMonth() + 1; /* 월+1 */
let getDate = kst.getDate();
console.log(getYear, getMonth, getDate)

for(let i = 1920; i <= getYear; i++) {
  let options = `<option>${i}</option>`;
  year.insertAdjacentHTML('beforeend', options);
}

 // 월
for (let j = 1; j <= 12; j++) {
  let options = `<option>${j}</option>`;
  month.insertAdjacentHTML('beforeend', options);
}

// 일
for (let k = 1; k <= 30; k++) {
  let options = `<option>${k}</option>`;
  date.insertAdjacentHTML('beforeend', options);
}






















// let box = document.querySelector('.box');

// let txt = `
//  <h1>안녕하세요</h1>
//  <p>태그 추가</p>
// `

// box.insertAdjacentHTML('afterbegin', txt);