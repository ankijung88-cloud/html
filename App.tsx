// import User from './components/User'

// function App() {
// const userObj = {
//   name: '철수',
//   age: 20,
// }
// const clickHandle = () => {
//   console.log('clicked')
// }
//   return <User userObj={userObj} clickHandler={clickHandle} />
// }

// export default App
//구조분해할당 - 객체 또는 배열의 속성을 추출하여 변수에 할당한다.

import React from 'react'

const App = () => {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e)
  }
  return (
    <>
      <button onClick={clickHandler}>클릭하세요</button>
    </>
  )
}

export default App
//화살표 함수란 특정한 상황에서만 가등되어야 할 때
//일반 함수 형태로 만들면 무조건 실행이 되버린다
//화살표 함수는 무조건 실행이 아니고 특정한 상황에서만 가동할 수 있도록 하는 것이다.

//랜더링 :웹브라우저가 홤변을 처음부터 다시 그림다. 예) 브라우저재실행 F5
//한 하나라도 변화가 있어야만 랜더링을 다시 한다.
