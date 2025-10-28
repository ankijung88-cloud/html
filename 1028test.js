// let score = 17;

// if (score <= 10) {
//   console.log("A");
// } else if (score <= 20) {
//   console.log("B");
// } else {
//   console.log("F");
// }

// if (아이디) {
//   if(비번) {

//   }
//   else {

//   }
// }
// else {
//   아이디 재입력 유도하기
// }

// 참 거짓
// 모든 코딩언어에서 0값은 무조건 false (2진수를 사용하기 때문), 1값은 true 로 인식한다
// let num = true;

// if (num) {
//   console.log("들어있다");
// } else {
//   console.log("없다");
// }

// let dayOfWeek = "월요일";

// let message;

// switch (dayOfWeek) {
//   case "월요일":
//     message = "피곤한 시작";
//     break;
//   case "일요일":
//     message = "놀자";
//     break;
//   default:
//     message = "잘못된 입력!!!";
// }

// console.log(message);
// 위 스위치 문으로 입력값을 후지정하는 것으로 값을 낼수 있게 만들수 있다

// 배열 Array = 변수와 배열은 다른개념이다 [0,1,2,3] 같은 종류의 값으로 구성되는 것이 기본모양이다.
// .log() .을 따르는것은 함수를 의미한다. .length()는 배열칸의 수량을 의미
// 모든 배열은 원본 틀에서 찍어내며 원본 내부에는 2가지가 들어있다. 변수와 함수 --변수: 값을 의미하고 함수는 기능을 의미한다
// 배열에서 합계는 더하기가 아니라 누적을 의미한다

// let fruits = [98, 100, 0];

// let last = fruits[fruits.length-1];

// console.log(fruits);

// 위 값은 0이 출력된다. fruits의 칸수는 3이고 2열의 last = fruits[2]가 되므로 last는 fruits의 3번째 칸(0=98,1=100,2=0)의 값을 추론하다.

// let score = [98, 100, 0];

// score[1] = 90;
// score[3] = 100;
// score[1]=100이지만 90으로 덮어씌운다는 의미의 코드  index 첨자
// score[3]은 0,1,2,3 이렇게 4번째방을 의미하지만 위에는 3개의 방만있다 이럴경우 4번째방이 추가된다 - 이것을 push라고 한다. 항상 마지막에 추가한다

// score.push(55);
// score.pop();
// score.pop();
// score.pop();
// pop은 마지막것을 빼낸다 pop()의 소괄호안에는 내용을 넣지 않는다
// console.log(score);

// let score = [98, 100, 0];

// score.reverse();
// sort는 가나다라 순서를 의미
// reverse는 반대로 배치   sort와 reverse는 값을 유니코드 값으로 변경하여 적용한다
// 배열에서 정렬(정/역)을 가동하면 자바스크립트에서는 배열 각 방의 내용을 무조건 문자(열)로 간주하여 사전식으로 비교한다
// console.log(score);

//키보드에서 A=65 B=66 C=67 을 의미

// 반복문 : 같은 동작을 여러번 자동으로 실행하는 것
// 1~10까지 정수의 합계: 55
// for(초기값; 조건식; 증감식) 1부터 10까짖 1씩 증가

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// } 이 방법으로 사용

// let score = [25, 100, 95, 100];
// let tot = 0;
// // 누적을 사용하는 변수는 시작전 청소를 한다. 값을 0으로 만든다
// let avg;

// for (let i = 0; i < 4; i++) {
//   tot = tot + score[i];
// }

// avg = tot / score.length;

// console.log(avg);

// 5가지 과일이 들어가는 배열 만들기
// for문 필수 사용
// 5가지 과일 중에서1,3,5번재 과일만 출력하기

// let fruits = ["ap", "gp", "kw", "ph", "wm"];

// for (let i = 0; i < 5; i = i + 2) {
//   console.log(fruits[i]);
// }

// 중첩 for
// 밖이 한번바뀌면 안쪽은 전부 바뀐다

// let score = [
//   [90, 100],
//   [75, 86],
//   [55, 95],
//   [79, 100],
//   [96, 98],
// ];

// let tot = 0;
// let avg;

// for (let i = 0; i < 5; i++) { 시작, 종료, 증가조건
//   for (let j = 0; j < 2; j++) {
//     tot = tot + score[i][j];
//   }
// }

// console.log(tot);

// avg = tot / score.length;

// console.log(avg);

// while(종료조건){반복}

// 시작값
// let score = [100, 90, 80];
// let i = 0;
// let tot = 0;
// let avg;

// while (i < 3) {
//   tot = tot + score[i];
//   i++;
// }

// console.log(tot);

let counter = 0;
counter++;
while (true) {
  console.log(counter);
  if (counter >= 5) {
    break;
  }
}
