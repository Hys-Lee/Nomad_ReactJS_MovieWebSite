// node.js때문에 파일을 나눠서 관리할 수 있는 것이라는데.
// nodejs대해서도 공부좀 해봐야 할 듯.
import { useState, useEffect } from "react";
//import Button from "./Button";

////  여기서 부터 Effect에 대해 배울거임. 
///    state를 사용하면 state가 있는 component를 state가 바뀔 때 마다 re-rendering하는데,
/// 어떤 것들은 re-rendering하지 않고, 처음 1번만 render시키고 싶을 때
/// effect가 사용된다. -> memo랑 뭔 차이지

function Hello(){
  useEffect(()=>{
    console.log("hi");
    return (()=>{console.log("destroyed");});
  },[]); 
  
  return <h1>Hello</h1>

}

function EffectPractice() {
  const [counter, setValue] = useState(0);
  const [searchInput, setInput] = useState("");
  const [isshowed, setShow] = useState(false);
  const onClick = ()=>setValue((counter)=>counter+1);
  const forEffect=()=>{
    console.log("useEffect makes this run only once at the first time");
  }
  useEffect(forEffect,[]); // 변화하는 값이 없으니 맨 처음에만 실행됨.

  useEffect(()=>{
    if(searchInput!==""){
      console.log("Search For "+searchInput);
    }
  },[counter, searchInput]); /// 변화하는 값을 []안에 넣어주면 그 값들 중 1개라도 변할 때 마다 실행함.

  const onChange = (event)=>setInput(event.target.value);

  
  const showAndHide = ()=>setShow(!isshowed);
  
  return (
    <div>
      <h1>Welcome!</h1>
      {isshowed?<Hello />:null}
      <button onClick={showAndHide}>{isshowed?"Hide":"Show"}</button>
      <br></br>
      <input value={searchInput} type="text" placeholder="Search here" onChange={onChange}/>
      <p>{counter}</p>
      
      <button onClick={onClick}>Count</button>

    </div>
  );
}

export default EffectPractice;
