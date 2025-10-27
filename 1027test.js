// var name = prompt("이름 입력");
// var은 변수(여러가지 다양함 정수int 실수float 문자character 문자열string) num은 변수명 변수이름을 나타낸다
// console.log(name + "님 환영해요.");
// 변수의 첫글자로 숫자를 사용할 수 없다. 변수는 만들고 싶은 만큼 만들수 있다.
// 두 단어 이상으로 결합을 할때 반드시 두번째 단어의 첫 문자만 대문자 이고 나머지는 모두 소문자이다
// 변수는 자세하게 기술해야함
// var=>let로 바꾸어 사용
// 실수 >>>>>부동소수점...실수의 계산 결과는 부정확하다
// 논리형 true false
// 부등호 등호 >>>>> 의 결과는 항상 true/false로 나타난다
// undefined >>>> 아직 값을 지정하지 않았다
// null >>> empty
// 객체 object : key와 값이 세트로 구성되어있다.
// array배열 : 순서대로 진행한다. 순서를 어긋나면 안됨
// / 나눗셈 %나머지 **거듭제곱 3**2=9
// console.log(div예); 개발자도구에 표기
// ++ = 1증가, -- = 1감소 : 앞에 위치한것과 뒤에위치한 것이 다르다
// 앞에 붙으면 1증가 하여 입력, 뒤에 붙으면 값을 그대로 적용하고 추후에 증가된다
// 등호 좌우측에 같은 변수가 있다 let num = 90; let num = num + 190; let num += 190; -,*,/ 동일적용할수있다
// "!" 같지않다.
// and = && , or = || , not = !
// ~~~~ ? ~~~~: ~~~;  조건 ? 참 ? 거짓;  모 아니면 도 의 경우에만 적용한다.- 삼항연산자
// 연산자 우선 순위

// let num1 = 100;
// let num2 = 79;

// if (num1 >= 90 && num2 >= 80) {
//   console.log("A");
// } else {
//   console.log("F");
// }

// if (userId === correctId) {
//   console.log("아이디 확인");
//   if (userPw === correctPw) {
//       console.log("로그인 성공. 환영합니다.")
//   }
//   else {
//       console.log("비밀번호가 틀립니다.")
//   }
// }

// else {
//   console.log("아이디 재입력 하세요")
// }

// let food = "melon";

// switch (food) {
//   case "melon":
//     console.log("과일");
//     break;
//   case "apple":
//     console.log("과일");
//     break;
//   default:
//     console.log("야채");
// }

let month = 7;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log(31);
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log(30);
    break;
  case 2:
    console.log(28);
  default:
    console.log("wrong");
}
