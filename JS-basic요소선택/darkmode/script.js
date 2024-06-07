// mode-btn class안 텍스트를 가져온다.
// 텍스트가 Dark일 경우 (조건)

let modeBtn = document.querySelector('.mode-btn');
let count = 0;

// function 함수정의해준다 (){}
function modeToggle() {

  // 요소의 내부 HTML을 가져와 modeTxt 변수에 저장
  let modeTxt = modeBtn.innerHTML;
  let header = document.querySelector('header');

  // 두가지 모두 같은 결과를 만들지만
  // count += 1; 아 방법을 제일 많이 쓰고 편하다. 그냥 외우기!
  count = count + 1;
  count += 1;
  console.log(count);
  // 1,3,5,7 => darkmode
  // 2,4,6,8 => lightmode
  if(count % 2 == 0) {
    // 여기서의 this  mode-btn요소
    this.innerHTML = 'Dark';
    header.classList.remove('dark');
  } else {
    this.innerHTML = 'Light';
    header.classList.add('dark');
  }
 
  if(modeTxt == 'Dark') {
    // 텍스트를 'Light'로 바꾼다.
    modeBtn.innerHTML = 'Light';
    // header 태그에 dark class add
    header.classList.add('dark');
  } else {
    // 텍스트를 'Dark'로 바꾼다.
    modeBtn.innerHTML = 'Dark';
    // header 태그에 dark class remove
    header.classList.remove('dark');
  }
}

// mode-btn 클릭하면 (클릭 이벤트) 
modeBtn.addEventListener('click', modeToggle);

