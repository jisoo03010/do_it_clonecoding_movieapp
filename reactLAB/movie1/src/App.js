function App2() {
  return (
      <span>
          <h1>Hi App2 ~!</h1>
      </span>

  );
}
function App() {
  // return <div className="App"/> ;
  //순수 html은 아님
  //return 안에 들어간 태그들은 html태그는 아니고 createElement로 html을 만드는 것이다.
  return (
    <div> 
      <h1>Hello!!</h1>
      <App2 />
    </div>
  )
 
  
}

export default App;
