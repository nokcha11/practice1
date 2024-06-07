
// select option을 for문으로 콘솔창에 나오게
let year = document.querySelector('.year');
// 한국 표준시 (korea standard time)
// new Date();는 한국표준시를 받아온다는 뜻
// js 한국표준시

let kst = new Date();
console.log(kst)
let getYear = kst.getFullYear(); /* 년도 */
// 월은 컴퓨터 상에서 0부터 시작이라서 +1을 해줘야 한다!
let getMonth = kst.getMonth() + 1; /* 월 */
let getDate = kst.getDate(); /* 일 */
console.log(getYear, getMonth, getDate)


// getYear 현재년도
for(let i = 1920; i <= getYear; i++) {

  // console.log(i);

  // 첫번째 방법
  // createElement 태그를 만들때
  // let options = document.createElement('option');
  // options.innerHTML = i;
  // .appendChild : 부모노드의 자식노드 목록에 추가
  // year.appendChild(options);

  // console.log(options)


  // 두번째 방법 -가장 많이 쓰는 방법!
  let options = `<option>${i}</option>`;
  // afterbegin, beforebegin, afterend, beforend
  // 추가하고 싶은 곳insertAdjacentHTML('위치',추가할요소)
  year.insertAdjacentHTML('beforeend', options);

 
  // 세번째 방법
  // j-query
  $('.year').append('<option>'+ i +'</option>');
}