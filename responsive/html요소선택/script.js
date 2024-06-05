// html #hello 찾아오기
// .querySelector('.클래스이름')
let hello = document.getElementById('hello');
let changeBtn = document.getElementById('txt-change-btn');

console.log(hello,changeBtn);

hello.innerHTML = '안녕?';
hello.style.color = 'red';

// changeBtn 클릭 했을 때, html 'Hello', color -> blue
changeBtn.addEventListener('click', () => {
  hello.innerHTML = 'Hello';
  hello.style.color = 'blue';
})

// querySelectorAll 중복클래스를 모두 찾는다.
let items = document.querySelectorAll('.item');
// document.querySelector('.item').style.color = 'blue';
// console.log(item);

// item.style.color = 'blue';

// Vanilla Js
// 중복클래스인 item을 모두 가져오지 않는다.
// item의 전체클래스에 적용할 때도 []번호로 일일히 지정해야 한다.
// document.querySelectorAll('.item')[0].style.color = 'blue';
// document.querySelectorAll('.item')[1].style.color = 'blue';
// document.querySelectorAll('.item')[2].style.color = 'blue';

// // j-Query
// // 제이쿼리cdn html에서 head태그안에 연결 후
// // $('.') 중복클래스 item을 모두 가져온다. 
$('.item').css('color','red');



// 반복문 for
//  for(let i = 0; i <= items.length; i++) {
//   items[i].innerHTML = 'for 반복문';
//   // console.log(i)
// }


// 배열 반복 forEach
// items.forEach((item)=> {
//   // console.log(item)
//   item.innerHTML = '반복문'
// })

//  자료형
// number
let num = 5;
// string ''는 문자로 인식
let num1 = '5';
let txt = '안녕하세요!';

//  숫자, 문자, 변수 따옴표안에 넣지 않는다.
//  문자열은 따옴표 안에
// "typeof"는 주어진 값의 데이터 형식을 판별하는 데 사용된다.
console.log(num) 
console.log(typeof(num))
console.log(num1)
console.log(typeof(num1))

console.log(typeof('txt'));

// 변수는 변수 그대로 입력해야함
console.log(txt)
console.log(typeof(txt));

// array[배열], object{}
// 여러 자료를 한번에 담을 때
// array : [] 
//  object : {}

let arr = ['yejin', 3543, 'ㅎㅎㅎㅎㅎ', txt]; 
// console.log(arr)

// 총 length는 4개이고 인덱스 번호는 [0],[1],[2],[3] 총 4개이다.
// 배열에서 원하는 []인덱스번호 가져올수 있다.
console.log(arr[1])

// {key : value}
let tel = 01044524844;
let obj = {
  이름 : 'yejin',
  전화 : tel,/* 01044524844, */
  주소 : '대전광역시'
}

// console.log(obj)

// .key값을 적어주면 원하는 value값 가져올 수 있다. 콘솔창에서 -> yejin
// console.log(obj.이름)
console.log(obj.주소)
console.log(obj)


let hi = '안녕하세요 저는';
let name = '이예진';

// 변수, 문자열 
// 1. 변수 + 변수 또는 문자열
// 2. `` backtick 은 ${변수명}
let my = hi + name + '입니다';
let my1 = `안녕하세요 저는 ${name} 입니다`;


// 문자열
// ''
// ""
// ``
// console.log(hi,name)
console.log(my)
console.log(my1)
console.log(typeof(my1))



// 매개변수(parameter)로 이름값
function info(myName){
  console.log(`안녕하세요 저는 ${myName} 입니다`);
}

info('아무개');

// 배열(array), array | [], {}
// 배열 원하는 값 배열이름[num] / 배열의 시작은 0부터
// object 원하는 값 / 오브젝트 이름.키값
// key : value, key : value
// 여러 값을 입력화고 싶을 때는 ,로 구분한다.

// 변수, 문자열
// 문자열 : '', "", `` (따옴표,큰따옴표, 백틱)
// 문자열 사이에 변수 바인딩하는 방법 두가지
//  + : 변수 + '문자열'
// '안녕' + name(변수) + '나는' + age(변수)
// `` : `안녕 ${name} 나는 ${age}`

// parameter(매개변수)
// 함수를 호출할 때 함수에 넘겨주는 값