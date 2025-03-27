import React from "react";

interface OwnProps {
    item: string
}
const BoardItem:React.FC<OwnProps> = ({item}) => {
    const deleteItem = () => {
        alert('삭제');
    }
    return (
        <div className="todo-item">
            <div>{item}</div>
            <button onClick={deleteItem}>삭제</button>
        </div>
    )
}

export default BoardItem