import './App.css';
import PropTypes from 'prop-types';
// 상위 -> 하위로 데이터를 전달하는 방법이 프로퍼티라고 한다.
// 하위 컴포넌트라고 함
function Food({name, image, rating }) {
  
  const tempStyle={
      width:"30%"
  }
  // console.log(props.a)
  // let {a} = props;
  // c : boolean타입은 출력하지 않는다.
  return (
    <div>
      <h2>I like {name}  </h2>
      <h4>{rating}/5.0</h4>
      <img src={image} style={tempStyle} />
    </div>

  )
}

const foodILike = [
  {
    name:"김치",
    image:"https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png",
    rating:5
  },
  {
    name:"삼겹살",
    image:"https://src.hidoc.co.kr/image/lib/2021/8/27/1630049987719_0.jpg",
    rating:4
  },
  {
    name:"쭈꾸미",
    image:"https://static.wtable.co.kr/image/production/service/recipe/707/d403b168-c865-4b5e-9afb-58c48e5feaec.jpg",
    rating :3
  },
  {
    name:"불고기",
    image:"https://recipe1.ezmember.co.kr/cache/recipe/2019/03/03/11baafbe81803965b17c3ab42a5992cb1.jpg",
    rating:2
  },
  {
    name:"비빔밥",
    image:"https://i.namu.wiki/i/dgjXU86ae29hDSCza-L0GZlFt3T9lRx1Ug9cKtqWSzMzs7Cd0CN2SzyLFEJcHVFviKcxAlIwxcllT9s2sck0RA.jpg",
    rating:1
  },
];

//const renderFood = (dish , index) => <Food name={dish.name} key={index} picture={dish.image}/>;


console.log(foodILike)
// 상위 컴포넌트라고 함
// {}중괄호: 자바스크립트의 값을 출력하는결과 값을 출력할때 사용한다.
function App() {
  return (
    <div className="App">
     <h1>Hello</h1>
     
     {foodILike.map((dish,index)=><Food name={dish.name} image={dish.image} key={index} rating={dish.rating}/>)}
    </div>
  );
}

Food.propTypes={
  name:PropTypes.string.isRequired,
  image:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired
}
export default App;
