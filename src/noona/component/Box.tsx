import React from 'react';

interface OwnProps {
    name:string,
    num:number
}

const Box:React.FC<OwnProps> = ({name, num}) => {
    const clickMe = () => {
       alert('clicked');
    }
    return (
        <div className="box">
            Box {num} {name}
            <button onClick={clickMe}>Click</button>
        </div>
    )
}

export default Box