import React from 'react';

function App2(){
  
  //count, setCount를 state안에 넣겠다는 것 , count의 값은  0인것임 
  //useState라는 함수를 훅이라고 한다,
  
  //중요함 !! =========================================
  //"훅"이라고 "라이프 사이클 훅"이라고도 하고, 특정한 시점에 호출이 되어지는 것을 의미한다.
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("김지수");
  const add = ()=>{
    setCount(currentCount=>currentCount+1);
  }
  const minus = ()=>{
    setCount(currentCount=>currentCount-1);
  }
  console.log("render 호출됨")
  return (

    <div>
      <h1> {name}의 점수는 : {count}</h1>
      <button onClick={add}>Add</button>
      <button onClick={minus}>Minus</button>
    </div>
  )
}
export default App2;