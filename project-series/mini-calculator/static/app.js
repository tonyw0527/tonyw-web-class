// 안하고 가기 아쉬운 코드 ㅎㅎ
// console.log('hello world');
// alert('hello world');

// 변수 선언 - 사용자가 input 요소를 통해 입력한 값들을 담을 곳
let num1 = null;
let num2 = null;
let result = null;

// 함수 선언 - input 요소에 입력된 값이 변경될 때마다 위에서 선언한
// 변수에 값을 업데이트해주는 역할
function updateNumber(e) {
  
  const id = e.target.id;
  const newNum = Number(e.target.value);

  // 조건문 if - input 요소의 id를 통해 각 input에 맡겨진 변수에 값을 저장
  if(id === 'num1') {
    num1 = newNum;
  } else {
    num2 = newNum;
  }

  // 어느 input에서 값 변경이 일어났는지, 현재 변수들에 저장된 값은 무엇인지 확인
  // 맥 기준 cmd + option + i 키를 누르면 나타나는 콘솔창에 아래에 작성한대로 값이 출력됨을 알 수 있다.
  console.log('선택된 input의 id', id);
  console.log('현재 num1 -', num1, 'num2 -', num2);
}

// 더하기 버튼을 눌렀을 때 두 변수의 값을 더해줌
// 또한 result_num이란 id를 가진 span 요소에 결과값을 출력하게 해준다.
function add(e) {

  // 더한 결과값을 result 변수에 저장한다.
  result = num1 + num2;

  // console.log(typeof num1)
  // console.log(typeof num2)
  // console.log(typeof result)
  console.log('num1과 num2를 더한 값', result);

  const result_num = document.getElementById('result_num');
  result_num.innerText = '더하기 결과값 ' + result;
}

const input1 = document.getElementById('num1');
input1.addEventListener('input', updateNumber);

const input2 = document.getElementById('num2');
input2.addEventListener('input', updateNumber);

const addButton = document.getElementById('add_button');
addButton.addEventListener('click', add)



// 과제 - 빼기, 곱하기, 나누기 만들기
// const strButton = document.getElementById('str_button');
// strButton.addEventListener('click', subtract)

// const mltButton = document.getElementById('mlt_button');
// mltButton.addEventListener('click', multiply)

// const divButton = document.getElementById('div_button');
// divButton.addEventListener('click', divide)


// function subtract(e) {

//   // 더한 결과값을 result 변수에 저장한다.
//   result = num1 - num2;

//   console.log('num1과 num2를 뺀 값', result);

//   const result_num = document.getElementById('result_num');
//   result_num.innerText = '뺄셈 결과값 ' + result;
// }

// function multiply(e) {

//   // 더한 결과값을 result 변수에 저장한다.
//   result = num1 * num2;

//   console.log('num1과 num2를 곱한 값', result);

//   const result_num = document.getElementById('result_num');
//   result_num.innerText = '곱하기 결과값 ' + result;
// }

// function divide(e) {

//   // 더한 결과값을 result 변수에 저장한다.
//   result = num1 / num2;

//   console.log('num1과 num2를 나눈 값', result);

//   const result_num = document.getElementById('result_num');
//   result_num.innerText = '나눗셈 결과값 ' + result;
// }