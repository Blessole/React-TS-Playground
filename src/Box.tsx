import React from 'react';

const Box:React.FC = (props) => {
    const clickMe = () => {
       alert('clicked');
    }
    return (
        <div className="box">
            Box {props.num} {props.name}
            <button onClick={clickMe}>Click</button>
        </div>
    )
}

export default Box