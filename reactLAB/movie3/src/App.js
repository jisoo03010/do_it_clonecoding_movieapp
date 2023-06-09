import React from 'react';
//function= 독립
//메서드 = 종속적
//this = 앱 객체 안에 값을 지정함
//onClick 주의 => 일반 html에서는 onclick()으로 하지만 jsx에서는 onClick으로 카멜기법을 사용한다.
// javascipt는 바인드가 되지 않음, 화살표 함수의 쓰임에 대해 검색해보자,,
// 1회성 state , local state, global state 사용 
// 대표적인 글로벌 state사용해야 하는 예제 : 투두 리스트 

//state는  db에서가져온 데이터로 추가적으로 무엇인가를 수행해야할때 사용하는것을 추구한다.
// 그것이 아니라면 대부분은 db 서버에서 가져오는것을 지향한다.
// 리액트 버전 16.2부터는 STATGE참조할 수 있게 해주었다.
class App extends React.Component{
  //React에서 Component를 생성할 때 state 값을 초기화하거나 메서드를 바인딩할 때 construcotr()를 사용합니다.
  constructor(props){
    super(props); //참조 변수
    console.log("constructor 호출됨")
  }

  componentDidMount(){
    console.log("componentDidMount 호출됨")
  }

  componentDidUpdate(){
    console.log("componentDidUpdate 호출됨")
  }
  

  //다른 페이지로 떠났을때 실행한다. 그래서 로그를 확인할 수 있는 방법이 없다.
  componentWillUnmount(){
    console.log("componentWillUnmount 호출됨")
  }

  state={
    count: 0,
    name : '김지수',
  }

  add = ()=>{
    // this.setState({count: this.state.count +1});
    this.setState((current)=>({count:current.count+1}));
    console.log(this.state.data)
  }
  
  minus = ()=>{
    // this.setState({count: this.state.count -1});
    this.setState((current)=>({count:current.count-1}));
  }
  render(){// render는 옵션이 아닌 필수이다, 이유는 그려야 하기 때문이다.
    console.log("render 호출됨")
    return (

      <div>
        <h1>{this.state.name}의 포인트 점수 : {this.state.count}</h1>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;
