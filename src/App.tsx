import React, {useState} from "react";
import './App.css';
import BoardList from "./component/BoardList.tsx";

// 1. 인풋창이 있고, 버튼이 있다.
// 2. 인풋창에 값을 입력하고, 버튼을 클릭하면 아이템이 추가된다.
// 3. 아이템 삭제버튼을 누르면 삭제가 가능하다.
const App:React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [todoList, setTodoList] = useState<string[]>([]);

    const addItem = () => {
        setTodoList([...todoList, inputValue]);
    }

    return (
        <main>
            <input type="text" onChange={(event) => setInputValue(event.target.value)}
            onKeyDown={(event) => {if(event.key === 'Enter') addItem()}}
            ></input>
            <button onClick={addItem}>추가</button>
            <BoardList todoList={todoList} />
        </main>
    )
}

export default App