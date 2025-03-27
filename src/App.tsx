import React, {useRef, useState} from "react";
import './App.css';
import BoardList from "./component/BoardList.tsx";
import Search from "./component/Search.tsx";
import ScrollToTop from "./component/ScrollToTop.tsx";

// 1. 인풋창이 있고, 버튼이 있다.
// 2. 인풋창에 값을 입력하고, 버튼을 클릭하면 아이템이 추가된다.
// 3. 아이템 삭제버튼을 누르면 삭제가 가능하다.
const App:React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [todoList, setTodoList] = useState<string[]>([]);

    const addItem = () => {
        setTodoList([...todoList, inputValue]);
    }

    // useState + 변수 = useRef
    // useRef는 값이 바뀌어도 리렌더링이 일어나지 않고, 값을 유지할 수 있다.
    // 변수처럼 값을 저장할 필요가 있는 변수, 단 UI에는 보여줄 필요가 없는 변수
    const [stateCount, setStateCount] = useState<number>(0);
    let originCount = 0;
    const refCount = useRef<number>(0);
    return (
        <main>
            <input type="text" onChange={(event) => setInputValue(event.target.value)}
            onKeyDown={(event) => {if(event.key === 'Enter') addItem()}}
            ></input>
            <button onClick={addItem}>추가</button>
            <BoardList todoList={todoList} />

            <div>state : {stateCount}</div>
            <div>변수 : {originCount}</div>
            <div>ref : {refCount.current}</div>
            <button onClick={() => {setStateCount(stateCount + 1);}}>state up</button>
            <button onClick={() => {originCount++; console.log('origin', originCount)}}>변수 up</button>
            <button onClick={() => {refCount.current++;
                console.log('ref', refCount.current)}}>ref up</button>

            // useRef 변수 저장
            <Search />

            // useRef DOM 접근
            <ScrollToTop />
        </main>
    )
}

export default App