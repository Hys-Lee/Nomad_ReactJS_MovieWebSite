
import { useState } from "react";

/*
넣을 기능:
input태그-> 입력
button태그-> 클릭
form태그 -> submit
submit: todoList만들어 저장(누적). + input안 내용 refresh(제거)
*/


function Todos(){
    console.log("!!!!");
    const [todoInput, setInput] = useState("");
    const [todoList, setTodoList] = useState([]);

    const submitTodo=(event)=>{
        
        event.preventDefault();
        
        
        const newTodo = event.target[0].value
        if (newTodo==="") return;
        console.log(newTodo);
        
        // setTodoList((todoList)=>[newTodo,...todoList])
        setTodoList(function(todoList){
            return [newTodo,...todoList];
        } )
        // console.log(todoList); /// 이러니까 console이 setTodoList보다 먼저 비동기로 실행되는데.
        setInput("");
    }
    console.log(todoList); /// 그래서 위 함수안에 안넣고 밖으로 뺌.
    const inputChange = (event)=>{
        setInput(event.target.value);
    }

    return(
        <div>
            <h1>My Todos ({todoList.length})</h1>
            <form onChange={inputChange}  onSubmit={submitTodo}>
                <input onChange={inputChange} value = {todoInput} placeholder="Input a todo"></input>
                <button  type="submit">Insert!</button>
            </form>
            <hr />
            <ul>
                {todoList.map((item)=>
                    <li>{item}</li> /// jsx단에서 map이용, {}통해
                )} 
            </ul>
        </div>
    );
}
export default Todos;