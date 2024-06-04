// 검색창
// 클래스 탈부착

// search-btn(데스크탑 메뉴 돋보기모양) 클릭 했을 때/ 
// search-close-btn(검색창 닫힘x버튼) 클릭 했을 때 search(모바일 검색창)한테 
// is-open(검색창search에 css에서 준 가상클래스) class remove (검색창)
// function 함수이름 (){}

let search = document.querySelector('.search');
let searchOpenBtn = document.querySelector('.search-btn')
let searchCloseBtn = document.querySelector('.search-close-btn')

// console.log(search, searchOpenBtn, searchCloseBtn)

// 먼저 검색창 search에 클래스를 부여 해준다.
function searchOpen(){
  // css에서 search 가상 클래스명 is-open 부여하고 display:none한 상태
  // search한테 is-open class add (검색창 열기)
  // 대상.classList.add('클래스명')
  search.classList.add('is-open')
}

// search-btn 클릭했을 때
searchOpenBtn.addEventListener('click', searchOpen)


function searchClose(){
  // search한테 is--open class remove (검색창 닫기)
  search.classList.remove('is-open');
}

// search-close-btn 클릭했을 때 클릭이벤트 추가
searchCloseBtn.addEventListener('click',searchClose);



// 사이드바
// sidebarOpen 함수 생성
// sidebar active class add / averlay active class add
let sidebar = document.querySelector('.sidebar');
let sideOpenBtn = document.querySelector('.sidebar-open-btn');
let overlay = document.querySelector('.overlay');

function sidebarOpen(){
  // sidebar active class add
  // overlay active class add
  sidebar.classList.add('active');
  overlay.classList.add('active');
}

// sidebar-open-btn 클릭 했을 때 클릭 이벤트 추가
 sideOpenBtn.addEventListener('click',sidebarOpen);

 function sidebarClose(){
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
 }

  overlay.addEventListener('click', sidebarClose);