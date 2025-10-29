// 5명의 학생에 대한 성적을 처리하려고 한다. 한 과목씩 응시하였다고 가정한다.

// const scosFor = [85, 92, 78, 65, 95];
// let totFor = 0;
// const stuCntFor = scosFor.length;

// for (let i = 0; i < stuCntFor; i++) {
//   totFor += scosFor[i];
// }

// const avgFor = totFor / stuCntFor;

// console.log(`총점: ${totFor}`);
// console.log(`평균: ${avgFor.toFixed(1)}`);

// const scosWhile = [85, 92, 78, 65, 95];
// let totWhile = 0;
// const stuCntWhile = scosWhile.length;
// let iwhile = 0;
// // 1씩 늘어난다 카운터변수

// while (iwhile < stuCntWhile) {
//   totwhile += scosWhile[iwhile];
//   iwhile++;
// }

// const avgwhile = totwhile / stuCntWhile;
// console.log(`총점: ${totWhile}`);
// console.log(`평균: ${avgWhile.toFixed(1)}`);

// while문은 한번도 실행을 안할수도 있으나 do while문은 무조건 1번은 실행을 한다

// const scosDoWhile = [85, 92, 78, 65, 95];
// let totDoWhile = 0;
// const stuCntDoWhile = scosDoWhile.length;
// let iDowhile = 0;

// do {
//    totDoWhile += scosDoWhile[iDowhile];
//    iDoWhile++;
// } while(iDoWhile < stuCntDoWhile);

// const avgDoWhile = totDoWhile / stuCntDoWhile;

// console.log(`총점: ${totDoWhile}`);
// console.log(`평균: ${avgDoWhile.toFixed(1)}`);

// for (let i = 2; i < 10; i++){
//   for (let j = 1; j < 10; j++) {
//     console.log(`${dan} * ${num} = ${dan * num}`);
//     // '${}' 중괄호 안에있는 것은 값을 의미한다
//   }
// }

// 내장함수 Built-in(fx), 다른 사람이 만든 함수, 내가 만든 함수...함수는 이렇게 3가지타입으로 정해진다

// const toast = function post() {
//   console.log("HIHI");
// };

// console.log(toast);

// toast();

// 자바스크립트에서 함수를 의미하는 코드임 function 함수이름(매개변수);
// 매개변수는 개발자의 입장에서 사용하는 단어이고 사용자입장에서는 인수라고 명명한다.
// 함수란 미리 만들어 놓은 기능을 의미한다
// 함수 내부에는 계산식을 포함하여 다양한 코드가 들어간다
// 함수 내부를 구성하는 코드는 개발자가 의도한 그 어떤 내용이라도 들어간다

// 화살표함수 - arrow function

// const post = () => {};
// (매개변수)이고 매개변수가 없는 함수는 결론적으로 해당하는 기능을 실행할 때 별도의 재표가 필요없다
// (매개변수)이고 매개변수가 있는 함수는 결론적으로 해당하는 기능을 실행할 때 별도의 재표가 필요하다

// 두 수의 덧셈 결과를 출력하는 함수 만들기

// const add = (a, b) => {
//   let tot = a + b;
//   console.log(a, b, tot);
// };

// add(17, 29);

// return - Stop 뜻

// const add = (a, b) => {
//   return a + b;
// };

// let result = add(17, 29);

// 함수를 만들면 전역적 개념으로 만들어진다
// 전역이라는 의미는 프로그램 종료되기 전까지 계~~속 메모리에 상주한다
// 프로그램이 종료되는 시점에서 사라진다는 의미이다

// const init = function(){
//   console.log("HI");
// }

// init();

// (function init() {
//   console.log("hi")
// })();

// 함수이름이 없는 즉시 실행

// (function () {
//   let message = "안녕하세요";
//   console.log(message);
// })();

// (function (name) {
//   console.log(`안녕하세요, ${name}`);
// })("홍길동");

// const result = (function () {
//   const a = 10;
//   const b = 20;
//   return a + b;
// })();

// console.log(`값: ${result}`);
// 즉시실행함수는 프로그램실행이 되다가 걸리면 무조건 실행이된다.

// 객체: key & value
//      개발자가 마음대로 붙일 수 있다
// 배열: index & value

// const person = {
//   name: "홍길동",
//   age: 20,
// };

// console.log(person["name"]);
// console.log(person["age"]);

// const pw = "134";
// pw라는 변수는 문자열 형태이다
// 문자열 형태라는 의미는 String라는 객체(틀)을 기반으로 찍어낸 붕어빵이다.
// 원본 틀 내부에 속성과 메서드가 있다면 그 속성과 메서드를 그대로 사용할 수 있다.

// if(pw.length < 4);{

// }

// String 객체-문자/문자열 형태의 자료를 원본에서 찍어내었기 때문에 원본이 소유하고 있는 속성/메서드를 그대로 이용할 수 있다.

// const email = "test@naver.com";

// if (email.includes("@") === false) {
//   console.log("이메일 형식이 틀립니다");
// }

// if (email.indexOf("@") <= -1) {
//   console.log("이메일 형식이 틀립니다");
// }

// forEach(): 배열의 각각의 칸을 처음부터 마지막까지 하나씩 순회하면서 작업을 진행한다.

// const fruits = ["사과", "오렌지", "배"];

// fruits.forEach(function (fruit) {
//   console.log(fruit + "는 맛있어요!!!");
// });
// 배열의 모든 과일에 대해서, 각 과일 이름을 가지고 '맛있다'고 출력해라

// const arr = [10, 20, 30, 40];
// arr.forEach(function(v){
//   console.log(v);
// });

// console.log(arr);

// Date 객체

// const date = new Date();
//      인스턴스     클래스   로 불린다
// 원본 설계도에 다양한 속성과 메서드가 있는데
// 그 중에서 설계도 이름과 완벽하게 일치하는 메서드가있다
// 그 메서드를 "생성자"라고 한다 "설계도 대로 그대로 똑같이 만드는 기능을 가지고 있다"

const date1 = new Date("2022-10-05");
const date2 = new Date("2025-10-05");
const date3 = new Date();
