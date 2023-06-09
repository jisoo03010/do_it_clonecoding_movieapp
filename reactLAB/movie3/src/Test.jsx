import {useEffect, useState } from "react";

function dbAccess() {
    console.log("dbAccess 호출됨")
    return ['홍길동'];
}

// <input value={name}/>  : 기본 입력값을 주었지만 입력되지 않는다.
// 해결 : onchange를 통해서 변경해야한다.

function Test() {
    const [input, setInput ] = useState();

    // dbAccess()를 넣어도 되고,
    // 함수 이름 dbAccess만 입력해도 정상적으로 동작하는 이유가 뭘까?
    // 함수 이름 호출하면 함수가 한번만 호출되고,
    // 함수 + ()포함해서 하면 함수 호출이 반복해서 호출된다. !! 
    const [name, setName ] = useState(dbAccess);


    const inputValueChange =(e)=>{ // 이벤트가 일어나는어떠한 이벤트라도 출력하게 된다.
        console.log(e.target.value) // 한 글자만 적용되는이유 : relandering되기 떄문
        setInput(e.target.value)
    }

    const buttonHandler =()=>{  
        setName((currentNames)=>{
            return [...currentNames, input];
        });
    }

    /*
    
    useEffect함수가 포함된 컴포넌트가 처음 마운트되거나 컴포넌트가 리렌더링 될 때, 
    또는 선언된 변수의 값이 변경되거나 redux store의 값이 변경될 때 실행할 구문들을 정의해놓은 함수이다.
    */
    useEffect(()=>{
        console.log("useEffect 호출됨")
        return ()=>{
            console.log("자원 해제됨")
        }
    }, [input]);

    console.log("렌더링 됨")
    //  {/* 버튼 클릭시 p태그를 생성하고 그 안에 text넣기 */}
    return (
        <div>
            <input value={input} onChange={inputValueChange}/> 
            <button onClick={buttonHandler}>입력</button>
            {name.map((name, index)=>{
                return <p key={index}>{name}</p>
            })}
        </div>
    );
}

export default Test;