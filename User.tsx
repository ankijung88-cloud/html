// const User = (props: {
//   userObj: { name: string; age: number }
//   clickHandler: () => void
// }) => {
const User = ({
  userObj,
  clickHandler,
}: {
  userObj: { name: string; age: number }
  clickHandler: () => void
}) => {
  return (
    <>
      <p>이름: {userObj.name}</p>
      <p>나이: {userObj.age}</p>
      <button onClick={props.clickHandler}>클릭</button>
    </>
  )
}

export default User
