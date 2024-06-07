let box = document.querySelector('.box');

let txt = `
 <h1>안녕하세요</h1>
 <p>태그 추가</p>
`

box.insertAdjacentHTML('afterbegin', txt);