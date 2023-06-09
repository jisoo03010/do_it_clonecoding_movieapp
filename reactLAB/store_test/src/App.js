import React from "react"
import './App.css'
import countStore from './countStore'
import {observer} from 'mobx-react'
class App extends React.Component{
  
  // state={
  //   count: 0,
  // }

  // add = ()=>{
  //   // this.setState({count: this.state.count +1});
  //   this.setState((current)=>({count:current.count+1}));
  //   console.log(this.state.data)
  // }
  
  // minus = ()=>{
  //   // this.setState({count: this.state.count -1});
  //   this.setState((current)=>({count:current.count-1}));
  // }
  handlePlus=()=>{
    countStore.plus(5);
  }


  render(){
    console.log("render 호출됨")
    return (
      <div className="App">
        <h1> number  : {countStore.count}</h1>
        <button onClick={this.handlePlus}>Add</button>
        <button onClick={countStore.minus}>Minus</button>
      </div>
    )
  };
}

export default observer(App) ; // 자기 자신을 감시자로 등록함 