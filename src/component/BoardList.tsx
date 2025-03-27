import React from "react";
import BoardItem from "./BoardItem.tsx";

interface OwnProps {
    todoList: string[]
}
const BoardList:React.FC<OwnProps> = ({todoList}) => {
    console.log('todoList', todoList);
    return (
        <div>
            <h1>TodoList</h1>
            {todoList.map((item,index) => <BoardItem key={index} item={item} />)}
        </div>
    )
}

export default BoardList